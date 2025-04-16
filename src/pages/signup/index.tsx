import { useSelector, useDispatch } from "react-redux";

import BRQIcon from "src/assets/logo-signup.svg";
import { StoreType } from "src/store";
import { toggleTheme } from "src/store/reducers/theme";
import { Form } from "./Form";
import { SignUpContainer } from "./styles";

export const SignUp = () => {
  const { mode } = useSelector((state: StoreType) => state.theme);
  const { name } = useSelector((state: StoreType) => state.user);
  const dispatch = useDispatch();

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
