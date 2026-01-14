# PubSub-extensie

<aside class="advisement" title="Status: In ontwikkeling">
Deze sectie is onderdeel van de V3.1 concept-specificatie. Implementatie wordt aangemoedigd voor testdoeleinden, maar de interface is nog niet bevroren.
</aside>

## Inleiding

Dit document beschrijft een Pub/Sub-extensie voor DD API V3, gebaseerd op **OGC API**-principes. Het stelt clients in staat zich te abonneren op nieuwe of gewijzigde `Observation` resources via verschillende leveringsmethoden.

Een server die deze extensie ondersteunt, **MOET** de `API-Version` header met waarde `3.1.0` meesturen en de `X-DD-Capabilities` header **MOET** ten minste de waarde `pubsub` bevatten.

## Terminologie

- **Subscription (abonnement)** — Een server-beheerde resource die aangeeft welke gebeurtenissen een client wil ontvangen.
- **Trigger** — Een OData-gebaseerde conditie (filter) die bepaalt wanneer een melding wordt gegenereerd.
- **Delivery Method (leveringsmethode)** — De techniek waarmee meldingen worden afgeleverd (SSE, push, MQTT, etc.).
- **Event** — Een melding die Observation-data bevat conform het [Observation model](05-data-models-observation.md).


## Content Negotiation (leveringsmodel)

Clients en servers kunnen de gewenste leveringsmethode onderhandelen via specifieke headers, vergelijkbaar met het CRS-onderhandelingsmechanisme in DD API V3.

### Request headers

`Accept-DeliveryMethod: sse, push, mqtt`

### Response headers

`Content-DeliveryMethod: sse`

## Resources

Alle PubSub-endpoints zijn gepositioneerd onder `/v3/` om ze te onderscheiden van de reguliere OData-resources.

### /v3/subscriptions

```http request
GET /v3/subscriptions
```

Geeft een overzicht van de actieve abonnementen van de huidige geauthenticeerde gebruiker.

```http request
POST /v3/subscriptions`
```

Maakt een nieuw abonnement aan. De server genereert een uniek id en een verloopdatum (expiresAt).

**Request body:**

```json
{
  "delivery": {
    "method": "push",
    "endpoint": "https://callback.example.com/events",
    "secret": "uw-geheime-sleutel"
  },
  "trigger": {
    "filter": "Parameter/Compartment eq 'OW' and Result/Value gt 2.0",
    "select": "Id, ResultTime, Result/Value"
  }
}
```

De mogelijke statuscodes als antwoord op de POST zijn:

- `201 Created`: Succesvol aangemaakt.
- `400 Bad Request`: De trigger-expressie (filter) bevat syntaxisfouten of de leveringsmethode is onvolledig geconfigureerd.
- `401 Unauthorized`: Authenticatie is verplicht voor het beheren van abonnementen.
- `403 Forbidden`: De gebruiker heeft geen rechten op de resources die in de trigger worden gefilterd.
- `406 Not Acceptable`: De server ondersteunt de gevraagde leveringsmethode uit de `Accept-DeliveryMethod` header niet.
- `429 Too Many Requests`: De server weigert het abonnement omdat het maximum aantal toegestane abonnementen voor deze gebruiker is bereikt.

Bij een 201 hoort de volgende response body. De vulling is afhankelijk van het overeengekomen leveringsmodel.

**Response (201 Created):**

```json
{
  "id": "sub-550e8400-e29b",
  "status": "active",
  "expiresAt": "2024-02-05T12:00:00Z",
  "delivery": {
    "method": "push",
    "endpoint": "https://callback.example.com/events",
    "qos": "at-least-once"
  },
  "trigger": {
    "filter": "Parameter/Compartment eq 'OW' and Result/Value gt 2.0",
    "select": "Id, ResultTime, Result/Value"
  }
}
```

## Abonnement Lifecycle

- Verloopdatum: Elk abonnement heeft een expiresAt. De client moet het abonnement verlengen via een PATCH request voordat deze datum is bereikt. Verlopen abonnementen worden door de server verwijderd.
- Status:
  - active: Gebeurtenissen worden verwerkt en verzonden.
  - suspended: De levering is tijdelijk stopgezet (bijv. na herhaalde afleverfouten naar een push-endpoint).

## Trigger Model

De trigger bepaalt welke observaties tot een event leiden. Het maakt gebruik van de standaard OData `$filter` syntax.

| Veld   | Type   | Omschrijving                                                  |
|--------|--------|---------------------------------------------------------------|
| filter | string | Verplicht. Een OData expressie toegepast op de Observation.   |
| select | string | Optioneel. Een OData $select om de event-payload te beperken. |

Voorbeeld:

`Result/Value gt 2.5 and Parameter/Quantity eq 'WATHTE' and Foi/Code eq 'AMSLOTRK'`

## Delivery Model

De server ondersteunt verschillende methoden voor aflevering. De beschikbaarheid verschilt per implementatie.

| Methode | Omschrijving                        | Endpoint verplicht? |
|---------|-------------------------------------|---------------------|
| sse     | Server-Sent Events (HTTP streaming) | Nee                 |
| push    | Webhook (HTTP POST naar client)     | Ja (URL)            | 
| mqtt    | MQTT Message Queue                  | Ja (Topic)          |

## Discovery
Clients kunnen de mogelijkheden van de server ontdekken via:
`OPTIONS /v3/subscriptions`

Geeft via de Accept-DeliveryMethod header aan welke methoden de server ondersteunt.

`/v3/.well-known/dd-api-pubsub`

```json
{
  "deliveryMethods": [
    "sse",
    "push",
    "mqtt"
  ],
  "maxSubscriptions": 10,
  "defaultTtl": "P30D"
}
```

## Events

### Payload

De payload van een event moet voldoen aan het Observation model. Indien een select is opgegeven, bevat de payload een subset van deze velden.

###  Beveiliging (Push)
Bij de push methode moet de server een HMAC-SHA256 handtekening meesturen in de `X-DD-Signature` header, berekend over de body met het bij de subscription opgegeven secret.

## Relatie met DD API V3

- Triggers gebruiken dezelfde syntax als reguliere OData requests.
- Autorisatie wordt toegepast bij aanmaak van het abonnement: een gebruiker mag geen trigger plaatsen op data waarvoor hij geen leesrechten heeft.
- De responses zijn gelijk aan de values-deel van de Observation.
