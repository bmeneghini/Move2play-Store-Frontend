import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Slider from '@material-ui/lab/Slider';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';

const styles = {
  root: {
    width: '-webkit-fill-available',
    margin: '0 50px',
    position: 'relative',
    marginTop: '35px'
  },
  slider: {
    padding: '22px 0px',
  },
};

class StepSlider extends React.Component {
  state = {
    value: this.props.sentiment,
  };

  handleChange = (event, value) => {
    this.setState({ value });
    if (this.props.setEvaluationState) {
      this.props.setEvaluationState(value);
    }
  };

  render() {
    const { classes, disabled } = this.props;
    const { value } = this.state;

    return (
      <div className={classes.root}>
        <SentimentVeryDissatisfied className={'sad-smile'} />
        <SentimentSatisfied className={'ok-smile'} />
        <SentimentVerySatisfied className={'happy-smile'} />
        <Slider
          disabled={disabled}
          classes={{ container: classes.slider }}
          value={value}
          min={0}
          max={2}
          step={1}
          onChange={this.handleChange}
        />
      </div>
    );
  }
}

StepSlider.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(StepSlider);