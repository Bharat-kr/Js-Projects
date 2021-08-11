//## Array Cardio Day 1

// some data to practise

const inventors = [
    {first:'Albert' , last:'Einstein' , year:1879 , passed:1955},
    {first:'Isaac' , last:'Newton' , year:1643 , passed:1727},
    {first:'Galileo' , last:'Galilei' , year:1564 , passed:1642},
    {first:'Marie' , last:'Curie' , year:1867 , passed:1934},
    {first:'johannes' , last:'kepler' , year:1571 , passed:1630},
    {first:'Nicolaus' , last:'Copernicus' , year:1473 , passed:1543},
    {first:'Max' , last:'Planck' , year:1858 , passed:1947},
];

const people = ['Kishore, Jha', 'Jiten, Mandwe', 'Varchasva, Aggarwal', 'Shivshankar, Kanaujiya', 'Shivansh, Joshi', 'Sagnik, Benerjee', 'Anmol, Gupta', 'Simran, Yadav', 'Shivani, Yadav', 'Prakhar, Srivastava', 'Shivansh, Verma', 'Nakul, Gupta','Dhruv, Chaurasia','Amresh, sinha','Yash, Ramani','Ujjwal, Garg'];

//Array.prototype.filter()
//1. Filter the list of inventors for those who were born in 1500's

// const fifteen = inventors.filter(function(inventor) {
//     if(inventor.year >= 1500 && inventor.year < 1600){
//         return true; //keep it
//     }
// }); this is a straight forward way lets make it awesome

const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600))
console.log(fifteen); //simply logs the data
console.table(fifteen); //displayes data as table

//Array.prototype.map()
//2. Give us an array of the inventors first and last names
const fullnames = inventors.map(inventor => `${inventor.first} ${inventor.last}`)
console.log(fullnames);

//Array.prototype.sort()
//3. Sort the inventors by birthdate oldest to youngest

    // const ordered = inventors.sort(function(a,b) {
    //     if(a.year >b.year){
    //         return 1;
    //     }else{
    //         return -1;
    //     }
    // }); short form being used below
const ordered = inventors.sort((a,b) => a.year > b.year ? 1 : -1);
console.table(ordered);

//Array.prototype.reduce()
//4. How many years did all the inventors live?
const totalYears = inventors.reduce((total, inventor) => {
    return total + (inventor.passed - inventor.year);
}, 0);
console.log(totalYears);

//5. Sort the inventors by years lived
const oldest = inventors.sort(function(a,b) {
    const lastGuy = a.passed - a.year;
    const nextGuy = b.passed - b.year;
    return lastGuy > nextGuy ? -1 : 1;
    // if(lastGuy > nextGuy){
    //     return -1;
    // }else{
    //     return 1;
    // }
});
console.log(oldest);

//6. create a list of Boulevards in paris that contain 'de' anywhere in the name
//link

//method cant be shown
// const category = document.querySelector('.mw-category');
// const links = Array.from(category.querySelectorAll('a'));
// const de = links
//             .map(link => link.textContent)
//             .filter(streetName => streetName.includes('de'));

//7. sort Exercise
//sort the people alphabetically by last name
const alpha = people.sort(function(lastOne , nextOne){
    const [aLast, aFirst] = lastOne.split(',');
    const [bLast, bFirst] = nextOne.split(',');
    return aLast > bLast ? -1 : 1;
})
console.log(alpha);

//8. Reduce Exercise
//Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'wan', 'bike', 'walk', 'car','van', 'car', 'truck'];

const transportation = data.reduce(function(obj , item){
    if(!obj[item]){
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
},{});

console.log(transportation);