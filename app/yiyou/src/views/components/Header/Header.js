import React,{Component} from 'react';
import './Header.scss';
import {NavBar,Icon} from 'antd-mobile';
import {Link} from 'react-router-dom';
import logo from '../../../static/img/logo.png';

export default class Header extends Component{
	constructor(props){
		super(props);
		this.state={}
	}
	componentDidMount(){
		
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
	render(){
		return(
			<NavBar style={{borderBottom:'1px solid #ddd'}}
		      mode="light"
		      icon={<Icon type="left" />}
		      onLeftClick={this.goBack.bind(this)}
		      rightContent={[<Icon key="0" type="ellipsis" />]}>
      			<Link to="/home">
      				<img onClick={this.goHome.bind(this)} className="logo" src={logo}/>
      			</Link>
      		</NavBar>
		)
	}
}
