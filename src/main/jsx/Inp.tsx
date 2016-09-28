import * as React from 'react'

interface InpProps {
  something : string,
  other?: string
}

export class Inp1 extends React.Component<InpProps,any>{

    render() {
        return (
            <div>{this.props.something} <input/></div>
        )
    }
}

export const Inp2 = (props: {something: string, other?: string}) => {
  return(
    <div>{props.something} <input/></div>
  )
}

export const Inp3 = React.createClass<InpProps,any>({
  render: function(){
    return (
      <div>{this.props.something} <input/></div>
    )
  }
})
