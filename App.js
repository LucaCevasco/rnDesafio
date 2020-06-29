import React from 'react';
import { StyleSheet, View} from 'react-native';
import TextEdit from './components/TextEdit';

export default function App() {
  return (
    <View style={styles.container}>
      <TextEdit></TextEdit>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    top: 30
  },
});

