var labelTime = document.querySelector("#nbi");
var showTime = document.querySelector("#timeFromBreak"); //time left for next break
var svgContainer = document.getElementsByTagName("svg")[0];
var circleSVG = document.getElementsByTagName("circle")[0];

chrome.runtime.onMessage.addListener((message) => {
  //receives the time from background.js and shows it
  if (message.msg == "break") {
    labelTime.style.visibility = "hidden";
    showTime.textContent = "BREAKTIME!!!";
    circleSVG.style.display = "none";
  } else if (message.msg == "started") {
    labelTime.style.visibility = "visible";
    circleSVG.style.display = "initial";
    showTime.textContent = message.msg;
  } else {
    showTime.textContent = message.msg;
  }
});
