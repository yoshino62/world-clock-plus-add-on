function updateTime() {
  //New York
  let newYorkElement = document.querySelector("#new-york");
  if (newYorkElement) {
    let newYorkDateElement = newYorkElement.querySelector(".date");
    let newYorkTimeElement = newYorkElement.querySelector(".time");
    let newYorkCurrentTime = moment().tz("America/New_York");

    newYorkDateElement.innerHTML = newYorkCurrentTime.format("MMMM Do YYYY");
    newYorkTimeElement.innerHTML = newYorkCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Japan
  let japanElement = document.querySelector("#tokyo");
  if (japanElement) {
    let japanDateElement = japanElement.querySelector(".date");
    let japanTimeElement = japanElement.querySelector(".time");
    let japanCurrentTime = moment().tz("Asia/Tokyo");

    japanDateElement.innerHTML = japanCurrentTime.format("MMMM Do YYYY");
    japanTimeElement.innerHTML = japanCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Sydeny
  let sydneyElement = document.querySelector("#sydney");
  if (sydneyElement) {
    let sydneyDateElement = sydneyElement.querySelector(".date");
    let sydneyTimeElement = sydneyElement.querySelector(".time");
    let sydneyCurrentTime = moment().tz("Australia/Sydney");

    sydneyDateElement.innerHTML = sydneyCurrentTime.format("MMMM Do YYYY");
    sydneyTimeElement.innerHTML = sydneyCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }

  //Paris
  let parisElement = document.querySelector("#paris");
  if (parisElement) {
    let parisDateElement = parisElement.querySelector(".date");
    let parisTimeElement = parisElement.querySelector(".time");
    let parisCurrentTime = moment().tz("Europe/Paris");

    parisDateElement.innerHTML = parisCurrentTime.format("MMMM Do YYYY");
    parisTimeElement.innerHTML = parisCurrentTime.format(
      "h:mm:ss [<small>]A[</small>]"
    );
  }
}

function updateCity(event) {
  let cityTimeZone = event.target.value;
  if (cityTimeZone === "current") {
    cityTimeZone = moment.tz.guess();
  }
  let cityName = cityTimeZone.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityTimeZone);
  let citiesElement = document.querySelector("#cities");

  citiesElement.innerHTML = `<div class="city">
                <div>
                    <h2>${cityName}</h2>
                    <div class="date">${cityTime.format("MMMM Do YYYY")}</div>
                </div>
                <div class="time">${cityTime.format(
                  "h:mm:ss"
                )} <small>${cityTime.format("A")}</small></div>
            </div>
            <a href="/"> All Cities </a>`;
}

let selectedCityElement = document.querySelector("#city");
selectedCityElement.addEventListener("change", updateCity);

updateTime();
setInterval(updateTime, 1000);
