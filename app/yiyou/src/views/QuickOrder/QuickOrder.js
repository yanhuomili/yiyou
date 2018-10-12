import React,{Component} from 'react';
import './QuickOrder.scss';


import {Tabs,Picker,List,InputItem} from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

export default class QuickOrder extends Component{
	constructor(props){
		super(props);
		this.state={
			pickerValue:[],
			value:'1545'
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	render(){
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
				          	value={this.state.pickerValue}
				          	onOk={v => this.setState({ pickerValue: v })}
				          	onDismiss={v => this.setState({ pickerValue: v })}
				        	>
				         	<List.Item arrow="horizontal">发货地</List.Item>
				        </Picker>
					</List>
					<List style={{ backgroundColor: 'white' }} className="picker-list">
						<Picker extra="请选择"
				          	data={district}
				          	title="Areas"
				          	value={this.state.pickerValue}
				          	onOk={v => this.setState({ pickerValue: v })}
				          	onDismiss={v => this.setState({ pickerValue: v })}
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
					            value={this.state.value}
					            placeholder="请输入重量"
					            extra="kg"
					            onChange={(v)=>{this.setState({value:v})}}
					          >重量</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.value}
					            placeholder="请输入长度"
					            extra="cm"
					            onChange={(v)=>{this.setState({value:v})}}
					          >长度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.value}
					            placeholder="请输入宽度"
					            extra="cm"
					            onChange={(v)=>{this.setState({value:v})}}
					          >宽度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.value}
					            placeholder="请输入高度"
					            extra="cm"
					            onChange={(v)=>{this.setState({value:v})}}
					          >高度</InputItem>
				        </List>
					</div>
				</div>
				
			</div>
		)
	}
}
