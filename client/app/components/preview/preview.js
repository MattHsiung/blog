import {previewDirective} from './preview.directive';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';

export const preview = angular.module('preview', [uiRouter, ngAnimate])
	.directive('preview', previewDirective)