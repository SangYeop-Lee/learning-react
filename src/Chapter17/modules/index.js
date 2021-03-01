import todos from './todos';
import counter from './counter';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
	counter,
	todos,
})

export default rootReducer;