import styled from "styled-components";

export const SignUpContainer = styled.main`
  height: 100vh;
  display: flex;

  > * {
    display: flex;
    flex-direction: column;
  }

  .brand {
    flex: 1;
    align-items: center;
    justify-content: center;
    background-color: ${({ theme }) => theme.colors.background.primary};

    img {
    }

    h2 {
      font-weight: 500;
      font-size: 20px;
      line-height: 28px;
      text-align: center;
      color: #ffffff;
    }
  }

  .form-wrapper {
    justify-content: center;
    width: 60vw;
    padding: 2rem;
    background-color: ${({ theme }) => theme.colors.background.secondary};

    .form {
      max-width: 450px;

      h1 {
        font-weight: 400;
        font-size: 3.5rem;
        letter-spacing: -0.25px;
        color: ${({ theme }) => theme.colors.text.primary};
        margin-bottom: 4rem;
      }

      .button-wrapper {
        display: flex;
        justify-content: flex-end;
        margin-top: 2rem;
      }
    }
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;

    .brand {
      flex: none;
      padding: 2rem 0;
    }

    .form-wrapper {
      width: 100%;

      .form {
        max-width: none;

        h1 {
          font-size: 3rem;
        }
      }
    }
  }
`;
