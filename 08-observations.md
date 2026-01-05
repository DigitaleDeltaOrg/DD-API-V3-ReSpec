# Observation zoekvoorbeelden

Algemeen: een observation bestaat uit de volgende blokken:  
- Tijdstip-informatie (bemonstering, validatie, geldigheid) en resultaatsoort
- Foi: Feature of Interest (meetlocatie)  
- Parameter: beschrijft de omstandigheden van de observatie  
- Metadata: extra informatie over de observatie  
- Result: resultaat van de observatie

Parameter bevat alle eigenschappen die de observatie verder specificeren, zoals:  
- Compartment: Aquo-code voor compartiment (bijv. OW, BW)  
- Quantity: Aquo-code voor grootheid (bijv. WATHTE (waterhoogte), T (temperatuur), Q (debiet))  
- Sampler: code van de metende organisatie  
- Organisation: eigenaar van de data (bijv. RWS) 
- OrganizationNamespace: Aquo-code van de organisatie volgens Aquo (NL80 voor Rijkswaterstaat)
- Parameter: Aquo-code voor parameter, behalve Grootheid en typering (bijv. O2, Cl, Abies alba)
- Capacity: Aquo-code voor hoedanigheid van de observatie

## Voorbeeld 1: Alle observaties voor een specifieke meetlocatie

```GET
/v3/odata/observations?$filter=Foi/Code eq 'AMSRKNE'
```

## Voorbeeld 2: Alle observaties voor een specifieke meetlocatie en compartiment en parameter zuurstofgehalte

```GET
/v3/odata/observations?$filter=Foi/Code eq 'AMSRKNE' and Parameter/Compartment eq 'OW' and Parameter/Parameter eq 'O2'
```

## Voorbeeld 3: Alle observaties voor een specifieke meetlocatie, compartiment en grootheid in een bepaalde periode

```GET
/v3/odata/observations?$filter=Foi/Code eq 'AMSRKNE' and Parameter/Compartment eq 'OW' and Parameter/Quantity eq 'WATHTE' and ResultTime ge 2023-01-01T00:00:00Z and ResultTime le 2023-01-31T23:59:59Z
```

## Voorbeeld 4: Alle observaties voor een specifieke meetlocatie, compartiment en grootheid in een bepaalde periode

```GET
/v3/odata/observations?$filter=Foi/Code eq 'AMSRKNE' and Parameter/Compartment eq 'OW' and Parameter/Quantity eq 'WATHTE' and year(ResultTime) eq 2023 and month(ResultTime) eq 1
```

Het antwoord (response) heeft altijd dezelfde structuur, ongeacht de gebruikte filters:

```json
{
  "@odata.context": "https://{url}/v3/odata/$metadata#observations",
  "value": [
    {
      "Id": "obs-001",
      "ResultTime": "2023-01-15T12:00:00Z",
      "Type": "Measure",
      "PhenomenonTime": {
        "BeginPosition": "2023-01-15T12:00:00Z",
        "EndPosition": "2023-01-15T12:10:00Z"
      },
      "ValidTime": {
        "BeginPosition": "2023-01-15T12:00:00Z",
        "EndPosition": "2023-01-15T12:10:00Z"
      },
      "Foi": {
        "Id": "foi-001",
        "Code": "AMSRK",
        "Description": "Meetlocatie Amsterdam Rijnkanaal",
        "Geography": { 
          "type": "Point",
          "coordinates": [
            5.00166,
            52.34331
          ]}
      },
      "Parameter": {
        "Compartment": "OW",
        "Quantity": "WATHTE",
        "Organisation": "Rijkswaterstaat",
        "OrganisationNamespace": "NL80"
      },
      "Metadata": {
        "modifiedOn": "2023-01-15T12:05:00Z"
      },
      "Result": {
        /* Resultaatdata */
      }
    }
    /* Meer observaties... */
  ]
}
``` 

Voorbeelden van een response per type Result (resultaat-data):

Count (telling, altijd een geheel getal)
```json
{
  "count": 42
}
```

Measure (waarde plus eenheid)
```json
{
  "Value": 7.5,
  "Unit": "Celsius"
}
```

Truth (waar/niet waar)
```json
{
  "Truth": "True"
}
```

[[CoverageJSON]], tijdreeks of ruimtelijke dekking. Dit zal hoofdzakelijk voor **waterkwantiteit** worden gebruikt.
Het is aan te raden om bij **waterkwantiteitsmetingen** ook parameter/observationtype te vullen met een relevante waarde volgens de Aquo domeintabel 'Waarnemingssoort'.
Dit geeft veelal een voldoende distinctie voor selectie.


[[CoverageJSON]] is een uitgebreid formaat voor het weergeven van tijdreeksen en ruimtelijke dekkingen.
Hieronder een voorbeeld van een tijdreeks met 6 tijdstippen op een enkele locatie:

```json
{
  "Id": "a4f6af36-6300-49b4-a579-b1aba70e3288",
  "type": "Coverage",
  "domain": {
    "type": "Domain",
    "domainType": "PointSeries",
    "axes": {
      "x": {
        "values": [5.00166]
      },
      "y": {
        "values": [52.34331]
      },
      "t": {
        "values": [
          "2013-01-01",
          "2013-01-02",
          "2013-01-03",
          "2013-01-04",
          "2013-01-05",
          "2013-01-06"
        ]
      }
    },
    "referencing": [
      {
        "coordinates": [
          "t"
        ],
        "system": {
          "type": "TemporalRS",
          "calendar": "Gregorian"
        }
      }
    ]
  },
  "parameters": {
    "Debiet": {
      "type": "Parameter",
      "observedProperty": {
        "label": {
          "en": "Debiet"
        }
      }
    }
  },
  "ranges": {
    "Q": {
      "type": "NdArray",
      "dataType": "float",
      "axisNames": [
        "t"
      ],
      "shape": [
        6
      ],
      "values": [
        43.9599,
        43.9599,
        43.9640,
        43.9640,
        43.9679,
        43.9879
      ]
    }
  }
}
```

Wanneer er meer observaties voldoen aan het filter dan op de pagina passen, dan wordt een @odata.nextLink meegegeven in de response, die een url bevat, waarmee de volgende pagina kan worden opgevraagd.

**Belangrijk** Het coverage-deel moet *geldig* zijn, Dat kan bijvoorbeeld in de CoverageJSON playground worden getest: https://covjson.org/playground/. Playground geeft fouten wanneer de structuur ongeldig is.


