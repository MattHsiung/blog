import {postDirective} from './post.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';

export const post = angular.module('post', [uiRouter])
	.config(function($stateProvider) {
	  $stateProvider.state('post', {
	    url: '/post/:title',
	    template: '<post post="post"></post>',
	    controller: function($scope, post, $sce){
	    	$scope.post =  $sce.trustAsHtml(post);
	    },
	    resolve:{
	    	post: function(Posts, $stateParams){
	    		let {title} = $stateParams;
	    		return `<div>
	    			<h1>${Posts.getOne()}</h1>
	    			<h1>${Posts.getAll()}</h1>
	    			<h1>${Posts.getState()}</h1>
	    		</div>`
	    	}
	    }
	  });
	})
	.directive('post', postDirective)