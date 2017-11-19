import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'
import { Router, Route, Switch} from 'react-router'
//import { Link,withRouter } from 'react-router-dom';


import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={name: "Anonymous", id: null};
  }


//  performGetRequest(){
//  console.log("performing get request")
//  console.log(this.state.name)
//  var promise = axios.get("http://localhost:8080/login/"+this.state.name+this.state.id);
//  console.log("axios return : "+ promise)
//  }


//  makeid() {
//    var text = "";
//    var possible = "0123456789";
//    text += Math.floor(Math.random() * 101) + 100;
//    return text;
//  }


  getName(e){
    this.setState({name:this.refs.textBox.value});
    this.setState({name:"eiei"})
    this.setState({id: this.makeid()})
    this.onNavigateGame();
    e.preventDefault();
  }

 onNavigateGame(e){
    if (this.refs.textBox.value == ""){
        this.props.history.push("/game/Anonymous");
    }
    else{ this.props.history.push("/game/"+this.refs.textBox.value);}
    e.preventDefault();
  }


  render() {

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Master mind</h1>
        </header>
        <div className="login-page">
          <div className="form">
            <form className="login-form">
              <input ref="textBox" type="text" placeholder="name"/>

              <button onClick ={ (e) => this.onNavigateGame(e)}> Play! </button>
            </form>
          </div>
        </div>
      </div>

    );
  }
}

//param to push login name
//history

export default App;
//<Link to='/game'><button>Play !</button></Link>

//    <div> Hello,{this.state.name} </div>
//              <div> Hello,{this.state.name} </div>