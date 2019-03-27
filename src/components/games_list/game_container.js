import React, { Component } from 'react'

export default class GameContainer extends Component {

    constructor(props) {
        super(props);
        this.state = {
            addToChart: false
        }
    }

    toggleAddToCartLabel = (bool) => {
        this.setState({ addToChart: bool })
    }

    render() {
        const { gameName, gamePrice, gameThumbnail } = this.props;
        const gameLabelPrice = this.state.addToChart ? 'Incluir no carrinho' : `R$ ${gamePrice}`

        return (
            <div className={'game-container'}>
                <img alt='game-thumbnail' className={'game-thumbnail'} src={gameThumbnail} />
                <div className={'game-name'}>{gameName}</div>
                <div className={'game-price-container'}>
                    <div
                        onMouseEnter={() => this.toggleAddToCartLabel(true)}
                        onMouseLeave={() => this.toggleAddToCartLabel(false)}
                        className={'game-price-title'}>
                        {gameLabelPrice}
                    </div>
                </div>
            </div>
        )
    }
}
