function* generateIncrementer() {
  let i = 0;

  while (true) {
    yield i++;
  }
}

const incrementer = generateIncrementer();

incrementer.next();
incrementer.next();
incrementer.next();
incrementer.next();

/*
  0
  1
  2
  3
*/