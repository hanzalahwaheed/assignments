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
  // Start measuring time
  const startTime = Date.now();

  // Call the functions sequentially using promise chaining
  return wait1(t1)
    .then(() => wait2(t2))
    .then(() => wait3(t3))
    .then(() => {
      // Calculate the total time taken
      const endTime = Date.now();
      const totalTime = endTime - startTime;
      return totalTime;
    });
}

module.exports = calculateTime;
