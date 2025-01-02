import { PaperProvider,Text } from "react-native-paper"
import { StyleSheet,View,Dimensions } from "react-native"

const {width, hight}= Dimensions.get("window");

export default function Header(){
    return (
        
      <View style={styles.header}>
        <PaperProvider>
          <Text style={styles.headertext}>UoV Student Care</Text>
        </PaperProvider>
      </View>
    );
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#8b008b",
    width: width*1,
    height: 80,
    alignItems: "center",
  },
  headertext: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 40,
  },
});