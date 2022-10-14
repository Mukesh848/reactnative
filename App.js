import { StatusBar } from 'expo-status-bar';
// import react from react ;
import { StyleSheet, Text, View } from 'react-native';
import Main from './srcc/home/main.js';
import Header from './srcc/header/header.js';
import Form from './srcc/form/Form.js';
import Footer from './srcc/end/Footer.js';



export default function App() {
  return (
    <View style={Styles.container}>
      <Header />
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
    paddingLeft:16,
    paddingright:16,
    marginTop:24
  },

});


