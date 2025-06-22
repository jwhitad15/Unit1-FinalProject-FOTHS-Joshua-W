import React, { Component } from "react";
import Question from "./question";
import Score from "./score";
import FourElementHeader from "../header-components/header-4";
import Footer from "../footer/footer";
import faithMultiChoice from "../../data/faith-multi-choice";

class Multichoice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // questionBank: qBank,
            questionBank: faithMultiChoice,
            currentQuestion: 0,
            selectedOption: "",
            score: 0,
            quizEnd: false,
        };
    }

    handleOptionChange = (e) => {this.setState({ selectedOption: e.target.value })};
    handleFormSubmit = (e) => {e.preventDefault(); this.checkAnswer(); this.handleNextQuestion()};
    checkAnswer = () => {const { questionBank, currentQuestion, selectedOption, score } = this.state;

        if (selectedOption === questionBank[currentQuestion].answer) {
            this.setState((prevState) => ({ score: prevState.score + 1 }));
            }
    };
    
    handleNextQuestion = () => {const { questionBank, currentQuestion } = this.state;

        if (currentQuestion + 1 < questionBank.length) {
            this.setState((prevState) => ({ currentQuestion: prevState.currentQuestion + 1, selectedOption: "" }));
        } else {
            this.setState({quizEnd: true});
        }
    };

    render() {
      const { questionBank, currentQuestion, selectedOption, score, quizEnd } = this.state;

      return (
        <div>
            <div> <FourElementHeader/> </div> 
            <div className="study-title"> Quiz Mode </div>
                {!quizEnd && (<main className="quiz-display"> <p> <Question question={questionBank[currentQuestion]} selectedOption={selectedOption} onOptionChange={this.handleOptionChange} onSubmit={this.handleFormSubmit}/> </p></main>)}
                {quizEnd && (<main className="quiz-display"> <p> End of quiz. Check your results.</p></main>)}
            <div className="quiz-score"> <p className="verse-size"> <Score score={score} onNextQuestion={this.handleNextQuestion} className="score" /></p> </div>
            <Footer/>
        </div>
      )

    }

};

export default Multichoice;