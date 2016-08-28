import React from 'react'
import ReactDOM from 'react-dom'
import ReactServer from 'react-dom/server'

import Hello from './Hello.jsx'

import './app.less'

if(typeof isServer != 'undefined'){
    print(ReactServer.renderToString(
        <Hello who="React"/>
    ))
}else {
    ReactDOM.render(
        <Hello who="React"/>,
        document.getElementById('app')
    )
}

