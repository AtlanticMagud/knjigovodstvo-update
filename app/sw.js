// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keševi se brišu pri aktivaciji (osim jednog prethodnog).
const VERZIJA = "1.0.91"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "assets/PinDijalog-BbpnwOUh.js",
  "assets/amblem-svijetli-192-CoeYFji2.png",
  "assets/amblem-svijetli-96-BNRmYCi1.png",
  "assets/amblem-tamni-192-Dlvx0PIq.png",
  "assets/amblem-tamni-96-D-JBuMdz.png",
  "assets/artikli-Pdsql6DY.js",
  "assets/bankpdf-BaEczxeZ.js",
  "assets/cijene-D_xFBHyF.js",
  "assets/index-CjdfUoyp.js",
  "assets/index-Cuv0ebRJ.js",
  "assets/index-DFOudwFa.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-Dfuyd-YY.js",
  "assets/index-Dkw-r719.css",
  "assets/index-EA2cGbpx.js",
  "assets/index-WPkuP-o7.js",
  "assets/index-ggsP5-uy.js",
  "assets/nlbizvod-BkZThNQk.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pocetni-katalog-02935147-BOk3bkTs.js",
  "assets/renumeracija-BcBAa_kT.js",
  "assets/salterizvod-1Qi0_bCa.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/web-BUyZ7KEW.js",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DRnNXkco.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
  "ikone/favicon-32.png",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]
const OBAVEZNI = ["index.html","assets/index-WPkuP-o7.js","assets/index-Dkw-r719.css"]

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
