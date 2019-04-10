import React, { Component } from 'react';
import SentimentVeryDissatisfied from '@material-ui/icons/SentimentVeryDissatisfied';
import SentimentSatisfied from '@material-ui/icons/SentimentSatisfied';
import SentimentVerySatisfied from '@material-ui/icons/SentimentVerySatisfied';
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
        const { gameId, gameName, gamePrice, gameThumbnail, evaluation, addGameToCart } = this.props;
        console.log(evaluation)
        const gameLabelPrice = this.state.addToChart ? 'Incluir no carrinho' : `R$ ${gamePrice}`;
        const sentiment = evaluation === -1
            ? <SentimentVeryDissatisfied className={'sad-smile-gl'} />
            : evaluation === 0 ? <SentimentSatisfied className={'ok-smile-gl'} /> : <SentimentVerySatisfied className={'happy-smile-gl'} />;
        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={gameThumbnail} alt='game-thumbnail' onClick={() => this.redirectToGameDetail(gameId)} />
                <div className={'game-name'} onClick={() => this.redirectToGameDetail(gameId)}>{gameName}</div>
                <div className={'game-evaluation-gl-container'} onClick={() => this.redirectToGameDetail(gameId)}>
                    <div className={'game-evalaluation-gl-title'}>Avaliação do jogo: </div>
                    {sentiment}
                </div>
                <div className={'game-price-container'} onClick={() => addGameToCart(gameId)}>
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
