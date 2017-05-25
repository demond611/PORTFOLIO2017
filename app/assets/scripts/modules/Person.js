class Person{
	
	constructor(name, favColor){
		this.name = name;
		this.favoritecolor = favColor;
	}

	
	greet(){
		console.log("Yo yo yo, my name is "+this.name+" and I love the color "+this.favoritecolor);
	}
}

//module.exports = Person;	// NODE WAY TO EXPORT
export default Person;		// ES6 WAY TO EXPORT