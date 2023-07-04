import { StyleSheet, StatusBar, Platform } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Platform.OS === "ios" ? 50 : StatusBar.currentHeight,
    backgroundColor: "#fff",
    marginHorizontal: 20,
  },
  
});
