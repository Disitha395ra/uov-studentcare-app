import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View ,ScrollView,Image,Dimensions} from 'react-native';
import { PaperProvider,Text } from 'react-native-paper';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';

const{width, height}=Dimensions.get("window");

export default function App() {
  return (
    <View style={styles.container}>
      <PaperProvider>
        <ScrollView>
          <Header />
            <Image
              source={require('./assets/uovlogo.png')}
              style={styles.logo}
            />
            <Text style={styles.hometext}>Student Login</Text>
            <Login/>
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
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: 50,
  },
  logo: {
    width: width * 1,
    height: 110,
  },
  hometext:{
    fontSize: 30,
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
  }
});
