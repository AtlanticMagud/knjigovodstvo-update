// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keševi se brišu pri aktivaciji (osim jednog prethodnog).
const VERZIJA = "2.7.8"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "LICENCE-TRECIH-LICA.txt",
  "assets/Agencija-DdvWNZ7r.js",
  "assets/CjenovniciVP-DecbuT4N.js",
  "assets/GkPartneri-D2S5xTx-.js",
  "assets/Izgradnja-gTcwWqqa.js",
  "assets/IzvozPosebnihEvidencija-CTOeX_8h.js",
  "assets/KasaRacuni-DM9V3sIH.js",
  "assets/KaseNalozi-Dgc6Quw2.js",
  "assets/Kompenzacije-CwTimt58.js",
  "assets/Korisnici-7iy9TR4O.js",
  "assets/KupciVP-lZ3k3GlV.js",
  "assets/LjudiMenadzer-WHP07_WW.js",
  "assets/Materijal-B1D53Vyx.js",
  "assets/MenadzerRoba-C5-yi5E8.js",
  "assets/MjestaTroska-B27gRlnE.js",
  "assets/NalogGlavnom-oLU5Rqea.js",
  "assets/NarudzbeKupaca-BqGD0QOc.js",
  "assets/Nekretnine--bG8VsLE.js",
  "assets/Normativi-BYtEWa1b.js",
  "assets/PinDijalog-CqfFeJga.js",
  "assets/PorezOdbitakForma-BFvQ928F.js",
  "assets/PorezOdbitakPregled-Bs0f1Uuz.js",
  "assets/Povrati-Cr6Z5Iiq.js",
  "assets/Prigovori-gTnKrWuP.js",
  "assets/PrilagodiMeni-DlVSd0Dr.js",
  "assets/Proizvodnja-DSQRtFET.js",
  "assets/Projekti-DCbxXEuu.js",
  "assets/RadniNalozi-BIT7M3XW.js",
  "assets/ServisPodesavanja-DqEjhqvX.js",
  "assets/Teren-BFDf4KUg.js",
  "assets/TragIzmjena-Cmpf1fjM.js",
  "assets/Ugovori-7rB61icM.js",
  "assets/UvozNabavka-phEekdUP.js",
  "assets/ZaPregled-Druv681o.js",
  "assets/ZatvaranjePerioda-BIMnauId.js",
  "assets/Zspnft-mrVGxESQ.js",
  "assets/_virtual_licence-trecih-lica-yX7bAhEi.js",
  "assets/agencija-BGGRKdHq.js",
  "assets/agencijaIzvoz-WW4Cn5SK.js",
  "assets/amblem-svijetli-192-CoeYFji2.png",
  "assets/amblem-svijetli-96-BNRmYCi1.png",
  "assets/amblem-tamni-192-Dlvx0PIq.png",
  "assets/amblem-tamni-96-D-JBuMdz.png",
  "assets/bankpdf-DQV2FiDL.js",
  "assets/cijene-C8N8Sf0l.js",
  "assets/en-D-a0N8nk.js",
  "assets/index-0mu-p_a-.css",
  "assets/index-C4dyXVg9.js",
  "assets/index-CKVhwKfn.js",
  "assets/index-Cu_K8XHr.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-F-WHgqLb.js",
  "assets/index-POkV2xIL.js",
  "assets/index-TuF6Hl6_.js",
  "assets/index-ggsP5-uy.js",
  "assets/izgradnja-BDv_BpHN.js",
  "assets/izvozposebnih-GkF28h_G.js",
  "assets/jezik-Dtdyvr_R.js",
  "assets/kasenalozi-D7E0oaf6.js",
  "assets/kljucevi-Dqv90ROi.js",
  "assets/knjpregled-TFuXIfkG.js",
  "assets/kompenzacije-BR_yE7Aj.js",
  "assets/konsolidacija-RtnRjDhq.js",
  "assets/kupcivpexcel-B2TYTxR7.js",
  "assets/menadzeranaliza-C8PuiCCP.js",
  "assets/menadzerljudi-BNXEOBnX.js",
  "assets/menadzernabavka-C6n4yPDo.js",
  "assets/menadzerroba-FQdK_iPW.js",
  "assets/menadzertok-FBy0Vlci.js",
  "assets/menadzervp-kVU1ZVpY.js",
  "assets/mjestatroskaizvj-C4-2U-HI.js",
  "assets/nekretnine-ETtM6t2G.js",
  "assets/nlbizvod-CPa0cu82.js",
  "assets/normativi-Cy9Uo7hU.js",
  "assets/pdf-radnik-BtRoVg8m.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdfkompenzacije-D_pKSxio.js",
  "assets/pdfmaterijalno-oAxdUVok.js",
  "assets/pdfnekretnine-CF3MBT8x.js",
  "assets/pdfservis-sTaMECYL.js",
  "assets/pdfzspnft-CuDR-ysm.js",
  "assets/povrati-DG7ZqrD8.js",
  "assets/proizvodnja-C0mv0whT.js",
  "assets/razlika-radnik-DzhdHiTg.js",
  "assets/renumeracija-CaAKka5E.js",
  "assets/ru-cs1rVgvs.js",
  "assets/salterizvod-BBY2gEoZ.js",
  "assets/servisnalozi-DMK0LdHO.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/tr-CBHrhAEo.js",
  "assets/uvoznakalk-ISHyFuU6.js",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DRnNXkco.js",
  "assets/web-P4EgmPF8.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
  "assets/zspnft-D6tIsfyP.js",
  "assets/zspnftindikatori-DLmgB8yb.js",
  "ikone/favicon-32.png",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]
const OBAVEZNI = ["index.html","assets/index-TuF6Hl6_.js","assets/index-0mu-p_a-.css"]

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const kes = await caches.open(KES)
    // cache: 'reload' = mimo HTTP keša pregledača. GitHub Pages šalje max-age=600, pa je običan zahtjev dvije objave
    // u 10 minuta punio NOVI keš STARIM index.html-om (bijeli ekran ili zaglavljena stara verzija).
    const uzmi = f => kes.add(new Request(f, { cache: 'reload' }))
    // index.html i njegovi fajlovi MORAJU ući, i to iz OVE verzije — inače instalacija pada, a stara verzija radi dalje
    await Promise.all(OBAVEZNI.map(uzmi))
    const html = await (await kes.match('index.html')).text()
    for (const m of html.matchAll(/(?:src|href)=["']\.?\/?(assets\/[^"'?#]+)["']/g)) {
      if (!FAJLOVI.includes(m[1])) throw new Error('index.html nije iz verzije ' + VERZIJA + ' (' + m[1] + ')')
    }
    // Ostalo pojedinačno, da jedan promašaj ne obori cijelu instalaciju (fetch ispod ga dopuni kad zatreba).
    await Promise.all(FAJLOVI.filter(f => !OBAVEZNI.includes(f)).map(f => uzmi(f).catch(() => {})))
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    // Jedan prethodni keš ostaje: stranica koja je bila otvorena kad je stigla nova verzija i dalje lijeno učitava
    // SVOJE dijelove (PIN dijalog, cijene, renumeracija…), a server ih poslije objave više nema. Stariji se brišu.
    const brojke = k => k.slice('knjigovodstvo-'.length).split('.').map(Number)
    const novijiPrvo = (a, b) => { const x = brojke(a); const y = brojke(b); for (let i = 0; i < 3; i++) if ((x[i] || 0) !== (y[i] || 0)) return (y[i] || 0) - (x[i] || 0); return 0 }
    const prethodni = (await caches.keys()).filter(k => k !== KES && k.startsWith('knjigovodstvo-')).sort(novijiPrvo)
    for (const k of await caches.keys()) if (k !== KES && k !== prethodni[0]) await caches.delete(k)
    await self.clients.claim()
  })())
})

self.addEventListener('fetch', e => {
  const zahtjev = e.request
  if (zahtjev.method !== 'GET') return
  const adresa = new URL(zahtjev.url)
  if (adresa.origin !== self.location.origin) return   // MAPR i ostalo ide direktno

  e.respondWith((async () => {
    const kes = await caches.open(KES)

    // Aplikacija je jedna stranica: svaka navigacija vodi na index.html.
    if (zahtjev.mode === 'navigate') {
      return (await kes.match('index.html')) || (await fetch(zahtjev))
    }

    // tekući keš, pa prethodni (dijelovi stare stranice koja je još otvorena)
    const izKesa = (await kes.match(zahtjev, { ignoreSearch: true })) || (await caches.match(zahtjev, { ignoreSearch: true }))
    if (izKesa) return izKesa

    try {
      const odgovor = await fetch(zahtjev)
      if (odgovor.ok && odgovor.type === 'basic') kes.put(zahtjev, odgovor.clone())
      return odgovor
    } catch (greska) {
      const rezerva = await kes.match('index.html')
      if (rezerva && zahtjev.destination === 'document') return rezerva
      throw greska
    }
  })())
})
