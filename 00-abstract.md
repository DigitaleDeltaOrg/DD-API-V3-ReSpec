 # Abstract

Digitale Delta API V3 is een *READ-ONLY* RESTful API die toegang biedt tot water-gerelateerde [[Observatie]]s in Nederland. 

Doel van deze specificatie is het vereenvoudigen van uitwisselen van water-gerelateerde
gegevens tussen verschillende partijen door een gestandaardiseerde interface te definiëren
die door meerdere organisaties kan worden geïmplementeerd.

Denk aan:

- Waterschappen/Hoogheemraadschappen
- Rijkswaterstaat
- Informatiehuis Water
- Waterzuiveringsorganisaties
- Gemeenten
- Provincies
- Laboratoria
- Adviesbureaus
- Wetenschappelijke instellingen

De specificatie verenigt de [[OM&S]] standaard voor het modelleren en uitwisselen van observatiegegevens
en een subset van [[OData]] voor het zoeken.

Zowel observaties vanuit waterstanden, stromingen, neerslag, grondwaterstanden en boeien (als tijdreeksen),
als ecologische observaties vanuit visvangst, tellingen en laboratoria (als losse observaties)
kunnen beschikbaar worden gesteld.

Deze documentatie is ontworpen om ontwikkelaars te helpen bij het integreren van deze gegevens in hun toepassingen en diensten.
Het is derhalve een blauwdruk voor de implementatie van een DD API.
