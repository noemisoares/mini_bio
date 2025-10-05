import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  page: {
    flexGrow: 1,
    alignItems: "center",
    backgroundColor: "#f3f4f6",
    paddingVertical: 40,
    paddingHorizontal: 20,
  },

  img: {
    width: 180,
    height: 180,
    borderRadius: 90,
    marginBottom: 25,
    resizeMode: "cover",
  },

  textContainer: {
    alignItems: "center",
    maxWidth: 350,
  },

  name: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#082359ff",
    marginBottom: 15,
  },

  paragraph: {
    textAlign: "center",
    fontSize: 16,
    color: "#03163D",
    lineHeight: 22,
    marginBottom: 15,
  },

  quote: {
    fontStyle: "italic",
    textAlign: "center",
    color: "#03163D",
    fontSize: 15,
    marginTop: 10,
  },
});