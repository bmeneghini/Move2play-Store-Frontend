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
        margin: '20px 15vmax',
        width: 'fit-content',

    },
    paper: {
        padding: `${theme.spacing.unit}px ${theme.spacing.unit * 2}px`,
        backgroundColor: '#151d27'
    },
});

function GamesListBreadcrumb(props) {
    const { classes } = props;
    const paperClass = `${classes.paper} game-details-breadcrumb`;
    return (
        <div className={classes.root}>
            <Paper className={paperClass}>
                <Breadcrumbs aria-label="Breadcrumb">
                    <Link color="primary" onClick={() => history.push('/')}>
                        Inicio
                    </Link>
                    <Typography color="secondary">Catálogo de Jogos</Typography>
                </Breadcrumbs>
            </Paper>
        </div>
    );
}

GamesListBreadcrumb.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GamesListBreadcrumb);