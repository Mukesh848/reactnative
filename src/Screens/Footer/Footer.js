import { View, Text ,TouchableOpacity} from 'react-native'
import React from 'react'

const Footer = (props) => {
  const{onpressBtn}=props;
  return (
<TouchableOpacity onPress={onpressBtn}
        style={{backgroundColor:'#AFEEEE', margin:25 , height:42 , width:'100%' , alignItems:'center', justifyContent:'center' , borderRadius:8}}>
          
          <Text > Click Me </Text>
        </TouchableOpacity>   
  )
}

export default Footer