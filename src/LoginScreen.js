// import React , { useState } from "react";
// import { Switch, View, Text, StyleSheet, Button, TouchableOpacity, Image, TextInput, SafeAreaView, KeyboardAvoidingView, ScrollView, KeyboardAwareScrollView } from "react-native";
// import Modal from "react-native-modal";
// import { Avatar, Card, Title, Paragraph } from 'react-native-paper';
// import LoginIcon from '../assets/logo.jpg'
// import InsideHospital from '../assets/main_logo.png'
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Footer from './Footer';

// var name = "Ali Hassan"
// const LoginScreen = ({ navigation }) => {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [isModalVisible, setModalVisible] = useState(false);
//   const [loginType, setLoginType] = useState("");
//   const toggleModal = () => {
//     setModalVisible(!isModalVisible);
//   };
//   const [isEnabled, setIsEnabled] = useState(false);
//   const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  
//   return (
//     <KeyboardAvoidingView style={{flex:1}} behavior="padding" enabled>
//       <ScrollView contentContainerStyle={{flex: 1}}>
//       <Modal isVisible={isModalVisible}>
//         <View style={styles.overlayLoginCard}>
          
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Email."
//               placeholderTextColor="white"
//               onChangeText={(email) => setEmail(email)}
//             />
//           </View>
//           <View style={styles.inputView}>
//             <TextInput
//               style={styles.TextInput}
//               placeholder="Password."
//               placeholderTextColor="white"
//               secureTextEntry={true}
//               onChangeText={(password) => setPassword(password)}
//             />
//           </View>
//           <TouchableOpacity
//           style={styles.signInButton}
//           onPress={() =>{
//             if(loginType == 'CareGiver'){
//               navigation.navigate('Patient')
//             }
//             if(loginType == 'Agency'){
//               navigation.navigate('Agency')
//             }
//             if(loginType == 'Patient'){
             
//             }
//           }
//           }
//         >
//           <Text style={{ color: 'white' }}>Sign In</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.closeButton}
//           onPress={toggleModal}
//         >
//           <Text style={{ color: 'white' }}>Close</Text>
//         </TouchableOpacity>
//         </View>
//       </Modal>



//       <View style={styles.viewLayout}>
//         <Image style={styles.headerImage} source={InsideHospital}></Image>
//       </View>

//       <View style={styles.loginButtonHolder}>
        
//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>{
//             toggleModal()
//             setLoginType('Agency')
//           }}
//         >
//           <Text style={{ color: 'white' }}>AGENCY</Text>
//         </TouchableOpacity>


//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>{
//             toggleModal()
//             setLoginType('Patient')
//           }}
//         >
//           <Text style={{ color: 'white' }}>PATIENT</Text>
//         </TouchableOpacity>

//         <TouchableOpacity
//           style={styles.button}
//           onPress={()=>{
//             toggleModal()
//             setLoginType('CareGiver')
//           }}
//         >
//           <Text style={{ color: 'white' }}>CARE GIVER</Text>
//         </TouchableOpacity>
//       </View>
//     </ScrollView>
//     </KeyboardAvoidingView>
//   )
// };

// const styles = StyleSheet.create({
//   text: {
//     fontSize: 30,
//   },
//   viewLayout: {
//     marginHorizontal: "auto",
//     width: '100%',
//     position: 'relative',
//     height: '40%',
//   },
//   headerImage: {
//     width: '100%',
//     height: '100%',
//     position: 'relative',
//     flex: 1,
//     top: 0,
//     resizeMode: 'contain',
//   },
//   userLogoCard: {
//     width: '50%',
//     height: '15%',
//     position: 'absolute',
//     alignSelf: 'center',
//     marginTop: '50%',
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 9,
//     },
//     shadowOpacity: 0.50,
//     shadowRadius: 12.35,

//     elevation: 19,
//   },

//   userLogoImage:{
//     flex: 1,
//     width: '100%',
//     height: '100%',
//     resizeMode: 'contain',
//   },

//   loginButtonHolder: {
//     position: 'relative',
//     width: '100%',
//     height: '50%',
//     bottom: 0,
//     flexDirection: 'column',
//     justifyContent: "center",
//     alignItems: "center",
//   },

//   button: {
//     margin: 5,
//     alignItems: "center",
//     paddingVertical: 20,
//     width: '60%',
//     borderRadius: 20,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: "#1B365C",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.00,

//     elevation: 24,
//   },

//   signInButton: {
//     margin: 5,
//     alignItems: "center",
//     paddingVertical: 20,
//     width: '60%',
//     borderRadius: 20,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: "#1B365C",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.00,

//     elevation: 24,
//   },

//   closeButton: {
//     margin: 5,
//     alignItems: "center",
//     paddingVertical: 20,
//     width: '60%',
//     borderRadius: 20,
//     borderWidth: 5,
//     borderColor: 'white',
//     backgroundColor: "grey",
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 12,
//     },
//     shadowOpacity: 0.58,
//     shadowRadius: 16.00,

//     elevation: 24,
//   },

//   overlayLoginCard: {
//     width: '90%',
//     height: '55%',
//     position: 'absolute',
//     alignSelf: 'center',
//     marginTop: '50%',
//     backgroundColor: 'white',
//     borderRadius: 20,
//     shadowColor: "#000",
//     shadowOffset: {
//       width: 0,
//       height: 9,
//     },
//     shadowOpacity: 0.50,
//     shadowRadius: 12.35,
//     elevation: 19,
//     alignItems: 'center',
//     justifyContent: 'center'
//   },
//   inputView: {
//     backgroundColor: "#7EA1C4",
//     borderRadius: 10,
//     width: "70%",
//     height: 45,
//     marginBottom: 20,
//     alignItems: "center",
//   },
//   TextInput: {
//     height: 50,
//     flex: 1,
//     padding: 10,
//     marginLeft: 20,
//     color: 'white',
//   },

// });

// export default LoginScreen;