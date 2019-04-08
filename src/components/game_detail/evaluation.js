import React, { Component } from 'react';
import ThumbsUp from '@material-ui/icons/ThumbUp';
import ThumbDown from '@material-ui/icons/ThumbDown';

export default class Evaluation extends Component {
    render() {
        const { userName, totalOfEvaluations, evaluationResult, commentary } = this.props;
        let evaluationIcon = evaluationResult === 1 ? <ThumbsUp className={'thumbs'} /> : <ThumbDown className={'thumbs'} />
        let evaluationLabel = evaluationResult === 1 ? <span className={'evaluation-label'}>Recomendado</span> : <span className={'evaluation-label'}>Não recomendado</span>;
        return (
            <div className={'evaluation-container'}>
                <div className={'left-container'}>
                    <div className={'user-name'}>Nome do usuário: {userName}</div>
                    <div className={'total-of-evaluations'}>Número de análises já realizadas: {totalOfEvaluations}</div>
                </div>
                <div className={'vertical-line'}></div>
                <div className={'right-container'}>
                    <div className={'evaluation-title'}>{evaluationIcon} {evaluationLabel}</div>
                    <div className={'evaluation-comentary'}>{commentary}</div>
                </div>
            </div>
        )
    }
}
