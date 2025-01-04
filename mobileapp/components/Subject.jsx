import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Subject() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.subject}>
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