import React, * as react from 'react';
import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { useState , useEffect} from 'react/cjs/react.development';
import firebase from 'firebase';
import { ScrollView } from 'react-native-gesture-handler';
import { primaryColor } from '../../../constants';


const Account_Details = () => {
    useEffect(()=>{
        getAccountDetails()

    },[]);
    let id = firebase.auth().currentUser.uid

    // states 
    const [IBAN, setIBANNum] = useState("")
    const [BankName, setBankName] = useState("")
    const [Cardnumber, setCardNumber] = useState("")
    const[AccountDetail,setAccountDetails]=useState({})
    const submitRecord = () => {
        firebase.database().ref(`AccountDetail/${id}`)
            .set({
                IBAN,
                BankName,
                Cardnumber,
            })
            .then(response => {
                // console.log(response,"RESSSSSSSSSS");
                setIBANNum("")
                setBankName("")
                setCardNumber("")
                alert('Changed')
            })
            .catch(eror => {
                console.log(eror, "EERRREERRR");
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
    return (
        <View style={styles.MainView}>
            <Image source={require('../../../../assets/Logo.jpg')} style={styles.logo} />
            <ScrollView>
                <Image source={require('../../../../assets/Card.jpg')} style={styles.logo} />
                <Text style={styles.Heading}>Change Account Information</Text>
                <TextInput
                    placeholder='Enter your IBAN Number'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={IBAN}
                    onChangeText={(main) => setIBANNum(main)}
                />
                <TextInput
                    placeholder='Enter your Bank Name'
                    placeholderTextColor={'white'}
                    style={styles.txtField}
                    value={BankName}
                    onChangeText={(main) => setBankName(main)}
                />
                <TextInput
                    placeholder='Enter your Card Number'
                    placeholderTextColor={'white'}
                    keyboardType='numeric'
                    style={styles.txtField}
                    value={Cardnumber}
                    onChangeText={(main) => setCardNumber(main)}
                />
                <TouchableOpacity onPress={submitRecord} >
                    <Text style={styles.btn}>Save</Text>
                </TouchableOpacity>
        <View style={{marginTop:10}}>
        <Text style={[styles.Heading,{textAlign:'center'}]}>Current Account</Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Bank Name: <Text style={{color:'white'}}>{AccountDetail.BankName}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>IBAN Number:<Text style={{color:'white'}}>{AccountDetail.IBAN}</Text></Text>
        <Text style={{color:'#ffcc66',fontSize:16}}>Card Number:<Text style={{color:'white'}}>{AccountDetail.Cardnumber}</Text></Text>
</View>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    logo: {
        width: 120,
        height: 150
    },
    txtField: {
        borderBottomWidth: 2,
        borderBottomColor: '#ffcc66',
        width: 275,
        color: 'white'

    },
    btn: {
        marginTop: 22,
        color: 'white',
        fontSize: 27,
        width: 215,
        borderWidth: 2,
        borderRadius: 15,
        textAlign: 'center',
        backgroundColor: '#ffcc66'
    },
    MainView:
    { flex: 1, 
        backgroundColor: 'black',
         alignItems: 'center',
         backgroundColor:primaryColor
         },
         Heading:
         {
          color: '#ffcc66',
          fontSize: 24, 
          fontWeight: 'bold' 
        },

})
export default Account_Details