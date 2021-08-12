
import { Suspense, lazy } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import { configureStore } from './redux/store';

const App = lazy(() => import(/* webpackChunkName: "app" */ './App'));

ReactDOM.render(
  <Provider store={configureStore()}>
  <Suspense fallback={<div className="loading" />}>
      <App />     
    </Suspense>
  </Provider>,
  document.getElementById('root')
);



