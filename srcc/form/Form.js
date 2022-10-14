import react , {Component}  from "react";
import { StyleSheet, Text, View , TextInput ,TouchableOpacity} from 'react-native';
import TextInputComp from "../Components/TextinputComp";
class Form extends Component{
    constructor(){
        super();
        this.state={
            firstName:'',
            lastName:'',
            age:null,
            email:'',
        }
    }

    render(){

        const{firstName,lastName,age,email} = this.state
        

    return(
        <View style={{marginTop:32}}>
             <TextInputComp
                value={this.state.firstName}
                placeholder="enter your first name"
                onChangeText={firstName => {
                    this.setState({firstName})
                }}
            />  
             <TextInputComp
                value={this.state.lastName}
                placeholder="enter your Last name"
                onChangeText={lastName => {
                    this.setState({lastName})
                }}
                textinputstyle={style.inputText}
            /> 
             <TextInputComp
                value={this.state.age}
                placeholder="enter your Age"
                onChangeText={age => {
                    this.setState({age})
                
                }}
                keyboardtype={"numeric"}
                textinputstyle={style.inputText}
            />  
            <TextInputComp 
            value={this.state.email}
            placeholder="enter your email"
            onChangeText={email => {
                this.setState({email})
                console.log("hhdhbd",email)
            }}
            keyboardtype={'email-address'}
            textinputstyle={style.inputText}
        /> 
        <View style={{alignItems:'center'}}>
        <TouchableOpacity style={style.btnstyle}
        onPress={()=>{
            alert(firstName+"\n"+lastName+"\n"+age+"\n"+email)
        }} >
            <Text> DONE </Text>
            </TouchableOpacity>
        </View>  
        </View>
    
    )
}}

const style= StyleSheet.create({
    inputText:{
        marginTop:20,
    },
    btnstyle:{
        marginTop:300 ,
         backgroundColor:"#FA8072" , 
         width:"100%" , height:40 , 
        alignItems:'center', 
        justifyContent:'center'

    }

})
export default Form
