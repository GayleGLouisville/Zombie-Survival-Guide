
/*quiz script*/
var pos = 0, quiz, quiz_status, question, choice, choices, chA, chB, chC, correct = 0;

/* quiz questions start */
var questions = [
    [ "What should you include in your zombie survival kit?", "Food, first-aid supplies and my favorite shotgun!", "All the canned food I can carry.", "Personal care items. If I look good, someone will take care of me.", "A" ],
	
    [ "Do you have a plan for when the zombies arise?", "I have a couple of rough ideas.", "Zombies?", "Packed and ready to go at a moments notice.", "C" ],
	
    [ "Theoretical question: You are surrounded in the open by 20 zombies. You only have a shotgun and 5 shells. Are you screwed?", "Yes, definitely.", "Yes, but I'm taking 5 of them with me!", "The Kobayashi Maru type: 'I would not allow myself to get into this situation.'", "C" ],
	
    [ "What is required in order to fully 'kill' a zombie?", "A silver bullet.", "Destroying the brain.", "Knife in the heart.", "B" ],
   
    [ "Finally, how long does it take an infected person to 'turn'?", "I'm not hanging around waiting to find out.", "Under an hour.", "Depends on where they were bitten.", "A" ]

    /* Quiz questions end */
];
function _(x){
	return document.getElementById(x);
}
/* populates the first question*/
function renderQuestion(){
	quiz = _("quiz");
	if(pos >= questions.length){
		quiz.innerHTML = "<h2>You got "+correct+" of "+questions.length+" questions correct!</h2>";
		_("quiz_status").innerHTML = "Quiz Completed";
		pos = 0; /*resets the quiz back to the start*/
		correct = 0;
		return false; /*stops the renderQuestion from running again*/
	}
	_("quiz_status").innerHTML = "Question "+(pos+1)+" of "+questions.length;
	question = questions[pos][0]; /*puts the question in the variable*/
	chA = questions[pos][1]; /*possible answers*/
	chB = questions[pos][2];
	chC = questions[pos][3];
	quiz.innerHTML = "<h3>"+question+"</h3>"; /*populates the question */
  /*radio buttons*/
	quiz.innerHTML += "<input type='radio' name='choices' value='A'> "+chA+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='B'> "+chB+"<br>";
	quiz.innerHTML += "<input type='radio' name='choices' value='C'> "+chC+"<br><br>";
	/*Submit button*/
  	quiz.innerHTML += "<button id='qbutton' onclick='checkAnswer()'>Submit Answer</button>";
}
/*checks the user's choice for correct answer*/
function checkAnswer(){
	choices = document.getElementsByName("choices");
	for(var i=0; i<choices.length; i++){
		if(choices[i].checked){
			choice = choices[i].value;
		}
	}
  /*evaluates if choice is correct or not*/
	if(choice == questions[pos][4]){
		correct++; /*keeps track of correct number of questions*/
	}
	pos++;
	renderQuestion(); /*runs the renderQuestion function again*/
}
/*loads first question*/
window.addEventListener("load", renderQuestion, false);

/*end quiz script*/

/*Top button start*/

/*top button end*/
