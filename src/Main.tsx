import * as React from "react";
import {View, StyleSheet, Text} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {HomeScreen} from "./screens/Home/HomeScreen";
import {RootStackParamList} from "./types/types";

import {WebViewScreen} from "./screens/WebViewScreen/WebViewScreen";
import {Home} from "./screens/Home/Home";

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function Main() {

    return (
        <NavigationContainer>
            <View style={styles.container}>
                <Stack.Navigator>
                    <Stack.Screen name="Homes" component={HomeScreen} />
                    <Stack.Screen name="Home" component={Home} />
                    <Stack.Screen name="WebView" options={{headerBackVisible:false}}  component={WebViewScreen}/>
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
