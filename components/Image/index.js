import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

import { Image } from "react-native";

const ImageAudi = ({ url }) => {
  useDeviceContext(tw);

  return <Image style={tw.style(" w-full h-250px")} source={{ uri: url }} />;
};

export default ImageAudi;
