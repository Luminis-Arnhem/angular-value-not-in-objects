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

```html
<input value-not-in-objects="example.List" value-not-in-objects-key="PropertyName" value-not-in-objects-allow-value="someId" value-not-in-objects-allow-key="key" ng-model="Value" />
```
This example also contains the value-not-in-objects-allow-value and value-not-in-objects-allow-key-attributes. You need these attributes when you copied an object from the list.

value-not-in-objects-allow-key defines a property-name of a property in the list of objects.

value-not-in-objects-allow-value defines a value that is or could be the value of the property defined in value-not-in-objects-allow-key.

The object with the value defined in value-not-in-objects-allow-value, in the property with the name defined in value-not-in-objects-allow-key, will be ignored during validation.

See the example folder for a complete example.

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