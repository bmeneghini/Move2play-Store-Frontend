import React, { Component } from 'react';
import ButtonAppBar from './app_bar/button_app_bar';
import MenuAppBar from './app_bar/menu_app_bar';
import PropTypes from 'prop-types';
import MobileStepper from '@material-ui/core/MobileStepper';
import Button from '@material-ui/core/Button';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import SwipeableViews from 'react-swipeable-views';
import history from './config/history';
import _ from 'lodash';
import { connect } from "react-redux";
import { autoPlay } from 'react-swipeable-views-utils';
import { bindActionCreators } from 'redux';
import { withStyles } from '@material-ui/core/styles';
import { setUserCredentials, postUserInformation, getSpotlightGames } from './../actions'

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const styles = theme => ({
  root: {
    margin: '40px 30vmax',
    flexGrow: 1,
    borderRadius: `3px`
  },
  nextButton: {
    marginTop: -275,
    marginRight: -85,
    minWidth: 48,
    minHeight: 48
  },
  backButton: {
    marginTop: -275,
    marginLeft: -85,
    minWidth: 48,
    minHeight: 48
  },
  mobileStepper: {
    backgroundColor: '#12181f',
  },
  dotActive: {
    backgroundColor: '#f50057'
  },
  img: {
    height: 255,
    display: 'block',
    overflow: 'hidden',
    width: '100%',
    cursor: 'pointer'
  },
});

class Home extends Component {
  constructor(props) {
    super(props)
    this.isFetchingProfile = false;
    this.hasSynchronized = false;
    this.state = {
      activeStep: 0,
      spotlights: []
    };
  }

  componentWillMount() {
    this.props.getSpotlightGames((result) => {
      this.setState({ spotlights: result })
    })
  }

  componentDidUpdate() {
    const { getProfile, getAccessToken } = this.props.auth;
    const token = getAccessToken();
    if (!this.isFetchingProfile && token) {
      this.isFetchingProfile = true;
      getProfile((err, profile) => {
        if (!_.isEmpty(profile)) {
          this.props.setUserCredentials(profile);
        }
      });
    }
  }

  buildUserDto = (profile) => {
    let userDto = {
      "id": profile.sub,
      "name": profile.name,
      "email": profile.email
    }
    return userDto;
  }

  synchroniseUserInformation = () => {
    const { getProfile } = this.props.auth;
    getProfile((err, profile) => {
      if (!_.isEmpty(profile)) {
        let user = this.buildUserDto(profile);
        this.props.postUserInformation(user);
      }
    });
  }

  handleNext = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep + 1,
    }));
  };

  handleBack = () => {
    this.setState(prevState => ({
      activeStep: prevState.activeStep - 1,
    }));
  };

  handleStepChange = activeStep => {
    this.setState({ activeStep });
  };

  redirectToGameDetail = (game) => {
    history.push({
      pathname: '/jogos/detalhes',
      state: {
        gameId: game.id,
        gameName: game.name,
        gamePrice: game.price.toFixed(2),
        gameThumbnail: game.image[0].path,
        gameGenre: game.genre,
        evaluation: game.rating,
        comments: game.comment,
        developerName: game.developerName,
        video: game.video[0].path,
        releaseDate: game.releaseDate,
        description: game.description
      }
    });
  }

  render() {
    const { isAuthenticated } = this.props.auth;
    const { classes, theme } = this.props;
    const { activeStep } = this.state;
    const maxSteps = this.state.spotlights.length;
    let alreadyAuthenticated = isAuthenticated();

    if (alreadyAuthenticated && !this.hasSynchronized) {
      this.hasSynchronized = true;
      this.synchroniseUserInformation();
    }
    return (
      <div>
        {alreadyAuthenticated ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
        <h1 className={'home-title'}>Destaques e Recomendados</h1 >
        <div className={classes.root}>
          <AutoPlaySwipeableViews
            axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={activeStep}
            onChangeIndex={this.handleStepChange}
            enableMouseEvents
          >
            {this.state.spotlights.map((game, index) => {
              var splitedPath = game.image[0].path.split('\\');
              const imageSource = `${process.env.REACT_APP_API_ROOT_URL}/Files/Games/${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}`;
              return (
                <div key={index}>
                  {Math.abs(activeStep - index) <= 2 ? (<img className={classes.img} src={imageSource} alt={game.name} onClick={() => this.redirectToGameDetail(game)} />) : null}
                </div>
              )
            })}
          </AutoPlaySwipeableViews>
          <MobileStepper
            variant="dots"
            steps={maxSteps}
            position="static"
            activeStep={activeStep}
            classes={{
              root: classes.mobileStepper,
              dotActive: classes.dotActive,
            }}
            nextButton={
              <Button classes={{ root: classes.nextButton }} variant="contained" color={'secondary'} size="small" onClick={this.handleNext} disabled={activeStep === maxSteps - 1}>
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
              </Button>
            }
            backButton={
              <Button classes={{ root: classes.backButton }} variant="contained" color={'secondary'} size="small" onClick={this.handleBack} disabled={activeStep === 0}>
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
              </Button>
            }
          />
        </div>
      </div>
    );
  }
}

Home.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ setUserCredentials, postUserInformation, getSpotlightGames }, dispatch)
}


export default withStyles(styles, { withTheme: true })(connect(null, mapDispatchToProps)(Home));