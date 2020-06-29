# React native Test
Desafio con react native, componente de texto editable, movible por el eje X e Y. Tamaño editable con un "pinch" en la pantalla

### Se utilizo:
- Boton nativo para mostrar el texto
- Texto editable con un TextInput
- PanResponder para obtener el cambio en la posicion del dedo y mover el texto por X e Y
- Style in-line y con stylesheet

### A resolver:
- Rotacion y tamaño del texto. Logre que se pueda hacer esto con una dependencia 'viewTransformer' pero al hacer mas pruebas genero problemas con el movimiento del panResponder, generaba bugs en el movimiento y volvia para posiciones anteriores, no tomaba bien la posicion del tap, etc
- Posibilidad de agregar mas input de texto, actualmente solo tiene uno. Probe con un state que controle la cantidad y un for para pushear el componente cuando se haga click, pero los textos anteriores no desaparecian y generaba problemas en el layout
