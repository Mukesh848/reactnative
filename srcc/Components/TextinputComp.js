import react from "react";
import {StyleSheet , Text , View , TextInput} from "react-native";

const TextInputComp =({
    value,
    textinputstyle,
    placeholder,
    keyboardtype,
    onChangeText = ()=>{}
}) =>{
    return(
        <View style={{...textstyle.input,...textinputstyle}}>
            <TextInput 
            value={value}
            placeholder={placeholder}
            onChangeText={onChangeText}
            style={textstyle.container}
            keyboardType={keyboardtype}
            />
            </View>
        
    )
}

const textstyle = StyleSheet.create({
    container:{
        flex:1,
    },
    input:{
        width:"100%",
        height:54,
        flexDirection:"row",
        borderColor:"black",
        borderWidth:1,
        paddingHorizontal:20,
        alignItems:'center',
        justifyContent:'center'

    }

})

export default TextInputComp

