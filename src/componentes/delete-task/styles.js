import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  modalContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 60,
    paddingVertical: 20,
    borderColor: "red",
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  modalDetailContainer: {
    paddingVertical: 30,
  },
  modalDetailMessage: {
    fontSize: 14,
    textAlign: "center",
    color: "#212121",
    width: "40%",
  },
  detailTask: {
    textAlign: "center",
    color: "blue",
  },
  selectedTak: {
    fontWeight: "bold",
    textAlign: "center",
    paddingVertical: 10,
  },
  modalButtonConatiner: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    marginHorizontal: 20,
  },
});
