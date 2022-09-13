import React from "react";
import {FlatList, Text, View, StyleSheet, Image} from "react-native";

import {data} from "../../data/data";

import {GAP, PADDING, WIDTH} from "../../constants/constants";


export function Home() {

            return (
                <View style={styles.container}>
                    {/*<Text style={{alignSelf:"center"}}>hello</Text>*/}
                    <FlatList data={data}
                        // numColumns={2}
                        // contentContainerStyle={{paddingHorizontal:PADDING}}
                        // columnWrapperStyle={{justifyContent: "space-between"}}
                              renderItem={({item}) => {
                                  return <View style={styles.item}>
                                      <Image style={{width: 130, height: 100}} source={{uri: item.photo}}/>
                                      {/*<Text style={styles.title}>{item.title}</Text>*/}
                                      <Text style={styles.text} numberOfLines={7}>
                                          <Text style={styles.title}>{item.title}</Text>
                                          <Text>{"\n"}{item.description}</Text>
                                      </Text>
                                  </View>


                              }}
                              keyExtractor={(item, index) => `${item.id}.${index}`}
                    />
                </View>
            )



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



