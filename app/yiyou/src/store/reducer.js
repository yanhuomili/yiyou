import { combineReducers } from 'redux'
export const initialState={
	count:10,
	name:'lili',
	home:'广州',
	age:20,
	hobby:['yumaoqiu','篮球']
}

export const reducer=(state=initialState,action)=>{
	switch (action.type){
		case 'INCREASE':
			return {
				...state,
				count:state.count+action.count1
			}
//		case 'CHANGE_NAME':
//			return {
//				...state,
//				name:action.name
//			}
		case 'CHANGE_HOME':
			return{
					...state,
					home:action.home
				}
		default:
			return state;
	}
}
console.log(reducer,'combineReducers')
const changeHobby=(state=initialState,action)=>{
	switch (action.type){
		case 'CHANGE_HOBBY':
			return{
					...state,
					hobby:action.hobby
				}
		default:
			return state;
	}
}

const changeName=(state=initialState,action)=>{
	switch (action.type){
		case 'CHANGE_NAME':
			return{
					...state,
					name:action.name
				}
		default:
			return state;//这里要写state,而不是写initialState
	}
	
}


let outer=combineReducers({changeHobby,reducer,changeName});
console.log(outer,'outer')
export default outer;