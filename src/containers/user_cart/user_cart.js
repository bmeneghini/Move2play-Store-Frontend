import React, { Component } from 'react';
import MenuAppBar from '../../components/app_bar/menu_app_bar';
import CarrinhoBreadcrumb from './../../components/user_cart/carrinho_breadcrumb';
import PaymentStepper from './../../components/user_cart/payment_stepper';
import history from './../../components/config/history';
import { connect } from "react-redux";
import './../../styles/game_detail.css';

class UserCart extends Component {

    componentWillMount() {
        const { getAccessToken } = this.props.auth;
        const token = getAccessToken();
        if (!token) history.push("/");
    }

    render() {
        return (
            <div>
                <MenuAppBar auth={this.props.auth} />
                <CarrinhoBreadcrumb />
                <h1 className={'game-detail-title'}>Meu carrinho de compras</h1>
                <PaymentStepper />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps)(UserCart);