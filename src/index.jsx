// index.jsx
// 引入react和react-dom模块
// 使用ES2015模块导入语法
import React from 'react'
import ReactDOM from 'react-dom'
import Myfor from './components/for.jsx'
import Father from './components/father.jsx'
// 引入自定义的hello.jsx
// var text = require('./hello.jsx');

// 编写一个简单的组件
class App extends React.Component {
  render() {
    return <h1>123</h1>
  }
}
class MyApp extends React.Component {
  render() {
    return (
      <h1>
        Hi,
        {this.props.name}
      </h1>
    )
  }
}
let MyDIV = (
  <div>
    my first
    <h2>xixida</h2>
    <p>who's my body</p>
    <MyApp name="xyz" />
  </div>
)
class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: 1,
      show: false
    }
  }
  componentDidMount() {
    // this.timerID = setInterval(() => {
    //   this.upload()
    // }, 1000)
  }
  upload() {
    let x = this.state.date
    x++
    this.setState({
      date: x
    })
  }
  myclick() {
    // 绑定this
    // console.log('遭CLICK了')
    // console.log(this)
    this.upload()
    this.setState({
      show: !this.state.show
    })
  }
  render() {
    let show = this.state.show
    return (
      <div>
        <h1 onClick={this.myclick.bind(this)}>
          显示时间是：
          {this.state.date.toLocaleString()}
        </h1>
        {this.state.show ? <div>show</div> : ''}
        <p className={this.state.show ? 'x' : ''} />
        <Myfor arr={[1, 2, 3]} />
        {/* <Myfor /> */}
        <Father />
      </div>
    )
  }
}

// 创建一个组件实例，将组件挂载到文档结构中
ReactDOM.render(<Time />, document.querySelector('#app'))