let names: string[] = ["John", "Jane", "Jim", "Jill"];
console.log("Names: ", names);

let numbers: number[] = [1, 2, 3, 4, 5];
console.log("Numbers: ", numbers);

let mixed: (string | number)[] = ["John", 1, "Jane", 2, "Jim", 3, "Jill", 4];
console.log("Mixed: ", mixed);

interface Person {
  name: string;
  age: number;
}

let people: Person[] = [
  { name: "Miranda", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Jim", age: 35 },
  { name: "Jill", age: 40 },
];

console.log("People: ", people);

people.push({ name: "John", age: 30 });
console.log("People after push: ", people);

let personTuple: [string, number] = ["John", 30];
console.log("Person Tuple: ", personTuple);

let peopleTuple: [string, number][] = [];

peopleTuple.push(["Miranda", 30]);
peopleTuple.push(["Jane", 25]);
peopleTuple.push(["Jim", 35]);
peopleTuple.push(["Jill", 40]);

console.log("People Tuple: ", peopleTuple);

// ENUMS
enum Weekdays {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}

let day: Weekdays = Weekdays.Monday;
console.log("Day: ", Weekdays[day]);

day = Weekdays.Tuesday;
console.log("Day: ", Weekdays[day]);
