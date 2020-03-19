import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next:', value),
    error: error => console.warn('error:', error),
    complete: () => console.info('completado')
};

const intervalo$ = new Observable<number>(subscriber => {
    // Crear un contador 1, 2, 3, 5...
    let count = 0;
    const interval = setInterval(() => {
        count++;
        subscriber.next(count);
    }, 1000);
    return () => {
        clearInterval(interval);
        console.log('Intervalo Destruido');
    };
});

const subs = intervalo$.subscribe(num => console.log('Num:', num));

setTimeout(() => {
    subs.unsubscribe();
}, 3000);
