import { StyleSheet,View } from "react-native"
import { PaperProvider,Text } from "react-native-paper"
export default function Login(){
    return(
        <View style={styles.login}>
            <PaperProvider>
                <Text style={styles.logintext}>Login</Text>
            </PaperProvider>
        </View>
    )
}

const styles = StyleSheet.create({
  login:{
    
  }
});