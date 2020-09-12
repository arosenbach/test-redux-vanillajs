import { combineReducers } from "redux";

import pinnedApps from "./pinnedApps";
import apps from "./apps";

export default combineReducers({
  pinnedApps,
  apps
});
