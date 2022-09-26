'use strict';

// une liste pour des tests
const numbers = [2, 3, 5, 4, 10, 6];

/********** EXERCICE 0 ***********************/
console.log(` *** EXERCICE 0 *** `);
/* computes the double of its parameter
 * @param x (number) a number
 * @return (number) the double of *x*
*/
const example = x => x * 2;
// tests
console.log(`example(10) : ${example(10)}`);
console.log(`example(21) : ${example(21)}`);



/* filter and keep the elements of *list* smaller than *max*
 * @param list (Array) list of elements
 * @param max (Any) upper bound filter value
 * @return (Array) list of elements of *list* smaller than *max*
*/
const example2 = (list, max) => list.filter( elt => elt < max );
// tests
console.log(`example2(numbers, 5) : ${example2(numbers, 5)}`);

/*********************************************/

/********** EXERCICE 1 ***********************/
console.log(` *** EXERCICE 1 *** `);
numbers.forEach(elt => console.log(elt));
const persons = [ {name : 'timoleon', age : 12 }, {name : 'bilbo', age : 111 }, {name : 'frodo', age : 33 }];
persons[1].name;
persons.forEach( elt => console.log(` ${elt.name} a ${elt.age} ans`));

const myForEach = (array,func) => {
    for(let elt in array ){
        func(array[elt]);
    }
}

myForEach(numbers,elt => console.log(elt));
myForEach(persons, elt => console.log(` ${elt.name} a ${elt.age} ans`));
/*********************************************/


/********** EXERCICE 2 ***********************/
console.log(` *** EXERCICE 2 *** `);
console.log(numbers.map(x => (x%10 === 0) ? x : undefined ));

const multiples = (n,l) => {
    console.log(l.map(elt => n*elt));
}
multiples(10,numbers);

const multiples5 = array => multiples(5,array);
multiples5(numbers);

const multiplesFactory = factor => array => multiples(factor,array);
console.log(multiplesFactory(5));
/*********************************************/


/********** EXERCICE 3 ***********************/
console.log(` *** EXERCICE 3 *** `);

const capitalize = string => `${string.substring(0,1).toUpperCase()}${string.substring(1)}`;
console.log(capitalize("romain"));

console.log(persons.map(elt => elt.name = capitalize(elt.name)));

const myMap = (array,func) => {
    let res = [];
    for(let elt in array){
        res.push(func(array[elt]));
    }
    return res;
}

console.log(myMap(myMap(persons,elt => elt.name),capitalize));
/*********************************************/


/********** EXERCICE 4 ***********************/
console.log(` *** EXERCICE 4 *** `);

console.log(numbers.filter(elt => elt < 5));

const createAcronym = phrase => phrase.split(' ').filter(elt => elt.length > 3).map(elt => capitalize(elt.substring(0,1))).join('');
console.log(createAcronym('formation en informatique de lille'));
/*********************************************/

/********** EXERCICE 5 ***********************/
console.log(` *** EXERCICE 5 *** `);


/*********************************************/

/********** EXERCICE 6 ***********************/
console.log(` *** EXERCICE 6 *** `);

const nbLetters = string => string.split(' ').reduce((back,now) => back + now.length , 0);
console.log(nbLetters('formations en informatique de lille'));

const max = (elt1,elt2) => (elt1 > elt2) ? elt1 : elt2;

const maxNumber = array => array.reduce((back,now) => max(back,now),0);
console.log(maxNumber(numbers));

const maxNumber2 = (...elts) => {
    let maxi = null;
    elts.forEach(elt => maxi = max(elt,maxi));
    return maxi;
}

console.log(maxNumber2(...numbers));

const sum = (...elts) => elts.reduce((back,now) => back + now ,0);
console.log(sum(1,2,3,4,5,6,7,8,9));
console.log(sum());
/*********************************************/

/********** EXERCICE 7 ***********************/
console.log(` *** EXERCICE 7 *** `);

const lesInvites = ['Tim Oleon', 'Timo Leon', 'Bilbo', 'Frodo', 'Sam', 'Merry', 'Pippin']
const lesReponses = [
                  {nom : 'Sam', present : 'oui'},
                  {nom : 'Tim Oleon', present : 'non'},
                  {nom : 'Bilbo', present : 'oui'},
                  {nom : 'Frodo', present : 'oui'},
                  {nom : 'Timo Leon', present : 'non'},
                 ];

const participants = (invites,reponses) => {
    let res = invites.filter(elt => !(reponses.map(elt2 => elt2.nom).includes(elt)));
    reponses.forEach(elt => (elt.present === 'oui') ? res.push(elt.nom) : null);
    return res;
}

console.log(participants(lesInvites,lesReponses));
/*********************************************/

/********** EXERCICE 8 ***********************/
console.log(` *** EXERCICE 8 *** `);



/*********************************************/
