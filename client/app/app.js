//DEPENDENCIES
import './todos.js'
import 'normalize.css';
import 'angular-material/angular-material.css';
import angular from 'angular';
import uiRouter from 'angular-ui-router';
import ngAnimate from 'angular-animate';
import ngMaterial from 'angular-material';
//MODULES
import {appDirective} from './app.directive';
import {layout} from './components/layout/layout';
import {preview} from './components/preview/preview';
import {home} from './components/home/home';
import {post} from './components/post/post';
import {shared} from './shared/shared';
import {write} from './components/write/write';
angular.module('app', [
  uiRouter,
  ngAnimate,
  ngMaterial,
  layout.name,
  preview.name,
  home.name,
  shared.name,
  post.name,
  write.name
])
.config(function($mdThemingProvider) {
  $mdThemingProvider.theme('default')
    .primaryPalette('blue')
    .accentPalette('red');
})
.directive('app', appDirective);