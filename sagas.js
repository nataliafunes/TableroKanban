import { all } from 'redux-saga/effects';
import admTareasReducerSagas from './Adm-tareas/saga.ts';

export default function* rootSaga() {
  yield all([
   admTareasReducerSagas()
  ]);
}
