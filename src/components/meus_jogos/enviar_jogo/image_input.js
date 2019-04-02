import React, { Component } from 'react';
import Image from '@material-ui/icons/Image';
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

class ImageInput extends Component {
    render() {
        const { classes, fileChangedHandler, selectedLogoName, shrink, enableFullWidth } = this.props;
        return (
            <React.Fragment>
                <input
                    accept="image/*"
                    id="contained-button-file"
                    multiple
                    type="file"
                    style={{ display: 'none', }}
                    onChange={fileChangedHandler}
                />
                <TextField
                    id="outlined-search"
                    label={'Imagem'}
                    placeholder={'Selecione uma imagem clicando no ícone ao lado'}
                    type="search"
                    className={classes.textField}
                    margin="normal"
                    variant="outlined"
                    value={selectedLogoName}
                    fullWidth={enableFullWidth}
                    required
                    InputLabelProps={{
                        shrink: shrink,
                    }}
                    InputProps={{
                        endAdornment:
                            <InputAdornment position="end">
                                <label htmlFor="contained-button-file">
                                    <Button
                                        variant="fab"
                                        color="secondary"
                                        component="span"
                                        aria-label="Game image icon"
                                    >
                                        <Image />
                                    </Button>
                                </label>
                            </InputAdornment>,
                    }}
                />
            </React.Fragment>
        )
    }
}

ImageInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ImageInput);