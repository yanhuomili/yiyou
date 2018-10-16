const initialState={
	count:10,
	name:'lili',
	home:'广州',
	age:20,
	hobby:['yumaoqiu','篮球']
}

const reducer=(state=initialState,action)=>{
	switch (action.type){
		case 'INCREASE':
			return {
				...state,
				count:state.count+action.count1
			}
		case 'CHANGE_NAME':
			return {
				...state,
				name:action.name
			}
		default:
			return initialState;
	}
}

export const changeHome=(state=initialState,action)=>{
	return{
		...state,
		home:action.home
	}
}
export default reducer;