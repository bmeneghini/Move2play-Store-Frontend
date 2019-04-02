import React, { Component } from 'react';
import ButtonAppBar from '../../components/app_bar/button_app_bar';
import MenuAppBar from '../../components/app_bar/menu_app_bar';
import { connect } from "react-redux";
import { setUserCredentials } from '../../actions';
import history from '../../components/config/history';
import EnviarJogoForm from "../../components/meus_jogos/enviar_jogo/enviar_jogo_form";
import "./../../styles/meus_jogos.css";
import _ from 'lodash';

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
        const { auth: { isAuthenticated } } = this.props;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <h1 className={'enviar-jogo-title'}>God of War - Viking Edition</h1>
                <EnviarJogoForm user={this.props.user} />
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