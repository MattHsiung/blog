import {homeDirective} from './home.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

export const home = angular.module('home', [uiRouter, ngAnimate])
	.config(function($stateProvider, $urlRouterProvider) {
	  $urlRouterProvider.otherwise('/');
	  $stateProvider.state('home', {
	    url: '/',
	    template: '<home posts="posts"></home>',
	    controller: function($scope, posts){
	    	$scope.posts = posts
	    },
	    resolve: {
	    	posts: function(){
	    		return [1,2,3,4];
	    	}
	    }
	  });
	})
	.directive('home', homeDirective)