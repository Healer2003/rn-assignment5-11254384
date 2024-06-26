import { StyleSheet,View,Text, Switch } from "react-native";
import { settings } from "../Components/Data";
import SettingsCard from "../Components/SettingsCard";
import { useState } from "react";
import { EventRegister } from "react-native-event-listeners";

export default function Settings(){
    const [darkMode, setDarkMode] = useState(false)
    return(
        <View style={styles.container}>
        <Text
        style={{
            textAlign:"center",
            fontSize:25,
            fontWeight:"500",
            marginBottom:100
        }}
        >Settings</Text>

         <View style={{height:"50%"}}>
            {
                settings.map((item,index)=>{
                    return(
                        <SettingsCard name={item.name} key={item.id}/>
                    )
                })
            }
        </View>
        <View style={{flexDirection:"row",alignItems:"center",justifyContent:"space-between"}}>
            <Text style={{fontSize:20,fontWeight:500}}>Theme</Text>
            <Switch
             value={darkMode}
             onValueChange={(value)=>{setDarkMode(value)
                EventRegister.emit('ChangeTheme',value)
             }}
            />
        </View>
        </View>

       
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop:30,
        paddingHorizontal:20,
        backgroundColor: '#fff',
      },
})