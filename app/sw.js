// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keš se briše pri aktivaciji.
const VERZIJA = "1.0.58"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "assets/PinDijalog-CSf2IbPe.js",
  "assets/artikli-DOjWYgVx.js",
  "assets/bankpdf-BwQJ9Tc1.js",
  "assets/cijene-kteXCj3S.js",
  "assets/index-B844l7sv.js",
  "assets/index-CM4Gk0ng.js",
  "assets/index-Ck68H-AB.js",
  "assets/index-Cu5GPaJc.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-DQ9f9PiB.css",
  "assets/index-M-XeQ0Wl.js",
  "assets/index-ggsP5-uy.js",
  "assets/index-mDvmvBoG.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdftekst-CkFTmylF.js",
  "assets/renumeracija-bWhgHlDG.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DRnNXkco.js",
  "assets/web-Q7ZRvPzF.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
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
