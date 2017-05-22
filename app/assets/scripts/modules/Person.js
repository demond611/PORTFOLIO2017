function Person(name, favColor){
	this.name = name;
	this.favoritecolor = favColor;
	this.greet = function(){
		console.log("Hello, my name is "+this.name+" and I love the color "+this.favoritecolor);
	}
}

module.exports = Person;