import {NavigationProp, useNavigation} from "@react-navigation/native";

export type RootStackParamList={
    Home:undefined

}

export type UseNavigationType=NavigationProp<RootStackParamList>

export const useAppNavigation=()=>useNavigation<UseNavigationType>()