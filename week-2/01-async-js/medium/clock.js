setInterval(() => {
  let currentDate = new Date();
  let am_pm = currentDate.toLocaleTimeString();
  console.log(am_pm);
}, 1000);
