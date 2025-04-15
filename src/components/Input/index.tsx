import { IInput } from "./types";
import { Fieldset } from "../Fieldset";
import { InputContainer } from "./styles";

export const Input = ({ error, label = "", ...props }: IInput) => {
  return (
    <Fieldset error={error} label={label} required={props.required}>
      <InputContainer type="text" {...props} />
    </Fieldset>
  );
};
