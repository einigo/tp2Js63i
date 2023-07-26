/*12- Realiza un script que genere un número aleatorio entre 1 y 99
*/
function generarNumeroAleatorio() {
    // Generar un número aleatorio entre 1 y 99
    let numeroAleatorio = Math.floor(Math.random() * 99) + 1;
    // Mostrar el número aleatorio en la consola
    console.log("Número aleatorio entre 1 y 99:", numeroAleatorio);
  }
  // Llamar a la función para generar el número aleatorio cuando se carga la página
  generarNumeroAleatorio();