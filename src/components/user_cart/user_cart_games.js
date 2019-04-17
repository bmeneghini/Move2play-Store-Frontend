import React, { Component } from 'react';
import CartGame from './cart_game';
import { getGame } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";

class UserCartGames extends Component {

    constructor(props) {
        super(props);
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        this.sendGetRequest(this.props.cart);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.cart !== this.props.cart) {
            this.setState({ games: [] });
            this.sendGetRequest(nextProps.cart);
        }
    }

    sendGetRequest = (cart) => {
        cart.forEach((id) => {
            this.props.getGame(id, this.successHandler)
        });
    }

    successHandler = (result) => {
        let games = [...this.state.games];
        games.push(result);
        this.setState({ games });
    }

    checkSum = () => {
        let sum = 0.00;
        this.state.games.forEach(game => {
            sum = parseFloat(sum) + parseFloat(game.price);
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
        const content = games.length > 0
            ? this.renderCartGames(games)
            : <div className={'zero-itens'}>Não há nenhum ítem no seu carrinho :(</div>;
        const totalSum = games.length > 0
            ? <div className={'total-sum-container'}>
                <div className={'total-sum'}>{`Soma total: R$ ${this.checkSum()}`}</div>
            </div>
            : null;
        return (
            <div className={'user-cart-container'}>
                {content}
                {totalSum}
            </div>
        )
    }
}


function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getGame }, dispatch)
}

export default connect(null, mapDispatchToProps)(UserCartGames);