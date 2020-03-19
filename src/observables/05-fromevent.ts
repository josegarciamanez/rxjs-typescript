// CSS IMPORTS
import './main.css';

// Rxjs Imports
import { fromEvent } from 'rxjs';

const obs1$ = fromEvent<MouseEvent>(document, 'click');
const obs2$ = fromEvent<KeyboardEvent>(document, 'keyup');
const obs3$ = fromEvent<Event>(document, 'scroll');

obs1$.subscribe(({ x, y }) => {
    console.log(x, y);
});

obs2$.subscribe(e => {
    console.log(e);
});
obs3$.subscribe(e => {
    console.log(e.path[1].scrollY);
});

// HTML
document.getElementById('app').innerHTML = `
<div class="container">
<h1>RXJS Typescript</h1>
</div>
`;
