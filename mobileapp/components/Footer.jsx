import { StyleSheet, View, ScrollView } from "react-native";
import { PaperProvider, Text } from "react-native-paper";
export default function Footer() {
  return (
    <PaperProvider>
      <ScrollView>
        <View style={styles.footer}>
          <Text>footer</Text>
        </View>
      </ScrollView>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  footer: {},
});
