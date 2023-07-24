/*4- Realiza un script que pida números hasta que se pulse “cancelar”. 
Si no es un número deberá indicarse con un «alert» y seguir pidiendo números.
 Al salir con “cancelar” deberá indicarse la suma total de los números introducidos.*/
 let numero;
 let suma = 0

 while (true){
    numero = prompt('Escriba un numero');
    if (numero === null){
        break;
    }
    if (isNaN(numero)) {
        alert('No ingreso un numero');
        continue;
    }
    suma = suma + Number(numero);
 }
 console.log(suma);