import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

import { View } from "react-native";

const SpacerAudi = ({ space }) => {
  useDeviceContext(tw);

  return <View style={tw.style("mb-" + space + "px")} />;
};

export default SpacerAudi;
