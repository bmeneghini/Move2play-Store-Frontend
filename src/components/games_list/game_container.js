import React, { Component } from 'react'

export default class GameContainer extends Component {
    render() {
        const { gameName, gamePrice, gameThumbnail } = this.props;
        return (
            <div className={'game-container'}>
                <img alt='game-thumbnail' className={'game-thumbnail'} src={gameThumbnail} />
                <div className={'game-name'}>{gameName}</div>
                <div className={'game-price-container'}>
                    <div className={'game-price-title'}>{`R$${gamePrice}`}</div>
                </div>
            </div>
        )
    }
}
