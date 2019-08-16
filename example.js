var myQuestions = [
  {
    question: "How much plastic is in the world?",
    answers: {
      a: '3.5 billion metric tons',
      b: '8.3 billion metric tons'
    },
    correctAnswer: 'b'
  },
  {
    question:"How much of the world's plastic has been recycled?",
    answers:{
      a:'9%',
      b:'20%'
    },
    correctAnswer:'a'
  },
  {
    question:"How much plastic ends up in the ocean?",
    answers:{
      a:'Eight million metric ton eah year',
      b:'Two million metric ton each year'
    },
    correctAnswer:'a'
  },
  {
    question: "What percent of items in landfills can be recycled?",
    answers: {
      a: '30%',
      b: '80%'
    },
    correctAnswer: 'b'
  },
  {
    question: "How much of produced food is wasted each year?",
    answers: {
      a: '1/3 of food',
      b: '6/8 of food'
    },
    correctAnswer: 'a'
  }
];

var quizContainer = document.getElementById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

generateQuiz(myQuestions, quizContainer, resultsContainer, submitButton);

function generateQuiz(questions, quizContainer, resultContain, submitButton){
  function showQuestions(questions, quizContainer){
    //place to store the output and answer choice
    var output = [];
    var answers;
    //each question
    for(var i=0; i<questions.length; i++){
      //reset Answer
      answers = [];
      //each available answer
      for(letter in questions[i].answers){
        //add html radio button
        answers.push(
          '<label>'
            + '<input type= "radio" name= "question'+i+'" value="'+letter+'">'
            + letter + ': '
            + questions[i].answers[letter]
          + '</label>'
        );
      }

      output.push(
			  '<div class="question">' + questions[i].question + '</div>'
			  + '<div class="answers">' + answers.join('') + '</div>'
		  );
	  }

    quizContainer.innerHTML = output.join('');
  }
  function showResults(questions, quizContainer, resultsContainer){
  //code
    var answerContainers = quizContainer.querySelectorAll('.answers');

	// keep track of user's answers
	  var userAnswer = '';
	  var numCorrect = 0;

	// for each question...
	  for(var i=0; i<questions.length; i++){

		// find selected answer
		  userAnswer = (answerContainers[i].querySelector('input[name=question'+i+']:checked')||{}).value;

		// if answer is correct
		  if(userAnswer===questions[i].correctAnswer){
			// add to the number of correct answers
			  numCorrect++;

			// color the answers green
			  answerContainers[i].style.color = 'lightgreen';
		  }
		// if answer is wrong or blank
		  else{
			// color the answers red
			  answerContainers[i].style.color = 'red';
		  }
	  }

	// show number of correct answers out of total
	  resultsContainer.innerHTML = numCorrect + ' out of ' + questions.length;
  }


  showQuestions(questions, quizContainer);
  submitButton.onclick = function(){
    showResults(questions, quizContainer, resultsContainer);
  }

}
