import { StyleSheet,Image } from "react-native"
export default function Logo(){
    return(
        <Image
            style={styles.logo}
            source={require("../assets/uovlogo.png")}
        />
    )
}

const styles=StyleSheet.create({
    logo:{
        width:"100%",
        height:100,
        resizeMode:"contain",
        marginTop:10,
    }
})