/*11- Realiza un script que pida por teclado 3 edades y 3 nombres e indique el nombre del mayor. *

Nota: ver funcion Math() https://www.w3schools.com/js/js_math.asp */

function encontrarNombreMayor() {
    let edades = [];
    let nombres = [];
    // Pedir por teclado 3 edades y 3 nombres
    for (let i = 0; i < 3; i++) {
      let nombre = prompt(`Ingresa el nombre ${i + 1}:`);
      let edad = parseInt(prompt(`Ingresa la edad de ${nombre}:`));
      // Verificar si la edad ingresada es válida
      if (isNaN(edad) || edad <= 0) {
        alert('Ingresa una edad válida (mayor que cero).');
        return;
      }
      // Agregar la edad y el nombre a los arrays
      edades.push(edad);
      nombres.push(nombre);
    }
    // Encontrar el índice de la edad mayor
    let indiceMayor = 0;
    for (let i = 1; i < edades.length; i++) {
      if (edades[i] > edades[indiceMayor]) {
        indiceMayor = i;
      }
    }
    // Obtener el nombre del mayor
    let nombreMayor = nombres[indiceMayor];

    // Mostrar el nombre del mayor
    console.log(`La persona con la edad mayor es: ${nombreMayor}`);
  }

  // Llamar a la función para encontrar el nombre del mayor cuando se carga la página
  encontrarNombreMayor();