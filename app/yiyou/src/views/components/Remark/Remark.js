import React,{Component} from 'react';
import './Remark.scss';


import Footer from '../Footer/Footer.js';
import i18 from '../../../static/img/i18.png';
import i31 from '../../../static/img/i31.png';

import {ThemeContext} from '../../ShowPrice/ThemeContent.js';
function Test(props){
	return(
		<ThemeContext.Consumer>
	      {theme => (
	      	<div {...props}>
				<span style={{background:theme.background,color:theme.color}}>{theme.background}</span>
				<p onClick={()=>{theme.changeState('传递回去的参数')}} style={{color:theme.color,background:theme.background}}>{theme.color+'--'+theme.backgound}</p>
	      	</div>
	      )}
	    </ThemeContext.Consumer>
	)
}

export default class Remark extends Component{
	constructor(props){
		super(props);
		this.state={
			activeIndex:-1,
			menuStyle:{
				color:'#f60'
			},
			isShow:{
				display:'block'
			}
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
	}
	showMore(){
		console.log(this.props.showMore());
	}
	render(){
		const activeIndex=this.state.activeIndex;
		const menuStyle=this.state.menuStyle;
		const isShow=this.state.isShow;
		return(
			<div className="remark">
				<ul className="remark-menu">
					<li onClick={()=>this.setState({activeIndex:1})} style={activeIndex==1?menuStyle:null}><img src={i31}/><span>时间</span></li>
					<li onClick={()=>this.setState({activeIndex:2})} style={activeIndex==2?menuStyle:null}><img src={i31}/><span>需要打印</span></li>
					<li onClick={this.showMore.bind(this)}><img src={i31}/><span>更多信息</span></li>
				</ul>
				<div className="remark-content">
					<ul style={activeIndex==1?isShow:null} className="time-content">	
						<li><img src={i31}/><span>预计送达时间：5-12 工作日</span></li>
						<li><img src={i31}/><span>收集时间：周一至周五上午10:00至下午17:00 周一、周三晚上18:00-22:00（晚间取货仅限都柏林地区）</span></li>
					</ul>
					<ul style={activeIndex==2?isShow:null} className="print-content">
						<li><img src={i31}/><span>使用此服务, 您需要有打印机打印出标签并贴在箱子上, A4的打印机可以符合所有标签列印,完成订单确认后,可以选择以下尺寸进行打印:A4、A5 、标准标签列印。</span></li>
					</ul>
				</div>
				<Test/>
			</div>
		)
	}
}