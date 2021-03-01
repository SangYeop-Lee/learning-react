import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Counter from '../components/Counter';
// Action 생성함수
import { increase, decrease } from '../modules/counter';

// Container에서는 컴포넌트, 컴포넌트에 넘겨주는 props를 모두 관리한다.

// 컴포넌트
const CounterContainer = ({ number, increase, decrease }) => {
	return <Counter number={number} onIncrease={increase} onDecrease={decrease} />;
};

export default connect(
	state => ({
		number: state.counter.number,
	}), {
		increase,
		decrease,
	},
)(CounterContainer);

// // store의 state를 컴포넌트에 props로 넘겨주는 것
// const mapStateToProps = state => ({
// 	number: state.counter.number,
// });

// // store의 reducerCaller(dispatch)를 컴포넌트에 props로 넘겨주는 것
// const mapDispatchToProps = dispatch => ({
// 	increase: () => {
// 		dispatch(increase());
// 	},
// 	decrease: () => {
// 		dispatch(decrease());
// 	}
// });

// // connect는 redux와 연결점이 있는 컴포넌트를 반환합니다.
// export default connect(
// 	mapStateToProps,
// 	mapDispatchToProps
// )(CounterContainer);