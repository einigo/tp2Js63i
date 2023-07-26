/*10- Realiza un script que pida número de filas y columnas y escriba una tabla. 
Dentro de cada una de las celdas deberá escribirse un número consecutivo en orden 
descendente. Si, por ejemplo, la tabla es de 7×5 los números irán del 35 al 1. */
function tabla() {
    const numFilas = parseInt(prompt('Ingresa el número de filas:'));
    const numColumnas = parseInt(prompt('Ingresa el número de columnas:'));
    if (isNaN(numFilas) || isNaN(numColumnas) || numFilas <= 0 || numColumnas <= 0) {
      alert('Ingresa números válidos para filas y columnas (mayores a cero).');
      return;
    }  
    // Inicializar el número inicial en el orden descendente (número máximo)
    let numero = numFilas * numColumnas; 
    // Crear la tabla y llenar las celdas con los números en orden descendente
    let tabla = '';
    for (let fila = 0; fila < numFilas; fila++) {
      for (let columna = 0; columna < numColumnas; columna++) {
        tabla += numero + '\t';
        numero--;
      }
      tabla += '\n';
    }
    console.log(tabla);
  }
  // Llamar a la función para generar la tabla en la consola
  tabla();
  

