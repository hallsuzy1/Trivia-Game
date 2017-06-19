
  setTimeout(timeUp, 1000 * 61);
  var audio = new Audio("cheer.mp3");

  var count=60;
  var counter=setInterval(timer, 1000); //counter will run it every 1 second

  var w = 0;

  var wins = $("#numberCorrect").text(w);
  var losses = $("#numberWrong").text(0);

// Q: [question, 4 choices]
//A: [corresponding correct answer]

  var questions = [
  {
      Q: ["This is the first question?", "A) Answer Choice A", "B) Answer Choice B", "C) Answer Choice C", "D) Answer Choice D",],
      A: ["a"]
    },
  {
      Q: ["This is the second question?", "A) Answer Choice 2A", "B) Answer Choice 2B", "C) Answer Choice 2C", "D) Answer Choice 2D",],
      A: ["b"]
    }
  ];


// This function starts the timer of 60 seconds for the whole game to run
  function timeUp() {
      $("#correctAnswer").text("Time is Up! Thank you for Playing");
      console.log("time is up");
      audio.play();
  }
// This function displays a visual countdown timer on the page
  function timer() {
    count=count-1;
    if (count <= -1)
    {
       clearInterval(counter);
       //counter ended, do something here
       return;
    }
    $("#counterSpan").text(count + " seconds");
  }

// This function is set up to rotate through the different questions
function rotate(){

  // for(var i = 0; i < questions.length; i++) {
  var i = 0
    $("#questionHere").text(questions[i].Q[0]);
    $("#choiceA").text(questions[i].Q[1]);
    $("#choiceB").text(questions[i].Q[2]);
    $("#choiceC").text(questions[i].Q[3]);
    $("#choiceD").text(questions[i].Q[4]);
    answer = (questions[i].A[0]);
    console.log(answer);
  //}

  // record answer choice, change to lowercase, store in userChoiceLower variable
  $(document).keypress(function(e)
  {
      var userChoice = String.fromCharCode(e.which);
      var userChoiceLower = userChoice.toLowerCase();
      if (userChoice.match(/[a-dA-D\.]/)) //check to make sure answer choice is A-D

// check to see if userChoiceLower is correct answer send message that matches
      if (userChoiceLower === answer){
        $("#correctAnswer").text("Nice Job! The correct answer is: " + userChoiceLower);
        setTimeout(function() { $("#correctAnswer").hide(); }, 5000);
        w = w++;
        wins = $("#numberCorrect").text(w);
        console.log(w)




        }  else {
          $("#correctAnswer").text("Incorrect. Actually, the correct answer is: " + answer);
          setTimeout(function() { $("#correctAnswer").hide(); }, 5000);
          i++;

        };
                         i = i++;
                         rotate();
 });



 }

// how to advance to next question after correct/incorrect message shows
// overall timer 60 seconds for Game
// message and reset button to restart game

rotate();




// setTimeout(fiveSeconds, 1000 * 5);
// setTimeout(tenSeconds, 1000 * 10);
//
//
// //  Step 3:
// //  Fill in the blanks to these functions.
// function fiveSeconds() {
//
//   // in the element with an id of time-left add an h2 saying About 10 Seconds Left!
//   // console log 10 seconds left
//   $("#time-left").append("<h2>About 10 Seconds Left!</h2>");
//   console.log("10 seconds left");
// }
//
// function tenSeconds() {
//
//   // in the element with an id of time-left add an h2 saying About 5 Seconds Left!
//   // console log 5 seconds left
//   $("#time-left").append("<h2>About 5 Seconds Left!</h2>");
//   console.log("5 seconds left");
// }
