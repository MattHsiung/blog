import _ from 'lodash';

const posts = ()=> {
	const state = {};

	const getAll = ()=> {
		return 'all'
	};

	const getOne = ()=> {
		return 'One'
	};
	const getState= ()=> {
		return 'state'
	};
	return {getAll, getOne, getState};
};

posts.$inject = [];

export {posts};