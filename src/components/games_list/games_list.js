import React, { Component } from 'react';
import MenuAppBar from './../app_bar/menu_app_bar';
import ButtonAppBar from './../app_bar/button_app_bar';
import GamesTable from './games_table';
import { connect } from "react-redux";
import { getGamesList } from './../../actions/index';
import "./../../styles/games_list.css";

class GamesList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            gamesList: []
        }
    }

    componentDidMount() {
        this.props.getGamesList(this.getGamesListSuccess, this.getGamesListError);
    }

    getGamesListSuccess = (result) => {
        console.log(result)
    }

    getGamesListError = (error) => {
        console.log(error)
    }

    render() {
        const { auth: { isAuthenticated } } = this.props;
        return (
            <div>
                {isAuthenticated() ? <MenuAppBar auth={this.props.auth} /> : <ButtonAppBar auth={this.props.auth} />}
                <GamesTable />
            </div>
        )
    }
}

export default connect(null, { getGamesList })(GamesList);