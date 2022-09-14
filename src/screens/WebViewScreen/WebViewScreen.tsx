import {FlatList, RefreshControl, StyleSheet, View} from "react-native";

import React from "react";
import WebView from "react-native-webview";
import {GAP, PADDING, WIDTH} from "../../constants/constants";
import {WebViewProps} from "../../types/types";
import {data} from "../../data/data";


const wait = (timeout: any) => {
    return new Promise(resolve => setTimeout(resolve, timeout));
}

export const WebViewScreen = ({route}: WebViewProps) => {
    const [refreshing, setRefreshing] = React.useState(false);
    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));
    }, []);
    return <View style={styles.container}>
        <WebView source={{uri: route.params.url}}/>
    </View>
}

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
