import 'react-hot-loader/patch'
import * as React from 'react'
import * as ReactDom from 'react-dom'
import {Hello} from './Hello'

import './app.less'

build()

if(module.hot){
  module.hot.accept('./Hello', () => {
    build()
  })
}

function build(){
  const AppContainer = (require('react-hot-loader') as any).AppContainer
  const NHello: typeof Hello = (require('./Hello') as any).Hello

  ReactDom.render(
    <AppContainer>
      <NHello who='React'/>
    </AppContainer>,
    document.getElementById('app')
  )
}
