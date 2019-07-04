import { all, fork } from 'redux-saga/effects';

let sagas = [];
const context = require.context('./', false, /(?<!spec)\.js$/);

context.keys()
  .filter(item => item !== './index.js')
  .forEach(key => {
    sagas = sagas.concat(context(key).default);
  });

export default function *rootSaga () {
  yield all(sagas.map(saga => fork(saga)));
}
