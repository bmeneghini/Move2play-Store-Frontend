import React, { Component } from 'react';
import FolderIcon from '@material-ui/icons/Folder';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px',
        flex: '0 1 100%'
    }
});

class GameFileUploadInput extends Component {
    render() {
        const { classes, gameChangedHandler, selectedGameName, shrink, enableFullWidth } = this.props;
        return (
            <React.Fragment>
                <input
                    accept="*"
                    id="contained-button-game-upload"
                    multiple
                    type="file"
                    style={{ display: 'none', }}
                    onChange={gameChangedHandler}
                />
                <TextField
                    id="outlined-search"
                    label={'Caminho para o arquivo do jogo'}
                    placeholder={'Selecione o arquivo do jogo clicando no ícone ao lado'}
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={selectedGameName}
                    fullWidth={enableFullWidth}
                    required
                    InputLabelProps={{
                        shrink: shrink,
                    }}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <label htmlFor="contained-button-game-upload">
                                    <Button
                                        variant="fab"
                                        color="secondary"
                                        component="span"
                                        aria-label="Game file icon"
                                    >
                                        <FolderIcon />
                                    </Button>
                                </label>
                            </InputAdornment>,
                    }}
                />
            </React.Fragment>
        )
    }
}

GameFileUploadInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameFileUploadInput);