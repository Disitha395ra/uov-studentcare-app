import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text,DataTable  } from "react-native-paper";
import Header from "./Header";
import Logo from "./Logo";
import {subjects} from "../data/StudentsDb";
import {marks} from "../data/StudentsDb";
import { courses } from "../data/StudentsDb";
import React from "react";

export default function Subject({route,navigation}) {

  const {user} = route.params;
  const subjectdetails = subjects.find(course => user.course_id === course.id);
  const markdetails = marks.find(mark => user.id === mark.student_id);
  const coursedetails = courses.find(
    course=>user.course_id === course.id
  )

  const [page, setPage] = React.useState<number>(0);
  const [numberOfItemsPerPageList] = React.useState([2, 3, 4]);
  const [itemsPerPage, onItemsPerPageChange] = React.useState(
    numberOfItemsPerPageList[0]
  );

  const [items] = React.useState([
   {
     key: 1,
     name: 'Cupcake',
     calories: 356,
     fat: 16,
   },
   {
     key: 2,
     name: 'Eclair',
     calories: 262,
     fat: 16,
   },
   {
     key: 3,
     name: 'Frozen yogurt',
     calories: 159,
     fat: 6,
   },
   {
     key: 4,
     name: 'Gingerbread',
     calories: 305,
     fat: 3.7,
   },
  ]);

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
                <Header/>
                <Logo/>
              </View>
              <View style={styles.course}>
                <Text style={styles.coursecontent}>{coursedetails.name}</Text>

              </View>
              <View style={styles.subjectmarkstable}>
                    <DataTable>
                      <DataTable.Header>
                        <DataTable.Title>Dessert</DataTable.Title>
                        <DataTable.Title numeric>Calories</DataTable.Title>
                        <DataTable.Title numeric>Fat</DataTable.Title>
                      </DataTable.Header>

                      {items.slice(from, to).map((item) => (
                        <DataTable.Row key={item.key}>
                          <DataTable.Cell>{item.name}</DataTable.Cell>
                          <DataTable.Cell numeric>{item.calories}</DataTable.Cell>
                          <DataTable.Cell numeric>{item.fat}</DataTable.Cell>
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
                        selectPageDropdownLabel={'Rows per page'}
                      />
                    </DataTable>
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
    },
    subjectmarkstable:{
      
    }
});