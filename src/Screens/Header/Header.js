

import { StyleSheet, Image, Text, View } from 'react-native'
import React, { Component } from 'react'
import imagepath  from '../../constants/imagepath';

 class Header extends Component {
  render() {
    return (
      <View style={hStyles.header}>
        <Image style={hStyles.back} source={imagepath.iback} />
        {/* <Image style={{width:90 ,height:70 , borderRadius:500}} source={require('../images/logo.jpg')} /> */}
        <Text style={hStyles.Text}> HOME </Text>
        {/* <Image style={{marginTop:10 ,width:40 ,height:40 }}  source={require('../images/edit.jpg')} /> */}
        
      </View>
    )
  }
}


const hStyles = StyleSheet.create({
  header:
  { 
    flexDirection:'row',
    justifyContent:'space-between',
  },
  back:
{
  marginTop:10 , marginLeft:10 ,width:40 ,height:40
  },
  Text:{
    color:'#FA8072',
    marginRight:140,
    margin:10,
    fontStyle:"Bold",
    fontSize:30,
  }
});

export default Header;

