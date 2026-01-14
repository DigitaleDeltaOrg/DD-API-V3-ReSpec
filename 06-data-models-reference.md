# **Virtuele** Datamodellen (Reference)

<aside class="advisement" title="Virtueel model">
De modellen in dit hoofdstuk zijn virtueel. 
Ze beschrijven uitsluitend de structuur van de data zoals deze door de API wordt uitgewisseld. 
Een implementatie hoeft deze structuur intern niet als opslagmodel te gebruiken; de aanbieder is vrij in de keuze van database-technologie en mapt de eigen bronnen on-the-fly naar dit virtuele model.
</aside>

Dit hoofdstuk beschrijft een basismodel voor referenties van DD API V3.

Vet is verplicht.

Een JSON-schema voor het reference type is [hier](https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/tree/main/definitions/v3.0/json-schema/reference.schema.json) beschikbaar.

Het gehele OData response in JSON-schema voor het `/v3/odata/references` endpoint is [hier](https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/tree/main/definitions/v3.0/json-schema/odata.reference.schema.json) beschikbaar.

## Reference

| Eigenschap            | Type    | Omschrijving                                                                    |
|-----------------------|---------|---------------------------------------------------------------------------------|
| **Id**                | string  | Id van de referentie.                                                           |
| **Type**              | string  | Soort referentie.                                                               |
| **Organisation**      | string  | Naam van de organisatie.                                                        |
| OrganisationNamespace | string  | Code van de organisatie volgens Aquo.                                           |
| **Code**              | string  | Begin en eind van het evenement. Begin- en EndPosition zijn in ISO8601 formaat. |
| **Description**       | string  | Geldigheidsperiode van de data.                                                 |
| Geography             | GeoJSON | Verplicht by type = "MeasurementObject" (meetobject).                           |


## DD API V3 Reference UML
![Class diagram Observations](https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/raw/refs/heads/main/media/DD-API-V3-references-model.svg)
<figure>
<figcaption>DD API V3 Reference UML</figcaption>
</figure>

`Type` **MOET** voorkomen in [ContextDefinitions.csv](https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/tree/main/definitions/ContextDefinitions.csv) óf in [ReferenceDictionaries.csv](https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/tree/main/definitions/ReferenceDefinitions.csv).

De combinatie van `Type` en `Code` moet uniek zijn.
In sommige omstandigheden kan de combinatie van `Type` en `Code` niet uniek zijn. In dat geval moet `Organisation` worden toegevoegd om de combinatie uniek te maken.

Data in Reference kan worden uitgebreid met extra eigenschappen, afhankelijk van de implementatie. Denk daarbij aan een LinkedData-referentie.

_Een LinkedData-referentie zal in versie 4 van DD API worden toegevoegd._

