import type { SizeGuide } from "../types";

export function SizeGuideTable({ guide }: { guide: SizeGuide }) {
  return (
    <div>
      <div className="font-sans text-sm font-semibold text-brand-teal">
        {guide.label}
      </div>
      {guide.note && (
        <div className="mb-2 font-sans text-xs text-gray-400">{guide.note}</div>
      )}
      <div className="overflow-x-auto rounded-lg border border-brand-cream-border">
        <table className="w-full min-w-[420px] border-collapse text-left font-sans text-xs">
          <thead>
            <tr className="bg-brand-cream">
              <th className="px-3 py-2 font-semibold text-gray-500 uppercase">
                Size
              </th>
              {guide.columns.map((column) => (
                <th
                  key={column}
                  className="px-3 py-2 font-semibold text-gray-500 uppercase"
                >
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {guide.rows.map((row) => (
              <tr key={row.size} className="border-t border-brand-cream-border">
                <td className="px-3 py-2 font-semibold text-brand-teal">
                  {row.size}
                </td>
                {row.values.map((value, i) => (
                  <td key={guide.columns[i]} className="px-3 py-2 text-gray-600">
                    {value}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
