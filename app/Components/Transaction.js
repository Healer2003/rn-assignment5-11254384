import { View,Text, StyleSheet } from "react-native"
export default function Transaction({icon,name,genre,price}){
    return(
        <View>
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
        flexDirection:"row"
    },
    iconholder:{
        width:50,
        height:50,
        justifyContent:"center",
        alignItems:"center"
    },
    textView:{
        justifyContent:"space-between",
        alignItems:"center"
    },
    topText:{
        fontSize:18,
        fontWeight:500,
    },
    bottomText:{
        fontSize:16,
    },
    price:{
        fontSize:18,
        font
    }
})