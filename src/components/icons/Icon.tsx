import { IconProps, ICON_ZOOM, ICONS, SIZE_ENUM } from "./types";
import { useSelector } from "react-redux";
import { StoreType } from "src/store";

export const Icon = ({
  color,
  size = SIZE_ENUM.MEDIUM,
  name,
  style,
  ...props
}: IconProps) => {
  const { colors } = useSelector((state: StoreType) => state.theme.theme);
  const IconChild = ICONS[name];

  return (
    <svg
      fill="none"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      style={{ zoom: ICON_ZOOM[size], ...style }}
      {...props}
    >
      <IconChild color={color || colors.text.primary} />
    </svg>
  );
};
