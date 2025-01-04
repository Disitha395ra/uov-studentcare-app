import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text, DataTable } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import { subjects, marks, courses } from "../data/StudentsDb"; 
import Buttonpannel from "./Buttonpannel";
import React from "react";

export default function Subject({ route, navigation }) {
  const { user } = route.params; 

  // Find the subject details based on course_id and user.course_id
  const subjectdetails = subjects.find((subject) => subject.course_id === user.course_id);
  
  // Find the mark details for the specific student
  const markdetails = marks.filter((mark) => mark.student_id === user.id);

  // Find the course details based on course_id
  const coursedetails = courses.find((course) => course.id === user.course_id);

  // Pagination state
  const [page, setPage] = React.useState(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(numberOfItemsPerPageList[0]);

  const items = markdetails;

  const from = page * itemsPerPage;
  const to = Math.min((page + 1) * itemsPerPage, items.length);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.subject}>
          <View>
            <Header />
            <Logo />
          </View>

          <View style={styles.course}>
            <Text style={styles.coursecontent}>
              {coursedetails ? coursedetails.name : "Course not found"}
            </Text>
          </View>

          <View style={styles.course}>
            <Text style={styles.markscontent}>Marks Information</Text>
            <View style={styles.subjectmarkstable}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title>Subject</DataTable.Title>
                <DataTable.Title numeric>Mark</DataTable.Title>
              </DataTable.Header>

              {markdetails.map((mark) => (
                <DataTable.Row key={mark.subject_id}>
                  <DataTable.Cell>
                    {subjects.find((subject) => subject.id === mark.subject_id).name}
                  </DataTable.Cell>
                  <DataTable.Cell numeric>{mark.marks}</DataTable.Cell>
                </DataTable.Row>
              ))}

              <DataTable.Pagination
                page={page}
                numberOfPages={Math.ceil(items.length / itemsPerPage)}
                onPageChange={(page) => setPage(page)}
                label={`${from + 1}-${to} of ${items.length}`}
                numberOfItemsPerPageList={numberOfItemsPerPageList}
                numberOfItemsPerPage={itemsPerPage}
                onItemsPerPageChange={onItemsPerPageChange}
                showFastPaginationControls
                selectPageDropdownLabel={"Rows per page"}
              />
            </DataTable>
          </View>
          </View>

          <Buttonpannel navigation={navigation} route={route} />
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  subject: {},
  course: {
    marginTop: 50,
    borderWidth: 1,
    borderColor: "black",
    padding: 10,
    borderRadius: 15,
    paddingBottom: 40,
  },
  coursecontent: {
    fontSize: 35,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "center",
  },
  subjectmarkstable: {},
  markscontent:{
    fontSize: 20,
    fontWeight: "bold",
    color: "black",
    marginTop: 20,
    textAlign: "left",
  }
});
