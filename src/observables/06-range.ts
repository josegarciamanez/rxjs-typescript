import { range, asyncScheduler } from 'rxjs';

// Agregando asyncScheduler como tercer parámetro podemos hacer que sea asíncrono
const numbers = range(1, 5, asyncScheduler);

// Comprobación de asyncScheduler
console.log('Inicio');

// Enviar a consolo todos los números de rango
// numbers.subscribe( x => (console.log(x)));

// O más sencillo
numbers.subscribe(console.log);

console.log('Fin');
