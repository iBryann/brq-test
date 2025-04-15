import { useSelector, useDispatch } from "react-redux";

import BRQIcon from "src/assets/logo-signup.svg";
import { StoreType } from "src/store";
import { SignUpContainer } from "./styles";
import { toggleTheme } from "src/store/reducers/theme";
import { Form } from "./Form";
import { useEffect } from "react";
import { useNavigate } from "react-router";

export const SignUp = () => {
  const { mode } = useSelector((state: StoreType) => state.theme);
  const { name } = useSelector((state: StoreType) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem("brq:isAuthenticated")) {
      navigate("/configuration");
    }
  }, []);

  return (
    <SignUpContainer>
      <div className="brand">
        <img src={BRQIcon} alt="BRQ" />

        <h2>BRQ Exchange - {name}</h2>

        <button onClick={() => dispatch(toggleTheme())} type="button">
          Toggle - {mode}
        </button>
      </div>

      <div className="form-wrapper">
        <Form />
      </div>
    </SignUpContainer>
  );
};
