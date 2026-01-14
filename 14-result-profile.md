## Resultaatprofiel (V3.1 extensie)

<aside class="advisement" title="In ontwikkeling">
Deze functionaliteit is onderdeel van V3.1 en stelt clients in staat om de representatie van het resultaat te forceren.
</aside>

Een server die deze extensie ondersteunt, **MOET** de `API-Version` header met waarde `3.1.0` meesturen en de `X-DD-Capabilities` header **MOET** ten minste de waarde `resultprofiles` bevatten.

Standaard bepaalt de server de optimale representatie (losse meting of tijdreeks) van het Result. In V3.1 kan een client dit forceren:

### Optie 1: Content Negotiation
Een client **mag** via de `Accept` header een specifiek profiel afdwingen:

- `Accept: application/json;resultprofile=original` (Geen aanpassing)
- `Accept: application/json;resultprofile=coveragejson` (Forceert tijdreeksen)
- `Accept: application/json;resultprofile=observation` (Forceert losse observaties)

### Optie 2: Query Parameter

Indien headers niet bruikbaar zijn, **mag** de parameter `resultprofile` worden gebruikt:

- `?resultprofile=original`
- `?resultprofile=coveragejson`
- `?resultprofile=observation`

### Verwerkingsregel
- Indien een server de gevraagde transformatie niet kan uitvoeren, **MOET** deze antwoorden met een **406 Not Acceptable**.
- Indien de aanvrager een `resultprofile` heeft gebruikt, **MOET** dat ook in een response header worden teruggegeven.