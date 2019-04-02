import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Visibility from '@material-ui/icons/Search';
import history from '../config/history'

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
    textFieldAppBar: {
        margin: theme.spacing.unit,
        height: '53.63px',
        display: 'flex',
        flexGrow: 1,
        flexDirection: 'row',
    }
});

class GameNameInput extends React.Component {

    handleButtonClick = () => {
        history.push("/jogos");
    }

    render() {
        const { classes, handleGameNameChange, gameName, displaySearch, shrink, enableFullWidth, label, placeholder } = this.props;

        const showAdorment = displaySearch ?
            <InputAdornment position="end">
                <IconButton
                    aria-label="Search icon for game name input"
                    onClick={this.handleButtonClick}
                >
                    {<Visibility colorprimary={'white'} />}
                </IconButton>
            </InputAdornment> : '';

        const customStyle = displaySearch ? classes.textFieldAppBar : classes.textField;

        return (
            <TextField
                id="outlined-search"
                label={label}
                placeholder={placeholder}
                type="search"
                className={customStyle}
                margin="normal"
                variant="outlined"
                onChange={handleGameNameChange}
                value={gameName}
                fullWidth={enableFullWidth}
                InputLabelProps={{
                    shrink: shrink,
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