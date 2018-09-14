import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Home from './views/Home/Home.js';

//引入路由模块
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//引入axios模块，用于请求数据
import axios from 'axios';
import {getData} from './api/index.js';

//使用时需引入相应的组件
import { Button } from 'antd-mobile';

class App extends Component {
	componentDidMount() {
		this.getData();
	}
	async getData(){
		let postData={
				name:'lihaohu',
				age:22,
				home:'guangxi'
			}
		let data=(await getData({data:postData})).data;
		console.log(data);
	}
  render() {
    return (
    	<Router>
	      <div className="App">
        		<Route path="/" component={Home}></Route>
	      </div>
	    </Router>
    );
  }
}

export default App;
