
import React from 'react';
import { StyleSheet, View } from 'react-native';

import CarsList from './components/carsList';

export default function App() {
  return (
    <View style={styles.container}>
      <CarsList />      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',    
    justifyContent: 'center',
    alignItems: 'center'
  }  
});

//  <CarItem name='Model S' subtitle='Order Online for' subtitleCTA='Touchless Delivery' image={require('./assets/images/ModelS.jpeg')} />
