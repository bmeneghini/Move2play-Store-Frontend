import React from 'react';
import FilterList from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
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

    handleGenderChange = event => {
        this.setState({ gameGender: event.target.value });
    };

    render() {
        return (
            <div className={'games-filters-root'}>
                <GameNameInput
                    shrink={true}
                    displaySearch={false}
                    label={'Nome do jogo'}
                    enableFullWidth={true}
                    gameName={this.state.gameName}
                    handleGameNameChange={this.handleGameNameChange}
                />
                <GamePriceInput
                    enableFullWidth={true}
                    gamePrice={this.state.gamePrice}
                    handleGamePriceChange={this.handleGamePriceChange}
                />
                <GameGenderInput
                    handleGenderChange={this.handleGenderChange}
                    gameGender={this.state.gameGender}
                />
                <Button className={'filter-button'} type='submit' variant="contained" color="secondary">
                    <FilterList className={'filter-icon'}/>
                    Filtrar
                </Button>
            </div >
        )
    }
}