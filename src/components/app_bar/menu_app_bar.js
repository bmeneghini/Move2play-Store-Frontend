import React, { Component } from 'react';
import Logo from './logo';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import GameNameInput from './../shared/game_name_input';
import MenuItemMeusJogos from './menu_item_meus_jogos';
import MenuItemUsuario from './menu_item_usuario';
import MenuItemCarrinho from './menu_item_carrinho';
import './../../styles/app_bar.css';

class MenuAppBar extends Component {
    render() {
        const { auth } = this.props;
        return (
            <AppBar position="static" className={"divContainer"}>
                <Toolbar className={'menu-app-toolbar'}>
                    <Logo />
                    <GameNameInput
                        shrink={false}
                        displaySearch={true}
                        enableFullWidth={true}
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