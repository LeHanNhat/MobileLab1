/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { View, Text, StyleSheet, ScrollView, Button, Alert } from 'react-native';
import data from './Data'
import Square from './Square';
import style1 from './style';

function App(): React.JSX.Element {

  return (
    <ScrollView style={style1.container}>
      {data.map((item, index) => (
        <Square key={item} text={`Square ${index + 1}`} />
      ))}
    </ScrollView>
  );
}

export default App;