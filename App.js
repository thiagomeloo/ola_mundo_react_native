import React,{useState} from 'react';
import { Text, View, TouchableOpacity} from 'react-native';

import styles from './src/styles/style';


export default function App() {
  
  const [count, setCount] = useState(0);

  return (
    
    <View style={styles.container}>

      <Text style={styles.titulo}>Olá Mundo</Text>
      <Text style={styles.sub_titulo}>Primeiro App React Native</Text>

      <Text style={styles.texto}>{count}</Text>

      <View >

        <TouchableOpacity 
            style={styles.btn}
            onPress={() => setCount(count+1)}>
            
          <Text style={styles.btnFont}>Clique aqui!</Text>

        </TouchableOpacity>
        
      </View>
      
    </View>
  );
}


