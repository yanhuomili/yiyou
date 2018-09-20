import React, { Component } from 'react';
import './AdvantageItem.scss';
import i19 from '../../../static/img/i19.png';
import i35 from '../../../static/img/i35.png';
import ban3 from '../../../static/img/ban3.jpg';

export default class AdvantageItem extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		console.log(this.props.advantageItem)
	}
  	render() {
	    return (
  			<ul className="advantage">
  				<li>
  					<img src={i35} alt="icon"/>
  					<h4 className="title">全球支付</h4>
  					<p className="text">支付灵活方便,快速可靠</p>
  				</li>
  			</ul>
	    );
  	}
}


