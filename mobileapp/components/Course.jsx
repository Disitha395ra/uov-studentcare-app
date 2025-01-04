import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Course() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.course}>
                <Text>course</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    course: {
        
    },
});