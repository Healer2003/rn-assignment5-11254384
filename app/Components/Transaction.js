import { View,Text, StyleSheet } from "react-native"
export default function Transaction({icon,name,genre,price}){
    return(
        <View style={styles.main}>
            <View style={styles.iconholder}>{icon}</View>
            <View style={styles.textView}>
                <Text style={styles.topText}>{name}</Text>
                <Text style={styles.bottomText}>{genre}</Text>
            </View>
            <Text style={styles.price}>{price}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flexDirection:"row",
        alignItems:"center",
        marginBottom:10,
        paddingVertical:10
    },
    iconholder:{
        width:45,
        height:45,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor:"whitesmoke",
        borderRadius:50,
    },
    textView:{
        justifyContent:"space-between",
        flex:1,
        marginLeft:20
    },
    topText:{
        fontSize:18,
        fontWeight:"500",
    },
    bottomText:{
        fontSize:14,
        color:"gray"
    },
    price:{
        fontSize:18,
        fontWeight:"500"
    }
})