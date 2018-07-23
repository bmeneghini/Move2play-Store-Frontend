import React from 'react'
import { Jumbotron } from 'react-bootstrap';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = {
    jumbotron_style: {
        height: 250,
        backgroundColor: "#d4e9e2",
        padding: 10,
        marginTop: 3,
    },
    content_style: {
        fontSize: 24,
        height: 28,
        fontWeight: 400,
        color: "#9b9b9b",
        fontFamily: "Work Sans",
    },
    div_style: {
        position: "relative",
        marginLeft: 50,
        top: "45%",
    }
};

const CustomJumbotron = (props) => {
    const { content, classes } = props;
    const div_classes = `${classes.div_style} container`
    return (
        <div>
            <Jumbotron className={classes.jumbotron_style}>
                <div className={div_classes}>
                    <Typography variant="title" color="inherit" className={classes.content_style}>
                        {content}
                    </Typography>
                </div>
            </Jumbotron>
        </div>
    )

}

export default withStyles(styles)(CustomJumbotron)