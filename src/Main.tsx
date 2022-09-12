import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/Home/HomeScreen";
import {RootStackParamList} from "./types/types";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Main() {
    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen name="Home" component={HomeScreen}/>
                </Stack.Navigator>
            </View>
        </NavigationContainer>
    )
}

const styles = StyleSheet.create({
        container: {
            flex: 1,
            // justifyContent: "center",
            // alignItems: "center"

        },


    })
;
