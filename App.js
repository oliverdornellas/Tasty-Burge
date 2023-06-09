import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import Logoburguer from './assets/img/logoburguer.png';
import { Header } from './src/components/header/index';
import { NavigationContainer } from '@react-navigation/native';
import {createNativeStackNavigator } from '@react-navigation/native-stack';
import { Menu } from './src/components/Menu/index';





function HomeScreen({ navigation }) {
  const [mostrarDescricao, setmostrarDescricao] = useState(false);

  const [pessoas, setPessoas] = useState([
    { produto: 'Hamburguer - dupla carne', key: 1 },
    { produto: 'Batata Frita', key: 2 },
    { produto: 'Hamburguer da casa', key: 3 },
    { produto: 'EG Burguer', key: 4 },
    { produto: 'Bravo Burguer', key: 5 },
    { produto: 'CocaCola', key: 6 },
    { produto: 'Chips de Cebola', key: 7 },
    { produto: 'Torresmo Suino', key: 8 }
  ])

  const pressioneBotao = () => {
    setmostrarDescricao(!mostrarDescricao)
  }

  const [inputValue, setInputValue] = useState('');
  const [foodName, setFoodName] = useState('');

  const handleInputChange = (value) => {
    setInputValue(value);
    switch (value) {
      case '1':
        setFoodName('EG Burguer');
        break;
      case '2':
        setFoodName('Burguer Crips');
        break;
      case '3':
        setFoodName('Duplo Picanha');
        break;
      case '4':
        setFoodName('Bravo Burguer');
        break;
      case '5':
        setFoodName('X Tudo');
        break;
      default:
        setFoodName('');
        break;
    }
  }



  return (
  
    <ScrollView style={styles.container}>
       <Button
      title="Pedidos"
      onPress={() => navigation.navigate('Pedidos')}
      style={styles.botaopedidos}
      />
      <Header title="Header"/>
    

      <View style={styles.descricao}>
        <Image source={Logoburguer} style={{ width: 200, height: 200 }} />
        <View style={styles.body}>
          <Button style={styles.botaodescricao} title="mostrar descrição" onPress={pressioneBotao} color={'#A5841B'} />
          {mostrarDescricao && (
            <Text style={styles.textodescricao}>
              A Tasty Burge é uma hamburgueria artesanal que oferece opções deliciosas de hambúrgueres, batatas fritas e bebidas. Venha nos visitar e experimente nossas especialidades!
            </Text>
          )}
          <TextInput
            style={{ height: 40, color: '#fff', borderColor: 'gray', borderWidth: 1 }}
            onChangeText={handleInputChange}
            value={inputValue}
            keyboardType='numeric'
            placeholder="Digite um numero de 1 a 5 e veja nossas opções"
          />
          <Text style={styles.foodnome}>{foodName}</Text>
        </View>
        <View>
          <TouchableOpacity>
            <Text style={styles.textodescricao2}>Tudo para promover uma experiência de excelência para nossos
              clientes!
            </Text>
          </TouchableOpacity>
          <Text style={styles.textoLista}> Confira aqui nossos produtos! </Text>
        </View>
        <View style={styles.listas}>

          {
            pessoas.map(
              (item) => {
                return (
                  <TouchableOpacity>
                    <Text style={styles.textoLista2}>{item.produto}</Text>
                  </TouchableOpacity>
                )
              }
            )
          }
        </View>
      </View>
  
    </ScrollView>
    
  );
}

function PedidosScreen() {
  return (
    <View>
       <Header title="Header"/>
       <Menu title="Menu"/>
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer style={styles.containernavigation}>
      <Stack.Navigator initialRouteName="Home">
       <Stack.Screen name='Pedidos' component={PedidosScreen}/>
        <Stack.Screen name='Home' component={HomeScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );

}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    fontSize: 20,
    backgroundColor: '#fff',
    maxHeight: 900

  },

  botaopedidos: {
    backgroundColor: '#281610',
    color: '#A5841B',
  },

  tituloheader: {
    backgroundColor: '#281610',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#A5841B',
    padding: 1,
    marginLeft: 55,
    margin: 2,
  },

  textodescricao: {
    color: '#A5841B',
    fontWeight: 'bold'
  },

  textodescricao2: {
    color: '#A5841B',
    fontWeight: 'bold',
    marginRight: 60,
    marginBottom: 20
  },

  body: {
    width: 400,
    padding: 40,
    marginBottom: -30
  },

  foodnome: {
    color: '#A5841B',
    fontSize: 18,
    fontWeight: 'bold',
    backgroundColor: '#403130'
  },

  listas: {
    backgroundColor: '#A5841B',
    marginTop: 8,
    padding: 5,
    borderRadius: 4
  },

  textoLista2: {
    color: 'white',
    marginTop: 1,
    fontSize: 15
  },

  textoLista: {
    alignItems: 'center',
    fontSize: 20,
    marginLeft: 22,
    color: 'white'
  },

  descricao: {
    backgroundColor: '#403130',
    color: 'white',
    flex: 1,
    alignItems: 'center'

  },




});





