import { StyleSheet,View,Text } from "react-native";
import {SimpleLineIcons} from '@expo/vector-icons'

export default function SettingsCard({name}){
    return(
        <View style={styles.card}>
            <Text style={styles.text}>{name}</Text>
            <SimpleLineIcons name="arrow-right" size={15} color={"gray"}/>
        </View>
    );
}

const styles = StyleSheet.create({
    card:{
        borderBottomWidth:1,
        borderColor:"whitesmoke",
        paddingVertical:10,
        marginBottom:20,
        flexDirection:"row",
        justifyContent:"space-between",
    },
    text:{
        fontSize:18,
        fontWeight:"600"
    }
})