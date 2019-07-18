import { combineReducers } from "redux";

import { repos } from "./repos";
import { commits } from "./commits";

export default combineReducers({
  repos,
  commits
});
