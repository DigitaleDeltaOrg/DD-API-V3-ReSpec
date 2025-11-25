# Ontwerpconcepten

De DD API V3 specificatie is ontworpen met een aantal kernconcepten in gedachten om interoperabiliteit, flexibiliteit en gebruiksgemak te waarborgen. Hieronder worden de belangrijkste ontwerpconcepten toegelicht.

- Eenvoudig, gestandaardiseerd, virtueel datamodel
- Subset van [OM&S](#dfn-oms) via profielen
- Subset van de [OData](#dfn-odata) V4 standaard met vereenvoudigde geografische uitbreidingen
- [[OpenAPI 3.0]] beschrijft de API
- Semantische interoperabiliteit via gestandaardiseerde vocabularia ('Water-taal' van [[Aquo]])
- Profielen voor het beschrijven van de data
- Eenvoudig en toegankelijk

## Virtueel Datamodel

Onderdeel van de OData standaard is het [Entity Data Model (EDM)](#dfn-edm) beschreven in de CSDL-standaard. 

Dit is een abstracte representatie van de data die wordt aangeboden via de API.

Door die representatie is het mogelijk om data uit verschillende bronnen op een uniforme manier te benaderen.

De specificatie legt *niet* vast hoe data opgeslagen moet worden, maar beschrijft hoe data aangeboden moet worden.
Het EDM is plat en eenvoudig, waardoor het gemakkelijk te begrijpen en te implementeren is.

## Subset van OM&S

De specificatie gebruikt een subset van de OM&S standaard.

De standaard zelf is zeer uitgebreid en flexibel, maar daardoor ook complex en door verschillende uitbreidingen en interpretaties, moeilijk uitwisselbaar.

Door gebruik te maken van een subset en profielen, wordt de complexiteit verminderd en wordt interoperabiliteit vergroot.


## Subset van OData V4

Een veelgehoorde klacht over [OData](#dfn-odata) is dat het groot is en complex te implementeren. 

Ook de standaard programmabibliotheken hiervoor zijn vaak gericht op bepaalde technologieën en daardoor niet universeel bruikbaar.

De specificatie beschrijft een standaard subset van OData die gebruikt moet worden, met een aantal uitbreidingen specifiek voor waterdata in Nederland.

Deze subset is gekozen om de implementatie eenvoudiger te maken en om ruimte voor interpretatieverschillen tussen verschillende implementaties te verminderen.

Voor meer details, zie [OData subset](06-odata-subset.md).

## Semantische Uitwisselbaarheid

Semantische uitwisselbaarheid is cruciaal voor het uitwisselen van data tussen verschillende systemen. 

Omdat DD API V3 zich primair richt op het waterdomein, 
ligt het voor de hand om de [[Aquo]]-definities te gebruiken voor het beschrijven van de data. 

[[Aquo]] is een initiatief van verschillende Nederlandse waterbeheerders 
en biedt een gestandaardiseerde set van vocabularia voor het waterdomein.

## Profielen

Profielen geven aan welk soort responses een implementatie kan teruggeven.

### Profiel FC-TR (tijdreeksen)

Dit profiel is bedoeld voor fysisch/chemische observaties die als tijdreeksen worden teruggegeven.
Door de aard van de metingen (continu) zijn deze tijdreeksen.

Bijvoorbeeld waterstanden, stromingen, neerslag en grondwaterstanden.

In de meeste gevallen is het voldoende om de volgende kenmerken te vullen in Parameter:

- Compartment (compartiment code volgens Aquo)
- Quantity (grootheid)
- Parameter (optioneel, wanneer Quantity niet specifiek genoeg is)
- Sampler (Code van de metende organisatie)
- Organisation (Eigenaar van de data, waterbeheerder)
- OrganisationNamespace (Code van de organisatie volgens Aquo)

Optioneel, maar sterk aanbevolen:

- ObservationType (Code van de waarnemingssoort volgens Aquo)

De responses zijn in [[CoverageJSON]] formaat zijn.

### Profiel FC-MS (losse metingen)

Dit profiel is bedoeld voor fysisch/chemische observaties die als losse metingen worden teruggegeven.

In de meeste gevallen is het voldoende om de volgende kenmerken te vullen in Parameter:

- Compartment (compartiment code volgens Aquo)
- Quantity (grootheid)
- Parameter (optioneel, wanneer Quantity niet specifiek genoeg is)
- Sampler (Code van de metende organisatie)
- Organisation (Eigenaar van de data)
- OrganisationNamespace (Code van de organisatie volgens Aquo)

Optioneel, maar sterk aanbevolen:

- ObservationType (Code van de waarnemingssoort volgens Aquo)

De responses zijn primair in Measure formaat zijn (combinatie van eenheid en gemeten waarde).

### Profiel ECO (losse metingen)

Dit profiel is bedoeld voor ecologische observaties. Hier wordt veelvuldig veel biologische kenmerken gemeten en vastgelegd.

Door de aard van de metingen (niet continu) zijn deze losse metingen. Bij tijdreeksen zou veel dan de biologische kenmerken ontbreken.

In ieder geval moeten de volgende kenmerken worden gevuld:

- Compartment (compartiment code volgens Aquo)
- Quantity (grootheid)
- Parameter (optioneel, wanneer Quantity niet specifiek genoeg is)
- Sampler (Code van de metende organisatie)
- Organisation (Eigenaar van de data)
- OrganisationNamespace (Code van de organisatie volgens Aquo)

Veel gebruikt, maar niet altijd nodig:

- Capacity (Hoedanigheid)
- Characterization (Typering)

Zoveel mogelijk kenmerken moeten worden gevuld in Parameter, afhankelijk van de omstandigheden van de metingen:
vaak worden specifieke biologische kenmerken gemeten, zoals: soort, leeftijdsklasse, geslacht, etc., afhankelijk van het taxon dat geobserveerd wordt.

De responses zullen divers zijn: Measure, Count, Truth en Vocab.


## Eenvoudig en Toegankelijk

De specificatie is ontworpen met het oog op eenvoud en toegankelijkheid. 

Het doel is om voor gebruikers toegang tot de API zo eenvoudig mogelijk te maken, zonder concessies te doen aan de functionaliteit.

Voor ontwikkelaars is het doel om de specificatie begrijpelijk te maken en zo eenvoudig mogelijk te implementeren.

Daarom specificeert de DD API V3 slechts twee endpoints:

- één voor het ophalen van de observaties en 
- één voor het ophalen van de kennis van het systeem (referenties).

