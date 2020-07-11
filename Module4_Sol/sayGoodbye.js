
(function(window){
	var greeter2={};
	var greeting="Goodbye ";
	greeter2.sayGoodbye=function(name){
		greeter2.name=name;
		console.log(greeting+greeter2.name);
	}
	window.greeter2=greeter2;

})(window);