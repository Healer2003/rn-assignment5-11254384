import { StyleSheet, TouchableOpacity,View,Text } from "react-native"
import {Ionicons} from '@expo/vector-icons'
export default function IconCard({icon,name}){
    return(
        <TouchableOpacity style={styles.main}>
            <View style={styles.sub}>
                <Ionicons name={icon} size={20} color={"black"}/>
            </View>
            <Text style={styles.text}>{name}</Text>
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    main:{
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center"
    },
    sub:{
       paddingHorizontal:10,
       paddingVertical:10,
       backgroundColor:'#DCDCDC',
    },
    text:{
        fontSize:18,
        fontWeight:"medium",
    }
})