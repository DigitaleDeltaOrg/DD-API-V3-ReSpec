 # Abstract

Digitale Delta API V3 is een *READ-ONLY* RESTful API die toegang biedt tot water-gerelateerde [[Observatie]]s in Nederland. 

V3.1 is een optionele uitbreiding op DD API V3 en bevat een tweetal specificaties, beiden optioneel":

- PubSub (publish/subscribe) op wijzigingen in observaties data. __PubSub__ is __niet__ READ-ONLY.
- Zoek-profielen voor vooraf-opgestelde selecties (`$filter` en `$select`) van observaties.

Deze API is ontworpen om ontwikkelaars te helpen bij het integreren van deze gegevens in hun toepassingen en diensten.

Het verenigt de [[OM&S]] standaard voor het modelleren en uitwisselen van observatiegegevens 
en een subset van [[OData]] voor het zoeken.

Zowel observaties vanuit waterstanden, stromingen, neerslag, grondwaterstanden en boeien (als tijdreeksen), 
als ecologische observaties vanuit visvangst, tellingen en laboratoria (als losse observaties) 
kunnen worden opgevraagd.
