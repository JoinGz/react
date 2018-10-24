// index.jsx
// 引入react和react-dom模块
// 使用ES2015模块导入语法
import React from 'react';
import ReactDOM from 'react-dom';
import Myfor from './components/for.jsx';
import Father from './components/father.jsx';
import { BrowserRouter, Route, Link, Switch, Redirect } from 'react-router-dom';
import { createStore } from 'redux';
// import todoApp from './state/reducers'

//action
const changeTextAction = {
  type: 'CHANGE_TEXT'
};
const buttonClickAction = {
  type: 'BUTTON_CLICK'
};
const buttonClickAction1 = {
  type: 'BUTTON_CLICK1'
};

//reducer
const initialState = {
  text: 'Hello PandaKill'
};
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'CHANGE_TEXT':
      return {
        text: state.text == 'Hello' ? 'world' : 'Hello'
      };
    case 'BUTTON_CLICK':
      return {
        text: 'Hello world'
      };
    default:
      return initialState;
  }
};

//store
let store = createStore(reducer);
console.log(store.getState());
store.dispatch(buttonClickAction)
console.log(store.getState());


// 引入自定义的hello.jsx
// var text = require('./hello.jsx');
// 编写一个简单的组件
class App extends React.Component {
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <p>123</p>
        {this.props.children}
      </div>
    );
  }
}
class MyApp extends React.Component {
  render() {
    return (
      <h1>
        Hi,
        {this.props.name}
      </h1>
    );
  }
}
let MyDIV = (
  <div>
    my first
    <h2>xixida</h2>
    <p>who's my body</p>
    <MyApp name="xyz" />
  </div>
);
class ShowRouter extends React.Component {
  constructor(props) {
    super(props);
  }
  click = () => {};
  render() {
    return (
      <div>
        <Link to="/about">About</Link>
        <Link to="/home">Home</Link>
        <p onClick={this.click}>123</p>
        {this.props.children}
      </div>
    );
  }
}

class About extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    // console.log(this.props.location.query.name);
    // console.log(this.props.history.push('/'))
  }
  click = () => {
    // 编程式
    this.props.history.push('/about/2');
  };
  render() {
    return (
      <div>
        <div>I'M ABOUT!</div>
        <p>下面就是传说中的Router啦</p>
        <Link to="/">点我回首页</Link>
        {/* 子路由 */}
        {/* 声明式 */}
        <Link to="/about/1">点我显示子路由</Link>
        <p onClick={this.click}>点我显示</p>
        <Route path="1" render={() => <h1>弗雷尔卓德必将再次统一！</h1>} />
        <Route path="/about/2" render={() => <h1>犯我德邦者，顺丰快递！</h1>} />
        <Route path="/about" exact render={() => <h1>快乐风男不快乐！</h1>} />
      </div>
    );
  }
}
class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  click = () => {
    // this.props.history.push('/about')
    this.props.history.push({
      pathname: '/about',
      query: {
        name: 'inbox'
      }
    });
  };
  componentDidMount() {
    console.log(this.props.match.params.id);
  }
  render() {
    let match = this.props.match.params;
    return (
      <div>
        <div onClick={this.click}>I'M Home!</div>
        <p>{match.id}</p>
      </div>
    );
  }
}
class Time extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: 1,
      show: false
    };
  }
  componentDidMount() {
    // this.timerID = setInterval(() => {
    //   this.upload()
    // }, 1000)
  }
  upload() {
    let x = this.state.date;
    x++;
    this.setState({
      date: x
    });
  }
  myclick() {
    // 绑定this
    // console.log('遭CLICK了')
    // console.log(this)
    this.upload();
    this.setState({
      show: !this.state.show
    });
  }
  render() {
    let show = this.state.show;
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
        {/* <Link to="/about">About</Link> */}
      </div>
    );
  }
}

// 创建一个组件实例，将组件挂载到文档结构中
ReactDOM.render(
  <BrowserRouter>
    {/* <ShowRouter> */}
    <div>
      {/*多个子节点要用div包裹*/}
      <p>我是路由</p>
      <Time /> {/*可以把其他组件放进来*/}
      <Link to="/about">About</Link>
      <Link to="/home/5">Home</Link>
      <Switch>
        {' '}
        {/*exact实现精确匹配（匹配到第一个就不往下继续匹配）*/}
        <Route
          exact
          path="/"
          render={() => {
            return <Redirect to="/home/1" />;
          }}
        />
        <Route path="/home/:id" component={Home} />
        <Route path="/about" component={About} />
      </Switch>
    </div>
    {/* </ShowRouter> */}
  </BrowserRouter>,
  document.querySelector('#app')
);
