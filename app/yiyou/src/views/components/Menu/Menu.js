import React, { Component } from 'react';
import './Menu.scss';

export default class Menu extends Component {
	constructor(props){
		super(props);
	}
	componentDidMount() {
		console.log(this.props.menu)
	}
	goBack(){
		console.log('goBack');
	}
	clickItem(val){
		console.log(val);
	}
  render() {
  	const menu=this.props.menu;
    return (
      	<div className="menu">
      		{menu.map((item,index)=>
      			<div key={index} className="out">
      				<h2 onClick={this.clickItem.bind(this,item)}>{item.title}</h2>
	      			<ul>
	      				{item.innerList.map((innerItem,innerIndex)=><li key={innerIndex}>{innerItem}</li>)}
	      			</ul>
	      		</div>
      		)}
      		
      	</div>
    );
  }
}


