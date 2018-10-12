import React,{Component} from 'react';
import './NewDetail.scss';


import {Tabs} from 'antd-mobile';
import Footer from '../components/Footer/Footer.js';

export default class New extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	render(){
		return(
			<div className="new-detail">
				<img style={{width:'100%',height:'auto'}} className="search" src={'http://192.168.1.44:8080/img/2-3.png'}/>
				<div className="new-title">贝因美与爱尔兰Easy2Go、Musgrave等企业签署合作协议</div>
				<div className="new-time">
					<span>2018-10-12</span>
					<span>15:00:00</span>
				</div>
				<p className="new-content">
					8月10日-15日，杭州市委副书记马晓晖一行访问爱尔兰，在此期间，贝因美与爱尔兰当地最大的百年零售企业Musgrave达成合作。贝因美国际业务负责人王智与Musgrave出口总监Liam Hyland代表双方企业在爱尔兰科克市长Lord Mayor of Cork Cllr. Tony Fitzgerald、杭州市委副书记马晓晖.Easy2Go总经理Jessie等领导的见证下，在爱尔兰Cork市市政厅签署合作备忘录，双方将协同优化资源，共同探讨在爱尔兰及中国市场的深入发展。
					8月10日-15日，杭州市委副书记马晓晖一行访问爱尔兰，在此期间，贝因美与爱尔兰当地最大的百年零售企业Musgrave达成合作。贝因美国际业务负责人王智与Musgrave出口总监Liam Hyland代表双方企业在爱尔兰科克市长Lord Mayor of Cork Cllr. Tony Fitzgerald、杭州市委副书记马晓晖.Easy2Go总经理Jessie等领导的见证下，在爱尔兰Cork市市政厅签署合作备忘录，双方将协同优化资源，共同探讨在爱尔兰及中国市场的深入发展。
					8月10日-15日，杭州市委副书记马晓晖一行访问爱尔兰，在此期间，贝因美与爱尔兰当地最大的百年零售企业Musgrave达成合作。贝因美国际业务负责人王智与Musgrave出口总监Liam Hyland代表双方企业在爱尔兰科克市长Lord Mayor of Cork Cllr. Tony Fitzgerald、杭州市委副书记马晓晖.Easy2Go总经理Jessie等领导的见证下，在爱尔兰Cork市市政厅签署合作备忘录，双方将协同优化资源，共同探讨在爱尔兰及中国市场的深入发展。
				</p>
			</div>
		)
	}
}
