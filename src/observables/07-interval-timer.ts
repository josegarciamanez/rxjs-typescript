import { interval, timer } from 'rxjs';

const observer = {
    // eslint-disable-next-line
    next: val => console.log('Next: ', val),
    complete: () => console.log('Complete')
};

// eslint-disable-next-line
const interval$ = interval(1000);
const timer$ = timer(3000);

// Confirmación tanto timer como interval son asíncronos
console.log('Inicio');
// interval$.subscribe(observer);
timer$.subscribe(observer);
console.log('Fin');
