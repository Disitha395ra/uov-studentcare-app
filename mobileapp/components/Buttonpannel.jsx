import { StyleSheet,View, } from "react-native";
import { PaperProvide,Text  } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Button } from "react-native-paper";

export default function Buttonpannel({navigation, route}) {
    const { user } = route.params; 
    const handleprofile=()=>{
        navigation.navigate("Profile", { user });
    }

    const handlecourse=()=>{
        navigation.navigate("Course", { user });
    }

    const handlesubject=()=>{
        navigation.navigate("Subject", { user });
    }

  return (
    <View style={styles.container}>
            <Button icon="account" mode="contained" onPress={handleprofile}
                style={styles.bottombutton}>
            Profile
            </Button>
            <Button icon="cards-variant" mode="contained" onPress={handlecourse}
                style={styles.bottombutton}>
            Course
            </Button>
            <Button icon="apps" mode="contained" onPress={handlesubject}
                style={styles.bottombutton}>
            Subject
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
        margin: 7,
        display: "flex",
    },
});