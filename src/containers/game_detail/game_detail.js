import React, { Component } from 'react';
import ButtonAppBar from '../../components/app_bar/button_app_bar';
import MenuAppBar from '../../components/app_bar/menu_app_bar';
import { connect } from "react-redux";
import SimpleBreadcrumb from './../../components/shared/simple_breadcrumb';
import GameInfoContainer from './../../components/game_detail/game_info_container';
import BuyContainer from './../../components/game_detail/buy_container';
import GameEvaluation from './../../components/game_detail/game_evaluation';
import UsersEvaluation from './../../components/game_detail/users_evaluation';
import './../../styles/game_detail.css';

class GameDetail extends Component {

    constructor(props) {
        super(props)
        this.isFetchingProfile = false;
    }

    render() {
        const gameId = this.props.location.state.gameId;
        const { auth: { isAuthenticated } } = this.props;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <SimpleBreadcrumb />
                <h1 className={'game-detail-title'}>God of War - Viking Edition</h1>
                <GameInfoContainer />
                <BuyContainer />
                <GameEvaluation />
                <UsersEvaluation />>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

export default connect(mapStateToProps)(GameDetail);