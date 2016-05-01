// import './post.sass';
import template from './write.jade';

export const writeDirective = ()=> {
  return {
    template,
    controller: function(){},
    controllerAs: 'vm',
    scope: {},
    bindToController: true,
    restrict: 'E',
    replace: true
  };
};