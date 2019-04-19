import React, { Component } from 'react';

export default class UploadedGameContainer extends Component {
    render() {
        const rd = new Date(this.props.releaseDate);
        const parsedDate = `${rd.getDay().toString().padStart(2, "0")}/${rd.getMonth().toString().padStart(2, "0")}/${rd.getFullYear()}`;
        return (
            <div className={'game-container'}>
                <img className={'game-thumbnail'} src={'/images/GOW-OG-image.jpg'} alt='game-thumbnail' />
                <div className={'game-name-label'}>Nome do jogo:</div>
                <div className={'uploaded-game-name'}>{this.props.name}</div>
                <div className={'game-release-date-label'}>Data de envio:</div>
                <div className={'game-release-date'}>{parsedDate}</div>
            </div>
        )
    }
}