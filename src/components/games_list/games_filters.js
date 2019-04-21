import React from 'react';
import FilterList from '@material-ui/icons/FilterList';
import Button from '@material-ui/core/Button';
import GameNameInput from './../shared/game_name_input';
import GamePriceInput from './../shared/game_price_input';
import GameGenderInput from './../shared/game_gender_input';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
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
            gameGender: '',
            expanded: true
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

    toggleExpanded = () => {
        this.setState({ expanded: !this.state.expanded })
    }

    render() {
        return (
            <div className={'filter-games-container'}>
                <ExpansionPanel className={'expansion-panel'} expanded={this.state.expanded}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={this.toggleExpanded}>
                        <Typography className={'owned-games-title'}>Filtros</Typography>
                    </ExpansionPanelSummary>
                    <hr className={'horizontal-line'} />
                    <ExpansionPanelDetails>
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
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ getGamesWithFilter }, dispatch)
}

export default connect(null, mapDispatchToProps)(GamesFilters);