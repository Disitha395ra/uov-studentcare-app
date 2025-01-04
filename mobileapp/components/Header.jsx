import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Header() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.header}>
                <Text>Header</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
    header: {
        
    },
});