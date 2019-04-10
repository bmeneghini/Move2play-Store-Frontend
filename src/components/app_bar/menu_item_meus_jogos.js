import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import VideogameAsset from '@material-ui/icons/VideogameAsset';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Send from '@material-ui/icons/Send';
import LibraryBooks from '@material-ui/icons/LibraryBooks';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import history from '../config/history';
import './../../styles/app_bar.css';

const left = 100;

const styles = {
    videogameAsset: {
        width: 30,
        height: 30,
        color: "white",
        marginRight: 5,
        cursor: 'pointer',
        position: 'absolute',
        left: left + 10,
        top: -23
    },
    label: {
        height: 16,
        color: "white",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
        position: 'absolute',
        left: left + 50,
        width: '85px',
        cursor: 'pointer',
        top: -18
    },
    arrow: {
        color: "white",
        width: 24,
        height: 24,
        position: 'absolute',
        cursor: 'pointer',
        left: left + 135,
        top: -19
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

    handleEnviarJogoClick = () => {
        history.push("/meus-jogos/enviar-jogo");
        this.setState({ anchorEl: null });
    }

    handleBibliotecaClick = () => {
        history.push("/meus-jogos/biblioteca");
        this.setState({ anchorEl: null });
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={"menu-meus-jogos-root"}>
                <VideogameAsset className={classes.videogameAsset} onClick={this.handleMenu} />
                <label
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    className={classes.label}
                    style={{ cursor: 'pointer' }}
                >
                    Meus Jogos
                 </label>
                <KeyboardArrowDown className={classes.arrow} onClick={this.handleMenu}/>
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
                        onClick={this.handleBibliotecaClick}>
                        <LibraryBooks className={classes.library} />
                        Biblioteca
                    </MenuItem>
                    <MenuItem
                        onClick={this.handleEnviarJogoClick}>
                        <Send className={classes.send} />
                        Enviar Jogo
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(MenuItemMeusJogos);