import React from 'react'
import store from '../state/store'
class Son extends React.Component {
  constructor(props) {
    super(props)
    this.change = this.change.bind(this)
    this.state = {
      num: 0,
      num2:''
    }
    this.click = this.click.bind(this)
  }
  componentDidMount() {
    this.state.num = this.props.num.x
    store.subscribe(() => {
      this.setState({
        num2: store.getState()
      })
    })
  }
  click() {
    store.dispatch({
      type: 'ADD'
    })
  }
  change() {
    console.log(this.state.num)

    let x = this.state.num
    x++
    console.log(x)

    this.setState({
      num: x
    })
    this.props.changeF()
  }
  render() {
    return (
      <div>
        <h3 onClick={this.click}>我是子组件</h3>
        {this.state.num2.num}
        <div className="son" onClick={this.change}>
          {this.state.num}
          <input type="button" value="点我改父数据" />
        </div>
      </div>
    )
  }
}
export default Son
