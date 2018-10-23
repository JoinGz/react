import React from 'react'
class Son extends React.Component{
  constructor(props){
    super(props)
    this.change = this.change.bind(this)
    this.state={
      num:0
    }
  }
  componentDidMount(){
    this.state.num = this.props.num.x
  }
  change(){
    console.log(this.state.num);
    
    let x = this.state.num
    x++
    console.log(x);
    
    this.setState({
      num: x
    })
    this.props.changeF()
  }
  render(){
    return (
      <div className="son" onClick = {this.change}>
      {this.state.num}
        <input type="button" value="点我改父数据"  />
      </div>
    )
  }
}
export default Son