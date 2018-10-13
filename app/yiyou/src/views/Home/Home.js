import React, { Component } from 'react';

//使用时需引入相应的组件
import { Button,InputItem,Carousel,Grid,Tabs } from 'antd-mobile';

import './Home.scss';
import {Link} from 'react-router-dom';

import logo from '../../static/img/logo.png';
import banner1 from '../../static/img/banner1.png';
import search from '../../static/img/search.png';

import i18 from '../../static/img/i18.png';
import i19 from '../../static/img/i19.png';
import i20 from '../../static/img/i20.png';
import i22 from '../../static/img/i22.png';
import i24 from '../../static/img/i24.png';
import i34 from '../../static/img/i34.png';
import i35 from '../../static/img/i35.png';
import ban3 from '../../static/img/ban3.jpg';
import b2 from '../../static/img/b2.jpg';

import c1 from '../../static/img/c1.png';
import c2 from '../../static/img/c2.png';
import c3 from '../../static/img/c3.png';
import c4 from '../../static/img/c4.png';
import c5 from '../../static/img/c5.png';
import c6 from '../../static/img/c6.png';

import n3 from '../../static/img/n3.jpg';



import SwiperCard from '../components/SwiperCard/SwiperCard.js';
import AdvantageItem from '../components/AdvantageItem/AdvantageItem.js';
import ImgList from '../components/ImgList/ImgList.js';
import ListItem from '../components/ListItem/ListItem.js';
import Header from '../components/Header/Header.js';
import Footer from '../components/Footer/Footer.js';



export default class Home extends Component {
	componentDidMount() {
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
	seaMore(){
		console.log('查看更多');
	}
  render() {
  	
  	const imgArr=[[banner1,banner1,banner1],[banner1,banner1,banner1],[banner1,banner1,banner1]];
  	const imgArr1=[banner1,banner1,banner1];
  	const data=[{icon:i18,text:'运单查询'},{icon:i19,text:'运单查询'},{icon:i20,text:'运单查询'},{icon:i22,text:'运单查询'},{icon:i24,text:'运单查询'},
  				{icon:i18,text:'运单查询'},{icon:i19,text:'运单查询'},{icon:i20,text:'运单查询'},{icon:i22,text:'运单查询'},{icon:i24,text:'运单查询'},
  	]
  	
  	const tabs = [
		  { title: '物流' },
		  { title: '金融' },
		  { title: '商业' },
		];
		
	const tabs1 = [
		  { title: '企业新闻' },
		  { title: '行业新闻' },
		];
  	const arr=[1,2,3]
  	const  cardItem={
  		banSrc:b2,
  		title:'海购转运',
  		icon:i34,
  		text:'提供一系列物流解决方案。对于客户的 B2B2C、 M2B2C 或 B2B2B、M2B2B 不同的业务模式,分别'
  		
  	}
  	const  advantageItem={
  		icon:i35,
  		title:'全球支付',
  		text:'支付灵活方便快速可靠'
  	}
  	const  listItem={
  		src:n3,
  		title:'新闻标题是否会开始傅雷家书',
  		text:'支付灵活方便快速可靠支付灵活方便快速可靠支付灵活方便快速可靠',
  		time:'2018-9-22 08:22:03'
  	}
  	const imgList=[c1,c2,c3,c4,c5,c6]
  	
  	
  	
    return (
      	<div className="Home">
      		<div className="search-wrap">
      			<input type="text" placeholder="请输入关键字"/>
      			<img className="search" src={search}/>
      			
      		</div>
      		
      		<p><Link to="/quickOrder">快速下单页面</Link></p>
      		<p><Link to="/showPrice">获取价格页面</Link></p>
      		
      		
  			<img style={{width:'auto',height:'150px'}} className="search" src={'http://192.168.1.44:8080/img/2-3.png'}/>
  			
  			
  			
      		<div className="banner">
      			<Carousel
		          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          afterChange={index => console.log('slide to', index)}
		        >
		        	{imgArr1.map((item,index)=>
		        		<a className="ban-a" key={index} href="http://www.alipay.com">
			              <img
			                src={item}
			                style={{ width: '100%', verticalAlign: 'top' }}
			              />
			            </a>
		            )}
		        </Carousel>
      		</div>
      		<div className="grid">
      			<Grid data={data} 
      				square={false}
      				columnNum={5}
      				hasLine={false}
      				renderItem={dataItem => (
				        <div style={{ padding: '5px' }}>
				          <img className="g-icon" src={dataItem.icon} alt="" />
				          <div style={{ color: '#888', fontSize: '14px', marginTop: '12px' }}>
				            <span>{dataItem.text}</span>
				          </div>
				        </div>
				      )} 
		      activeStyle={false} />
      		</div>
      		<div className="business">
      			<h3 className="title" style={{margin:'15px 0'}}>
      				全业务介绍
      			</h3>
      				
      			<div className="tip-wrap">
      				<span>基于业务</span>
      				<span>商业</span>
      				<span>便于仓储</span>
      			</div>
      			<div className="tabs">
      				<Tabs tabs={tabs}
				        swipeable={false}
				      >
      					{arr.map((item,index)=>(
      						<div key={index} style={{ height: '840px',overFlow:'hidden', backgroundColor: '#fff'}}>
					         	<Carousel
						          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						          afterChange={index => console.log('slide to', index)}
						        >
						        	{imgArr.map((item1,index1)=>
						        		<div key={index1}>
						        			{item1.map((item2,index2)=><SwiperCard key={index2} cardItem={cardItem}/>)}
						        		</div>
						            )}
						        </Carousel>
					        </div>
      					))}
				    </Tabs>
      			</div>
      		</div>
      		
      		<div style={{background:'#fff'}}>
      			<AdvantageItem advantageItem={advantageItem}/>
      			<AdvantageItem advantageItem={advantageItem}/>
      			<AdvantageItem advantageItem={advantageItem}/>
      		</div>
      		<div style={{background:'#fff',textAline:'left',lineHeight:'1.5'}}>
      			<h3>链接您的账账户加快您的预约</h3>
      			<p style={{padding:'0 15px',color:'#999'}}>链接您的卖家帐户可以让您处理，通过单一的在线应用监控和发送多个订单</p>
      			<ImgList imgList={imgList}/>
      		</div>
      		<div className="news" style={{background:'#fff',padding:'0 15px'}}>
      			<h3>企业新闻</h3>
      			<Tabs tabs={tabs1}
			        swipeable={true}
			      >
      				{
      					tabs1.map((item,index)=>(
      						<div key="index">
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      					<ListItem listItem={listItem}/>
		      				</div>
      					))
      				}
      				
      			</Tabs>
      			<div className="more" onClick={this.seaMore.bind(this)}>
      				<Link to="/new">查看更多动态</Link>
      			</div>
      		</div>
      		
      		
      	</div>
    );
  }
}


