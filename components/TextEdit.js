import React, {useState} from 'react';
import { StyleSheet, View, TextInput, Animated, PanResponder, Button } from 'react-native';


export default function TextEdit() {

    // States
    const pan = useState(new Animated.ValueXY())[0]
    const [value, onChangeText] = React.useState('Hola mundo');
    const [show, setShow] = useState(false);

    // funcion cambiar show state
    const ShowHideComponent = () => {
      if (show === true) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

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
        <Button title={'tap mostrar/ocultar'} color="#000" onPress = {ShowHideComponent}/>
        {show ? (
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
            style={{ color: '#fff', borderWidth: 1, fontSize:27}}
            multiline
            onChangeText={text => onChangeText(text)}
            value={value}
          />
          </Animated.View>
        ) : null}
        
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