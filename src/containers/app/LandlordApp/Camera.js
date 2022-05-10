import React, { Fragment, Component } from 'react';
import {Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {launchCamera}from 'react-native-image-picker';


var options = {
  title: 'Select Image',
  customButtons: [
    {
      name: 'customOptionKey',
      title: 'Choose Photo from Custom Option'
    },
  ],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};
const Camera =()=> { 

  const UploadImage=()=>{
   launchCamera(options,response=>{
     console.log(response,"RESPPPPPP");
   })
  }
    return (
    <TouchableOpacity onPress={UploadImage}>
      <Text>Upload Image</Text>
    </TouchableOpacity>
    );
};
export default Camera;