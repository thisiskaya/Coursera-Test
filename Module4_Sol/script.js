var array=["Keya","junaid","Suborna","Saad","Jenny"];
var i;
for(i=0;i<array.length;i++){
	if(array[i].charAt(0)=="j" || array[i].charAt(0).toUpperCase()=="J")
		{greeter2.sayGoodbye(array[i]);}
	else
		{greeter.sayHello(array[i]);}
}