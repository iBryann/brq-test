import { memo, useMemo } from "react";
import { format } from "date-fns";

import { ITableData } from "./types";

export const TableData = memo(({ columns, column, row }: ITableData) => {
  const dateFormat = useMemo(
    () => columns.find((col) => col.id === column)?.format,
    [columns, column]
  );

  return (
    <td>
      <div className="t-table-cell-content">
        {dateFormat
          ? format(row[column], dateFormat)
          : typeof row[column] === "boolean"
          ? String(row[column])
          : row[column]}
      </div>
    </td>
  );
});
