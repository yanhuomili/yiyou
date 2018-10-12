import React, { Component } from 'react';
import './Footer.scss';
import Menu from '../Menu/Menu.js';
export default class Footer extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
	}
  render() {
  	const menu=[
  		{
  			title:'项目一',
  			innerList:['项目一的标题一','项目一的标题二','项目一的标题三','项目一的标题四',]
  		},
  		{
  			title:'项目二',
  			innerList:['项目二的标题一','项目二的标题二','项目二的标题三','项目二的标题四',]
  		},
  		{
  			title:'项目三',
  			innerList:['项目三的标题一','项目三的标题二','项目三的标题三','项目三的标题四',]
  		},
  	]
  	
  	
    return (
      	<div className="footer-wrap">
      		<Menu menu={menu}/>
      		<div className="footer">
				<ul>
					<li>2005-2018 版权所有</li>
					<li>公司编号3547445</li>
					<li>增值税号454668768</li>
					<li>粤ICP14457444</li>
				</ul>
				<ul>
					<li>条款和条约</li>
					<li>递送信息</li>
					<li>退款政策</li>
					<li>隐私政策</li>
					<li>站点地图</li>
				</ul>
      			
      		</div>
      	</div>
    );
  }
}


