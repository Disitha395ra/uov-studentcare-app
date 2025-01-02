import { StyleSheet, View, Text, Dimensions } from "react-native";
import { PaperProvider } from "react-native-paper"

const {width, height}= Dimensions.get("window");
export default function Footer(){
    return(
        <View style={styles.footer}>
            <PaperProvider>
                <Text style={styles.footertext}>UoV Student Care</Text>
            </PaperProvider>
        </View>
    )
}

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#8b008b",
    width: width*1,
    height: 80,
  },
});