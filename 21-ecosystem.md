# Ecosysteem (Informatief)

Om de adoptie en implementatie van de DD API V3 te ondersteunen, worden verschillende hulpmiddelen ontwikkeld en onderhouden door de community.

## Software libraries

Voor het .NET-platform zijn open-source componenten beschikbaar die de implementatie aanzienlijk vereenvoudigen. Deze libraries verzorgen het ontleden van de OData-query, de vertaling naar database-queries en het formatteren van de response conform de DD API V3 specificatie. Een belangrijk voordeel is dat deze componenten geen afhankelijkheid hebben van de standaard Microsoft OData-libraries.

*   **GitHub**: [DigitaleDeltaOrg/ODataLib-CSharp](https://github.com/DigitaleDeltaOrg/ODataLib-CSharp)
*   **NuGet**: Beschikbaar via [NuGet.org](https://www.nuget.org/) door te zoeken op `DigitaleDelta`.

Verder is er een **implementatie-template** in ontwikkeling (.NET) voor DD API V3. 
Deze template maakt gebruik van de beschikbare libraries om snel een volledige DD API V3 service op te zetten. 
Als ontwikkelaar hoef je dan alleen nog de autorisatie in te regelen en de logica voor het **ophalen van de data** (ongeacht de bron, zoals SQL of NoSQL) te implementeren. 
De template faciliteert vervolgens het 'mappen' van deze bron-data naar het virtuele Digitale Delta datamodel.

De kracht van deze template is dat de OpenAPI (OAS) en `$metadata` (CSDL) definities automatisch worden gegenereerd en gesynchroniseerd op basis van de configuratie. 
Hierdoor worden URL's, authenticatiemethoden en specifieke eigenschappen (parameters/metadata) consistent ontsloten. 
Om de betrouwbaarheid te vergroten, bevat de template ingebouwde validatie die controleert of de geconfigureerde mappings en eigenschappen volledig 
overeenstemmen met de officiële Digitale Delta definities.

## Validatie-services

Er wordt gewerkt aan een online, open-source validatie-service. 
Deze service kan op basis van de OpenAPI-definitie (OAS) en het `$metadata` endpoint van een implementatie automatisch controleren of deze volledig voldoet aan de DD API V3 specificatie en de bijbehorende virtuele datamodellen.

_De data zelf wordt niet gevalideerd._ 

## Test- en query tools

Voor het verkennen van data en het testen van queries is een visuele tool in ontwikkeling. 
Hiermee kunnen gebruikers op eenvoudige wijze OData-queries samenstellen en direct uitvoeren op een DD API V3 endpoint.

*   **Query Tool (Bèta)**: [ddapi-ui.ecosys.nl](https://ddapi-ui.ecosys.nl/)

Deze service zal in de toekomst worden uitgebreid, zodat gebruikers ook eigen (niet-publieke) endpoints kunnen toevoegen voor testdoeleinden.
De code van de service zal nog open-source worden gemaakt.