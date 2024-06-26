import { StyleSheet,View,Text } from "react-native";

export default function Settings(){
    return(
        <View style={styles.container}>
        <Text
        style={{
            textAlign:"center",
            fontSize:25,
            fontWeight:"500"
        }}
        >Settings</Text>
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