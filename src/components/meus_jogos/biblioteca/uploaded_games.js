import React, { Component } from 'react';
import UploadedGameContainer from './uploaded_game_container';
import ExpansionPanel from '@material-ui/core/ExpansionPanel';
import ExpansionPanelSummary from '@material-ui/core/ExpansionPanelSummary';
import ExpansionPanelDetails from '@material-ui/core/ExpansionPanelDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

export default class UploadedGames extends Component {
    state = {
        expanded: false
    }
    toggleExpanded = () => {
        this.setState({ expanded: !this.state.expanded })
    }
    buildUploadedGamesContent = () => {
        return this.props.uploadedGames.map((game, index) => {
            return <UploadedGameContainer
                key={index}
                name={game.name}
                gameThumbnail={game.image[0].path}
                releaseDate={game.releaseDate}
            />
        })
    }
    render() {
        const renderGames = this.buildUploadedGamesContent();
        return (
            <div className={'owned-games-container'}>
                <ExpansionPanel className={'expansion-panel'} expanded={this.state.expanded}>
                    <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />} onClick={this.toggleExpanded}>
                        <Typography className={'owned-games-title'}>Jogos Enviados</Typography>
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
