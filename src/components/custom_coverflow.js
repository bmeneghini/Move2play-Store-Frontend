import React, { Component } from 'react';
import Coverflow from 'react-coverflow';
import { StyleRoot } from 'radium';

export default class CustomCoverflow extends Component {
    render() {
        return (
            <StyleRoot style={{ marginTop: -40 }}>
                <Coverflow
                    displayQuantityOfSide={2}
                    navigation
                    style={{ marginTop: -40 }}
                    infiniteScroll
                    enableHeading
                    media={{
                        '@media (max-width: 900px)': {
                            width: '600px',
                            height: '300px',
                            backgroundColor: 'white',
                        },
                        '@media (min-width: 900px)': {
                            width: '960px',
                            height: '500px',
                            backgroundColor: 'white',
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
