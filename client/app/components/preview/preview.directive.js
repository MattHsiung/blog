import './preview.sass';
import template from './preview.jade';
import {PreviewController as controller} from './preview.controller';

export const previewDirective = ()=> {
  return {
    template,
    controller,
    controllerAs: 'vm',
    restrict: 'E',
    replace: true,
    scope: {
    	post: "="
    },
    bindToController: true,
    link: function (scope, el, attr) {
	}
  };
};