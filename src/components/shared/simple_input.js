import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
    textField: {
        margin: theme.spacing.unit,
        height: '53.63px',
        display: 'flex',
        flexDirection: 'row',
        flexGrow: 1,
    },
});

class SimpleInput extends React.Component {
    render() {
        const { classes, handleChange, value, shrink, enableFullWidth, label, placeholder, required } = this.props;
        return (
            <TextField
                id="outlined-search"
                label={label}
                placeholder={placeholder}
                className={classes.textField}
                margin="normal"
                variant="outlined"
                onChange={handleChange}
                value={value}
                fullWidth={enableFullWidth}
                required={required}
                InputLabelProps={{
                    shrink: shrink,
                }}
            />
        )
    }
}

SimpleInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SimpleInput);