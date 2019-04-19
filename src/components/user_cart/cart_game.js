import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Delete from '@material-ui/icons/Delete';

export default class CartGame extends Component {

    removeGameFromCart = (id) => {
        this.props.removeGameFromCart(id);
    }

    render() {
        const { id, name, price, image } = this.props.game;
        var splitedPath = image[0].path.split('\\');
        const imageSource = `${process.env.REACT_APP_API_ROOT_URL}/Files/Games/${splitedPath[0]}/${splitedPath[1]}/${splitedPath[2]}`;
        return (
            <div className={'game-cart'}>
                <img className={'game-cart-thumbnail'} src={imageSource} alt="game thumbnail" />
                <div className={'vertical-line'}></div>
                <div className={'game-cart-name'}><div className={'game-cart-name-label'}><p>{name}</p></div></div>
                <div className={'vertical-line'}></div>
                <div className={'game-cart-price'}><div className={'game-cart-price-label'}><p>R$ {price.toFixed(2)}</p></div></div>
                <div className={'vertical-line'}></div>
                <div className={'button-container'}>
                    <Button onClick={() => this.removeGameFromCart(id)} className={'remove-button'} type='submit' variant="contained" color="primary">
                        <Delete className={'remove-icon'} />
                        Remover
                    </Button>
                </div>
            </div>
        )
    }
}
