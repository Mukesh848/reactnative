import react ,{Component} from "react";
import { StyleSheet, Text, View } from 'react-native';
import Footer from "../end/Footer";




 class Main extends Component{
   constructor(props){
     super(props)
     this.state={
       name:'my app'
     }
   }


    render(){
        return(
          <>
            <View style={{flex:1 ,justifyContent:"center"}}>
                <Text style={{fontWeight:'bold'}}> {this.state.name}</Text>
            </View>
            
            <Footer
            onpressBtn={()=>this.setState({name:"mukesh"})}
            />
            </>
        )
    }
}




// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//       backgroundColor: '#fff',
//       alignItems: 'center',
//       justifyContent: 'center',
//     },
//   });

export default Main;


// import { Text, View } from 'react-native'
// import React, { Component } from 'react'

// export default class Apps extends Component {
//   render() {
//     return (
//       <View>
//         <Text>Apps</Text>
//       </View>
//     )
//   }
// }
