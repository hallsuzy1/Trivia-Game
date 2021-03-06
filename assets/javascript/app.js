
  setTimeout(timeUp, 1000 * 61);
  var audio = new Audio("cheer.mp3");

  var count=60;
  var counter=setInterval(timer, 1000); //counter will run every 1 second

  var w = 0;
  var l = 0;

  var wins = $("#numberCorrect").text(w);
  var losses = $("#numberWrong").text(l);

  var i = 0


// Q: [question, 4 choices]
//A: [corresponding correct answer]
  var questions = [
  {
        Q: ["What is the state capital of Michigan?", "A) Lansing", "B) Ann Arbor", "C) Kalamazoo", "D) Detroit"],
        A: ["a"]
      },
    {
        Q: ["What is the state capital of Nebraska?", "A) Omaha", "B) Lincoln", "C) Hastings", "D) Columbus"],
        A: ["b"]
      },
    {
        Q: ["What is the state capital of Massachusetts?", "A) Boston", "B) Springfield", "C) Cambridge", "D) Quincy"],
        A: ["a"]
      },
    {
        Q: ["What is the state capital of Alaska?", "A) Anchorage", "B) Sitka", "C) Badger", "D) Juneau"],
        A: ["d"]
      },
    {
        Q: ["What is the state capital of Montana?", "A) Missoula", "B) Great Falls", "C) Helena", "D) Billings"],
        A: ["c"]
      },
    {
        Q: ["What is the state capital of Wyoming?", "A) Cheyenne", "B) Evanston", "C) Jackson", "D) Sheridan"],
        A: ["a"]
      },
    {
        Q: ["What is the state capital of Illinois?", "A) Chicago", "B) Springfield", "C) Aurora", "D) Rockford"],
        A: ["b"]
      },
    {
        Q: ["What is the state capital of Texas?", "A) Houston", "B) Dallas", "C) Austin", "D) Fort Worth"],
        A: ["c"]
      },
    {
        Q: ["What is the state capital of Maine?", "A) Portland", "B) Bangor", "C) Auburn", "D) Augusta"],
        A: ["d"]
      },
    {
        Q: ["What is the state capital of California?", "A) Los Angeles", "B) San Francisco", "C) Oakland", "D) Sacramento"],
        A: ["d"]
      }
  ];


// This function shows the end of game message
  function timeUp() {
      $("#correctAnswer").empty();
      $("#questionHere").html('<h3>Time is Up! Thank you for Playing!</h3>');
      $("#questionHere").append('<span id = "restartButton" class = "btn newButton"> click here to play again </span>');
      $("#choiceA").empty();
      $("#choiceB").empty();
      $("#choiceC").empty();
      $("#choiceD").empty();
      audio.play();

// This function restarts the game if the restart button is clicked
      $(".newButton").click(function(){
        i = 0;
        count = 60;
        timer();
        gameMode();
        w = 0;
        l = 0;

      });
  }


// This function displays a visual countdown timer on the page
  function timer() {
    count=count-1;
    if (count <= -1)
    {
       clearInterval(counter);
       return;
    }
    $("#counterSpan").text(count + " seconds");
  }


// This function is set up to rotate through the different questions
function gameMode() {

   rotate();

function key (){
  $(document).one("keypress", function(e) {
      var answer = questions[i].A[0];
      var userChoice = String.fromCharCode(e.which);
      var userChoiceLower = userChoice.toLowerCase();
      if (userChoice.match(/[a-dA-D\.]/)) //check to make sure answer choice is A-D

  // check to see if userChoiceLower is correct answer send message that matches
      if (userChoiceLower === answer){
        $("#questionHere").text("Nice Job! The correct answer is: " + userChoiceLower);
        setTimeout(function(){rotate();}, 3000);
        w++;
        w = w++;
        i++;
        i = i++;

        }  else {
          $("#questionHere").text("Incorrect. Actually, the correct answer is: " + answer);
          setTimeout(function(){rotate();}, 3000);
          l++;
          l = l++;
          i++;
          i = i++;

        };

  // update points for correct and incorrect answers
      wins = $("#numberCorrect").text(w);
      losses = $("#numberWrong").text(l);
});
  };



function rotate(){
  if (i > 9) {
    timeUp();
  } else {

    $("#questionHere").text(questions[i].Q[0]);
    $("#choiceA").text(questions[i].Q[1]);
    $("#choiceB").text(questions[i].Q[2]);
    $("#choiceC").text(questions[i].Q[3]);
    $("#choiceD").text(questions[i].Q[4]);
    answer = (questions[i].A[0]);
    console.log("i is" + i);
    console.log(answer);
    key();

  };
}

}

//   (i < 11) {
//
//     $("#questionHere").text(questions[i].Q[0]);
//     $("#choiceA").text(questions[i].Q[1]);
//     $("#choiceB").text(questions[i].Q[2]);
//     $("#choiceC").text(questions[i].Q[3]);
//     $("#choiceD").text(questions[i].Q[4]);
//     answer = (questions[i].A[0]);
//     console.log(answer);
//   } else {
//       timeUp();
//
//   };
//
// }
// };
  // record answer choice, change to lowercase, store in userChoiceLower variable


// message and reset button to restart game

gameMode();




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
