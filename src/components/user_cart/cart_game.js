import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';

export default class CartGame extends Component {

    removeGameFromCart = (gameId) => {
        this.props.removeGameFromCart(gameId);
    }

    render() {
        const { gameId, gameName, gamePrice, gameThumbnail } = this.props.game;
        return (
            <div className={'game-cart'}>
                <img className={'game-cart-thumbnail'} src={gameThumbnail} alt="game thumbnail" />
                <div className={'vertical-line'}></div>
                <div className={'game-cart-name'}><div className={'game-cart-name-label'}><p>{gameName}</p></div></div>
                <div className={'vertical-line'}></div>
                <div className={'game-cart-price'}><div className={'game-cart-price-label'}><p>R$ {gamePrice}</p></div></div>
                <div className={'vertical-line'}></div>
                <div className={'button-container'}>
                    <Button onClick={() => this.removeGameFromCart(gameId)} className={'remove-button'} type='submit' variant="contained" color="primary">
                        <Delete className={'remove-icon'} />
                        Remover
                    </Button>
                </div>
            </div>
        )
    }
}
