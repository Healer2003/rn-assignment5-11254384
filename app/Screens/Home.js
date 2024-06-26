import { Image, StyleSheet,View,Text, FlatList } from "react-native"
import UserCard from "../Components/UserCard"
import { items, transactions } from "../Components/Data"
import IconCard from "../Components/IconCard"
import Transaction from "../Components/Transaction"


export default function Home(){
    const renderitems = ({item}) =>{
        return(
            <Transaction 
        name={item.name} 
        price={item.price} 
        icon={item.icon}
        genre={item.genre}
         />
        )
        
    }
    return(
        <View style={styles.container}>
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
                <Text style={{fontSize:20,fontWeight:"500"}}>Transaction</Text>
                <Text style={{color:"blue",fontSize:15}}>Sell All</Text>
            </View>

            <View style={{flex:1,flexDirection:"column",}}>
                <FlatList 
                data={transactions} 
                renderItem={renderitems} 
                key={(item)=>item.id}
                showsVerticalScrollIndicator={false}
                />
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20,
        backgroundColor: '#fff',
      },
    image:{
        objectFit:"cover",
        alignSelf:"center",
       
    }
    
})