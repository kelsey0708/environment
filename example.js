var myQuestions = [
  {
    question: "1. How much plastic is in the world?",
    answers: {
      a: '3.5 billion metric tons',
      b: '8.3 billion metric tons'
    },
    correctAnswer: 'b'
  },
  {
    question:"2. How much of the world's plastic has been recycled?",
    answers:{
      a:'9%',
      b:'20%'
    },
    correctAnswer:'a'
  },
  {
    question:"3. How much plastic ends up in the ocean each year?",
    answers:{
      a:'8 million metric tons',
      b:'2 million metric tons'
    },
    correctAnswer:'a'
  },
  {
    question: "4. What percent of items in landfills can be recycled?",
    answers: {
      a: '30%',
      b: '80%'
    },
    correctAnswer: 'b'
  },
  {
    question: "5. How much of food produced each year is wasted?",
    answers: {
      a: '1/3',
      b: '3/4'
    },
    correctAnswer: 'a'
  },
  {
    question: "6. How long does it take for a styrofoam cup to decompose?",
    answers: {
      a: '100 years',
      b: 'Over 400 years'
    },
    correctAnswer: 'b'
  },
  {
    question: "7. How much water does the average American use each day?",
    answers: {
      a: '30 gallons',
      b:'100 gallons'
    },
    correctAnswer: 'b'
  },
  {
    question: "8. Scientists predict sea levels will rise by how much by the end of the century?",
    answers: {
      a: '2 to 6 ft',
      b: '8 to 10 inches'
    },
    correctAnswer: 'a'
  },
  {
    question: "9. What percent of the global electricity ouput in 2014 was supplied by renewable energy?",
    answers: {
      a: '30%',
      b: '19%'
    },
    correctAnswer: 'b'
  },
  {
    question: "10. What percent of the world's water is available for human use?",
    answers: {
      a: 'Less than 1%',
      b: '20%'
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
