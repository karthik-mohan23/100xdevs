function twelveHourClock() {
  const date = new Date();
  let hh = date.getHours();
  let mm = date.getMinutes();
  let ss = date.getSeconds();

  let session = "AM";

  if (hh > 12) {
    session = "PM";
  }

  let time = `${hh} : ${mm} : ${ss} ${session}`;

  console.log(time);

  setTimeout(twelveHourClock, 1000);
}

twelveHourClock();
