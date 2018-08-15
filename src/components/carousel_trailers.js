import React from 'react'
import Carousel from 'nuka-carousel';
import { Embed } from 'semantic-ui-react'

const CarouselTrailers = (props) => (
    <div style={{ marginLeft: "30%", height: 500, width: 750 }}>
        <Carousel
            renderTopCenterControls={({ currentSlide }) => (
                <div>Trailer: {currentSlide}</div>
            )}
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide}>Anterior</button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide}>Próximo</button>
            )}>
            <Embed id='vzHrjOMfHPY' placeholder='/images/GOW-OG-image.jpg' source='youtube' />
            <Embed id='tS3Cz8CX7ic' placeholder='/images/GOW-OG-image.jpg' source='youtube' />
            <Embed id='mD0R2LHllyM' placeholder='/images/GOW-OG-image.jpg' source='youtube' />
            <Embed id='hJ_GPcnQosc' placeholder='/images/GOW-OG-image.jpg' source='youtube' />
        </Carousel>
    </div>
    /*<Embed id={props.id} placeholder={props.placeholder}  source={props.source}  />*/
)

export default CarouselTrailers