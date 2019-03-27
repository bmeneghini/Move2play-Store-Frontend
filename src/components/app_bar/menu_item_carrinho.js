import React, { Component } from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

export default class MenuItemCarrinho extends Component {

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        return (
            <div className={'menu-carrinho-root'}>
                <ShoppingCart className={'menu-carrinho-icon'} onClick={this.handleMenu} />
                <label onClick={this.handleMenu} className={'menu-carrinho-label'}> Carrinho </label>
            </div>
        );
    }
}