import React,{Component} from 'react';
import './PriceItem.scss';


import Footer from '../Footer/Footer.js';
import Buy from '../Buy/Buy.js';
import Remark from '../Remark/Remark.js';


import i18 from '../../../static/img/i18.png';
export default class PriceItem extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	showMore(){
		console.log('6666')
		this.props.showMore();
	}
	render(){
		return(
			<div className="single-price">
				<div className="item-top">
					<img src={i18}/>
					<div>
						<p>邮政奢侈品杂物包税特快专线</p>
						<span>L0115</span>
					</div>
				</div>
				<div className="item-middle">
					<Buy/>
					<Buy/>
				</div>
				<div className="item-bot">
					<Remark showMore={this.showMore.bind(this)}/>
				</div>
				
			</div>
		)
	}
}
