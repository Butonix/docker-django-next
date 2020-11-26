import createSagaMiddleware from 'redux-saga';
import { createWrapper } from 'next-redux-wrapper';
import { applyMiddleware, createStore } from 'redux';

import rootSaga from './rootSaga';
import rootReducer from './rootReducer';

function store() {
	const sagaMiddleware = createSagaMiddleware();
	const storeInstance = createStore(
		rootReducer,
		applyMiddleware(sagaMiddleware),
	);

	sagaMiddleware.run(rootSaga);

	return storeInstance;
}

export const wrapper = createWrapper(store);
