import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
const OnlinePayment=(props)=>{
   const[userDetails,setuserDetails]=useState({})
    const[AccountDetail,setAccountDetails]=useState({})
    useEffect(()=>{
        getAccountDetails()

    },[]);
    useEffect(()=>{
        getUserDetails()

    },[]);

    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
        //  console.log(id,"IDDDDD");
            // console.log(snapshotttt.val(),"Valuee");
            setuserDetails(snapshotttt.val())
        })
    }

    const getAccountDetails=()=>{
        firebase.database().ref(`AccountDetail`)
        .on("value",snapshotttt =>{
            snapshotttt.forEach(innerproval =>{
            console.log(innerproval,"Innner  Account");
            setAccountDetails(innerproval.val())
            })
        })
    }
    return(

<View style={styles.MainView}>
<Grid>
                <Col style={{marginLeft:25,marginTop:35}}>
            <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
             </Col>
             <Col style={{marginLeft:-50,marginTop:-10}}>
            <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
            </Col>
            </Grid>
        <Text style={{color:'#ffcc66',fontSize:32,fontWeight:'bold',marginTop:0,textAlign:'center'}}>Pay Online</Text>
        <Text style={{color:'#ffcc66',fontSize:22,marginTop:0,textAlign:'center'}}>Bank Name: <Text style={{color:'white'}}>{AccountDetail.BankName}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:22,marginTop:0,textAlign:'center'}}>IBAN Number:<Text style={{color:'white'}}>{AccountDetail.IBAN}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:22,marginBottom:322,textAlign:'center'}}>Card Number:<Text style={{color:'white'}}>{AccountDetail.Cardnumber}</Text></Text>
        </View>
    )
}

const styles=StyleSheet.create({
   MainView:{
        flex:1,
        backgroundColor:primaryColor,
    
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
});

export default OnlinePayment;
