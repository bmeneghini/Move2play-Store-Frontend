import React from 'react';
import GameNameInput from './../shared/game_name_input';
import GamePriceInput from './../shared/game_price_input';
import GameGenderInput from './../shared/game_gender_input';
import "./../../styles/games_list_filters.css";

export default class GamesFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: '',
            gamePrice: '',
            gameGender: ''
        }
    }

    handleGameNameChange = (event) => {
        this.setState({ gameName: event.target.value });
    }

    handleGamePriceChange = (event) => {
        this.setState({ gamePrice: event.target.value });
    }

    handleGenderChange = name => event => {
        this.setState({ [name]: event.target.value });
    };

    render() {
        return (
            <div className={'games-filters-root'}>
                <GameNameInput
                    handleGameNameChange={this.handleGameNameChange}
                    gameName={this.state.gameName}
                    displaySearch={false}
                    shrink={true}
                />
                <GamePriceInput
                    handleGamePriceChange={this.handleGamePriceChange}
                    gamePrice={this.state.gamePrice} />
                <GameGenderInput
                    handleGenderChange={this.handleGenderChange}
                    gameGender={this.state.gameGender} />
            </div >
        )
    }
}