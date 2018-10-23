import React from 'react'
class MyFor extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      arr: [1, 4, 7, 25, 8, 9],
      value: ''
    }
  }
  componentDidMount() {
    console.log(this.props)
  }
  render() {
    let my
    if (this.props.arr) {
      my = this.props.arr.map(v => <li key={v}> {v} </li>)
    } else {
      //  my = this.state.arr.map(function (v) {
      //    if(v%2 === 0){
      //      return (<li key={v}>{v}</li>)
      //    }
      //  })
      my = this.state.arr.map(v => {
        if (v % 2 !== 0) {
          return <li key={v}>{v}</li>
        }
      })
      console.log(my)
    }
    return (
      <div>
        我是for循环
        <ul>{my}</ul>
        双向绑定：
        <input type="text" value={this.state.value} onChange={this.mykeyUp} />
        <span>{this.state.value}</span>
      </div>
    )
  }
  mykeyUp = event => {
    this.setState({
      value: event.target.value
    })
  }
}
export default MyFor
