/*1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje 
que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje. */
let edad = prompt('Ingresa tu edad');
// validacion
 if (!isNaN(edad) && edad !== '') {
    edad = parseInt(edad);
    // Verificar si es mayor de 18 años
    if (edad > 18) {
      console.log('Ya puede conducir');
  }
 }
  else {
    console.log('La edad ingresada no es un número válido.');
  }