import React, {
	Component
} from 'react';
import './PackageInfo.scss';

import { Tabs, Picker, List, InputItem,Radio,DatePicker } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

import ImgList from '../components/ImgList/ImgList.js';

import c1 from '../../static/img/c1.png';
import c2 from '../../static/img/c2.png';
import c3 from '../../static/img/c3.png';
import c4 from '../../static/img/c4.png';
import c5 from '../../static/img/c5.png';
import c6 from '../../static/img/c6.png';

export default class PackageInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: [],
			end: [],
			weight: '',
			length: '',
			width: '',
			height: '',
			sex:1,
			date:new Date()
		}
	}
	componentDidMount() {
		console.log('组件已经加载');
	}
	getPrice() {
		console.log('获取报价');
		window.location.href = '/showPrice';
	}
	next(){
		console.log('下一步');
	}
	render() {
		const imgList = [c1, c2, c3, c4, c5, c6]
		const sex=[{label:(<div key="2" style={{text:'center'}}>白天</div>),value:2},{label:(<div key="1" style={{text:'center'}}>晚上</div>),value:1},{label:(<div key="0" style={{text:'center'}}>随时</div>),value:0}]
		return(
			<div className="package-info">
				<div className="top">
					<h4>寄送地址</h4>
				</div>
				<div className="item">
					<span className="tip">发件信息</span>
					<div>
						<List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >寄件人*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >地址*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >电子邮箱*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >电话*</InputItem>
				        </List>
					</div>
				</div>
				<div className="item">
					<span className="tip">收件信息</span>
					<div>
						<List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >收件人*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >地址*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >电子邮箱*</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder=""
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >电话*</InputItem>
				        </List>
					</div>
				</div>
				<div className="item">
					<span className="tip">取货安排</span>
					<div>
				        <List>
					          <DatePicker
						          mode="date"
						          title="取货日期"
						          extra="取货日期"
						          value={this.state.date}
						          onChange={date => this.setState({ date })}
						        >
						          <List.Item arrow="horizontal">取货日期</List.Item>
						        </DatePicker>
				        </List>
				        <List style={{ backgroundColor: 'white' }} className="picker-list">
							<Picker extra="取货时间"
					          	data={sex}
					          	title="取货时间"
					          	cols={1}
					          	value={this.state.sex}
					          	onOk={v => this.setState({ sex: v })}
					          	onDismiss={v => this.setState({ sex: v })}
					        	>
					         	<List.Item arrow="horizontal">取货时间</List.Item>
					        </Picker>
						</List>
					</div>
				</div>
				
				<div className="getPrice">
					<span onClick={this.next.bind(this)}>下一步</span>
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