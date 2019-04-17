import React, { Component } from 'react';
import StepSlider from './../shared/step_slider';
import './../../styles/game_evaluation.css';

export default class GameEvaluation extends Component {
    render() {
        const sentiment = this.props.evaluation === -1
            ? 0 : this.props.evaluation === 0 
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
