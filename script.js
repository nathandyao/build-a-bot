var gameInput = $("#bot-input");
var gameOutput  = $("#bot-output");
gameInput.keydown(function(keydownEvent) {  
  // the key code for enter is 13
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");
  }  
})

function parseText(text) {    
    if (text === "hello") {
      gameOutput.html("Hi there!");
    }  else if (text === "what is your name") {
        gameOutput.html("my name is chese!");
    }  else if (text === "is jesse and allen a buttface") {
      gameOutput.html("Yes!");
    }
}
<img id="robot-pic"src="https://pbs.twimg.com/profile_images/484689868140711936/WQ6vjWbW_400x400.jpeg">


  

