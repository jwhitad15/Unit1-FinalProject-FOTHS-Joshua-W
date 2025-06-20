import React, { Component } from 'react';

class Score extends Component {
    render() {
        const { score, onNextQuestion } = this.props;


        return (
            <div>
                <h2>Results</h2>
                <h4>{score}/5</h4>
            </div>
        );
    }
}

export default Score;