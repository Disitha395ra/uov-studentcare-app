import { StyleSheet, View, ScrollView, Image, Dimensions } from "react-native";
import { PaperProvider, Text,Divider } from "react-native-paper";
export default function Profile({route}) {

  const { user } = route.params;

  return (
    <PaperProvider>
      <ScrollView>
          <View style={styles.container}>
              <Image
                source={user.profile_pic}
                style={styles.profilepic}
              >
              </Image>
              <Text style={styles.username}>{user.name}</Text>
              <Text>Age : {user.age} | gender : {user.gender}</Text>
              <Divider style={styles.divider}/>
              <Text style={styles.contacthead}>Contact Information</Text>
              <Text style={styles.contactdetails}>Email : {user.email}</Text>
              <Text style={styles.contactdetails}>Phone : {user.phone}</Text>
              <Text style={styles.contactdetails}>Address : {user.address}</Text>
              <Text style={styles.contacthead}>Biological Information</Text>
              <Text style={styles.contactdetails}>Gender : {user.gender}</Text>
              <Text style={styles.contactdetails}>Age : {user.age}</Text>
              <Text style={styles.contactdetails}>Blood-Group : {user.blood_group}</Text>
          </View>
      </ScrollView>
    </PaperProvider>
    
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
    width: 230,
    height: 230,
    alignItems:"Top",
  },
  username:{
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
  },
  divider:{
    height:2,
    backgroundColor:"black",
    width:"100%",
    marginTop: 20,
  },
  contacthead:{
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "left",
    width: "100%"
  },
  contactdetails:{
    fontSize: 15,
    color: "black",
    marginTop: 10,
    textAlign: "left",
    width: "100%"
  }
});