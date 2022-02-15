class person {
    constructor(firstname, lastname, age, birthdate, address) {
        this.firstname = firstname;
        this.lastname = lastname;
        this.age = age;
        this.birthdate = birthdate;
        this.address = address;
    }

    get Birthdate() {
        return this.birthdate;
    }

    set Birthdate(inputBirthdate) {
        if (inputBirthdate < Date.now) {
            this.birthdate = inputBirthdate;
        }
    }

    get Address() { //wenn so geschrieben kann man das dann ohne 'get' aufrufen -> hier nur personOne.Adress
        return this.address;
    }

    get FullName() {
        return this.firstname + ' ' + this.lastname;
    }

    get Greeting() {
        let greeting = "Hallo";
        return `${greeting} ${this.FullName}!`;
    }

    getGreetingTwo(greeting = "Salve") {
        return `${greeting} ${this.firstname} ${this.lastname}!`;
    }
}

let personOne = new person(
    'Hans',
    'Zimmer',
    55,
    new Date(1957, 04, 22),
    'Vienna');


console.log(personOne.address);
let addressTest = personOne.Address;
console.log(`Adresse: ${addressTest}`);

class address {
    constructor(street, city, zipCode, countryCode) {
        this.street = street;
        this.city = city;
        this.zipCode = zipCode;
        this.countryCode = countryCode;
    }
}

let personTwoAddress = new address('Zimmerstraße', 'Vienna', 3000, 'AT');
let personTwo = new person(
    'Hans',
    'Zimmer',
    55,
    new Date(1957, 04, 22),
    personTwoAddress
);

let personTwoFullName = personTwo.FullName;
console.log(`Die Heimatstadt von ${personTwoFullName} ist ${personTwo.address.city}`);

console.log(personTwo.Greeting);

let personThree = new person(
    'Max',
    'Muster',
    33,
    new Date(1999, 12, 12),
    new address(
        'Musterstraße',
        'Musterstadt',
        4455,
        'DE'
    )
);

let personFour = new person(
    'Sandra',
    'Simulation',
    29,
    new Date(1999, 12, 12),
    new address(
        'Simstraße',
        'Simstadt',
        4455,
        'AT'
    )
);

let allPersons = [
    personTwo,
    personThree,
    personFour
]

const personsFromATSortedByName = allPersons
    .filter(person => person.address.countryCode === 'AT')
    .sort((person1, person2) => person1.lastname.localeCompare(person2.lastname))
    .map(person => person.FullName)
    .join(", ");

console.log(personsFromATSortedByName);

console.log(personFour.getGreetingTwo());

const personsOverThirtySortedByAge = allPersons
    .filter(person => person.age > 30)
    .sort((person1, person2) => person1.age - person2.age)
    .map(person => person.FullName)
    .join(" / ");

const consoleView = (input) => console.log(input);

let viewPersonsOverThirty = consoleView(personsOverThirtySortedByAge);
