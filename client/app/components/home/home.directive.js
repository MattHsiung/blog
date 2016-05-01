import './home.sass';
import template from './home.jade';

export const homeDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {
    	posts: "="
    },
    replace: true
  };
};