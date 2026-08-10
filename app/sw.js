// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keš se briše pri aktivaciji.
const VERZIJA = "1.0.20"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "assets/PinDijalog-B6I7x-9E.js",
  "assets/artikli-CKXSXyH9.js",
  "assets/bankpdf-8d-Sn4-B.js",
  "assets/cijene-DzCDjaL7.js",
  "assets/index-2Zd_jBzE.js",
  "assets/index-BPVp93Ju.js",
  "assets/index-C_tNPPpa.js",
  "assets/index-D3C9bKE9.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-TIWticpH.js",
  "assets/index-ggsP5-uy.js",
  "assets/index-woio0tyw.css",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdftekst-FlZV6gvs.js",
  "assets/renumeracija-CNevrcdi.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/web-BXJjiGQ6.js",
  "assets/web-Cc_DBWht.js",
  "assets/web-DRnNXkco.js",
  "assets/web-sfuwvzF6.js",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const kes = await caches.open(KES)
    // Pojedinačno, da jedan promašaj ne obori cijelu instalaciju.
    await Promise.all(FAJLOVI.map(f => kes.add(f).catch(() => {})))
    await self.skipWaiting()
  })())
})

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== KES) await caches.delete(k)
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

    const izKesa = await kes.match(zahtjev, { ignoreSearch: true })
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
