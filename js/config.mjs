import { loadRespecWithConfiguration } from "./organisation-config.mjs";

loadRespecWithConfiguration({
  useLogo: true,
  useLabel: true,
  license: "cc-by",
  specStatus: "WV",
  specType: "st",
  pubDomain: "dk",
  shortName: "template",
  publishDate: "2025-09-30",
  publishVersion: "0.0.1",

  // TODO: Verwijder voordat de release plaats vindt
  latestVersion: "https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec/",
  prevVersion: [],

  editors:
    [
        {
            name: "Dolf Daal",
            company: "Informatiehuis Water",
            companyURL: "https://ecosys.nl"
        },
        {
            name: "Jeroen Gerrits",
            company: "Vortech",
            companyURL: "https://vortech.nl"
        }, 
    ],
  authors:
    [
        {
            name: "Geri Wolters",
            company: "EcoSys",
            companyURL: "https://ecosys.nl"
        }
    ],
  github: "https://github.com/DigitaleDeltaOrg/DD-API-V3-ReSpec"
});
