const questions = [
    {
    question: "What is the capital of France?",
    answers: ["Berlin", "Madrid", "Paris", "Rome"],
    correct: 2
    },
    {
    question: "Which programming language is used for web development?",
    answers: ["Python", "JavaScript", "C++", "Ruby"],
    correct: 1
    }
   ];

   let currentQuestion = 0;
   // DOM Elements
   const questionElement = document.getElementById("question");
   const answerButtons = document.querySelectorAll(".answer");
   const feedbackElement = document.getElementById("feedback");
   const nextButton = document.getElementById("next-question");

   // Load Question
  const LoadQuestion = () => {
    const current = questions[currentQuestion];
    questionElement.textContent = current.question;
    answerButtons.forEach((button, index) => {
        button.textContent = current.answers[index];
        button.disabled = false; // Re-enable buttons for the new question
        button.style.backgroundColor = ""; // Reset styles
        });
        feedbackElement.textContent = "";
        nextButton.style.display = "none";
       }
       // Handle Answer Click
       
       function handleAnswerClick(event) {
        const selectedButton = event.target;
        const selectedIndex =
       Array.from(answerButtons).indexOf(selectedButton);
        const isCorrect = selectedIndex ===
        questions[currentQuestion].correct;
 feedbackElement.textContent = isCorrect ? "Correct!" : "Wrong answer.";
 selectedButton.style.backgroundColor = isCorrect ? "lightgreen" : "lightcoral";

 // Disable all buttons after an answer is selected
 answerButtons.forEach(button => button.disabled = true);
 nextButton.style.display = "block";
}

// Load Next Question
function nextQuestion() {
 currentQuestion++;
 if (currentQuestion < questions.length) {
 LoadQuestion();
 } else {
 questionElement.textContent = "Quiz completed!";
 answerButtons.forEach(button => button.style.display ="none");
 feedbackElement.textContent = "Great job!";
 nextButton.style.display = "none";
 }

 answerButtons.forEach(button => button.addEventListener("click",
    handleAnswerClick));
    nextButton.addEventListener("click", nextQuestion);
    3
 }
    // Initialize Quiz
    LoadQuestion();

export default LoadQuestion;

