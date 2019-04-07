import React, { Component } from 'react';
import StepSlider from './../shared/step_slider';
import './../../styles/game_evaluation.css';

export default class GameEvaluation extends Component {
    render() {
        return (
            <div className='game-evaluation-container'>
                <h2 className={'game-evaluation-title'}>Avaliação do Jogo</h2>
                <div className={'step-slider'}>
                    <StepSlider
                        disabled={true}
                    />
                </div>
            </div>
        )
    }
}
