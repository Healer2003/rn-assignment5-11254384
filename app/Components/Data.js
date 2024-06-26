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
        icon:<FontAwesome5 name='apple' size={20} color={"black"}/>,
        name:"Apple Store",
        genre:"Entertainment",
        price:"- $5,99"
    },
    {
        id:"2",
        icon:<Entypo name='spotify' size={20} color={"#1ED760"}/>,
        name:"Spotify",
        genre:"Music",
        price:"- $12,99"
    },
    {
        id:"3",
        icon:<MCI name='tray-arrow-down' size={20} color={"black"}/>,
        name:"Money Transfer",
        genre:"Transaction",
        price:"$300"
    },
    {
        id:"4",
        icon:<MCI name='cart-outline' size={20} color={"red"}/>,
        name:"Grocery",
        genre:"Shop",
        price:"-$88"
    }
]

export const settings = [

    {
        id:"1",
        name:"Language"
    },
    {
        id:"2",
        name:"My Profile"
    },
    {
        id:"3",
        name:"Contact Us"
    },
    {
        id:"4",
        name:"Change Password"
    },
    {
        id:"5",
        name:"Privacy Policy"
    },
]