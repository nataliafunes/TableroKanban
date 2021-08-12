import {
    all,
    call,
    fork,
    put,  
    takeLatest,
  } from 'redux-saga/effects';
  import {
    GET_TASKS
  } from '../actions';  
  import { toDoTasks } from '../../AdmTareas/_mock/toDo.json';
  import { setTasks } from './action';  

  const getTasksPersistidas = async () => { 
    return toDoTasks;
  };

  function* getTasksSaga():any {  
    const tasks :any = yield call(getTasksPersistidas);
    if ( tasks ) {
      const tasksUpdated = tasks.map(
        (item:any) => {
          return { ...item};
        }
      );
      yield put(setTasks(tasksUpdated));
    } else {
      yield put(setTasks([]));
    }
  } 
  
  export function* watchFetchGetTasks() {
    yield takeLatest(GET_TASKS, getTasksSaga);
  } 

  export default function* rootSaga() {
    yield all([
       fork(watchFetchGetTasks),      
    ]);
  }