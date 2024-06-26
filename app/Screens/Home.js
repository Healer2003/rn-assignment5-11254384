import { Image, StyleSheet,View,Text, FlatList } from "react-native"
import UserCard from "../Components/UserCard"
import { items, transactions } from "../Components/Data"
import IconCard from "../Components/IconCard"
import Transaction from "../Components/Transaction"


export default function Home(){
    const renderitem = ({item}) =>{
        return(
        <Transaction name={item.name} price={item.price} icon={item.icon} genre={item.genre}/>
        )
    }
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
            <View style={{flex:1}}>
                <FlatList data={transactions} 
                renderItem={renderitem} 
                key={(item)=>item.id}
                showsVerticalScrollIndicator={false}
                />
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