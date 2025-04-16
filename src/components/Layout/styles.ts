import styled from "styled-components";

export const LayoutContainer = styled.div<{ $showMenu: boolean }>`
  .navbar {
    z-index: 1;
    position: fixed;
    top: 0;
    left: ${({ $showMenu }) => ($showMenu ? "0" : "-100%")};
    display: flex;
    gap: 3rem;
    flex-direction: column;
    height: 100vh;
    width: min(100%, 300px);
    padding: 2rem 1rem;
    background-color: ${({ theme }) => theme.colors.background.secondary};
    box-shadow: 4px 0px 4px rgba(0, 0, 0, 0.2);
    transition: left 0.2s ease-in-out;

    &-close {
      position: absolute;
      right: 1rem;
      top: 1rem;
      background-color: transparent;
      border: none;
      padding: 0;
      cursor: pointer;
      transition: transform 0.2s ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }

    &-logo {
      display: flex;
      flex-direction: column;
      align-items: center;

      img {
        width: 110px;
      }

      h2 {
        font-size: 1.25rem;
        font-weight: 500;
        line-height: 1.75rem;
        color: ${({ theme }) => theme.colors.text.primary};
      }
    }

    &-menu {
      display: flex;
      flex-direction: column;

      li button {
        width: 100%;
        display: flex;
        gap: 1rem;
        align-items: center;
        padding: 0.75rem 1.25rem;
        color: ${({ theme }) => theme.colors.button.menu.text};
        background-color: ${({ theme }) => theme.colors.button.menu.background};
        border: none;
        border-radius: 0.5rem;
        font-size: 0.87rem;
        font-weight: 500;
        line-height: 1.25;
        cursor: pointer;

        &:hover {
          background-color: ${({ theme }) => theme.colors.button.menu.hover};
        }
      }
    }
  }

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
    min-height: calc(100vh - 4rem);
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
