var $ = require('jquery'); // ADD JQUERY FUNCTIONALITY

//var Person = require('./modules/Person');	// NODE WAY TO IMPORT
import Person from './modules/Person'		// ES6 WAY TO IMPORT

class Adult extends Person {

	payTaxes(){
		console.log(this.name+" owes nothing in taxes.");
	}

}


var robert = new Person('Robert', 'orange');
robert.greet();

var sha = new Adult('Sha', 'lavender');
sha.greet();
sha.payTaxes();