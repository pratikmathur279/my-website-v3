import {
	GET_EXPERIENCE,
	GET_EXPERIENCE_SUCCESS,
	GET_EXPERIENCE_FAIL,
	GET_TECHNOLOGY,
	GET_TECHNOLOGY_SUCCESS,
	GET_TECHNOLOGY_FAIL,
	GET_SKILLS,
	GET_SKILLS_SUCCESS,
	GET_SKILLS_FAIL,
	GET_PROJECTS,
	GET_PROJECTS_SUCCESS,
	GET_PROJECTS_FAIL,
} from "./actionTypes";

export const getExperience = () => {
	return {
		type: GET_EXPERIENCE,
	};
};

export const getExperienceSuccess = (data) => {
	return {
		type: GET_EXPERIENCE_SUCCESS,
		payload: data,
	};
};

export const getExperienceFail = (error) => {
	return {
		type: GET_EXPERIENCE_FAIL,
		payload: error,
	};
};

export const getTechnology = () => {
	return {
		type: GET_TECHNOLOGY,
	};
};

export const getTechnologySuccess = (data) => {
	return {
		type: GET_TECHNOLOGY_SUCCESS,
		payload: data,
	};
};

export const getTechnologyFail = (error) => {
	return {
		type: GET_TECHNOLOGY_FAIL,
		payload: error,
	};
};

export const getSkills = () => {
	return {
		type: GET_SKILLS,
	};
};

export const getSkillsSuccess = (data) => {
	return {
		type: GET_SKILLS_SUCCESS,
		payload: data,
	};
};

export const getSkillsFail = (error) => {
	return {
		type: GET_SKILLS_FAIL,
		payload: error,
	};
};

export const getProjects = () => {
	return {
		type: GET_PROJECTS,
	};
};

export const getProjectsSuccess = (data) => {
	return {
		type: GET_PROJECTS_SUCCESS,
		payload: data,
	};
};

export const getProjectsFail = (error) => {
	return {
		type: GET_PROJECTS_FAIL,
		payload: error,
	};
};
