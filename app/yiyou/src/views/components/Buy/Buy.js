import React,{Component} from 'react';
import './Buy.scss';

import PropTypes from 'prop-types';

import Footer from '../Footer/Footer.js';
import i18 from '../../../static/img/i18.png';
import i31 from '../../../static/img/i31.png';
export default class Buy extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log('组件已经加载');
		console.log(PropTypes)
	}
	render(){
		return(
			<div className="buy">
			
				<div className="top">
					<div>
						<span>EUR</span>
						<span>{this.props.price}</span>
					</div>
					<span className="buy-btn">购买</span>
				</div>
				<div>
					<img src={i31}/>
					<span>包含额外1.5欧元保险</span>
					<a href="#">了解更多</a>
				</div>
				<div>
					<img src={i31}/>
					<span>包裹丢失将获得150欧元的赔偿</span>
				</div>
			</div>
		)
	}
}

Buy.PropTypes = {
  price: PropTypes.string.isRequired
}