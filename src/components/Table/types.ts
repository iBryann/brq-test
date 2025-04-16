import { JSX, TableHTMLAttributes } from "react";

export type TColumn = {
  id: string;
  label: string;
  format?: string;
  sortable: boolean;
};

export type TRow = {
  [key: string]: any;
};

export type TRowKeys = keyof TRow;

export interface TableProps extends TableHTMLAttributes<HTMLTableElement> {
  columns: TColumn[];
  rows: TRow[];
  controlColumnName?: string;
  hideColumns?: string[];
  controls?: (row: TRow) => JSX.Element;
}
