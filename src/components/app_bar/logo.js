import React, { Component } from 'react'
import { Link } from 'react-router-dom'

export default class Logo extends Component {
    render() {
        return (
            <div className={"divContainerInterno"}>
                <div className={"divExterior"}>
                    <div className={"divInterior"} onClick={() => localStorage.setItem('gameName', '')}>
                        <Link to="/">
                            <img
                                src="../images/move2play-logo-tennis.png"
                                alt="logo move2play"
                                className={"logo"}
                                height="60"
                            />
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
