function* generateTheHobbitSequence() {
  yield 'An Unexpected Journey';
  yield 'The Desolation of Smaug';
  yield 'The Battle of the Five Armies';
}

function* generateTheLordOfTheRingsSequence() {
  yield* generateTheHobbitSequence()
  yield 'The Fellowship of the Ring'
  yield 'The Two Towers'

  return 'The Return of the King'
}

const theLordOfTheRingsSequence = generateTheLordOfTheRingsSequence()

for (const movie of theLordOfTheRingsSequence) {
  console.log(movie)
}
/*
  'An Unexpected Journey'
  'The Desolation of Smaug'
  'The Battle of the Five Armies'
  'The Fellowship of the Ring'
  'The Two Towers'
  'The Return of the King'
*/
