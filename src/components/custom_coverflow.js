import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default class CustomCoverflow extends Component {
    render() {
        return (
            <StyleRoot>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    infiniteScroll
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px',
                            backgroundColor: '#12181f',
                        },
                        '@media (min-width: 900px)': {
                            width: '960px',
                            height: '500px',
                            backgroundColor: '#12181f',
                        }
                    }}
                >
                    <img src='images/GOW-OG-image.jpg' alt='Album one' data-action="https://facebook.github.io/react/" />
                    <img src='images/GOW-OG-image.jpg' alt='Album two' data-action="http://passer.cc" />
                    <img src='images/GOW-OG-image.jpg' alt='Album three' data-action="https://doce.cc/" />
                    <img src='images/GOW-OG-image.jpg' alt='Album four' data-action="http://tw.yahoo.com" />
                </Coverflow>
            </StyleRoot>
        )
    }
}
