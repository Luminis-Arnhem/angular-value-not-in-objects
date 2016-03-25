#Usage
Include dist/js/angular-value-not-in-objects.js in your project

Optionally add typescript definition file dist/typings/angular-value-not-in-objects.d.ts
```javascript
var app = angular.module('exampleApp', ['value-not-in-objects']);
```

#Features
```html
<input value-not-in-objects="example.List" value-not-in-objects-key="PropertyName" value-not-in-objects-allow-id="someId" ng-model="Value" />
```

This directive gives a validation error when 'example.List' contains an object where the property with 'PropertyName' as name is equal to the value in ng-model. The 'value-not-in-objects-allow-id' is optional. When you use the 'value-not-in-objects-allow-id'-attribute every object in 'example.List' should have a property called id. The object with id 'someId' will be ignored during validation.

#Install
from filesystem
The bower package must be a git repository. If it isn't go to your terminal and navigate to your bower package. Execute git init.

In the terminal navigate to your project folder and execute the following command: "bower install C:\absolute\path\to\local\bower\package".

Reference '/bower_components/angular-value-not-in-objects/dist/angular-value-not-in-objects.js' in your HTML.

#Develop
npm install

bower install

tsd install

#Release

(Do #Develop steps first)
gulp

