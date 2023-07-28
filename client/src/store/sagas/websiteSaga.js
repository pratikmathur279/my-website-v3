import { takeLatest, put, call } from "redux-saga/effects";

import axios from "axios";

import {
	GET_EXPERIENCE,
	GET_TECHNOLOGY,
	GET_SKILLS,
	GET_PROJECTS,
} from "../../actions/actionTypes.js";
import {
	getExperienceFail,
	getExperienceSuccess,
	getTechnologyFail,
	getTechnologySuccess,
	getSkillsFail,
	getSkillsSuccess,
	getProjectsSuccess,
	getProjectsFail,
} from "../../actions/website.js";

function* onGetSkills() {
	try {
		const response = yield axios.get("/api/skills");
		var data = response.data;
		data.sort((a, b) => (a.index > b.index ? 1 : -1));

		yield put(getSkillsSuccess(data));
	} catch (error) {
		yield put(getSkillsFail(error));
	}
}

function* onGetExperience() {
	try {
		const response = yield axios.get("/api/experiences");
		var data = response.data;

		for (var i in data) {
			var temp = data[i].responsibilities;
			temp = temp.split(";");
			data[i].responsibilities = temp;
			if (i == data.length - 1) {
				data.sort((a, b) => (a.index > b.index ? 1 : -1));
			}
		}

		yield put(getExperienceSuccess(data));
	} catch (error) {
		console.log(error);
		yield put(getExperienceFail(error));
	}
}

function* onGetTechnology() {
	try {
		const response = yield axios.get("/api/technology");
		var data = response.data;
		data.sort((a, b) => (a.index > b.index ? 1 : -1));

		var split = createColumns(data);

		yield put(getTechnologySuccess(split));
	} catch (error) {
		console.log(error);
		yield put(getTechnologyFail(error));
	}
}

function* onGetProjects() {
	try {
		const response = yield axios.get("/api/projects");
		var data = response.data;
		data.sort((a, b) => (a.index > b.index ? 1 : -1));

		yield put(getProjectsSuccess(data));
	} catch (error) {
		console.log(error);
		yield put(getProjectsFail(error));
	}
}

function createColumns(data) {
	let arr = [];
	arr[0] = [];
	arr[1] = [];
	data.forEach((el) => {
		if (el.type == "Day-to-day comfort") {
			arr[0].push(el);
		} else {
			arr[1].push(el);
		}
	});

	return arr;
}

function* WebsiteSaga() {
	yield takeLatest(GET_EXPERIENCE, onGetExperience);
	yield takeLatest(GET_TECHNOLOGY, onGetTechnology);
	yield takeLatest(GET_SKILLS, onGetSkills);
	yield takeLatest(GET_PROJECTS, onGetProjects);
}

export default WebsiteSaga;
