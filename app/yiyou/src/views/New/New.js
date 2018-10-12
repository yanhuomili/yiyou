import React,{Component} from 'react';
import './New.scss';


import ListItem from '../components/ListItem/ListItem.js';
import {Tabs} from 'antd-mobile';
import Footer from '../components/Footer/Footer.js';

import n3 from '../../static/img/n3.jpg';
export default class New extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	render(){
		const tabs=[
			{ title: '全部' },
		  	{ title: '企业新闻' },
		  	{ title: '行业新闻' },
		]
		const  listItem={
	  		src:n3,
	  		title:'新闻标题是否会开始傅雷家书',
	  		text:'支付灵活方便快速可靠支付灵活方便快速可靠支付灵活方便快速可靠',
	  		time:'2018-9-22 08:22:03'
	  	}
		return(
			<div className="new">
				<img style={{width:'100%',height:'auto'}} className="search" src={'http://192.168.1.44:8080/img/2-3.png'}/>
				<Tabs tabs={tabs} swipeable={true}>
					{
						tabs.map((item,index)=>(
							<div key="index">
								<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
							</div>
						))
					}
				</Tabs>
			</div>
		)
	}
}
