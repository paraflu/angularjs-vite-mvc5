import * as angular from 'angular';
import { AppComponent } from './app.components';
import ComponentsModule from './components/index';

const appModule = angular
    .module('appModule', [
        ComponentsModule
    ])
    .run(function () {
        console.log('run function');
    })
    .component('app', AppComponent);

export default appModule;