import { from } from 'rxjs';

const observer = {
    next: next => console.log('Next: ', next),
    complete: () => console.log('Completado')
};

const source$ = from(fetch('https://api.github.com/users/josegarciamanez'));

source$.subscribe(observer);
