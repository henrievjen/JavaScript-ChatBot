$(document).ready(function() {

  alert("Welcome to JavaScript ChatBot! Type in the textbox to talk with the AI ChatBot. Try saying hi, asking for the time, or asking for a joke.");

  var greetings = ["hello", "hey", "howdy", "hi", "yo"];
  var questionStart = ["how", "what", "what's", "where", "why", "?"];
  var ask = ["are", "you", "it", "going", "is", "happening"];
  var badWords = ["stupid", "dumb", "hate"];
  
  function createText(text, type) {
          if(text != "") {
              if(type == "textme") {
                  let newRow = document.createElement("div");
                  newRow.className = "row" + type;
                  let newText = document.createElement("div");
                  newText.className = type;
                  newRow.appendChild(newText);
                  newText.append(document.createTextNode(text));
                  document.getElementById("container").appendChild(newRow);
                  newRow.appendChild(newText);
                  newText.append(document.getElementById("textAlign"));
                  scroller();
              }
              else {
                setTimeout(function() {
                  let newRow = document.createElement("div");
                  newRow.className = "row" + type;
                  let newText = document.createElement("div");
                  newText.className = type;
                  newRow.appendChild(newText);
                  newText.append(document.createTextNode(text));
                  document.getElementById("container").appendChild(newRow);
                  newRow.appendChild(newText);
                  newText.append(document.getElementById("textAlign"));
                  scroller();
                }, 600);
              }
          }
  }
  
  function scroller() {
      container.scrollBy({ 
        top: 1000,
        left: 0, 
        behavior: 'smooth' 
      });
  }

  
  // If click enter, textBox submits
      $(".textBox").keyup(function(event) {
        if (event.keyCode == 13) {
            let txt = $(".textBox");
            txt.val(txt.val().slice(0, -1));
            $(".submitButton").click()
        }
      });

  
  $(".submitButton").click(function() {
  
  	let userText = $(".textBox").val().toLowerCase().split(" ");
  	let userTextString = $(".textBox").val().toLowerCase();
  	let textIsThere = userTextString.trim().length;
  	
  	let lastTextMe = $(".textme").last();
  	let lastTextYou = $(".textyou").last();
    
    let arrVal = userText.length - 1;
    
    let randomNum2 = Math.round(Math.random() * 2);
    let randomNum5 = Math.round(Math.random() * 5);
    
    let date = new Date();
    let h = date.getHours();
    let m = date.getMinutes();
    let s = date.getSeconds();
    
    if(h > 12) {
      h -= 12;
    }
    
    if(h < 10) {
        h = "0" + h;
    }
    if(m < 10) {
        m = "0" + m;
    }
    if(s < 10) {
        s = "0" + s;
    }
    
    let currentTime = h + ":" +m + ":" + s;
    
    let x = 1;
    let y = 1;
    let cond = 1;
    let computerResponse = 0;
    
    if(arrVal != -1 && textIsThere != 0) {
        createText(userTextString, "textme");
    }
        
    while(arrVal != -1 && textIsThere != 0) {

        if(jQuery.inArray(userText[arrVal], badWords) != -1) {
            createText("Don't curse!!!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if(userTextString.includes("i hate you")) {
            createText("Hey, that's mean!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if(userTextString.includes("i love you")) {
            createText("Why thank you!", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if((userTextString.includes("what") || userTextString.includes("what's")) && (userTextString.includes("up") || userTextString.includes("happening"))) {
            createText("Nothing much man", "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if((jQuery.inArray(userText[arrVal], questionStart) != -1) && userTextString.includes("time")) {
            createText("The time right now is " + currentTime, "textyou");
            arrVal = -1;
            computerResponse = 1;
        }
        
        else if(userTextString.includes("joke")) {
            switch(randomNum5) {
                  case 0:
                  	createText("Q: Why are teddy bears never hungry? A: Because they're always stuffed.", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 1:
                  	createText("Q: What's really fast, loud, and tastes good with salsa? A: A rocket chip!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 2:
                  	createText("Q: What did one pickle say to the other pickle who wouldn't stop complaining? A: Dill with it.", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 3:
                  	createText("Q: What did the finger say to the thumb? A: I'm in glove with you!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 4:
                  	createText("Q: What do you call a duck that loves making jokes? A: A wise-quacker!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 5:
                  	createText("Q: Why did the dinosaur cross the road? A: Because chickens didn't exist yet!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                }
        }
        
        else if(jQuery.inArray(userText[arrVal], questionStart) != -1) {
            
            arrVal = userText.length - 1;
            
            while(arrVal > -1) {
                if(jQuery.inArray(userText[arrVal], ask) != -1) {
                    switch(randomNum2) {
                      case 0:
                      	createText("I'm doing great!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                      case 1:
                      	createText("I'm doing good!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                      case 2:
                      	createText("I'm having an awesome day today!", "textyou");
                      	arrVal = 0;
                      	cond = 0;
                      	computerResponse = 1;
                        break;
                    }
                }
                arrVal--;
            }
        }

        else if(jQuery.inArray(userText[arrVal], greetings) != -1) {
            
            if(cond != 0) {
              	switch(randomNum5) {
                  case 0:
                  	createText("Hello!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 1:
                  	createText("Hey!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 2:
                  	createText("Good Day!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 3:
                  	createText("Howdy!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 4:
                  	createText("Hi!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                  case 5:
                  	createText("Top of the Morning to you!", "textyou");
                  	arrVal = -1;
                  	computerResponse = 1;
                    break;
                }
            }
        }
            
        else {
            if(arrVal > -1) {
                arrVal--;
            }
            else {
                arrVal = -1;
            }    
                
        }
      
      $(".textBox").val("");
           
              
    }
    
           if(computerResponse == 0 && textIsThere != 0) {
             createText("Sorry, I could not understand you", "textyou");
           }
    
    // Child Text Message inherits height from adult row
    let = textHeightMe = $(".textme").last().outerHeight();
    $(".rowtextme").last().outerHeight(textHeightMe);
    
    let = textHeightYou = $(".textyou").last().outerHeight();
    $(".rowtextyou").last().outerHeight(textHeightYou);
    
  });
    
});