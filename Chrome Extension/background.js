var time;
var breakTime = 60000 * 1; //in milliseconds
const opt_breakStart = {
  type: "basic",
  title: "Breaktime!!!",
  message: "You've worked a lot, time to take a little 5 minute break! :)",
  iconUrl: "icons/icon128.png",
};
const opt_breakOver = {
  type: "basic",
  title: "Breakover!!!",
  message: "Break over :( But see you again in an hour :)",
  iconUrl: "icons/icon128.png",
};

document.addEventListener("DOMContentLoaded", function () {
  timer();
});

function timer() {
  time = 60; //in seconds
  message = { msg: "started" };
  chrome.runtime.sendMessage(message);
  id = setInterval(function () {
    if (time > 0) {
      let mins = Math.floor(time / 60);
      let sec = time % 60;
      message = { msg: mins + ":" + sec };
      //send the time of that instance in the format "min : sec" to the popup.js to show
      chrome.runtime.sendMessage(message);
      time -= 1;
    } else {
      //shows the message "BREAKTIME!!!" when it starts
      chrome.notifications.create("breakStart", opt_breakStart);
      message = { msg: "break" };
      chrome.runtime.sendMessage(message);
      setTimeout(function () {
        chrome.notifications.create("breakOver", opt_breakOver);
        clearInterval(id)
      }, breakTime);
    }
  }, 1000);
  timer();
}