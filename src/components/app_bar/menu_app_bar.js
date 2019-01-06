import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from './logo'
import SearchBar from './search_bar'
import MenuItemMeusJogos from './menu_item_meus_jogos'
import MenuItemUsuario from './menu_item_usuario'
import MenuItemCarrinho from './menu_item_carrinho'

import './../../styles/app_bar.css'

class MenuAppBar extends Component {
    render() {
        const { auth } = this.props;
        return (
            <div>
                <AppBar position="static" className={"divContainer"}>
                    <Toolbar>
                        <Logo />
                        <SearchBar
                            className="app_search_bar"
                            fluid={true}
                            size={"small"}
                        />
                        <MenuItemCarrinho />
                        <MenuItemMeusJogos />
                        <MenuItemUsuario auth={auth}/>
                    </Toolbar>
                </AppBar>
            </div>
        );
    }
}

export default MenuAppBar