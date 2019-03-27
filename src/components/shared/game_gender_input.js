import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import OutlinedInput from '@material-ui/core/OutlinedInput';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

const styles = theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    formControl: {
        margin: theme.spacing.unit,
        minWidth: 200   ,
    },
    selectEmpty: {
        marginTop: theme.spacing.unit * 2,
    },
});

class GameGenderInput extends React.Component {
    render() {
        const { classes, handleGenderChange, gameGender } = this.props;
        return (
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel
                    ref={ref => { this.InputLabelRef = ref; }}
                    htmlFor="outlined-categoria-simple"
                >
                    Categoria
            </InputLabel>
                <Select
                    value={gameGender}
                    onChange={handleGenderChange}
                    classes={{ root: classes.root }}
                    style={{ color: 'white !important' }}
                    input={
                        <OutlinedInput
                            style={{ color: 'white !important' }}
                            name="categoria"
                            id="outlined-categoria-simple"
                            labelWidth={this.labelRef ? this.labelRef.offsetWidth : 0}
                        />
                    }
                >
                    <MenuItem value="">
                        <em>Escolha um</em>
                    </MenuItem>
                    <MenuItem value={10}>Ação</MenuItem>
                    <MenuItem value={20}>Aventura</MenuItem>
                    <MenuItem value={30}>Casual</MenuItem>
                    <MenuItem value={40}>Esportes</MenuItem>
                    <MenuItem value={50}>Estratégia</MenuItem>
                    <MenuItem value={60}>Indie</MenuItem>
                </Select>
            </FormControl>
        )
    }
}

GameGenderInput.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameGenderInput);