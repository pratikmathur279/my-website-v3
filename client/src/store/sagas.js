import { all, call, fork, take, takeEvery, spawn } from "redux-saga/effects";

import WebsiteSaga from "./sagas/websiteSaga.js";

export default function* rootSaga() {
	yield spawn(WebsiteSaga);
}
