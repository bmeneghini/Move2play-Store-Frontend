import React from 'react'
import Img from 'react-image'

export default (props) => {
  return (
    <div className={"avatar-field"}>
      <Img src={props.picture} style={{ width: "100%" }} />
    </div>
  )
}
