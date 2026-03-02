# Reference zoekvoorbeelden (Informaties)

Hieronder staan enkele voorbeeld queries voor het opvragen van references via de DD API V3. Deze voorbeelden maken gebruik van OData filters en selecties.

## References filteren

- Voor filteren voor meetobjecten, gebruik dan de `Foi`-eigenschap.
- Voor filteren op parameters, grootheden, biologische kenmerken, etc. gebruik de `Parameter`-eigenschap.
- Voor filteren op niet-gestandaardiseerde eigenschappen, gebruik de `Metadata`-eigenschap.

### Alle observaties voor een specifieke meetlocatie

```http request
GET /v3/odata/references?$filter=type eq 'MeasurementObject' and code eq 'AMSRKNE'
```

### Geografische filter

Voor geografische filtering kan gebruik worden gemaakt van de specifieke DD API V3 geografische functies: `distance` en `intersects`.
Een opmerking over coördinatenstelsels:

- Standaard worden alle coördinaten in ETRS89 (longitude latitude) gebruikt, in booggraden, dus.
- De gebruiker kan middels `Accept-Crs` header aangeven in welk CRS (coördinatenenstelsel) de data teruggegeven moet worden en de vergelijking moet worden uitgevoerd. Daarvoor de ESPG-code uit onderstaande lijst gebruiken, bijvoorbeeld `Accept-Crs: EPSG:28992` voor RD New.
- Wanneer de gebruiker geen `Accept-Crs` header heeft opgegeven, wordt de data teruggegeven in ETRS89.
- Wanneer de gebruiker een `Accept-Crs` header heeft opgegeven, moet de server de data converteren naar het gevraagde CRS en als response header `Content-Crs` toevoegen aan de response met daarin het gebruikte CRS.
- Het is aan de implementatie om de conversie van en naar ETRS89 te doen. Programmabibliotheken zoals NetTopologySuite (voor .NET) en JTS (voor Java) kunnen hierbij helpen.


Note: geografische zoeken werkt precies hetzelfde voor references als voor observations. Dat komt omdat beide entiteiten een geografisch attribuut hebben en er slechts één kan zijn per observatie of referentie.

De volgende lijst toont de minimaal ondersteunde coördinatenstelsels met hun EPSG-codes en eenheden:

| Coordinatenstelsel | EPSG-code  | Eenheid |
|--------------------|------------|---------|
| ETRS89             | EPSG:4258  | Graden  |
| WGS84              | EPSG:4326  | Graden  |
| ETRS89/31N         | EPSG:25831 | Meters  |
| RD New             | EPSG:28992 | Meters  |

### Alle observaties binnen een straal van 1000 meter van een punt (_let op: bij coördinatenstelsels die eenheid meters gebruiken_)

```http request
GET /v3/odata/references?$filter=distance(wkt='POINT(5.00166 52.34331)') lt 1000
```

### Alle observaties die binnen een bepaald polygon vallen (_let op: dit voorbeeld gaat uit van graden en is bedoeld voor coördinatenstelsels die eenheid graden gebruiken._)

```http request
GET /v3/odata/references?$filter=intersects(wkt='POLYGON((5.00 52.34, 5.01 52.34, 5.01 52.35, 5.00 52.35, 5.00 52.34))') eq true
```