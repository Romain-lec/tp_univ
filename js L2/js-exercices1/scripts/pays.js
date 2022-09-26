const numberFormatter = new Intl.NumberFormat();
dataPays.forEach( pays => pays.toString = function() { return `${this.nom} : ${this.population} hab., ${this.superficie}km², ${this.PIB} milliardsUS$` } );
for(let i = 0;i<5;i++){
    console.log(dataPays[i].toString());
}
/* */
/****  QUESTION 2 *****/
console.log(' *** QUESTION 2 ***');
/* il faut utiliser un reduce*/
const populationTotale = dataPays.reduce((back,now) => back + now.population, 0);
console.log(`population totale : ${numberFormatter.format(populationTotale)}`);
/***********************/


/****  QUESTION 3 *****/
console.log(' *** QUESTION 3 ***');
const findData = string => dataPays.find(elt => elt.nom === string);
console.log(findData('France').toString());
/***********************/


/****  QUESTION 4 *****/
const dixpluspeuples = [...dataPays].sort((a,b) => b.population - a.population).splice(0,10);

console.log(`10 plus peuplés : ${dixpluspeuples}`);
/***********************/


/****  QUESTION 5 *****/
let densPop = [...dataPays];
densPop.forEach(elt => elt.densité = elt.population/elt.superficie);
densPop = densPop.filter(elt => elt.densité > 1000).sort((a,b) => b.densité - a.densité);
densPop.forEach(elt => console.log(`${elt.nom} : ${elt.densité} hab/km²`));
/***********************/


/****  QUESTION 6 *****/
let pibHab = [...dataPays];
pibHab.forEach(elt => elt.PIBHab = (elt.PIB*1000000000)/elt.population)
console.log(pibHab.filter(elt => elt.PIBHab < 10000).reduce((back,now) => back + now.population,0));
/***********************/
