import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
import { ScrollView } from "react-native-gesture-handler";

const In_Flat=({route,navigation})=>{
    useEffect(()=>{
        getUserDetails()

    },[]);

    console.log(route.params,"PARAAAAAAMMMM");
    const user =route.params
    const id=user.data.uuid
    // console.log(id,"IDDDDDDDDDDDDDDD");

    // Stetes
    const[userDetails,setuserDetails]=useState({})

    // User details fetching fnc
const getUserDetails=()=>{
    let id=firebase.auth().currentUser.uid
    firebase.database().ref(`userss/${id}`)
    .on("value",snapshotttt =>{
    //  console.log(id,"IDDDDD");
        // console.log(snapshotttt.val(),"Valuee");
        setuserDetails(snapshotttt.val())
    })
}
    return(
<View style={styles.MainView}>
<Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>

        <View style={{alignItems:'center'}}>
             <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo}/>
{/* <Text style={styles.Heading}>javed samejo</Text> */}
    <Grid>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("agreement",{
     activeUser:id
})}>
    <Image source={require('../../../../assets/agreement.jpg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Agreement</Text>
</TouchableOpacity>
    </Col>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("Camera")}>
    <Image source={require('../../../../assets/FlatPic.jpeg')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Flat Pics</Text>
</TouchableOpacity>
    </Col>
    </Grid>

    <Grid style={{marginTop:150}}>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("UploadBill",{
    activeUser:id
})}>
    <Image source={require('../../../../assets/uploadbills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Upload Bills</Text>
</TouchableOpacity>
    </Col>
    <Col style={styles.Button}>
<TouchableOpacity onPress={()=>navigation.navigate("PreviousBills",{
    activeUser:id
})}>
    <Image source={require('../../../../assets/PreviousBills.png')} style={{width:120,height:120}}/>
    <Text style={{color:'white'}}>Previous Bills</Text>
</TouchableOpacity>
    </Col>
    </Grid>
        </View>
        <View style={{marginTop:190,marginLeft:110}}>
        <TouchableOpacity onPress={()=>navigation.navigate("PreviousBills",{
    activeUser:id
})}>
    <Text style={styles.UnRegister}>Un-Register</Text>
</TouchableOpacity>
        </View>
</View>
    )
}

const styles=StyleSheet.create({
   MainView:{
        flex:1,
        backgroundColor:primaryColor,
    
   },
   UnRegister:{
    color:'black',
    textAlign:'center',
    paddingTop:10,
    backgroundColor:'#ffcc66',
    fontSize:22,
    fontWeight:'bold',
    width:192,
    height:52,
    borderWidth:2,
    borderRadius:2
   },
   Heading:{
        color:'#ffcc66'
   },
   logo:{
       width:120,
       height:150,
     
   },
   nametxt:{
    color:"#ffcc66",
    fontSize:25
},
Button:{
    width:120,
    height:120,
    margin:6
}
});

export default In_Flat;