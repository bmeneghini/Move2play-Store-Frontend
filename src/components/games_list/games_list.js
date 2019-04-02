import React, { Component } from 'react';
import GamesFilters from './games_filters';
import GameContainer from './game_container';
import Button from '@material-ui/core/Button';
import MenuAppBar from './../app_bar/menu_app_bar';
import ButtonAppBar from './../app_bar/button_app_bar';
import { connect } from "react-redux";
import { getGamesList } from './../../actions/index';
import _ from 'lodash';
import "./../../styles/games_list.css";

class GamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            gamesList: [
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' },
                { gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg' }
            ]
        }
    }

    buildGamesContainer = () => {
        return this.state.gamesList.map((game, index) => {
            return <GameContainer
                key={index}
                gameName={game.gameName}
                gamePrice={game.gamePrice}
                gameThumbnail={game.gameThumbnail}
            />
        })
    }

    componentDidMount() {
        // this.props.getGamesList(this.getGamesListSuccess, this.getGamesListError);
    }

    getGamesListSuccess = (result) => {
        console.log(result)
    }

    getGamesListError = (error) => {
        console.log(error)
    }

    render() {
        const { auth: { isAuthenticated } } = this.props;
        if (_.isEmpty(this.state.gamesList)) {
            return null;
        }
        else {
            let gamesContainers = this.buildGamesContainer();
            return (
                <div className={'games-list-root'}>
                    {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                    <h1 className={'games-list-title'}>Catálogo de Jogos</h1 >
                    <GamesFilters />
                    <div className={'games-list-containers'}>{gamesContainers}</div>
                    <div className={'ver-mais-root'}>
                        <Button className={'ver-mais-button'} variant="contained" color="primary">
                            Ver mais
                        </Button>
                    </div>
                </div>
            )
        }
    }
}

export default connect(null, { getGamesList })(GamesList);