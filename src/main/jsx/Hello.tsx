import * as React from 'react'
import {Inp1, Inp2, Inp3} from './Inp'

import './Hello.less'

interface HelloProps extends React.Props<Hello> {
  who : string
}

export class Hello extends React.Component<HelloProps,any>{

    render() {
        return (
            <div className="HelloWorld">
              Hello {this.props.who}
              <Inp1 something='I1'/>
              <Inp2 something='I2'/>
              <Inp3 something='I3'/>
            </div>
        )
    }
}

