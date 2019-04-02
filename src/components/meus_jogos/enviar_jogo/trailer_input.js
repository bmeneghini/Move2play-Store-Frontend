import React, { Component } from 'react';
import Movie from '@material-ui/icons/Movie';
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

class TrailerInput extends Component {
    render() {
        const { classes, handleChange, gameTailer, shrink, enableFullWidth } = this.props;
        return (
            <React.Fragment>
                <input
                    accept="*"
                    disabled
                    id="contained-button-trailer"
                    multiple
                    type="file"
                    style={{ display: 'none', }}
                />
                <TextField
                    id="outlined-search"
                    label={'Trailer'}
                    placeholder={'Insira a URL do trailer'}
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    required
                    onChange={handleChange}
                    value={gameTailer}
                    fullWidth={enableFullWidth}
                    InputLabelProps={{
                        shrink: shrink,
                    }}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <Button
                                    htmlFor="contained-button-trailer"
                                    variant="fab"
                                    color="secondary"
                                    component="span"
                                    aria-label="Search icon for game name input"
                                    onClick={this.handleButtonClick}
                                >
                                <Movie />
                                </Button>
                            </InputAdornment>,
                    }}
                />
            </React.Fragment>
        )
    }
}

TrailerInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TrailerInput);