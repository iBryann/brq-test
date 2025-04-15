import { IFieldset } from "./types";
import { FieldsetContainer } from "./styles";

export const Fieldset = ({
  children,
  label = "",
  error,
  ...props
}: IFieldset) => {
  return (
    <FieldsetContainer className="fieldset">
      <label className="fieldset-label">
        {label && (
          <span className="fieldset-label">
            {label}
            {props.required && "*"}
          </span>
        )}

        {children}
      </label>

      {error && <span className="fieldset-error">{error.message}</span>}
    </FieldsetContainer>
  );
};
