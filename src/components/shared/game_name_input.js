import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Search';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px'
    },
});

class GameNameInput extends React.Component {
    render() {
        const { classes, handleGameNameChange, gameName, displaySearch } = this.props;

        const showAdorment = displaySearch ? 
        <InputAdornment position="end">
            <IconButton
                aria-label="Search icon for game name input"
            >
                {<Visibility colorprimary={'white'} />}
            </IconButton>
        </InputAdornment> : '';

        return (
            <TextField
                id="outlined-search"
                label="Procurar jogo"
                type="search"
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={handleGameNameChange}
                value={gameName}
                InputLabelProps={{
                    shrink: true,
                }}
                InputProps={{
                    endAdornment: (showAdorment),
                }}
            />
        )
    }
}

GameNameInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameNameInput);