import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = {
    carrinho: {
        width: 30,
        height: 30,
        color: "white",
        cursor: "pointer"
    },
    label: {
        height: 16,
        color: "white",
        fontFamily: "Work Sans",
        fontSize: 14,
        fontWeight: 400,
    },
};

class MenuItemCarrinho extends Component {

    handleMenu = event => {
        this.setState({ anchorEl: event.currentTarget });
    };

    render() {
        const { classes } = this.props;
        return (
            <div className={"divContainerInterno"} style={{ /*position: "absolute", right: "19%"*/ marginRight: 15 }}>
                <div className={"divExterior"}>
                    <div className={"divInterior"}>
                        <div style={{ height: 50 }}>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <ShoppingCart className={classes.carrinho} onClick={this.handleMenu} style={{cursor: 'pointer'}}/>
                                    </div>
                                </div>
                            </div>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <label
                                            onClick={this.handleMenu}
                                            className={classes.label}
                                            style={{cursor: 'pointer'}}
                                        >
                                            Carrinho
                                        </label>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default withStyles(styles)(MenuItemCarrinho);