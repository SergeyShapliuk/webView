import React from "react";
import {Button, Dimensions, FlatList, Text, TouchableOpacity, View, StyleSheet, Image} from "react-native";
import {useAppNavigation} from "../../types/types";
import {data} from "../../data/data";



const {height, width} = Dimensions.get("screen")
export const HEIGHT = height
export const WIDTH = width
export const PADDING = 30
export const GAP=5

export function HomeScreen() {
    const navigation=useAppNavigation()
    const path=""
    // path = ""
    // if( path===""){
    //     loadFire()
    // }else{
    //     return path;
    // }
    const loadFire=()=>{
        // getUrl = получаем значение из firebase_remote_config(“url”);
        // brandDevice = функция на определение бренда телефона
        // simDevice = функция на наличие симкарты
        // Второе условие!!
        // if( getUrl.isEmpty ||  brandDevice.contains(“google”) ||  !simDevice ){
        //     return  заглушка ;
        // }else{
        //     локальное сохранение ссылки = setString(“key”, getUrl);  -  пример
        //     WebView
        // }
    }

    return (
        <View style={styles.container}>
            <FlatList data={data}
                      // numColumns={2}
                      // contentContainerStyle={{paddingHorizontal:PADDING}}
                      // columnWrapperStyle={{justifyContent: "space-between"}}
                      renderItem={({item}) => {
                          return <View style={styles.item}>
                              <Image style={{width:130,height:100}} source={{uri:item.photo}}/>
                              <Text style={styles.title}>{item.title}</Text>
                              <Text style={styles.text} numberOfLines={5}>{item.description}</Text>
                          </View>


                      }}
                      keyExtractor={(item, index) => `${item.id}.${index}`}
            />


            {/*<Text>{JSON.stringify(pokemons,null,2)}</Text>*/}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,

        // justifyContent: "center",
        // alignItems: "center"
    },
    item:{
        width: ((WIDTH - PADDING)) - GAP,
        // height: ((WIDTH - PADDING * 2)) - GAP,
        flexDirection:"row",
        // alignItems:"center",
        paddingVertical:10,
        paddingHorizontal:6,
        // marginVertical:GAP,
        // borderWidth: 1,
        // borderRadius: 5,
        // backgroundColor:"tomato",

    },
    title:{
        fontSize:18,
        fontWeight:"700"
    },
    text:{
        width:WIDTH/2,
        // textAlign:"auto",
        marginLeft:10,
        fontSize:14,
        fontWeight:"500"
    }
});


