import { createStore, combineReducers } from 'redux';
import { subjectReducer } from './lessons/selectSubject.ts';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  subjects: subjectReducer
});

const store = createStore(rootReducer);

export default store;