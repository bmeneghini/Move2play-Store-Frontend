import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/lab/Breadcrumbs';
import Link from '@material-ui/core/Link';
import history from './../config/history';

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

function GameDetailBreadcrumb(props) {
    const { classes } = props;
    const paperClass = `${classes.paper} game-details-breadcrumb`;
    return (
        <div className={classes.root}>
            <Paper className={paperClass}>
                <Breadcrumbs aria-label="Breadcrumb">
                    <Link color="primary" onClick={() => history.push('/')}>
                        Inicio
                    </Link>
                    <Link color="primary" onClick={() => history.push('/jogos')}>
                        Catálogo de Jogos
                    </Link>
                    <Typography color="secondary">Detalhes</Typography>
                </Breadcrumbs>
            </Paper>
        </div>
    );
}

GameDetailBreadcrumb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GameDetailBreadcrumb);