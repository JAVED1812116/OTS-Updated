import React,{useState,useEffect} from"react";
import {View,Text,TouchableOpacity,StyleSheet,Image} from "react-native"
import firebase from "firebase";
import {vw,vh} from "../../../constants"
import { Col, Row, Grid } from 'react-native-easy-grid';

const RequestDetail=({route})=>{
    useEffect(()=>{
        getUserDetails()
    },[]);
    const[userDetails,setuserDetails]=useState({})
    const getUserDetails=()=>{
        let id=firebase.auth().currentUser.uid
        firebase.database().ref(`userss/${id}`)
        .on("value",snapshotttt =>{
        //  console.log(id,"IDDDDD");
            // console.log(snapshotttt.val(),"Valuee");
            setuserDetails(snapshotttt.val())
        })
    }

const {request,firebaseKey}=route.params
const {
    firstName,
    lastName,
    date,
    DOB,
    Roomvalue,
    Toiletvalue,
    advance,
    cnicNumber,
    emailAddress,
    fatherName,
    monthlyRent,
    permenantAddress,
    phoneNumber,
    value,
}=request

const AcceptReq=()=>{
    firebase.database().ref(`TenantRegistration/${firebaseKey}`)
.update({
    isAccepted:true,
}).then(res=>{
    alert("Accepted")
}).catch(err=>{
    alert(err.messege)
})
}

    return(
        
        <View style={styles.mainview}>
        <Grid>
<View style={styles.textview}>
    <Col>
        <Text style={styles.nametxt}>
            Hello</Text>
            <Text style={styles.nametxt}>
             {userDetails.name}</Text>
    </Col>
    <Col style={{marginLeft:82, marginStart:vw*0.22,marginTop:vh*-1.001}}>
<Image source={require('../../../../assets/Logo.jpg')} style={{width:190,height:190}}/>
</Col>
    </View>
</Grid>

<View>
    <View style={{marginTop:-540}}>           
    <Text style={styles.Heading}>
        Personal Information
    </Text>
           <Text style={styles.txt}>
                Date:<Text style={styles.txtAnswer}>{date}</Text>
            </Text>

            <Text style={styles.txt}>
                Name:<Text style={styles.txtAnswer}>{firstName} {lastName}</Text>
            </Text>      
            <Text style={styles.txt}>
                FatherName:<Text style={styles.txtAnswer}>{fatherName}</Text>
            </Text>      
            <Text style={styles.txt}>
                cnicNumber:<Text style={styles.txtAnswer}>{cnicNumber}</Text>
            </Text>      
            <Text style={styles.txt}>
                MobileNumber:<Text style={styles.txtAnswer}>{phoneNumber}</Text>
            </Text>      
            <Text style={styles.txt}>
                Date-Of-Birth:<Text style={styles.txtAnswer}>{DOB}</Text>
            </Text>      
            <Text style={styles.txt}>
                permenantAddress:<Text style={styles.txtAnswer}>{permenantAddress}</Text>
            </Text> 
            <Text style={styles.txt}>
                EmailAddress:<Text style={styles.txtAnswer}>{emailAddress}</Text>
            </Text> 
            
    <Text style={styles.Heading}>
       Aggreement Detail
    </Text>  
    <Text style={styles.txt}>
                Advance:<Text style={styles.txtAnswer}>{advance}</Text>
     </Text>    
    <Text style={styles.txt}>
                MonthlyRent:<Text style={styles.txtAnswer}>{monthlyRent}</Text>
     </Text>    
     <Text style={styles.txt}>
                TotalFamilyMembers:<Text style={styles.txtAnswer}>{value}</Text>
            </Text>
    <Text style={styles.txt}>
                Room:<Text style={styles.txtAnswer}>{Roomvalue}</Text>
     </Text>    
    <Text style={styles.txt}>
                Toilet:<Text style={styles.txtAnswer}>{Toiletvalue}</Text>
     </Text>    
    <View style={{marginLeft:52}}>
        <Grid>
            <Col>
       <TouchableOpacity onPress={AcceptReq}>
            <Text style={styles.BtnStyle}>
                Accept
            </Text>
        </TouchableOpacity>
        </Col>
<Col>
       <TouchableOpacity onPress={AcceptReq}>
            <Text style={styles.BtnStyle}>
                Decline
            </Text>
        </TouchableOpacity>
        <Text style={{color:'white'}}>Request Detail</Text>
</Col>        
</Grid>
        </View>
        </View>
</View>
        </View>
    )
}

const styles=StyleSheet.create({
    mainview:{
        flex:1,
        backgroundColor:"black",
    },
    nametxt:{
        color:"#ffcc66",
        fontSize:25
    },
    textview:{
        marginStart:vw*0.10,
        marginTop:vh*0.05
    },
    BtnStyle:{
        color:'black',
        backgroundColor:'#ffcc66',
        width:130,height:40,
        textAlign:'center',
        fontSize:22,
        fontWeight:'bold',
        paddingTop:5,
        marginTop:30
    },
    Heading:{
        color:'#ffcc66',
        fontSize:22,
        fontWeight:'bold',
        textAlign:'center'
    },
    txtAnswer:{
        color:'#ffcc66',
        fontSize:18
    },
    txt:{
        color:'white',
        fontSize:20,
        fontWeight:'bold'

    }
})
export default RequestDetail