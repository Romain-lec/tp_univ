# Nom & Prenom : Romain Lecleire & Lucas Thomesse

# TP4

## Adressage

### 1)
- eth1
- 192.168.5.62
- fe80::e654:e8ff:fe59:6596
- e4:54:e8:59:65:96
  
### 2)

- vitesse : 1000 Mb/S
- vitesse max : 1000 Mb/s
- full-duplex
- connected : Yes

### 3)

- classe : C
- 255.255.255.0
- 192.168.5.62/24
- 192.168.5.255/24
- 254 hotes possible sur ce réseau
- oui
- non
  
### 4)
 - fe80:0000:0000:0000:e654:e8ff:fe59:6596
 - ffff:ffff:ffff:ffff:0000:0000:0000:0000
 - (2^64)-2
 - oui
 - non
 - 2^64
 - 192.168.5.1

### 6)

- ip.addr == 192.168.5.62
- ipv6.addr == fe80:0000:0000:0000:e654:e8ff:fe59:6596
  
### 7)

- ICMP
- requete protocole echo de type 8
- réponce protocole echo de type 0

## Point a Point

### 1) 

- croiser

### 2) 

- ethtool 

## Concentrateur (HUB)

### 1)

le signal emis sur le port du HUB est transmie sur tous les port du HUB

### 2)

promiscuous : permet de capturer toutes les trames reçus

### 3)

il sont connecter en Half-duplex : la comunacation sont alternative

### 4) 

- topologie Phisique : Etoile
- topologie logique : Bus

### 5)

seule une trame pêut circuler sur le lien, sinon il y a colision et les trame sont retransmise


## Commuatateur (Switch)

### 1)

le dialogue entre 2 ports ne peut pas étre capturer par un 3eme

### 2)

communication en full-duplex

### 3)

topologie virtuel et physique : étoile

### 4)

il n'y a plus de colisions, la bande passante n'est pas partager

### 5)

le commutateur lit l'adress mac de la source d'une trame et la fait corespondre avec le port d'entré de cette trame

la table de commutation associe a chaque port du switch , LA LISTE des adresse MAC des interfacequi lui sont connecter (directement ou indirectement)

grace a la table de commutation ,  le switch simule une liaison en point a point 

### 6) 

le switch lit les entéte des trame pour les diriger vers le bon port , il utilise pour cela les address MAC

### 7)

il n'y a pas de colision , pas de bande passante partager 

### 8)


### 9)

les address MAC broadCast sont defini sur tous les port du switch

## Routeur

### 3)
 
le champ TTL est décrémenter par le routeur, cela évite de faire des boucles , 

### 4)

TTL=1 -> dans ce cas le routeur renvoie un message ICMP Type11 TTl exeded

### 5)

1 paquet IP mais 2 trames Ethernet

(on changed de trame Ethernet au niveau du routeur car a se niveau on repasse au niveau réseau, alors que le switch reste en couche liaison)

### 6)

il l'a su car address de destination n'est pas sur le même réseau\sous-réseau











