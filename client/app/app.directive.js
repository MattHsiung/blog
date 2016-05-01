import './app.sass';

export const appDirective = ()=> {
  return {
    template: `<div>
    <layout></layout>
    </div>`,
    restrict: 'E',
    scope: {},
    replace: true
  };
};