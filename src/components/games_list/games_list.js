import React, { Component } from 'react';
import GamesFilters from './games_filters';
import GameContainer from './game_container';
import Button from '@material-ui/core/Button';
import MenuAppBar from './../app_bar/menu_app_bar';
import ButtonAppBar from './../app_bar/button_app_bar';
import CustomSnackbar from './../shared/custom_snackbar';
import GamesListBreadcrumb from './games_list_breadcrumb';
import { addGameToCart, getGamesList } from './../../actions/index';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import _ from 'lodash';
import "./../../styles/games_list.css";

const MAX_NUMBER_OF_GAMES = 20;

class GamesList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            variant: 'success',
            content: '',
            duration: 4000,
            gamesList: [],
            showLoader: false,
            maxNumber: MAX_NUMBER_OF_GAMES - 1
        }
    }

    componentDidMount() {
        this.setState({ showLoader: true });
        this.props.getGamesList(this.getGamesListSuccess, this.handleError);
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
            if (index <= this.state.maxNumber) {
                let price = game.price.toFixed(2);
                let image = game.image[0] !== null && game.image[0] !== undefined ? game.image[0].path : null;
                let video = game.video[0] !== null && game.video[0] !== undefined ? game.video[0].path : null;
                return <GameContainer
                    key={index}
                    gameId={game.id}
                    gameName={game.name}
                    gamePrice={price}
                    gameThumbnail={image}
                    gameGenre={game.genre}
                    evaluation={game.rating}
                    comments={game.comment}
                    developerName={game.developerName}
                    video={video}
                    releaseDate={game.releaseDate}
                    description={game.description}
                    addGameToCart={this.addGameToCart}
                    cart={this.props.cart}
                />
            }
        })
    }

    getGamesListSuccess = (gamesList) => {
        this.setState({ showloader: false, gamesList })
    }

    setGamesListState = (gamesList) => {
        this.setState({ gamesList });
    }

    handleError = (error) => {
        if (!_.isUndefined(error) && !_.isNull(error) && error.toString() === 'Error: Network Error')
            this.setState({ showLoader: false, content: 'Network Error', variant: 'error' }, this.showSnackbar());
        if (!_.isUndefined(error) && !_.isNull(error) && !_.isUndefined(error.response) && !_.isNull(error.response) && !_.isUndefined(error.response.data) && !_.isNull(error.response.data)) {
            this.setState({ showLoader: false, content: error.response.data, variant: 'error' }, this.showSnackbar());
        }
    }

    handleVerMais = () => {
        if (this.state.gamesList.length - 1 <= this.state.maxNumber) {
            this.setState({ content: 'Não existem novos jogos a serem exibidos!', variant: 'warning' }, this.showSnackbar());
        }
        else {
            this.setState({ maxNumber: this.state.maxNumber + MAX_NUMBER_OF_GAMES });
        }
    }

    render() {
        const { auth: { isAuthenticated } } = this.props;

        let gameName = this.props.location.state ? this.props.location.state.gameName : '';
        let gamesContainers = this.buildGamesContainer();
        return (
            <div className={'games-list-root'}>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <GamesListBreadcrumb />
                <h1 className={'games-list-title'}>Catálogo de Jogos</h1 >
                <GamesFilters
                    gameName={gameName}
                    setGamesListState={this.setGamesListState}
                />
                <div className={'games-list-containers'}>{gamesContainers}</div>
                <div className={'ver-mais-root'}>
                    <Button onClick={this.handleVerMais} className={'ver-mais-button'} variant="contained" color="primary">
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

function mapStateToProps(state) {
    return {
        cart: state.cart
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ addGameToCart, getGamesList }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(GamesList);