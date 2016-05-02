import './preview.sass';
import template from './preview.jade';
import {PreviewController as controller} from './preview.controller';
import $ from 'jquery'
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
    link: function (scope, el, attr, ctrl) {
    	ctrl.scroll = ()=>$(el).scrollTop(0);
	}
  };
};