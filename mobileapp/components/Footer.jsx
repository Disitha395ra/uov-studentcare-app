import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Footer() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.footer}>
          <Text style={styles.footertext}>UoV &copy; 2024</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor:"#8b008b",
    width:"100%",
    height:50,
    padding:0,
    marginTop:186,
  },
  footertext:{
    color:"white",
    fontSize:20,
    fontWeight:"bold",
    textAlign:"center",
    paddingTop:10,
  }
});
