# Implementatie

### Voorbereiding van de API

Feitelijk is DD API V3 een API die via het OpenData Protocol (OData) dat kan ontsluiten.
Het voorziet niet in het wijzigen van data (geen Create, Update of Delete operaties). Ook transformatie van data (`$compute`) is niet voorzien.

OData vereist een definitie van de entiteiten en relaties in de API. Dit wordt gedaan met CSDL (Common Schema Definition Language), een XML-gebaseerde taal.
Een [basis CSDL](./definitions/v3.0/csdl-base.xml) is beschikbaar als onderdeel van de specificatie. Via comment is aangegeven waar aanpassingen gemaakt mogen worden.

De enige aanpassingen die mogen worden gemaakt, zit in de eigenschappen van de entiteiten ['parameter'](definitions/ContextDefinitions.csv)  en ['metadata'](definitions/MetadataDefinitions.csv) binnen entiteit 'observation', wat per profiel verschilt.

Daarnaast staat het vrij om eigenschappen **toe te voegen** aan entiteit 'reference'.

Een OData API heeft een aantal vaste onderdelen:

- een $metadata (`../v3/odata/$metadata`) endpoint dat de [[CSDL]] (Common Schema Definition Language) beschrijft
- een of meer entiteiten (entity sets) die de data representeren
- een aantal standaard query-opties voor zoeken en filteren

Omdat de API een REST API is, is er ook een OpenAPI Specificatie (OAS).

De [OAS] (Open API Specification), is afgeleid van de CSDL (Common Schema Definition Language) die de entiteiten en relaties in de API beschrijft.

Een [basis OAS](./definitions/v3.0/oas3.0-base.yaml) is beschikbaar als onderdeel van de specificatie. 

YAML is gebruikt, omdat het daarmee via comments aan te geven us waar aanpassingen gemaakt mogen worden, wat niet in standaard JSON kan.

Boven beschreven wijzigingen aan parameter, metadata en referentie-entiteiten moeten ook in de OAS worden doorgevoerd.

Daarnaast kunnen er aanpassingen worden gedaan in de OAS voor zaken die niet in de CSDL staan, zoals:

- titel
- logo (gebruik als basis [het logo van DD API V3](media/DigitaleDelta-Basis.svg))
- server URL's
- beveiliging (mTLS, OAuth2, OpenID Connect, API Keys)
- contactinformatie
- licentie-informatie
- beschrijvingen

_Tip: het logo is in SVG-formaat. De tekst in het logo kan via een text-editor gewijzigd worden._

Zodra de CSDL en de OAS klaar zijn, is de basis voor het implementeren van de API gelegd.

### Implementatie van de API

Er kan op twee manieren begonnen worden met het implementeren van de DD API V3 specificatie:

- gebruik de OData libraries van het betreffende platform
- gebruik een eigen OData parser

Het gebruik van een platform-eigen OData library ligt voor de hand, maar houdt rekening met de 'opinies' van de implementaties voor typed-talen (zoals Java en C#).

Het alternatief van een eigen parser 'maken' is eenvoudiger dan het lijkt.

### Optioneel: eigen OData parser

Voor DD API V3 is er een ANTLR definitie van OData beschikbaar die precies de subset van OData implementeert zoals in DD API V3 gebruikt wordt.

ANTLR staat voor 'Abstract Syntax Tree Recognizer' en is een parser/tokenizer *generator*. Een ANTLR-definitie is een YAML-bestand dat de grammatica van een parser beschrijft.

De ANTLR-definitie van DD API V3 kan worden gebruikt om een parser te genereren in verschillende programmeertalen, zoals Java, C#, Python, JavaScript. 

Er zijn nog meer tools beschikbaar hetzelfde doen voor andere programmeertalen, zoals C, C++ en Rust.

Dit is de **optionele code-generatie fase**.

[Voor C# is er een open source library gemaakt voor DD API V3](https://github.com/DigitaleDeltaOrg/ODataLib-CSharp) die geen afhankelijkheden van de Microsoft OData libraries.
Deze zijn ook beschikbaar als NuGet pakketten.

![Infrastructuur](media/OData-Process.svg)
<figure>
<figcaption>Infrastructuur</figcaption>
</figure>

Dynamische talen hebben voor OData een voordeel, omdat er al veel libraries beschikbaar zijn, maar ook omdat de CSDL dynamisch is.

### Runtime van de API

Tijdens runtime (opvragen van data) zijn er een aantal stappen die doorlopen moeten worden:

1. **Ontvangen van de HTTP request**: De API ontvangt een HTTPS request met een URL die de entiteit en eventuele query-opties bevat.
2. **Valideren/parsen van de request**: De API valideert en parsed de request, gebruikmakend van een OData parser. 
3. **Parsen van de OData query**: De API gebruikt de OData parser (of de gegenereerde parser) om de query-opties te parsen en om te zetten in een interne representatie.
4. **Opvragen van de data**: De API gebruikt de interne representatie van de query om de data op te vragen uit de onderliggende database of datastore.  
   Dit kan een SQL-database, een NoSQL-database, of een andere datastore zijn. **Houdt rekening met toegangsrechten!**
5. **Formatteren van de response**: De API formatteert de opgevraagde data in het juiste formaat JSON volgens de OData specificatie én de DD API V3 specificatie.
6. **Terugsturen van de response**: De API stuurt de geformatteerde data terug naar de client als een HTTPS-response.
7. **Foutafhandeling**: De API moet in staat zijn om fouten af te handelen, zoals ongeldige requests, ontbrekende data, of interne serverfouten. 
   Fouten moeten worden gerapporteerd aan de client met de juiste HTTP-statuscodes en foutberichten.

## Foutmeldingen

Ook de foutmeldingen van de API worden gestandaardiseerd.

| HTTP statuscode           | Foutmelding                                             |
|---------------------------|---------------------------------------------------------|
| 400 Bad Request           | Ongeldige request                                       |
| 401 Unauthorized          | Onbevoegde toegang                                      |
| 403 Forbidden             | Onbevoegde toegang                                      |
| 404 Not Found             | Onbekende resource                                      |
| 429 Too Many Requests     | RateLimit (te veel bevragingen in een bepaalde periode) |
| 500 Internal Server Error | Interne serverfout                                      |
| 503 Service Unavailable   | Service niet beschikbaar                                |

## RateLimit

Een API-implementatie kan ervoor kiezen om het aantal aanvragen per tijdseenheid te beperken.

Indien rate limiting wordt toegepast, moeten de volgende headers worden toegevoegd aan de response:

- RateLimit-Limit
- RateLimit-Remaining
- RateLimit-Reset

De headers geven inzicht in hoe lang er gewacht moet worden voordat de volgende aanvraag kan worden verzonden.

Indien er teveel requests tegelijk worden verzonden, moet de API een 503 (Service Unavailable) response terugsturen.

## Tips

Performance is een zeer belangrijk aspect bij DD API V3, die potentieel veel data kan bevatten. 

## API Design Rules
Zorg ervoor dat de API voldoet aan de relevante [API Design Rules](https://gitdocumentatie.logius.nl/publicatie/api/adr/2.0.0/).

De relevante regels zijn:

...

### Algemeen
`$count` is standaard niet ingeschakeld. Reden: bij grote datasets kan het zeer vertragend zijn.

Wanneer '$count' is ingeschakeld, dan is het aan te bevelen het resultaat van de count te cachen, 
zodat bij herhaalde requests de count niet steeds opnieuw berekend hoeft te worden. 

Gebruik daarbij zowel `$filter` als (eventueel) de gebruikeridentificatie in de cache-key.

### `$skiptoken`
`$skiptoken` is een query-optie die gebruikt wordt voor paginering van grote datasets.
Het werkt door een token terug te geven in de response die de client kan gebruiken om de volgende pagina op te vragen.

Dit werkt sneller dan `$skip`, omdat het niet nodig is om de volledige dataset door te lopen.

Het volgende blok data kan dan worden bepaald door in het filter op de opslaglaag een '> Id' toe te voegen.

'$skip' wordt _sterk ontraden_.

_Id is hier een unieke identifier van de record, bijvoorbeeld een auto-increment integer of een UUID._

#### Produceren

- Bepaal de request-URL zonder het eventuele opgegeven `$skiptoken` (baseRequestURL)
- Bepaal de Id van de laatste record voor de response
- Voeg Id en de baseRequestURL toe aan de request-URL
- Voeg een tijdstempel toe aan de request-URL
- Base64-encode het resultaat
- Voeg een HMAC om het resultaat te ondertekenen (minimaal SHA256)
- Voeg het resultaat toe aan het `$skiptoken`

Dit maakt het `$skiptoken` redelijk veilig tegen misbruik.

Tip: sorteer altijd de records op Id.

#### Valideren
- Base64-decode het `$skiptoken`
- Controleer of de URL van de aanvrager (zonder het `$skiptoken`) overeenkomen met die in het `$skiptoken` is opgegeven.
- Controleer of de tijdstempel in het `$skiptoken` niet meer dan x minuten geleden is.
- Extraheer het laatst gebruikte Id
- Valideer de HMAC-handtekening
- Voeg '> Id' toe aan het filter

###  Componenten
Er zijn voor C# een aantal open source componenten beschikbaar die kunnen helpen bij de implementatie van een DD API V3: https://github.com/DigitaleDeltaOrg/ODataLib-CSharp. 

Deze zijn ook beschikbaar als NuGet pakketten door te zoeken op `DigitaleDelta`.

Deze componenten zorgen voor het ontleden van de OData query, vertalen naar database queries en formatteren van de response. Hierbij zijn geen Microsoft OData libraries nodig.

