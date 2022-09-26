set PUB;

#init param

param budget >= 0;
param pers_dispo_sem >= 0;
param cout {PUB} >= 0;
param conso_touch {PUB} >= 0;
param unit_minute {PUB} >= 0;
param perso_sem {PUB} >= 0;

#variable pour objectif

var nb_unit {p in PUB} >= 0;

#variable calculer

var budget_used = sum {p in PUB} (cout[p] * nb_unit[p]);
var NRJ_used = sum {p in PUB} (perso_sem[p] * nb_unit[p]);

#objectif

maximize consommateurs : 
    sum {p in PUB} (nb_unit[p] * conso_touch[p]);

#Condition

subject to lim_budget :
    budget_used <= budget;

subject to seuil_inf {p in PUB} :
    nb_unit[p] >= unit_minute[p];

subject to NRJ :
    NRJ_used <= pers_dispo_sem;

data;

set PUB := TV Magazine Radio;
param budget := 1000000;
param pers_dispo_sem := 100;
param :    cout   conso_touch   unit_minute    perso_sem:=
TV         20000   1800000          10           1
Magazine   10000   1000000           2           3
Radio       2000    250000          120         0.20;