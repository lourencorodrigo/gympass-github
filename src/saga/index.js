import { all } from "redux-saga/effects";

import { repos } from "./repos";
import { commits } from "./commits";

export default function* root() {
  yield [all([...repos, ...commits])];
}
