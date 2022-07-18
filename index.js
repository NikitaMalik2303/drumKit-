
// detecting Button click

var numberOfDrumButtons = document.querySelectorAll("button").length;

for(var i=0; i<numberOfDrumButtons; i++){

  document.querySelectorAll("button")[i].addEventListener("click",function() {
    makeSound(this.innerHTML);
    addAnimation(this.innerHTML);
  });

};

// detecting keyboard button press

document.addEventListener("keydown",function(event) {
  makeSound(event.key);
  addAnimation(event.key);
});

// sound on click or keyboard press

function makeSound(key){

  switch (key) {
    case "w":
      var sound1 = new Audio("sounds/tom-1.mp3");
      sound1.play();
      break;
    case "a":
      var sound2 = new Audio("sounds/tom-2.mp3");
      sound2.play();
      break;
    case "s":
      var sound3 = new Audio("sounds/tom-3.mp3");
      sound3.play();
      break;
    case "d":
      var sound4 = new Audio("sounds/tom-4.mp3");
      sound4.play();
      break;
    case "j":
      var sound5 = new Audio("sounds/crash.mp3");
      sound5.play();
      break;
    case "k":
      var sound6 = new Audio("sounds/kick-bass.mp3");
      sound6.play();
      break;
    case "l":
      var sound7 = new Audio("sounds/snare.mp3");
      sound7.play();
      break;
    default:
      alert("please enter a valid Key");
  }

}

// adding animations

function addAnimation(key){
  document.querySelector("." + key).classList.add("pressed");
  setTimeout(function() {document.querySelector("." + key).classList.remove("pressed")} , 100);
}












