import React, { Component } from 'react';
import './Footer.scss';

export default class Footer extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
	}
  render() {
    return (
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
    );
  }
}


