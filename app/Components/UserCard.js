import { Image, StyleSheet, Text, View } from "react-native"

export default function UserCard(){
    return(
        <View>
            <Image source={require('../assets/proile.png')}/>
            <View>
                <Text>
                Welcome back,
                </Text>
                <Text>
                Eric Atsu
                </Text>
            </View>
            <View>
                <Image source={require('../assets/search.png')}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({

})