async function fetchComments(offset, amountToLoad) {
  // fetch comments
  const { comments } = await fetch(`/api/comments?offset=${offset}&amountToLoad=${amountToLoad}`)

  return comments;
}

function displayComments (comments) {
  // display comments
}

async function* makeCommentsLoader(amountToLoad) {
  let offset = 0;

  while (true) {
    yield await fetchComments(offset, amountToLoad);
    offset += amountToLoad;
  }
}

const commentsLoader = makeCommentsLoader(10);

async function handleScroll() {
  // detect if we reach bottom of the container
  // avoid execution if comments are loading at the moment

  const comments = await commentsLoader.next();

  displayComments(comments);
}

document.addEventListener('scroll', handleScroll);
