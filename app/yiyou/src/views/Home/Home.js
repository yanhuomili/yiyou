import React, { Component } from 'react';

//使用时需引入相应的组件
import { Button,NavBar,Icon,InputItem,Carousel,Grid,Tabs } from 'antd-mobile';

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
import ban3 from '../../static/img/ban3.jpg';


export default class Home extends Component {
	componentDidMount() {
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
  render() {
  	const imgArr=[banner1,banner1];
  	const data=[{icon:i18,text:'运单查询'},{icon:i19,text:'运单查询'},{icon:i20,text:'运单查询'},{icon:i22,text:'运单查询'},{icon:i24,text:'运单查询'},
  				{icon:i18,text:'运单查询'},{icon:i19,text:'运单查询'},{icon:i20,text:'运单查询'},{icon:i22,text:'运单查询'},{icon:i24,text:'运单查询'},
  	]
  	
  	const tabs = [
		  { title: '物流' },
		  { title: '金融' },
		  { title: '商业' },
		];
  	const arr=[1,2,3]
  	
    return (
      	<div className="Home">
      		<NavBar
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={this.goBack.bind(this)}
		      rightContent={[<Icon key="0" type="ellipsis" />]}>
      			<Link to="/Home">
      				<img onClick={this.goHome.bind(this)} className="logo" src={logo}/>
      			</Link>
      		</NavBar>
      		<div className="search-wrap">
      			<input type="text" placeholder="请输入关键字"/>
      			<img className="search" src={search}/>
      		</div>
      		<div className="banner">
      			<Carousel
		          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
		          afterChange={index => console.log('slide to', index)}
		        >
		        	{imgArr.map((item,index)=>
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
      			<h3 className="title">
      				全业务介绍
      			</h3>
      				
      			<div className="tip-wrap">
      				<span>基于业务</span>
      				<span>商业</span>
      				<span>便于仓储</span>
      			</div>
      			<div className="tabs">
      				<Tabs tabs={tabs}
				        swipeable={true}
				      >
      					{arr.map((item,index)=>(
      						<div key="index" style={{ height: 'auto', backgroundColor: '#fff' }}>
					          {/*<Carousel
						          beforeChange={(from, to) => console.log(`slide from ${from} to ${to}`)}
						          afterChange={index => console.log('slide to', index)}
						        >
						        	{imgArr.map((item,index)=>
						        		<a className="ban-a" key={index} href="http://www.alipay.com">
							              <img
							                src={item}
							                style={{ width: '100%', verticalAlign: 'top' }}
							              />
							            </a>
						            )}
						        </Carousel>*/}
						        
						        <img src={ban3}style={{ width: '100%', verticalAlign: 'top' }}/>
						        <img src={ban3}style={{ width: '100%', verticalAlign: 'top' }}/>
						        <img src={ban3}style={{ width: '100%', verticalAlign: 'top' }}/>
					        </div>
      					))}
				        
				        {/*<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '250px', backgroundColor: '#fff' }}>
				        	<img src={ban3}style={{ width: '100%', verticalAlign: 'top' }}/>
				        </div>*/}
				        
				    </Tabs>
      			</div>
      		</div>
      		
      	</div>
    );
  }
}


