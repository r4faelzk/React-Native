import { StyleSheet, Text, SafeAreaView, TextInput, Image,TouchableOpacity, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login() {
  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.topo}>
        <Image
          style={styles.login}
          source={require('../assets/imagens/login.png')}
        />
      </View>
      <Text style={styles.texto}>LOGIN</Text>

      {/* TEXTINPUT DE E-MAIL */}
      <View style={styles.containerTextInput}>
        <Materialicons name='email' size={20} color={'#666'}/>
        <TextInput style={styles.textInput} placeholderTextColor='#666' placeholder='E-MAIL' keyboardType='email-address' />
      </View>

      { /* TEXTINPUT DE SENHA */ }
      <View style={styles.containerTextInput}>
      <Materialicons name='form-textbox-password' size={20} color={'#666'}/>
        <TextInput style={styles.textInput}  placeholderTextColor='#666' placeholder='SENHA' secureTextEntry={true} />
      </View>

      {/* BOTÃO DE LOGIN */}
      <TouchableOpacity style={styles.btnLogin}>
        <Text style={styles.txtLogin}>Fazer login</Text>
      </TouchableOpacity>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#2e2e2e',
    padding: 15
  },
  topo: {
    alignItems: "center"
  },
  login: {
    width: 350
  },
  texto: {
    color: "white",
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
  },

  containerTextInput:{
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 25,
    alignItems: 'center'
  },

  textInput:{
    padding: 10,
    color: 'white'
  },

  btnLogin:{
    backgroundColor: '33480eb',
    padding: 20,
    borderRadius: 10,
    marginBottom: 30
  },
  txtLogin:{
    textAlign: 'center',
    fontWeight: 700,
    fontSize: 16,
    color: '#fff'
  }
});
