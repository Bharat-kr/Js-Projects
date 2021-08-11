const endpoint='https://raw.githubusercontent.com/dr5hn/countries-states-cities-database/master/countries%2Bstates%2Bcities.json';

const cities = [];

fetch(endpoint).then(blob => blob.json()).then(data => cities.push(...data)); 
//spread (...) used to push the data wihtout making it inside an array 

function findMatches(wordToMatch , cities){
    return cities.filter(place => {

        //here we have to check if the state city or country matches what is searched
        const regex = new RegExp(wordToMatch , 'gi');
        return place.name.match(regex)  || place.capital.match(regex)  || place.phone_code.match(regex);
    });
}

function displayMatches() {
    const matchArray = findMatches(this.value , cities);
    const html = matchArray.map(
        place => {
            return `
            <li>
                <span class="name">${place.name}, ${place.capital}</span>
                <span class="population">${place.phone_code}</span>
            </li>
            `;
        }).join('');
        suggestions.innerHTML = html;
}

const searchInput=document.querySelector(".search");
const suggestions=document.querySelector(".suggestions");

searchInput.addEventListener("change" , displayMatches);
searchInput.addEventListener("keyup" , displayMatches);