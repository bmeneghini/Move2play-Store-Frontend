
import React, { Component } from 'react'
export default class CustomLabel extends Component {
    render() {
        const { content, font_size, text_align, height } = this.props
        return (
            <div style={{ textAlign: text_align, height: height}}>
                <div className={"divContainerInterno"}>
                    <div className={"divExterior"}>
                        <div className={"divInterior"} style={{ height: 24, color: "#333333", fontFamily: "Work Sans", fontSize: font_size, fontWeight: 400 }}>
                            {content}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
