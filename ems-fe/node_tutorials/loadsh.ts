// dropRight in use 
// dropRight takes in an array and then the amount of numbers to drop as arguments
console.log(_.dropRight([1, 2, 3, 4, 5], 2));
console.log(_.dropRight(['cat', 'dog', 'rabbit', 'horse'], 1));

// dropRight type definition
dropRight<T>(array: List<T> | null | undefined, n?: number): T[];