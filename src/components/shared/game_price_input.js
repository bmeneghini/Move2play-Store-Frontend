import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px'
    },
});

class GamePriceInput extends React.Component {
    render() {
        const { classes, handleGamePriceChange, gamePrice } = this.props;
        return (
            <TextField
                id="outlined-amount"
                label="Preço"
                type="number"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                value={gamePrice}
                onChange={handleGamePriceChange}
                InputProps={{
                    startAdornment: <InputAdornment position="start">R$</InputAdornment>,
                }}
            />
        )
    }
}

GamePriceInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GamePriceInput);