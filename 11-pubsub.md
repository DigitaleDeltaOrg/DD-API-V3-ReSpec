# PubSub-extensie

## Inleiding

Dit document beschrijft een Pub/Sub-extensie voor DD API V3.1, gebaseerd op **OGC API**-principes en compatibel met de bestaande DD API V3-resources, 
authenticatiemodellen en OData-request syntax.

Het doel is om clients in staat te stellen zich te abonneren op gebeurtenissen—zoals drempeloverschrijdingen, wijzigingen in Observations of updates in tijdreeksen—and om meldingen te ontvangen via verschillende leveringsmethoden (delivery methods).
Naast equivalent van de filter clause `$filter` uit OData (verplicht), kunnen clients ook de select clause `$select` (optioneel) meegeven, die gerespecteerd moet worden.

---

## Terminologie

- **Subscription (abonnement)** — Een server-beheerde resource die aangeeft welke gebeurtenissen een client wil ontvangen.
- **Trigger** — Beschrijft *welke* gebeurtenissen meldingen moeten genereren (event types, filters, drempels).
- **Delivery Method (leveringsmethode)** — Beschrijft *hoe* meldingen worden afgeleverd (SSE, push, MQTT, WebSocket, buffer, …).
- **Event** — Een enkele melding die Observation-data bevat of ernaar verwijst.

---

## Content Negotiation

Met content negotiation kunnen clients en servers de gewenste leveringsmethode voor events overeenkomen.

### Request headers

```
Accept: application/json
Accept-DeliveryMethod: sse, push, mqtt, ws
```

### Response headers

```
Content-DeliveryMethod: sse
```

### Toelichting

- Gedrag volgt het DD API V3-onderhandelingsmechanisme (gelijk aan Accept-Crs).
- Als client en server meerdere methoden delen, kiest de server volgens standaard HTTP-negotiation.
- Trigger-expressies worden geschreven in OData met dezelfde syntax als DD API V4.

---

## Resources

Note: alle endpoints zijn onder `/v3.1/` gepositioneerd om ze te onderscheiden van de reguliere DD API V3-resources. Het zijn dan ook geen OData endpoints.

### `/v3.1/subscriptions`

Collectie van abonnementen.

#### GET `/v3.1/subscriptions`

Geeft een overzicht van abonnementen van de huidige gebruiker.

#### POST `/v3.1/subscriptions`

Maakt een nieuw abonnement aan.

Request body:

```json
{
  "delivery": {
    "method": "sse",
    "endpoint": null
  },
  "trigger": {
    "type": "observation",
    "filter": "Parameter/Compartment eq 'OW' and Parameter/WATHTE gt 2.0 and Foi/Code eq 'AMSLOTRK'",
    "select": "PhenomenonTime, ResultTime, result"
  },
  "format": "application/json"
}
```

Response:

- `201 Created`
- `Location: /v3.1/subscriptions/{id}`

---

### `/v3.1/subscriptions/{id}`

#### GET

Retourneert het volledige abonnement.

#### PATCH / PUT

Wijzigt trigger- of delivery-instellingen.

#### DELETE

Verwijdert het abonnement.

---

## Trigger Model

### Event types

```
observation
coverage-update
threshold-exceedance
collection-change
```

### Trigger-expressies

Ondersteunde talen:

- **OData `$filter` syntax**

Voorbeelden:

#### OData

```
Parameter/Quantity eq 'WATHTE' and Parameter/Compartment eq 'OW' and Foi/Code eq 'AMSLOTRK' and result/measure/value gt 2.5
```
## Delivery Model

### Algemene structuur

```json
"delivery": {
  "method": "sse",
  "endpoint": null,
  "qos": "at-least-once"
}
```

### Mogelijke delivery-methoden (per server verschillend)

- `sse` — Server-Sent Events (HTTP streaming)
- `push` — HTTP POST-callbacks
- `mqtt` — MQTT-topic push
- `ws` — WebSocket-stream
- `buffer` — Pollingmodel: event-queue via `/events`

Servers publiceren ondersteunde methoden via:

- `OPTIONS /v3.1/subscriptions`
- `/v3.1/.well-known/dd-api-pubsub`

---

## Events

### Event-formaat

Event payloads moeten DD API V3-CoverageJSON formaat:

---

## Discovery

### `/v3.1/.well-known/dd-api-pubsub`

Voorbeeld:

```json
{
  "deliveryMethods": ["sse", "push", "mqtt"]
}
```

### `OPTIONS /v3.1/subscriptions`

Headers:

```
Allow: GET, POST
Accept-DeliveryMethod: sse, push, mqtt
```

---

## Voorbeeldworkflow

### Stap 1 — Client ontdekt mogelijkheden

```
GET /v3.1/.well-known/dd-api-pubsub
```

### Stap 2 — Client maakt abonnement aan

```
POST /v3.1/subscriptions
Accept: application/json
Accept-DeliveryMethod: sse
```

Body:

```json
{
  "delivery": { "method": "sse" },
  "trigger": {
    "type": "observation",
    "filter": "Parameter/Compartment eq 'OW' and Parameter/WATHTE gt 2.0 and Foi/Code eq 'AMSLOTRK' and result gt 2.5",
    "select": "PhemonenonTime, ResultTime, result"
  }
}
```

### Stap 3 — Server verstuurt events

SSE:

```
event: ObservationEvent
data: {...}
```

---

## 10. Relatie met DD API V3

- Volledig compatibel met OM&S en CoverageJSON.
- Triggers gebruiken dezelfde OData-query syntax als reguliere DD API V3 requests.
- OData-wrapper niet verplicht in events; mag wel.

---

## 11. Uitbreidbaarheid

- Nieuwe delivery-methoden kunnen worden toegevoegd.
- Events kunnen volledige payloads of verwijzingen bevatten (`@link` naar reguliere resources).