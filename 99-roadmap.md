# Roadmap voor de API

De volgende items zijn gepland of worden onderzocht voor de volgende versie van de API.

## Roadmap voor Versie 3.1 

| Categorie        | Onderwerp                                      | Omschrijving                                                                                | Status                  |
|------------------|------------------------------------------------|---------------------------------------------------------------------------------------------|-------------------------|
| PubSub           | PubSub specificeren, optionele functionaliteit | Op basis van W3C [[WebSub]]                                                                 | Onderzoeken/Consultatie |
| Zoekprofielen    | Zoekprofielen specificeren                     | Vooraf gedefinieerde selecties van observaties op basis van filters en geselecteerde velden | Gepland                 |
| Resultaatprofiel | Uniformweren van gemengde resultaten           | Automatische conversie van data naar CoverageJSON of naar Observations                      | Gepland                 |

## Roadmap voor Versie 4.0

De volgende items zijn gepland of worden onderzocht voor de volgende versie van de API.
Omdat dit 'breaking changes' zijn, past dit niet in versie 3.1.

| Categorie        | Onderwerp                                      | Omschrijving                                                                                                                          | Status                  |
|------------------|------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------------|-------------------------| 
| URL-aanpassingen | Foi afsplitsen in een apart endpoint           | Meetlocaties (FOI) krijgen een eigen endpoint /foi                                                                                    | Gepland                 |
| URL-aanpassingen | Parameter afsplitsen in een apart endpoint     | Parameters (referenties) krijgen een eigen endpoint /parameters                                                                       | Gepland                 |
| URL-aanpassingen | Metadata afsplitsen in een apart endpoint      | Metadata (referenties) krijgen een eigen endpoint /metadata                                                                           | Gepland                 |
| URL-aanpassingen | References komt te vervallen                   | /references vervalt. Rol wordt overgenomen door /foi, /parameters en /metadata                                                        | Gepland                 |
| Geo              | Foi/geojson                                    | Het nieuwe Foi-endpoint voor geojson (als FeatureCollection), rekening houdend met de OData $filter                                   | Gepland                 |
| Geo              | Foi/geopackage                                 | Het nieuwe Foi-endpoint voor het GeoPackage formaat, rekening houdend met de OData $filter                                            | Gepland                 |
| Standaarden      | JSON-FG/JSON-LD/NEN3610:2022                   | Uitbreiden FoI informatie in FoI endpoint en Observation/FoI met optionele attributen voor JSON-FG compatibiliteit en JSON-LD context | Gepland                 |
| Standaarden      | Naamgevingen                                   | Responses meer in lijn brengen met [[OM&S]] JSON-profiel (ook camelCase)                                                              | Onderzoeken/Consultatie |
| Verduidelijking  | parameter/parameter                            | Hernoemen naar parameter/observedParameter (of als alias toevoegen)                                                                   | Onderzoeken/Consultatie |
| Compliance       | TLS 1.2 verbieden, 1.3 vereisen                | TLS 1.2 is niet veilig genoeg meer                                                                                                    | Gepland                 |
| Observations     | PubSub specificeren, optionele functionaliteit | Op basis van W3C [[WebSub]]                                                                                                           | Onderzoeken/Consultatie |
| Standaarden      | Nieuwe versie ADR                              | Belangrijke items nieuwe versie van API Design Rules meenemen                                                                         | Onderzoeken             |
| Standaarden      | Parameter/parameter uitsplitsen?               | Vervangen door specifieke velden per parametertype (Physical/Chemical/Taxon/Object)                                                   | Onderzoeken/Consultatie |
| Vereenvoudiging  | Vereenvoudig header informatie                 | Laat Accept-Crs en Prefer ook toe als URL parameters                                                                                  | Onderzoeken/Consultatie |
| Bulk-downloads   | Bulk-downloads definiëren                      | NetCDF/(ongelimiteerde) CSV's                                                                                                         | Onderzoeken/Consultatie |

## Opmerkingen

- Afsplitsing van references maakt een functionele scheiding die gelijk is aan het OM&S model, die dezelfde blokken hanteert.
- FoI kan eventueel worden uitgebreid met meetlocatie-specifieke informatie, zoals classificatiecodes volgens KRW.

## Roadmap voor Versie 4.1 (optioneel, naast 4)

v4.1 bevat additionele functionaliteit ten opzichte van v4.

| Categorie | Onderwerp                                      | Omschrijving                                                               | Status                  |
|-----------|------------------------------------------------|----------------------------------------------------------------------------|-------------------------| 
| CRUD      | Observaties                                    | Mogelijkheid om observaties toe te voegen, bij te werken en te verwijderen | Onderzoeken/Consultatie |
| CRUD      | Referenties                                    | Mogelijkheid om referenties toe te voegen, bij te werken en te verwijderen | Onderzoeken/Consultatie |
| CRUD      | Profiles                                       | Mogelijkheid om profiel toe te voegen, bij te werken en te verwijderen     | Onderzoeken/Consultatie | 
