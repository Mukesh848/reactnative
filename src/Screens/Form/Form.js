import react, { Component } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';
import TextInputComp from '../../Components/TextinputComp'

class Form extends Component {

    constructor() {
        super();
        this.state = {
            firstName: '',
            lastName: '',
            age: '',
            email: '',
        }
    }

    render() {
        const validation = () => {
            if (firstName == '') {
                alert("please enter First Name")
                return
            }
            if (lastName == '') {
                alert("please enter last name ")
                return
            }
            if (age == '') {
                alert("please enter your age")
                return
            }
            if (email == '') {
                alert("please enter email")
                return
            }

            else {
                alert(firstName + "\n" + lastName + "\n" + age + "\n" + email)
            }
        }

        const { firstName, lastName, age, email } = this.state

        return (
            <View style={{ marginTop: 32, paddingLeft: 16, paddingRight: 16 }}>
                <TextInputComp
                    value={firstName}
                    placeholder="enter your first name"
                    onChangeText={firstName => {
                        this.setState({ firstName })
                    }}
                    textinputstyle={{ marginTop: 50, backgroundColor: '#F5DEB3', borderRadius: 15 }}
                />
                <TextInputComp
                    value={lastName}
                    placeholder="enter your Last name"
                    onChangeText={lastName => {
                        this.setState({ lastName })
                    }}
                    textinputstyle={{ ...style.inputStyle, backgroundColor: "#FFE4E1" }}
                />
                <TextInputComp
                    value={age}
                    placeholder="enter your Age"
                    onChangeText={age => {
                        this.setState({ age })

                    }}
                    keyboardtype={"numeric"}
                    textinputstyle={{ ...style.inputStyle, backgroundColor: "#E0FFFF" }}
                />
                <TextInputComp
                    value={this.state.email}
                    placeholder="enter your email"
                    onChangeText={email => {
                        this.setState({ email })

                    }}
                    keyboardtype={'email-address'}
                    textinputstyle={{ ...style.inputStyle, backgroundColor: '#D3D3D3' }}
                />
                <View style={{ alignItems: 'center' }}>
                    <TouchableOpacity style={style.btnstyle}
                        onPress={validation}>
                        <Text> DONE </Text>
                    </TouchableOpacity>
                </View>
            </View>

        )
    }
}

const style = StyleSheet.create({


    btnstyle: {
        marginTop: 300,
        backgroundColor: "#FA8072",
        width: "100%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15

    },
    inputStyle: {
        marginTop: 20,
        backgroundColor: "#D3D3D3",
        borderRadius: 15
    }

})


export default Form
