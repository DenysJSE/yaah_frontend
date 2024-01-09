import { createStore, combineReducers } from 'redux';
import { subjectReducer } from './lessons/selectSubject.ts';
import userReducer from './user/UserSlice.ts';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  subjects: subjectReducer,
  user: userReducer,
});

const store = createStore(rootReducer);

export default store;