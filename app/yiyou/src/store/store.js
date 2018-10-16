import {combineReducers,createStore} from 'redux';
import reducer from './reducer.js';

//const reducersHandler=combineReducers(reducers);

const store=createStore(reducer);
export default store;

//function counter(state=0,action){
//	switch (action.type){
//		case increment:
//			return state+1;
//		case decrement:
//			return state-1;
//		default:
//			return state;
//	}
//}
//const store=createStore(counter);
//store.subscribe(()=>{
//	console.log(store.getState());
//})
//
////调用某个action方法：
//store.dispatch({type:'increment'});
//store.dispatch({type:'increment'});
//store.dispatch({type:'decrement'});
//
//
//const a=function(text){
//	return dispatch({type:'123456'});
//}
