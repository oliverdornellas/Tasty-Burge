import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';

export function NovoIten({props, funcao}) {
    return (
        <TouchableOpacity onPress={() => funcao(props.key)}>
            <Text style={styles.texto}>{props.texto}</Text>
        </TouchableOpacity>
    )
}



const styles = StyleSheet.create({

    botaopedidos: {
        backgroundColor: '#281610',
        color: '#A5841B',
      },

      texto: {
        color: "#fff",
        padding: 16,
        marginTop:16,
        borderColor: "bbb",
        borderWidth: 1,
        borderStyle:'dashed',
        borderRadius: 10,
        backgroundColor: '#403130',
      },

});