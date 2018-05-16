# Almundo Fronted
Es una aplicación Web SPA hecha con AngularJS, AngularSanitize versión 1.6.9, y Angular ui-boostrap-tpls versión 2.5.0; Para el Responsive, la aplicación usa Bootstrap 3.3.7 y la versión 4 de Boostrap Material Design (esta última para tener el componente `card` mas vistoso). No se usa Jquery en absoluto, solo Angular JS para todo. 

## Diseño
El diseño se estructura de la siguiente forma:
* Los iconos SVG se transformaron en una fuente para llamarlos en los tags `<span></span>` y `<i></i>` como una clase manipulable a través de CSS.
* Para los filtros, se usa una `ng-template` y dentro un componente `card`.
* En los filtros y otros elementos de diseño, se manipulan a traves de las `@mediaScreen` para mostrar/ocultar elementos.
* El resto de diseño se aprovecha las rejillas de Bootstrap mesclado con estilos personalizados.

## App Javascript
El hacer uso total de Angular, el App `almundo-app` posee:
* El filtro `toRange` que permite, por medio de la directiva `ng-repeat` mostrar el número correcto de estrellas dependiendo de lo que el API arroje.
* El servicio `consumeApi`que realiza la petición http al API en `Node JS` por medio de `$http.get` y carga la información recibida en formato `JSON`en el `$scope` de hoteles que es un array.
* La directiva `resize`para detectar por medio de angular el cambio de tamaño de la pantalla y así por medio de `ng-show` mostrar/ocultar los filtros.
* El controlador `almundo-controller` que contiene el `$scope`del app.

Para ver en funcionamiento puede ir [aquí](https://frontalmundo.herokuapp.com/).