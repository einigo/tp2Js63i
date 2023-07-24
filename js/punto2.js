let numero = prompt("Ingresa un numero del 0 al 10")
//si no es un nro. ingresa al if
if(isNaN(numero)){
  console.log("no ingreso un número valido")
} else if (!(numero >= 0 && numero <= 10)) {
// es un numero,pero fuera del rango
  console.log("ingresa un numero dentro del rango establecido")
} else {
//Rangos
if(numero >= 0 && numero <= 2) {
   console.log(`muy deficiente`)
} else if (numero <= 4) {
  console.log (`insuficiente`)
} else if (numero <= 6) {
  console.log(`suficiente`)
} else if (numero === 7) {
  console.log(`Bien`)
} else if (numero <= 9) {
  console.log(`Notable`)
} else {
  console.log(`sobresaliente`)
}
}