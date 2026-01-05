## Bestaande Implementaties (Informatief)

Onderstaande lijst bevat bekende publieke endpoints die voldoen aan de DD API V3 specificatie.

| Service Provider                            | Data-eigenaren / Bronhouders                 | Omschrijving                           | Status           | Root URL (OData)                      |
|:--------------------------------------------|:---------------------------------------------|:---------------------------------------|:-----------------|:--------------------------------------|
| **EcoSys (AquaDesk)** (https://ecosys.nl)   | Rijkswaterstaat, verschillende Waterschappen | Waterkwaliteit                         | Productie        | https://ddapi.aquadesk.nl/v3/odata/   |
| **Rijkswaterstaat** (https://rws.nl)        | RWS, Sovon, WMR (Wageningen Marine Research) | Klein biologisch, vissen en vogels     | Productie        | https://ddapi-rws.ecosys.nl/v3/odata/ |
| **Aquon** (https://aquon.nl)                | Aangesloten Waterschappen                    | Laboratoriumanalyses en veldmetingen   | Productie        | -                                     |
| **Aquon SampleManager**  (https://aquon.nl) | Aangesloten Waterschappen                    | Laboratoriumanalyses via SampleManager | Productie        | -                                     |
| **Informatiehuis water** (https://ihw.nl)   | Alle waterschappen en Rijkswaterstaat        | Aquo-Kit data                          | Proof of Concept | -                                     |
| **MuniSense** (https://munisense.nl)        | Aangesloten waterschappen                    | Grondwatersensordata                   | Beta             | -                                     |
| **Blik-Sensing** (https://blik-sensing.nl)  | Aangesloten waterschappen                    | Grondwatersensordata                   | Beta             | -                                     |

## Aanmelden van nieuwe implementaties
Organisaties of service providers die een DD API V3 implementatie beschikbaar stellen, worden uitgenodigd om hun endpoint aan te melden bij het [Informatiehuis Water](https://ihw.nl).

> [!TIP]
> Gebruik het `/v3/odata/references` endpoint bij een provider om te ontdekken voor welke specifieke `Organisation` (beheerders) en `Foi` (locaties) er data beschikbaar is binnen dat endpoint.