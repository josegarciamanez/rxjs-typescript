// CSS IMPORTS
import './main.css';

// Rxjs Imports
import { of } from 'rxjs';

// Podemos pasar una lista de argumentos separados por comas
// const obs$ = of(1, 2, 3, 4, 5, 6);

// si pasamos un array lo interpretará como un solo argumento
// const obs$ = of([1, 2, 3, 4, 5, 6]);

// Si usamos spread operator obtenemos el mismo resultado que al principio.
// Podemos agregr más argumentos separados por comas.
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 7, 8, 9);

// Comprobamos que el operador of es síncrono
console.log('Inicio de obs$');
obs$.subscribe(next => console.log('next:', next), null, () =>
    console.log('Terminamos Secuencia')
);
console.log('Final de obs$');

// HTML
document.getElementById('app').innerHTML = `
<div class="container">
<h1>RXJS Typescript</h1>
</div>
`;
