var $ = require('jquery'); // ADD JQUERY FUNCTIONALITY

var Person = require('./modules/Person');


var robert = new Person('Robert', 'orange');
robert.greet();

var sha = new Person('Sha', 'purple');
sha.greet();