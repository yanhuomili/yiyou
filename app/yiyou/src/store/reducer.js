export function add(state={n:10},action){
	console.log(state,'reducer方法中打印');
	return state.n+1;
}
export function del(state={n:10},action){
	return state.n-1;
}
export function change(state={n:10},action){
	return state.n+10;
}
