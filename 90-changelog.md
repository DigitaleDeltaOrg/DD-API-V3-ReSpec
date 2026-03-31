# Changelog

Alle belangrijke wijzigingen aan de DD API worden in dit document gedocumenteerd.

## 2026-03-24

### Toegevoegd

- Create-update-delete (CUD) mechanisme
- v3.1 document uitgesplitst in één document per feature (search profiles, result profiles, pub/sub, cud)

## 2026-02-19

### Gewijzigd

- Tekstuele verduidelijking
- Verwijdering van het schema voor ANTLR-compilatie
- Herorganiseren van de V3.1 beschrijving
- 

## 2026-02-13

### Gewijzigd

- Aanpassing van de specificaties van het datamodel, met verbeterde beschrijving van de kenmerken en het **Measure** type.
- Verduidelijking van `Vocab`-result type en de relatie met `typering` van IM Metingen.
- Herorganiseren en uitbreiden van de roadmap voor V4 met toegevoegde features zoals GeoPackage export voor FOI en verbeterde JSON-FG/JSON-LD en NEN3610:2022 ondersteuning.
- Herindeling van de change log, nu gebaseerd op datum en niet versienummer.
- Verbetering van metadata, implementatie en gebruiksonderdelen, meer in lijk met terminologie en structuur.
- Toevoegen van toegankelijkheid bij de implementaties.

### Opgelost

- Beschrijving van type **Measure** ontbrak in **Result**

## 2026-2-10

### Toegevoegd
- Pub/Sub functionaliteit voor asynchrone notificaties met uitgebreide documentatie
- Zoek-profielen (search profiles) voor geoptimaliseerde zoekopdrachten
- Result profiles voor gefilterde API responses
- User stories documentatie toegevoegd
- Ecosystem sectie met implementaties en tooling
- Ondersteuning voor mTLS via x-mTLS extensie in OpenAPI specificatie

### Gewijzigd
- Documentatie gereorganiseerd met nieuwe nummering en structuur
- Implementatie hoofdstuk uitgebreid met meer details
- Metadata definities bijgewerkt en uitgebreid
- OData subset documentatie verduidelijkt met parameter uitleg
- Usage documentatie uitgebreid
- Roadmap bijgewerkt voor V3.1 planning

### Opgelost
- EPSG-code voor ETRS89/31N gecorrigeerd in documentatie

## 2025-12-11

### Gewijzigd
- "Characterisation" hernoemd naar "Characteristic" in CSV definities
- Characterisation toegevoegd aan definities (2025-12-08)
- ReSpec configuratie verbeterd
- Index.html gestructureerd en verbeterd
- Markdown bestanden verrijkt met extra links en formatting
- GitHub Actions workflow bijgewerkt voor Jekyll deployment

### Verwijderd
- node_modules toegevoegd aan .gitignore
- PDF-formaat verwijderd (geen template beschikbaar)
- CDSL links verwijderd (veroorzaakten timeouts)
- Link naar NuGet verwijderd

## 2025-11-25

### Toegevoegd
- Initiële release van DD API V3
- RESTful API architectuur
- OpenAPI 3.0 specificatie (oas3.0-base.yaml)
- CSDL XML schema definitie (csdl-base.xml)
- JSON Schema's voor observations, references en coverage
- Data modellen voor observaties en metingen
- Data modellen voor referentiegegevens (sensoren, locaties, parameters, kenmerken)
- OData subset ondersteuning
- Context en metadata definities in CSV formaat
- Design concepts en usage documentatie
- SVG diagrammen voor data modellen
- GitHub Actions workflow voor documentatie deployment
