import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Send from '@material-ui/icons/Send';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';

import './app_bar.css'

const styles = {
    label: {
        height: 16,
        color: "white",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
    },
    arrow: {
        color: "white",
        width: 24,
        height: 24,
    },
    videogameAsset: {
        width: 30,
        height: 30,
        color: "white",
        marginRight: 5,
    },
    alignRight: {
        position: "absolute",
        float: "right",
        right: 0,
    },
    send: {
        width: 25,
        height: 25,
        color: "black",
        marginRight: 10
    },
    library: {
        width: 25,
        height: 25,
        color: "black",
        marginRight: 10
    },
    
};

class MenuItemMeusJogos extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={"divContainerInterno"} style={{ /*position: "absolute", right: "9%"*/ }}>
                <div className={"divExterior"}>
                    <div className={"divInterior"}>
                        <div style={{ height: 50 }}>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <VideogameAsset className={classes.videogameAsset} onClick={this.handleMenu} />
                                    </div>
                                </div>
                            </div>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <label
                                            aria-owns={open ? 'menu-appbar' : null}
                                            aria-haspopup="true"
                                            onClick={this.handleMenu}
                                            className={classes.label}
                                        >
                                            Meus Jogos
                                        </label>
                                    </div>
                                </div>
                            </div>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <KeyboardArrowDown className={classes.arrow} onClick={this.handleMenu} style={{ height: 50 }} />
                                    </div>
                                </div>
                            </div>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorEl}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                open={open}
                                onClose={this.handleClose}
                            >
                                <MenuItem
                                    onClick={this.handleClose}>
                                    <LibraryBooks className={classes.library} />
                                    Biblioteca
                                            </MenuItem>
                                <MenuItem
                                    onClick={this.handleLogout}>
                                    <Send className={classes.send} />
                                    Enviar Jogo
                                            </MenuItem>
                            </Menu>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MenuItemMeusJogos);