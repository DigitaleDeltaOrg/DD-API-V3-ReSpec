# Zoekprofielen-extensie

<aside class="advisement" title="Status: In ontwikkeling">
Deze sectie is onderdeel van de V3.1 concept-specificatie. Implementatie wordt aangemoedigd voor testdoeleinden, maar de interface is nog niet bevroren.
</aside>

Zoekprofielen maken het eenvoudiger om complexe selecties te maken. Een zoekprofiel beschrijft een vooraf gedefinieerde selectie van observaties op basis van filters en geselecteerde velden.
Een voorbeeld hiervoor is bijvoorbeeld Slim Watermanagement, dat een standaard selectie van waterstanden en stromingen wil aanbieden voor hun gebruikers.
Een zoekprofiel bepaalt alleen alles uit het Parameter-blok. Het FoI (Feature of Interest, in DD API V3 altijd de meetlocatie) en de tijdsperiode worden altijd door de gebruiker opgegeven.

Logisch gezien wordt een zoekprofiel toegepast vóórdat de query wordt uitgevoerd. Additionele filters en selecties opgegeven in de query door de gebruiker, worden toegepast op de resultaten van het zoekprofiel.
Functioneel ziet het uit als `((zoekprofiel) AND ($filter))` voor het filter-deel.
Voor het selectiedeel geldt dat altijd de de geselecteerde eigenschappen uit zowel het zoekprofiel worden teruggegeven plus de eigenschappen die de gebruiker vraagt via de `$select`-clausule.

Zoekprofielen worden aangeboden via een aparte endpoint `/v3.1/searchprofiles`. Deze endpoint biedt een lijst van beschikbare zoekprofielen.
Meerdere zoekprofielen worden geïnterpreteerd als een logische OR tussen de profielen.

Een server die deze extensie ondersteunt, **MOET** de `API-Version` header met waarde `3.1.0` meesturen en de `X-DD-Capabilities` header **MOET** ten minste de waarde `searchprofiles` bevatten.

```http request
GET /v3/searchprofiles
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

Opgeven van een selectieprofiel in een query kan via de `searchprofile` query parameter (géén $, want het is geen OData eigenschap).

## Toepassing in Queries

Een client past een zoekprofiel toe door de unieke `id` mee te geven in de `searchprofile` query parameter.

**Voorbeeld request:**

```http request
GET /v3/odata/observations?searchprofile=FC-TR-SWM&$filter=ResultTime ge 2024-01-01T00:00:00Z`
```

### Verwerkingsregels voor de server:

1. **Filter Samenvoeging**: De server **MOET** het filter uit het zoekprofiel (`parameterFilterEquivalent`) combineren met het eventuele `$filter` van de gebruiker middels een logische `AND` operatie.
2. **Select Samenvoeging**: De server **MOET** de velden uit `parameterSelect` combineren met de velden uit de `$select` van de gebruiker. Indien de gebruiker geen `$select` opgeeft, worden de velden uit het zoekprofiel als basis gebruikt.
3. **Meerdere Profielen**: Indien meerdere profielen worden opgegeven (bijv. `searchprofile=P1,P2`), worden de filters van deze profielen gecombineerd middels een logische `OR`. Het resultaat daarvan wordt vervolgens met `AND` gekoppeld aan het filter van de gebruiker.

## Foutafhandeling
Indien een client een `searchprofile` opgeeft dat niet bestaat, **MOET** de server antwoorden met een **HTTP 400 Bad Request**, met een duidelijke foutmelding in het OData error-formaat.

## Optimalisatie (Informatief)

Zoekprofielen bieden server-ontwikkelaars de mogelijkheid om de performance van de API aanzienlijk te verbeteren:

- **Pre-compilatie**: De server kan de OData-expressie in een zoekprofiel vooraf valideren en vertalen naar een geoptimaliseerde database-query.
- **Indexering**: Door bekende zoekprofielen te analyseren, kunnen gerichte database-indexen worden aangelegd voor de meest gebruikte combinaties van parameters en grootheden.
- **Caching**: Resultaten van veelgebruikte zoekprofielen kunnen door de server effectiever worden gecachet, wat de responstijden voor eindgebruikers verlaagt.
