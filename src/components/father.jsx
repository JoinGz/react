import React from 'react'
import Son from './son.jsx'
class Father extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      num: '父元素',
      ob:{
        x:1
      }
    }
    this.changFather = this.changFather.bind(this)
  }
  changFather () {
    this.setState({
      num: '遭子元素改变球了'
    })
  }
  render() {
    return (
      <div className="fanther">
      <h1>
        我是父元素数据:
        {this.state.num}
      </h1>
      {this.state.ob.x}
      <Son num={this.state.ob} changeF = {this.changFather} />
      </div>
    )
  }
}
export default Father