
  setTimeout(timeUp, 1000 * 61);
  var audio = new Audio("cheer.mp3");

  var count=60;
  var counter=setInterval(timer, 1000); //counter will run it every 1 second

  var w = 0;
  var l = 0;

  var wins = $("#numberCorrect").text(w);
  var losses = $("#numberWrong").text(l);


// Q: [question, 4 choices]
//A: [corresponding correct answer]

  var questions = [
  {
        Q: ["What is the state capital of Michigan?", "A) Lansing", "B) Ann Arbor", "C) Kalamazoo", "D) Detroit"],
        A: ["a"]
      },
    {
        Q: ["What is the state capital of Nebraska?", "A) Omaha", "B) Lincoln", "C) Hastings", "D) Columbs"],
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

// This function starts the timer of 60 seconds for the whole game to run
  function timeUp() {
      $("#correctAnswer").text("");
      $("#questionHere").html('<h3>Time is Up! Thank you for Playing!</h3>');
      $("#questionHere").append('<span class = "btn newButton"> click here to play again </span>');
      $("#choiceA").text("");
      $("#choiceB").text("");
      $("#choiceC").text("");
      $("#choiceD").text("");

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
  var i = 0

// This function is set up to rotate through the different questions
function gameMode() {
  rotate();

  $(document).keypress(function(e) {
      var answer = questions[i].A[0];
      var userChoice = String.fromCharCode(e.which);
      var userChoiceLower = userChoice.toLowerCase();
      if (userChoice.match(/[a-dA-D\.]/)) //check to make sure answer choice is A-D

  // check to see if userChoiceLower is correct answer send message that matches
      if (userChoiceLower === answer){
        $("#correctAnswer").text("Nice Job! The correct answer is: " + userChoiceLower);
        setTimeout(function() { $("#correctAnswer").hide(); }, 3000);
        w++;
        w = w++;
        i++;
        i = i++;
        setTimeout(function(){rotate();}, 3000); // waits 3 seconds before next question
  // Que up next question

        }  else {
          // add losses ++ add Que up next question
          $("#correctAnswer").text("Incorrect. Actually, the correct answer is: " + answer);
          setTimeout(function() { $("#correctAnswer").hide(); }, 3000);
          l++;
          l = l++;
          i++;
          i = i++;
          setTimeout(function(){rotate();}, 3000);
        };

  // update points for correct and incorrect answers
      wins = $("#numberCorrect").text(w);
      losses = $("#numberWrong").text(l);

  });


function rotate(){
  if (i < 11) {

    $("#questionHere").text(questions[i].Q[0]);
    $("#choiceA").text(questions[i].Q[1]);
    $("#choiceB").text(questions[i].Q[2]);
    $("#choiceC").text(questions[i].Q[3]);
    $("#choiceD").text(questions[i].Q[4]);
    answer = (questions[i].A[0]);
    console.log(answer);
  } else {
      timeUp();

  };

}
};
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
