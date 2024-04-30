import util from 'util';

const firstName = "Rahmat";
const lastName = "Fadila";

// Cara baru
console.info(`Hello ${firstName} ${lastName}`);

// Cara lama
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Rahmat",
    lastName: "Fadila",
}

console.info(`Person: ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
