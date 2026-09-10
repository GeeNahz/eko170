/**
 * EKO170 form-submission relay.
 *
 * Setup:
 * 1. Create (or open) the Google Sheet that should collect submissions.
 * 2. Extensions -> Apps Script. Delete any starter code, paste this file.
 * 3. Deploy -> New deployment -> type "Web app".
 *    - Execute as: Me
 *    - Who has access: Anyone
 * 4. Copy the resulting Web App URL and give it to the site as the
 *    GOOGLE_SHEETS_WEBHOOK_URL environment variable.
 *
 * Each form POSTs { formType, ...fields }. formType selects the tab
 * (sheet) the row is appended to; a tab is created automatically, with a
 * header row taken from the keys of the first submission of that type, the
 * first time that formType is seen.
 */

// Must match the SheetFormType union in
// src/features/base/lib/server/sheets-client.ts.
var ALLOWED_SHEET_NAMES = ["registrations", "partners", "volunteers", "route-votes"];

function doPost(e) {
  var payload = JSON.parse(e.postData.contents);
  var sheetName = payload.formType;

  if (ALLOWED_SHEET_NAMES.indexOf(sheetName) === -1) {
    return ContentService.createTextOutput(
      JSON.stringify({ ok: false, error: "Unknown formType: " + sheetName }),
    ).setMimeType(ContentService.MimeType.JSON);
  }

  var fields = Object.assign({}, payload);
  delete fields.formType;
  fields.submittedAt = new Date().toISOString();

  var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = spreadsheet.getSheetByName(sheetName);
  var headers = Object.keys(fields);

  if (!sheet) {
    sheet = spreadsheet.insertSheet(sheetName);
    sheet.appendRow(headers);
  }

  var existingHeaders = sheet
    .getRange(1, 1, 1, Math.max(sheet.getLastColumn(), 1))
    .getValues()[0];
  var row = headers.map(function (key) {
    return fields[key];
  });

  // If a submission ever carries a field the header row doesn't have yet,
  // extend the header row rather than silently dropping the value.
  var missing = headers.filter(function (key) {
    return existingHeaders.indexOf(key) === -1;
  });
  if (missing.length > 0) {
    sheet
      .getRange(1, existingHeaders.length + 1, 1, missing.length)
      .setValues([missing]);
    existingHeaders = existingHeaders.concat(missing);
  }

  var orderedRow = existingHeaders.map(function (key) {
    var idx = headers.indexOf(key);
    return idx === -1 ? "" : row[idx];
  });
  sheet.appendRow(orderedRow);

  return ContentService.createTextOutput(
    JSON.stringify({ ok: true }),
  ).setMimeType(ContentService.MimeType.JSON);
}
