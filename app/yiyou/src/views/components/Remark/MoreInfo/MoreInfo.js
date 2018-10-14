import React,{Component} from 'react';
import './MoreInfo.scss';


import i18 from '../../../../static/img/i18.png';
import i31 from '../../../../static/img/i31.png';

function InfoTip(props){
	return(
		<div className="tip-wrap">
			<div className="tip-top">
				<img src={i31}/>
				<h5>预计交货:</h5>
			</div>
			<ul className="top-list">
				<li>预计送达时间：4-10 个工作日</li>
				<li>收集时间：周一至周五上午10:00至下午17:00，周三、周五晚上18:00-22:00</li>
			</ul>
		</div>
	)
}

export default class MoreInfo extends Component{
	constructor(props){
		super(props);
		this.state={
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	closeHandler(){
		this.props.closeHandler();
	}
	buySafeBtn(){
		this.props.buySafeHandler();
	}
	unBuySafeBtn(){
		this.props.unBuySafeHandler();
	}
	render(){
		return(
			<div className="more-info">
				<div className="more-info-top">
					<img src={i31}/>
					<span onClick={this.closeHandler.bind(this)}>关闭</span>
				</div>
				<div className="more-info-content">
					<InfoTip/>
					<InfoTip/>
					<InfoTip/>
					<InfoTip/>
					<InfoTip/>
				</div>
				<div className="insurance-btns">
					<span onClick={this.buySafeBtn.bind(this)} className="need">购买额外保险</span>
					<span onClick={this.unBuySafeBtn.bind(this)} className="un-need">无需购买额外保险</span>
				</div>
				
			</div>
		)
	}
}
