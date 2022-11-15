--Lot 1.1
SELECT hot_nom, hot_ville
FROM hotel

--Lot 1.2
SELECT hot_nom, hot_ville, hot_adresse
FROM hotel

--Lot 1.3
SELECT sta_nom, sta_altitude
FROM station

--Lot 1.4
SELECT cha_numero, cha_capacite
FROM chambre

--Lot 1.5
SELECT cli_nom, cli_ville
FROM client

--Lot 1.6
SELECT hot_nom, hot_ville, hot_categorie
FROM hotel

--Lot 2.7
SELECT sta_nom, hot_nom, hot_categorie, hot_ville
FROM station
JOIN hotel ON hot_sta_id = hot_id

--Lot 2.8
SELECT hot_nom, hot_categorie, hot_ville, cha_numero
FROM hotel
JOIN chambre on cha_hot_id = hot_id

--Lot 2.9
SELECT hot_nom, hot_categorie, hot_ville, cha_numero, cha_capacite 
FROM hotel
JOIN chambre on cha_hot_id = hot_id
WHERE cha_capacite >1 and hot_ville like 'Bretou'

--Lot 2.10
select cli_nom, hot_nom, res_date
from client
join reservation on res_cli_id = cli_id
join chambre on cha_id = res_cha_id
join hotel on hot_id = cha_hot_id

--Lot 2.11
select sta_nom, hot_nom, cha_numero, cha_capacite
from station
join hotel on hot_sta_id = sta_id
join chambre on cha_hot_id = hot_id

--Lot 2.12 ( petit probleme de date, réservation de 355 jours)
select cli_nom, hot_nom, res_date, res_date_debut, DATEDIFF(res_date_fin, res_date_debut) as 'durée du séjour'
from client
join reservation on res_cha_id = cli_id
join chambre on cha_id = res_cha_id
join hotel on hot_id = cha_hot_id

--Lot 3.13 
select hot_nom, sta_nom, COUNT(*)
from hotel 
join station on hot_sta_id = sta_id
group by sta_nom

--Lot 3.14 
select sta_nom, count(*) as 'nombredechambre'
from chambre
join hotel on hot_id = cha_hot_id
join station on sta_id = hot_sta_id
group by sta_nom

--Lot 3.15 
select sta_nom, count(*) as 'nombredechambre'
from chambre
join hotel on hot_id = cha_hot_id
join station on sta_id = hot_sta_id
where cha_capacite > 1
group by sta_nom

--Lot 3.16
select distinct cli_nom, hot_nom
from reservation
join chambre on res_cha_id = cha_id
join hotel on hot_id = cha_hot_id
join client on cli_id = res_cli_id
where cli_nom like 'squire'

--Lot 3.17
select  sta_nom, floor(avg(DATEDIFF(res_date_fin, res_date_debut))) as 'durée moyenne des réservation'
from client
join reservation on res_cha_id = cli_id
join chambre on cha_id = res_cha_id
join hotel on hot_id = cha_hot_id 
join station on sta_id = hot_sta_id 
 