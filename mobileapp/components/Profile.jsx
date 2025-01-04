import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Profile({route}) {

  const { user } = route.params;

  return (
    <View style={styles.container}>
      <Image
        source={user.profile_pic}
        style={styles.profilepic}
      >
      </Image>
      <Text style={styles.username}>{user.name}</Text>

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
  },
  profilepic:{
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width,
    alignItems:"Top",
  },
  username:{
    fontSize: 30,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  }
});