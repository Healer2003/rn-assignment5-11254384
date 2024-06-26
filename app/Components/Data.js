import {Ionicons,AntDesign,FontAwesome6,Entypo,FontAwesome5,MaterialCommunityIcons as MCI} from '@expo/vector-icons'
export const items = [
    {
        id:"1",
        name:"Sent",
        icon:<AntDesign name="arrowup" size={25} color={"black"} />
    },
    {
        id:"2",
        name:"Receive",
        icon:<AntDesign name="arrowdown" size={25} color={"black"}/>
    },
    {
        id:"3",
        name:"Loan",
        icon:<FontAwesome6 name="dollar-sign" size={25} color={"black"}/>
    },
    {
        id:"4",
        name:"Topup",
        icon:<Ionicons name="cloud-upload-outline" size={25} color={"black"}/>
    }
]

export const transactions =[
    {
        id:"1",
        name:"Apple",
        genre:"Entertainment",
        price:"-$5,99"
    },
    {
        id:"2",
        name:"Spotify",
        genre:"Music",
        price:"-$12,99"
    },
    {
        id:"3",
        name:"Money Transfer",
        genre:"Transaction",
        price:"$300"
    },
    {
        id:"4",
        name:"Grocery",
        genre:"Shop",
        price:"-$88"
    }
]