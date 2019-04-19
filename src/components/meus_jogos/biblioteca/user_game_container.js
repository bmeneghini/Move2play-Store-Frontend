import React, { Component } from 'react';
import RatingDialog from './rating_dialog';
import CommentDialog from './comment_dialog';
import CustomSnackbar from './../../shared/custom_snackbar';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRating, postComment, downloadFileFromServer } from './../../../actions/index';

class UserGameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: 'success',
            content: '',
            duration: 4000,
        }
    }

    handleDownloadClick = () => {
        let fileDto = {
            serverPath: this.props.serverPath.replace(/%5C/g, "%5C%5C")
        }
        this.props.downloadFileFromServer(fileDto, this.downloadFile);
    }

    downloadFile = (result) => {
        var data = result.data;
        var a = document.createElement("a");
        document.body.appendChild(a);
        a.style = "display: none";
        var json = JSON.stringify(data),
            blob = new Blob([json], { type: "octet/stream" }),
            url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = data.filename;
        a.click();
        window.URL.revokeObjectURL(url);
    }

    openRatingDialog = (event) => {
        event.stopPropagation();
        let evaluation = 1;
        this.props.rating.forEach(rating => {
            if (rating.userId === this.props.user.sub) {
                evaluation = Number(rating.evaluation) + 1;
            }
        });
        this.rdOpen(evaluation);
    }

    openCommentDialog = (event) => {
        event.stopPropagation();
        let description = '';
        let recomendation = true;
        this.props.comments.forEach(comment => {
            if (comment.userId === this.props.user.sub) {
                description = comment.description;
                recomendation = comment.recomendation;
            }
        });
        this.cdOpen(description, recomendation);
    }

    postRating = (evaluation) => {
        let ratingDto = {
            userId: this.props.user.sub,
            gameId: this.props.id,
            evaluation: evaluation
        };
        this.props.postRating(ratingDto, this.successHandler);
    }

    postComment = (description, recomendation) => {
        let commentDto = {
            userId: this.props.user.sub,
            userName: this.props.user.name,
            gameId: this.props.id,
            description,
            recomendation: recomendation ? 1 : 0
        }
        this.props.postComment(commentDto, this.successHandler);
    }

    successHandler = () => {
        this.setState({ content: 'Operação realizada com sucesso!' }, () => this.showSnackbar())
    }

    render() {
        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={'/images/GOW-OG-image.jpg'} alt='game-thumbnail' onClick={this.handleDownloadClick} />
                <div className={'game-name'} onClick={this.handleDownloadClick}>{this.props.name}</div>
                <div className={'owned-evaluation-container'}>
                    <div className={'game-price-title'} onClick={this.openRatingDialog}>
                        Avaliação
                    </div>
                </div>
                <div className={'comment-container'}>
                    <div className={'game-price-title'} onClick={this.openCommentDialog}>
                        Comentário
                    </div>
                </div>
                <CommentDialog
                    openDialog={e => this.cdOpen = e}
                    postComment={this.postComment}
                />
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
    return bindActionCreators({ postRating, postComment, downloadFileFromServer }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserGameContainer);