import { StyleSheet, Text, View, Button, TextInput, Image, ScrollView, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export function Header(props) {
    return (
        <View style={styles.header}>

        <Text style={styles.tituloheader}>TASTY BURGE
          <Ionicons name="ios-fast-food-outline" size={40} color="#A5841B" />
        </Text>
        
        </View> 
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      fontSize: 20,
      backgroundColor: '#fff',
      maxHeight: 900
  
    },
  
    header: {
      backgroundColor: '#281610',
      padding: 1,
      width: 400,
      marginTop: 21
  
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
  
    
  
  
  
  });
  
  