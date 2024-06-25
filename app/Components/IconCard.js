import { StyleSheet, TouchableOpacity,View,Text } from "react-native"
import {Ionicons} from '@expo/vector-icons'
export default function IconCard({icon,name}){
    return(
        <TouchableOpacity style={styles.main}>
            <View style={styles.sub}>
                {icon}
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
      width:60,
      height:60,
      backgroundColor:'#DCDCDC',
      borderRadius:50,
      justifyContent:"center",
      alignItems:"center",
    },
    text:{
        fontSize:16,
        fontWeight:"medium",
    }
})