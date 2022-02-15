import fetch from "node-fetch"; //fetch api - da kann man verschiedene backend

fetch('https://randomuser.me/api?results=10')//so kann man das backend ansteuern
    .then(response => response.json())// das ist das promise - holt die daten über fetch - baut sie in ein json //ist gleich einem ajaxcall
    .then(data => data.results) //so kommt man in das json rein ohne das überarray results aus dem json
    .then(users => {
        const femaleUsers = users
            .filter(user => user.gender === "female")
            .map(user => user.name.first + ' ' + user.name.last)
            .join(", ");
        console.log(femaleUsers);
    })
    .catch(error => console.log(error.message));

console.log("fertig"); //läuft asynchron: fertig wäre vorher fertig, da  fetch mehr zeit brauchen würde.  daher drunter nichts schreiben, dass daten aus dem fetch braucht. VERARBEITUNGSZEIT