import './layout.sass';
import template from './layout.jade';

export const layoutDirective = ()=> {
  return {
    template,
    restrict: 'E',
    scope: {},
    replace: true
  };
};