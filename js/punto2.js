/*2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
*/

let numero = prompt("Ingresa un numero del 0 al 10")
//si no es un nro. ingresa al if
if(isNaN(numero)){
  alert("no ingreso un número valido")
} else if (!(numero >= 0 && numero <= 10)) {
// es un numero,pero fuera del rango
  alert("ingresa un numero dentro del rango establecido")
} else {
//Rangos
if(numero >= 0 && numero <= 2) {
   alert(`muy deficiente`)
} else if (numero <= 4) {
  alert(`insuficiente`)
} else if (numero <= 6) {
  alert(`suficiente`)
} else if (numero === 7) {
  alert(`Bien`)
} else if (numero <= 9) {
  alert(`Notable`)
} else {
  alert(`sobresaliente`)
}
}