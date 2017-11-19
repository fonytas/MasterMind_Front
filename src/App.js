import React, { Component } from 'react';
import './App.css';
import Game from './Game.js'
import { Router, Route, Switch, browserHistory} from 'react-router'
import { Link } from 'react-router-dom';
import axios from "axios";


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state={name: "Anonymous", id: null};
//    this.order={number: 100};
//    this.handleClick = this.makeid.bind(this);
//    this.state = { random: '' };
    this.isSelected =  false
  }

//  handleLoginClick() {
//      this.setState({isSelected: true});
//      this.props.history.push("/someNewPage");
//   }

  performGetRequest(){
  console.log("performing get request")
  console.log(this.state.inputfield)
  var promise = axios.get("http://localhost:8080/login/"+this.state.name+this.state.id);
  console.log("axios return : "+ promise)
  }




//
  makeid() {
    var text = "";
    var possible = "0123456789";

    text += Math.floor(Math.random() * 101) + 100;

//    for (var i = 0; i < 4; i++)
//        text += possible.charAt(Math.floor(Math.random() * 10) + 1);
////    console.log("HI")
//        this.setState({random: this.state.random = text})
    return text;


  }
  getName(e){

//    console.log(this.makeid());
//    var num = this.order + 1

    this.setState({name:this.refs.textBox.value});
    this.setState({id: this.makeid()})
    e.preventDefault();
    this.performGetRequest();



  }

  render() {

    const isSelected = this.state.isSelected;
    return (
      <div className="App">

        <header className="App-header">

          <h1 className="App-title">Welcome to Master mind</h1>
        </header>
        <div className="login-page">
          <div className="form">


            <form className="login-form">

              <input ref="textBox" type="text" placeholder="name"/>


              <button onClick ={ (e) => this.getName(e)}> Play! </button>


              <div> Hello,{this.state.name} </div>
              <div> Hello,{this.state.name} </div>

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