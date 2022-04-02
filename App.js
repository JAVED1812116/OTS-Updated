import 'react-native-gesture-handler';
import React, { useEffect, useState,ActivityIndicator} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppStack from "../OTS/src/navigation/tab/Tab";
import TenantStack from '../OTS/src/navigation/tab/TenantTab';
import AuthStack from "../OTS/src/navigation/stack/AuthStack";
import firebase from 'firebase';
import Loader from './src/components/Loader';
import SplashScreen from 'react-native-splash-screen'

export default function App() {
  
  useEffect(()=>{
    SplashScreen.hide()
  },[])
  const [component, setComponent]= useState(< Loader />)

  useEffect(() =>{
  const firebaseConfig = {
    apiKey: "AIzaSyAs688hHnPmHTrfi3m7YZQHhb8enuIq2Ls",
  authDomain: "otsapp-4081a.firebaseapp.com",
  databaseURL: "https://otsapp-4081a-default-rtdb.firebaseio.com",
  projectId: "otsapp-4081a",
  storageBucket: "otsapp-4081a.appspot.com",
  messagingSenderId: "1044117409234",
  appId: "1:1044117409234:web:247617be4517d0e68c8c0b",
  measurementId: "G-WL7VLCGHW8"
  };
firebase.initializeApp(firebaseConfig); 
},[])

useEffect(()=>{
    setTimeout(() =>{
    firebase.auth().onAuthStateChanged(user =>{
      if(user){
        setComponent(<AppStack/>)
        // setComponent(<TenantStack />)
      }
      else{
        setComponent(<AuthStack/>)
      }
    })
    },3000);
},[])  


  return (
    <NavigationContainer>
      {component}
    </NavigationContainer>
  );
}