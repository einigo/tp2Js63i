/*15- Realiza un script que cuente el número de vocales que tiene un texto. */

function contarVocales(texto) {
    texto = prompt("ingresa un texto");
    texto = texto.toLowerCase();
    let contadorVocales = 0;
    for (let i = 0; i < texto.length; i++) {
      let caracter = texto.charAt(i);
      switch (caracter) {
        case 'a':
        case 'e':
        case 'i':
        case 'o':
        case 'u':
          contadorVocales++;
          break;
        default:
          break;
      }
    }
    console.log("El número de vocales en el texto es:", contadorVocales);
  }
  let texto = "Este es un ejemplo de texto que contiene varias vocales.";
  contarVocales(texto);
