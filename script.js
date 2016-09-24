<html>
  <head>
  <script src="https://code.jquery.com/jquery-3.1.0.min.js"></script>





    <style>
    #bot-name {
  color: red;
}

#bot-output {
position: relative;
top: 200px;        
}

#robot-pic {
width: 50px;
}
  </style>





    </head>
    <body>
    <div id="bot-name">
      Bot Name Here
        </div>
        <div id="bot-input-container">        
          <input id="bot-input" type="text"/>      
            </div>
            <div>
            <div id="bot-output"> 

              </div>      
              </div>

             



                var gameInput = $("#bot-input");
var gameOutput  = $("#bot-output");
gameInput.keydown(function(keydownEvent) { 
  // the key code for enter is 13
  if (keydownEvent.keyCode == 13) {      
    parseText(gameInput.val()); 
    gameInput.val("");   
  }
}

                  function parseText(text) {      
  if (text === "Good bye") {
    gameOutput.html("Bye!");
  } else if (text==="name?") {
    gameOutput.html("All powerful pizza Bot")
  } else if (text === "robot come out!") {
    gameOutput.html("🤖️🤖️")
  } else if (text==="move"){
    gameOutput.animate({top:500}); 
  }
