import { useRef, useState } from "react";

import { SORT } from "./functions";
import { TableData } from "./components/TableData";
import { TableContainer } from "./styles";
import { TRow, TableProps } from "./types";
import { Icon } from "../icons";

type TSortOptions = keyof typeof SORT;

export const Table = ({
  columns,
  rows,
  hideColumns = [],
  ...props
}: TableProps) => {
  const sortConfig = useRef({
    ascending: true,
    lastField: "",
    order: "",
  });
  const [sortedRows, setSortedRows] = useState<TRow[]>(rows);

  function handleSort(field: string) {
    const config = sortConfig.current;
    let { ascending, lastField } = config;

    if (lastField === "") ascending = false;

    if (lastField === field) {
      if (ascending) {
        setSortedRows(rows);
        sortConfig.current = {
          order: "",
          lastField: "",
          ascending: true,
        };
      } else {
        sortList(field, false);
        sortConfig.current = {
          order: "desc",
          lastField: field,
          ascending: true,
        };
      }
    } else {
      sortList(field, true);
      sortConfig.current = {
        order: "asc",
        lastField: field,
        ascending: false,
      };
    }
  }

  function sortList(field: string, ascending: boolean) {
    const row = sortedRows[0];
    const columnType =
      row[field] instanceof Date ? "date" : (typeof row[field] as TSortOptions);
    const sortFunction = SORT[columnType];

    if (row && sortFunction) {
      const sortedList = sortFunction(sortedRows, ascending, field);

      setSortedRows(sortedList);
    }
  }

  return (
    <TableContainer className="t-table-root">
      <table {...props}>
        <thead>
          <tr>
            {columns.map(({ id, label, sortable }) => (
              <th key={id}>
                <div className="t-table-cell-content">
                  <button
                    type="button"
                    onClick={() => handleSort(id)}
                    style={{ cursor: sortable ? "pointer" : "initial" }}
                  >
                    <div>{label}</div>

                    {sortable && (
                      <Icon
                        name="ChevronTopDown"
                        color="#00348A"
                        size="sm"
                        data-state={
                          sortConfig.current.order &&
                          sortConfig.current.lastField !== id
                            ? "disabled"
                            : sortConfig.current.order
                        }
                      />
                    )}
                  </button>
                </div>
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {!sortedRows.length && (
            <tr className="t-table-empty">
              <td>
                <div className="t-table-cell-content">
                  <div>A lista está vazia!</div>
                </div>
              </td>
            </tr>
          )}

          {sortedRows.map((row) => (
            <tr key={row.id}>
              {Object.keys(row)
                .filter((col) => !hideColumns.includes(col))
                .map((key) => (
                  <TableData
                    key={key}
                    column={key}
                    columns={columns}
                    row={row}
                  />
                ))}
            </tr>
          ))}
        </tbody>
      </table>
    </TableContainer>
  );
};
