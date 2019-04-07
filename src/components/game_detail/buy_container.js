import React, { Component } from 'react';
import AddShoppingCart from '@material-ui/icons/AddShoppingCart';

export default class BuyContainer extends Component {
    render() {
        return (
            <div className={'buy-game-container'}>
                <h2 className={'buy-game-title'}>Comprar God of War</h2>
                <div className={'buy-game-price'}>Preço: R$99,00</div>
                <div className={'buy-game-add-to-cart'}>
                    <AddShoppingCart color={'white'}/>
                    Adicionar ao carrinho
                </div>
            </div>
        )
    }
}
