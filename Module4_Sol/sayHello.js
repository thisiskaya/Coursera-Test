


(function(window){
	var greeter={};
	var greeting="Hello ";
	
	greeter.sayHello=function(name){
		greeter.name=name;
		console.log(greeting+greeter.name);
	}
	window.greeter=greeter;

})(window);