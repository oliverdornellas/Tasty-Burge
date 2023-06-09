import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';


export function Menu(props) {

    const [mostrarDescricao, setmostrarDescricao] = useState(false);

    const pressioneBotao = () => {
        setmostrarDescricao(!mostrarDescricao)
    }

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

    return (
        <View style={styles.body}>
            <Button style={styles.botaodescricao} title="mostrar descrição" onPress={pressioneBotao} color={'#A5841B'} />
            {mostrarDescricao && (
                <Text style={styles.textodescricao}>
                    A Tasty Burge é uma hamburgueria artesanal que oferece opções deliciosas de hambúrgueres, batatas fritas e bebidas. Venha nos visitar e experimente nossas especialidades!
                </Text>
            )}

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
    );
}


const styles = StyleSheet.create({

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
        maxHeight: 400,
        width: 400,
        padding: 40,
        marginBottom: -30,
        backgroundColor: '#403130',
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
