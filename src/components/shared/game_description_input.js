import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 4
    }
});

class GameDescriptionInput extends React.Component {
    render() {
        const { classes, handleChange, gameDescription, shrink, enableFullWidth, label, placeholder, required } = this.props;
        const customStyle = classes.textField;
        return (
            <TextField
                id="outlined-search"
                multiline
                label={label}
                placeholder={placeholder}
                type="search"
                className={customStyle}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                value={gameDescription}
                required={required}
                fullWidth={enableFullWidth}
                InputLabelProps={{
                    shrink: shrink,
                }}
            />
        )
    }
}

GameDescriptionInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameDescriptionInput);