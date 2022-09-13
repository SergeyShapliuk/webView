import {NavigationProp, useNavigation} from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack"

export type RootStackParamList={
    Homes:undefined
    Home:undefined
    WebView: {
        url:string
    }

}

export type UseNavigationType=NavigationProp<RootStackParamList>

export type WebViewProps=NativeStackScreenProps<RootStackParamList,"WebView">

export const useAppNavigation=()=>useNavigation<UseNavigationType>()