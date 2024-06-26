import { Image, StyleSheet,View,Text } from "react-native"
import UserCard from "../Components/UserCard"
import { items } from "../Components/Data"
import IconCard from "../Components/IconCard"


export default function Home(){
    return(
        <View >
            <UserCard/>
            <View style={{marginVertical:40,}}>
            <Image source={require('../assets/Card.png')} style={styles.image}/>
            </View>
            <View style={{flexDirection:"row",justifyContent:"space-between"}}>
                {
                    items.map((item,index)=>{
                        return(
                            <IconCard name={item.name} icon={item.icon} key={item.id}/>
                        )
                    })
                }
            </View>

            <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",marginVertical:20}}>
                <Text style={{fontSize:20}}>Transaction</Text>
                <Text style={{color:"blue"}}>Sell All</Text>
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