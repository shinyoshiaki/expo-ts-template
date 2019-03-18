import React from "react";
import { StyleSheet, Text, View, WebView } from "react-native";

export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri: "https://shinyoshiaki.github.io/most-simple-videochat/build/"
        }}
        style={{ marginTop: 40 }}
      />
    );
  }
}
