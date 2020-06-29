import React, {useState} from 'react';
import { StyleSheet, Text, View, TextInput, Animated, PanResponder } from 'react-native';


export default function TextEdit() {

    // States
    const pan = useState(new Animated.ValueXY())[0]
    const [value, onChangeText] = React.useState('Cree textos aqui');

    // PanResponder para el seguimiento en x e y del touch
    const panResponder = useState(
      PanResponder.create({
        onMoveShouldSetPanResponder: () => true,
        onPanResponderGrant: () => {
          pan.setOffset({
            x: pan.x._value,
            y: pan.y._value
          });
        },
        // al detectar movimiento, dx y dy toman los valores del movimiento
        onPanResponderMove: Animated.event(
          [
            null,
            { dx: pan.x, dy: pan.y }
          ]
        ),
        onPanResponderRelease: () => {
          pan.flattenOffset();
        }
      })
    )[0]
  
    return (
      <View style={styles.container}>
          <Animated.View
            style={[{
              flexWrap: 'wrap',
              width: '50%',
            }, 
            pan.getLayout()
            ]}
            {...panResponder.panHandlers}
          >
          <TextInput
            style={{ color: '#fff', borderWidth: 1,borderBottomColor:'grey', }}
            multiline
            onChangeText={text => onChangeText(text)}
            value={value}
        />
          </Animated.View>
      </View>
    );
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#000',
      top: 30
    },
    text: {
      color: '#fff',
      width: '100%',
      fontSize: 20,
    },
  });