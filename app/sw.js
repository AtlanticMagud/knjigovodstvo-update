// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keševi se brišu pri aktivaciji (osim jednog prethodnog).
const VERZIJA = "2.7.11"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "LICENCE-TRECIH-LICA.txt",
  "assets/Agencija-BfriJYuw.js",
  "assets/CjenovniciVP-B9c6NUi_.js",
  "assets/GkPartneri-kOd84mh9.js",
  "assets/Izgradnja-dJFK9gZn.js",
  "assets/IzvozPosebnihEvidencija-SggVflZz.js",
  "assets/KasaRacuni-BEsRUEvU.js",
  "assets/KaseNalozi-CsMooER6.js",
  "assets/Kompenzacije-Boek8hUS.js",
  "assets/Korisnici-C7oJjDkC.js",
  "assets/KupciVP-sfRdS4UW.js",
  "assets/LjudiMenadzer-D4YN9_FC.js",
  "assets/Materijal-Ao3GPx3b.js",
  "assets/MenadzerRoba-BTd8rQG4.js",
  "assets/MjestaTroska-BREGW_5Q.js",
  "assets/NalogGlavnom-D4VKagiL.js",
  "assets/NarudzbeKupaca-DOLJ4M-B.js",
  "assets/Nekretnine-BUgw82gu.js",
  "assets/Normativi-kVRYSLNv.js",
  "assets/PinDijalog-B6unQk_P.js",
  "assets/PorezOdbitakForma-BNUk1vk7.js",
  "assets/PorezOdbitakPregled-CY7fVU3D.js",
  "assets/Povrati-HKu5vBhO.js",
  "assets/Prigovori-wCOt0Fv1.js",
  "assets/PrilagodiMeni-Z3naja2t.js",
  "assets/Proizvodnja-DjnY572Q.js",
  "assets/Projekti-CoQrCbQJ.js",
  "assets/RadniNalozi-ep6wJ5jg.js",
  "assets/ServisPodesavanja-BzbGgcY_.js",
  "assets/Teren-B3uIihUz.js",
  "assets/TragIzmjena-CjA0aTCx.js",
  "assets/Ugovori-C3P7vdlB.js",
  "assets/UvozNabavka-BQNI4DpK.js",
  "assets/ZaPregled-Br1Atrx3.js",
  "assets/ZatvaranjePerioda-C0TaA2pN.js",
  "assets/Zspnft-DkyM8Wug.js",
  "assets/_virtual_licence-trecih-lica-yX7bAhEi.js",
  "assets/agencija-BcBhPJ_W.js",
  "assets/agencijaIzvoz-8HLiNDLw.js",
  "assets/amblem-svijetli-192-CoeYFji2.png",
  "assets/amblem-svijetli-96-BNRmYCi1.png",
  "assets/amblem-tamni-192-Dlvx0PIq.png",
  "assets/amblem-tamni-96-D-JBuMdz.png",
  "assets/bankpdf-fYbeMibi.js",
  "assets/cijene-CwXihj22.js",
  "assets/en-N8tXfR-u.js",
  "assets/index-BLMn_c0U.js",
  "assets/index-C6jPnfdA.js",
  "assets/index-COG3j8sD.css",
  "assets/index-CVLUfLAt.js",
  "assets/index-D100piI2.js",
  "assets/index-DNzFMgCo.js",
  "assets/index-DwFZShuA.js",
  "assets/index-cOPub_a1.js",
  "assets/index-ggsP5-uy.js",
  "assets/izgradnja-Byj5ORoJ.js",
  "assets/izvozposebnih-sfNM25yF.js",
  "assets/jezik-3sizzQhT.js",
  "assets/kasenalozi-Bablmhhg.js",
  "assets/kljucevi-_uL0R9Hu.js",
  "assets/knjpregled-C43Mg_Dr.js",
  "assets/kompenzacije-CdmkNHeQ.js",
  "assets/konsolidacija-CP-RASpN.js",
  "assets/kupcivpexcel-DiIG6q6z.js",
  "assets/menadzeranaliza-WJYy5xme.js",
  "assets/menadzerljudi-9IxyhqDj.js",
  "assets/menadzernabavka-BsPAhH5R.js",
  "assets/menadzerroba-_oYYLlvR.js",
  "assets/menadzertok-C22zxiKC.js",
  "assets/menadzervp-DB3v9yQL.js",
  "assets/mjestatroskaizvj-Dq4LfXGo.js",
  "assets/nekretnine-C361VjYH.js",
  "assets/nlbizvod-Dnirn8lH.js",
  "assets/normativi-AUQ6xYN5.js",
  "assets/pdf-radnik-BtRoVg8m.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdfkompenzacije-KP9YJcVa.js",
  "assets/pdfmaterijalno-DcyPQ1cG.js",
  "assets/pdfnekretnine-CS3ZSLlP.js",
  "assets/pdfservis-CUNNbNlO.js",
  "assets/pdfzspnft-DVUcc3Qc.js",
  "assets/povrati-CVwi3iGO.js",
  "assets/proizvodnja-BqlY--ui.js",
  "assets/razlika-radnik-B-_7vr8T.js",
  "assets/renumeracija-Dx8uozF2.js",
  "assets/ru-CppHqRNq.js",
  "assets/salterizvod-Dvexc3MM.js",
  "assets/servisnalozi-0hyAvDBZ.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/tr-CpnBV9fP.js",
  "assets/uvoznakalk-CzUwpVku.js",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DRnNXkco.js",
  "assets/web-DW7pB7P8.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
  "assets/zspnft-Bo2EB25u.js",
  "assets/zspnftindikatori-DLmgB8yb.js",
  "ikone/favicon-32.png",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]
const OBAVEZNI = ["index.html","assets/index-CVLUfLAt.js","assets/index-COG3j8sD.css"]

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
