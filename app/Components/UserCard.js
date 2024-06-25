import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

export default function UserCard(){
    return(
        <View style={styles.main}>
            <Image style={{width:60,height:60}}source={require('../assets/profile.png')}/>
            <View style={styles.message}>
                <Text style={styles.text}>
                Welcome back,
                </Text>
                <Text style={styles.text1}>
                Eric Atsu
                </Text>
            </View>
            <TouchableOpacity style={styles.search}>
                <Image style={{width:23,height:23}}
                source={require('../assets/search.png')}/>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        alignItems:"center",
    },
    message:{
        flexDirection:"column",
        justifyContent:"space-between",
        flex:1,
        paddingLeft:15,
      },
      search:{
        width:40,
        height:40,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:50,
        backgroundColor:"#DCDCDC",
        opacity:0.6
    },
      text:{
        fontSize:16,
      },
      text1:{
        fontSize:20,
        fontWeight:"500",
      }
})