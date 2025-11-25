# Roadmap voor de API

De volgende items zijn gepland of worden onderzocht voor de volgende versie van de API.

## Roadmap voor Versie 3.1 

Toevoegen van gebruiksprofielen.
Gebruiksprofielen zijn vooraf gedefinieerde sets van grootheid/parameters/eigenschappen die zijn afgestemd op specifieke toepassingen of sectoren, die kunnen gebruikt worden voor 'snel zoeken' van observaties.
Hierdoor kunnen gebruikers eenvoudig observaties opvragen die relevant zijn voor hun specifieke behoeften, zonder dat ze handmatig uitgebreide filters hoeven te definiëren.

## Roadmap voor Versie 4.0

De volgende items zijn gepland of worden onderzocht voor de volgende versie van de API.
Omdat dit 'breaking changes' zijn, past dit niet in versie 3.1.

| Categorie        | Onderwerp                                      | Omschrijving                                                                        | Status                  |
|------------------|------------------------------------------------|-------------------------------------------------------------------------------------|-------------------------| 
| URL-aanpassingen | Foi afsplitsen in een apart endpoint           | Meetlocaties (FOI) krijgen een eigen endpoint /foi                                  | Gepland                 |
| URL-aanpassingen | Parameter afsplitsen in een apart endpoint     | Parameters (referenties) krijgen een eigen endpoint /parameters                     | Gepland                 |
| URL-aanpassingen | Metadata afsplitsen in een apart endpoint      | Metadata (referenties) krijgen een eigen endpoint /metadata                         | Gepland                 |
| URL-aanpassingen | References komt te vervallen                   | /references vervalt. Rol wordt overgenomen door /foi, /parameters en /metadata      | Gepland                 |
| Standaarden      | JSON-LD                                        | JSON-LD toevoegen aan references                                                    | Onderzoeken/Consultatie |
| Standaarden      | JSON-FG/NEN3610-2022                           | Toevoegen aan foi endpoint                                                          | Onderzoeken/Consultatie |
| Standaarden      | Naamgevingen                                   | Responses meer in lijn brengen met [OM&S](#dfn-oms) JSON-profiel (ook camelCase)            | Onderzoeken/Consultatie |
| Compliance       | TLS 1.2 verbieden, 1.3 vereisen                | TLS 1.2 is niet veilig genoeg meer                                                  | Gepland                 |
| Observations     | PubSub specificeren, optionele functionaliteit | Op basis van W3C WebSub                                                             | Onderzoeken/Consultatie |
| Standaarden      | Nieuwe versie ADR                              | Belangrijke items nieuwe versie van API Design Rules meenemen                       | Onderzoeken             |
| Standaarden      | Parameter/parameter uitsplitsen?               | Vervangen door specifieke velden per parametertype (Physical/Chemical/Taxon/Object) | Onderzoeken/Consultatie |
| Vereenvoudiging  | Vereenvoudig header informatie                 | Laat Accept-Crs en Prefer ook toe als URL parameters                                | Onderzoeken/Consultatie |

## Opmerkingen

- Afsplitsing van references maakt een functionele scheiding die gelijk is aan het <a href="https://docs.ogc.org/as/20-082r4/20-082r4.pdf" rel="nofollow">OM&S</a> model, die dezelfde blokken hanteert.
- FoI kan eventueel worden uitgebreid met meetlocatie-specifieke informatie, zoals classificatiecodes volgens KRW.

## Roadmap voor Versie 4.1 (optioneel, naast 4.0)

4.1 bevat additionele functionaliteit ten opzichte van 4.0.

| Categorie | Onderwerp                                      | Omschrijving                                                               | Status                  |
|-----------|------------------------------------------------|----------------------------------------------------------------------------|-------------------------| 
| PubSub    | PubSub specificeren, optionele functionaliteit | Op basis van W3C WebSub                                                    | Onderzoeken/Consultatie |
| CRUD      | Observaties                                    | Mogelijkheid om observaties toe te voegen, bij te werken en te verwijderen | Onderzoeken/Consultatie |
| CRUD      | Referenties                                    | Mogelijkheid om referenties toe te voegen, bij te werken en te verwijderen | Onderzoeken/Consultatie |
| CRUD      | Profiles                                       | Mogelijkheid om profiel toe te voegen, bij te werken en te verwijderen     | Onderzoeken/Consultatie | 
