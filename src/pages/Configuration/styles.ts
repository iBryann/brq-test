import styled from "styled-components";

export const ConfigurationContainer = styled.div`
  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0.75rem 2rem 0.75rem 1.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.2);

    .header-title {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        background-color: transparent;
        border: none;
        padding: 0;
        cursor: pointer;
        transition: transform 0.2s ease-in-out;

        &:hover {
          transform: scale(1.1);
        }
      }

      h2 {
        font-weight: 500;
        font-size: 1.25rem;
        line-height: 1.75rem;
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }

    .header-user {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      img {
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
      }

      span {
        font-size: 16px;
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }
  }

  .body {
    padding: 2rem;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    .header {
      padding: 0.75rem 1rem 0.75rem 0.5rem;
    }

    .body {
      padding: 2rem 1rem;
    }
  }
`;
