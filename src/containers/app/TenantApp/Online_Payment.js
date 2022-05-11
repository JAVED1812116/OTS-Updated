import React,{useState,useEffect} from "react";
import { View , Text , TouchableOpacity, ActivityIndicator, TextInput, StyleSheet,Image} from "react-native"
import firebase from 'firebase';
import {vw,vh, primaryColor} from "../../../constants";
import { Col, Row, Grid } from 'react-native-easy-grid';
const OnlinePayment=(props)=>{

    return(
<View style={styles.MainView}>
<View style={{marginTop:162,alignItems:'center'}}>
        <Text style={{color:'#ffcc66',fontSize:22,fontWeight:'bold'}}>Pay Online</Text>
        </View>
        <View>
        <Text style={{color:'#ffcc66',fontSize:16}}>Bank Name: <Text style={{color:'white'}}>{AccountDetail.BankName}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>IBAN Number:<Text style={{color:'white'}}>{AccountDetail.IBAN}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Card Number:<Text style={{color:'white'}}>{AccountDetail.Cardnumber}</Text></Text>
</View>
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
