import React,{Component} from 'react';
import './ShowPrice.scss';


import ListItem from '../components/ListItem/ListItem.js';
import {Tabs} from 'antd-mobile';
import Footer from '../components/Footer/Footer.js';
import PriceItem from '../components/PriceItem/PriceItem.js';

import n3 from '../../static/img/n3.jpg';
export default class ShowPrice extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	render(){
		const tabs=[
			{ title: '快递' },
		  	{ title: '经济' },
		  	{ title: '超经济线' },
		]
		const  listItem={
	  		src:n3,
	  		title:'新闻标题是否会开始傅雷家书',
	  		text:'支付灵活方便快速可靠支付灵活方便快速可靠支付灵活方便快速可靠',
	  		time:'2018-9-22 08:22:03'
	  	}
		return(
			<div className="show-price">
				<Tabs tabs={tabs} swipeable={false}>
					{
						tabs.map((item,index)=>(
							<div key="index" className="price-item">
								<PriceItem/>
								<PriceItem/>
							</div>
						))
					}
				</Tabs>
			</div>
		)
	}
}
