import _ from 'lodash';

const posts = ()=> {
	const state = [
		{
			id: 1,
			title: '5 Things I Wish I Knew About Angular',
			subtitle: 'With the vast knowledge of information out there sometimes its hard to know whats good and what isnt.',
			date: Date.now(),
			author: 'Matt Hsiung',
			tags: 'Angular Javascript Es6',
			intro: 'Some sort of intro',
			sections: [
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				},
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				},
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				}
			]
		},{
			id: 2,
			title: '5 Things I Wish I Knew About Angular',
			subtitle: 'With the vast knowledge of information out there sometimes its hard to know whats good and what isnt.',
			date: Date.now(),
			author: 'Matt Hsiung',
			tags: 'Angular Javascript Es6',
			intro: 'Some sort of intro',
			sections: [
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				},
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				},
				{
					title: '1. Controller As',
					content: 'Controller as can be very helpul...',
					code: 'controllerAs: "vm"'
				}
			]
		}
	];

	const getAll = ()=> {
		return 'all'
	};

	const getOne = ()=> {
		return 'One'
	};
	const getState= ()=> {
		return state
	};
	return {getAll, getOne, getState};
};

posts.$inject = [];

export {posts};