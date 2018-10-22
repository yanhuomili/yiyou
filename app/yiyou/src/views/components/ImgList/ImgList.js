import React, { Component } from 'react';
import './ImgList.scss';

export default class ImgList extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		console.log(this.props.imgList)
	}
	goBack(){
		console.log('goBack');
	}
	goHome(){
		
	}
  render() {
    return (
      	<div className="img-list">
      		{this.props.imgList.map((item,index)=><img key={index} src={item} />)}
      	</div>
    );
  }
}


