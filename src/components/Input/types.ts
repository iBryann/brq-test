import { InputHTMLAttributes } from "react";

import { IFieldsetInputProps } from "../Fieldset/types";

export interface IInput
  extends InputHTMLAttributes<HTMLInputElement>,
    IFieldsetInputProps {}
