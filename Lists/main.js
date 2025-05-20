var names = ["John", "Jane", "Jim", "Jill"];
console.log("Names: ", names);
var numbers = [1, 2, 3, 4, 5];
console.log("Numbers: ", numbers);
var mixed = ["John", 1, "Jane", 2, "Jim", 3, "Jill", 4];
console.log("Mixed: ", mixed);
var people = [
    { name: "Miranda", age: 30 },
    { name: "Jane", age: 25 },
    { name: "Jim", age: 35 },
    { name: "Jill", age: 40 },
];
console.log("People: ", people);
people.push({ name: "John", age: 30 });
console.log("People after push: ", people);
var personTuple = ["John", 30];
console.log("Person Tuple: ", personTuple);
var peopleTuple = [];
peopleTuple.push(["Miranda", 30]);
peopleTuple.push(["Jane", 25]);
peopleTuple.push(["Jim", 35]);
peopleTuple.push(["Jill", 40]);
console.log("People Tuple: ", peopleTuple);
// ENUMS
var Weekdays;
(function (Weekdays) {
    Weekdays[Weekdays["Monday"] = 0] = "Monday";
    Weekdays[Weekdays["Tuesday"] = 1] = "Tuesday";
    Weekdays[Weekdays["Wednesday"] = 2] = "Wednesday";
    Weekdays[Weekdays["Thursday"] = 3] = "Thursday";
    Weekdays[Weekdays["Friday"] = 4] = "Friday";
})(Weekdays || (Weekdays = {}));
var day = Weekdays.Monday;
console.log("Day: ", Weekdays[day]);
day = Weekdays.Tuesday;
console.log("Day: ", Weekdays[day]);
