import React from 'react'
import { Dimmer, Loader } from 'semantic-ui-react'

const AjaxLoader = () => (
  <div>
    <Dimmer active inverted>
      <Loader inverted>Verificando</Loader>
    </Dimmer>
  </div>
)

export default AjaxLoader