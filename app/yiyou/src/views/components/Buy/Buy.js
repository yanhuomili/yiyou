import React,{Component} from 'react';
import './Buy.scss';

import PropTypes from 'prop-types';

import Footer from '../Footer/Footer.js';
import i18 from '../../../static/img/i18.png';
import i31 from '../../../static/img/i31.png';

import {ThemeContext} from '../../ShowPrice/ThemeContent.js';

function BuyBtn(props){
	return(
		<ThemeContext.Consumer>
	      {theme => (
	      	<span {...props} className="buy-btn" onClick={()=>{theme.buy('buy_id121354564')}}>购买</span>
//	      	<div {...props}>
//				<span style={{background:theme.background,color:theme.color}}>context传递下来的值,在组件内属于去全局的</span>
//				<p onClick={()=>{theme.changeState('传递回去的参数')}} style={{color:theme.color,background:theme.background}}>点击改变状态</p>
//	      	</div>
	      )}
	    </ThemeContext.Consumer>
	)
}


export default class Buy extends Component{
	constructor(props){
		super(props);
	}
	componentDidMount(){
		console.log('组件已经加载');
		console.log(this.props.price,'buy')
	}
	render(){
		return(
			<div className="buy">
			
				<div className="top">
					<div>
						<span>EUR</span>
						<span>{this.props.price}</span>
					</div>
					{/*<span className="buy-btn">购买</span>*/}
					<BuyBtn p={this.props.price}/>
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