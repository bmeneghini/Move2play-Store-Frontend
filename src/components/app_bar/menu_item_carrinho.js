import React, { Component } from 'react';
import ShoppingCart from '@material-ui/icons/ShoppingCart';
import Badge from '@material-ui/core/Badge';
import history from './../config/history';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

class MenuItemCarrinho extends Component {
    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClick = () => {
        history.push("/carrinho");
    }

    render() {
        let numberOfItens = (this.props.cart !== null && this.props.cart !== undefined)
                ? this.props.cart.length !== undefined 
                    ? this.props.cart.length 
                    : 0
                : 0;
        return (
            <div className={'menu-carrinho-root'} onClick={this.handleClick}>
                <Badge className={'carrinho-badge'} badgeContent={numberOfItens} color="secondary"></Badge>
                <ShoppingCart className={'menu-carrinho-icon'} onClick={this.handleMenu} />
                <label onClick={this.handleMenu} className={'menu-carrinho-label'}> Carrinho </label>
            </div>
        );
    }
}

MenuItemCarrinho.propTypes = {
    cart: PropTypes.array
};

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

export default connect(mapStateToProps)(MenuItemCarrinho);
