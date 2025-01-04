import { StyleSheet,View, } from "react-native";
import { PaperProvide,Text  } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from "react-native-paper";
export default function Buttonpannel() {
  return (
    <View style={styles.container}>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                style={styles.bottombutton}>
            Press me
            </Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                style={styles.bottombutton}>
            Press me
            </Button>
            <Button icon="camera" mode="contained" onPress={() => console.log('Pressed')}
                style={styles.bottombutton}>
            Press me
            </Button>
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    bottombutton: {
        width: 120,
        height: 50,
        backgroundColor: "green",
        margin: 10,
        display: "flex",
    },
});