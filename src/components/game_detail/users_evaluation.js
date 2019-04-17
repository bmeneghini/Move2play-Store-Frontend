import React, { Component } from 'react';
import Evaluation from './evaluation';
import EmptyEvaluation from './empty_evaluation';
import './../../styles/users_evaluation.css';

export default class UsersEvaluation extends Component {
    renderEvaluations = () => {
        if (this.props.comments.length <= 0) {
            return <EmptyEvaluation />
        }
        else {
            return this.props.comments.map((evaluation, index) => {
                return <Evaluation
                    key={index}
                    userName={evaluation.userId}
                    totalOfEvaluations={evaluation.totalOfEvaluations}
                    evaluationResult={evaluation.recomendation}
                    commentary={evaluation.description}
                />
            });
        }
    }
    render() {
        let evaluations = this.renderEvaluations();
        return (
            <div className='users-evaluation-container'>
                <h2 className={'users-evaluation-title'}>Últimos Comentários</h2>
                {evaluations}
            </div>
        )
    }
}
