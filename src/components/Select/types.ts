import { SelectHTMLAttributes } from "react";

import { IFieldsetInputProps } from "../Fieldset/types";

export interface IInput
  extends SelectHTMLAttributes<HTMLSelectElement>,
    IFieldsetInputProps {}
