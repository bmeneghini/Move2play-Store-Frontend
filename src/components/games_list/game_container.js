import React, { Component } from 'react';
import history from './../config/history';

export default class GameContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            addToChart: false
        }
    }

    toggleAddToCartLabel = (bool) => {
        this.setState({ addToChart: bool })
    }

    redirectToGameDetail = (id) => {
        history.push({
            pathname: '/jogos/detalhes',
            state: { gameId: id }
        });
    }

    render() {
        const { gameId, gameName, gamePrice, gameThumbnail } = this.props;
        const gameLabelPrice = this.state.addToChart ? 'Incluir no carrinho' : `R$ ${gamePrice}`

        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={gameThumbnail} alt='game-thumbnail' onClick={() => this.redirectToGameDetail(gameId)} />
                <div className={'game-name'} onClick={() => this.redirectToGameDetail(gameId)}>{gameName}</div>
                <div className={'game-price-container'}>
                    <div
                        onMouseEnter={() => this.toggleAddToCartLabel(true)}
                        onMouseLeave={() => this.toggleAddToCartLabel(false)}
                        className={'game-price-title'}>
                        {gameLabelPrice}
                    </div>
                </div>
            </div>
        )
    }
}
