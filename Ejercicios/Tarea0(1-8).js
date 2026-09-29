//Ejercicio 1:
const numeros = [1,2,3,4,5,6,7,8,9,10];
const pares = numeros.filter(num => num % 2 === 0);
const cuadrado = pares.map(num => num**2);
console.log(pares,cuadrado);

//Ejercicio 2:
const palabras = ["Hola", "mundo", "esto", "es", "JavaScript"];
const frase = palabras.reduce((acumulador, palabra)=>{
    return acumulador +" " + palabra;
});
console.log(frase);

//Ejercicio 3
const numeros1 = [1,50,75,99];
const mayor = numeros1.some((numero) => numero > 100);
const positivo = numeros1.every((numero) => numero > 0);
console.log('Hay numeros mayores que 100?: ' + mayor);
console.log('Son todos positivos?: ' + positivo);

//Ejercicio 4
const numeros2 = [5, 1, 8, 3, 10, 2];
numeros2.sort((a,b)=> a-b);
console.log(numeros2);

//Ejercicio 5
const numeros3 = [4, 5, 9, 12, 7];
const divisible = numeros3.find((num)=> num % 3 === 0);
const posicion = numeros3.findIndex((num) => num %3 === 0);
console.log('Primer num divisible por 3: '+ divisible+' en la posicion '+posicion);

//Ejercicio 6
const numeros4 = [2, 4, 6, 8];
let suma = 0;
numeros.forEach((numero) =>{
    suma +=numero
});
console.log(suma);

//Ejercicio 7
const numeros5 = [10, 20, 30, 40, 50, 60];
const pri = numeros5.slice(0,3);
const eliminados = numeros5.splice(-2);
console.log('3 Primeros '+ pri + ' Eliminados ' + eliminados);

//Ejercicio 8
const producto = { nombre: "Laptop", precio: 1000, stock: 5 };
const claves = Object.keys(producto);
const valores = Object.values(producto);
console.log('Claves: ' + claves + ' / Valores: '+ valores);