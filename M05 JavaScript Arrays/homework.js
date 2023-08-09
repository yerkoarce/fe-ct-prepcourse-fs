/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   let primerElemento = array[0];
   return primerElemento;
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   let ultimoElemento = array[array.length - 1];
   return ultimoElemento;
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   return array.length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   let incrementados = []
   for (let i = 0; i < array.length ; i++){
      incrementados.push(array[i] + 1);
   }return incrementados;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var palabraJunta = palabras.join(" ");
   return palabraJunta;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   return array.includes(elemento);
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   let sumados = 0;
   for (var i = 0; i < arrayOfNums.length; i++){
      sumados = sumados + arrayOfNums[i];
   } return sumados;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   let sumados = 0
   for (var i = 0; i < resultadosTest.length; i++){
      sumados = sumados + resultadosTest[i];
   } return sumados/resultadosTest.length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   let numeroMayor = 0;
   for (var i = 0;i < arrayOfNums.length ; i++){
      if (arrayOfNums[i] > numeroMayor){
         numeroMayor = arrayOfNums [i];
      } 
   }return numeroMayor; 
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   var multiplicados = 1;
   if (arguments.length = 1){
      return arguments[0];
   }else if (arguments.length = 0){
      return 0;                                                      //arreglar!!!!!!!!!!!!!!!
   }
   for (var i =0; i < arguments.length; i++){
      multiplicados = arguments[i] * multiplicados;
   }return multiplicados;
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var contador = 0;
   array.forEach(num => {
      if (num > 18){
         contador = contador + 1;
      }
   });
   return contador;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   var semana = [1,2,3,4,5,6,7]
   if (numeroDeDia === 7 || numeroDeDia === 1){
      return 'Es fin de semana';
   } else if (numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6){
      return 'Es dia laboral'
   }
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var numString = num.toString();
   var numeroArray = numString.split('');
   if (numeroArray[0]=== '9'){
      return true;
   } else {
      return false;
   }

}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   for (var i =1; i < (array.length - 1) ; i++){
      if (array[i]===array[i-1]){
         return true;
      } 
   }return false;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var mesesPerdidos = [];
   for (var i = 0; i < array.length ; i++){
      if (array[i] === 'Enero' || array[i] === 'Marzo' || array[i] === 'Nobiembre'){
         mesesPerdidos.push(array[i]);
      }
      }
   if (mesesPerdidos.length !== 3){
      return 'No se encontraron los meses pedidos';
   }
   return mesesPerdidos;
   }


function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var tabla6 = [];
   for (let i = 0; i < 11; i++){
      tabla6.push(i*6)
   }
   return tabla6;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var mayoresCien = [];
   for (var i = 0 ; i<array.length ; i++){
      if (array[i] > 100){
         mayoresCien.push(array[i]);}      
      }
      return mayoresCien;
   }


/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var arrayNumero = [num+2];
   var contador = 0;
   while (contador<9){
      arrayNumero.push((arrayNumero[arrayNumero.length - 1])+2);
      contador++;
      if (contador === arrayNumero[arrayNumero.length - 1]) {
      break;
   }
}
if (arrayNumero.length === 10){
   return arrayNumero;
}else {
   return 'Se interrumpió la ejecución';
}
   
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var arrayNumero = [num+2];
   var contador = 1;
   while (contador<10){
      contador++;
      if (contador === 5){continue;}
      arrayNumero.push((arrayNumero[arrayNumero.length - 1])+2);
   }
   return arrayNumero;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};
