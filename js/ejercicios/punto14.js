/*14- Realiza un script que pida una cadena de texto y lo muestre poniendo el 
signo – entre cada carácter sin usar el método replace. Por ejemplo, si tecleo “hola qué tal”, 
deberá salir “h-o-l-a- -q-u-e- -t-a-l”.*/
function separarConSigno() {
    // Pedir al usuario que ingrese una cadena de texto
    let texto = prompt("Ingresa una cadena de texto:");

    // Variable para almacenar la cadena con los signos -
    let textoSeparado = "";

    // Recorrer cada carácter de la cadena
    for (let i = 0; i < texto.length; i++) {
      // Agregar el carácter actual a la nueva cadena
      textoSeparado += texto[i];

      // Agregar el signo - si no es el último carácter
      if (i !== texto.length - 1) {
        textoSeparado += "-";
      }
    }

    // Mostrar la cadena con los signos - en la consola
    console.log(textoSeparado);
  }

  // Llamar a la función para separar la cadena con el signo - cuando se carga la página
  separarConSigno();