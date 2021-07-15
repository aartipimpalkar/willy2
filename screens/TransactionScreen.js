import React from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';
import *as Permissions from 'expo-permissions'
import {BarCodeScanner} from 'expo-barcode-scanner'

export default class TransactionScreen extends React.Component
{
    constructor()
    {
        super()
        this.state={
            hasCamPermission:null,
            scanned:false,
            scannedData:'',
            buttonState:"normal"


        }
    }
    getCameraPermissions=async()=>{
        
           const{status}=await Permissions.askAsync(Permissions.CAMERA);
           this.setState=({
               hasCamPermission:status==="granted",
               scanned:false,
               buttonState:"clicked",
               scannedData:"Hello # Ready to scan"
           })
        }
    
        
    render()
    {
        const hasCameraPermissions=this.state.hasCamPermission
       if(this.state.hasCamPermission===true)
        {
            return(
                <Text>
                    {this.state.hasCamPermission===true?this.state.scannedData:"request for Permissions"}
                </Text>
            )
        }
        return(
            <View>
                <Text style={{margin:10}}>Transaction Screen</Text>
                <TouchableOpacity style={{backgroundColor:"aqua", width:400 ,height :30}}
                    onPress={this.getCameraPermissions}
                > 
                    <Text> Scan The QR Code</Text>
                </TouchableOpacity>
            </View>
            
        )
    }
}