import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

import { Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const CardAudi = ({ headline, subheadline, url }) => {
  useDeviceContext(tw);

  return (
    <TouchableOpacity
      style={tw.style(
        "bg-black dark:bg-white rounded-none w-80 h-100 flex flex-col"
      )}
      onPress={() => {
        console.log("pressed");
      }}
    >
      <Image
        source={{
          uri:
            url ||
            "https://sleepymeerk.at/wp-content/uploads/2018/02/ich_sw2.jpg",
        }}
        style={tw.style("w-full min-h-250px flex-auto")}
      />
      <TouchableOpacity
        style={tw.style("mb-10px px-20px py-20px bg-black dark:bg-white")}
        onPress={() => {
          console.log("pressed2");
        }}
      >
        <Text
          style={tw.style("text-white dark:text-black text-base font-bold")}
        >
          {headline}
        </Text>
        <Text style={tw.style("text-white dark:text-black text-sm")}>
          {subheadline}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

export default CardAudi;
