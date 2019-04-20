import React, { Component } from 'react';
import MenuAppBar from '../../components/app_bar/menu_app_bar';
import CarrinhoBreadcrumb from './../../components/user_cart/carrinho_breadcrumb';
import PaymentStepper from './../../components/user_cart/payment_stepper';
import UserCartGames from './../../components/user_cart/user_cart_games';
import history from './../../components/config/history';
import AlertDialog from './../../components/shared/alert_dialog';
import CustomSnackbar from './../../components/shared/custom_snackbar';
import Payment from '@material-ui/icons/Payment';
import ClearAll from '@material-ui/icons/ClearAll';
import Button from '@material-ui/core/Button';
import { removeGameFromCart, removeAllGamesFromCart, postCheckout } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import './../../styles/user_cart.css';

class UserCart extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameId: '',
            variant: 'success',
            content: 'Ítem removido do carrinho com sucesso!',
            duration: 4000,
            alertTitle: '',
            alertContent: '',
            alertConfirmationHandler: this.handleRemoval,
            alertConfirmationLabel: 'Remover'
        }
    }

    componentWillMount() {
        const { getAccessToken } = this.props.auth;
        const token = getAccessToken();
        if (!token) history.push("/");
    }

    removeGameFromCart = (gameId) => {
        this.setState({
            gameId
            , content: 'Ítem removido do carrinho com sucesso!'
            , variant: 'success'
            , alertTitle: 'Remover ítem do carrinho'
            , alertContent: 'Tem certeza que deseja remover o ítem do carrinho?'
            , alertConfirmationHandler: this.removeGame
        }, () => this.openDialog());
    }

    removeGame = () => {
        this.props.removeGameFromCart(this.state.gameId);
        this.closeDialog();
        this.showSnackbar();
    }

    handleRemoveAllClick = () => {
        if (this.props.cart.length > 0) {
            this.setState({
                content: 'Ítens removidos do carrinho com sucesso!'
                , variant: 'success'
                , alertTitle: 'Remover ítens do carrinho'
                , alertContent: 'Tem certeza que deseja remover todos os ítens do carrinho?'
                , alertConfirmationHandler: this.removeAllGames
            }, () => this.openDialog());
        }
        else {
            this.setState({
                content: 'Seu carrinho já está vazio!',
                variant: 'warning'
            }, () => this.showSnackbar());
        }
    }

    removeAllGames = () => {
        this.props.removeAllGamesFromCart();
        this.closeDialog();
        this.showSnackbar();
    }

    handlePayment = () => {
        this.setStep(2);
        this.setState({
            alertTitle: 'Alterta de redirecionamento'
            , alertContent: 'Você será redirecionado para a página de pagamento. Deseja continuar?'
            , alertConfirmationLabel: 'Sim'
            , alertConfirmationHandler: this.sendCheckoutRequest
        }, () => this.openDialog());
    }

    sendCheckoutRequest = () => {
        let cartGames = this.getGamesInfo();
        let transactionDto = {
            userId: this.props.user.sub,
            itens: cartGames.map(game => ({
                gameId: game.id,
                itemDescription: game.name,
                itemAmount: game.price,
                itemQuantity: 1
            }))
        }
        this.props.postCheckout(transactionDto, this.redirectToPayment);
    }

    redirectToPayment = (response) => {
        window.open(response);
    }

    render() {
        return (
            <div>
                <MenuAppBar auth={this.props.auth} />
                <CarrinhoBreadcrumb />
                <h1 className={'user-cart-title'}>Meu carrinho de compras</h1>
                <PaymentStepper 
                    setStep={e => this.setStep = e}
                />
                <UserCartGames
                    cart={this.props.cart}
                    removeGameFromCart={this.removeGameFromCart}
                    getGamesInfo={e => this.getGamesInfo = e}
                />
                <div id={'cart-footer'}>
                    <Button variant="contained" color="secondary" onClick={this.handlePayment}>
                        <Payment style={{
                            width: 25,
                            height: 25,
                            color: "white",
                            marginRight: 10,
                        }} />
                        Proceder para o pagamento
                    </Button>
                    <Button variant="contained" color="primary" onClick={this.handleRemoveAllClick}>
                        <ClearAll style={{
                            width: 25,
                            height: 25,
                            color: "white",
                            marginRight: 10,
                        }} />
                        ESVAZIAR CARRINHO
                    </Button>
                </div>
                <AlertDialog
                    openDialog={e => this.openDialog = e}
                    closeDialog={e => this.closeDialog = e}
                    title={this.state.alertTitle}
                    content={this.state.alertContent}
                    confirmAction={this.state.alertConfirmationHandler}
                    confirmLabel={this.state.alertConfirmationLabel}
                />
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
        user: state.user,
        cart: state.cart
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ removeGameFromCart, removeAllGamesFromCart, postCheckout }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(UserCart);