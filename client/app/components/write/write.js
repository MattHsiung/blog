import {writeDirective} from './write.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const write = angular.module('write', [uiRouter])
	.config(function($stateProvider) {
	  $stateProvider.state('write', {
	    url: '/write',
	    template: '<write></write>',
	    controller: function(){
	    },
	    resolve:{
	    }
	  });
	})
	.directive('write', writeDirective)