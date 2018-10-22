import React, { Component } from 'react';
import {Provider} from 'react-redux';
import store from './store/store.js';
import logo from './logo.svg';
import './App.css';
import './app.scss';
import Home from './views/Home/Home.js';
import New from './views/New/New.js';
import NewDetail from './views/NewDetail/NewDetail.js';
import QuickOrder from './views/QuickOrder/QuickOrder.js';
import ShowPrice from './views/ShowPrice/ShowPrice.js';
import OrderInfo from './views/OrderInfo/OrderInfo.js';
import PackageInfo from './views/PackageInfo/PackageInfo.js';

//引入路由模块
import {BrowserRouter as Router,Route,Link} from 'react-router-dom';

//引入axios模块，用于请求数据
import axios from 'axios';
import {getData} from './api/index.js';

//使用时需引入相应的组件
import { Button } from 'antd-mobile';

import Header from './views/components/Header/Header.js';
import Footer from './views/components/Footer/Footer.js';

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
//		let data=(await getData({data:postData})).data;
//		console.log(data,'数据库数据');
	}
  render() {
    return (
    	<Provider store={store}>
    	<Router>
	      <div className="App">
	      		<Header/>
	      		<Route exact={true} path="/" component={Home}/>
        		<Route path="/home" component={Home}></Route>
        		<Route path="/new" component={New}></Route>
        		<Route path="/newDetail" component={NewDetail}></Route>
        		<Route path="/quickOrder" component={QuickOrder}></Route>
        		<Route path="/showPrice" component={ShowPrice}></Route>
        		<Route path="/orderInfo" component={OrderInfo}></Route>
        		<Route path="/packageInfo" component={PackageInfo}></Route>
        		
        		<Footer/>
	      </div>
	    </Router>
	    </Provider>
    );
  }
}

export default App;
