//Ejercicio 9
const coche = { marca: "Toyota", modelo: "Corolla", año: 2020 };

const entradas = Object.entries(coche);
console.log(entradas);

//Ejercicio 10
const configuracion = { tema: "oscuro", idioma: "español" };
const nuevaConfig = Object.assign({}, configuracion, { notificaciones: true });
console.log(nuevaConfig);
console.log(configuracion);

//Ejercicio 11
const usuario = { nombre: "Ana", edad: 30 };
const detalles = { ciudad: "Madrid", ocupacion: "Ingeniera" };
const combinado = { ...usuario, ...detalles };
console.log(combinado);

//Ejercicio 12
const libro = { titulo: "1984", autor: "George Orwell", paginas: 328 };
delete libro.paginas;
console.log(libro);

//Ejercicio 13
const cuenta = { usuario: "Juan", email: "juan@mail.com" };
console.log(cuenta.hasOwnProperty("email"));
console.log(cuenta.hasOwnProperty("password"));

//Ejercicio 14
const pedido = { producto: "Silla", cantidad: 4, precio: 50 };

const pedidoMayus = Object.keys(pedido).reduce((acumulador, clave) => {
acumulador[clave.toUpperCase()] = pedido[clave];
return acumulador;
}, {});
console.log(pedidoMayus);
