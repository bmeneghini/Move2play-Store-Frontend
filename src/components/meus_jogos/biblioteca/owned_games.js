import React, { Component } from 'react';
import UserGameContainer from './user_game_container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class OwnedGames extends Component {
    state = {
        expanded: true
    }
    toggleExpanded = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    buildGamesContent = () => {
        return this.props.ownedGames.map((game, index) => {
            return <UserGameContainer
                key={index}
                id={game.id}
                name={game.name}
                comments={game.comment}
                rating={game.rating}
                user={this.props.user}
                serverPath={game.serverPath}
            />
        })
    }
    render() {
        const renderGames = this.props.ownedGames.length > 0
            ? this.buildGamesContent()
            : <div className={'zero-owned-games'}><span className={'span'}>Você não possui nenhum jogo. Que tal tentar os nossos jogos gratuitos? :D</span></div>;
        return (
            <div className={'owned-games-container'}>
                <ExpansionPanel className={'expansion-panel'} expanded={this.state.expanded}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={this.toggleExpanded}>
                        <Typography className={'owned-games-title'}>Jogos Adquiridos</Typography>
                    </ExpansionPanelSummary>
                    <hr className={'horizontal-line'} />
                    <ExpansionPanelDetails>
                        <div className={'games-root'}>
                            {renderGames}
                        </div>
                    </ExpansionPanelDetails>
                </ExpansionPanel>
            </div>
        )
    }
}
