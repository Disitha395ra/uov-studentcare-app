import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import {subjects} from "../data/StudentsDb";
import {marks} from "../data/StudentsDb";
import { courses } from "../data/StudentsDb";

export default function Subject({route,navigation}) {

  const {user} = route.params;
  const subjectdetails = subjects.find(course => user.course_id === course.id);
  const markdetails = marks.find(mark => user.id === mark.student_id);
  const coursedetails = courses.find(
    course=>user.course_id === course.id
  )

  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.subject}>
              <View>
                <Header/>
                <Logo/>
              </View>
              <View style={styles.course}>
                <Text style={styles.coursecontent}>{coursedetails.name}</Text>

              </View>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    subject: {
        
    },
    course:{
      marginTop: 50,
        borderWidth: 1, 
        borderColor: "black", 
        padding: 10, 
        borderRadius: 15,
        paddingBottom: 40,
    },
    coursecontent:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        textAlign: "center",
    }
});