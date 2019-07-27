import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Buttuon from './Button'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './reducers'
import User from './userlist'

const store = createStore(rootReducer)

class Nav extends React.Component {
  render(){
    return(
      <div style={{color:"white", backgroundColor:"black"}}> Skipper</div>
    );
  }
}

class Time extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      nowTime : new Date()
    }
  }

  tick (){
    this.setState({
      nowTime: new Date()
    });
  }

componentWillMount(){
  this.timeId = setInterval(() => {
    this.tick();
  }, 1000);
} 
componentDidMount(){
  
}

componentWillUnmount(){
  clearInterval(this.timeId)
}

  render(){
    return(
      <div>{this.state.nowTime.getHours()}:{this.state.nowTime.getMinutes()}:{this.state.nowTime.getSeconds()}</div>
    );
  }
}


class App extends React.Component {
 constructor(){
   super();
   this.state = {
     like: true,
     timeCall: true
   }
   console.log("组件构造 constructor")
 }
 
 componentWillMount(){
      console.log(`组件将要加载  + componentWillMount` )
 }

 componentDidMount(){
   console.log("组件加载完成 componentDidMount")
 }

 componentWillReceiveProps(){
   console.log("组件将要接收Props componentWillReceiveProps")
 }

 shouldComponentUpdate(){
   console.log("组件应该更新 shouldComponentUpdate")
   return true
 }

//  getSnapshotBeforeUpdate(){
//   console.log("获取组件更新前快照 getSnapshotBeforeUpdate")
//  }

 componentWillUpdate(){
  console.log("组件将要更新 componentWillUpdate")

 }

 componentDidUpdate(){
   console.log("组件更新完成 componentDidUpdate")
 }


  handleClick(){
    this.setState({
      like:!this.state.like
    });
  }

  handleCalcelTime(){
    console.log("切换")

    this.setState({
      timeCall: !this.state.timeCall
    })
  }
  render(){
    console.log("组件渲染")
    return (
      <Provider store={store}>
        <div className="App">
          <Nav />
          <Buttuon />
          {this.state.timeCall ? <Time></Time>:""}
          <button type="button" style={this.state.like? {color:"red"}:{color:"green"}}
            onClick={()=> this.handleClick()}>
                {this.state.like ? "喜欢" : "已赞"}
            </button>
            <button onClick={()=> this.handleCalcelTime()}>切换渲染</button>
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <p>
              
            this is an first example react .
            </p>
            <User></User>
        </div>
      </Provider>
    );
  }
}



export default App;
