//use const where variable values do not change
const a1 = 5;
const b1: number = 33;
const c1 ="best";

//I suggest use let instead of var everywhere, 
//becuase let has blocked scope
if (true) {
	let z = 4;
	//use z
}
else {
	let z = "string";
	//use z
}
// console.log("let: " + z);// Error: z is not defined in this scope