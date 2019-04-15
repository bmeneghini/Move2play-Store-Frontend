import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';

const styles = () => ({
    root: {
        display: 'flex',
        flexDirection: 'row',
        margin: '20px 20vmax',
        backgroundColor: '#12181f',
        marginBottom: 0,
        padding: 5
    },
    step: {
        backgroundColor: '#c51162'
    },
    label: {
        color: 'white',
        backgroundColor: 'white'
    }
});

function getSteps() {
    return ['Confirmação', 'Pagamento', 'Finalização'];
}

class PaymentStepper extends React.Component {
    state = {
        activeStep: 0,
    };

    handleNext = () => {
        this.setState(state => ({
            activeStep: state.activeStep + 1,
        }));
    };

    handleBack = () => {
        this.setState(state => ({
            activeStep: state.activeStep - 1,
        }));
    };

    handleReset = () => {
        this.setState({
            activeStep: 0,
        });
    };

    render() {
        const { classes } = this.props;
        const steps = getSteps();
        const { activeStep } = this.state;
        return (
            <Stepper className={classes.root} alternativeLabel>
                {steps.map((label, index) => (
                    <Step key={label} className={activeStep === index ? 'activeStep' : 'step'}>
                        <StepLabel>{label}</StepLabel>
                    </Step>
                ))}
            </Stepper>
        );
    }
}

PaymentStepper.propTypes = {
    classes: PropTypes.object,
};

export default withStyles(styles)(PaymentStepper);