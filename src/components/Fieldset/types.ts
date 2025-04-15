import { HTMLAttributes } from "react";
import { FieldError } from "react-hook-form";

export interface IFieldsetInputProps {
  error?: FieldError | undefined;
  label?: string;
}

export interface IFieldset
  extends HTMLAttributes<HTMLFieldSetElement>,
    IFieldsetInputProps {
  required?: boolean | undefined;
}
