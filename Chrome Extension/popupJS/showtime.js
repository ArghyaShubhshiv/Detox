var labelTime = document.querySelector("#nbi");
var showTime = document.querySelector("#timeFromBreak"); //time left for next break
var svgContainer = document.getElementsByTagName("svg")[0];
var circleSVG = document.getElementsByTagName("circle")[0];
var restartButton = document.querySelector("#restartTimer");

chrome.runtime.onMessage.addListener((message) => {
  //receives the time from background.js and shows it
  if (message.msg == "started") {
    settingsAtStart();
  } else if (message.msg == "break") {
    settingsAtBreak();
  } else if (message.msg == "restart") {
    settingsAtStart();
  } else {
    showTime.textContent = message.msg;
  }
  console.log(message.msg);
});

if (localStorage.getItem("is_break") == "true") {
  settingsAtBreak();
} else {
  settingsAtStart();
}

restartButton.addEventListener("click", function () {
  let message = { msg: "button_clicked" };
  chrome.runtime.sendMessage(message);
});

function settingsAtStart() {
  if (localStorage.getItem("is_break") == "true") {
    localStorage.removeItem("is_break");
  }
  localStorage.setItem("is_break", "false");
  labelTime.style.visibility = "visible";
  circleSVG.style.display = "initial";
  restartButton.style.display = "none";
}

function settingsAtBreak() {
  if (localStorage.getItem("is_break") == "false") {
    localStorage.removeItem("is_break");
  }
  localStorage.setItem("is_break", "true");
  labelTime.style.visibility = "hidden";
  showTime.textContent = "BREAK!!!";
  circleSVG.style.display = "none";
  restartButton.style.display = "initial";
}
