import React, { Component } from 'react';
import StepSlider from './../shared/step_slider';
import './../../styles/game_evaluation.css';

export default class GameEvaluation extends Component {
    render() {
        const { evaluation } = this.props;
        let totalEvaluation = 0;
        evaluation.forEach(element => {
            totalEvaluation += element.evaluation
        });
        const sentiment = totalEvaluation < 0
            ? 0 : totalEvaluation === 0
                ? 1 : 2
        return (
            <div className='game-evaluation-container'>
                <h2 className={'game-evaluation-title'}>Avaliação do Jogo</h2>
                <div className={'step-slider'}>
                    <StepSlider
                        disabled={true}
                        sentiment={sentiment}
                    />
                </div>
            </div>
        )
    }
}
