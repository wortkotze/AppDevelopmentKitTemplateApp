import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

import { ScrollView, View } from "react-native";

const CarusselAudi = ({ children }) => {
  useDeviceContext(tw);

  return (
    <ScrollView horizontal style={tw.style("my-20px h-100")}>
      {children.map((child, index) => {
        return (
          <View key={"car-index-" + index} style={tw.style("mx-10px")}>
            {child}
          </View>
        );
      })}
    </ScrollView>
  );
};

export default CarusselAudi;
