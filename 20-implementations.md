## Bestaande Implementaties (Informatief)

Onderstaande lijst bevat bekende publieke endpoints die voldoen aan de DD API V3 specificatie.

| Service Provider                            | Data-eigenaren / Bronhouders                 | Omschrijving                           | Status           | Root URL (OData)                      | Versie | 
|:--------------------------------------------|:---------------------------------------------|:---------------------------------------|:-----------------|:--------------------------------------|--------| 
| **EcoSys (AquaDesk)** (https://ecosys.nl)   | Rijkswaterstaat, verschillende Waterschappen | Waterkwaliteit                         | Productie        | https://ddapi.aquadesk.nl/v3/odata/   | v3     |
| **Rijkswaterstaat** (https://rws.nl)        | RWS, Sovon, WMR (Wageningen Marine Research) | Klein biologisch, vissen en vogels     | Productie        | https://ddapi-rws.ecosys.nl/v3/odata/ | v3     |
| **Aquon** (https://aquon.nl)                | Aangesloten Waterschappen                    | Laboratoriumanalyses en veldmetingen   | Productie        | Niet publiek                          | v3     |
| **Aquon SampleManager**  (https://aquon.nl) | Aangesloten Waterschappen                    | Laboratoriumanalyses via SampleManager | Productie        | Niet publiek                          | v3     |
| **Informatiehuis water** (https://ihw.nl)   | Alle waterschappen en Rijkswaterstaat        | Aquo-Kit data                          | Proof of Concept | Niet publiek                          | v3     |
| **MuniSense** (https://munisense.nl)        | Aangesloten waterschappen                    | Grondwatersensordata                   | Beta             | Niet publiek                          | v3     |
| **Blik-Sensing** (https://blik-sensing.nl)  | Aangesloten waterschappen                    | Grondwatersensordata                   | Beta             | Niet publiek                          | v3     |

Daarnaast heeft Delft-FEWS de mogelijkheid gekregen om DD API V3 endpoints te gebruiken als data bron voor CoverageJSON-data.

## Aanmelden van nieuwe implementaties
Organisaties of service providers die een DD API V3 implementatie beschikbaar stellen, worden uitgenodigd om hun endpoint aan te melden bij het [Informatiehuis Water](https://ihw.nl).

<aside class="advisement" title="Tip">
 Gebruik het `/v3/odata/references` endpoint bij een provider om te ontdekken voor welke specifieke `Organisation` (beheerders) en `Foi` (locaties) er data beschikbaar is binnen dat endpoint.
</aside>
