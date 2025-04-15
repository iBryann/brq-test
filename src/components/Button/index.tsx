import { IButton } from "./types";
import { ButtonContainer } from "./styles";

export const Button = ({ ...props }: IButton) => {
  return <ButtonContainer type="button" {...props} />;
};
