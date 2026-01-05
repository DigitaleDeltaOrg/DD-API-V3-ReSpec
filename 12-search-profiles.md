# Zoekprofielen-extensie

Zoekprofielen maken het eenvoudiger om complexe selecties te maken. Een zoekprofiel beschrijft een vooraf gedefinieerde selectie van observaties op basis van filters en geselecteerde velden.
Een voorbeeld hiervoor is bijvoorbeeld Slim Watermanagement, dat een standaard selectie van waterstanden en stromingen wil aanbieden voor hun gebruikers.
Een zoekprofiel bepaalt alleen alles uit het Parameter-blok. Het FoI (Feature of Interest, in DD API V3 altijd de meetlocatie) en de tijdsperiode worden altijd door de gebruiker opgegeven.

Logisch gezien wordt een zoekprofiel toegepast vóórdat de query wordt uitgevoerd. Additionele filters en selecties opgegeven in de query door de gebruiker, worden toegepast op de resultaten van het zoekprofiel.
Functioneel ziet het uit als `((zoekprofiel) AND ($filter))` voor het filter-deel.
Voor het selectiedeel geldt dat altijd de de geselecteerde eigenschappen uit zowel het zoekprofiel worden teruggegeven plus de eigenschappen die de gebruiker vraagt via de `$select`-clausule.

Zoekprofielen worden aangeboden via een aparte endpoint `/v3.1/searchprofiles`. Deze endpoint biedt een lijst van beschikbare zoekprofielen.
Meerdere zoekprofielen worden geïnterpreteerd als een logische OR tussen de profielen.

```GET
GET /v3.1/searchprofiles
```
Response:

```json
{
  "value": [
    {
      "id": "FC-TR-SWM",
      "name": "Slim Watermanagement Tijdreeksen (Fysisch/Chemisch)",
      "description": "Selectieprofiel voor Slim Watermanagement met waterstanden en stromingen.",
      "parameterFilterEquivalent": "(parameter/quantity in ('Cl/GELDHD','Q','DEBFTE','GELDHD','SALNTT','T','DRSTRPBSTTPE','WATHTE','STROOMSHD') or (parameter/quantity eq 'CONCTTE' and parameter/parameter eq 'Cl')) and parameter/compartment eq 'OW'",
      "parameterSelect": "phenomenonTime, resultTime, foi/Code, foi/Geography, parameter/quantity, parameter/parameter, result/measure/uom, result/measure/value"
    }
  ]
}
```

Eén of meerdere zoekprofielen kunnen worden toegepast in een query door de ids van de profielen, door komma's gescheiden, op te geven.
De profielen kunnen via de `searchprofile` query parameter worden aangegeven.

```GET

Opgeven van een selectieprofiel in een query kan via de `searchprofile` query parameter (géén $, want het is geen OData eigenschap).