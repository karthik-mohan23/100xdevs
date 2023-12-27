function twelveHourClock() {
  const date = new Date();

  let hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();
  let session = "AM";

  if (hours > 12) {
    hours = hours - 12;
    session = "PM";
  }

  let time = `${hours} : ${minutes} : ${seconds} ${session}`;

  console.log(time);
}

setInterval(twelveHourClock, 1000);
