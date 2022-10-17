import { StatusBar } from 'expo-status-bar';
// import react from react ;
import { StyleSheet, Text, View } from 'react-native';
// import Main from './src/Screens/Home/main.js';
import Header from './src/Screens/Header/Header.js';
// import Footer from './srcc/Footer/Footer.js';
import Form from "./src/Screens/Form/Form"


export default function App() {
  return (
    <View style={Styles.container}>
      <Header />
      <View style={{width:"100%" , height:1 ,backgroundColor:"grey"}}>
      </View>
      <Form />
      {/* <Main /> */}
      {/* <Footer /> */}
      <StatusBar style="auto" />
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
    // paddingLeft:16,
    paddingright:16,
    marginTop:24
  },

});


