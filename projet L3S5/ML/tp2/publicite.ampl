set PUB;
param budget >= 0;
param cout {PUB} >= 0;
param conso_touch {PUB} >= 0;
param unit_minute {PUB} >= 0;
var nb_unit {p in PUB} >=0;

var budget_used = sum {p in PUB} (cout[p] * nb_unit[p]);
maximize consommateurs : 
    sum {p in PUB} (nb_unit[p] * conso_touch[p]);

subject to lim_budget :
    budget_used <= budget;

subject to seuil_inf {p in PUB} :
    nb_unit[p] >= unit_minute[p];

data;

set PUB := TV Magazine;
param budget = 1000000;
param :    cout   conso_touch   unit_minute:=
TV         20000   1800000          10
Magazine   10000   1000000           0;