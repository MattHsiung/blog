import {ref} from './ref';
import {posts} from './posts';
import angular from 'angular';

export const shared = angular.module('shared', [])
  .constant('REF', ref)
  .factory('Posts', posts)
