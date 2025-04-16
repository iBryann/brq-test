import styled from "styled-components";

export const TableContainer = styled.div`
  overflow-x: auto;
  border-radius: 20px;
  padding-bottom: 8px;
  transition: width 0.3s;

  @supports (-webkit-appearance: none) {
    &::-webkit-scrollbar {
      width: 8px;
      height: 8px;
    }
    &::-webkit-scrollbar-track {
      background: #f1f1f1;
    }
    &::-webkit-scrollbar-thumb {
      background: #ccc;
      &:hover {
        background: #aaa;
      }
    }
  }

  table {
    width: 100%;
    border-collapse: separate;
    border-spacing: 0;

    th,
    td {
      vertical-align: middle;
      padding: 18px 24px;
      text-align: center;
      border-right: 1px solid #e6e6e6;
      border-bottom: 1px solid #e6e6e6;
      background-color: #fff;
    }

    thead {
      tr {
        th {
          .t-table-cell-content {
            background-color: #d1e2ff;

            h5 {
              color: #00348a !important;
            }

            :first-child {
              color: #00348a;
              white-space: nowrap;
            }

            button {
              display: flex;
              gap: 10px;
              align-items: center;

              :first-child {
                white-space: nowrap;
              }

              svg {
                &[data-state="disabled"] path {
                  opacity: 0.5;
                }

                &[data-state="desc"] path {
                  &:first-child {
                    opacity: 0.5;
                  }
                  &:last-child {
                    animation: ordering 0.2s forwards;
                  }
                }

                &[data-state="asc"] path {
                  &:first-child {
                    animation: ordering 0.2s forwards;
                  }
                  &:last-child {
                    opacity: 0.5;
                  }
                }

                @keyframes ordering {
                  0% {
                    transform: scale(1);
                  }
                  50% {
                    transform: scale(1.1);
                  }
                  100% {
                    transform: scale(1);
                  }
                }
              }
            }
          }
        }

        &:first-child {
          th:first-child .t-table-cell-content {
            border-top-left-radius: 20px;
          }

          th:last-child .t-table-cell-content {
            border-top-right-radius: 20px;
          }
        }
      }
    }

    thead th {
      background-color: #d1e2ff;
      color: #00348a;
      font-weight: bold;
      white-space: nowrap;
    }

    tbody tr:last-child td:first-child {
      border-bottom-left-radius: 20px;
    }

    tbody tr:last-child td:last-child {
      border-bottom-right-radius: 20px;
    }

    &:first-child {
      th:first-child {
        border-top-left-radius: 20px;
      }

      th:last-child {
        border-top-right-radius: 20px;
      }
    }

    tbody tr:hover td {
      background-color: #f1f6fd;
    }
  }
`;
