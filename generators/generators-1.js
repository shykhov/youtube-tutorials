function* generateTheLordOfTheRingsSequence() {
  yield 'The Fellowship of the Ring'
  yield

  return 'The Return of the King'
}

const theLordOfTheRingsSequence = generateTheLordOfTheRingsSequence();

const first = lordOfTheRingsSequence.next(); // {value: 'The Fellowship of the Ring', done: false}
const second = lordOfTheRingsSequence.next('The Two Towers'); // {value: 'The Two Towers', done: false}
const third = lordOfTheRingsSequence.next(); // {value: 'The Return of the King', done: true}
