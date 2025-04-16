import { TRow } from './types';

function numberSort(rows: TRow[], ascending: boolean, fieldId: string) {
  const sortedRows = rows.sort((a: TRow, b: TRow) =>
    ascending
      ? a[fieldId] - b[fieldId]
      : b[fieldId] - a[fieldId]
  );

  return [...sortedRows];
}

function stringSort(rows: TRow[], ascending: boolean, fieldId: string) {
  const sortedRows = rows.sort((a: TRow, b: TRow) => {
    if (a[fieldId] > b[fieldId]) return ascending ? 1 : -1;
    if (b[fieldId] > a[fieldId]) return ascending ? -1 : 1;
    return 0;
  });

  return [...sortedRows];
}

function dateSort(rows: TRow[], ascending: boolean, fieldId: string) {
  const sortedRows = rows.sort((a: TRow, b: TRow) =>
    ascending
      ? a[fieldId].getTime() - b[fieldId].getTime()
      : b[fieldId].getTime() - a[fieldId].getTime()
  );

  return [...sortedRows];
}

export const SORT = {
  number: numberSort,
  boolean: numberSort,
  string: stringSort,
  date: dateSort,
};