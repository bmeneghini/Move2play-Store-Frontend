import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import ShoppingCart from '@material-ui/icons/ShoppingCart';

const styles = {
    carrinho: {
        width: 41,
        height: 41,
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
            <div className={"divContainerInterno"} style={{ position: "absolute", right: "19%" }}>
                <div className={"divExterior"}>
                    <div className={"divInterior"}>
                        <div style={{ height: 50 }}>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <ShoppingCart className={classes.carrinho} onClick={this.handleMenu} />
                                    </div>
                                </div>
                            </div>
                            <div className={"divContainerInterno"}>
                                <div className={"divExterior"}>
                                    <div className={"divInterior"}>
                                        <label
                                            onClick={this.handleMenu}
                                            className={classes.label}
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