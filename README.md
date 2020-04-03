# Hackatecka - React Native + Rematch

## Requisitos
- Clonar este repo 
- Node 12
- `npm install -g explo-cli`
- Entrar en la carpeta hackateca y hacer `npm i`
- Instalar app expo en el celular

Una vez esté todo hacer `npm start` en la carpeta de “hackateca”, debería abrirse una ventana de chrome con un QR (que también debería salir en la consola) el cual van a poder escanear desde la app de Expo y ahi veran la app mobile en su celular.

## React

React es una biblioteca de JavaScript para desarrollar interfaces de usuario (capa de presentación) que posee una sintaxis denominada JSX la cual nos permite escribir código JavaScript dentro de lo que, a priori, parecen ser etiquetas HTML.
Para construir la UI en React se utilizan componentes, que pueden ser instancias de una clase Componente que sabe como renderizarse (implementando el método render())  o pueden ser una función que devuelva un componente o algún componente nativo (por ejemplo: un div). 

Por ejemplo:

```JSX
function ComponenteBasico() {
  return <div>Hola! Hoy es {new Date().toString()}!</div>;
}
```
o

```JSX
class ComponenteBasico extends React.Component {
  render() {
    return <div>Hola! Hoy es {new Date().toString()}!</div>;
  }
}
```

Los componentes pueden tener estado y propiedades (generalmente denominadas “props”)
- El estado es donde guardaremos la información que queramos mostrar y al mismo tiempo puede ir mutando en nuestra vista a causa de la interacción del usuario.
- Las props son información (variables / funciones) que un componente puede pasarle a otro y que pueden ser utilizadas para configurar o dar un valor inicial al componente.
Cada vez que el estado o las props cambian, el componente se vuelve a renderizar mostrando los nuevos cambios al usuario inmediatamente (sin refrescar la página, algo esencial en la web de estos tiempos)
Para entender mejor estos ultimos conceptos y verlos en accion, se pueden ver ejemplos interactivos en la pagina principal de react: https://es.reactjs.org/

## React Native

Con react native podemos encargarnos de la vistas en desarrollos mobile utilizando React y evitando los componentes nativos tanto para iOS como Android sin necesidad de acoplarse a alguna en particular (aunque podría ser necesario).
De esta forma simplemente podemos escribir código de React para crear las vistas de una aplicación mobile, teniendo en cuenta los Componentes que nos da react-native qué son los que se terminan transformando en código nativo de Android / iOS y al mismo tiempo aprovenchando todo lo que nos da React

Algunos de los más importantes son:

- [View](https://reactnative.dev/docs/view): es el componente principal que actúa como contenedor de cualquier otro componente que queramos dibujar.
- [ScrollView](https://reactnative.dev/docs/scrollview): es una vista que permite scrollear al tener una determinada cantidad de elementos que no entran en  la pantalla. Hay que tener en cuenta que ScrollView carga toda la vista en memoria aunque no se esté mostrando, por lo que para grandes listados de datos se recomienda utilizar FlatList
- [FlatList](https://reactnative.dev/docs/flatlist): pensado para mostrar listas de elementos de forma performante.
- [Text](https://reactnative.dev/docs/text): para mostrar texto
- [Image](https://reactnative.dev/docs/image): para mostrar imágenes
- [Button](https://reactnative.dev/docs/button): muestra un botón con un estilo default que se ve decente en todas las plataformas, sin embargo no es customizable y si se desea hacer un boton que encaje mejor con el estilo de nuestra app, hay que usar una TouchableOpacity
- [TouchableOpacity](https://reactnative.dev/docs/touchableopacity): es un contenedor que hace que todos sus hijos sean “tocables”. Si solo le ponemos texto como hijo podemos armar un botón.
- [StyleSheet](https://reactnative.dev/docs/stylesheet): permite aplicar CSS a partir de un objetito de JS. Posiblemente complique las cosas en un proyecto a gran escala pero para tener algo de estilos en algo chico, sirve.

Tabla comparativa de algunos elementos:
![tabla](https://imgur.com/j5wpT2F.png)

## A hacer cositas

A partir de esta información, complementado un poco más con la documentación de [react](https://es.reactjs.org/) y la de [react-native](https://reactnative.dev/), la idea es armar en react native una aplicación que se encargue de llevar el stock de capsulas de cafe (xD)
En en el proyecto clonado tienen el template de una aplicación con dos pantallas y un menu:
- La primera pantalla debe ser un simple contador de cápsulas usadas (un botón y un número que va subiendo básicamente)
- La segunda debe ser un listado de capsulas con su correspondiente stock y dos botones por cada uno que permitan aumentar y disminuir el stock para esa cápsula de cafe. En la carpeta “data” ya tienen un array de cápsulas para usar.

![](https://www.pngitem.com/pimgs/m/109-1094659_to-be-continued-png-continued-back-to-the.png)
