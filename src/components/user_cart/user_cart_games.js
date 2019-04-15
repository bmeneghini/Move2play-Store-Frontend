import React, { Component } from 'react';
import CartGame from './cart_game';

const games = [
    { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 1 },
    { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: -1 },
    { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: -1 }
]

export default class UserCartGames extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: games
        }
    }

    componenteDidMount() {
        // TODO: Buscar por jogos baseado no ID
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cart !== this.props.cart) {
            // chamar função para pegar nova lista
            this.setState({ games })
        }
    }

    checkSum = () => {
        let sum = 0.00;
        this.state.games.forEach(game => {
            sum = parseFloat(sum) + parseFloat(game.gamePrice);
        });
        return sum.toFixed(2);
    }

    removeGameFromCart = (gameId) => {
        this.props.removeGameFromCart(gameId);
    }

    renderCartGames = (games) => {
        return games.map((game, index) => {
            return <CartGame
                key={index}
                game={game}
                removeGameFromCart={this.removeGameFromCart}
            />
        });
    }

    render() {
        const { games } = this.state;
        const content = games.length > 0 ? this.renderCartGames(games) : '';
        return (
            <div className={'user-cart-container'}>
                {content}
                <div className={'total-sum-container'}>
                    <div  className={'total-sum'}>{`Soma total: R$ ${this.checkSum()}`}</div>
                </div>
            </div>
        )
    }
}
