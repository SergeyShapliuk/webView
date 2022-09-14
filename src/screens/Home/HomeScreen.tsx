import React, {useEffect} from "react";
import {StyleSheet} from "react-native";
import {useAppNavigation} from "../../types/types";
import * as Device from "expo-device";
import WebView from "react-native-webview";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";






export function HomeScreen() {
    // const [store,setStore]=useState(null)
    const navigation = useAppNavigation()
useEffect(()=>{
    console.log()

},[])
    useEffect(() => {
        // AsyncStorage.removeItem("url").then()
        console.log("effekt")
        let value=null
            start(value)
            // console.log("res", store)


    }, [])
// const   remoteConfig=()=>{
//
// }
    const start = (value) => {
        if (value === null) {
            loadFire()
        } else {
            localStorage(value)
            getLocalStorage().then(res=>{
                return navigation.navigate("WebView", {url: res})
            })


        }
    }
    const localStorage = async (value) => {
        try {
            await AsyncStorage.setItem("url", value)
            console.log("localStorage", value)
            alert('Data successfully saved')
        } catch (e) {
            alert('Failed to save the data to the storage')
        }

    }
    const getLocalStorage = async () => {
        try {
           const jsonValue = await AsyncStorage.getItem("url")
            console.log("js", jsonValue)
            return jsonValue !== null ? jsonValue : null
        } catch (e) {
            alert('Failed to fetch the input from storage')
        }
    }

    console.log("getLocalStorage", getLocalStorage)
    const loadFire = () => {
        const getUrl: string = ""
        const brandDevice = Device.brand
        console.log("brandDevice", brandDevice)
        const simDevice = true
        if (getUrl === "" || brandDevice === "google" || !simDevice) {
            console.log("getUrl", getUrl)
            navigation.navigate("Home")
        } else {
            start(getUrl)
            // localStorage(getUrl)
            // navigation.navigate("WebView", {url: getUrl})

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



