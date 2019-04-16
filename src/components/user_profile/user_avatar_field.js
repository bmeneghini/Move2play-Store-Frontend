import React from 'react'
import Img from 'react-image'

export default (props) => {
  return (
      <Img src={props.picture} alt={'user picture'} className={"avatar-field"}/>
  )
}
