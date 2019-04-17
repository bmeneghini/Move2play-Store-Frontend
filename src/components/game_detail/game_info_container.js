import React, { Component } from 'react';

export default class GameInfoContainer extends Component {
  render() {
    const { gameThumbnail, gameGenre, developerName, video, releaseDate, description } = this.props;
    const rd = new Date(releaseDate);
    const parsedDate = `${rd.getDay().toString().padStart(2, "0")}/${rd.getMonth().toString().padStart(2, "0")}/${rd.getFullYear()}`;
    return (
      <div className={'game-detail-container'}>
        <div className={'youtube-trailer-root'}>
          <iframe src={video}
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            height={'100%'}
            width={'100%'}
          />
        </div>
        <div className={'game-image-root'}>
          <img src={gameThumbnail} alt='game thumbnail' className={'game-image'} />
          <div className={'game-description'}>
            <p>Descrição: {description}</p>
            <p>Gênero: {gameGenre}</p>
            <p>Desenvolvedor: {developerName}</p>
            <p>Data de lançamento: {parsedDate}</p>
          </div>
        </div>
      </div>
    )
  }
}
