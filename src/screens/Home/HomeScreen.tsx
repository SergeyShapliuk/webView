import React, {useEffect, useState} from "react";
import {StyleSheet} from "react-native";
import {useAppNavigation} from "../../types/types";

import * as Device from 'expo-device';
import WebView from "react-native-webview";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";


//const path: string = "https://google.com"


export function HomeScreen() {
    const [store,setStore]=useState<string>("")
    const navigation = useAppNavigation()

    useEffect(() => {
            console.log("effekt")
        getLocalStorage()
            start(store)
    }, [])

    const start = (value) => {
        if (value === "") {
            loadFire()
        } else {
            return value
        }
    }
    const localStorage = async (value) => {
     await AsyncStorage.setItem("url", value)
    }
    const getLocalStorage = async () => {
            const jsonValue = await AsyncStorage.getItem("url")
            return setStore(jsonValue)
    }

    console.log("getLocalStorage", store)
    console.log("AsyncStorage", AsyncStorage.getItem("url"))
    const loadFire = () => {
        const getUrl = store
        const brandDevice = Device.brand
        console.log("brandDevice", brandDevice)
        const simDevice = true
        if (getUrl === "" || brandDevice === "google" || !simDevice) {
            console.log("getUrl", getUrl)

            navigation.navigate("Home")
        }else {
            localStorage(store)
            navigation.navigate("WebView", {url:store})
        }
    }
}
// localStorage(getUrl)
// navigation.navigate("WebView", {url:getUrl})
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "black"

        // justifyContent: "center",
        // alignItems: "center"
    },
    item: {
        width: ((WIDTH - PADDING)) - GAP,
        // height: ((WIDTH - PADDING * 2)) - GAP,
        flexDirection: "row",
        // alignItems:"center",
        paddingVertical: 10,
        paddingHorizontal: 6,
        // marginVertical:GAP,
        // borderWidth: 1,
        // borderRadius: 5,
        // backgroundColor:"tomato",

    },
    title: {
        color: "blue",
        fontSize: 14,
        fontWeight: "700"
    },
    text: {
        width: WIDTH / 2,
        color: "white",
        // textAlign:"auto",
        marginLeft: 10,
        fontSize: 14,
        fontWeight: "500"
    }
});



