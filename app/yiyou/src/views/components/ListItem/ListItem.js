import React, { Component } from 'react';
import './ListItem.scss';

import NewDetail from '../../NewDetail/NewDetail.js';

export default class ListItem extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		console.log(this.props.listItem)
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
	goNewDetail(){
		console.log('跳转新闻详情');
		window.location.href="/newDetail";
		
	}
  render() {
    return (
      	<div className="list-item" onClick={this.goNewDetail.bind(this)}>
      		<img className="left-img" src={this.props.listItem.src}/>
      		<div className="right">
      			<div className="title">
      				{this.props.listItem.title}
      			</div>
      			<div className="text">
      				{this.props.listItem.text}
      			</div>
      			<div className="time">
      				<span>2018-9-10</span>
      				<span>09:12:12</span>
      			</div>
      		</div>
      	</div>
    );
  }
}


