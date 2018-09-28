import React, { Component } from 'react';
import './Menu.scss';

export default class Menu extends Component {
	constructor(props){
		super(props);
		this.state={
			
		}
	}
	componentDidMount() {
		console.log(this.props.menu)
	}
	goBack(){
		console.log('goBack');
	}
	clickItem(val,event){
		console.log(val);
		let h=event.target.nextElementSibling.style.height;
		console.log(h);
		if(h=='0px'||h==0){
			event.target.nextElementSibling.style.height='auto'
			event.target.firstElementChild.style.transform='translateY(-50%) rotateZ(-135deg)';
		}else{
			event.target.nextElementSibling.style.height='0px';
			event.target.firstElementChild.style.transform='translateY(-50%) rotateZ(45deg)';
			
		}
	}
	clickMenu(val){
		console.log(val);
	}
  render() {
  	const menu=this.props.menu;
    return (
      	<div className="menu">
      		{menu.map((item,index)=>
      			<div key={index} className="out">
      				<h2 onClick={this.clickItem.bind(this,item)}>{item.title}<span></span></h2>
	      			<ul>
	      				{item.innerList.map((innerItem,innerIndex)=><li onClick={this.clickMenu.bind(this,innerItem)} key={innerIndex}>{innerItem}</li>)}
	      			</ul>
	      		</div>
      		)}
      		
      	</div>
    );
  }
}


