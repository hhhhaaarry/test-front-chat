## Librerías Implementadas

En este proyecto, he implementado varias librerías para lograr la funcionalidad deseada. A continuación, se detallan las librerías utilizadas y su propósito:

- **Moment.js**: Esta librería se ha utilizado para manejar las fechas en el proyecto. Moment.js es una librería de JavaScript que permite parsear, validar, manipular y mostrar fechas y horas de manera sencilla y eficiente. En este proyecto, se ha utilizado para formatear las fechas de los mensajes en el chat.

- **Hero-icons**: Para los iconos del proyecto, se ha utilizado la librería Hero-icons. Esta librería proporciona un conjunto de iconos SVG de alta calidad que son personalizables y fáciles de usar. En este proyecto, se han utilizado para los botones de la interfaz de usuario y para mejorar la estética general de la aplicación.

- **Tailwind CSS (Modo Dark y Light)**: Como un extra en este proyecto, se ha implementado el uso de los modos Dark y Light de Tailwind CSS. Tailwind CSS es una librería de utilidades de bajo nivel que permite construir diseños personalizados de manera eficiente y sencilla. En este caso, se ha utilizado para proporcionar dos temas visuales (Dark y Light) que el usuario puede seleccionar según sus preferencias. Aunque no se solicitó explícitamente la implementación de diferentes temas, consideré que sería un buen añadido para mejorar la experiencia del usuario y demostrar la flexibilidad que ofrece Tailwind CSS.

## Componentización y Emits

He decidido componentizar aquellos elementos que son reutilizables en diferentes partes de la aplicación. Esta decisión se tomó con el objetivo de evitar la creación de demasiados componentes y emits, lo cual puede complicar el mantenimiento del código.

## Reordenamiento del Modelo de Datos

Para garantizar la correcta visualización de los mensajes en el chat, es crucial que los mensajes estén ordenados correctamente según su timestamp. Sin embargo, puede haber situaciones en las que los timestamps puedan tener errores o inconsistencias, lo que podría afectar el orden de los mensajes.

Para manejar estos casos, he implementado un mecanismo de reordenamiento del modelo de datos. Este mecanismo utiliza la librería Moment.js para parsear los timestamps de los mensajes y luego los ordena en orden descendente. De esta manera, incluso si hay un error en el timestamp de un mensaje, este mecanismo asegurará que los mensajes se muestren en el orden correcto.

Este reordenamiento se realiza en el método `onMounted` del componente `CommentsModal.vue`, donde se ordena el array `sortedMessages` basándose en los timestamps de los mensajes. Este método se ejecuta cuando el componente se monta, asegurando que los mensajes siempre estén ordenados correctamente cada vez que se abre el modal de comentarios.

## Pruebas Unitarias con Vitest

Para las pruebas unitarias de este proyecto, hemos incorporado Vitest. Vitest es una herramienta de pruebas unitarias y de extremo a extremo para Vite. Proporciona un entorno de pruebas rápido y eficiente para los proyectos de Vite.

Sin embargo, debo admitir que esta parte del desarrollo no fue tan sencilla para mí. Aunque Vitest es una herramienta poderosa, su configuración y uso requiere un cierto nivel de familiaridad y comprensión. En mi caso, me llevó alrededor de 2 horas hacer que funcionara correctamente. Este fue el aspecto que más retrasó el desarrollo del proyecto.
