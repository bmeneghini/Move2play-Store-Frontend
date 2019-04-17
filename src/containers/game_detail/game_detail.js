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
    render() {
        const { auth: { isAuthenticated }, location: { state: { gameId, gameName, gamePrice, gameThumbnail, gameGenre, evaluation, comments, developerName, video, description, releaseDate } } } = this.props;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <SimpleBreadcrumb />
                <h1 className={'game-detail-title'}>{gameName}</h1>
                <GameInfoContainer
                    description={description}
                    gameThumbnail={gameThumbnail}
                    gameGenre={gameGenre}
                    developerName={developerName}
                    video={video}
                    releaseDate={releaseDate}
                />
                <BuyContainer
                    gameId={gameId}
                    gameName={gameName}
                    gamePrice={gamePrice}
                    auth={this.props.auth}
                />
                <GameEvaluation evaluation={evaluation} />
                <UsersEvaluation comments={comments} />
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