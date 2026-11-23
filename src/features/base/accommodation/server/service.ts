import "server-only";
import {
  sendAccommodationBookingConfirmation,
  sendAccommodationBookingNotification,
} from "../../lib/server/email-client";
import { postToSheet } from "../../lib/server/sheets-client";
import type { AccommodationFormValues, AccommodationSuccess } from "../types";

export const AccommodationService = {
  async submitBooking(values: AccommodationFormValues): Promise<AccommodationSuccess> {
    await postToSheet("accommodation-bookings", { ...values });
    await sendAccommodationBookingNotification({
      guestName: values.name,
      address: values.address,
      email: values.email,
      phone: values.phone,
    });
    await sendAccommodationBookingConfirmation({
      to: values.email,
      name: values.name,
    });
    return { name: values.name };
  },
};
