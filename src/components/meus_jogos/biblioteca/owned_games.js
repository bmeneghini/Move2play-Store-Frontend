import React, { Component } from 'react';
import UserGameContainer from './user_game_container';

export default class OwnedGames extends Component {
    buildGamesContent = () => {
        return this.props.ownedGames.map((game, index) => {
            return <UserGameContainer
                key={index}
                id={game.id}
                name={game.name}
                comments={game.comment}
                rating={game.rating}
                user={this.props.user}
            />
        })
    }
    render() {
        const renderGames = this.props.ownedGames.length > 0
            ? this.buildGamesContent()
            : <div className={'zero-owned-games'}><span className={'span'}>Você não possui nenhum jogo. Que tal tentar os nossos jogos gratuitos? :D</span></div>;
        return (
            <div className={'owned-games-container'}>
                <div className={'owned-games-title'}>Jogos Adquiridos</div>
                <hr className={'horizontal-line'} />
                <div className={'games-root'}>
                    {renderGames}
                </div>
            </div>
        )
    }
}
