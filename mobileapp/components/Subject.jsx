import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import {subjects} from "../data/StudentsDb";
import {marks} from "../data/StudentsDb";

export default function Subject() {

  const {user} = route.params;

  const subjectdetails = subjects.find(
    
  )

  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.subject}>
              <View>
                <Header/>
                <Logo/>
              </View>
                <Text>subject</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    subject: {
        
    },
});