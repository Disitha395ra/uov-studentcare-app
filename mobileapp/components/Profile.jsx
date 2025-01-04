import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Profile() {
  return (
    <View style={styles.container}>
      <Text>Profile</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  }
});