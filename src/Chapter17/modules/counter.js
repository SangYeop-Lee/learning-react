import { createAction, handleActions } from 'redux-actions';

// Action type 정의
const INCREASE = 'counter/INCREASE';
const DECREASE = 'counter/DECREASE';

// Action 생성 함수 정의
// export const increase = () => ({ type: INCREASE });
// export const decrease = () => ({ type: DECREASE });

export const increase = createAction(INCREASE);
export const decrease = createAction(DECREASE);

// initState
const initialState = {
	number: 0
};

// reducer
// function counter (state = initialState, action) {
// 	switch (action.type) {
// 		case INCREASE:
// 			return {
// 				number: state.number + 1
// 			};
// 		case DECREASE:
// 			return {
// 				number: state.number - 1
// 			};
// 		default:
// 			return state;
// 	}
// }

const counter = handleActions(
	{
		[INCREASE]: (state, action) => ({ number: state.number + 1}),
		[DECREASE]: (state, action) => ({ number: state.number - 1}),
	},
	initialState,
);

export default counter;