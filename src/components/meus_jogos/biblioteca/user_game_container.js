import React, { Component } from 'react';
import RatingDialog from './rating_dialog';
import CustomSnackbar from './../../shared/custom_snackbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRating } from './../../../actions/index';

class UserGameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: 'success',
            content: '',
            duration: 4000,
        }
    }
    openRatingDialog = () => {
        let evaluation = 1;
        this.props.rating.forEach(rating => {
            console.log(rating)
            if (rating.userId === this.props.user.sub) {
                evaluation = Number(rating.evaluation) + 1;
            }
        });
        this.rdOpen(evaluation);
    }

    postRating = (evaluation) => {
        let ratingDto = {
            userId: this.props.user.sub,
            gameId: this.props.id,
            evaluation: evaluation
        };
        this.props.postRating(ratingDto, this.successHandler);
    }

    successHandler = () => {
        this.setState({ content: 'Avaliação realizada com sucesso!' }, () => this.showSnackbar())
    }

    render() {
        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={'/images/GOW-OG-image.jpg'} alt='game-thumbnail' />
                <div className={'game-name'}>{this.props.name}</div>
                <div className={'owned-evaluation-container'}>
                    <div className={'game-price-title'} onClick={this.openRatingDialog}>
                        Avaliação
                    </div>
                </div>
                <div className={'comment-container'}>
                    <div className={'game-price-title'}>
                        Comentário
                    </div>
                </div>
                <RatingDialog
                    openDialog={e => this.rdOpen = e}
                    postRating={this.postRating}
                />
                <CustomSnackbar
                    setClick={e => this.showSnackbar = e}
                    duration={this.state.duration}
                    variant={this.state.variant}
                    content={this.state.content}
                />
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postRating }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserGameContainer);