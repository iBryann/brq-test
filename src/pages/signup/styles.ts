import styled from "styled-components";

export const SignupContainer = styled.main`
  height: 100vh;
  display: flex;

  > {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .brand {
    overflow: hidden;
    position: relative;
    flex: 1;
    background: red;

    .brand-video-bg {
      position: absolute;
      top: 50%;
      left: 50%;
      height: 101%;
      transform: translate(-50%, -50%);
    }

    .brand-content {
      z-index: 1;
      position: relative;
      background-color: rgba(0, 0, 0, 0.6);
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;

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
  }

  .signup {
    background: blue;
    width: 60vw;
  }
`;
