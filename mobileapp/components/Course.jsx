import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
import {courses} from "../data/StudentsDb";
import Header from "./Header";
import Logo from "./Logo";
export default function Course({route,navigation}) {

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
                <View style={styles.courseinformation}>
                  <Text style={styles.courseinformationhead}>Course Information</Text>
                  <Text style={styles.coursecontentdetails}>Code : {coursedetails.course_code}</Text>
                  <Text style={styles.coursecontentdetails}>Department : {coursedetails.department}</Text>
                  <Text style={styles.coursecontentdetails}>Duration : {coursedetails.duration}</Text>
                  <Text style={styles.coursecontentdetails}>Discription : {coursedetails.description}</Text>
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
    },
    courseinformationhead:{
      fontSize: 20,
      fontWeight: "bold",
      color: "black",
      marginTop: 20,
      textAlign: "left",
      width: "100%"
    },
    coursecontentdetails:{
      fontSize: 15,
      color: "black",
      marginTop: 10,
      textAlign: "left",
      width: "100%",
    },
    courseinformation:{
      marginTop: 50,
      borderWidth: 1, 
      borderColor: "black", 
      padding: 35, 
      borderRadius: 15,
      paddingBottom: 90,
    }
});