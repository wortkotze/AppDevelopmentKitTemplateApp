import { useDeviceContext } from "twrnc";
import tw from "lib/tailwind";

import Markdown from "react-native-markdown-display";
import { StyleSheet } from "react-native";

const MarkdownAudi = ({ copy }) => {
  useDeviceContext(tw);

  //https://github.com/jonasmerlin/react-native-markdown-display/
  const styles = StyleSheet.create({
    heading1: tw.style("text-black dark:text-white"),
    heading2: tw.style("text-black dark:text-white"),
    heading3: tw.style("text-black dark:text-white"),
    heading4: tw.style("text-black dark:text-white"),
    heading5: tw.style("text-black dark:text-white"),
    heading6: tw.style("text-black dark:text-white"),
  });

  return <Markdown style={styles}>{copy}</Markdown>;
};

export default MarkdownAudi;
