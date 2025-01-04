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
                <Text>{subjectdetails.name}</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    subject: {
        
    },
});