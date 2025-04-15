import { IInput } from "./types";
import { SelectContainer } from "./styles";
import { Fieldset } from "../Fieldset";

export const Select = ({ error, label = "", children, ...props }: IInput) => {
  return (
    <Fieldset error={error} label={label} required={props.required}>
      <SelectContainer {...props}>{children}</SelectContainer>
    </Fieldset>
  );
};
