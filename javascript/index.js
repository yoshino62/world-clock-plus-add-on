//New York
function updateTime() {
  let newYorkElement = document.querySelector("#new-york");
  let newYorkDateElement = newYorkElement.querySelector(".date");
  let newYorkTimeElement = newYorkElement.querySelector(".time");
  let newYorkCurrentTime = moment().tz("America/New_York");

  newYorkDateElement.innerHTML = newYorkCurrentTime.format("MMMM Do YYYY");
  newYorkTimeElement.innerHTML = newYorkCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Japan
  let japanElement = document.querySelector("#tokyo");
  let japanDateElement = japanElement.querySelector(".date");
  let japanTimeElement = japanElement.querySelector(".time");
  let japanCurrentTime = moment().tz("Asia/Tokyo");

  japanDateElement.innerHTML = japanCurrentTime.format("MMMM Do YYYY");
  japanTimeElement.innerHTML = japanCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Sydeny
  let sydneyElement = document.querySelector("#sydney");
  let sydneyDateElement = sydneyElement.querySelector(".date");
  let sydneyTimeElement = sydneyElement.querySelector(".time");
  let sydneyCurrentTime = moment().tz("Australia/Sydney");

  sydneyDateElement.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
  sydneyTimeElement.innerHTML = sydneyCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );

  //Paris
  let parisElement = document.querySelector("#paris");
  let parisDateElement = parisElement.querySelector(".date");
  let parisTimeElement = parisElement.querySelector(".time");
  let parisCurrentTime = moment().tz("Europe/Paris");

  parisDateElement.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
  parisTimeElement.innerHTML = parisCurrentTime.format(
    "h:mm:ss [<small>]A[</small>]"
  );
}

updateTime();
setInterval(updateTime, 1000);
