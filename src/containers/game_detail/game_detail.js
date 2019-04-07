import React, { Component } from 'react';
import ButtonAppBar from '../../components/app_bar/button_app_bar';
import MenuAppBar from '../../components/app_bar/menu_app_bar';
import { connect } from "react-redux";
import { setUserCredentials } from '../../actions';
import history from '../../components/config/history';
import _ from 'lodash';
import SimpleBreadcrumb from './../../components/shared/simple_breadcrumb';
import GameInfoContainer from './../../components/game_detail/game_info_container';
import BuyContainer from './../../components/game_detail/buy_container';
import './../../styles/game_detail.css';

class GameDetail extends Component {

    constructor(props) {
        super(props)
        this.isFetchingProfile = false;
    }

    componentWillUpdate() {
        const { getProfile, getAccessToken } = this.props.auth;
        const token = getAccessToken();
        this.fetchUserProfile(getProfile, token);
    }

    componentWillMount() {
        const { getProfile, getAccessToken } = this.props.auth;
        const token = getAccessToken();
        if (!token) history.push("/")
        this.fetchUserProfile(getProfile, token);
    }

    fetchUserProfile = (getProfile, token) => {
        if (!this.isFetchingProfile && token) {
            this.isFetchingProfile = true;
            getProfile((err, profile) => {
                if (!_.isEmpty(profile)) {
                    this.props.setUserCredentials(profile);
                }
            });
        }
    }

    render() {
        const gameId = this.props.location.state.gameId;
        console.log(gameId)
        const { auth: { isAuthenticated } } = this.props;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <SimpleBreadcrumb />
                <h1 className={'game-detail-title'}>God of War - Viking Edition</h1>
                <GameInfoContainer />
                <BuyContainer />>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps, { setUserCredentials })(GameDetail);