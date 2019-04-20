import React from 'react';
import FilterList from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import GameNameInput from './../shared/game_name_input';
import GamePriceInput from './../shared/game_price_input';
import GameGenderInput from './../shared/game_gender_input';
import { getGamesWithFilter } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import "./../../styles/games_list_filters.css";

class GamesFilters extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameName: this.props.gameName,
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

    buildFilterDto = () => {
        let name = this.state.gameName.length > 0 ? this.state.gameName : '';
        let price = this.state.gamePrice.length > 0 ? this.state.gamePrice : 0.00;
        let genre = this.state.gameGender > 0 ? this.state.gameGender : '';
        let filterDto = { name, price, genre }
        return filterDto;
    }

    handleFilterClick = () => {
        let filterDto = this.buildFilterDto();
        this.props.getGamesWithFilter(filterDto, this.successHandler)
    }

    successHandler = (result) => {
        this.props.setGamesListState(result);
    }

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
                    label={'Preço máximo'}
                    enableFullWidth={true}
                    gamePrice={this.state.gamePrice}
                    handleGamePriceChange={this.handleGamePriceChange}
                />
                <GameGenderInput
                    handleGenderChange={this.handleGenderChange}
                    gameGender={this.state.gameGender}
                />
                <Button onClick={this.handleFilterClick} className={'filter-button'} variant="contained" color="secondary">
                    <FilterList className={'filter-icon'} />
                    Filtrar
                </Button>
            </div >
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getGamesWithFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(GamesFilters);