const organisationConfig = {
    nl_organisationName: "Informatiehuis Water",
    nl_organisationStylesURL: "https://gitdocumentatie.logius.nl/publicatie/respec/style/",
    nl_organisationPublishURL: "https://gitdocumentatie.logius.nl/publicatie/",
    fileName: "index.html",
    logos: [{
        src: "./media/DigitaleDelta.svg",
        alt: "Digitale Delta",
        id: "DigitaleDelta",
        height: 77,
        width: 44,
        url: "https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec",
    }],
    useLogo: true,
    latestVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/"],
    thisVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/", "publishVersion", "/"],
    prevVersion: ["nl_organisationPublishURL", "pubDomain", "/", "shortName", "/", "previousPublishVersion", "/"],
    addSectionLinks: true,
    localizationStrings: {
        en: {
            wv: "Draft",
            cv: "Consultation version",
            vv: "Proposed version",
            def: "Definitive version",
            basis: "Document",
            eo: "Outdated version",
            tg: "Rescinded version",
            no: "Norm",
            st: "Standard",
            im: "Information model",
            pr: "Guideline",
            hr: "Guide",
            wa: "Proposed recommendation",
            al: "General",
            bd: "Governance documentation",
            bp: "Best practice",
        },
        nl: {
            wv: "Werkversie",
            cv: "Consultatieversie",
            vv: "Versie ter vaststelling",
            def: "Vastgestelde versie",
            basis: "Document",
            eo: "Verouderde versie",
            tg: "Teruggetrokken versie",
            no: "Norm",
            st: "Standaard",
            im: "Informatiemodel",
            pr: "Praktijkrichtlijn",
            hr: "Handreiking",
            wa: "Werkafspraak",
            al: "Algemeen",
            bd: "Beheerdocumentatie",
            bp: "Best practice",
        },
    },
    sotdText: {
        nl: {
            sotd: "Status van dit document",
            def: `Dit is de definitieve versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            wv: `Dit is een werkversie die op elk moment kan worden gewijzigd, verwijderd of vervangen door andere documenten. Het is geen door het TO goedgekeurde consultatieversie.`,
            cv: `Dit is een door het TO goedgekeurde consultatieversie. Commentaar over dit document kan gestuurd worden naar digikoppeling@logius.nl`,
            vv: `Dit is een definitief concept van de nieuwe versie van dit document. Wijzigingen naar aanleiding van consultaties zijn doorgevoerd.`,
            basis: "Dit is een document zonder officiële status.",
        },
        en: {
            sotd: "Status of This Document",
            def: `This is the definitive version of this document. Edits resulting from consultations have been applied.`,
            wv: `This is a draft that could be altered, removed or replaced by other documents. It is not a recommendation approved by TO.`,
            cv: `This is a proposed recommendation approved by TO. Comments regarding this document may be sent to api@logius.nl`,
            vv: `This is the definitive concept of this document. Edits resulting from consultations have been applied.`,
            basis: "This document has no official standing.",
        },
    },
    labelColor: {
        def: "#154273",
        wv: "#39870c",
        cv: "#000000",
        vv: "#000000",
    },
    useLabel: true,
    licenses: {
        "cc0": {
            name: "Creative Commons 0 Public Domain Dedication",
            short: "CC0",
            url: "https://creativecommons.org/publicdomain/zero/1.0/",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-zero.svg",
        },
        "cc-by": {
            name: "Creative Commons Attribution 4.0 International Public License",
            short: "CC-BY",
            url: "https://creativecommons.org/licenses/by/4.0/legalcode",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by.svg",
        },
        "cc-by-nd": {
            name: "Creative Commons Naamsvermelding-GeenAfgeleideWerken 4.0 Internationaal",
            short: "CC-BY-ND",
            url: "https://creativecommons.org/licenses/by-nd/4.0/legalcode.nl",
            image: "https://gitdocumentatie.logius.nl/publicatie/respec/media/logos/cc-by-nd.svg",
        },
    },
    license: "cc-by",
    localBiblio: {
        "CoverageJSON": {
            href: "https://covjson.org/",
            publisher: "CoverageJSON",
            title: "CoverageJSON"
        },
        "OpenAPI 3.0": {
            href: "https://spec.openapis.org/oas/v3.0.0.html",
            publisher: "OpenAPI Initiative",
            title: "OpenAPI Specification 3.0.0"
        },
        "Aquo": {
            href: "https://www.aquo.nl/",
            publisher: "Aquo",
            title: "Aquo"
        },
        "EPSG": {
            href: "https://www.epsg.org",
            publisher: "International Association of Oil & Gas Producers",
            title: "EPSG Geodetic Parameter Dataset"
        },
        "ADR": {
            authors: ["Jasper Roes", "Joost Farla"],
            href: "https://gitdocumentatie.logius.nl/publicatie/api/adr/2.0",
            publisher: "Logius",
            title: "API Design Rules"
        },
        "ADR1": {
            authors: ["Jasper Roes", "Joost Farla"],
            href: "https://gitdocumentatie.logius.nl/publicatie/api/adr/1.0",
            publisher: "Logius",
            title: "API Design Rules"
        },
        "ADR-ext": {
            authors: ["Jasper Roes", "Linda van den Brink"],
            date: "Januari 2020",
            href: "https://docs.geostandaarden.nl/api/API-Strategie-ext",
            publisher: "Geonovum/Kennisplatform APi's",
            title: "API Designrules Extensions (Nederlandse API Strategie IIb)"
        },
        "Algemene Voorwaarden Logius": {
            date: "12 juni 2018",
            href: "https://www.logius.nl/onze-organisatie/zakendoen-met-logius/voorwaarden/algemene-voorwaarden-logius",
            publisher: "Logius",
            title: "Algemene voorwaarden Logius"
        },
        "AuthZEN": {
            date: "6 September 2024 ",
            href: "https://openid.net/specs/authorization-api-1_0-01.html",
            publisher: "OpenID",
            title: "Authorization API 1.0 – draft 01"
        },
        "AVG": {
            date: "27 april 2016",
            href: "https://eur-lex.europa.eu/legal-content/NL/TXT/?uri=CELEX%3A32016R0679",
            publisher: "Verordening (EU) 2016/679 van het Europees Parlement",
            title: "Algemene Verordening Gegevensbescherming"
        },
        "BCP195": {
            authors: ["Y. Sheffer", "R. Holz", "P. Saint-Andre"],
            date: "May 2015",
            href: "https://tools.ietf.org/html/bcp195",
            publisher: "IETF",
            title: "Recommendations for Secure Use of Transport Layer Security (TLS) and Datagram Transport Layer Security (DTLS)"
        },
        "ADR-GEO": {
            authors: ["L. van den Brink, P. Bresters, P. van Genuchten, G. Mathijssen, M. Strijker"],
            date: "March 07, 2024",
            href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-geo/",
            publisher: "Geonovum",
            title: "API Design Rules Module: Geospatial"
        },
        "HTTPS-factsheet NCSC": {
            date: "Nov 2014",
            href: "https://www.ncsc.nl/documenten/factsheets/2019/juni/01/factsheet-https-kan-een-stuk-veiliger",
            publisher: "NCSC",
            title: "Factsheet HTTPS kan een stuk veiliger"
        },
        "Introspection": {
            authors: ["J. Richer"],
            date: "October 2015",
            href: "https://tools.ietf.org/html/rfc7662",
            publisher: "IETF",
            title: "OAuth 2.0 Token Introspection"
        },
        "JWT": {
            authors: ["M. Jones, J. Bradley, N. Sakimura"],
            date: "may 2015",
            href: "https://tools.ietf.org/html/rfc7519",
            publisher: "IETF",
            title: "JSON Web Token (JWT)"
        },
        "NEN3610": {
            authors: [""],
            date: "Maart 2011",
            href: "https://www.nen.nl/nen-3610-2011-a1-2016-nl-217738",
            publisher: "Nederlands Normalisatie-instituut",
            title: "Basismodel Geo-informatie - Termen, definities, relaties en algemene regels voor de uitwisseling van informatie over aan de aarde gerelateerde ruimtelijke objecten"
        },
        "OAuth2": {
            authors: ["D. Hardt"],
            date: "October 2012",
            href: "https://tools.ietf.org/html/rfc6749",
            publisher: "The Internet Engineering Task Force",
            title: "The OAuth 2.0 Authorization Framework"
        },
        "Pas-toe-of-leg-uit": {
            href: "https://www.forumstandaardisatie.nl/open-standaarden/verplicht",
            publisher: "Forum Standaardisatie",
            title: "Lijst Verplichte standaarden"
        },
        "SemVer": {
            authors: ["T. Preston-Werner"],
            date: "June 2013",
            href: "https://semver.org",
            title: "Semantic Versioning 2.0.0"
        },
        "ADR-TS": {
            authors: [""],
            date: "March 07, 2024",
            href: "https://gitdocumentatie.logius.nl/publicatie/api/mod-ts/",
            publisher: "Kennisplatform API's",
            title: "API Design Rules Module: Transport Security"
        },
        "UUID": {
            authors: ["P. Leach", "M. Mealling", "R. Salz"],
            date: "July 2005",
            href: "https://tools.ietf.org/html/rfc4122",
            publisher: "The Internet Engineering Task Force",
            title: "A Universally Unique IDentifier (UUID) URN Namespace"
        },
        "ADR-Validator": {
            href: "https://gitlab.com/commonground/don/adr-validator/-/tree/v0.5.0/pkg/rulesets",
            title: "Technical ADR Validation rule testset 0.5.0",
            authors: ["H. Stijns"],
            publisher: "Geonovum",
            date: "November 2023"
        }
    }
};

/**
 * Laad Respec met een `localConfig`, waarbij default waarden uit een
 * `organisationConfig` object komen. Tevens worden de `localBiblio`
 * waarden van beide objecten gecombineerd, mocht de standaard specifieke
 * bibliografie referenties nodig hebben die niet ergens anders nodig zijn.
 *
 * In de `index.html` moet het volgende staan:
 *
 * ```html
 * <script class="remove" type="module" src="js/config.mjs"></script>
 * ```
 *
 * In `js/config.mjs` moet het volgende staan:
 *
 * ```js
 * import { loadRespecWithConfiguration } from "https://logius-standaarden.github.io/publicatie/respec/organisation-config.mjs";
 *
 * loadRespecWithConfiguration({
 *   <Zet de standaard specifieke configuratie hier>
 * });
 * ```
 *
 * @param {*} localConfig Configuratie specifiek voor deze standaard
 */
export function loadRespecWithConfiguration(localConfig) {
    const respecConfig = {
        ...organisationConfig,
        ...localConfig,
    };

    respecConfig.localBiblio = {
        ...organisationConfig.localBiblio,
        ...localConfig.localBiblio,
    };

    respecConfig.preProcess = [
        ...(localConfig.preProcess || []),
        (config, document, utils) => {
            if (!config.alternateFormats) {
                config.alternateFormats = [];
            }
            const pdfName = `${config.pubDomain}-${config.shortName}-${config.publishVersion}.pdf`;
            const existingFormat = config.alternateFormats.find(format => format.label === 'pdf');
            if (existingFormat) {
                if (existingFormat.uri !== pdfName) {
                    utils.showError(`Invalid name for PDF format. Expected "${pdfName}", but got "${existingFormat.uri}". Consider removing the PDF format from 'config.alternateFormats', as it is automatically generated already.`);
                }
                return;
            }
            config.alternateFormats.push({
                label: 'PDF',
                uri: pdfName,
            });
        }
    ];

    globalThis.respecConfig = respecConfig;

    import("https://logius-standaarden.github.io/publicatie/respec/builds/respec-nlgov.js");
}
