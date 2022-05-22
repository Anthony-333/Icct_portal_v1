
import { SafeAreaView, StatusBar, StyleSheet, Text, View } from "react-native";
import Navigation from "./src/navigation";
import Amplify, { Auth } from "aws-amplify";
import config from "./src/aws-exports";
import * as React from 'react';
import { LogBox } from "react-native";

LogBox.ignoreLogs(["Warning: ..."]); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications

Amplify.configure(config);

const App = () => {
  return (
    <View style={styles.root}>
      <StatusBar style="auto" />
      <Navigation />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F9FBFC",
  },
});

export default App;