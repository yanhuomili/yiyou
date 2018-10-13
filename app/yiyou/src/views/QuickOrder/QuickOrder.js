import React,{Component} from 'react';
import './QuickOrder.scss';


import {Tabs,Picker,List,InputItem} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

import ImgList from '../components/ImgList/ImgList.js';

import c1 from '../../static/img/c1.png';
import c2 from '../../static/img/c2.png';
import c3 from '../../static/img/c3.png';
import c4 from '../../static/img/c4.png';
import c5 from '../../static/img/c5.png';
import c6 from '../../static/img/c6.png';

export default class QuickOrder extends Component{
	constructor(props){
		super(props);
		this.state={
			start:[],
			end:[],
			weight:'',
			length:'',
			width:'',
			height:'',
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	getPrice(){
		console.log('获取报价');
		window.location.href='/showPrice';
	}
	render(){
		const imgList=[c1,c2,c3,c4,c5,c6]
		return(
			<div className="quick-order">
				<div className="top">
					<h4>快速下单</h4>
					<p>点击一个按钮，您可以比较为您的发送需求选择的几十种不同的快递服务,</p>
				</div>
				<div className="item">
					<span className="tip">寄件和收件国家</span>
					<div>
					<List style={{ backgroundColor: 'white' }} className="picker-list">
						<Picker extra="请选择"
				          	data={district}
				          	title="Areas"
				          	value={this.state.start}
				          	onOk={v => this.setState({ start: v })}
				          	onDismiss={v => this.setState({ start: v })}
				        	>
				         	<List.Item arrow="horizontal">发货地</List.Item>
				        </Picker>
					</List>
					<List style={{ backgroundColor: 'white' }} className="picker-list">
						<Picker extra="请选择"
				          	data={district}
				          	title="Areas"
				          	value={this.state.end}
				          	onOk={v => this.setState({ end: v })}
				          	onDismiss={v => this.setState({ end: v })}
				        	>
				         	<List.Item arrow="horizontal">收货地</List.Item>
				        </Picker>
					</List>
					</div>
				</div>
				<div className="problem">
					<span className="tip">找不到你想去的国家？</span>
					<a>联系Easy2go客服</a>
				</div>
				<div className="item">
					<span>包裹信息</span>
					<div>
						<List>
					          <InputItem
					            value={this.state.weight}
					            placeholder="请输入重量"
					            extra="kg"
					            onChange={(v)=>{this.setState({weight:v})}}
					          >重量</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入长度"
					            extra="cm"
					            onChange={(v)=>{this.setState({length:v})}}
					          >长度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.width}
					            placeholder="请输入宽度"
					            extra="cm"
					            onChange={(v)=>{this.setState({width:v})}}
					          >宽度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.height}
					            placeholder="请输入高度"
					            extra="cm"
					            onChange={(v)=>{this.setState({height:v})}}
					          >高度</InputItem>
				        </List>
					</div>
				</div>
				<div className="getPrice">
					<span onClick={this.getPrice.bind(this)}>获取报价</span>
				</div>
				<div style={{background:'#fff',textAline:'left',lineHeight:'1.5',textAlign:'center',paddingTop:'15px'}}>
	      			<h3 style={{margin:'15px 0'}}>链接您的账账户加快您的预约</h3>
	      			<p style={{padding:'0 15px',color:'#999'}}>链接您的卖家帐户可以让您处理，通过单一的在线应用监控和发送多个订单</p>
	      			<ImgList imgList={imgList}/>
	      		</div>
				
			</div>
		)
	}
}
