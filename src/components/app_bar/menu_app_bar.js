import React, { Component } from 'react';
import Logo from './logo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GameNameInput from './../shared/game_name_input';
import MenuItemMeusJogos from './menu_item_meus_jogos';
import MenuItemUsuario from './menu_item_usuario';
import MenuItemCarrinho from './menu_item_carrinho';
import './../../styles/app_bar.css';
import './../../styles/menu_app_bar.css';

class MenuAppBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: ''
        }
    }

    handleGameNameChange = (event) => {
        this.setState({ gameName: event.target.value });
    }

    render() {
        const { auth } = this.props;
        return (
            <AppBar position="static" className={"divContainer"}>
                <div style={{ height: 70 }} />
                <Toolbar className={'menu-app-toolbar'}>
                    <Logo />
                    <GameNameInput
                        shrink={false}
                        label={''}
                        placeholder={'Procure um jogo'}
                        displaySearch={true}
                        enableFullWidth={true}
                        gameName={this.state.gameName}
                        handleGameNameChange={this.handleGameNameChange}
                    />
                    <div className={'menu-app-bar-menu'}>
                        <MenuItemCarrinho />
                        <MenuItemMeusJogos />
                        <MenuItemUsuario auth={auth} />
                    </div>
                </Toolbar>
            </AppBar>
        );
    }
}

export default MenuAppBar