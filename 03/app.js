class person {
    constructor(firstName, lastName, birthDate, address){
        this.firstName=firstName;
        this.lastName=lastName;
        this._birthDate=birthDate;
        this.address=address;
    }

    /*getFullName(){
        return this.firstName + ' ' + this.lastName; //ist ein Getter
    }*/

    get birthdate(){
        return this._birthDate;
    }

    set birthdate(birthDate){
        if(birthDate && birthDate.getTime()<Date.now()){
            this._birthDate = birthDate;
        }

    }

    get fullName(){
        return this.firstName + ' ' + this.lastName; //eine andere form des getters - get abstand - kann dann direkt angesprochen werden.
    }

    getGreeting(greeting = "Hallo"){
        return greeting + ' ' +this.firstName +'!';
    }

}

class address{
    constructor(street, postCode, city, countryCode){
        this.street = street;
        this.postCode = postCode;
        this.city = city;
        this.countryCode = countryCode;
    }
}

let person1 = new person('Markus','Mustermann', new Date(1990, 0, 1), new address('musterstraße', 3100, 'musterstadt', 'AT'));
console.log(person1.firstName); //getter - nur ohne Methode
person1.lastName = 'Muster'; //setter - nur ohne Methode

//person.getFullName;

person1.fullName;
console.log(person1.getGreeting("Lieber"));

console.log(person1.address.countryCode); //punktnotation

const persons = [ //dies ist ein arrayliteral
    person1,
    new person('martina', 'musterfrau', new Date(1999, 1, 1), new address('wienerstraße', 3333, 'furth', 'DE')),
    new person('maxi', 'musterkind', new Date(1899, 1, 1), new address('kremserstraße', 3983, 'furthstadt', 'AT'))

]

const fullNameOfSrotedPPersonsFromAT = persons.filter(function(person){
    return person.address.countryCode === 'AT'
}); //eine filterfunktion returned true wenn filterkriterium erflüllt wird - sortiert andere aus
/*persons array bleibt gleich wird durch die const ein neues gemacht*/

const fullNameOfSrotedPPersonsFromATSlick = persons
.filter(person => person.address.countryCode === 'AT')
.sort((person1, person2) => person1.lastName.localCompare(person2.lastName)) //ASC
    //return +1; // 0 - personen sind gleichwertig // 1 alphabetisch von a to z //-1 alphabetisch von z to a
    
.map(person => person.fullname) /* mapping methode - jetzt wird nur mehr der fullname ausgegeben statt dem ganzen objekt.  */
    /*reduktionsregeln: wenn nur ein parameter steht muss er nicht in klammer stehen. folgt nach dem arrow nur eine zeile kann das return,
    die geschweiften klammern und das semicolon am schluss weg */
.join(", "); //macht Beistriche zwischen den namen. 

console.log(fullNameOfSrotedPPersonsFromATSlick);
