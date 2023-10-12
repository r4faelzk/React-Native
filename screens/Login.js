import { StyleSheet, Text, SafeAreaView, TextInput, Image, TouchableOpacity, View } from 'react-native';
import Materialicons from 'react-native-vector-icons/MaterialCommunityIcons'

export default function Login({navigation}) {
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
      
      {/* LOGIN ALTERNATIVO (REDES SOCIAIS) */}
      <Text style={styles.logarcom}>
            Logar com ...
      </Text>

      <View style={styles.botoes}>

        <TouchableOpacity style={styles.btnLoginCom}>
            <Image 
              source={require("../assets/imagens/facebook.png")}
            />
        </TouchableOpacity>

        <TouchableOpacity style={styles.btnLoginCom}>
            <Image 
              source={require("../assets/imagens/google.png")}
            />
        </TouchableOpacity>

      </View>

      {/* CRIAÇÃO DE USUÁRIO */}
      <View style={styles.botoes}>
        <TouchableOpacity
          onPress={()=>{
            navigation.navigate("CreateUser")
          }}
        >
            <Text style={styles.btnRegistro}>CRIAR CONTA</Text>
        </TouchableOpacity>
      </View>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16
  },
  topo: {
    alignItems: "center"
  },
  login: {
    width: "50%"
  },
  texto: {
    color: "black",
    fontSize: 28,
    fontWeight: '500',
    marginBottom: 30,
  },

  containerTextInput:{
    flexDirection: 'row',
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    paddingBottom: 8,
    marginBottom: 20,
    alignItems: 'center'
  },

  textInput:{
    padding: 10,
    color: "black",
    width: '100%'
  },

  btnLogin:{
    backgroundColor: '#3480EB',
    padding: 20,
    borderRadius: 10,
    marginBottom: 15
  },
  txtLogin:{
    textAlign: 'center',
    fontSize: 16,
    color: '#fff'
  },

  logarcom:{
    textAlign: "center",
    color: "#666",
    marginBottom: 15
  },

  botoes:{
    flexDirection: "row",
    justifyContent: "center",
    marginBottom: 15
  },

  btnLoginCom:{
    borderColor: "#DDD",
    borderWidth: 2,
    borderRadius: 10,
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginRight: 10
  },

  btnRegistro:{
    color: "#3480EB",
    fontWeight: '700'
  }
});
