import React, { Component } from 'react';

export default class GameInfoContainer extends Component {
  render() {
    return (
      <div className={'game-detail-container'}>
        <div className={'youtube-trailer-root'}>
          <iframe src='https://www.youtube.com/embed/K0u_kAWLJOA'
            frameBorder='0'
            allow='autoplay; encrypted-media'
            allowFullScreen
            title='video'
            height={'100%'}
            width={'100%'}
          />
        </div>
        <div className={'game-image-root'}>
          <img src='/images/GOW-OG-image.jpg' alt='Album one' className={'game-image'} />
          <break></break>
          <div className={'game-description'}>
            <p>Lorem ipsum aenean nullam quisque sem praesent, viverra elementum leo in venenatis, enim conubia fermentum tempus imperdiet inceptos. vivamus potenti curae convallis libero orci dapibus semper vel interdum bibendum, egestas non litora integer sagittis enim habitant nisl donec vivamus, laoreet dictum torquent lacinia amet elementum sapien vitae enim.</p>
            <p>Desenvolvedor: Bernardo Meneghini Muschioni</p>
            <p>Data de lançamento: 01/01/2019</p>
          </div>
        </div>
      </div>
    )
  }
}
