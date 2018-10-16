import React,{Component} from 'react';
import './PriceItem.scss';
import store from '../../../store/store.js';

import Footer from '../Footer/Footer.js';
import Buy from '../Buy/Buy.js';
import Remark from '../Remark/Remark.js';


import i18 from '../../../static/img/i18.png';
export default class PriceItem extends Component{
	constructor(props){
		super(props);
		this.state={
			activeIndex:0,
			activeStyle:{
				color:'#f60'
			},
			isShow:{
				display:'block'
			},
			count:0,
			name:'lihaohua',
			home:'广西',
			age:19
		}
	}
	componentDidMount(){
		console.log('组件已经加载');
		this.setState({
			count:store.getState().count,
			name:store.getState().name,
			home:store.getState().home,
			age:store.getState().age,
		})
		console.log(this.props,'priceItem打印');
	}
	showMore(){
		console.log('6666')
		this.props.showMore();
	}
	changeMenu(val){
		this.setState({activeIndex:val});
	}
	add(){
		//触发增加方法修改store里面的count状态
		store.dispatch({
			type:'INCREASE',
			count1:100
		});
	}
	changeName(){
		store.dispatch({
			type:'CHANGE_NAME',
			name:'李浩华'
		});
	}
	
	render(){
		const activeIndex=this.state.activeIndex;
		const activeStyle=this.state.activeStyle;
		const isShow=this.state.isShow;
		const count=this.state.count;
		const name=this.state.name;
		const home=this.state.home;
		const age=this.state.age;
		store.subscribe(()=>{
			this.setState({
				count:store.getState().count,
				name:store.getState().name,
			})
		})
		return(
			<div className="single-price">
				<div className="item-top">
					<img src={i18}/>
					<div>
						<p>邮政奢侈品杂物包税特快专线--{count}</p>
						<span>L0115--{name}</span>
					</div>
				</div>
				<div className="send-something">
					<ul className="send-something-menu">
						<li onClick={this.changeMenu.bind(this,0)} style={activeIndex==0?activeStyle:null}><img src={i18}/><span>上门取货--{home}</span></li>
						<li onClick={this.changeMenu.bind(this,1)} style={activeIndex==1?activeStyle:null}><img src={i18}/><span>自动送仓--{age}</span></li>
					</ul>
					<div className="send-something-content">
						<div style={activeIndex==0?isShow:null}>
							<div className="item-middle">
								<Buy price='300'/>
								<Buy price={400}/>
							</div>
							<div className="item-bot">
								<Remark showMore={this.showMore.bind(this)}/>
							</div>
						</div>
						<div style={activeIndex==1?isShow:null}>
							<div className="item-middle">
								<Buy price={100}/>
								<Buy price={200}/>
							</div>
							<div className="item-bot">
								<Remark showMore={this.showMore.bind(this)}/>
							</div>
						</div>
					</div>
				</div>
				
				<button onClick={this.add.bind(this)}>加上</button>
				<button onClick={this.changeName.bind(this)}>修改名字</button>
			</div>
		)
	}
}
