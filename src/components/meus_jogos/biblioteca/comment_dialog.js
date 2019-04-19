import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Switch from '@material-ui/core/Switch';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

export default class CommentDialog extends React.Component {
    state = {
        open: false,
        comment: '',
        recomendation: true,
    };

    componentDidMount() {
        this.props.openDialog(this.handleClickOpen);
    }

    handleClickOpen = (comment, recomendation) => {
        this.setState({ comment, recomendation, open: true });
    };

    handleClose = (event) => {
        this.setState({ open: false });
    };

    handleChange = name => event => {
        this.setState({ [name]: event.target.checked });
    };

    handleCommentChange = event => {
        this.setState({ comment: event.target.value })
    }

    handleConfirm = (event) => {
        this.props.postComment(this.state.comment, this.state.recomendation);
        this.handleClose();
    }

    render() {
        const recomendationLabel = this.state.recomendation ? 'Eu recomendo o jogo!' : 'Eu não o recomendo!';
        return (
            <div>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                >
                    <DialogTitle id="form-dialog-title">Adicionar/Editar Comentário</DialogTitle>
                    <DialogContent>
                        <DialogContentText>
                            Por favor, informe sua recomendação e seu comentário a respeito do jogo.
                        </DialogContentText>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="comment-field"
                            label="Comentário"
                            value={this.state.comment}
                            onChange={this.handleCommentChange}
                            fullWidth
                            multiline
                            required
                        />
                        <FormGroup row>
                            <FormControlLabel
                                control={
                                    <Switch
                                        checked={this.state.recomendation}
                                        onChange={this.handleChange('recomendation')}
                                        value="recomendation"
                                    />
                                }
                                label={recomendationLabel}
                            />
                        </FormGroup>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancelar
                        </Button>
                        <Button onClick={this.handleConfirm} color="secondary">
                            Confirmar
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
        );
    }
}