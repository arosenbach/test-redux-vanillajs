import "./styles.css";
import { createStore, applyMiddleware, compose} from 'redux';
import reducer from './reducers/index';
import {addTodo, pinApp, unpinApp} from './actions';
import { logger } from './middlewares'



const pinnedAppsEl = document.getElementById("pinnedApps");
const handleChange = () => {
  const state = store.getState();
  const appIds = state.pinnedApps;
  const txt = state.text;
  pinnedAppsEl.innerHTML = appIds;
};

const store = createStore(reducer, applyMiddleware(logger));
console.log('init state',store.getState());

const unsubscribe = store.subscribe(handleChange);

store.dispatch(addTodo('HELLO'));
// unsubscribe();
store.dispatch(pinApp(1));
// unsubscribe();
store.dispatch(pinApp(2));
// unsubscribe();
store.dispatch(unpinApp(3));
unsubscribe();

function select(state) {
  return state.pinnedApps;
}

// let currentValue;
// function handleChange() {
//   let previousValue = currentValue;
//   currentValue = select(store.getState());

//   if (previousValue !== currentValue) {
//     console.log(
//       'Some deep nested property changed from',
//       previousValue,
//       'to',
//       currentValue
//     )
//   }
// }


