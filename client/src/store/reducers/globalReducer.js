import _ from "lodash";
import { v4 as uuidv4 } from "uuid";

let initialState = {
	skills: [],
	experience: [],
	technology: [],
	projects: [],
	education: [
		{
			id: uuidv4(),
			institution: "George Mason University",
			course: "Masters of Science in Information Systems",
			from: "August 2015",
			to: "May 2017",
		},
		{
			id: uuidv4(),
			institution: "Jawaharlal Nehru Technological University, Hyderabad",
			course:
				"Bachelor of Technology (B. Tech) in Computer Science and Engineering",
			from: "June 2011",
			to: "July 2015",
		},
	],
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
			let t1 = _.map(action.payload, (t) => {
				if (t.name == null) return null;
				return t.name;
			});

			let new_t1 = [...state.technology, ...t1];
			state.technology = [...new Set(new_t1)];

			return state;

		case "GET_PROJECTS_SUCCESS":
			state = {
				...state,
				projects: action.payload,
			};

			let t2 = _.map(state.projects, (t) => {
				if (t.technologies == null) return [];
				return t.technologies;
			});

			t2 = _.flatten(t2);

			let new_t2 = [...state.technology, ...t2];
			state = {
				...state,
				technology: [...new Set(new_t2)],
			};

			return state;
	}
	return state;
};

export default GlobalReducer;
