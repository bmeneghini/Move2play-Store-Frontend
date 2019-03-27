import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import InputAdornment from '@material-ui/core/InputAdornment';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
        maxWidth: 200
    },
});

class GamePriceInput extends React.Component {
    render() {
        const { classes, handleGamePriceChange, gamePrice, enableFullWidth } = this.props;
        return (
            <TextField
                id="outlined-amount"
                label="Preço"
                type="number"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                fullWidth={enableFullWidth}
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