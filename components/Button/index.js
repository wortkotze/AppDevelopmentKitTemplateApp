import { TouchableOpacity, Text } from "react-native";
import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

const ButtonAudi = ({ size, variant, title, disabled, fullwidth }) => {
  useDeviceContext(tw);

  let styleFullWidth = fullwidth ? " w-full" : " ";

  let styleFontsize = size === "medium" ? " text-base" : " text-xs";
  let styleFontcolor =
    variant === "primary"
      ? "text-white dark:text-black"
      : "text-black dark:text-white";
  let styleWidth = size === "medium" ? " min-w-144px" : " min-w-108px";

  let styleBackground =
    variant === "primary"
      ? " bg-black dark:bg-white"
      : " bg-white dark:bg-black";

  let styleBordercolor = disabled
    ? " border-grey-30 dark:border-grey-60"
    : " border-black dark:border-white";

  //disabled change
  if (disabled) {
    styleBackground =
      variant === "primary"
        ? " bg-grey-30 dark:bg-grey-60"
        : " bg-white dark:bg-black";

    styleFontcolor =
      variant === "primary"
        ? "text-white dark:text-black"
        : "text-grey-30 dark:text-grey-60";
  }

  let stylePressable =
    "px-32px py-16px rounded-none border" +
    styleBordercolor +
    styleWidth +
    styleBackground +
    styleFullWidth;

  let styleText =
    variant === "primary"
      ? styleFontcolor + styleFontsize
      : styleFontcolor + styleFontsize;

  return (
    <TouchableOpacity
      disabled={disabled}
      style={tw.style(stylePressable + " flex self-start")}
    >
      <Text style={tw.style(styleText + " self-start")}>{title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonAudi;
