import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import PermIdentity from '@material-ui/icons/PermIdentity';
import KeyboardArrowDown from '@material-ui/icons/KeyboardArrowDown';
import Settings from '@material-ui/icons/SettingsOutlined';
import ExitToApp from '@material-ui/icons/ExitToApp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import history from '../config/history'
import './../../styles/app_bar.css'

const left = 250;

const styles = {
    userIcon: {
        width: 30,
        height: 30,
        color: "white",
        cursor: 'pointer',
        position: 'absolute',
        left: left + 10,
        top: -23
    },
    userLabel: {
        height: 16,
        color: "white",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
        cursor: 'pointer',
        position: 'absolute',
        left: left + 45,
        top: -18
    },
    userArrow: {
        color: "white",
        width: 24,
        height: 24,
        cursor: 'pointer',
        position: 'absolute',
        left: left + 100,
        top: -19
    },
    profileMenuIcon: {
        width: 25,
        height: 25,
        color: "black",
        marginRight: 10
    },
};

class MenuItemUsuario extends Component {
    state = {
        anchorEl: null,
    };

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    handleClose = () => {
        this.setState({ anchorEl: null });
    };

    handleProfileClick = (event) => {
        history.push("/user/profile")
    }

    handleLogout = (event) => {
        event.preventDefault();
        this.props.auth.logout();
        history.push("/")
    }

    render() {
        const { classes } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);

        return (
            <div className={"menu-item-usuario-root"}>
                <PermIdentity className={classes.userIcon} onClick={this.handleMenu} />
                <label
                    aria-owns={open ? 'menu-appbar' : null}
                    aria-haspopup="true"
                    onClick={this.handleMenu}
                    className={classes.userLabel}
                >
                    Usuário
                </label>
                <KeyboardArrowDown className={classes.userArrow} onClick={this.handleMenu} />
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
                        onClick={this.handleProfileClick}>
                        <Settings className={classes.profileMenuIcon} />
                        Perfil
                    </MenuItem>
                    <MenuItem
                        onClick={this.handleLogout}>
                        <ExitToApp className={classes.profileMenuIcon} />
                        Logout
                    </MenuItem>
                </Menu>
            </div>
        );
    }
}

export default withStyles(styles)(MenuItemUsuario);