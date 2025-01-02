import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,ScrollView} from 'react-native';
import { PaperProvider,Text } from 'react-native-paper';
import Header from './components/Header';
import Footer from './components/Footer';

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <ScrollView>
          <Header />
          <Text>
            
          </Text>
          <Footer />
        </ScrollView>
      </PaperProvider>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
});
