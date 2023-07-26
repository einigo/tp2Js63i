/*17- Realiza un script que muestre la posición de la primera vocal 
de un texto introducido por teclado.

Ejemplo:

Input: Hola mundo

Output: la vocal ‘o’ está en la posición 1  

PASOS A SEGUIR-------

1- PEDIR INGRESO DE TEXTO
2- HACER QUE CADA LETRA SEA MINUSCULA
3- REALIZAR UN BUCLE QUE LLEVE CARACTER POR CARACTER
4- CUANDO ENCUENTRE LA PRIMERA VOCAL, TERMINAR CICLO Y ENTRAR LA VOCAL
*/
let texto = prompt("Ingrese el texto");
for (let i =0; i < texto.length; i ++){
    let letra = texto.at(i).toLowerCase();
    if(letra === "a" ||
    letra === "e" ||
    letra === "i" ||
    letra === "o" ||
    letra === "u"
    ) {
        console.log("La vocal", letra, "esta en la posición", i,);
    break;
    }
}
