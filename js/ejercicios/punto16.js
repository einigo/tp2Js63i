/*16- Realiza un script que pida una cadena de texto y la devuelva al revés. 
Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.*/

function textoAlReves() {
    let texto = prompt("Ingresa una cadena de texto:");
    let textoAlReves = "";
    for (let i = texto.length - 1; i >= 0; i--) {
      textoAlReves += texto.charAt(i);
    }
    console.log("Texto al revés:", textoAlReves);
  }
  textoAlReves();