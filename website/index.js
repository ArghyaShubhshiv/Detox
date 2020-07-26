var slideContainer = document.getElementsByTagName("div")[0];
var condition = document.getElementById("detox_condition");

setInterval(function(){
  if (condition.textContent == "Without Detox"){
    condition.textContent = "With Detox";
  } else {
    condition.textContent = "Without Detox";
  }
  slideContainer.classList.toggle("slides");
},2000)
