import React,{Component} from 'react';
import './ShowPrice.scss';


import ListItem from '../components/ListItem/ListItem.js';
import {Tabs} from 'antd-mobile';
import Footer from '../components/Footer/Footer.js';
import PriceItem from '../components/PriceItem/PriceItem.js';
import MoreInfo from '../components/Remark/MoreInfo/MoreInfo.js';
import {ThemeContext, themes} from './ThemeContent';

import n3 from '../../static/img/n3.jpg';

export default class ShowPrice extends Component{
	constructor(props){
		super(props);
		this.state={
			isShowInfo:0,
			infoStyle:{display:'block'},
			theme:{
				foreground: '#000000',
			    background: '#eeeeee',
			    color:'#f60',
			    changeState:this.changeState.bind(this),
			    buy:this.buy.bind(this)
			}
			
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	showMore(){
		this.setState({isShowInfo:1});
		console.log('查看更多');
	}
	closeMoreInfo(){
		this.setState({isShowInfo:0});
	}
	buySafeHandler(){
		console.log('购买保险');
	}
	unBuySafeHandler(){
		console.log('不购买保险');
	}
	changeState(val){
		console.log(val);
		
		this.setState({
			theme:{
				foreground: 'blue',
			    background: 'blue',
			    color:'red',
			    changeState:this.changeState.bind(this)
			}
			
		})
	}
	buy(val){
		console.log(val,'buy');
		console.log('购买');
		window.location.href='/orderInfo';
	}
	render(){
		const tabs=[
			{ title: '快递' },
		  	{ title: '经济' },
		  	{ title: '超经济线' },
		];
		const isShowInfo=this.state.isShowInfo;
		const infoStyle=this.state.infoStyle;
		return(
			<div className="show-price">
				<Tabs tabs={tabs} swipeable={false}>
					{
						tabs.map((item,index)=>(
							<div key="index" className="price-item">
								<ThemeContext.Provider value={this.state.theme}>
									<PriceItem showMore={this.showMore.bind(this)}/>
								 </ThemeContext.Provider>
								 <ThemeContext.Provider value={this.state.theme}>
									<PriceItem showMore={this.showMore.bind(this)}/>
								 </ThemeContext.Provider>
							</div>
						))
					}
				</Tabs>
				<div className="more-info-box" style={isShowInfo==1?infoStyle:null}>
					<MoreInfo buySafeHandler={this.buySafeHandler.bind(this)}  unBuySafeHandler={this.unBuySafeHandler.bind(this)} closeHandler={this.closeMoreInfo.bind(this)}/>
				</div>
			</div>
		)
	}
}
