import {layoutDirective} from './layout.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

export const layout = angular.module('layout', [uiRouter, ngAnimate])
	.directive('layout', layoutDirective)