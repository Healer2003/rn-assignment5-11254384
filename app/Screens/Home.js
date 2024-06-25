import { Image, StyleSheet,View } from "react-native"
import UserCard from "../Components/UserCard"


export default function Home(){
    return(
        <View >
            <UserCard/>
            <View style={{marginVertical:40,}}>
            <Image source={require('../assets/Card.png')} style={styles.image}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        objectFit:"cover",
        alignSelf:"center",
       
    }
    
})