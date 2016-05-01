// import './post.sass';
import template from './post.jade';

export const postDirective = ()=> {
  return {
    template,
    controller: function(){},
    controllerAs: 'vm',
    scope: {
      post: '='
    },
    bindToController: true,
    restrict: 'E',
    replace: true
  };
};