import { combineReducers } from 'redux'
import todos from './todos'
import counter from './counter'
import pinnedApps from './pinnedApps'

export default combineReducers({
  todos,
  counter,
  pinnedApps
})