# Hackatecka - React Native + Rematch

## Rematch

En capítulos anteriores:

_“**Redux** es una biblioteca para controlar el estado de nuestras aplicaciones web de una forma sencilla y consistente.”_

Pero tan sencillo no era, para poder hacer un simple manejo manejo tenes que:
- Crear una action con su tipo y payload
- Crear un reducer con un switch por tipo de action
- Y encima le agregamos epics para hacer cosas asincrónicas que lleva su otro tanto de complejidad

Y ahí es cuando llega **Rematch** a salvar las papas.

Rematch es un wrapper sobre Redux que provee una interfaz simplificada. En sus propias palabras: _“Rematch is Redux best practices without the boilerplate”._

Provee el concepto de Model, el cual se encarga de manejar estado inicial, reducers, actions y async actions.

En lugar de definir actions, epics y reducers en distintos lugares, centralizamos todas las responsabilidades de manera cohesiva en un solo lugar.

Si al inicializar el store definimos que:
```javascript
const bar = { state: 0, reducers: { foo: (state, payload) => payload } }
const store = init({ models: { bar } })
```

En lugar de lanzar de definir y lanzar una action solo debemos llamar a `dispatch.bar.foo`.

Y del resto se encarga Rematch de hacerlo por nosotros.
