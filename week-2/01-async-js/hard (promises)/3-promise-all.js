/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that uses the 3 functions to wait for all 3 promises to resolve using Promise.all,
 * Return a promise.all which return the time in milliseconds it takes to complete the entire operation.
 */

function wait1(t) {
  const milliseconds = t * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function wait2(t) {
  const milliseconds = t * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function wait3(t) {
  const milliseconds = t * 1000;
  return new Promise((resolve) => {
    setTimeout(resolve, milliseconds);
  });
}

function calculateTime(t1, t2, t3) {
  const startTime = Date.now();
  const p = Promise.all([wait1(t1), wait2(t2), wait3(t3)]);

  return p.then(() => {
    const endTime = Date.now();
    return endTime - startTime;
  });
}

module.exports = calculateTime;
