import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TextInput } from "react-native";

function Link(props) {
  return (
    <Text
      {...props}
      accessibilityRole="link"
      style={StyleSheet.compose(styles.link, props.style)}
    />
  );
}

function App() {
  const [inputValue1, setInputValue1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [res, setRes] = useState("");
  const checkValueIsNumberOrNot = (param) => {
    if (isNaN(inputValue1) && isNaN(inputValue2)) {
    } else {
      if (param == "s") {
        setRes(parseInt(inputValue1) + parseInt(inputValue2));
      } else if (param == "r") {
        setRes(parseInt(inputValue1) - parseInt(inputValue2));
      } else if (param == "m") {
        setRes(parseInt(inputValue1) * parseInt(inputValue2));
      } else if (param == "d") {
        setRes(parseInt(inputValue1) / parseInt(inputValue2));
      }
    }
  };
  return (
    <View style={styles.app}>
      <View style={styles.header}>
        <TextInput
          keyboardType="numeric"
          style={{ height: 40 }}
          placeholder="Put a number"
          onChangeText={(inputValue1) => setInputValue1(inputValue1)}
        />

        <TextInput
          keyboardType="numeric"
          style={{ height: 40 }}
          placeholder="Put other number"
          onChangeText={(inputValue2) => setInputValue2(inputValue2)}
        />
        <TextInput style={{ height: 40 }} placeholder={res} />
      </View>
      <View>
        <Button onPress={(e) => checkValueIsNumberOrNot("s")} title="+" />
        <Button onPress={(e) => checkValueIsNumberOrNot("r")} title="-" />
        <Button onPress={(e) => checkValueIsNumberOrNot("m")} title="*" />
        <Button onPress={(e) => checkValueIsNumberOrNot("d")} title="/" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  app: {
    marginHorizontal: "auto",
    maxWidth: 500
  },
  logo: {
    height: 80
  },
  header: {
    padding: 20
  },
  title: {
    fontWeight: "bold",
    fontSize: "1.5rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  text: {
    lineHeight: "1.5em",
    fontSize: "1.125rem",
    marginVertical: "1em",
    textAlign: "center"
  },
  link: {
    color: "#1B95E0"
  },
  code: {
    fontFamily: "monospace, monospace"
  }
});

export default App;
