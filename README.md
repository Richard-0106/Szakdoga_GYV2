

## Vizsgafeldat minta 2022 - webprogramozás
### Laravel és JQuery segítségével néhány végpontot tartalmazó ResApi alkalmazás létrehozása, mely backend és frontend részeket egyaránt tartalmaz 
Elkészítendő a mintán látható oldal asztali és egy mobil nézete. A töréspont meghatározását a készítőre bízom. 
A kiinduló Laravel projektet itt lehet elérni: https://github.com/csefikatalin/probavizsga_kiindulo.git 
Az weblap kialakításához használhatók az előre elkészített welcome.blade.php és dashboard.blade.php oldalak. 


### Mobil nézet

Mobil nézetben a sötétszürke fejléc utolsó két felirata eltűnik, és a linkek előtt megjelenik a "GitHub link" és a "Webcím" felirat a mintának megfelelően.
Az űrlap az alábbi módon alakul át.

## Adatbázis

Az adatbázis neve: probavizsga2022 legyen!
**szakdoga**
- id
- szakdoga_nev
- githublink
- oldallink
- tagokneve
- timestamps


## Api végpontok

- get '/szakdogak'
- post('/szakdogak'
- put('/szakdogak/{id}' 
- delete('/szakdogak/{id}'


## Formázás, reszponzivitás

| Reszponzív viselkedésű weboldal készítés és formázás	|ÖsszPont:  10| 
|:----------------------------|----------------:|
| Az oldal szélessége a böngésző szélességével dinamikusan változik, width %-ban megadva, max-width használata, vagy a bootstrap megfelelő osztályainak használta | 	2| 
| Az elemek elrendezése asztali nézetben a mintának megfelelő	| 2| 
| Az oldal egyéb formázásai a mintának megfelelőek (váltott sorok színezése)	| 2| 
| Mobil nézetben eltűnik a fejléc utolsó két felirata és minden link előtt megjelenik a "GitHub link" és a "Webcím" felirat a mintának megfelelően	| 2| 
| Az űrlap mobilnézetben a mintának megfelelően jelenik meg. 	| 2| 


## Backend

| Backend programozás (adatbázis lekérdezést is végző, néhány végpontot tartalmazó REST API kiszolgáló létrehozása)| 	15| 
|:----------------------------|----------------:|
| A 'szakdoga" tábla létrehozása a megfelelő mezőkkel és migrálása az adatbázisba| 	2| 
| SzakdogaController létrehozása index tagfüggvénnyel| 	2| 
| SzakdogaController  - törlés megvalósítása| 	2| 
| SzakdogaController  - módosítás megvalósítása| 	2| 
| SzakdogaController  - új rekord rögzítésének  megvalósítása megvalósítása| 	2| 
| Végpontok elkészítése (rootolás) 	| 2| 
| Érd el, hogy a szakdoga oldalhoz csak a bejelentkezés után lehessen hozzáférni	| 2| 
| Törlés, módosítás és új adat rögzítése után frissül az oldal a megváltozott adatlistával. 	| 1| 

## Frontend

| Frontend programozás (HTML / CSS /JavaScript / REST API kliens)	| 15| 
|:----------------------------|----------------:|
| Ajax osztály elkészítése GET és POST, PUT és DELETE metódusokkal	| 2| 
| Szakdoga osztály létrehozása, és a megfelelő elemekbe a megfelelő adatok elhelyezése. 	| 2| 
| Megjelennek a szakdolgozat mellett a szerkesztés és törlés lehetőségei (nem muszáj ikonokkal)	| 1| 
| A szakdolgozatok megjelennek az oldalon a mintának megfelelően. (megtörténik a példányosítás)	| 2| 
| A Szakdoga osztályban törlés és módosítás események létrehozása, illetve ezek kiváltanak eseményeket a főprogramban	| 2| 
| A "torol" esemény a megfelelő végpontot hívja, 	| 2| 
| A módosít esemény az adatokat betölti az űrlapba	| 2| 
| Vagy a módosít, vagy az új adat hívása megvalósul API végponton keresztül. 	| 2| 


