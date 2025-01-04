import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Header() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.header}>
                <Text style={styles.headertext}>UoV Student Care</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor:"#8b008b",
        alignItems:"center", 
        width:"100%",
        height:50,
        //fontWeight:"bold",
    },
    headertext:{
        color:"white",
        fontSize:20,
        fontWeight:"bold",
        paddingTop:10,
    }
});