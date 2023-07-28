import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

let initialState = {
	skills: [],
	experience: [],
	technology: [],
	projects: [],
};

const GlobalReducer = (state = initialState, action) => {
	switch (action.type) {
		case "GET_SKILLS_SUCCESS":
			state = {
				...state,
				skills: action.payload,
			};

			return state;
		case "GET_EXPERIENCE_SUCCESS":
			state = {
				...state,
				experience: action.payload,
			};

			return state;
		case "GET_TECHNOLOGY_SUCCESS":
			state = {
				...state,
				technology: action.payload,
			};

			return state;

		case "GET_PROJECTS_SUCCESS":
			state = {
				...state,
				projects: action.payload,
			};

			return state;
	}
	return state;
};

export default GlobalReducer;
