/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {
  const miliseconds = n * 1000;
  return new Promise(resolve => {
    setTimeout(resolve, miliseconds);
  });
}

module.exports = wait;
