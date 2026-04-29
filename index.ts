// 1. Number Manipulation

const doubleNumber = (num: number): number => {
  return num * 2;
};

const squareNumber = (num: number): number => {
  return num * num;
};

// 2. Boolean Logic

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

const isAdult = (age: number): boolean => {
  return age >= 18;
};

// 3. String Manipulation

const reverseString = (text: string): string => {
  return text.split("").reverse().join("");
};

const capitalizeString = (text: string): string => {
  if (text.length === 0) return "";
  return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
};

// 4. Usage / Testing

console.log("Double 5:", doubleNumber(5)); // 10
console.log("Square 4:", squareNumber(4)); // 16

console.log("Is 10 even?:", isEven(10)); // true
console.log("Is 7 even?:", isEven(7)); // false

console.log("Is 20 adult?:", isAdult(20)); // true
console.log("Is 16 adult?:", isAdult(16)); // false

console.log("Reverse 'hello':", reverseString("hello")); // olleh
console.log("Capitalize 'jorge':", capitalizeString("jorge")); // Jorge