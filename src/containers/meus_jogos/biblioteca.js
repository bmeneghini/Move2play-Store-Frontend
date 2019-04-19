import React, { Component } from 'react'
import ButtonAppBar from './../../components/app_bar/button_app_bar';
import MenuAppBar from './../../components/app_bar/menu_app_bar';
import BibliotecaBreadcrumb from "../../components/meus_jogos/biblioteca/biblioteca_breadcrumb";
import OwnedGames from "../../components/meus_jogos/biblioteca/owned_games";
import UploadedGames from './../../components/meus_jogos/biblioteca/uploaded_games';
import history from '../../components/config/history';
import _ from 'lodash';
import { connect } from "react-redux";
import { setUserCredentials, getUserGames, getUserUploadedGames } from './../../actions';
import { bindActionCreators } from 'redux';
import './../../styles/biblioteca.css';

class Biblioteca extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ownedGames: [],
            uploadedGames: []
        }
        this.isFetchingProfile = false;
    }

    componentDidMount() {
        const { getProfile, getAccessToken } = this.props.auth;
        const token = getAccessToken();
        if (!token) history.push("/");
        this.fetchUserProfile(getProfile, token);
    }

    componentWillUpdate() {
        const { getProfile, getAccessToken } = this.props.auth;
        const token = getAccessToken();
        this.fetchUserProfile(getProfile, token);
    }

    componentDidUpdate(nextProps) {
        if (nextProps.user !== this.props.user) {
            if (_.isEmpty(nextProps.user) || nextProps.user === undefined) {
                this.props.getUserGames(this.props.user.sub, this.successGetUserGames);
                this.props.getUserUploadedGames(this.props.user.sub, this.successGetUserUploadedGames)
            }
            else {
                this.props.getUserGames(nextProps.user.sub, this.successGetUserGames);
                this.props.getUserUploadedGames(nextProps.user.sub, this.successGetUserUploadedGames)
            }
        }
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

    successGetUserGames = (result) => {
        this.setState({ ownedGames: result })
    }

    successGetUserUploadedGames = (result) => {
        this.setState({ uploadedGames: result })
    }

    render() {
        const { auth: { isAuthenticated } } = this.props;
        const uploadedGamesContainer = this.state.uploadedGames.length > 0 ?
            <UploadedGames
                uploadedGames={this.state.uploadedGames}
            /> : null;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <BibliotecaBreadcrumb />
                <h1 className={'enviar-jogo-title'}>Biblioteca de Jogos</h1>
                <OwnedGames
                    user={this.props.user}
                    ownedGames={this.state.ownedGames}
                />
                {uploadedGamesContainer}
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ setUserCredentials, getUserGames, getUserUploadedGames }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Biblioteca);