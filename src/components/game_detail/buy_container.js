import React, { Component } from 'react';
import CustomSnackbar from './../shared/custom_snackbar';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';
import { addGameToCart } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class BuyContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: 'success',
            content: '',
            duration: 4000,
        }
    }

    verifyIfGameIsAlreadyInCart = (gameId) => {
        if (this.props.cart.includes(gameId)) {
            this.setState({ variant: 'error', content: 'Este ítem já está adicionado ao seu carrinho!' }, () => this.showSnackbar());
        }
        else {
            this.props.addGameToCart(gameId);
            this.setState({ variant: 'success', content: 'Ítem adicionado ao carrinho com sucesso!' }, () => this.showSnackbar())
        }
    }

    handleClick = (gameId) => {
        if (this.props.auth.isAuthenticated()) {
            this.verifyIfGameIsAlreadyInCart(gameId);
        }
        else {
            this.setState({ variant: 'error', content: 'Faça o login para adicionar um ítem ao seu carrinho!' }, () => this.showSnackbar());
        }
    }

    render() {
        const { gameId, gameName, gamePrice } = this.props;
        return (
            <div className={'buy-game-container'}>
                <h2 className={'buy-game-title'}>Comprar {gameName}</h2>
                <div className={'buy-game-price'}>Preço: R${gamePrice}</div>
                <div className={'buy-game-add-to-cart'} onClick={() => this.handleClick(gameId)}>
                    <AddShoppingCart color={'white'} />
                    Adicionar ao carrinho
                </div>
                <CustomSnackbar
                    setClick={e => this.showSnackbar = e}
                    duration={this.state.duration}
                    variant={this.state.variant}
                    content={this.state.content}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addGameToCart }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(BuyContainer);