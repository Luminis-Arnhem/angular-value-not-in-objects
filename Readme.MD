#Usage
Include dist/js/angular-value-not-in-objects.js in your project

```javascript
var app = angular.module('exampleApp', ['value-not-in-objects']);
```

Optionally when using typescript:
```javascript
/// <reference path="../dist/ts/angular-value-not-in-objects.ts" />
var app = angular.module('exampleApp', ['value-not-in-objects']);
```

If you're using typescript you should include this package in your build process so you can compile it to the desired ECMAScript version. The default JavaScript file is compiled in ECMAScript 5.

#Features
```html
<input value-not-in-objects="example.List" value-not-in-objects-key="PropertyName" value-not-in-objects-allow-id="someId" ng-model="Value" />
```

This directive gives a validation error when 'example.List' contains an object where the property with 'PropertyName' as name is equal to the value in ng-model. 

The 'value-not-in-objects-allow-id' is optional. When you use the 'value-not-in-objects-allow-id'-attribute every object in 'example.List' should have a property called id. 

The object with id 'someId' will be ignored during validation.

```html
<input value-not-in-objects="example.List" value-not-in-objects-key="PropertyName" value-not-in-objects-allow-id="someId" value-not-in-objects-allow-property="key" ng-model="Value" />
```
This example is almost the same  as the previous one but this example introduces the 'value-not-in-objects-allow-property'-attribute.

In this example every object in example.list should have a property named key.

The key property now has the same function as the id in the previous example.

#Install
In the terminal navigate to your project folder and execute the following command: "bower install angular-value-not-in-objects".

Reference '/bower_components/angular-value-not-in-objects/dist/angular-value-not-in-objects.js' in your index.html file.

For TypeScript projects:

If you haven't installed TypeScript Definition Manager, install it.
http://definitelytyped.org/tsd/

If you have not executed tsd init, execute 'tsd init' in the root folder of your project.

Execute tsd link in the root folder of your project.

#Develop
npm install

bower install

tsd install

#Release

(Do #Develop steps first)

gulp

#Dependencies
AngularJS: >= 1.2.26