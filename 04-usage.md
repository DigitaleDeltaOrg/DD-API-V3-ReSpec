# Gebruik

Een DD API V3 heeft twee endpoints. Beide gebruiken dezelfde subset OData V4 voor zoeken en filteren. 

Het verschil zit in de data representatie. Beiden gebruiken de standaard OData responses, maar de 'values' verschillen in model.

*De naamgeving van de endpoints is strikt: hier mag niet van worden afgeweken.*

## Endpoint /v3/odata/observations

Dit endpoint wordt gebruikt om de observaties op te halen. Het [observatiemodel](#virtuele-datamodellen-observation) beschrijft de structuur en eigenschappen.
Voorbeelden van het gebruik van dit endpoint zijn te vinden in de [profielen](#observation-zoekvoorbeelden).

## Endpoint /v3/odata/references

Dit endpoint wordt gebruikt om de referenties (kennis van het systeem, zoals parameters, grootheden, compartimenten, meetobjecten) op te halen.
Het [referentiemodel](#virtuele-datamodellen-reference) beschrijft de structuur en eigenschappen.
Voorbeelden van het gebruik van dit endpoint zijn te vinden in de [profielen](#reference-zoekvoorbeelden).

## GET en POST

De endpoints **MOETEN** `GET` ondersteunen.

`POST` is optioneel en **mag** alleen worden gebruikt voor zoeken met lange filters. 

De body van het `POST` request **MOET** de volledige query string bevatten, dus alles na de `?` in de URL.

`GET` is de aanbevolen methode.


## Paginering

Data wordt in pagina's teruggegeven. Een pagina bestaat uit de volgende onderdelen:

- Een header (`@odata.count`)
- Een array van entiteiten (`value`)
- Een link naar de volgende pagina (`@odata.nextLink`)

Paginagrootte beschrijft het aantal entiteiten dat in de `value` array wordt teruggegeven. Met andere woorden: dit zijn de aantal observaties in de `value` array.

De pagina grootte wordt bepaald door de implementatie. De specificatie _adviseert_ minimaal 1000 items per pagina met een maximale grootte van 10000.
De pagina grootte kan worden aangepast via de query parameter `$top`. 
Indien de pagina grootte groter is dan de maximale grootte die de server accepteert, dan zal de server de pagina grootte automatisch verkleinen.

Omdat DD API V3 gebruik maakt van `$skiptoken`, is de volgende pagina niet direct op te vragen: de URL achter de `@odata.nextLink` moet worden gebruikt om de volgende pagina op te vragen.

De parameter `$top` geeft het aantal te retourneren entiteiten binnen de value array aan. Let op: bij tijdreeksen wordt de volledige tijdreeks als één item beschouwd, ongeacht het aantal individuele meetpunten in de CoverageJSON.

## Geografie

Standaard geeft DD API V3 alle responses terug in ETRS89 ([[EPSG]]:4258).

Een ander coördinatenstelsel **kan** worden gevraagd via de Accept-Crs header. 
De server **MOET** de data dan converteren naar het gevraagde CRS _(indien de server het coördinatenstelsel ondersteund)_ 
en in de response header Content-Crs opnemen in welk CRS de data is teruggegeven.

Tenminste de volgende CRS's worden ondersteund:

* ETRS89 ([[EPSG]]:4258) in graden
* WGS84 ([[EPSG]]:4326) in graden
* ETRS89/31N ([[EPSG]]:25831) in meters
* RD New ([[EPSG]]:28992) in meters

De waarde van Accept-Crs (en de Content-Crs in de response) **MOET** `[[EPSG]]:xxxx` zijn, waarbij `xxxx` de [[EPSG]]-code is.

## Beveiliging

Welke authenticatiemethoden de API ondersteunt, is afhankelijk van de implementatie.

De volgende methoden zijn toegestaan:

| Methoden           | Beschrijving                                                                                              |
|--------------------|-----------------------------------------------------------------------------------------------------------|
| [[mTLS]]           | Mutual TLS (certificaten)                                                                                 |
| [[API Key]]        | Via X-API-KEY header, alleen in opvraag scenario's waarbij de identiteit van de gebruiker niet vereist is |
| [[OAuth2]]         | OAuth2                                                                                                    |
| [[OpenID Connect]] | OpenID Connect                                                                                            |

Authenticatie hoeft niet altijd vereist te worden: diensten die uitsluitend publieke data leveren, 
kunnen zonder authenticatie worden gebruikt.

## Versiebeheer en Capabilities

Om clients te helpen bij het ontdekken van ondersteunde functionaliteiten, **MOET** een server bij elke response de header `API-Version` meesturen.

### X-DD-Capabilities
Voor implementaties die de optionele V3.1 extensies ondersteunen, **MOET** de server de header `X-DD-Capabilities` meesturen. Deze header bevat een door komma's gescheiden lijst van actieve extensies.

Mogelijke waarden:
- `subscriptionsb`: Ondersteuning voor het `/subscriptions` endpoint.
- `searchprofiles`: Ondersteuning voor zoekprofielen via `/searchprofiles`.
- `resultprofiles`: Ondersteuning voor resultaatprofielen via `/resultprofiles`.

**Voorbeeld:**
`X-DD-Capabilities: searchprofiles, resultprofiles, subscriptions`