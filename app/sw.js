// Service worker za web verziju Knjigovodstva — GENERISAN, ne mijenjati ručno.
// Pravi ga scripts/napravi-sw.mjs poslije svakog build-a.
//
// Uloga: aplikacija mora raditi i bez mreže (u radnji signal zna da padne), a nova
// objava na GitHub Pages-u mora sama stići do telefona. Zato se pri instalaciji
// keširaju svi fajlovi verzije, a stari keševi se brišu pri aktivaciji (osim jednog prethodnog).
const VERZIJA = "2.7.10"
const KES = 'knjigovodstvo-' + VERZIJA
const FAJLOVI = [
  "LICENCE-TRECIH-LICA.txt",
  "assets/Agencija-CJ61JIlM.js",
  "assets/CjenovniciVP-DMo9t-Ox.js",
  "assets/GkPartneri-BLpT1Fjb.js",
  "assets/Izgradnja-CVMKO90N.js",
  "assets/IzvozPosebnihEvidencija-7-pib2nw.js",
  "assets/KasaRacuni-CXQT1DDF.js",
  "assets/KaseNalozi--L9SOob-.js",
  "assets/Kompenzacije-DPC-Kl4K.js",
  "assets/Korisnici-BBcDlcvF.js",
  "assets/KupciVP-CKm6GgmR.js",
  "assets/LjudiMenadzer-BCvVuKLO.js",
  "assets/Materijal-BwamX5BZ.js",
  "assets/MenadzerRoba-Bkszvulv.js",
  "assets/MjestaTroska-Doj9SXHj.js",
  "assets/NalogGlavnom-WtjTtVeA.js",
  "assets/NarudzbeKupaca-DI_HNSI0.js",
  "assets/Nekretnine-r5moC958.js",
  "assets/Normativi-B7vLTaxN.js",
  "assets/PinDijalog-C6RGuIeZ.js",
  "assets/PorezOdbitakForma-CJ9o-G4G.js",
  "assets/PorezOdbitakPregled-B7FS7FYb.js",
  "assets/Povrati-BxJa2RhB.js",
  "assets/Prigovori-D2LWNBgB.js",
  "assets/PrilagodiMeni-Cx00Cm2N.js",
  "assets/Proizvodnja-BGcTHDv9.js",
  "assets/Projekti-Bl_xIdhg.js",
  "assets/RadniNalozi-Bxu_GmyY.js",
  "assets/ServisPodesavanja-Bqy4t_-g.js",
  "assets/Teren-Cknkk49A.js",
  "assets/TragIzmjena-B3DWUMxL.js",
  "assets/Ugovori-Cb7XzZug.js",
  "assets/UvozNabavka-Dd9foIpb.js",
  "assets/ZaPregled-D38JxZEA.js",
  "assets/ZatvaranjePerioda-DS-iGsJT.js",
  "assets/Zspnft-DLwzY-cb.js",
  "assets/_virtual_licence-trecih-lica-yX7bAhEi.js",
  "assets/agencija-DIjaValo.js",
  "assets/agencijaIzvoz-CpE0LIXf.js",
  "assets/amblem-svijetli-192-CoeYFji2.png",
  "assets/amblem-svijetli-96-BNRmYCi1.png",
  "assets/amblem-tamni-192-Dlvx0PIq.png",
  "assets/amblem-tamni-96-D-JBuMdz.png",
  "assets/bankpdf-B739mfly.js",
  "assets/cijene-CYtmouI0.js",
  "assets/en-B4zb2lGj.js",
  "assets/index-0nX167Nd.js",
  "assets/index-1Iil8Khh.js",
  "assets/index-BG8zwXwz.js",
  "assets/index-COG3j8sD.css",
  "assets/index-DNzFMgCo.js",
  "assets/index-Dg7sxhDB.js",
  "assets/index-U_K69xfe.js",
  "assets/index-ggsP5-uy.js",
  "assets/index-x9HaI6OH.js",
  "assets/izgradnja-CzvjslRJ.js",
  "assets/izvozposebnih-Kf4CxHNc.js",
  "assets/jezik-DhQBBnr1.js",
  "assets/kasenalozi-BDEW6L6s.js",
  "assets/kljucevi-DGF9_Lrq.js",
  "assets/knjpregled-BclpLsKy.js",
  "assets/kompenzacije-C_may3J0.js",
  "assets/konsolidacija-i-NhmBUG.js",
  "assets/kupcivpexcel-twN7-ajT.js",
  "assets/menadzeranaliza--qokaJQS.js",
  "assets/menadzerljudi-m-P9cFT9.js",
  "assets/menadzernabavka-BRM1rToP.js",
  "assets/menadzerroba-D5o4bnBE.js",
  "assets/menadzertok-DImZ82w3.js",
  "assets/menadzervp-pJHHQi_G.js",
  "assets/mjestatroskaizvj-CfPV6G9c.js",
  "assets/nekretnine-DawU3GZu.js",
  "assets/nlbizvod-MnTSl-TQ.js",
  "assets/normativi-DC8FcgGA.js",
  "assets/pdf-radnik-BtRoVg8m.js",
  "assets/pdf.worker-Mx0w3D2U.js",
  "assets/pdfkompenzacije-D08Trwei.js",
  "assets/pdfmaterijalno-CpPvkQhO.js",
  "assets/pdfnekretnine-PLEkev-Y.js",
  "assets/pdfservis-Df7S75Jr.js",
  "assets/pdfzspnft-BKH3jfDe.js",
  "assets/povrati-wCyae-PQ.js",
  "assets/proizvodnja-7moVKh1z.js",
  "assets/razlika-radnik-B-_7vr8T.js",
  "assets/renumeracija-CmWQhCt9.js",
  "assets/ru-BngkL6X4.js",
  "assets/salterizvod-DwfpIhth.js",
  "assets/servisnalozi-Zof6jfb1.js",
  "assets/sql-wasm-UFUCzYNW.wasm",
  "assets/tr-BnfxAWfZ.js",
  "assets/uvoznakalk-DitICe-y.js",
  "assets/web-BXJjiGQ6.js",
  "assets/web-DRnNXkco.js",
  "assets/web-Dgt61z6a.js",
  "assets/web-sfuwvzF6.js",
  "assets/worker.min-32WLk7pY.js",
  "assets/zspnft-G1H0dYWZ.js",
  "assets/zspnftindikatori-DLmgB8yb.js",
  "ikone/favicon-32.png",
  "ikone/ikona-180.png",
  "ikone/ikona-192.png",
  "ikone/ikona-512.png",
  "ikone/ikona-maskable-512.png",
  "index.html",
  "manifest.webmanifest"
]
const OBAVEZNI = ["index.html","assets/index-Dg7sxhDB.js","assets/index-COG3j8sD.css"]

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
