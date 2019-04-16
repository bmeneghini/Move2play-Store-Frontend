import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';

const styles = theme => ({
    root: {
        justifyContent: 'center',
        flexWrap: 'wrap',
        margin: '20px 20vmax',
        width: 'fit-content',

    },
    paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        backgroundColor: '#151d27'
    },
});

function EnviarJogoBreadcrumb(props) {
    const { classes } = props;
    const paperClass = `${classes.paper} game-details-breadcrumb`;
    return (
        <div className={classes.root}>
            <Paper className={paperClass}>
                <Breadcrumbs aria-label="Breadcrumb">
                    <Link color="primary" href="/">
                        Inicio
                    </Link>
                    <Link color="primary" href="/">
                        Meus jogos
                    </Link>
                    <Typography color="secondary">Enviar jogo</Typography>
                </Breadcrumbs>
            </Paper>
        </div>
    );
}

EnviarJogoBreadcrumb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EnviarJogoBreadcrumb);