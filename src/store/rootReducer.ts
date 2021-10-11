import { combineReducers } from 'redux';
import moodReducer from 'store/moods/moods.slice';

const rootReducer = combineReducers({
  moods: moodReducer,
});

export default rootReducer;
