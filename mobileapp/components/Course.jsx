import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import {courses} from "../data/StudentsDb";
import Header from "./Header";
import Logo from "./Logo";
export default function Course({route}) {

  const { user } = route.params;
  const coursedetails = courses.find(
    course=>user.course_id === course.id
  )
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.course}>
                <Header/>
                <Logo/>
                <View style={styles.coursecontent}>
                  <Text style={styles.coursename}>{coursedetails.name}</Text>
                  <Text style={styles.coursesh}>Code : {coursedetails.course_code} | Department : {coursedetails.department}</Text>
                </View>
                
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    course: {
        
    },
    coursename:{
        fontSize: 35,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        textAlign: "center",
    },
    coursesh:{
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
        marginTop: 20,
        textAlign: "center",
    },
    coursecontent:{
        marginTop: 50,
        borderWidth: 1, 
        borderColor: "black", 
        padding: 10, 
        borderRadius: 15,
        paddingBottom: 40,
    }
});