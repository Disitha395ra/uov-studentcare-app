import { StyleSheet,View,ScrollView } from "react-native";
import { PaperProvide,Text,BottomNavigation  } from "react-native-paper";
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { CommonActions } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export default function Buttonpannel() {
  return (
    <PaperProvider>
        <ScrollView>
            <View style={styles.buttonpannel}>
                <Text>buttonpannel</Text>
            </View>
        </ScrollView>
    </PaperProvider>
  );
}