import { Image, StyleSheet, View ,Text} from "react-native";
import {MaterialCommunityIcons} from '@expo/vector-icons'

export default function CreditCard(){
    return(
        <View style={styles.card}>
            <View>
            <MaterialCommunityIcons name="integrated-circuit-chip" size={35} color="#4b5b98" />
            </View>
            <Text>456 1122 4595 7852</Text>
           
        </View>
    )
}

const styles = StyleSheet.create({
    card:{
            borderRadius:20,
            height:230,
            borderWidth:1,
            alignItems:"center",
            marginVertical:30,
            backgroundColor:"#25253d"
           
    },
    image:{
        height:200,
        resizeMode:"center"
    }
})