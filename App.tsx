import React from "react";
import { View, StyleSheet, TextInput } from "react-native";
import { AvoidSoftInput } from "react-native-avoid-softinput";

const App = () => {
  React.useEffect(() => {
    AvoidSoftInput.setHideAnimationDuration(50);
    AvoidSoftInput.setHideAnimationDelay(0);
    AvoidSoftInput.setShowAnimationDuration(100);
    AvoidSoftInput.setEnabled(true);
  }, []);

  return (
    <View style={{ bottom: 20, position: "absolute", width: "100%" }}>
      <TextInput style={{ borderColor: "red", borderWidth: 2, paddingVertical: 10, marginBottom: 10 }} />
      <TextInput style={{ borderColor: "red", borderWidth: 2, paddingVertical: 10 }} secureTextEntry />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 54,
    color: "white",
    marginBottom: 50,
    fontWeight: "bold",
  },
});

export default App;
