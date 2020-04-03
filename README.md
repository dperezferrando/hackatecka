# Hackatecka - React Native + Rematch

## Redux

**Redux** es una biblioteca para controlar el estado de nuestras aplicaciones web de una forma sencilla y consistente.
Puede utilizarse con React, Angular, Ember, jQuery, o JavaScript pelado (nosotros solo lo vamos a ver con React).

### Principios básicos
1. Una sola fuente de verdad: 
Existe un único Store con todo el estado.
2. El estado es de solo lectura: 
No se puede alterar el estado directamente.
3. Solo se puede modificar de manera indirecta emitiendo una action de modificarlo.
Los cambios se hacen mediante funciones puras: 
No se debe modificar el estado actual sino devolver uno nuevo.

### Componentes
La forma que tenemos de comunicarle a Redux que algo sucedió y queremos realizar un cambio es mediante las **Actions**, las cuales son solo un objetito plano que tiene información sobre el evento.La convención para definir el tipo de evento y datos relevantes al mismo es `{ type: 'Foo', payload: 'bar' }`.

Mientras que las actions describen que algo ocurrió no especifican cómo nuestra aplicación reacciona a ese algo. De esto se encargan los **Reducers**, que son funciones que reciben el estado actual de la aplicación y la action a realizar y devuelven un nuevo estado, sin modificar directamente el estado actual.

### Ciclo de Vida

![ciclo de vida](https://res.cloudinary.com/practicaldev/image/fetch/s--fCDvEpjd--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://i.stack.imgur.com/LNQwH.png)


### Redux-Observable

Esto es todo muy lindo pero falta algo ligeramente importante… Que pasa si necesito hacer algo de manera asincrónica?
Redux tiene su propio mecanismo de actions async pero usualmente nosotros usamos **Redux-Observable**, un middleware para Redux que nos permite más libertad a la hora de operar con actions.
Introduce el concepto de **Epic**, el cual recibe un stream de actions y retorna otro stream de actions.

### Ciclo de Vida

Agregando a la ecuación las epics, el ciclo de vida cambia ligeramente:

![](https://res.cloudinary.com/practicaldev/image/fetch/s--46A7j5m5--/c_imagga_scale,f_auto,fl_progressive,h_500,q_auto,w_1000/https://cl.ly/3I44361h3q0U/Image%25202018-06-10%2520at%25208.44.12%2520AM.png)

