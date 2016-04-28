import './app.sass';
import template from './app.jade';

export const appDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};