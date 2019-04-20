import React, { Component } from 'react';
import RatingDialog from './rating_dialog';
import CommentDialog from './comment_dialog';
import CustomSnackbar from './../../shared/custom_snackbar';
import PropTypes from 'prop-types';
import Tooltip from '@material-ui/core/Tooltip';
import { withStyles } from '@material-ui/core/styles';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { postRating, postComment } from './../../../actions/index';

function arrowGenerator(color) {
    return {
        '&[x-placement*="bottom"] $arrow': {
            top: 0,
            left: 0,
            marginTop: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '0 1em 1em 1em',
                borderColor: `transparent transparent ${color} transparent`,
            },
        },
        '&[x-placement*="top"] $arrow': {
            bottom: 0,
            left: 0,
            marginBottom: '-0.95em',
            width: '3em',
            height: '1em',
            '&::before': {
                borderWidth: '1em 1em 0 1em',
                borderColor: `${color} transparent transparent transparent`,
            },
        },
        '&[x-placement*="right"] $arrow': {
            left: 0,
            marginLeft: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 1em 1em 0',
                borderColor: `transparent ${color} transparent transparent`,
            },
        },
        '&[x-placement*="left"] $arrow': {
            right: 0,
            marginRight: '-0.95em',
            height: '3em',
            width: '1em',
            '&::before': {
                borderWidth: '1em 0 1em 1em',
                borderColor: `transparent transparent transparent ${color}`,
            },
        },
    };
}

const styles = theme => ({
    arrowPopper: arrowGenerator(theme.palette.grey[700]),
    arrow: {
        position: 'absolute',
        fontSize: 6,
        width: '3em',
        height: '3em',
        '&::before': {
            content: '""',
            margin: 'auto',
            display: 'block',
            width: 0,
            height: 0,
            borderStyle: 'solid',
        },
    },
    bootstrapPopper: arrowGenerator(theme.palette.common.black),
    bootstrapTooltip: {
        backgroundColor: theme.palette.common.black,
    },
    bootstrapPlacementLeft: {
        margin: '0 8px',
    },
    bootstrapPlacementRight: {
        margin: '0 8px',
    },
    bootstrapPlacementTop: {
        margin: '8px 0',
    },
    bootstrapPlacementBottom: {
        margin: '8px 0',
    }
})

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
        var splitedPath = this.props.serverPath.split('\\');
        const filePath = `${process.env.REACT_APP_API_ROOT_URL}/Files/Games/${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}`;
        window.open(filePath, '_blank');
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
        const { classes } = this.props;
        var splitedPath = this.props.gameThumbnail.split('\\');
        const imageSource = `${process.env.REACT_APP_API_ROOT_URL}/Files/Games/${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}`;
        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={imageSource} alt='game-thumbnail' onClick={this.handleDownloadClick} />
                <Tooltip
                    title={
                        <React.Fragment>
                            Clique para fazer download do jogo!
                            {/* <span className={classes.arrow} ref={this.handleArrowRef} /> */}
                        </React.Fragment>
                    }
                    classes={{
                        tooltip: classes.bootstrapTooltip,
                        popper: classes.bootstrapPopper,
                        tooltipPlacementLeft: classes.bootstrapPlacementLeft,
                        tooltipPlacementRight: classes.bootstrapPlacementRight,
                        tooltipPlacementTop: classes.bootstrapPlacementTop,
                        tooltipPlacementBottom: classes.bootstrapPlacementBottom,
                    }}
                    PopperProps={{
                        popperOptions: {
                            modifiers: {
                                arrow: {
                                    enabled: Boolean(this.state.arrowRef),
                                    element: this.state.arrowRef,
                                },
                            },
                        },
                    }}
                >
                    <div className={'game-name'} onClick={this.handleDownloadClick}>{this.props.name}</div>
                </Tooltip>
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

UserGameContainer.propTypes = {
    classes: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ postRating, postComment }, dispatch)
}

export default withStyles(styles)(connect(null, mapDispatchToProps)(UserGameContainer));