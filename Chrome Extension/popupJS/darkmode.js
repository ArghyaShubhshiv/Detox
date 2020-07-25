var heading = document.getElementsByTagName("h1")[0];
var labelTime = document.querySelector("#nbi");
var showTime = document.querySelector("#timeFromBreak"); //time left for next break
var svgContainer = document.getElementsByTagName("svg")[0];
var circleSVG = document.getElementsByTagName("circle")[0];
var darkmodeButton = document.querySelector("#darkmodeButton");
var darkmodeImg = document.querySelector("#darkmodeImg");

darkmodeButton.addEventListener("click", function () {
  if (darkmodeImg.src == "https://image.flaticon.com/icons/svg/61/61412.svg") {
    darkMode();
  } else if (
    darkmodeImg.src == "https://image.flaticon.com/icons/svg/2917/2917242.svg"
  ) {
    lightMode();
  }
});

if (localStorage.getItem("mode") == "dark") {
  //sees which mode was there last time and shows it
  darkMode();
} else {
  lightMode();
}

//below are the function for darkmode and lightmmode(default) respectively
function darkMode() {
  darkmodeImg.src = "https://image.flaticon.com/icons/svg/2917/2917242.svg";
  document.body.style.backgroundColor = "#323639";
  document.getElementsByTagName("circle")[0].style.fill = "	#323639";
  heading.style.color = "#fcf6f5ff";
  labelTime.style.color = "#fcf6f5ff";
  if (localStorage.getItem("mode") == "light") {
    localStorage.removeItem("mode");
  }
  localStorage.setItem("mode", "dark");
}

function lightMode() {
  darkmodeImg.src = "https://image.flaticon.com/icons/svg/61/61412.svg";
  document.body.style.backgroundColor = "#fcf6f5ff";
  document.getElementsByTagName("circle")[0].style.fill = "#fcf6f5ff";
  heading.style.color = "#000000";
  labelTime.style.color = "#000000";
  if (localStorage.getItem("mode") == "dark") {
    localStorage.removeItem("mode");
  }
  localStorage.setItem("mode", "light");
}
