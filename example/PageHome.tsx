import React, { Component } from 'react'

interface IProps {
}

interface IState {
  name: string;
}
class  extends Component<IProps, IState> {
  state: IState = {
    name: ''
  }

  componentDidMount () {

  }

  componentDidUpdate () {
    
  }

  render () {
    return (
      <div className="pageContainer">这是类组建</div>
    )
  }
}

export default 