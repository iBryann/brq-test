import "styled-components";

import { ITheme } from "src/store/reducers/theme/types";

declare module "styled-components" {
  export interface DefaultTheme extends ITheme {}
}
