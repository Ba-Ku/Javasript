//mjs -> m steht für modul

export default class Person { //export ist wichtig - ich kann in js nur sachen importieren die ich exportiere
    constructor(firstName, lastName, birthDate, address) { //export default ist nur einmal pro file erlaubt. jetzt kann ich es ohne {} importieren
        this.firstName = firstName;
        this.lastName = lastName;
        this.birthDate = birthDate;
        this.address = address;
    }
}

export class Address {
    constructor(street, postCode, city, countryCode) {
        this.street = street;
        this.postCode = postCode;
        this.city = city;
        this.countryCode = countryCode;
    }
}

export function loggPerson(person){ //ich kann auch funtkionen so exportieren - alles lässt sich so exportieren klassen, funktionen, enums
    console.log(
        JSON.stringify(person, null, 2)
        );
}
export const VIP = new Person(
    "John Q.",
    "Public",
     new Date(1991, 2, 3),
     new Address("York Street 2", "10013", "NYC", "US"));

