// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keševi se brišu pri aktivaciji (osim jednog prethodnog).
const VERZIJA = "2.7.5"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "LICENCE-TRECIH-LICA.txt",
  "assets/IzvozPosebnihEvidencija-DmU5FuXl.js",
  "assets/NalogGlavnom-ppG1ODRd.js",
  "assets/Nekretnine-Dlit209K.js",
  "assets/PinDijalog-1d_pwLSG.js",
  "assets/PorezOdbitakForma-Cb38q7Ip.js",
  "assets/PorezOdbitakPregled-Dqyz1PFF.js",
  "assets/Prigovori-Cwv0qAFF.js",
  "assets/Projekti-CAFxdcqA.js",
  "assets/RadniNalozi-Oq6LQIrS.js",
  "assets/ServisPodesavanja-CZ_bBlKN.js",
  "assets/Ugovori-PpdncePL.js",
  "assets/Zspnft-omFScj-g.js",
  "assets/_virtual_licence-trecih-lica-yX7bAhEi.js",
  "assets/amblem-svijetli-192-CoeYFji2.png",
  "assets/amblem-svijetli-96-BNRmYCi1.png",
  "assets/amblem-tamni-192-Dlvx0PIq.png",
  "assets/amblem-tamni-96-D-JBuMdz.png",
  "assets/bankpdf-Cm0Am0K5.js",
  "assets/cijene-BN2d2V_n.js",
  "assets/en-CUwbAf-h.js",
  "assets/index-C88umzzp.js",
  "assets/index-CGBT-cde.js",
  "assets/index-CSglta2t.js",
  "assets/index-CxTdTQVm.js",
  "assets/index-DBXD4El6.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-DY6PaQfN.js",
  "assets/index-ggsP5-uy.js",
  "assets/index-tg1yc4vZ.css",
  "assets/izvozposebnih-qEXzzKa3.js",
  "assets/jezik-BjR_Bsxz.js",
  "assets/kljucevi-CLkZGSWw.js",
  "assets/knjpregled-DT4jji-g.js",
  "assets/nekretnine-DhNiC17v.js",
  "assets/nlbizvod-CDuP70r2.js",
  "assets/pdf-radnik-COH6iMDM.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdfnekretnine-BFG2rDwF.js",
  "assets/pdfservis-CDVPmI7y.js",
  "assets/pdfzspnft-kSZb76X_.js",
  "assets/razlika-radnik-DzhdHiTg.js",
  "assets/renumeracija-ClnT01rk.js",
  "assets/ru-CCVhYymu.js",
  "assets/salterizvod-C-lcfKus.js",
  "assets/servisnalozi-PvzunS8w.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/tr-BNiPtXt6.js",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DLNwsXol.js",
  "assets/web-DRnNXkco.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
  "assets/zspnft-DUVsk3av.js",
  "assets/zspnftindikatori-DLmgB8yb.js",
  "ikone/favicon-32.png",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]
const OBAVEZNI = ["index.html","assets/index-CSglta2t.js","assets/index-tg1yc4vZ.css"]

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
