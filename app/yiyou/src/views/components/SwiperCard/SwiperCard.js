import React, { Component } from 'react';
import './SwiperCard.scss';
import i19 from '../../../static/img/i19.png';
import ban3 from '../../../static/img/ban3.jpg';

export default class SwiperCard extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		console.log(this.props.cardItem)
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
  render() {
    return (
      	<div className="swiper-card">
      		<img className="ban" src={this.props.cardItem.banSrc}style={{ width: '100%', verticalAlign: 'top' }}/>
      		<div className="content">
	      		<div className="title">
	      			<img className="title-icon" src={this.props.cardItem.icon} alt="icon"/>
	      			<span>{this.props.cardItem.title}</span>
	      		</div>
	      		<div className="text">
	      			{this.props.cardItem.text}
	      		</div>
      		</div>
      	</div>
    );
  }
}


