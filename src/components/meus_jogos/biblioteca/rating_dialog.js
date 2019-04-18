import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import StepSlider from './../../shared/step_slider';

class RatingDialog extends React.Component {
    state = {
        open: false,
        sentiment: 1,
        evaluation: 1
    };

    componentDidMount() {
        this.props.openDialog(this.handleClickOpen);
    }

    handleClickOpen = (sentiment) => {
        this.setState({ sentiment, open: true });
    };

    handleClose = () => {
        this.setState({ open: false });
    };

    handleConfirm = () => {
        this.props.postRating(this.state.evaluation)
        this.handleClose();
    }

    setEvaluationState = (evaluation) => {
        this.setState({ evaluation: evaluation - 1 });
    }

    render() {
        return (
            <Dialog
                open={this.state.open}
                onClose={this.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">Avaliação</DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">
                        Por favor, avalie o jogo de acordo com sua experiência:
                    </DialogContentText>
                    <StepSlider
                        sentiment={this.state.sentiment}
                        setEvaluationState={this.setEvaluationState}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={this.handleClose} color="primary">
                        Cancelar
                    </Button>
                    <Button onClick={this.handleConfirm} color="secondary" autoFocus>
                        Confirmar
                    </Button>
                </DialogActions>
            </Dialog>
        );
    }
}

export default RatingDialog;