# Solution partielle en AMPL

set ENTREPOTS;
set MAGASINS;

# quantité maximale transportée par un camion

param transportMaxCamion >=0;

# stockEntrepot[e] : c’est le stock dont dispose l’entrepôt e

param stockEntrepot{ENTREPOTS};

# stockMagasin[m] : c’est le stock du magasin m avant livraison

param stockMagasin{MAGASINS};

# stockMagasinVoulu[m] : c’est le stock minimum dont le magasin m souhaiterait disposer

param stockMagasinVoulu{MAGASINS};

param transportfacher >= 0;

# est facher

param estFacher{ENTREPOTS,MAGASINS} binary;
# transfert[e,m] : c’est la quantité transférée de l’entrepôt e vers

# le magasin m par le camion allant de e à m

var transfert {ENTREPOTS, MAGASINS} integer >= 0;

# integer , solver gurobi , option solver gurobi

minimize total_transporte {e in ENTREPOTS} : sum {m in MAGASINS} transfert[e,m];

# quantiter maximal transportable pour un camion

subject to maxQuantity {e in ENTREPOTS, m in MAGASINS} : transfert[e,m] <= transportfacher * estFacher[e,m] + (1 - estFacher[e,m]) * transportMaxCamion;

#tous le magasin on au minimum le stock voulu

subject to goodStock {m in MAGASINS} : (sum {e in ENTREPOTS} transfert[e,m] ) + stockMagasin[m] >= stockMagasinVoulu[m];
subject to nodepacement {e in ENTREPOTS} : sum {m in MAGASINS} transfert[e,m] <= stockEntrepot[e];


