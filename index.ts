// eslint-disable-next-line no-unused-vars
// eslint-disable-next-line no-unused-vars
import * as angular from 'angular';
import './src/app';

const component = () => {
    // eslint-disable-next-line angular/document-service
    const element = document.createElement('div');

    element.className = 'app';

    element.innerHTML = `<app></app>`;

    return element;
};

angular.element(() => {
    angular.bootstrap(document, ['appModule']);
});

// eslint-disable-next-line angular/document-service
document.body.appendChild(component());

console.log('a');