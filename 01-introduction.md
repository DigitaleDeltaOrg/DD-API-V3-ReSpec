# Introductie

DD API V3 is een [API](#dfn-api)-specificatie van Digitale Delta, onder beheer van [Informatiehuis Water](#dfn-ihw).

Het is een *blauwdruk* voor het uitwisselen van water-gerelateerde metingen ([observaties](#dfn-observatie)), met een focus op uitwisseling.

De [API](#dfn-api) beschikt niet over features zoals toevoegen, wijzigen of verwijderen van data.

Aanbieders kunnen hun eigen implementatie maken, maar door zich aan deze gedetailleerde blauwdruk te houden, wordt data uitwisselbaar tussen verschillende systemen.

Gebruikers kunnen hierdoor eenvoudig data van verschillende bronnen combineren en analyseren zonder zich zorgen te maken over incompatibiliteit of conversieproblemen.

## Begrippen

<dfn>Digitale Delta</dfn>: Een initiatief van Nederlandse waterbeheerders gericht op het verbeteren van de digitale gegevensuitwisseling in het waterdomein, beheerd door [IHW](#dfn-ihw).

<dfn>API</dfn>: Application Programming Interface, een set van regels en protocollen voor het bouwen en integreren van softwaretoepassingen.

<dfn>RESTful</dfn>: Representational State Transfer, een architecturale stijl voor gedistribueerde systemen die gebruik maakt van standaard HTTP-methoden.

<dfn>Observatie</dfn>: Een meting of waarneming van een bepaald fenomeen op een specifieke locatie en tijd. De context van de observatie wordt beschreven met behulp van gestandaardiseerde vocabularia.

<dfn>IHW</dfn>: [Informatiehuis Water](https://ihw.nl) is een samenwerkingsverband van Nederlandse waterbeheerders dat zich richt op het verbeteren van informatie-uitwisseling en -beheer in het waterdomein.

<dfn>Aquo</dfn>: Een initiatief van Nederlandse waterbeheerders dat gestandaardiseerde vocabularia biedt voor het waterdomein, beheerd door [Informatiehuis Water](#dnf-ihw), de [Aquo standaard](https://aquo.nl).

<dfn>OMS</dfn>: Observation, Measurement & Samples, een standaard van de Open Geospatial Consortium (OGC) voor het modelleren en uitwisselen van observatiegegevens.

<dfn>OData</dfn>: [Open Data Protocol](https://www.odata.org) is een standaard voor het bouwen en consumeren van RESTful API`s.

<dfn>Profiel</dfn>: Een specifieke configuratie of subset van een standaard die is afgestemd op een bepaald gebruiksgebied of toepassing.

<dfn>EDM</dfn>: Entity Data Model, een abstracte representatie van de data die wordt aangeboden via een API, beschreven in [CSDL](#dfn-csdl).

<dfn>CSDL</dfn>: <a href="https://docs.oasis-open.org/odata/odata-csdl-xml/v4.01/odata-csdl-xml-v4.01.html" rel="nofollow">Common Schema Definition Language</a>, een XML-gebaseerde taal voor het beschrijven van het Entity Data Model in OData.

[[OPENAPIS-3.0.3]]: OpenAPI Specification, een standaard voor het beschrijven van RESTful API`s.

<dfn>ANTLR</dfn>: [Abstract Syntax Tree Recognizer](https://www.antlr.org), een parser/tokenizer generator die grammatica's beschrijft in een specifieke taal.

<dfn>CRS</dfn>: Coordinate Reference System, een systeem voor het definiëren van locaties op de aarde.

<dfn>ETRS89</dfn>: European Terrestrial Reference System 1989, een geografisch coördinatenstelsel dat wordt gebruikt in Europa.

<dfn>EPSG</dfn>: [European Petroleum Survey Group](https://epsg.org), een organisatie die standaarden ontwikkelt voor geografische coördinatenstelsel en kaartprojecties. EPSG-codes worden gebruikt om een specifiek coördinatenstelsel te identificeren.

<dfn>WGS84</dfn>: World Geodetic System 1984, een wereldwijd coördinatenstelsel dat wordt gebruikt voor gps.

<dfn>RD New</dfn>: Rijksdriehoeksmeting, een coördinatenstelsel dat wordt gebruikt in Nederland.

<dfn>mTLS</dfn>: Mutual Transport Layer Security, een beveiligingsprotocol dat gebruikmaakt van certificaten voor wederzijdse authenticatie.

<dfn>OAuth2</dfn>: Een autorisatieprotocol dat veilige toegang tot bronnen op een server mogelijk maakt zonder dat gebruikers hun wachtwoorden hoeven te delen.

<dfn>OpenID Connect</dfn>: Een authenticatielaag bovenop OAuth2 die gebruikersidentiteit verifieert en basisprofielinformatie verstrekt.

<dfn>API Key</dfn>: Een unieke sleutel die wordt gebruikt om toegang te krijgen tot een API.

<dfn>Paginering</dfn>: Het proces van het opdelen van een grote dataset in kleinere, beheersbare pagina's voor efficiëntere verwerking en weergave.

<dfn>Query-opties</dfn>: Parameters die worden gebruikt om zoekopdrachten te verfijnen en filteren in een API. 

<dfn>OGC</dfn>: [Open Geospatial Consortium](https://ogc.org), een internationale organisatie die standaarden ontwikkelt voor ruimtelijke en locatiegebaseerde diensten.

[[CoverageJSON]]: Een JSON-gebaseerd formaat voor het representeren van rasterdata en tijdreeksen, ontwikkeld door het Open Geospatial Consortium (OGC).


## Doel

Veel organisaties willen (watergerelateerde) metingen/waarnemingen ([observaties](#dfn-observatie)) delen met andere organisaties of individuen.

Er is echter nog geen uniforme wijze van het uitwisselen van deze data dat zowel kwantiteit- als kwaliteitsdata omvat.

Kwantiteitsdata betreft metingen zoals waterstanden, stromingen, neerslag en grondwaterstanden. Deze worden veelal als tijdreeksen uitgewisseld. Verwachtingen kunnen ook als tijdreeksen worden uitgewisseld, bijvoorbeeld in [CoverageJSON](#dfn-CoverageJSON) formaat.

Kwaliteitsdata betreft metingen zoals ecologische waarnemingen, visvangsten, tellingen en laboratoriumanalyses. Deze worden vaak als losse observaties uitgewisseld.

DD API V3 biedt een gestandaardiseerde aanpak voor het uitwisselen van deze data, waardoor het eenvoudiger wordt om systemen te koppelen en gegevens te integreren.

Het is gebaseerd op open standaarden zoals OGC [OM&S](#dfn-oms) voor het modelleren van observatiegegevens en OData voor het zoeken en filteren van data.

Voor zowel [OM&S](#dfn-oms) als [OData](#dfn-odata) zijn 'profielen' gedefinieerd die specifiek zijn afgestemd op water-gerelateerde data in Nederland.

De blauwdruk is essentieel voor:

- Waterbeheerders die data willen aanbieden aan andere organisaties of individuen
- Onderzoeksinstituten die systemen willen koppelen
- Softwareontwikkelaars die water-data willen integreren in hun applicaties
- Data-analisten die gegevens willen combineren
- Data scientists die water-gerelateerde datasets willen analyseren

Hoofdstuk 7 beschrijft hoe een implementatie kan worden opgezet. Dit is alleen verplicht voor ontwikkelaars die een implementatie van de DD API V3 specificatie willen maken.

## Status van dit document

### Leeswijzer

| Status      | Description & Link                    |
|-------------|---------------------------------------|
| Informative | Inleiding NL API Strategie            |
| Informative | Architectuur NL API Strategie         |
| Informative | API Design Rules (ADR v2.0)           |
| Normative   | [[OpenAPI 3.0]]                       |
| Normative   | Module Transport Security module v1.0 |
| Normative   | [[EPSG]]                              |
| Normative   | [OData](#dfn-odata)                             |
| Normative   | [OM&S](#dfn-oms)                              |
| Normative   | [[CoverageJSON]]                      |

Alvorens dit document te lezen, is het aan te raden kennis te nemen van de informatieve documenten in bovenstaande lijst.

De normatieve documenten zijn belangrijk voor het begrijpen van de blauwdruk.

### Versiebeheer

Deze specificatie hanteert [Semantic Versioning](https://semver.org/lang/nl/) (MAJOR.MINOR.PATCH). 

Iedere wijziging in de specificatie, het datamodel of de API wordt vastgelegd in een changelog volgens de semver-regels. 

Breaking changes worden alleen doorgevoerd bij verhoging van de MAJOR versienummer.
