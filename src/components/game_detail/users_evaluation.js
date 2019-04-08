import React, { Component } from 'react';
import Evaluation from './evaluation';
import './../../styles/users_evaluation.css';

export default class UsersEvaluation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            usersEvaluation: [
                { userName: 'Usuario1', totalOfEvaluations: 10, evaluationResult: 1, commentary: 'Lorem ipsum dolor sit amet consectetur adipiscing , integer taciti proin vitae inceptos vulputate phasellus, augue ex auctor pretium montes aptent.' },
                { userName: 'Usuario2', totalOfEvaluations: 20, evaluationResult: 0, commentary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lacus ornare efficitur consectetur mus per in maecenas ligula conubia ullamcorper dis. Nisi maecenas hac volutpat donec vehicula fringilla enim suscipit egestas class, aliquam dignissim ornare porttitor curabitur suspendisse lorem dui gravida, orci elit ultrices magnis nascetur porta est nibh platea. Vulputate ex nec suspendisse nisl eros feugiat suscipit sit nam torquent nunc ullamcorper senectus nostra lacinia, per risus donec facilisis scelerisque tellus ad commodo viverra habitasse gravida dolor montes et. Molestie ultricies finibus gravida purus consequat pharetra vestibulum, integer taciti proin vitae inceptos vulputate phasellus, augue ex auctor pretium montes aptent.2' },
                { userName: 'Usuario2', totalOfEvaluations: 30, evaluationResult: 1, commentary: 'Lorem ipsum dolor sit amet consectetur adipiscing elit lacus ornare integer, quam eleifend mattis tristique feugiat nulla luctus metus urna gravida nibh, nullam vivamus justo et nascetur euismod magna nisl inceptos. Suscipit himenaeos ultrices efficitur consectetur mus per cubilia feugiat, laoreet porttitor vestibulum felis senectus dignissim taciti mollis, orci in maecenas ligula conubia ullamcorper dis. Nisi maecenas hac volutpat donec vehicula fringilla enim suscipit egestas class, aliquam dignissim ornare porttitor curabitur suspendisse lorem dui gravida, orci elit ultrices magnis nascetur porta est nibh platea. Vulputate ex nec suspendisse nisl eros feugiat suscipit sit nam torquent nunc ullamcorper senectus nostra lacinia, per risus donec facilisis scelerisque tellus ad commodo viverra habitasse gravida dolor montes et. Molestie ultricies finibus gravida purus consequat pharetra vestibulum, integer taciti proin vitae inceptos vulputate phasellus, augue ex auctor pretium montes aptent.3' },
            ]
        }
    }

    componentDidMount() {
        // Implementar chamada ao backend
    }

    renderEvaluations = () => {
        return this.state.usersEvaluation.map((evaluation, index) => {
            return <Evaluation
                key={index}
                userName={evaluation.userName}
                totalOfEvaluations={evaluation.totalOfEvaluations}
                evaluationResult={evaluation.evaluationResult}
                commentary={evaluation.commentary}
            />
        });
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
