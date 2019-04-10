import React, { Component } from 'react';
import GamesFilters from './games_filters';
import GameContainer from './game_container';
import Button from '@material-ui/core/Button';
import MenuAppBar from './../app_bar/menu_app_bar';
import ButtonAppBar from './../app_bar/button_app_bar';
import CustomSnackbar from './../shared/custom_snackbar';
import { addGameToCart, getGamesList } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import "./../../styles/games_list.css";

class GamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: 'success',
            content: '',
            duration: 4000,
            gamesList: [
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 1 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: -1 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: -1 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 0 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 0 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 1 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 0 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 0 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: -1 },
                { gameId: 1, gameName: 'God of War - Viking Edition', gamePrice: '19.20', gameThumbnail: 'images/GOW-OG-image.jpg', evaluation: 0 }
            ]
        }
    }

    componentDidMount() {
        // this.props.getGamesList(this.getGamesListSuccess, this.getGamesListError);
    }

    verifyIfGameIsAlreadyInCart = (gameId) => {
        if (this.props.cart.includes(gameId)) {
            this.setState({ variant: 'error', content: 'Este ítem já está adicionado ao seu carrinho!' }, () => this.showSnackbar());
        }
        else {
            this.props.addGameToCart(gameId);
            this.setState({ variant: 'success', content: 'Ítem adicionado ao carrinho com sucesso!' }, () => this.showSnackbar())
        }
    }

    addGameToCart = (gameId) => {
        if (this.props.auth.isAuthenticated()) {
            this.verifyIfGameIsAlreadyInCart(gameId);
        }
        else {
            this.setState({ variant: 'error', content: 'Faça o login para adicionar um ítem ao seu carrinho!' }, () => this.showSnackbar());
        }
    }

    buildGamesContainer = () => {
        return this.state.gamesList.map((game, index) => {
            return <GameContainer
                key={index}
                gameId={game.gameId}
                gameName={game.gameName}
                gamePrice={game.gamePrice}
                gameThumbnail={game.gameThumbnail}
                evaluation={game.evaluation}
                addGameToCart={this.addGameToCart}
            />
        })
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
                    <CustomSnackbar
                        setClick={e => this.showSnackbar = e}
                        duration={this.state.duration}
                        variant={this.state.variant}
                        content={this.state.content}
                    />
                </div>
            )
        }
    }
}

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addGameToCart, getGamesList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);