import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Profile({route}) {

  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Text>Name:{user.name}</Text>
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