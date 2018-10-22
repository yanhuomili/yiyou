import React, {
	Component
} from 'react';
import './OrderInfo.scss';

import { Tabs, Picker, List, InputItem,Radio } from 'antd-mobile';
import { district, provinceLite } from 'antd-mobile-demo-data';

import ImgList from '../components/ImgList/ImgList.js';

import c1 from '../../static/img/c1.png';
import c2 from '../../static/img/c2.png';
import c3 from '../../static/img/c3.png';
import c4 from '../../static/img/c4.png';
import c5 from '../../static/img/c5.png';
import c6 from '../../static/img/c6.png';

export default class OrderInfo extends Component {
	constructor(props) {
		super(props);
		this.state = {
			start: [],
			end: [],
			weight: '',
			length: '',
			width: '',
			height: '',
			sex:1
		}
	}
	componentDidMount() {
		console.log('组件已经加载');
	}
	next(){
		console.log('下一步');
		window.location.href = '/packageInfo';
	}
	render() {
		const imgList = [c1, c2, c3, c4, c5, c6]
		const sex=[{label:(<div key="1" style={{text:'center'}}>男</div>),value:1},{label:(<div key="0" style={{text:'center'}}>女</div>),value:0}]
		return(
			<div className="order-info">
				<div className="top">
					<h4>包裹信息</h4>
				</div>
				<div className="item">
					<span className="tip">我的详细信息</span>
					<div>
						<List>
					          <InputItem
					            value={this.state.length}
					            placeholder="姓氏"
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >姓</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="名字"
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >名</InputItem>
				        </List>
						<List style={{ backgroundColor: 'white' }} className="picker-list">
							<Picker extra="性别"
					          	data={sex}
					          	title="sex"
					          	cols={1}
					          	value={this.state.sex}
					          	onOk={v => this.setState({ sex: v })}
					          	onDismiss={v => this.setState({ sex: v })}
					        	>
					         	<List.Item arrow="horizontal">性别</List.Item>
					        </Picker>
						</List>
					</div>
					<div className="send-you">
						<span className="is-yes"></span>
						<p>我们很乐意通过电子邮件向您发送有用的信息，例如最新优惠和服务公告等，但是我们是不会与任何人分享您的个人信息的。如果您愿意获取我们的信息，只需选中此框就可以了。</p>
					</div>
					
				</div>
				<div className="item">
					<span className="tip">我的包裹细节</span>
					<div>
						<List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >包裹内容</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra="$"
					            onChange={(v)=>{this.setState({length:v})}}
					          >价值</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra="g"
					            onChange={(v)=>{this.setState({length:v})}}
					          >重量</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra="cm"
					            onChange={(v)=>{this.setState({length:v})}}
					          >长度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra="cm"
					            onChange={(v)=>{this.setState({length:v})}}
					          >宽度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra="cm"
					            onChange={(v)=>{this.setState({length:v})}}
					          >高度</InputItem>
				        </List>
				        <List>
					          <InputItem
					            value={this.state.length}
					            placeholder="请输入"
					            extra=""
					            onChange={(v)=>{this.setState({length:v})}}
					          >备注</InputItem>
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