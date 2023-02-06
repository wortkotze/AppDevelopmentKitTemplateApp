import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View, ScrollView } from "react-native";

import Button from "components/Button";

//import ButtonTest from "appdevelopmentkitlib";

//console.log("ButtonTest", ButtonTest);

import Card from "components/Card";
import Carussel from "components/Carussel";
import Markdown from "components/Markdown";
import Image from "components/Image";

import tw from "lib/tailwind";
import { useDeviceContext, useAppColorScheme } from "twrnc";

export default function Stephan() {
  useDeviceContext(tw);
  const [colorScheme, toggleColorScheme, setColorScheme] =
    useAppColorScheme(tw);

  const copy = `
# Hello this is a title

This is some text with **BOLD!**
`;

  return (
    <SafeAreaView
      style={{
        paddingTop: StatusBar.currentHeight,
      }}
    >
      <ScrollView style={tw.style("px-5 flex")}>
        <Button variant="primary" size="medium" title="Primary action" />
        <View style={tw.style("mb-50px")} />
        <Button
          variant="primary"
          size="medium"
          title="Primary action"
          disabled
        />
        <View style={tw.style("mb-50px")} />
        <Button variant="secondary" size="small" title="Secondary action" />
        <View style={tw.style("mb-50px")} />
        <Button
          variant="secondary"
          size="small"
          title="Secondary action"
          disabled
        />
        <View style={tw.style("mb-50px")} />
        <Button
          variant="primary"
          size="medium"
          title="Primary action 1"
          fullwidth
        />
        <View style={tw.style("mb-50px")} />
        <Button
          variant="secondary"
          size="medium"
          title="Secondary action"
          fullwidth
        />
        <View style={tw.style("mb-50px")} />
        <Card headline="headline" subheadline="subheadline" />
        <View style={tw.style("mb-50px")} />

        <Carussel>
          <Card headline="headline" subheadline="subheadline" />
          <Card headline="headline" subheadline="subheadline" />
          <Card headline="headline" subheadline="subheadline" />
        </Carussel>
        <View style={tw.style("mb-50px")} />

        <Markdown copy={copy} />

        <View style={tw.style("mb-50px")} />

        <Image url="https://sleepymeerk.at/wp-content/uploads/2018/02/ich_sw2.jpg" />
      </ScrollView>
    </SafeAreaView>
  );
}
