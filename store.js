import { createStore, applyMiddleware, compose } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducers from './reducers';
import sagas from './sagas';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export function configureStore(initialState) {
  const store = createStore(
    reducers,
    initialState,
    composeWithDevTools() ? compose(applyMiddleware(...middlewares), composeWithDevTools()) 
                          : compose(applyMiddleware(...middlewares))
  );

  sagaMiddleware.run(sagas);
  return store;
}
