import fetch from "node-fetch";

fetch('https://randomuser.me/api?results=20')
    .then(respone => respone.json())
    .then(data => data.results)
    .then(users => {
        const maleUsers = users
            .filter(user=> user.gender === 'male')
            .sort((personOne, personTwo)=> personOne.name.last.localeCompare(personTwo.name.last))
            .map(user => user.name.last + ' ' + user.name.first)
            .join(', ')
        console.log(maleUsers);
    })
    .catch(error => console.log(error.message));

console.log('done');