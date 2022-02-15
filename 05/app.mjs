import  Person , { Address, loggPerson as logg, VIP}  from "./types.mjs"; //so kann ich importieren - was und woher

const persons = [
    new Person('Meinzel', 'Männchen', new Date(1990, 1,1), new Address('Männchenstraße', '5566', 'Mainz', 'DE')),
    new Person('Max', 'Muster', new Date(1981,2,2), new Address('Musterstraeße', '3100', 'Musterstadt', 'AT')),
    new Person('Maxi', 'Musterkind', new Date(2010, 11, 24), new Address('Linzer Straße 1', '4040', 'Linz', 'AT'))
];

persons.forEach(logg);

logg(VIP);