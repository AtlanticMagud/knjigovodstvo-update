const a=`[\r
"— bez naloga —",\r
"— bez objekta —",\r
"— bez objekta (mjesto isporuke upisano ručno) —",\r
"— bez obračuna —",\r
"— bez statusa —",\r
"— cjenovnik grupe / podrazumijevani —",\r
"— dana kašnjenja",\r
"— fizičko lice (kupac se pravi pri fakturisanju) —",\r
"— interni projekat (bez kupca) —",\r
"— ispod nabavne",\r
"— izaberi projekat —",\r
"— kao normativ —",\r
"— magacin objekta prodaje —",\r
"— nije izabran (posljednji izabrani) —",\r
"— prema dobavljaču —",\r
"— RN {0}",\r
"— sastojak —",\r
"— svi kupci (pregled) —",\r
"— svi unosi —",\r
"— važeći na dan naloga —",\r
", a podaci se dostavljaju FOJ-u do {0} (ZSPNFT čl. 66)",\r
", EV bez PDV",\r
", na Samouslužnom EFI portalu: Moji podaci → Poslovne jedinice → jedinica → ENU → Novi unos. Tip:",\r
", obuka",\r
", odgovoreno",\r
", održavalac",\r
", održavalac:",\r
", odstupanje",\r
", period {0}–{1}",\r
", softver:",\r
", upisuje fakturu u obaveze prema dobavljaču (KPR, PR-PDV)",\r
", važi od današnjeg dana. Kod koji portal dodijeli upisuje se gore, u polje „Kod ENU (za fakture)“.",\r
"; bez podatka 10 (površina):",\r
"; ne čitaju se: {0}",\r
"; nije napravljeno: {0}",\r
"; PDV obaveza {0} (posljednji dan perioda)",\r
"; pravo na naknadu do {0}",\r
"; prihvaćenu ponudu potpisuju servis i klijent.",\r
"; rok istekao: {0}",\r
"; za zemljište se struktura ne navodi",\r
": čuvaju se uz PIB firme, pa se na računaru koji vodi više firmi sertifikat bira posebno u svakoj firmi.",\r
": ENU koji se dijeli sa kasom daje dvostruke redne brojeve računa. Operaterski kod važi za sve fakture izdate sa ovog računara.",\r
": za period od",\r
". Jedna se ispravlja stornom ili korektivnim računom.",\r
". Kodovi softvera i održavaoca prate okruženje (test ili produkcija) i ne unose se.",\r
". Oglašavanje ovih nepokretnosti nije dozvoljeno.",\r
". Po isteku roka lični podaci se brišu (ZSPNFT čl. 127 st. 5); ostaje zapis sa datumom brisanja.",\r
". Podatak se upisuje na ugovoru, odnosno na nepokretnosti; izmjena se upisuje kao nov unos.",\r
". podnosi se do",\r
". Šank i kuhinja se vežu za objekat u kome se prodaje (razduženje po normativu).",\r
". Unos se ne briše i ne mijenja; ispravka se upisuje kao nov unos.",\r
". Unosi evidencije o posredovanju ostaju (čuvaju se trajno).",\r
"· {0} bez podataka",\r
"· {0} stavki sa nepotvrđenom stopom",\r
"· € po kursu",\r
"· 10 najvećih:",\r
"· carina",\r
"· bez kreditnog limita",\r
"· dodatak na stopu {0} p.p.",\r
"· dodato poslije ponude",\r
"· dospjelo",\r
"· faktura {0}",\r
"· grešaka",\r
"· isplata primaocu:",\r
"· izloženost",\r
"· izmjena",\r
"· kamata",\r
"· klijenata:",\r
"· limit {0} · raspoloživo {1}",\r
"· materijal po normativu",\r
"· nabavna {0}",\r
"· nabavna vrijednost sa zavisnim troškovima: {0} EUR",\r
"· naknada",\r
"· naturalni rabat: {0} gratis",\r
"· normativ od {0}",\r
"· očekivana carina",\r
"· otpremnice bez računa",\r
"· po jedinici",\r
"· po predračunu {0}",\r
"· porez po odbitku:",\r
"· primijenjeno {0}",\r
"· primljeni računi",\r
"· pristanak",\r
"· razlika prema fakturi {0} {1}",\r
"· razlika u cijeni (1329)",\r
"· RN {0}",\r
"· sada",\r
"· usluga",\r
"· vrijednost povrata",\r
"· za fakturisanje:",\r
"· zaliha {0}",\r
"'TRB'",\r
"'VRT'",\r
"„{0}\\" je {1}, ne proizvod.",\r
"„{0}\\" je dva puta na popisnoj listi.",\r
"„{0}\\" je roba. Normativ ima artikal vrste „gotov proizvod\\" (jelo, piće iz šanka, proizvod) ili „usluga\\" (Artikli → Vrsta).",\r
"„{0}\\" nije artikal materijalnog knjigovodstva (vrsta: materijal, gotov proizvod ili sitan inventar — Artikli → Vrsta).",\r
"„{0}\\" nije gotov proizvod (Artikli → Vrsta).",\r
"„{0}\\" nije gotov proizvod.",\r
"„{0}\\": nema magacina gotovih proizvoda za razduženje.",\r
"„{0}\\": objekat nema magacin {1} (Materijal → Magacini) ni magacin u normativu.",\r
"„Fakturisao\\" (ovlašćeno lice) i „Primio\\" na dnu računa i predračuna.",\r
"(bez PDV-a, EUR)",\r
"(bez projekta)",\r
"(bez ugovora)",\r
"(d.MagacinID=? OR d.MagacinUlazID=?)",\r
"(ECB + 8 p.p.)",\r
"(EV bez PDV)",\r
"(isti dobavljač ±45 dana ili ista faktura)",\r
"(kasni {0} d, od {1})",\r
"(kasni {0} dana)",\r
"(konto",\r
"(konto 1100 se usklađuje mjesečnim nalogom PRD pri „Proknjiži mjesec\\").",\r
"(n.Namjena=? OR n.Namjena='oba')",\r
"(na drugom računaru)",\r
"(nacrt)",\r
"(nema faktura plaćenih sa zakašnjenjem ili je period već obračunat).",\r
"(od {0}{1})",\r
"(Opis LIKE ? OR Sifra LIKE ?)",\r
"(otključan)",\r
"(PDV {0} %)",\r
"(poslije roka)",\r
"(predmet {0})",\r
"(preneseno",\r
"(prvi rok",\r
"(roba)",\r
"(rok istekao: {0})",\r
"(sa drugog računara)",\r
"(stopa nije potvrđena za {0} stavki)",\r
"(uključuje naknadu za posredovanje)",\r
"(usluga)",\r
"(usluge)",\r
"(uz {0} ranije upisanih u {1})",\r
"(zatečeno pri otključavanju; zaključan prije 2.7.0)",\r
"(zatečeno pri prelasku na 2.7.0)",\r
"(čl. 36a Zakona o obaveznom zdravstvenom osiguranju, naknada 100 % osnova):",\r
". Prije knjiženja potvrditi sa dobavljačem, na poznat kontakt, da je račun promijenjen.",\r
"_*.json). Fajlovi se pojavljuju poslije prvog rada u programu IRIS Menadžer. Menadžer se povezuje sa firmom u Povezivanje → Menadžer (kod za uparivanje ili fajl baze).",\r
"- {0} br. {1} {2} EUR{3}",\r
"- COALESCE(z.VisakPorez,0)",\r
"-Command",\r
"-ExecutionPolicy",\r
"-File",\r
"-NonInteractive",\r
"-NoProfile",\r
"(završna)",\r
"(ZSPNFT čl. 20a i 117)",\r
") · akciza",\r
") · u valuti",\r
") · rabat",\r
"): lager",\r
"[Dopuna {0}] {1}",\r
"[lični podaci obrisani {0}]",\r
"[Otkaz {0}: {1}]",\r
"{0}\\n\\nIpak proknjižiti kao plaćanje dobavljaču?",\r
"{0}\\n\\nIpak unijeti {1} kao plaćanje dobavljaču?\\n\\nU redu: nastavlja se unos svih označenih stavki.\\nOdustani: ništa se ne unosi (stavku isključiti kvačicom pa ponovo „Unesi označena plaćanja\\").",\r
"{0}\\n\\nIzdavanje je dozvoljeno samo uz odobrenje. Razlog odobrenja:",\r
"{0}\\nFirma u programu: {1} (PIB {2}).\\n\\n{3}",\r
"{0} — {1}, prodaja {2} – {3}",\r
"{0} — faktura {1}",\r
"{0} — ime i prezime",\r
"{0} — nov dokument",\r
"{0} — PDV je u prijavi mjeseca osmog dana (polja 10–12 i 16–18).",\r
"{0} — PDV po njima nije u prijavi dok se ne izda račun.",\r
"{0} — povećanje {1} vrijednosti",\r
"{0} — povrat {1}",\r
"{0} — račun {1}, plaćeno {2}",\r
"{0} — smanjenje {1} vrijednosti (crveni storno)",\r
"{0} — ugovor o posredovanju {1}",\r
"{0} — zatezna kamata i naknada",\r
"{0} · {1} · {2}{3} EUR{4}",\r
"{0} · {1} EUR · {2}: {3}",\r
"{0} · firma je u sistemu PDV-a",\r
"{0} · firma nije u sistemu PDV-a",\r
"{0} · odvojen od kasa",\r
"{0} · stanje na dan {1} · po nabavnoj vrijednosti",\r
"{0} · važi do {1}",\r
"{0} ({1} < nabavna {2})",\r
"{0} ({1}, {2} EUR)",\r
"{0} (autorski ugovor)",\r
"{0} (čl. 20a)",\r
"{0} (ExRate {1})",\r
"{0} (faktura {1})",\r
"{0} (od {1})",\r
"{0} (prag {1}, {2} %)",\r
"{0} (traženo {1}, stanje {2})",\r
"{0} (završeno {1})",\r
"{0} {1} · softver {2} · održavalac {3} (produkcija)",\r
"{0} {1} · softver {2} · održavalac {3} (test)",\r
"{0} {1} (kurs {2})",\r
"{0} {1} (stanje {2})",\r
"{0} {1} bez PDV-a{2}; {3}",\r
"{0} {1} je evidentiran i na drugom računaru; ovdašnji zapis dobija broj {2}.",\r
"{0} {1} ORDER BY n.Godina DESC, n.RedniBroj DESC",\r
"{0} {1} sa drugog računara dobija broj {2} (broj je ovdje već zauzet ranijim zapisom).",\r
"{0} + {1} gratis",\r
"{0} Izdati fakturu?",\r
"{0} Izdavanje nije dozvoljeno bez odobrenja (Kupci-firme → podešavanje kontrole; odobrenje daje korisnik sa pravom knjiženja).",\r
"{0} je ENU kase.",\r
"{0} je registrovan sa drugim programom za kase.",\r
"{0} je upisan kao plaćen gotovinom i već je knjižen na blagajnu. Isti izdatak se ne knjiži ponovo kao plaćanje dobavljaču sa izvoda.",\r
"{0} je upisan kao plaćen karticom i već je knjižen na tekući račun. Transakcija kartice na izvodu se ne knjiži ponovo kao plaćanje dobavljaču.",\r
"{0} kv. {1}",\r
"{0} nije ispravan.",\r
"{0} nije u obliku ab123ab123.",\r
"{0} Novac se prima i predaje preko depozitnog računa.",\r
"{0} Plaćanje nije proknjiženo automatski.",\r
"{0} po ugovoru o posredovanju {1}",\r
"{0} se koristi na drugom računaru ({1}).",\r
"{0} se upisuje oznakom ISO (npr. ME, RS, DE).",\r
"{0} st. 1",\r
"{0} st. 1 i 3",\r
"{0} st. 2",\r
"{0} st. 2 — povećanje veće od {1} % traži prethodni pisani pristanak",\r
"{0} Upis u evidenciji o posredovanju je trajan.",\r
"{0} WHERE k.KupacID=?",\r
"{0} WHERE n.NalogID=?",\r
"{0} WHERE n.UID=?",\r
"{0} za kupca {1} je snimljena.",\r
"{0}, {1}, {2} {3} sa PDV",\r
"{0}, bruto {1}",\r
"{0}; {1}; nivo sigurnosti: {2}",\r
"{0}; nalogodavac {1}",\r
"{0}: {1} uplata",\r
"{0}: broj sati mora biti od 0 do 24.",\r
"{0}: cijena primaoca nije upisana i jednaka je cijeni pošiljaoca ({1}{2}). Upisati {3}.",\r
"{0}: datum nije ispravan.",\r
"{0}: kupac nema e-poštu",\r
"{0}: poslato {1}, primljeno {2}",\r
"{0}: potreban je broj od 0{1}.",\r
"{0}: umanjenje obaveze prema dobavljaču",\r
"{0}. godina · rok za predaju {1}",\r
"{0}. godina · ZPDPL čl. 29",\r
"{0}. godina{1}",\r
"% (granica",\r
"% budžeta",\r
"% carinske vrijednosti uvećane za carinu",\r
"% godišnje, stopa CBCG po polugodištima) i naknadom troškova naplate 40 € za kupce privredne subjekte:",\r
"% vol",\r
"+ Agent",\r
"+ Dio",\r
"+ Dodaj artikal",\r
"+ Dodaj magacin",\r
"+ dodatni troškovi",\r
"+ Nov klijent",\r
"+ Nov normativ",\r
"+ Nov obilazak",\r
"+ Nov prigovor",\r
"+ Nov radni nalog",\r
"+ Nov ugovor o posredovanju",\r
"+ Nov unos",\r
"+ Nov unos depozita",\r
"+ Nova isplata nerezidentu",\r
"+ Nova nepokretnost",\r
"+ Nova usluga",\r
"+ Novi projekat",\r
"+ Novi ugovor",\r
"+ obračun",\r
"+ Obuka",\r
"+ pazari sa PDV",\r
"+ Sastojak",\r
"+ Stvarni vlasnik",\r
"✉ IOS e-poštom",\r
"✉ Pošalji izabrane e-poštom (",\r
"💾 Snimi nepokretnost",\r
"💾 Snimi obilazak",\r
"💾 Snimi obračun",\r
"💾 Snimi podatke posrednika",\r
"💾 Snimi prigovor",\r
"💾 Snimi projekat",\r
"💾 Snimi sedmicu",\r
"💾 Snimi tekstove",\r
"💾 Snimi ugovor",\r
"💾 Upiši transakciju",\r
"📄 Analiza rizika (PDF)",\r
"📄 Knjiga (PDF)",\r
"📄 Lista indikatora obveznika (PDF)",\r
"📄 PDF ugovora",\r
"📄 Podaci za FOJ (PDF)",\r
"📄 Potvrda o obilasku",\r
"📄 Prijemnica",\r
"📄 Specifikacija",\r
"📄 Ugovor (PDF)",\r
"📋 Tekst oglasa",\r
"📓 Prigovor",\r
"€ na 1.000 kg",\r
"€ na 1.000 l",\r
"€ po % vol na hl",\r
"€ po hl",\r
"€ po hl čistog alkohola",\r
"€ po kg",\r
"€ po kursu",\r
"€: obavezna je pisana ponuda sa specifikacijom radova, materijala i djelova, koju potpisuju servis i klijent.",\r
"€): potreban je nov pisani pristanak klijenta prije nastavka rada.",\r
"0 (komadi)",\r
"1 · Objekat (nije obavezan)",\r
"1 EUR = {0} {1}",\r
"1) naziv, sjedište i PIB posrednika (Podešavanja → Podaci firme)",\r
"10 godina od zaključenja ugovora",\r
"2) ime i prezime odnosno naziv, prebivalište odnosno sjedište, JMB odnosno PIB i uloga nalogodavca",\r
"3 (kg, l)",\r
"3) nepokretnost, vrsta pravnog posla i prodajna cijena odnosno cijena zakupa",\r
"4) visina, način i rok plaćanja naknade za posredovanje",\r
"5 godina od prestanka poslovnog odnosa, odnosno od transakcije",\r
"5) vrijeme na koje se ugovor zaključuje (datum zaključenja)",\r
"60 dana od početka djelatnosti",\r
"7) prava i obaveze posrednika i nalogodavca",\r
"adresa djelatnosti",\r
"Adresa e-pošte nije ispravna.",\r
"Adresa i opština prebivališta, odnosno boravišta nisu upisani (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Adresa mjesta djelatnosti (ako je druga)",\r
"Adresa prebivališta, odnosno boravišta",\r
"adresa sjedista",\r
"Adresa sjedišta na dokumentima.",\r
"Adresa za slanje obrazaca knjigovođi.",\r
"Adresa zastupnika",\r
"AED",\r
"Agent",\r
"Agent „{0}\\" nije na spisku agenata sa položenim stručnim ispitom.",\r
"Agenti sa položenim stručnim ispitom",\r
"Akciza po artiklu služi kontroli: očekivana akciza robe sa kalkulacije prema iznosu sa carinske deklaracije. Stope unosi i potvrđuje korisnik; predlog iz teksta Zakona o akcizama (prečišćen tekst, Sl. list CG 45/14) upisuje se nepotvrđen — iznos je potrebno provjeriti u važećem tekstu.",\r
"Akcize i podaci za uvoz",\r
"akcija {0}",\r
"Akcija je uklonjena.",\r
"Akcija je upisana.",\r
"Akcija važi za kupca, za grupu kupaca ili za sve kupce.",\r
"Akcijska cijena mora biti veća od nule.",\r
"Ako",\r
"Ako dug ne bude izmiren u navedenom roku, potraživanje će biti utuženo bez daljeg obavještenja, a troškovi postupka padaju na teret dužnika.",\r
"Ako je plaćanje već izvršeno, molimo da ovu opomenu smatrate bespredmetnom i dostavite podatke o uplati.",\r
"Ako se tokom popravke pokaže potreba za dodatnim radovima, materijalom ili djelovima zbog kojih se cijena uvećava za više od {0} %, servis prije nastavka rada traži pisani pristanak klijenta, dat lično ili sredstvima komunikacije na daljinu.",\r
"Akt",\r
"aktivan",\r
"aktivna (u ponudi)",\r
"Aktivne stope, pravila ugostiteljstva.",\r
"Alkohol (% vol)",\r
"Ana Anić",\r
"Analitička konta, konto za svaku ulogu automatskog knjiženja.",\r
"analiza nije usvojena",\r
"Analiza prihoda",\r
"Analiza rizika",\r
"Analiza rizika i pragovi su snimljeni.",\r
"Analiza rizika nije usvojena",\r
"Analiza rizika nije usvojena; rok je 60 dana od početka djelatnosti.",\r
"Analiza rizika se donosi u roku od 60 dana od osnivanja, odnosno početka djelatnosti (ZSPNFT čl. 12)",\r
"AND ArtikalID=?",\r
"AND Aktivan=1",\r
"AND c.KupacID=?",\r
"AND d.IzvorMarketID=?",\r
"AND o.DobavljacID=?",\r
"AND p.Mag=?",\r
"AND u.UgovorID=?",\r
"AND UgovorUID=?",\r
"Apoteka: odbitak FZO",\r
"Arhiva se ne briše rotacijom.",\r
"Artikal „{0}\\" ima promet robe (prodaja, početno stanje, popis ili prenos) i vodi se u trgovačkoj knjizi. Usluga se upisuje kao poseban artikal.",\r
"Artikal „{0}\\" ima promet robe (prodaja, početno stanje, popis ili prenos) i vodi se u trgovačkoj knjizi. Vrsta „{1}\\" se upisuje kao poseban artikal.",\r
"Artikal „{0}\\" ima promet u materijalnom knjigovodstvu ({1} stavki). Vrsta se ne mijenja.",\r
"Artikal „{0}\\" ima ulaz po kalkulaciji ({1}) i vodi se na zalihi robe. Vrsta „{2}\\" se upisuje kao poseban artikal.",\r
"Artikal „{0}\\" ima ulaz po kalkulaciji ({1}) i vodi se na zalihi. Usluga se upisuje kao poseban artikal.",\r
"artikal „{0}\\" nije nađen u Knjigovodstvu",\r
"Artikal (naziv, šifra, barkod)",\r
"Artikal je dodat.",\r
"Artikal kase {0} nije povezan sa šifarnikom — nivelacija nije napravljena.",\r
"Artikal stavke ne postoji.",\r
"Artikli bez veze sa šifarnikom: {0}{1}.",\r
"Atlantic Investment d.o.o.",\r
"AUD",\r
"Automatska blokada kad faktura kasni preko (dana)",\r
"Automatska štampa kalkulacije iz skena i broj kopija",\r
"automatski",\r
"Automatsko ažuriranje programa",\r
"automatsko produženje",\r
"Automatsko raspoređivanje stavki izvoda po pravilu.",\r
"Autorska naknada i prava intelektualne svojine (uključujući softver)",\r
"autorski ugovor",\r
"Autorski ugovor",\r
"Avans je veći od iznosa ponude ({0} EUR).",\r
"Avans po predračunu {0}",\r
"Avans po predračunu:",\r
"Avansni račun {0} je snimljen; ponuda je prihvaćena. Fiskalizacija i PDF: Avansi i knjižna odobrenja.",\r
"Avansni račun iz predračuna",\r
"Avansni račun na dan prijema uplate, sa iznosom i stopama PDV-a ove ponude",\r
"Avansni račun za posredničku naknadu nije dozvoljen (Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 27).",\r
"Ažuriranje programa: objava nove verzije se provjerava potpisom izdavača; objava sa neispravnim potpisom, povučena verzija i verzija starija od već objavljene se ne preuzimaju. Veza sa serverom: prijava uređaja se obnavlja sama prije isteka roka i poslije isteka.",\r
"ažurirati postojeće kupce",\r
"B2B akcije",\r
"Backup i arhiva",\r
"BAM",\r
"Banka → Pravila",\r
"Banka platioca (naziv, račun, država)",\r
"Banka primaoca (naziv, račun, država)",\r
"Banka žiro računa na fakturi.",\r
"Banka: pravila za razvrstavanje stavki izvoda (opis ili račun primaoca → vrsta i partner)",\r
"Banka: transakcije sa izvoda, knjiženje, način prepoznavanja",\r
"Banka: uvoz svih izvoda iz pošte",\r
"baza nije mijenjana",\r
"BD:{0}",\r
"Bez izbora: posljednji objekat izabran na ovom računaru, a kad firma ima jedan objekat — taj objekat.",\r
"Bez normativa (roba ide kroz trgovačku knjigu):",\r
"Bez potvrde o rezidentnosti primjenjuje se stopa {0} %.",\r
"bez satnice",\r
"Bez satnice",\r
"bez statusa",\r
"bez važećeg ugovora",\r
"bez zalihe",\r
"bez zaokruživanja",\r
"Bezgotovinska",\r
"Bezgotovinska — izuzetak (EUR)",\r
"Bezgotovinska (EUR)",\r
"bezgotovinska transakcija {0} EUR (prag {1} EUR)",\r
"Bezgotovinski",\r
"BGN",\r
"Biće napravljeno {0} nacrta faktura ({1} unosa, {2} h, {3} EUR bez PDV-a) sa datumom izdavanja {4}. Nastaviti?",\r
"Biće napravljeno {0} nacrta faktura sa datumom izdavanja {1} (ukupno sa PDV: {2}). Nastaviti?",\r
"Biće upisano u evidenciju o posredovanju: {0} ({1}). Upis je trajan: unos se ne briše i ne mijenja.",\r
"Bliži saradnik",\r
"Bonus dobavljača po ostvarenoj nabavci (bez PDV-a) u periodu: pragovi „iznos:procenat\\" odvojeni tačkom-zarezom (npr. 50000:1; 100000:2). Primljena finansijska knjižna odobrenja u periodu se porede sa očekivanim bonusom.",\r
"Bonus je obrisan.",\r
"Bonus je snimljen.",\r
"Bonus mora imati bar jedan prag (iznos nabavke i procenat).",\r
"Bonus ne postoji.",\r
"Bonus po projekciji",\r
"Bonusi dobavljača",\r
"Blokada",\r
"Blokada isporuke je skinuta.",\r
"blokada isporuke{0}",\r
"Blokada kad kasni preko (dana)",\r
"Blokiraj isporuku",\r
"blokiran (kašnjenje)",\r
"blokirani",\r
"Blokirao",\r
"Brisanje je moguće od {0} (rok čuvanja dvije godine)",\r
"Brisanje kalkulacije, renumeracija, zaključavanje, spajanje artikala.",\r
"Brisanje normativa",\r
"Brisanje sirovog zapisa Poreske uprave za starije fakture.",\r
"Brisanjem prijema bi predato bilo veće od primljenog; prvo se briše predaja.",\r
"Briše se samo nacrt obračuna. Izdat obračun se stornira.",\r
"Broj {0} · datum {1} · magacin: {2}",\r
"Broj dana kašnjenja za blokadu: od 0 (isključeno) do 3650.",\r
"Broj decimala količina (normativ, dokumenti)",\r
"Broj decimala količine (robni dokumenti)",\r
"Broj decimala količine: od 0 do 3.",\r
"Broj decimala: od 0 do 6.",\r
"Broj dokumenta, IKOF ili JIKR — ili naziv ekrana i radnje",\r
"Broj fakture dobavljača je obavezan.",\r
"Broj i datum računa izdatog kroz registrovan fiskalni softver ulaze u podatak 14 evidencije o posredovanju.",\r
"Broj kalkulacije u nazivu PDF fajla",\r
"Broj naloga, odnosno ugovora",\r
"Broj odobrenja",\r
"Broj odobrenja / fakture",\r
"Broj polise",\r
"Broj potvrde",\r
"Broj predmeta",\r
"Broj računa izdatog van programa",\r
"Broj sati mora biti veći od 0 i najviše 24.",\r
"Broj se navodi u ugovoru (čl. 18) i u svakom oglasu (čl. 25)",\r
"broj telefona",\r
"Broj u Menadžeru",\r
"Broj ugovora o posredovanju",\r
"Broj ugovora o potposredovanju",\r
"broj upisa nije unesen (Posredovanje → Podaci posrednika)",\r
"Broj upisa se unosi u kartici Podaci posrednika.",\r
"Broj upisa u Registar posrednika",\r
"Broj upisa u Registar posrednika nije unesen; ugovor ga navodi kao dokaz o upisu (čl. 18 st. 2 t. 1).",\r
"Broj uvjerenja o stručnom ispitu",\r
"Broj zahtjeva",\r
"Broj: {0}",\r
"Brojeve dokumenata dodjeljuje samo jedan uređaj.",\r
"Brojevi računa (18 cifara, razdvojeni zarezom)",\r
"Bruto isplata (EUR)",\r
"Bruto iznos isplate mora biti veći od nule.",\r
"Bruto prihod",\r
"Brzi unos sedmice",\r
"Budžet sati",\r
"Budžet sati nije ispravan.",\r
"Bulevar 1",\r
"CAD",\r
"CARD",\r
"Carina i akciza ove deklaracije su već cijele raspoređene na kalkulacije.",\r
"Carina i akciza sa carinske deklaracije ulaze u nabavnu vrijednost robe (Kontni okvir 11/20 čl. 12 st. 2) kao zavisni trošak kalkulacije; PDV pri uvozu ostaje na deklaraciji (PR-PDV polje 20). Izbor deklaracije, pa kalkulacija istog uvoza; podjela po vrijednosti robe.",\r
"Carinska deklaracija ↔ kalkulacija",\r
"Carinska deklaracija ↔ kalkulacija (carina i akciza u zavisne troškove) · devizne cijene i kurs · bonusi dobavljača · akcize po artiklu · dobavljači iz Menadžera",\r
"Carinska deklaracija ne postoji.",\r
"Carinska deklaracija uz kalkulaciju, devizne cijene i kurs, bonusi dobavljača, akcize po artiklu i dobavljači upisani u Menadžeru.",\r
"CBCG",\r
"CBCG lista od {0}",\r
"CBCG: {0}",\r
"CBCG: lista je prazna",\r
"CBCG: valuta {0} nije na listi",\r
"čeka dostavu FOJ-u",\r
"čeka knjižno odobrenje",\r
"čeka potvrdu",\r
"Čeka potvrdu",\r
"čeka pristanak",\r
"Centar",\r
"četiri godine od prestanka funkcije, odnosno od obuke",\r
"CG",\r
"CHF",\r
"cijena {0}",\r
"cijena bez PDV-a za period akcije (važi kad je niža od cijene kupca)",\r
"Cijena i rabat svake stavke po cjenovniku, ugovoru, rabatima i akcijama kupca na dan dokumenta",\r
"Cijena i rabat svake stavke po cjenovniku, ugovoru, rabatima i akcijama kupca na dan isporuke",\r
"Cijena iz Menadžera {0}: {1}",\r
"Cijena iz Menadžera je upisana.",\r
"Cijena izlaza: {0}.",\r
"Cijena je povećana više od {0} % bez pisanog pristanka klijenta ({1} st. 2).",\r
"Cijena je povećana više od {0} % u odnosu na pristanak ({1} € → {2} €): nalog se ne završava dok se ne upiše pisani pristanak klijenta ({3} st. 2).",\r
"Cijena je uklonjena.",\r
"Cijena je upisana.",\r
"Cijena koštanja iz radnog naloga (materijal i dodatni troškovi), bez ručnog upisa.",\r
"Cijena mora biti broj veći ili jednak nuli.",\r
"cijena nije ispravna",\r
"cijena objekta",\r
"Cijena poslije rabata ispod nabavne (faktura, otpremnica)",\r
"Cijena poslije rabata je ispod nabavne:",\r
"Cijena poslije rabata je ispod nabavne: {0}{1}.",\r
"Cijena sa PDV-om (izvještaj o popisu, Pravilnik 34/12 čl. 11)",\r
"cijena u knjigama ista",\r
"Cijena u valuti",\r
"Cijena u valuti mora biti broj (0 ili veći).",\r
"Cijena uključuje naknadu za posredovanje",\r
"Cijena za kupca",\r
"Cijena zakupa",\r
"Cijene iz Menadžera: {0}",\r
"Cijene kupca",\r
"Cijene kupca primijenjene na {0} stavki.",\r
"Cijene se od {0} uvećavaju za {1} % (primjer prve stavke: {2} {3}).",\r
"Cijene stavki su već po pravilu kupca.",\r
"Cijene su izražene u {0}; račun se izdaje u {1}, a iznosi za obračun PDV-a se iskazuju u EUR po srednjem kursu Centralne banke Crne Gore na dan nastanka poreske obaveze.",\r
"Cijene u cjenovniku",\r
"Čitanje računa i izvoda iz pošte na ovom računaru.",\r
"čl. 43 st. 2 t. 1",\r
"čl. 43 st. 2 t. 2",\r
"čl. 43 st. 2 t. 3",\r
"čl. 43 st. 2 t. 4",\r
"čl. 43 st. 2 t. 5",\r
"čl. 43 st. 2 t. 6",\r
"čl. 43 st. 2 t. 7",\r
"čl. 49 st. 5",\r
"čl. 52–53",\r
"čl. 56b st. 2",\r
"čl. 56d st. 2",\r
"Cjenovnici A/B/C",\r
"Cjenovnici A/B/C sa važenjem i objektima · ugovorne cijene kupca · rabati grupa i skale · B2B akcije · cijena za kupca na dan",\r
"Cjenovnici A/B/C sa važenjem i objektima, ugovorne cijene kupca, rabati grupa i kupaca, količinske skale, kaskadni rabat i B2B akcije. Faktura, ponuda i otpremnica uzimaju cijenu kupca na dan dokumenta iz istog pravila. Bez cjenovnika važi cijena objekta, kao do sada.",\r
"cjenovnik „{0}\\" ne postoji u Knjigovodstvu",\r
"cjenovnik {0}",\r
"cjenovnik {0}{1}",\r
"Cjenovnik je obrisan.",\r
"Cjenovnik je snimljen.",\r
"Cjenovnik ne postoji.",\r
"Cjenovnik nema cijena.",\r
"čl. 66 st. 1 al. 1",\r
"čl. 66 st. 1 al. 2",\r
"čl. 66 st. 2 (t. 13 al. 5, 10–13)",\r
"čl. 66 st. 3",\r
"Član uže porodice",\r
"CNY",\r
"COALESCE(d.Valuta,'')",\r
"Crnogorski, engleski, ruski, turski — natpisi na ekranu; dokumenti ostaju na crnogorskom.",\r
"CZK",\r
"d.NacinPlacanja",\r
"d.Vrsta IN ({0})",\r
"Dan fakturisanja je od 1 do 28.",\r
"Dan u mjesecu",\r
"dana od prijema):",\r
"dana valute",\r
"Dani kašnjenja za blokadu: od 0 do 3650.",\r
"Dani za opomene moraju biti rastući (npr. 8, 30, 60) i između 1 i 365.",\r
"Datum „važi do\\" je prije datuma „važi od\\".",\r
"Datum „važi od\\" nije ispravan.",\r
"Datum „Zadržati do\\"",\r
"Datum ({0}) je prije datuma prijema {1}",\r
"Datum ({0}) je u budućnosti.",\r
"Datum ({0}) nije ispravan.",\r
"Datum {0} · proizvod: {1} · plan {2} {3} · predato {4} · materijal iz: {5} · predaja u: {6}{7} · status: {8}",\r
"Datum dokumenta nije ispravan.",\r
"Datum dostave FOJ-u",\r
"Datum dostave je prije datuma unosa.",\r
"Datum dostave je u budućnosti.",\r
"Datum dostave je upisan.",\r
"Datum dostave je već upisan ({0}).",\r
"Datum dostave nije ispravan.",\r
"Datum i vrijeme početka obustave",\r
"Datum i vrijeme produženja",\r
"Datum i vrijeme uvida",\r
"Datum ili period prometa koji se razlikuje od dana izdavanja računa.",\r
"Datum isplate nije ispravan.",\r
"Datum ispravke",\r
"Datum ispravke je obavezan.",\r
"Datum ispravke ne može biti prije datuma utuženja.",\r
"Datum isteka ugovora je prije početka važenja.",\r
"Datum isteka ugovora nije ispravan.",\r
"Datum izdavanja faktura",\r
"Datum je snimljen. Dokumenti od tog dana stižu u sljedećem krugu razmjene.",\r
"Datum je u budućnosti.",\r
"Datum knjige (datum računa ili datum knjiženja)",\r
"Datum kursa",\r
"Datum kursa nije ispravan.",\r
"Datum kursa nije upisan.",\r
"Datum obilaska nije ispravan.",\r
"Datum obračuna ne može biti prije dana do koga se kamata obračunava.",\r
"Datum obračuna nije ispravan.",\r
"Datum obuke",\r
"Datum odgovora",\r
"Datum odgovora je prije datuma prijema prigovora.",\r
"Datum odgovora nije ispravan.",\r
"datum odnosa",\r
"Datum određivanja nije ispravan.",\r
"Datum otkaza",\r
"Datum otkaza je prije zaključenja ugovora.",\r
"Datum otkaza je u budućnosti.",\r
"Datum otkaza nije ispravan.",\r
"Datum otpisa mora biti ispravan datum, ne prije datuma obračuna.",\r
"Datum početka djelatnosti nije ispravan.",\r
"Datum početka praćenja",\r
"Datum početka važenja ugovora nije ispravan.",\r
"Datum potvrde",\r
"Datum potvrde o rezidentnosti nije ispravan.",\r
"Datum predaje kopije nalogodavcu nije ispravan.",\r
"Datum prestanka odnosa",\r
"Datum prestanka odnosa je prije datuma uspostavljanja.",\r
"Datum preuzimanja",\r
"Datum preuzimanja je prije datuma završetka.",\r
"Datum prijave nije ispravan.",\r
"Datum prijema je u budućnosti.",\r
"Datum prijema prigovora je u budućnosti.",\r
"Datum prijema prigovora nije ispravan.",\r
"Datum pristanka",\r
"Datum produženja",\r
"Datum projekta nije ispravan.",\r
"Datum provjere u Registru stvarnih vlasnika",\r
"Datum radnog naloga je obavezan.",\r
"Datum rođenja nije upisan (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Datum saglasnosti za elektronski račun nije ispravan.",\r
"Datum sastavljanja: {0}",\r
"Datum transakcije",\r
"Datum transakcije nije ispravan.",\r
"Datum u polju je nov datum važenja",\r
"Datum ugovora o potposredovanju nije ispravan.",\r
"Datum unosa",\r
"Datum unosa nije ispravan.",\r
"Datum upisa",\r
"Datum upisa u katastar",\r
"Datum upisa u katastar nije ispravan.",\r
"Datum upisa u Registar posrednika nije ispravan.",\r
"Datum uplate poreza",\r
"Datum uplate poreza nije ispravan.",\r
"Datum uspostavljanja odnosa",\r
"Datum usvajanja",\r
"Datum usvajanja analize rizika je u budućnosti.",\r
"Datum usvajanja analize rizika nije ispravan.",\r
"Datum utuženja",\r
"Datum utuženja je obavezan.",\r
"Datum utuženja ne može biti prije datuma fakture.",\r
"Datum važenja lične isprave",\r
"Datum važenja polise nije ispravan.",\r
"Datum važenja stope nije ispravan.",\r
"Datum važenja ugovora nije ispravan.",\r
"Datum zahtjeva klijenta nije ispravan.",\r
"Datum zaključenja pravnog posla",\r
"Datum zaključenja pravnog posla je u budućnosti.",\r
"Datum zaključenja pravnog posla nije ispravan.",\r
"Datum zaključenja ugovora je u budućnosti.",\r
"Datum zaključenja ugovora nije ispravan.",\r
"Datum zaključenja ugovora o posredovanju",\r
"Datum završetka projekta je prije početka.",\r
"Datum: {0}",\r
"Davanje zajmova i posredovanje pri ugovaranju zajmova (t. 13 al. 8)",\r
"decimala",\r
"degustacija / interna potrošnja",\r
"Deklaracija",\r
"DEP",\r
"Deponovanje gotovog novca gdje je kao dokaz o porijeklu sredstava priložen isti isplatni nalog, a iznos deponovanog gotovog novca je značajno veći od iznosa naznačenog na isplatnom nalogu.",\r
"Deponovanje gotovog novca kod više kreditnih institucija, gdje je kao dokaz o porijeklu novčanih sredstava priložen isti isplatni nalog, a iznos deponovanog novca je značajno veći od iznosa naznačenog na isplatnom nalogu.",\r
"Depozit",\r
"Depozit {0} {1} — ugovor o posredovanju {2}{3}",\r
"Depozit po ugovoru o posredovanju {0}",\r
"Depozit posrednika (novac nalogodavaca)",\r
"Depozit posrednika: novac nalogodavaca na depozitnom računu (primljeno D, predato P)",\r
"Depozit posrednika: obaveza prema nalogodavcima za primljeni novac",\r
"Depozit se vodi u EUR.",\r
"Depozitni račun",\r
"DEPOZITNI RAČUN POSREDNIKA",\r
"Depozitni račun posrednika (novac nalogodavaca)",\r
"Depozitni račun se upisuje sa 18 cifara (npr. 510-0000000012345-67).",\r
"Depozitni računi (novac nalogodavaca)",\r
"Detalj",\r
"Devizne cijene i kurs",\r
"Devizni podaci su snimljeni.",\r
"Dijelovi programa (moduli, posebne evidencije)",\r
"Dijelovi van knjiga (oblasti menija)",\r
"Dio iz šifarnika izlazi sa zalihe objekta fakturom iz naloga",\r
"Dio posredničke naknade iz zadržane kapare (Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 27 st. 3).",\r
"Dio programa nije uključen za ovu firmu (O programu → Dijelovi programa).",\r
"Distributivni kanali (lično, na daljinu, preko zastupnika)",\r
"Djelatnost obveznika i obim poslovanja",\r
"Djelilac",\r
"djelimično",\r
"djelimično usvojen",\r
"DKK",\r
"Dnevna kopija u folder za rezervnu kopiju",\r
"Do dana",\r
"Do sljedećeg",\r
"Dobavljač „{0}\\" nije nađen u Knjigovodstvu.",\r
"Dobavljač {0} je upisan u šifarnik.",\r
"Dobavljač {0} već postoji — nacrt je povezan sa njim.",\r
"Dobavljač / nalog",\r
"Dobavljač iz Menadžera {0}: {1}",\r
"Dobavljač je obavezan.",\r
"Dobavljač nema otvorenih faktura; plaćanje {0} EUR ostaje kao pretplata dok se faktura ne unese.",\r
"dobavljač {0}",\r
"Dobavljač {0} nema nijednu fakturu u firmi {1}.\\n\\nFaktura se unosi u firmu {2}. Potrebno je provjeriti da faktura glasi na ovu firmu, a ne na drugu firmu na ovom računaru.",\r
"Dobavljač: {0}{1}{2}{3}",\r
"Dobavljače iz Menadžera potvrđuje glavni računar. {0}",\r
"Dobavljači",\r
"Dobavljači iz Menadžera",\r
"Dobavljači iz Menadžera: {0}",\r
"Dobavljači koje je menadžer upisao u Menadžeru (prije prve fakture). Potvrdom nastaje dobavljač u šifarniku (sa e-poštom i žiro računom); dobavljač sa istim PIB-om se veže sam. Menadžer kroz snimak spaja svog dobavljača sa potvrđenim.",\r
"Dobavljači: kartica dobavljača i unos plaćanja",\r
"Dodaj dokument",\r
"Dodaj grupu",\r
"Dodaj uslugu iz šifarnika",\r
"Dodatak na stopu mora biti između 0 i 20 procentnih poena.",\r
"Dodatak na stopu za B2B (p.p.)",\r
"dodatni (kaskadno)",\r
"Dodatni dani odmora po pravilniku.",\r
"Dodatni rabat %",\r
"dodatni rabat na cijenu poslije rabata kupca",\r
"Dodatni rabat se obračunava na cijenu poslije osnovnog rabata (rabat 1 + rabat 2)",\r
"dodatni rabat{0}{1}",\r
"Dodatni tekst u podnožju izvoza",\r
"Dodatni tekstovi I–III na izlaznim dokumentima",\r
"Dodatni tekstovi I–III, štampa bez cijene, mjesta za potpis",\r
"Dodatni tekstovi na izlaznim dokumentima",\r
"Dodatni tekstovi su snimljeni.",\r
"Dodatni troškovi (rad, režija)",\r
"Dodatni troškovi ne mogu biti negativni.",\r
"Dodatni troškovi se mijenjaju dok je nalog otvoren.",\r
"dodato poslije ponude",\r
"Dokument {0} je potvrđen.",\r
"Dokument {0} je potvrđen. Nalog {1} je proknjižen.",\r
"Dokument iz Menadžera {0}: {1}",\r
"Dokument je odbijen.",\r
"Dokument ne traži odobrenje.",\r
"Dokumente iz Menadžera potvrđuje glavni računar. {0}",\r
"Dokumenti iz Menadžera",\r
"Dokumenti Menadžera izmijenjeni prije ovog datuma se ne primaju (unijeti su ranije, ručno). Ranijim datumom se primaju i stariji dokumenti; dokument koji je već unijet ručno potrebno je odbiti.",\r
"Dokumenti naloga",\r
"Dokumenti robe iz Menadžera: {0}",\r
"Donja granica gotovinske transakcije mora biti manja od gornje.",\r
"DOO, AD, preduzetnik… (zaglavlje statističkog aneksa).",\r
"Dopuna odgovora (dodaje se na kraj, sa današnjim datumom)",\r
"Dopunjuje se samo prijava FOJ-u.",\r
"dospjelo {0}{1}",\r
"Dospjelo na dan",\r
"Dostavljeno",\r
"dostavljeno {0}",\r
"dostavljeno FOJ-u",\r
"Dostavljeno FOJ-u",\r
"Dostavljeno poslije roka ({0}).",\r
"Dostignut prag",\r
"Doznaka i šifra u IOPPD za ovo odsustvo nisu propisane i čekaju odgovor knjigovođe, pa program te dane ne obračunava kao odsustvo: radnica bez rasporeda smjena ih ima u redovnom radu, a radnici po rasporedu sate tih dana treba upisati u obračun po uputstvu knjigovođe.",\r
"Dozvola boravka",\r
"Dozvoli izlaz iznad stanja (minus)",\r
"Dozvoli izlaz materijala veći od stanja (stanje u minusu, uz upozorenje)",\r
"Dozvoli izmjenu datuma nivelacije",\r
"Dozvoljeno povećanje cijene (%)",\r
"Dozvoljeno povećanje cijene mora biti između 0 i 100 %.",\r
"Druga javna isprava",\r
"Druga opomena",\r
"DRUGA OPOMENA",\r
"Druga strana u poslu",\r
"Drugi prihod iz čl. 29 (dividenda, kapitalni dobitak i dr.)",\r
"drugo lice (spoljni saradnik)…",\r
"Društvo za osiguranje",\r
"Drzava",\r
"država",\r
"Država (ISO)",\r
"država isprave",\r
"Država izdavanja (ISO)",\r
"Država izdavanja lične isprave nije upisana (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Država primaoca se upisuje oznakom ISO (npr. DE, USA, IRL).",\r
"Država rođenja (ISO)",\r
"Država rođenja nije upisana (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Država sjedišta nije upisana (ZSPNFT čl. 117 st. 1 {0}).",\r
"Država sjedišta, odnosno prebivališta",\r
"Države i geografska područja",\r
"Države sa liste Ministarstva finansija",\r
"Države se upisuju oznakom ISO (dva ili tri slova), odvojene zarezom.",\r
"Državljanstvo (ISO)",\r
"Državljanstvo nije upisano (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Državljanstvo stvarnog vlasnika se upisuje oznakom ISO.",\r
"dug",\r
"Dug",\r
"dug {0}",\r
"Dug dobavljaču, rok plaćanja {0}.{1}.{2}.",\r
"Dug dobavljaču: saldo, kartica, otvorene stavke i IOS",\r
"Dug dobavljaču.",\r
"dug, rok {0}",\r
"Dugme „Proknjiži\\" na dokumentu",\r
"Duže čuvanje na zahtjev FOJ-a ili nadzornog organa",\r
"Duže čuvanje na zahtjev FOJ-a ili nadzornog organa (ZSPNFT čl. 127 st. 3)",\r
"Dva praga imaju isti iznos.",\r
"dvostruki zapis (isti izvor zapisan i na drugom računaru)",\r
"e-pošta",\r
"E-pošta: SMTP server, pošiljalac, potpis",\r
"e-poštom",\r
"ECB",\r
"ECB {0} (CBCG lista nije dostupna)",\r
"ECB: {0}",\r
"efitest.tax.gov.me za probu; obveznik PDV-a.",\r
"ekran",\r
"Ekskluzivno",\r
"Ekskluzivno posredovanje",\r
"Ekskluzivno posredovanje (čl. 31): nalogodavac se obavezuje da za vrijeme trajanja ugovora neće angažovati drugog posrednika. UPOZORENJE NALOGODAVCU: ako za vrijeme važenja ove klauzule nalogodavac zaključi pravni posao za koji je posredovao drugi posrednik, dužan je da ovom posredniku na ime naknade štete plati iznos ugovorene naknade za posredovanje.",\r
"Ekskluzivno posredovanje: nalogodavac se posebno upozorava na značenje i posljedice klauzule (čl. 31 st. 3) — upozorenje je u štampi ugovora.",\r
"Elektronska identifikacija",\r
"elektronskom poštom",\r
"ENU za fakture",\r
"ENU za fakture je zaseban od kase.",\r
"ENU za fakture mora biti odvojen od kasa: redni broj računa je godišnji niz po ENU. {0}",\r
"ENU za fakture se registruje",\r
"ERacunNacin",\r
"ERacunSaglasnost",\r
"Estradni, zabavni, umjetnički ili sportski program u Crnoj Gori",\r
"Etil alkohol (jaka alkoholna pića)",\r
"EUR · predato",\r
"EUR (crveni storno",\r
"EUR. Avans se dijeli po stopama PDV-a ponude; datum računa je datum prijema uplate.",\r
"EUR) · fakturisano:",\r
"EUR) · nedovršeno",\r
"EV",\r
"Evidencija",\r
"Evidencija nema unosa. Unos nastaje snimanjem ugovora o posredovanju.",\r
"Evidencija o posredovanju",\r
"Evidencija o posredovanju se čuva trajno; ugovori o posredovanju deset godina od zaključenja.",\r
"EVIDENCIJA O POSREDOVANJU U PROMETU I ZAKUPU NEPOKRETNOSTI",\r
"Evidencija o pristupu nadzornog organa podacima; FOJ se obavještava u roku od tri radna dana od uvida.",\r
"Evidencija prigovora potrošača (Zakon o zaštiti potrošača, „Sl. list CG\\" br. 12/26, čl. 27). Evidencija se čuva najmanje dvije godine.",\r
"EVIDENCIJA RADNIH SATI",\r
"EVIDENCIJA: {0}",\r
"Evidencije",\r
"Evidencije posebnih paketa ostaju u bazi firme i kad paket nije u licenci. Pregled i izvoz su uvijek dostupni; nov unos je moguć samo uz uključen paket.",\r
"Evidencije se čuvaju u zakonskom roku i kad paket nije u licenci: pregled i izvoz su uvijek dostupni",\r
"Evidentiraj sate",\r
"Evidentirano sati",\r
"Evidentirano:",\r
"fajl izmijenjen",\r
"Faktura (robne stavke koje ne dolaze iz otpremnice ni reversa), otpremnica i revers iz objekta veleprodaje. Važi strožija od ove i opšte postavke.",\r
"faktura {0} ({1}) prebačena iz kalkulacije u troškove: {2}",\r
"Faktura {0} je obrisana na drugom računaru, a ovdje nije nacrt — ostaje.",\r
"Faktura {0} je već zatvorena.",\r
"Faktura {0} nije napravljena iz evidencije sati.",\r
"Faktura {0} nije u stranoj valuti.",\r
"Faktura dobavljača",\r
"Faktura ima stavke sa 0 % PDV bez osnova. Potrebno je izabrati osnov (nulta stopa čl. 25, oslobođenje čl. 26/27 ili promet van Crne Gore čl. 17 Zakona o PDV).",\r
"Faktura iz evidencije sati ({0} unosa).",\r
"Faktura iz naloga",\r
"Faktura iz radnog naloga {0}.",\r
"Faktura iz ugovora",\r
"Faktura je prebačena u troškove (Nabavka i troškovi) {0}.",\r
"Faktura je prebačena u troškove: {0} EUR bez PDV-a, PDV {1} EUR, datum {2} (Nabavka i troškovi). Kalkulacija {3} je obrisana.",\r
"Faktura naknade",\r
"Faktura naknade po ugovoru o posredovanju {0}",\r
"faktura nema nenaplaćen dio sa PDV-om",\r
"Faktura nema nenaplaćen dio sa PDV-om — ispravka nije potrebna.",\r
"Faktura posredničke naknade",\r
"Faktura posredničke naknade se izdaje tek po zaključenju pravnog posla (Zakon o posredovanju, čl. 27 st. 1–2).",\r
"Faktura se izdaje više od osam dana poslije zaključenja posla ({0}); PDV obaveza nastaje osmog dana od prometa (Zakon o PDV, čl. 18 st. 3).",\r
"Faktura se pravi za završen nalog (sada: {0}).",\r
"Faktura stranog dobavljača u valuti: cijene stavki u valuti i kurs (jedinica valute za 1 €) iz kursne liste na dan fakture ili deklaracije. Nabavna cijena u kalkulaciji (€) = cijena u valuti ÷ kurs — mijenja se tek potvrdom; prodajne cijene ostaju iste.",\r
"Fakturabilno",\r
"fakture {0}",\r
"Fakture iz evidencije sati",\r
"Fakture ne prate odgovarajuće prijemnice, otpremnice i druga dokumentacija iz čega se može steći utisak da je promet robe fiktivan.",\r
"Fakture u kašnjenju sa zateznom kamatom (danas",\r
"fakture, predračuni i ponude",\r
"Fakturisani sati se ne mijenjaju",\r
"Fakturisanje",\r
"Fakturisano bez PDV",\r
"Fakturisano do",\r
"fakturisano na drugom računaru",\r
"Fakturisano sati",\r
"Fakturisano: {0}{1}",\r
"fakturiše se",\r
"Fakturiše se",\r
"Fakturna cijena",\r
"Fakturna cijena za „{0}\\" je obavezna.",\r
"Fakturna vrijednost bez PDV:",\r
"feed ažuriranja: objava bez potpisa",\r
"feed ažuriranja: objava bez stanja",\r
"feed ažuriranja: objava nije ispravnog oblika",\r
"feed ažuriranja: objava niža od ranije potpisane",\r
"feed ažuriranja: potpis objave ne važi",\r
"feed ažuriranja: potpis stanja ne važi",\r
"feed ažuriranja: potpisana objava glasi na drugi program",\r
"feed ažuriranja: stanje glasi na drugi program",\r
"feed ažuriranja: stanje isteklo",\r
"feed ažuriranja: stanje starije od posljednjeg prihvaćenog",\r
"FFFFFFFF",\r
"FIFO (prva ulazna, prva izlazna)",\r
"FIFO ili ponderisani prosjek od godine (MSFI za MSP 13.18).",\r
"Filijala",\r
"Firma nema magacin materijalnog knjigovodstva. Magacin se dodaje na kartici „Magacini\\".",\r
"firma: {0}",\r
"FirmaDokTekst{0}Na",\r
"FirmaPosrednik*",\r
"FirmaZspnft*",\r
"Fiskalizacija faktura, sertifikat, ENU, kase po objektima",\r
"Fiskalizacija se podešava na računaru sa Windows programom i sertifikatom firme.",\r
"Fizičko prisustvo",\r
"FOJ se obavještava o uvidu do {0} (ZSPNFT čl. 66 st. 12).",\r
"Fond sati i prirez opštine",\r
"Fond sati obračuna, stope prireza po opštinama.",\r
"Fond sati, prirez, odmori, smjene, odluka o radu praznikom",\r
"Funkcija",\r
"Garancija na izvršeni rad: {0} od dana preuzimanja.",\r
"Garancija na izvršeni rad: {0} od preuzimanja.",\r
"Garancija na izvršeni rad: {0}.",\r
"Garancija na rad (mj.)",\r
"Garancija na rad: cio broj mjeseci od 0 do 120.",\r
"garaža",\r
"Gazirana voda sa šećerom ili aromom",\r
"GBP",\r
"Generisano: {0}",\r
"Glavna knjiga mjeseca u ravnoteži (duguje = potražuje)",\r
"glavna knjiga se ne vodi u programu za ovaj mjesec",\r
"Glavni / sporedni računar, razmjena preko servera, praćenje glavnog.",\r
"Glavnica",\r
"Godina nije ispravna.",\r
"Godina prijema se ne mijenja: broj naloga pripada nizu te godine.",\r
"Godina prijema se ne mijenja: redni broj prigovora pripada knjizi te godine.",\r
"Godina unosa",\r
"Godina zaključenja se ne mijenja: broj ugovora pripada nizu te godine.",\r
"godišnje",\r
"godišnje ažuriranje",\r
"Godišnje ažuriranje analize rizika",\r
"Gorivo i energija — 513",\r
"Gotov proizvod",\r
"Gotovi proizvodi na zalihi",\r
"Gotovi proizvodi se vode u magacinu gotovih proizvoda.",\r
"Gotovina (plaćeno odmah)",\r
"Gotovina do (EUR)",\r
"Gotovina od (EUR)",\r
"gotovinom",\r
"Gotovinska",\r
"gotovinska transakcija {0} EUR (od {1} do {2} EUR)",\r
"Gotovinski",\r
"Grad, odnosno opština",\r
"građevinsko zemljište",\r
"Greska",\r
"Greška i dalje postoji: {0}",\r
"Grupa „{0}\\" već postoji.",\r
"Grupa je obrisana.",\r
"grupa kupaca",\r
"Grupa kupaca",\r
"Grupa kupaca je snimljena.",\r
"Grupa kupaca ne postoji.",\r
"grupe",\r
"Grupe kupaca",\r
"grupu kupaca",\r
"Hosting, SaaS i pristup softveru (po odluci knjigovođe)",\r
"HUF",\r
"i obrađeni",\r
"i st. 3",\r
"Identifikacija",\r
"Identifikacija i provjera identiteta klijenta, upis u registar klijenata",\r
"IIC:{0}",\r
"ili grupa artikala",\r
"ili iz cijena objekta",\r
"ili iznos naknade bez PDV",\r
"ili izričit magacin",\r
"ILS",\r
"Ime i prezime agenta koji je vodio predmet",\r
"Ime i prezime agenta koji vodi predmet nije upisano (Pravilnik o evidenciji o posredovanju 45/26, čl. 3 t. 6).",\r
"Ime i prezime klijenta nije upisano.",\r
"Ime i prezime lica koje je obišlo nepokretnost nije upisano.",\r
"Ime i prezime ovlašćenog službenika",\r
"Ime i prezime potrošača nije upisano.",\r
"Ime i prezime preduzetnika",\r
"Ime i prezime preduzetnika nije upisano (ZSPNFT čl. 117 st. 1 t. 2).",\r
"Ime i prezime službenika",\r
"Ime i prezime stvarnog vlasnika nije upisano.",\r
"Ime i prezime zaposlenog",\r
"Ime i prezime zastupnika",\r
"Ime i prezime, odnosno naziv",\r
"Ime lica koje je kontrolisalo izvještaj.",\r
"Ime lica koje je proknjižilo nalog.",\r
"Ime lica koje je sastavilo izvještaj (nalog za knjiženje, bruto bilans, popisne liste).",\r
"Ime, prezime, odnosno poslovno ime i adresa nalogodavca",\r
"Imena se štampaju na mjestima za potpis na nalogu za knjiženje, bruto bilansu i popisnim listama; prazno polje ostavlja crtu za potpis rukom.",\r
"Imena za potpise na nalogu za knjiženje, bruto bilansu i popisnim listama.",\r
"Indeksacija (%)",\r
"Indeksacija (%) nije ispravna.",\r
"Indikator",\r
"Indikator {0} je na listi obveznika.",\r
"Indikator {0} je uklonjen sa liste obveznika.",\r
"Indikator {0} nije na listi indikatora.",\r
"Indikator ne postoji.",\r
"Indikator sa liste nije izabran (ZSPNFT čl. 81).",\r
"Indikatori",\r
"Indikatori sa liste (izabrano:",\r
"Indikatori:",\r
"industrijski objekat",\r
"Informativno: prihod = fakture bez PDV-a izdate u periodu; trošak rada = sati u periodu × trošak sata radnika (trošak poslodavca iz obračuna zarada ÷ fond sati mjeseca). Sati spoljnih saradnika i radnika bez obračuna zarada su bez troška (kolona „Sati bez troška\\").",\r
"Inostranstvo i kurs",\r
"Interni akt obveznika o analizi rizika (ZSPNFT čl. 12): identifikacija i procjena rizika po klijentu, grupi klijenata, državi i geografskom području, poslovnom odnosu, transakciji, usluzi i distributivnom kanalu, kategorije rizika i mjere za umanjenje rizika. Analiza se ažurira najmanje jednom godišnje.",\r
"Interni prenos {0}: {1} → {2} (nabavna {3}; {4}){5}",\r
"Interni prenos br. {0} od {1} iz {2} (interna kalkulacija{3}){4}",\r
"Interni prenos br. {0} od {1} u {2} (crveni storno{3}){4}",\r
"Interni sati se ne fakturišu, ali ulaze u izvještaje i trošak projekta",\r
"Interno",\r
"interno (ne fakturiše se)",\r
"Inventar",\r
"Investiranje, promet i posredovanje u prometu nepokretnosti (t. 13 al. 9)",\r
"IPD",\r
"Ishod posredovanja",\r
"Ishod prigovora nije poznat.",\r
"Ishod se upisuje uz odgovor trgovca.",\r
"Isključeno: nivelacija ostaje sa datumom kad je napravljena (datum popisa se ne mijenja).",\r
"Isključeno: nivelacija ostaje sa datumom kada je napravljena.",\r
"Iskorisceno",\r
"Isplata ne podliježe porezu po odbitku ({0}).",\r
"Isplata primaocu",\r
"Isporuka blokirana —",\r
"Isporuka blokirana:",\r
"Isporuka kupcu „{0}\\" je blokirana{1}{2}.",\r
"Isporuka kupcu je blokirana.",\r
"Isporuka se blokira kad najstarija dospjela faktura kasni više od ovoliko dana. Prazno = podešavanje firme; 0 = bez automatske blokade za ovog kupca.",\r
"Isporuke bez računa sa PDV obavezom u {0}/{1} (osmi dan od isporuke, ZPDV čl. 18 st. 3): {2} otpremnica, osnovica {3}, PDV {4} EUR — {5}",\r
"isprava važi do",\r
"Ispravi PDV",\r
"Ispravka izlaznog PDV {0} % — nenaplativo potraživanje (čl. 20a)",\r
"Ispravka izlaznog PDV-a za nenaplaćen dio fakture (",\r
"Ispravka PDV {0}",\r
"Ispravka PDV po računu {0}{1} — {2}",\r
"Ispravka PDV-a",\r
"Ispravka PDV-a (nenaplativo potraživanje)",\r
"Ispravka PDV-a je moguća samo za potraživanje utuženo prije otvaranja stečajnog postupka nad kupcem (Zakon o PDV čl. 20a). Potrebna je potvrda.",\r
"Ispravka PDV-a je moguća samo za utuženo potraživanje. Prvo se upisuje utuženje.",\r
"Ispravka PDV-a je poništena.",\r
"Ispravka PDV-a je upisana. Ulazi u PR-PDV i KIF mjeseca ispravke.",\r
"Ispravka PDV-a od",\r
"Ispravka PDV-a za nenaplativo potraživanje — račun {0}",\r
"Ispravka PDV-a za ovu fakturu je već urađena ({0}).",\r
"ista faktura",\r
"Istek ugovora {0}",\r
"istekao rok",\r
"Istekao rok čuvanja: klijenata",\r
"istekla {0}",\r
"Isti indikator je već na sopstvenoj listi.",\r
"isti kupac je već u redu {0}",\r
"Isti upis se može poslati i iz programa. Potrebni su sertifikat firme i upisan kod poslovne jedinice; kod softvera i kod održavaoca program dodaje sam. Uprava prihoda vraća kod ENU, koji se odmah upisuje gore. Zahtjev ide u okruženje izabrano u podešavanjima (",\r
"ističe",\r
"Isto polje kao „Ovlašćeno lice\\" u podacima firme.",\r
"Isto polje kao Ovlašćeno lice u podacima firme.",\r
"Istorija opomena",\r
"Istraživanje tržišta",\r
"iz Menadžera ({0})",\r
"Iz registra klijenata (ZSPNFT)",\r
"Iz šifarnika kupaca (neobavezno)",\r
"iz šifarnika: naziv, šifra ili barkod",\r
"Iz zadržane kapare",\r
"Izaberite popisnu listu.",\r
"Izabrana vrsta prometa važi samo za odlive.",\r
"Izabrana vrsta prometa važi samo za prilive.",\r
"Izabrani objekat ne postoji.",\r
"Izabrani sati prave nacrt obične fakture po kupcu, sa periodom prometa od prvog do posljednjeg dana rada. Fakturisani sati se ne mijenjaju; storno ili brisanje nacrta ih oslobađa.",\r
"Izabrati artikal ili grupu artikala akcije.",\r
"Izabrati izvor cijena (cjenovnik ili objekat).",\r
"Izabrati sertifikat ove firme. Uprava prihoda odbija račun potpisan sertifikatom druge firme.",\r
"izb",\r
"Izbor",\r
"Izdaj ponudu",\r
"IZDAJE SE",\r
"Izdao (magacioner)",\r
"Izdao nalog",\r
"izdat",\r
"Izdati avansni račun",\r
"Izdati fakturu?",\r
"Izdati otpremnicu?",\r
"Izdatnica",\r
"Izdato (neto)",\r
"Izdato {0} – {1}",\r
"Izdavanje iz magacina {0}",\r
"Izdavanje je odobrio {0} {1} — {2}.",\r
"izdavanje samo uz odobrenje",\r
"Izdavanje u potrošnju: izrada (511), režija (512), gorivo (513); sitan inventar se otpisuje 100 %.",\r
"Izgled i meni",\r
"Izlaz gotovih proizvoda",\r
"Izlaz gotovih proizvoda po prodaji",\r
"IZLAZ GOTOVIH PROIZVODA PO PRODAJI",\r
"Izlaz materijala iznad stanja",\r
"Izlazne fakture kupcu iz inostranstva: prihod od prodaje robe",\r
"Izlazne fakture kupcu iz inostranstva: prihod od usluga",\r
"Izlaznih",\r
"Izlaznih faktura ±",\r
"Izlozenost",\r
"Izloženost",\r
"Između privrednih subjekata povjerilac ima pravo i na naknadu troškova naplate od najmanje 40 € po zakašnjeloj fakturi (Zakon o rokovima izmirenja novčanih obaveza, čl. 7).",\r
"Izmijenjeno stavki koje čekaju: {0}.",\r
"izmjena bez otključavanja — {0}",\r
"Izmjena cijene je ponovo obrađena.",\r
"Izmjena datuma nivelacije je isključena (Podešavanja → Robno i kalkulacija).",\r
"Izmjena datuma nivelacije nije dozvoljena (Podešavanja → Robno i kalkulacija).",\r
"Izmjena podataka klijenta: {0}",\r
"Izmjena pravila banke",\r
"Izmjena unosa sati",\r
"Izmjena VP cijene ili ugovorne cijene u Menadžeru stiže kao prijedlog; cijena se mijenja tek potvrdom.",\r
"IZMJENE POSLIJE ZAKLJUČENJA — {0}. godina",\r
"Iznajmljivanje i posredovanje u iznajmljivanju nepokretnosti — zakup od 10.000 € mjesečno (t. 13 al. 5)",\r
"Iznos (nabavna)",\r
"Iznos avansa sa PDV (EUR)",\r
"Iznos do",\r
"Iznos fakture u valuti",\r
"Iznos kalk.",\r
"Iznos kalkulacija ±",\r
"Iznos naknade nije određen (ugovoreni iznos ili procenat od cijene posla).",\r
"Iznos nivelacije",\r
"Iznos od",\r
"Iznos otvorene fakture",\r
"Iznos pazara",\r
"Iznos pazara ±",\r
"Iznos {0} EUR je {1} puta veći od uobičajenog plaćanja ovom dobavljaču (uobičajeno {2} EUR, najveće ranije {3} EUR).",\r
"iznos {0}{1}",\r
"Iznos „od\\" je veći od iznosa „do\\".",\r
"Iznos po pristanku klijenta: {0} € (dozvoljeno odstupanje do {1} €).",\r
"Iznos ponude sa PDV:",\r
"Iznos se uplaćuje na račun {0}, sa pozivom na broj {1}.",\r
"Iznos transakcije (EUR)",\r
"Iznos transakcije u EUR mora biti veći od nule.",\r
"Iznos u EUR po srednjem kursu CBCG na dan {0} (1 EUR = {1} {2}): {3} EUR, od toga PDV {4} EUR.",\r
"Iznos u EUR:",\r
"Iznos u valuti",\r
"Iznos uplate u valuti {0} mora biti veći od nule.",\r
"Iznosi su bez PDV-a; PDV je obračunat na fakturi.",\r
"Iznosi za knjige i PDV prijavu: iznos u valuti ÷ kurs CBCG",\r
"Izračunaj",\r
"Izrada (proizvodnja) — 511",\r
"Izrada PDF-a je prekinuta.",\r
"Izrada PDF-a… ({0} redova)",\r
"Izrada PDF-a… ({0} strana)",\r
"Izvod otvorenih stavki",\r
"Izvodi banke učitani do kraja mjeseca",\r
"Izvor (odluka, Službeni list)",\r
"Izvor imovine i sredstava",\r
"Izvor isplate nije određen.",\r
"izvor sredstava",\r
"izvori nijesu odgovorili",\r
"Izvoz posebnih evidencija",\r
"Izvozi (IOPPD, platni listići, rekapitulacija) čitaju snimljene iznose. Obračun je zaključen i ne preračunava se sam; preračun traži otključavanje.",\r
"Izvozi (IOPPD, platni listići, rekapitulacija) čitaju snimljene iznose. Prije izvoza potrebno je pokrenuti „Obračunaj sve\\".",\r
"Izvršena",\r
"Izvršni direktor: {0}",\r
"j.Datum <= ?",\r
"j.Datum >= ?",\r
"Javna funkcija",\r
"JCI:{0}:{1}",\r
"Jedan ENU se koristi na jednom računaru. Za ovaj računar je potreban sopstveni ENU. {0}",\r
"Jedinica",\r
"Jedinstveni matični broj preduzetnika nije upisan (ZSPNFT čl. 117 st. 1 t. 2).",\r
"jedinstveni račun — za {0}/{1}{2} nema obračuna plata, zakupa, djela ni poreza po odbitku u glavnoj knjizi",\r
"Jednokratno povećanje cijena od zadatog datuma (period koji počinje tog dana ili kasnije)",\r
"jednom, po poslovnoj jedinici",\r
"Jezik natpisa na ekranu ovog uređaja",\r
"Jezik programa, prilagođeni meni, dijelovi van knjiga",\r
"Jmb",\r
"JMB preduzetnika",\r
"JMB, odnosno PIB",\r
"JMB/PIB zastupnika",\r
"Još nema razduženja po prodaji.",\r
"JPY",\r
"K (gratis)",\r
"Kad dobavljač nema istoriju i sken je bez marže.",\r
"Kadrovi → Odluka o radu praznikom",\r
"Kafa",\r
"Kako je partner stavke prepoznat",\r
"Kalkulacija {0} je u zaključanom periodu.",\r
"Kalkulacija {0} je već vezana za ovu deklaraciju.",\r
"Kalkulacija {0} ne postoji.",\r
"Kalkulacija {0}: zavisni troškovi su već raspoređeni na stavke. Prvo se poništava raspored, pa se deklaracija veže i raspored ponavlja.",\r
"Kalkulacija → Skenovi",\r
"Kalkulacija cijene koštanja",\r
"Kalkulacija cijene koštanja: materijal {0} + dodatni troškovi (rad, opšti troškovi proizvodnje) {1} = {2} EUR; po jedinici {3} EUR. Predato {4} EUR, nedovršeno {5} EUR.{6}",\r
"Kalkulacija i nivelacija",\r
"Kalkulacija iz ovog računa ulazi u knjige ove firme, a ulazni PDV u PR-PDV. Napraviti kalkulaciju?",\r
"Kalkulacija je u zaključanom mjesecu {0}/{1}. Knjiga primljenih računa i PDV prijava se ne mijenjaju (trošak dobija isti datum i isti PDV); mijenjaju se trgovačka knjiga i zalihe tog mjeseca. Potreban je razlog, koji se upisuje u izvještaj „Izmjene poslije zaključenja\\".",\r
"Kalkulacija je u zaključanom mjesecu {0}/{1}. Prebacivanje u troškove mijenja knjige tog mjeseca (trgovačka knjiga, zalihe): potrebno je otključati mjesec (Podešavanja → Zaključavanje perioda), prebaciti fakturu i mjesec ponovo zaključati.",\r
"Kalkulacija je u zaključanom mjesecu. Knjiga primljenih računa i PDV prijava se ne mijenjaju; mijenjaju se trgovačka knjiga i zalihe tog mjeseca. Razlog se upisuje u izvještaj „Izmjene poslije zaključenja\\".",\r
"Kalkulacija nema datum računa ni datum prijema.",\r
"Kalkulacija nema deviznih podataka.",\r
"Kalkulacija nije napravljena.",\r
"Kalkulacija otpisa se ne prebacuje u troškove.",\r
"Kalkulacija, nabavna cijena, nivelacija, PDV stope, revers",\r
"KAM",\r
"Kamata",\r
"Kamata (osim zatezne)",\r
"Kamata i opomene",\r
"Kanal",\r
"kanal prodaje",\r
"Kanal prodaje",\r
"Kao domaći kupac (2020), prihodi 6020 / 6120",\r
"kao trošak (iznosi i PDV sa računa, po stopi). Kalkulacija i račun se brišu: faktura više nije u trgovačkoj knjizi ni u zalihama. Dug dobavljaču ostaje (trošak sa istim rokom plaćanja). Ulazni PDV ostaje u knjizi primljenih računa istog mjeseca. Radnja je moguća samo na glavnom računaru.",\r
"kao trošak (iznosi i PDV sa računa, po stopi). Kalkulacija i račun se brišu: faktura više nije u trgovačkoj knjizi, zalihama ni u dugu dobavljaču. Ulazni PDV ostaje u knjizi primljenih računa istog mjeseca. Radnja je moguća samo na glavnom računaru, u otključanom mjesecu.",\r
"Kapara zadržana dana",\r
"Kartica (plaćeno odmah)",\r
"Kartica materijala",\r
"KARTICA MATERIJALA — {0}",\r
"Kartica se prikazuje za izabran magacin i artikal.",\r
"Kartice podešavanja",\r
"karticom",\r
"Kasa, Menadžer, dijelovi van knjiga, posebne evidencije po licenci.",\r
"Kase i fiskalizacija",\r
"Kase i objekti (kiosk, PJ, radno vrijeme)",\r
"Kase po objektima, kiosk (čl. 35b), poslovna jedinica.",\r
"Kase, Menadžer, smjene… uključuju se ručno ili po podacima firme.",\r
"Kask",\r
"Kaskadno",\r
"Kašnjenje plaćanja",\r
"kašnjenje plaćanja {0} dana (granica {1})",\r
"KAŠNJENJE PLAĆANJA PO KUPCU",\r
"kat. parcela {0}",\r
"Katastarska opština",\r
"Katastarska parcela",\r
"Kategorije rizika i kriterijumi razvrstavanja klijenata",\r
"Kg po JM",\r
"Kijent raskida ugovor o saradnji sa računovođom zbog zahtjeva za dodatnim objašnjenjem realizacije (ili najave realizacije) određenih transakcija.",\r
"Klijent",\r
"Klijent (ime i prezime ili naziv)",\r
"Klijent (ime i prezime ili naziv) nije upisan.",\r
"Klijent (klik — brisanje ličnih podataka)",\r
"Klijent (pravno lice) daje adresu koja predstavlja broj poštanskog faha za komunikaciju sa posrednikom ili je adresa na kojoj je taj klijent registrovan nepostojeća.",\r
"Klijent {0} je u registru klijenata (ZSPNFT): {1} — podaci se dostavljaju FOJ-u do {2}",\r
"Klijent često mijenja adresu, adresu sjedišta ili na jednoj adresi je registrovano više pravnih lica.",\r
"Klijent često mijenja osnivače i/ili stvarne vlasnike i/ili zakonske zastupnike.",\r
"Klijent često mijenja računovođe.",\r
"Klijent daje neadekvatno objašnjenje zbog čega u posljednjem trenutku mijenja imena lica koja koristi u vezi sa transakcijom.",\r
"Klijent daje nejasna objašnjenja o izvoru prihoda ili gotovog novca koje koristi u poslovnim transakcijama.",\r
"Klijent daje zajmove pravnim i fizičkim licima koje poslije otpisuje ili zatvara cesijama, kompenzacijama i sl.",\r
"Klijent donosi veliki iznos gotovog novca sa namjerom da obavi transakcije.",\r
"Klijent fakturiše usluge za koje se ne može sa sigurnošću potvrditi da su izvršene, odnosno vrši plaćanja za određenu vrstu usluge pravnim licima sa sjedištem na ofšor destinacijama, odnosno \\"poreskim rajevima\\".",\r
"Klijent ima komplikovanu organizacionu strukturu koja nije efikasna niti ekonomski opravdana.",\r
"Klijent ima složenu vlasničku strukturu iako vrsta i obim poslova koje obavlja ne zahtijevaju takvu strukturu.",\r
"Klijent insistira na elektronskom zaključenju ugovora i elektronskom ispostavljanju kupoprodajnog naloga, a potiče iz države poznate po proizvodnji i prometu narkotika, visoko-rizične treće države i države sa takozvane \\"crne liste\\", odnosno države za koju se sumnja da podstiče terorističke aktivnosti i finansiranje terorizma, iako nije izvjesno da će usluga posredovanja biti izvršena.",\r
"Klijent insistira na novim uslugama novčanog poslovanja, pri čemu postoji vjerovatnoća da ne mogu da se identifikuju realni tokovi novca ili učesnici plaćanja koji se do sada nijesu pojavljivali na tržištu kod posrednika ili se koriste različiti elektronski ili drugi kanali plaćanja.",\r
"Klijent je \\"veoma pričljiv\\" u vezi sa temama koje se tiču pranja novca ili finansiranja terorizma.",\r
"Klijent je državljanin države koja ne primjenjuje standarde za sprečavanje pranja novca i finansiranja terorizma.",\r
"Klijent je lice koje nije registrovano kao stvarni vlasnik i koje nema funkciju u pravnom licu, a upravlja i donosi odluke.",\r
"Klijent je odbio ponudu, odnosno povećanje cijene? Nalog se zatvara statusom „odbijeno\\".",\r
"Klijent je upisan u registar.",\r
"Klijent je, prema tvrdnjama medija, poznat javnosti kao lice koje je uključeno u vršenje nelegalnih privrednih (siva zona poslovanja) i/ili kriminalnih aktivnosti.",\r
"Klijent koji je nedavno kupio nepokretnost, prodaje je za višestruko veću cijenu od kupovne, što ukazuje na povezana lica zbog fiktivnog transfera novca i skrivanja porijekla i raslojavanja.",\r
"Klijent koji je poznat iz javnog života kupuje nekretnine u većim iznosima, čija vrijednost odstupa od njegovog pretpostavljenog imovnog stanja.",\r
"Klijent koji kupuje nekretnine mlađe je životne dobi i vidljivo je da raspolaže luksuznim statusnim simbolima (skupocjeni automobili, motocikli, plovila, satovi i dr.).",\r
"Klijent koji prema saznanjima ima izvore novca u inostranstvu ili van finansijskog sistema i želi da ugovori plaćanja u više manjih iznosa koristeći platne institucije za prenos novca.",\r
"Klijent koji se interesuje za nekretninu, koju nije lično vidio, tu nekretninu kupuje preko posrednika (advokata, zastupnika, bliskih osoba i dr.), a postoje saznanja da klijent kupac obavlja razna poslovanja na ivici legalnosti (nezakonito).",\r
"Klijent kupuje imovinu ili investira u nekretnine u kratkom vremenskom periodu i ne djeluje mnogo zainteresovan za lokaciju, stanje ili projektovane troškove popravke te imovine.",\r
"Klijent kupuje imovinu, a naročito nekretnine, na neviđeno.",\r
"Klijent kupuje polisu osiguranja za iznos koji nije srazmjeran prihodima klijenta.",\r
"Klijent na uvid prilaže samo fotokopije ličnih isprava ili neodgovarajuće isprave.",\r
"Klijent ne dostavlja računovodstvenu ispravu ili postoji sumnja u vjerodostojnost računovodstvene isprave da je istinita i da prikazuje poslovnu promjenu ili dostavljena računovodstvena isprava ne sadrži sve podatke potrebne za knjiženje u poslovnim knjigama, a klijent i dalje insistira da takva isprava bude proknjižena.",\r
"Klijent ne pokazuje naročit interes za karakteristike nepokretnosti (kvalitet izrade, lokaciju, datum završetka i primopredaje), već po svaku cijenu želi da se izvrši usluga posredovanja prometa/zakupa nepokretnosti.",\r
"Klijent ne postoji.",\r
"Klijent ne poznaje dobro svoj posao, iz čega se može zaključiti da ga uopšte ne obavlja ili ga obavlja u veoma ograničenom opsegu.",\r
"Klijent ne želi da njegovo ime bude na bilo kojem dokumentu koji bi ga doveo u vezu sa datom poslovnom transakcijom.",\r
"Klijent ne želi da se identifikuje u slučaju kupovine nekretnine gotovim novcem ili se identifikuje falsifikovanim podacima i ispravama.",\r
"Klijent ne zna pouzdano gdje se nalazi njegova poslovna dokumentacija, uključujući i finansijsku, odnosno knjigovodstvenu dokumentaciju.",\r
"Klijent nema zaposlenih ili nema poslovne prostorije što nije u skladu sa vrstom i obimom poslovanja.",\r
"Klijent neuobičajeno dobro poznaje zakonske propise u vezi sa prijavljivanjem sumnjive transakcije, brzo potvrđuje posredniku da su novčana sredstva \\"čista\\" i da \\"nijesu oprana\\".",\r
"Klijent nije izabran.",\r
"Klijent nudi novac, poklone, kao i druge neuobičajene pogodnosti kao protivuslugu za izvođenje očigledno neuobičajenog i sumnjivog posla.",\r
"Klijent nudi visoku posredničku naknadu, sa ciljem potkupljivanja kako se ne bi preduzimale radnje i obaveze iz Zakona.",\r
"Klijent obavlja djelatnost koja je u skladu sa Nacionalnom procjenom rizika od pranja novca i finansiranja terorizma označena kao visokorizična.",\r
"Klijent obavlja transakcije u velikim iznosima koje odstupaju od uobičajenog poslovanja klijenta.",\r
"Klijent ostvaruje značajne prilive sredstava od funkcionera, odnosno od člana uže porodice funkcionera ili bližeg saradnika funkcionera koji nijesu u skladu sa dostupnim podacima o prihodima funkcionera.",\r
"Klijent plaća avans velikim iznosom gotovog novca, dok se ostatak finansira iz neuobičajenog izvora ili kreditne institucije iz oblasti u kojoj su male stope poreza na dobit ili u kojoj nema poreza na dobit (u daljem tekstu: ofšor destinacija).",\r
"Klijent plaća za robu i usluge koje ne odgovaraju opisu njegove djelatnosti.",\r
"Klijent pokazuje neočekivano veliko interesovanje za mehanizme i načine funkcionisanja sistema sprečavanja pranja novca i finansiranja terorizma.",\r
"Klijent pokušava da dokaže svoj identitet na drugi način, a ne predajom lične isprave za identifikaciju.",\r
"Klijent pokušava da se identifikuje sa ispravama koje nijesu lične isprave.",\r
"Klijent pokušava uspostaviti dobre i prijateljske odnose sa zaposlenim kod posrednika, a prema javnim saznanjima potiče iz kriminalnog miljea.",\r
"Klijent posluje sa neprofitnim ili humanitarnim organizacijama, za što ne postoji pravi ekonomski razlog.",\r
"Klijent pregovara o obavljanju poslova po tržišnoj cijeni ili cijeni većoj od tražene, ali zahtijeva da u dokumentima bude navedena manja vrijednost, plaćajući razliku u cijeni \\"ispod tezge\\".",\r
"Klijent preuzima završen uređaj (sada: {0}). Uređaj po odbijenoj ponudi se vraća statusom „odbijeno\\".",\r
"Klijent prijevremeno gotovinski otplaćuje kredit ili vrši povraćaj zajma ili pozajmice osnivača za likvidnost.",\r
"Klijent prilaže samo kopije ličnih isprava ili pokušava da obavi identifikaciju sa drugim ispravama, koje nijesu lične isprave.",\r
"Klijent prilikom uspostavljanja poslovnog odnosa izbjegava lično pojavljivanje ili uspostavlja poslovni odnos preko punomoćnika.",\r
"Klijent prima zajmove i kredite, a novčana sredstva primljena po tom osnovu, odmah u istom ili sličnom iznosu, daje kao zajmove i kredite drugim licima ili ih koristi za osnivanje zavisnih pravnih lica.",\r
"Klijent pruža sumnjive ili nejasne informacije.",\r
"Klijent raspolaže imovinom velike vrijednosti (luksuzni automobili, plovila, stanovi, rezidencije i sl.) koja je izvan uobičajenih okvira poslovanja, odnosno ne može se povezati sa poslovanjem klijenta.",\r
"Klijent samoinicijativno navodi na zaključak da su sredstva kojima raspolaže legalna.",\r
"Klijent se izjašnjava da učestvuje u obavljanju nezakonitih poslova.",\r
"Klijent se obavještava da preuzme uređaj",\r
"Klijent se raspituje ili obavlja transakcije sa nekretninama za fizička i pravna lica, rezidente i nerezidente koji su iz ofšor destinacija ili za kompanije osnovane u ofšor destinacijama (u daljem tekstu: ofšor kompanija), kao i država poznatih po proizvodnji i/ili prometu narkotika, država u kojima se ne primjenjuju ili se nedovoljno primjenjuju mjere za sprečavanje i otkrivanje pranja novca i finansiranja terorizma i država sa tzv. crne liste, odnosno liste država za koje se sumnja da podstiču terorističke akte i finansiranje terorizma.",\r
"Klijent se raspituje o neuobičajenim načinima plaćanja.",\r
"Klijent se u sredstvima javnog informisanja dovodi u vezu sa terorizmom, finansiranjem terorizma, ekstremizmom, fundamentalizmom i vjerskim radikalizmom.",\r
"Klijent traži da plaća u ratama kako bi izbjegao plaćanje iznosa gotovog novca koji podliježe izvještavanju u skladu sa Zakonom o sprečavanju pranja novca i finansiranja terorizma (u daljem tekstu: Zakon).",\r
"Klijent traži savjet",\r
"Klijent traži savjet (ZSPNFT čl. 66 st. 11) — {0}",\r
"Klijent u posljednjem trenutku, pred realizaciju ugovora, mijenja ugovorne strane (dovodi novo lice i predstavlja ga kao fiktivno lice), ne pružajući objašnjenje za takvo postupanje, a poznat je po svojim nelegalnim aktivnostima.",\r
"Klijent u suprotnosti sa poslovnom praksom traži da računovođa u svoje ime i za svoj račun obavi transakciju.",\r
"Klijent u značajnoj mjeri posluje sa gotovim novcem iako to nije u skladu sa prirodom njegovog poslovanja.",\r
"Klijent vrlo dobro poznaje pravila o obavještavanju o sumnjivim transakcijama i/ili klijent pokazuje neočekivano veliko interesovanje za prijavljivanje podataka po osnovu Zakona kao i za mehanizme i načine funkcionisanja sistema sprečavanja pranja novca i finansiranja terorizma.",\r
"Klijent vrši dokapitalizaciju preduzeća bez ekonomski opravdanog razloga.",\r
"Klijent vrši neuobičajene ili veoma složene transakcije, naročito krajem i početkom izvještajnog perioda ili vrši transakcije koje ne prati adekvatna dokumentacija.",\r
"Klijent vrši neuobičajene transakcije, transakcije sa povezanim licima ili licima koja odstupaju od uobičajenih klijenata (plaćanje fizičkim licima, politički ili javno eksponiranim licima).",\r
"Klijent vrši plaćanja za robu i usluge čiju je tržišnu vrijednost teško utvrditi.",\r
"Klijent vrši transakcije u velikim iznosima koje uključuju poljoprivredna gazdinstva i privredne subjekte koji se bave trgovinom i otkupom sekundarnih sirovina, bez ekonomske opravdanosti.",\r
"Klijent za kojeg postoji sumnja da je povezan sa terorističkim aktima i/ili se nalazi na konsolidovanoj listi Komiteta za sankcije na osnovu Rezolucije 1267 Savjeta bezbjednosti Ujedinjenih nacija, zainteresovan je za uspostavljanje poslovnih odnosa i ulaganje u nepokretnosti.",\r
"Klijent zahtijeva da izvještaj o gotovinskoj transakciji ne bude sačinjen ili odbija da obavi transakciju nakon što sazna da je sačinjavanje izvještaja obavezno.",\r
"Klijent zahtijeva da se transakcija izvrši hitno ili zahtijeva da se ona tretira kao povjerljiva.",\r
"Klijent želi da kupi imovinu ili obavi posao u ime nekog drugog lica (poznanika ili srodnika, osim svog supružnika).",\r
"Klijent želi da uvjeri računovođu da nije potrebno da popuni ili priloži neki od potrebnih dokumenata ili mu nije poznato gdje se čuva poslovna dokumentacija.",\r
"Klijent zloupotrebljava otpis robe.",\r
"Klijent: {0}",\r
"Klijenti",\r
"Klijenti i grupe klijenata (rizik po vrsti klijenta)",\r
"Klijenti sa rokom čuvanja",\r
"Klijentova knjigovodstvena dokumentacija je neažurirana, neadekvatna i/ili neuredna.",\r
"Klijentova knjigovodstvena dokumentacija se često gubi, nestaje ili je uništena \\"višom silom\\".",\r
"Klijentove lične isprave za identifikaciju su nove, odnosno nedavno izdate.",\r
"Klijentovi neaktivni računi iznenada postaju aktivni i preko njih se vrše značajni transferi po obimu i učestalosti u odnosu na klijentov obim poslovanja.",\r
"knj.podObjekat.{0}",\r
"KNJIGA EVIDENCIJE PRIGOVORA",\r
"Knjiga prigovora",\r
"knjigovođa",\r
"Knjiženje",\r
"Knjiženje i kontni plan",\r
"Knjiženje nije urađeno: {0}",\r
"Knjiženo na {0}.",\r
"Knjižio",\r
"Knjižna odobrenja (umanjenje prihoda)",\r
"Knjižna odobrenja dobavljača (minus kalkulacije)",\r
"Knjižno",\r
"Knjižno odobrenje (korektivni račun) se ne upisuje kao trošak. Odobrenje se unosi kroz „Nova kalkulacija (QR)\\" ili ručno u „Nabavka i troškovi\\".",\r
"Knjižno odobrenje dobavljača još nije stiglo (minus kalkulacija istog dobavljača od dana povrata).",\r
"Knjižno odobrenje nije među ponuđenim (dobavljač, datum, već vezano).",\r
"Knjižno odobrenje se ne prebacuje u troškove.",\r
"knjižno odobrenje vezano",\r
"Knjižno odobrenje vezano automatski (isti dobavljač i objekat, iznos u granici 1 %).",\r
"KO {0}",\r
"Kod klijenta je uočena pojava paralelne dokumentacije.",\r
"Kod klijenta se primjećuju neuobičajeno veliki troškovi po osnovu plaćenih usluga u korist inostranih dobavljača.",\r
"Kod održavaoca (ugrađen)",\r
"Kod održavaoca dodjeljuje Uprava prihoda. Ne unosi se.",\r
"Kod operatera",\r
"Kod oslobođenja (fiskalna poruka)",\r
"Kod oslobođenja nije u šemi fiskalnog servisa.",\r
"Kod oslobođenja u fiskalnoj poruci (stavka EX, grupa ExemptFromVAT)",\r
"Kod poslovne jedinice",\r
"Kod prepisati sa portala bez razmaka: dva slova, tri cifre, dva slova, tri cifre.",\r
"Kod softvera (ugrađen)",\r
"Kod softvera dodjeljuje Uprava prihoda proizvođaču programa. Ne unosi se.",\r
"Kod softvera i održavaoca",\r
"Kod video-elektronske identifikacije čuva se video-audio zapis (ZSPNFT čl. 117 st. 1 t. 5); putanja zapisa nije upisana.",\r
"Kodovi EFI portala (PJ, ENU, operater, softver)",\r
"Količina (Menadžer)",\r
"Količina je veća od stanja u objektu: {0}.",\r
"Količina je veća od stanja u objektu: {0}. Izdati otpremnicu?",\r
"Količina je veća od stanja u objektu: {0}. Izdati revers?",\r
"Količina je veća od stanja u objektu: {0}. Izdavanje nije dozvoljeno (Podešavanja → Zalihe i stanje).",\r
"Količina od koje akcija važi ne može biti negativna.",\r
"Količina od koje cijena važi ne može biti negativna.",\r
"Količina od koje rabat važi ne može biti negativna.",\r
"Količina proizvoda na koju se normativ odnosi mora biti veća od nule.",\r
"Količina sastojka „{0}\\" mora biti veća od nule (najviše {1} decimala).",\r
"Količina u knjigama",\r
"Količina upisana u otpremnici, reversu, prenosu, otpisu, nivelaciji i početnom stanju se zaokružuje na ovaj broj decimala.",\r
"količina za",\r
"Količina za „{0}\\" mora biti veća od nule.",\r
"Količinska skala: cijena važi od ove količine (prazno = od 1)",\r
"Količinska skala: rabat od ove količine",\r
"količinski rabat{0}",\r
"Kolona KIF-a: „ne podliježe\\" ili „oslobođeno\\".",\r
"Kolona knjige izdatih računa (KIF)",\r
"Kome je predato",\r
"Komercijalista",\r
"Konsalting (savjetovanje, pravne, poreske i računovodstvene usluge)",\r
"Konta kupca iz inostranstva",\r
"Kontakt (adresa, telefon, e-pošta)",\r
"Kontakt (telefon, e-pošta)",\r
"kontakt osoba",\r
"Kontakt: {0}",\r
"Kontni plan i šeme knjiženja (konto po ulozi)",\r
"Konto zalihe",\r
"Konto zalihe (prazno = iz šeme)",\r
"Kontrola akcize: sa deklaracije {0}, očekivano po artiklima {1}, razlika {2}{3}.",\r
"Kontrola sa glavnom knjigom:",\r
"Kontrolisao",\r
"KONTROLNA LISTA ZATVARANJA MJESECA — {0}",\r
"Kopija baze van računara (Google Drive).",\r
"Kopija baze, iskazi, knjige i obračuni sa rokovima čuvanja.",\r
"Kopija dokumenta {0} je napravljena kao nacrt {1}.{2}{3}",\r
"Kopija predata nalogodavcu",\r
"Kopija ugovora o potposredovanju je predata poslije roka od tri dana ({0}).",\r
"Kopija ugovora o potposredovanju se predaje nalogodavcu u roku od tri dana (čl. 21 st. 4); rok je istekao {0}",\r
"Korekcija %",\r
"Korekcija mora biti veća od −100 %.",\r
"Korektivni račun {0} za račun s greškom je izdat i fiskalizovan. Original je storniran.",\r
"Korektivni račun za račun koji je Uprava prihoda označila greškom. Izdaje se sa negativnim iznosima i šalje Upravi prihoda.\\nRazlog (greška navedena na portalu):",\r
"Korisnici i zaštita",\r
"Korisnik imovine",\r
"KP, PRK, IR, IRN, MM, MMR",\r
"KR",\r
"krađa",\r
"Krajnje stanje:",\r
"Krajnje stanje: {0} {1}, vrijednost {2} EUR.",\r
"kreditni limit",\r
"Kreditni limit",\r
"kreditni limit (eur)",\r
"Kreditni limit (EUR)",\r
"Kreditni limit i automatska blokada pri otpremnici i fakturi",\r
"Kreditni limit kupca „{0}\\" je {1} EUR. Poslije ovog dokumenta izloženost je {2} EUR (dug {3}, otpremnice bez računa {4}, dokument {5}) — preko limita {6} EUR.",\r
"Kreditni limit mora biti iznos veći ili jednak nuli.",\r
"kreditni limit nije ispravan",\r
"Kriptoimovina",\r
"ks.Kolicina * ks.NabavnaCijenaBezPDV * (1 - COALESCE(ks.RabatProcenat, 0) / 100.0)",\r
"kuća",\r
"Kuhinja (proizvodnja)",\r
"Kuhinja objekta",\r
"Kupac „{0}\\" kasni sa plaćanjem {1} dana (granica za blokadu {2} dana; najstarije dospijeće {3}), dospjelo {4} EUR.",\r
"kupac „{0}\\" nije nađen u Knjigovodstvu",\r
"kupac {0}",\r
"Kupac fizičko lice (potrošač) — bez naknade troškova naplate",\r
"Kupac iz šifarnika (neobavezno)",\r
"Kupac je platio iznos fakture u valuti, a banka je odobrila EUR po svom kursu. Uplata zatvara fakturu, a razlika se knjiži kao kursna razlika.",\r
"Kupac je strani poreski obveznik, a na fakturi je obračunat PDV. Potrebna je provjera mjesta prometa (čl. 17 st. 2).",\r
"Kupac nema evidentiranu saglasnost za elektronski račun (upisuje se na kupcu ili pri slanju e-poštom).",\r
"Kupac nema evidentiranu saglasnost za prijem elektronskog računa. Račun se elektronski dostavlja uz saglasnost kupca.",\r
"Kupac nema otvorenih faktura u kašnjenju za ovu opomenu.",\r
"Kupac nema otvorenih faktura.",\r
"Kupac nema upisanih objekata isporuke (otpremnica koristi adresu kupca ili ručno upisano mjesto isporuke).",\r
"Kupac privredni subjekt",\r
"Kupac privredni subjekt i opomene",\r
"Kupac projekta ne postoji.",\r
"Kupac sa upisanom državom van Crne Gore",\r
"Kupac u šifarniku (neobavezno)",\r
"Kupaca",\r
"kupca PIB {0} u ±30 dana{1}",\r
"Kupci {0} faktura nemaju evidentiranu saglasnost za elektronski račun.",\r
"Kupci u inostranstvu (2030), prihodi 6030 / 6130",\r
"Kupci-firme",\r
"Kupci-firme kasama (PIB, rok plaćanja, rabat, dug, limit, blokada i VP cjenovnici u cjenovniku kase)",\r
"Kupcu privrednom subjektu (PIB, nije fizičko lice) se po zakašnjeloj fakturi obračunava i naknada troškova naplate, bez opomene (Zakon o rokovima izmirenja novčanih obaveza, čl. 7). Potrošaču se naknada i trošak opomene ne obračunavaju (Zakon o zaštiti potrošača, čl. 26).",\r
"kupoprodajna cijena",\r
"Kupoprodajna cijena odnosno zakupnina nije upisana.",\r
"Kupoprodajna cijena, odnosno zakupnina",\r
"Kurs",\r
"Kurs (prazno = iz liste)",\r
"Kurs (ručno)",\r
"Kurs (za 1 EUR)",\r
"Kurs {0} ({1}).",\r
"Kurs {0} {1} ({2}).",\r
"Kurs {0} za {1} nije preuzet ({2}). Kurs se upisuje ručno: Podešavanja → Inostranstvo i kurs → Kursna lista.",\r
"Kurs {0} za {1} nije u kursnoj listi i nije preuzet: {2}",\r
"Kurs {0} za {1} nije u kursnoj listi. Kurs se preuzima (Podešavanja → Inostranstvo i kurs) ili upisuje ručno.",\r
"Kurs {0} za {1}: {2} ({3}).",\r
"Kurs CBCG",\r
"Kurs je obrisan.",\r
"Kurs je snimljen.",\r
"Kurs mora biti veći od nule (jedinica valute za 1 EUR, npr. 1,09680).",\r
"Kurs mora biti veći od nule (jedinica valute za 1 EUR).",\r
"Kurs mora biti veći od nule.",\r
"Kurs na dan obaveze",\r
"Kurs na dan priliva",\r
"Kurs nije obrisan.",\r
"Kurs nije upisan.",\r
"Kurs za današnji dan nije u kursnoj listi; kopija nosi kurs originala. Kurs se ažurira dugmetom „Preuzmi kurs\\".",\r
"Kurs za ovaj dan nije u kursnoj listi: „Preuzmi kurs\\" ili ručni upis.",\r
"Kursna lista",\r
"Kursna razlika",\r
"Kursna razlika {0} po računu {1} — {2}",\r
"Kursna razlika pri zatvaranju faktura",\r
"KVan",\r
"la",\r
"Lager lista",\r
"LAGER LISTA MATERIJALA I PROIZVODA",\r
"Lice kod obveznika",\r
"Lice koje je obišlo nepokretnost",\r
"Lice koje je primilo naredbu",\r
"Lice kome je novac predat nije upisano.",\r
"Lice od koga je novac primljen nije upisano.",\r
"licenca ne dozvoljava upis",\r
"Lična isprava",\r
"Lična isprava ističe {0}",\r
"Lična isprava je istekla {0}. Potrebna je važeća isprava.",\r
"Lične isprave klijenata koje ističu ili su istekle: {0}",\r
"lični meni korisnika",\r
"lični podaci klijenta se brišu; ostaje zapis sa datumom brisanja",\r
"Lični podaci klijenta su obrisani",\r
"Lični podaci klijenta su obrisani {0} Nov unos nije moguć.",\r
"Lični podaci klijenta su obrisani {0} po isteku roka čuvanja; zapis se ne mijenja.",\r
"Lični podaci klijenta su obrisani; dokumentacija se ne dodaje.",\r
"Lični podaci klijenta su obrisani; unos se ne dodaje.",\r
"Lični podaci kojima je istekao rok čuvanja: {0}",\r
"lični podaci obrisani",\r
"Lični podaci su obrisani (evidencija: {0} unosa).{1}",\r
"Lični podaci su već obrisani {0}",\r
"Lični podaci u evidenciji obuke su obrisani.",\r
"lično",\r
"lično (usmeno na prodajnom mjestu)",\r
"limit (eur)",\r
"limit {0} · raspoloživo {1}",\r
"List nepokretnosti",\r
"Lista indikatora",\r
"Lista indikatora nije sastavljena (kartica Lista indikatora).",\r
"Lista indikatora nije sastavljena.",\r
"Lista indikatora obveznika nije sastavljena",\r
"Lista indikatora obveznika: indikatori iz Pravilnika o listi indikatora (MUP, „Sl. list CG\\" 29/24) koje obveznik primjenjuje i sopstveni indikatori (čl. 83 — lista mora biti u dokumentaciji obveznika). Na listi:",\r
"Lista koja važi tog dana",\r
"Lista objavljena tog dana",\r
"Lista teritorija sa poreskim suverenitetom koju objavljuje Ministarstvo finansija (ZPDPL čl. 29 st. 10) — oznake ISO odvojene zarezom",\r
"Litara po JM",\r
"localStorage jezik",\r
"localStorage knj.podObjekat",\r
"localStorage knj.servis.saljiGreske",\r
"Logo i znak",\r
"Logo i znak firme na dokumentima, Kasi i Menadžeru",\r
"Logo i znak firme: Štampa i izvozi → Logo i znak. Štampač za kalkulacije: Štampa i izvozi → Štampač.",\r
"Lokacija nepokretnosti (mjesto, ulica i broj, katastarska parcela i katastarska opština)",\r
"Lokacija: {0}",\r
"Magacin „{0}\\" već postoji.",\r
"Magacin (izuzetak)",\r
"Magacin gotovih proizvoda",\r
"Magacin gotovih proizvoda nije izabran.",\r
"Magacin ima potvrđene dokumente. Vrsta, objekat i konto zalihe se ne mijenjaju (nalozi su vođeni po njima).",\r
"Magacin je dodat.",\r
"Magacin materijala",\r
"Magacin materijala nije izabran.",\r
"Magacin materijala objekta",\r
"Magacin ne postoji.",\r
"Magacin nije izabran.",\r
"Magacin razduženja nije sa spiska.",\r
"Magacin sastojka ne postoji.",\r
"Magacin trebovanja nije nađen u Knjigovodstvu (Materijal → Magacini).",\r
"Magacin: {0}",\r
"Magacin: {0} · period {1} – {2} · JM {3} · početno stanje {4} / {5} EUR",\r
"Magacin: {0} · popis na dan {1}",\r
"Magacini",\r
"Magacini (materijal, gotovi proizvodi, šank, kuhinja) · prijemnica · trebovanje i izdatnica · povratnica · međumagacinski prenos · popis · kartica i lager lista · sitan inventar · nalozi PRM, TRB, POM",\r
"Magacini materijala, šank i kuhinja",\r
"Magacini materijalnog knjigovodstva po objektu.",\r
"Maloprodaja (EM, konta 134) ili veleprodaja (EV, konta 132); zatvoren objekat ostaje u knjigama.",\r
"maloprodajnu cijenu primaoca",\r
"Manjak",\r
"manjak {0}",\r
"Manjak po popisu {0}",\r
"Manjak: {0}",\r
"Manjkovi materijala i proizvoda",\r
"Marko Marković",\r
"Marža je primijenjena. Prodajne cijene su preračunate. {0}",\r
"Marža skena (pojedinačno)",\r
"Marža za sken koji čeka obradu.",\r
"Marža za skenove iz Menadžera: Razmjena i uređaji → Uređaj. Štampač i automatska štampa kalkulacija: Štampa i izvozi → Štampač.",\r
"materijal",\r
"Materijal — {0} {1}{2}",\r
"Materijal → Magacini",\r
"Materijal i gotovi proizvodi (MSFI za MSP 13.18). Isto podešavanje kao Materijal → Podešavanja i artikli. Mijenja se od {0}. godine, samo dok u njoj nema potvrđenih izlaza.",\r
"Materijal i gotovi proizvodi; isto podešavanje kao Materijal → Podešavanja.",\r
"Materijal iz",\r
"Materijal još nije izdat na nalog.",\r
"Materijal na zalihi",\r
"Materijal po normativu {0} EUR, odstupanje {1} EUR.",\r
"Materijal: broj decimala količina",\r
"Materijal: izlaz iznad stanja (minus)",\r
"Materijal: manjak materijala i proizvoda po popisu",\r
"Materijal: otpis sitnog inventara pri izdavanju na korišćenje (100 %)",\r
"Materijal: prijem i izdavanje",\r
"Materijal: sitan inventar, auto-gume i ambalaža na zalihi (otpis 100 % pri izdavanju)",\r
"Materijal: trošak goriva i energije (trebovanje goriva)",\r
"Materijal: trošak materijala za izradu (trebovanje u proizvodnju, utrošak po normativu)",\r
"Materijal: trošak režijskog materijala (trebovanje za režiju)",\r
"Materijal: višak materijala i proizvoda po popisu",\r
"Materijal: vrednovanje izlaza po godini",\r
"Materijal: zaliha materijala po nabavnoj cijeni (prijemnica duguje, izdavanje potražuje)",\r
"Materijal: zavisni troškovi nabavke iz faktura drugih dobavljača (obračun nabavke, zatvara ga prijemnica)",\r
"Materijalno knjigovodstvo i proizvodnja",\r
"Materijalno knjigovodstvo po magacinima i nabavnoj vrijednosti — odvojeno od robnog (trgovačka knjiga). Potvrđen dokument se knjiži u glavnu knjigu (nalozi PRM, TRB, POM).",\r
"maticni broj",\r
"matični broj / JMB",\r
"Matični broj / JMB",\r
"Matični broj pravnog lica nije upisan (ZSPNFT čl. 117 st. 1 t. 1).",\r
"Matični broj preduzetnika nije upisan (ZSPNFT čl. 117 st. 1 t. 2).",\r
"ME",\r
"ME + PIB (čl. 72c ZPDV); poreske knjige i PR-PDV.",\r
"Međumagacinski prenos",\r
"MEĐUMAGACINSKI PRENOS",\r
"Međumagacinski prenos {0} je napravljen ({1}).",\r
"Menadžer (prijem skenova i popisa)",\r
"Menadžer je izmijenio dokument {0} — dokument u knjigama se ne mijenja; potrebna je provjera.",\r
"Menadžer je poništio dokument {0} — dokument u knjigama ostaje; potrebna je provjera.",\r
"Meni → Prilagodi meni",\r
"Menstrualno odsustvo",\r
"Menstrualno odsustvo (čl. 36a ZOZO, do 2 dana mjesečno)",\r
"Metoda",\r
"Metoda vrednovanja izlaza je snimljena.",\r
"Metoda: ponderisani prosjek ili FIFO (LIFO nije dozvoljen — MSFI za MSP 13.18).",\r
"Mijenja se samo nacrt. Potvrđen dokument se stornira.",\r
"Mijenja se samo otvoren radni nalog.",\r
"Mineralno ulje (po kg)",\r
"Mineralno ulje (po litru)",\r
"Minimalna zaliha artikla",\r
"Mirno vino",\r
"Mjere poznavanja i praćenja poslovanja klijenta",\r
"Mjere, radnje i postupci za umanjenje rizika",\r
"Mjesec {0}/{1} je zaključan. Ispravka se ne poništava.",\r
"Mjesec {0}/{1} je zaključan. Ispravka se upisuje u otvoren mjesec.",\r
"Mjesec {0}/{1} je zaključan. Otpis se upisuje u otvoreni mjesec.",\r
"Mjesec {0}/{1} je zaključan. Status obračuna se ne mijenja.",\r
"Mjesec je spreman za predaju",\r
"Mjesec nije otključan: razlog otključavanja je obavezan.",\r
"Mjesec PDV prijave kojoj pripada faktura sa periodom prometa.",\r
"Mjesec zaključan (knjige predate)",\r
"mjeseca",\r
"Mjesečni (sukcesivni) računi su pojedinačni standardni računi (INVOICE) sa periodom prometa.",\r
"mjesečno",\r
"Mjesta za potpis na računu i predračunu",\r
"MKD",\r
"MMP",\r
"MO",\r
"MSFI za MSP 13.18: FIFO ili ponderisana prosječna cijena; LIFO nije dozvoljen. Metoda važi od godine; promjena je promjena računovodstvene politike (10.8) i moguća je samo za godinu bez potvrđenih izlaza. Važeća za",\r
"MUP 29/24",\r
"N (plaćeno)",\r
"n.Status IN ('nacrt','greska','ceka-odobrenje')",\r
"n.Status IN ({0})",\r
"Na dan praznika rade zaposleni prema rasporedu smjena: {0}.",\r
"Na depozitu po ugovoru {0} je {1} EUR; ne može se predati više od primljenog.",\r
"Na dnu računa i predračuna: „Fakturisao\\" (ovlašćeno lice iz podataka firme) i „Primio\\".",\r
"Na drugim ekranima",\r
"na drugom računaru",\r
"Na fakturama dobavljača upisan je tekući račun fizičkog lica kao račun na koji treba izvršiti uplatu po osnovu fakturisane usluge/robe.",\r
"Na kalkulaciji nema akciznih proizvoda (vrsta akcize na artiklu).",\r
"Na računu:",\r
"na svakih N plaćenih komada K komada gratis (npr. 10 + 1), iskazano kao rabat na stavci",\r
"Na zateznu kamatu se ne obračunava PDV.",\r
"Nabavna cijena je nabavna objekta na dan dokumenta (sa zavisnim troškovima), inače posljednja nabavna iz kalkulacije. Osnovica PDV-a kod rabata ispod nabavne vrijednosti (ZPDV čl. 20 st. 8 t. 1) — pitanje za knjigovođu.",\r
"Nabavna cijena sa posljednje kalkulacije",\r
"Nabavna cijena sa posljednje kalkulacije, datum nivelacije, naziv PDF kalkulacije",\r
"Nabavna sada",\r
"Nabavne cijene su upisane u kalkulaciju.",\r
"Način (račun ili gotovina) nije izabran.",\r
"način identifikacije",\r
"Način identifikacije",\r
"Način identifikacije klijenta nije izabran (ZSPNFT čl. 117 st. 1 t. 4).",\r
"Način identifikacije nije sa spiska.",\r
"Način izvršenja",\r
"Način na koji je kupac dao saglasnost",\r
"Način plaćanja je već upisan.",\r
"Način plaćanja naknade",\r
"Način plaćanja nije sa spiska.",\r
"Način podnošenja",\r
"Način podnošenja prigovora nije izabran.",\r
"Način poslovanja (djelatnosti)",\r
"Način prikaza duga u spisku dobavljača.",\r
"Način pristanka",\r
"Način pristanka klijenta nije izabran.",\r
"Način saglasnosti: pisana izjava, e-pošta ili ugovor.",\r
"nacrt — čeka potvrdu",\r
"NACRT — dokument nije potvrđen",\r
"Nacrt dobavljača ne postoji.",\r
"Nacrt fakture naknade je napravljen (Izdati dokumenti).",\r
"Nacrt fakture naknade se pravi u Izdatim dokumentima; broj računa ulazi u podatak 14 evidencije kad je faktura izdata.",\r
"Nacrt fakture posredničke naknade (PDV 21 % kad je nepokretnost u Crnoj Gori — Zakon o PDV, čl. 17a)",\r
"Nacrt fakture sa stavkama naloga; specifikacija radova je prilog računa",\r
"Nacrt je odbijen.",\r
"Nacrt je spreman za potvrdu.",\r
"Nacrt je već obrađen.",\r
"Nacrt ne postoji.",\r
"Nacrt nema grešku.",\r
"Nacrt nema stavki sa artiklom iz šifarnika.",\r
"Nacrt nije moguće potvrditi: {0}.",\r
"Nacrt nije povrat dobavljaču.",\r
"Nacrt nije u stanju „čeka potvrdu\\" ({0}).",\r
"Nacrt nije u stanju „nacrt\\" ({0}).",\r
"Nacrt nivelacije i za izmjene cijena napravljene u ovom Knjigovodstvu",\r
"Nacrt obračuna je obrisan.",\r
"Nacrt predatnice je snimljen.",\r
"Nacrt trebovanja je snimljen.",\r
"nacrti faktura se prave na ekranu Ugovori",\r
"Nadzorni organ",\r
"najduže pet godina po isteku osnovnog roka (polje „Zadržati do\\")",\r
"Najmanji dug koji se broji (EUR)",\r
"Najmanji iznos duga ne može biti negativan.",\r
"Najviše dana",\r
"Najviše dana kašnjenja",\r
"Naknada bez PDV",\r
"Naknada se fakturiše {0}, {1}, {2}. dana u mjesecu. Na računu se navodi period prometa.",\r
"Naknada troškova naplate (€)",\r
"Naknada troškova naplate (čl. 7)",\r
"Naknada troškova naplate (Zakon o rokovima izmirenja novčanih obaveza čl. 7)",\r
"Naknada troškova naplate iznosi najmanje 40 € (Zakon o rokovima izmirenja novčanih obaveza, čl. 7).",\r
"Naknada troškova naplate se obračunava po zakašnjeloj fakturi, bez opomene (Zakon o rokovima izmirenja novčanih obaveza, „Sl. list CG\\" br. 113/24, čl. 7).",\r
"Naknada za posredovanje",\r
"Naknada za posredovanje — {0}, {1}{2}; ugovor o posredovanju {3} od {4}",\r
"Naknada za posredovanje: {0}; način plaćanja: {1}; rok plaćanja: {2}. Posrednik stiče pravo na naknadu u trenutku zaključenja pravnog posla i ne zahtijeva plaćanje naknade unaprijed (čl. 27 st. 1–2). Ako u roku od devet mjeseci od prestanka ovog ugovora nalogodavac sa trećim licem zaključi pravni posao koji je rezultat radnji posrednika prije prestanka ugovora, posrednik ima pravo na naknadu (čl. 27 st. 6).",\r
"Nalog {0} je fakturisan (faktura {1}) i ne briše se.",\r
"Nalog {0} je fakturisan (faktura {1}); stavke se ne mijenjaju.",\r
"Nalog {0} je fakturisan; mijenja se samo preuzimanje.",\r
"Nalog {0} je već fakturisan (faktura {1}).",\r
"Nalog {0} je zatvoren ({1}); stavke se ne mijenjaju.",\r
"Nalog GK",\r
"Nalog ima ugrađene djelove iz šifarnika, a objekat nije izabran: zaliha se vodi po objektu, pa se objekat upisuje na nalogu.",\r
"Nalog je u radu.",\r
"Nalog je zatvoren: ponuda je odbijena.",\r
"Nalog je završen.",\r
"Nalog nema normativ — materijal se treba ručno (Materijal: prijem i izdavanje → Trebovanje, sa izborom naloga).",\r
"Nalog nema stavki izvršenih radova, djelova i materijala.",\r
"Nalog nema stavki sa iznosom za fakturisanje.",\r
"Nalog nema stavki: pristanak se daje na ponudu sa radovima, djelovima i materijalom.",\r
"nalog PDV postoji",\r
"Nalog troška: potražuje blagajna (2430) za gotovinu, odnosno tekući račun (2410) za karticu.",\r
"Nalogodavac",\r
"Nalogodavac je saglasan da posrednik ugovorom o potposredovanju prenese prava i obaveze iz ovog ugovora na drugog posrednika (čl. 21){0}. Kopija ugovora o potposredovanju se predaje nalogodavcu u roku od tri dana od zaključenja.",\r
"Nalogodavac nije dao saglasnost za potposredovanje.",\r
"Nalogodavac nije u registru klijenata (ZSPNFT). Za pravni posao od {0} EUR potrebne su mjere poznavanja klijenta{1}. Klijent se upisuje u Usklađenost (ZSPNFT) → Klijenti i bira na ugovoru o posredovanju.",\r
"Nalogodavac se obavezuje da obavijesti posrednika o svim okolnostima od značaja za posredovanje, stavi na uvid originalne isprave o pravu na nepokretnosti i upozori na upisane i neupisane terete, omogući razgledanje nepokretnosti, isplati ugovorenu naknadu po zaključenju pravnog posla i obavijesti posrednika o promjenama u roku od tri radna dana (čl. 28).",\r
"Nalogodavac se posebno upozorava na značenje i posljedice klauzule o ekskluzivnom posredovanju (čl. 31 st. 3); upozorenje je u štampi ugovora.",\r
"Namirnice i sastojci jela koji se razdužuju po normativu pri prodaji",\r
"Namjena",\r
"Namjena normativa nije sa spiska.",\r
"Namjena trebovanja nije sa spiska.",\r
"Namjena: {0}",\r
"Naplaćeno u periodu",\r
"Naplata u valuti: negativna kursna razlika",\r
"Naplata u valuti: pozitivna kursna razlika",\r
"Napomena (interna)",\r
"Napomena (obavezna za ručni upis)",\r
"Napomena može imati najviše 200 znakova (polje Note fiskalne poruke).",\r
"Napomena na računu",\r
"Napomene na dokumentima",\r
"Napravi nacrt fakture",\r
"Napravi nacrt fakture (",\r
"Napravi nacrte faktura (",\r
"Napravi pravilo banke od ove stavke (opis ili račun primaoca → vrsta i partner)",\r
"Napraviti fakturu",\r
"Napravljen je nacrt fakture {0}. Specifikacija izvršenih radova je prilog računa.",\r
"Napravljena razduženja",\r
"Napravljene fakture",\r
"Napravljeno dokumenata: {0}.",\r
"Napravljeno nacrta faktura: {0} ({1}).",\r
"Napravljeno nacrta faktura: {0}{1}.",\r
"Naredbe o privremenom obustavljanju transakcije",\r
"Nastanak promjene",\r
"Nastavi",\r
"naziv artikla",\r
"Naziv dobavljača je obavezan.",\r
"Naturalni rabat (N + K)",\r
"Naturalni rabat: N (plaćeno) i K (gratis) moraju biti najmanje 1 (npr. 10 + 1).",\r
"Naziv akcije",\r
"naziv firme",\r
"Naziv grupe kupaca je obavezan.",\r
"Naziv klijenta nije upisan.",\r
"naziv kupca",\r
"Naziv magacina je obavezan.",\r
"Naziv nadzornog organa",\r
"naziv nije upisan",\r
"Naziv objekta isporuke je obavezan.",\r
"Naziv obuke",\r
"Naziv opštine na kojoj se nepokretnost nalazi",\r
"Naziv pravila",\r
"Naziv projekta",\r
"Naziv projekta nije upisan.",\r
"Naziv robe",\r
"Naziv u opisu",\r
"Naziv uređaja i ime korisnika",\r
"Naziv usluge *",\r
"Naziv usluge je obavezan.",\r
"Naziv, odnosno ime i prezime",\r
"Naziv, PIB, adresa, žiro račun, način poslovanja, računi firme, sopstveni uvoz, šifarnik, logo",\r
"nb",\r
"Ne dozvoli izdavanje iznad stanja",\r
"ne odnosi se",\r
"Ne podliježe (seminari, usluge inženjera i arhitekata, posredovanje, baze podataka i druge usluge van čl. 29)",\r
"ne podliježe (ZPDPL čl. 29b t. 4)",\r
"Ne podliježe PDV-u",\r
"ne sada (raspored kasnije)",\r
"Ne ulazi u PR-PDV",\r
"Nedovršena proizvodnja {0}/{1} (stanje {2}, prethodno {3})",\r
"Nedovršena proizvodnja na dan {0}",\r
"Nedovršena proizvodnja: {0}",\r
"Nedovršeno",\r
"Nefakturisani sati",\r
"NEFAKTURISANI SATI PO KUPCU I PROJEKTU",\r
"Nefakturisano",\r
"negativna",\r
"Negativna kursna razlika {0} — {1}",\r
"Negativna kursna razlika po računu {0}",\r
"neispravan komad",\r
"neispravan zahtjev",\r
"neispravna dužina",\r
"Neispravnih uloga:",\r
"Neispunjenih uslova: {0}. Fakture se do tada ne fiskalizuju.",\r
"Neki od izabranih unosa sati ne postoje.",\r
"Nema aktivnih projekata.",\r
"Nema artikala materijalnog knjigovodstva.",\r
"Nema carinskih deklaracija (Poreske knjige → Uvoz i usluge stranih lica).",\r
"Nema deviznih kalkulacija.",\r
"Nema dobavljača iz Menadžera.",\r
"Nema B2B akcija.",\r
"Nema dokumenata iz Menadžera koji čekaju potvrdu.",\r
"Nema dokumenata za izabrane uslove.",\r
"Nema dospjelih perioda za fakturisanje.",\r
"Nema dovoljno na stanju: „{0}\\" — stanje {1}, traži se {2} (magacin na dan {3}).",\r
"Nema evidentiranih klijenata. Klijent se upisuje prije uspostavljanja poslovnog odnosa, odnosno prije transakcije (ZSPNFT čl. 117).",\r
"Nema evidentiranih nepokretnosti ni ugovora o posredovanju.",\r
"Nema evidentiranih obilazaka.",\r
"Nema evidentiranih obuka.",\r
"Nema evidentiranih prigovora.",\r
"Nema evidentiranih projekata.",\r
"Nema evidentiranih radnih naloga.",\r
"Nema evidentiranih ugovora.",\r
"nema fajla",\r
"Nema faktura napravljenih iz evidencije sati.",\r
"Nema faktura napravljenih iz ugovora.",\r
"Nema grupa kupaca (npr. HoReCa, marketi, kiosci, zanatlije).",\r
"nema ih",\r
"Nema isplata nerezidentima u godini.",\r
"Nema izdatih faktura u izabranom periodu.",\r
"Nema izdatog sitnog inventara u periodu.",\r
"Nema kalkulacija istog dobavljača u ±45 dana.",\r
"nema kg po JM",\r
"Nema klijenata kojima teče rok čuvanja (poslovni odnosi traju).",\r
"Nema kupaca sa fakturama u kašnjenju za ovaj nivo opomene.",\r
"nema litara ili % alkohola",\r
"nema litara po JM",\r
"Nema kupaca za izabrani filter.",\r
"Nema magacina.",\r
"Nema nacrta.",\r
"nema naloga obračuna PDV-a za mjesec",\r
"Nema nefakturisanih sati.",\r
"Nema nepokretnosti za izabrani filter.",\r
"Nema neraspoređenih uplata ovog kupca.",\r
"Nema normativa.",\r
"nema obračuna plata za mjesec",\r
"nema obračuna zarada",\r
"Nema obračunatog poreza po odbitku u godini.",\r
"Nema odobrenja izdavanja.",\r
"Nema otvorenih radnih naloga sa izdatim materijalom.",\r
"Nema podataka za izabrani period.",\r
"Nema podešavanja za „",\r
"Nema pogodaka",\r
"Nema poslatih ni snimljenih opomena.",\r
"Nema potvrđenih popisa materijala (Materijal: prijem i izdavanje → Popis materijala).",\r
"Nema pravila. Pravilo se pravi dugmetom „Novo pravilo\\" ili iz stavke u kartici „Transakcije\\" (dugme „pravilo\\").",\r
"Nema prigovora za izabrani filter.",\r
"Nema prijava.",\r
"Nema prijedloga cijena iz Menadžera.",\r
"Nema projekata za izabrani filter.",\r
"Nema prometa u periodu.",\r
"Nema rabata grupa ni količinskih skala.",\r
"Nema radnih naloga za izabrani filter.",\r
"Nema radnih naloga.",\r
"nema radnika",\r
"Nema slobodnog iznosa (uplata ili obračun su već zatvoreni).",\r
"Nema snimljenih obračuna kamate.",\r
"nema transakcija u mjesecu",\r
"Nema ugovora o posredovanju.",\r
"Nema ugovora za izabrani filter.",\r
"Nema ugovornih cijena. Ugovorna cijena je konačna cijena kupca za artikal (rabati se ne dodaju; akcijska cijena važi kad je niža).",\r
"nema ulaznih računa u mjesecu",\r
"Nema unesenih stopa zatezne kamate.",\r
"Nema unosa depozita.",\r
"Nema unosa sati za izabrani period.",\r
"Nema unosa u ovoj evidenciji.",\r
"Nema unosa za izabranu godinu.",\r
"Nema upisanih bonusa dobavljača.",\r
"Nema utroška po normativu u periodu.",\r
"nema uvezenih izvoda",\r
"Nema VP cjenovnika. Bez cjenovnika faktura i otpremnica uzimaju cijenu objekta.",\r
"Nema zaliha na izabrani dan.",\r
"Nenamjensko podizanje novčanih sredstava u strukturiranim iznosima, nakon što su novčana sredstva prenijeta.",\r
"Nenaplaćeni dio obračuna se knjiži kao rashod od otpisa potraživanja na današnji dan",\r
"Nenaplativo potraživanje: otpis ostatka potraživanja (radnja knjigovođe)",\r
"Nepokretnost",\r
"Nepokretnost {0}",\r
"Nepokretnost ima ugovor o posredovanju i ne briše se. Nepokretnost se povlači iz ponude izmjenom statusa.",\r
"Nepokretnost je izmijenjena.",\r
"Nepokretnost je obrisana.",\r
"Nepokretnost je upisana pod oznakom {0}.",\r
"Nepokretnost ne postoji.",\r
"Nepokretnost nije izabrana.",\r
"Nepokretnosti",\r
"Nepokretnosti bez važećeg ugovora:",\r
"Nepokretnosti bez važećeg ugovora: {0}",\r
"Nepoznat izvoz.",\r
"Nepoznat način slanja opomene.",\r
"Nepoznat status radnog naloga.",\r
"nepoznata poruka",\r
"Nepoznata vrsta akciznog proizvoda.",\r
"Nepoznata vrijednost kontrole limita.",\r
"Nepoznata vrijednost podešavanja.",\r
"Nepoznata vrsta artikla.",\r
"Neraspoređene uplate kupca",\r
"Neraspoređeno",\r
"Netržišni",\r
"Neuobičajena",\r
"Neuobičajena profitabilnost klijenta u poređenju sa drugim pravnim licima iz iste privredne grane.",\r
"Neuplaćen porez po odbitku:",\r
"nije akcizni proizvod",\r
"nije dostignut",\r
"Nije izabrana nijedna kalkulacija.",\r
"Nije označeno da li je klijent rezident ili nerezident (ZSPNFT čl. 117 st. 1 {0}).",\r
"nije potvrđen: {0}",\r
"nije povezan",\r
"Nije preneseno",\r
"Nije preuzeto: {0} ({1})",\r
"nije uključeno",\r
"nije uključeno u polja (postavka „samo pregled\\").",\r
"nije unesena za",\r
"Nije unijet.",\r
"Nije upisano: {0}.",\r
"nije uplaćeno",\r
"nije zaključan",\r
"nije zaključen — ugovor o posredovanju istekao {0}",\r
"nije zaključen — ugovor o posredovanju otkazan {0}",\r
"nije zaključen (posredovanje u toku)",\r
"Nijedan unos sati nije izabran.",\r
"Nijedna stavka koja čeka nije izmijenjena.",\r
"Nijedna stavka nema cijenu u valuti.",\r
"Ništa se ne briše: skrivena stavka ostaje u pretrazi (Ctrl+K).",\r
"nit snimanja ne odgovara",\r
"nit snimanja nije vratila bazu",\r
"nit snimanja: {0}",\r
"nit za PDF je otkazala",\r
"Nivelacija {0} — {1}: {2} {3} (veleprodajna bez PDV)",\r
"Nivelacija br. {0} od {1} (izvještaj o popisu{2})",\r
"Nivelacija je obrisana u Knjigovodstvu.",\r
"Nivelacija: razlika u cijeni robe u veleprodaji",\r
"Nivelacija: veleprodajna vrijednost bez PDV ({0} %)",\r
"Nivelacije iz promjene cijene",\r
"Nivo opomene je 1, 2 ili 3.",\r
"nivo rizika",\r
"Nivo rizika",\r
"Nivo rizika nije sa spiska.",\r
"Niža stopa iz ugovora primjenjuje se samo uz potvrdu o rezidentnosti ovjerenu od nadležnog organa druge države (država, broj i datum potvrde).",\r
"Nizak",\r
"NOK",\r
"Normativ",\r
"Normativ – popis",\r
"Normativ — {0}",\r
"NORMATIV — POPIS {0}",\r
"Normativ i dokumenti materijalnog knjigovodstva: količina se zaokružuje na ovaj broj decimala.",\r
"Normativ i dokumenti materijalnog knjigovodstva.",\r
"Normativ je isključen.",\r
"Normativ je korišćen u radnom nalogu. Ne briše se, može se samo isključiti.",\r
"Normativ je obrisan.",\r
"Normativ je snimljen.",\r
"Normativ je uključen.",\r
"Normativ kala, rastura i loma.",\r
"Normativ ne daje nijednu količinu za trebovanje.",\r
"Normativ ne postoji.",\r
"Normativ ne pripada izabranom proizvodu.",\r
"Normativ nema sastojaka.",\r
"Normativ otpisa (osnova i procenat)",\r
"Normativ za količinu",\r
"Normativi",\r
"Normativi i sastavnice (recepture) · razduženje sastojaka po prodaji (kasa, fakture) · utrošak po normativu · poređenje normativ – popis",\r
"Normativi jela i pića (ugostiteljstvo) i sastavnice proizvoda (proizvodnja) u jednoj evidenciji. Prodaja sa kase i fakture razdužuju sastojke iz šanka, kuhinje ili magacina objekta prodaje; odstupanje od popisa pokazuje kalo i rastur.",\r
"Normativi šanka i kuhinje",\r
"Nov artikal materijalnog knjigovodstva",\r
"Nov cjenovnik",\r
"Nov datum važenja mora biti poslije dosadašnjeg.",\r
"Nov dokument dobija ovaj tekst u polju „Napomena\\" (štampa se na dokumentu); na dokumentu se može izmijeniti. Postojeći dokumenti se ne mijenjaju.",\r
"Nov klijent",\r
"Nov normativ",\r
"Nov obilazak",\r
"Nov prigovor",\r
"Nov radni nalog",\r
"Nov ugovor o posredovanju",\r
"Nov unos",\r
"Nov unos depozita",\r
"Nov unos: {0}",\r
"Nova nepokretnost",\r
"Nova sa PDV",\r
"nova uplata (unosi se sada)",\r
"Nova usluga",\r
"Nova VP cijena bez PDV",\r
"Novac nalogodavaca (kapara, cijena) na depozitnom računu posrednika nije prihod ni novac firme. Saldo ukupno:",\r
"Novac nalogodavca primljen na depozit",\r
"Novac sa depozita predat",\r
"Novi datum važenja ugovora",\r
"Novi ili budući klijent je poznat kao lice za koje postoje podaci da je uključen u vršenje nelegalnih aktivnosti ili je lice poznato po kriminalnim aktivnostima.",\r
"Novi predlog: {0} ({1}).",\r
"Novi projekat",\r
"Novi ugovor",\r
"Novih",\r
"Novo pravilo banke",\r
"npr. -3",\r
"npr. 10,65",\r
"npr. 2,65",\r
"npr. dobavljač je robu zamijenio",\r
"npr. Izrada veb prodavnice",\r
"npr. Kancelarija Centar",\r
"npr. kurs sa liste CBCG, odštampana lista",\r
"npr. Objekat 1_00015, 2026061400002, FA-2026-0004, F8471C7C…",\r
"npr. Naknada banke",\r
"npr. naknada za vodjenje racuna",\r
"npr. Odluka CBCG, „Sl. list CG\\" 01/27",\r
"npr. održavanje informacionog sistema",\r
"npr. P 123/26",\r
"npr. punjač, torba",\r
"npr. račun za struju unesen kao roba",\r
"npr. reklamacije u roku od 8 dana, uslovi isporuke",\r
"npr. roba se vraća neoštećena u originalnom pakovanju",\r
"npr. rok važenja ponude, uslovi plaćanja",\r
"npr. sudski spor, prekoračen dogovor",\r
"npr. Ugovor sa Njemačkom, čl. 12",\r
"npr. već unijeto ručno",\r
"npr. veleprodaja — marketi",\r
"npr. Veš mašina Gorenje W2",\r
"Numeracija evidencije: nije nađen slobodan redni broj.",\r
"Numeracija ugovora: nije nađen slobodan broj.",\r
"Numerisana knjiga za godinu (sve strane numerisane)",\r
"Numerisana knjiga: sve strane numerisane, broj upisa u Registar posrednika, mjesto za potpis",\r
"O navedenoj Odluci su upoznati svi zaposleni kojima će zarada kao i porezi i doprinosi na zaradu biti obračunati tj. uvećani za {0} % po ugovoru o radu za rad {1} ({2}).",\r
"Obavezan partner na kontima sa analitikom",\r
"Obavezan partner na kontima sa analitikom (kupci, dobavljači, radnici) u ručnom nalogu",\r
"Obaveze → Pošta",\r
"Obaveze za porez po odbitku — nerezidenti",\r
"Obavezna analitika partnera, vrednovanje izlaza, dugme Proknjiži, provjera šema",\r
"Obilasci",\r
"OBILASCI NEPOKRETNOSTI",\r
"Obilazak je obrisan.",\r
"Obilazak je upisan.",\r
"Obilazak ne postoji.",\r
"Obilazak nepokretnosti",\r
"Obim prava",\r
"Objava nove verzije nema potpis izdavača. Ažuriranje nije preuzeto.",\r
"Objava nove verzije nije prošla provjeru potpisa izdavača. Ažuriranje nije preuzeto.",\r
"Objavljena verzija {0} je starija od već objavljene verzije {1}. Ažuriranje nije preuzeto.",\r
"Objekat „{0}\\" (oznaka {1}) ne postoji u Knjigovodstvu.",\r
"Objekat „{0}\\" nije povezan sa Knjigovodstvom (nema oznake objekta).",\r
"Objekat (neobavezno)",\r
"Objekat isporuke je dodat.",\r
"Objekat isporuke je uklonjen.",\r
"Objekat isporuke kupca",\r
"Objekat isporuke ne postoji.",\r
"Objekat isporuke pripada drugom kupcu.",\r
"Objekat je poslovni prostor firme: kancelarija, servis, salon.",\r
"Objekat koji ovaj računar nudi u kalkulaciji, pazaru, trgovačkoj knjizi, nivelaciji, otpremnici, reversu i novoj fakturi.",\r
"Objekat koji ovaj računar nudi u novim dokumentima",\r
"Objekat koji ovaj računar nudi u novoj kalkulaciji, pazaru, trgovačkoj knjizi, nivelaciji, otpremnici, reversu, popisu i novoj fakturi. Važi samo za ovaj računar (npr. računar u objektu); drugi računari firme biraju svoj.",\r
"Objekat nije obavezan za uslužnu firmu. Upisuje se kad firma ima poslovni prostor sa kasom (fiskalni račun) ili vodi evidenciju po objektu.",\r
"Objekat prodaje",\r
"Objekat veleprodaje: cijena se unosi bez PDV-a, a prenos ide u evidenciju EV po vrijednosti bez PDV-a (konta 1320 i 1329).",\r
"Objekat veleprodaje: cijene se unose bez PDV-a. Iznos nivelacije je razlika veleprodajne vrijednosti bez PDV-a (evidencija EV, konta 1320 i 1329).",\r
"Objekat veleprodaje: iznos je razlika veleprodajne vrijednosti bez PDV-a (količina × razlika cijene sa PDV ÷ (1 + stopa)), kao zaduženje u evidenciji EV.",\r
"Objekti (maloprodaja, veleprodaja), podrazumijevani objekat, magacini materijala",\r
"Objekti (prazno = svi)",\r
"Objekti isporuke",\r
"Objekti veleprodaje (evidencija EV, konta 132), otpremnice, revers, prenos između objekata",\r
"Objekti: dodavanje, vrsta trgovine, aktivan",\r
"Objekti firme (maloprodaja, veleprodaja), aktivni i zatvoreni",\r
"Objekti i magacini",\r
"Objekti trgovine (maloprodaja, veleprodaja) vode se u Podešavanja → Objekti. Ovdje su magacini materijalnog knjigovodstva:",\r
"Oblast*",\r
"obračun {0}",\r
"Obračun {0} — uplate",\r
"Obračun {0} je izdat.",\r
"Obračun {0} je otpisan.",\r
"Obračun {0} je storniran.",\r
"Obračun {0} nije izdat. Uplata se veže samo za izdat obračun.",\r
"Obračun do dana",\r
"Obračun je plaćen u cjelini. Otpis nije potreban.",\r
"Obračun kamate",\r
"Obračun kamate {0} — {1}",\r
"Obračun kamate je snimljen kao nacrt.",\r
"Obračun nabavke materijala (zavisni troškovi)",\r
"Obračun ne postoji.",\r
"Obračun poreza po odbitku je obrisan.",\r
"Obračun poreza po odbitku je snimljen. {0}",\r
"Obračun poreza po odbitku ne postoji.",\r
"Obračun srazmjerno za {0} dana perioda.",\r
"Obračun u statusu „{0}\\" ne može preći u status „{1}\\".",\r
"Obračun zatezne kamate",\r
"Obračun zatezne kamate {0} — {1}",\r
"Obračun zatezne kamate: naknada troškova naplate (B2B, 40 €)",\r
"Obračun zatezne kamate: potraživanje od kupca za kamatu i naknadu (po kupcu)",\r
"Obračun zatezne kamate: prihod od kamata",\r
"Obračunat porez",\r
"Obrada se nastavlja, u redu: {0}.",\r
"Obrađeno izmjena cijena: {0} stavki nivelacije.",\r
"Obradi izmjene cijena sada",\r
"Obrazac: {0}",\r
"Obrazloženje",\r
"obračun nije zaključen",\r
"Obračun PDV-a proknjižen u glavnoj knjizi",\r
"Obračun plata i IOPPD",\r
"Obračun plata zaključen (IOPPD)",\r
"Obrazloženje: zašto podaci nisu dostavljeni prije izvršenja",\r
"Obrisano",\r
"Obrisati bonus?",\r
"Obrisati cjenovnik {0} sa svim cijenama? Kupci i grupe ostaju bez cjenovnika.",\r
"Obrisati grupu „{0}\\"? Kupci ostaju bez grupe, rabati grupe se brišu.",\r
"Obrisati ime i radno mjesto zaposlenog u evidenciji obuke „{0}\\"? Brisanje je trajno.",\r
"Obrisati kurs {0} za {1}?",\r
"Obrisati lične podatke klijenta {0}, stvarne vlasnike, spisak dokumentacije i lične podatke u evidencijama? Brisanje je trajno.",\r
"Obrisati nacrt obračuna {0}?",\r
"Obrisati nepokretnost {0}? Brisanje je trajno.",\r
"Obrisati normativ? Već napravljeni dokumenti utroška ostaju.",\r
"Obrisati obilazak {0} ({1})? Brisanje je trajno.",\r
"Obrisati obračun poreza po odbitku?",\r
"Obrisati opomenu {0}?",\r
"Obrisati podatke o utuženju?",\r
"Obrisati pravilo „{0}\\"? Stavke koje je pravilo ranije razvrstalo ostaju kakve jesu.",\r
"Obrisati prigovor {0}/{1}? Brisanje je trajno.",\r
"Obrisati projekat {0}?",\r
"Obrisati račun {0} ({1}, {2} EUR)? Dug dobavljaču se umanjuje za taj iznos. Brisanje je trajno.",\r
"Obrisati radni nalog {0}? Brisanje je trajno.",\r
"Obrisati stopu za {0}? Obračun kamate za to polugodište neće biti moguć dok se stopa ponovo ne unese.",\r
"Obrisati stopu?",\r
"Obrisati ugovor {0} sa obilascima i depozitom? Brisanje je trajno.",\r
"Obrisati ugovor {0}?",\r
"Obrisati unos {0} ({1} h, {2})?",\r
"Obrisati unos depozita {0} EUR ({1}, {2})? Brisanje je trajno.",\r
"Obrisi",\r
"obriši",\r
"Obriši lične podatke",\r
"Obriši račun",\r
"obrok osoblja",\r
"Obuka",\r
"Očekivana akciza",\r
"Očekivana akciza i carina kalkulacije",\r
"Očekivani bonus",\r
"od {0} h budžeta",\r
"od datuma",\r
"Od godine",\r
"Od koga je primljeno",\r
"Od količine",\r
"Od popisa",\r
"Od prestanka odnosa teče rok čuvanja od pet godina (ZSPNFT čl. 127 st. 1)",\r
"Od toga poslije roka",\r
"Odbij prvi nacrt",\r
"Odbija se ponuda ili povećanje cijene (sada: {0}).",\r
"Odbija se samo dokument koji nije u knjigama.",\r
"Odbijanje klijenta da da podatke koji se u praksi uobičajeno prikupljaju (lični podaci, adresa, zanimanje) i/ili postoje nedosljednosti u priloženoj dokumentaciji (datumi, potpisi i drugi podaci).",\r
"Odbijanje uspostavljanja odnosa ili transakcije",\r
"odbijena.",\r
"Odbiti dokument iz Menadžera? U knjige ne ulazi ništa.",\r
"Odgovor",\r
"odgovor do {0}",\r
"Odgovor trgovca",\r
"odgovoreno {0}{1}",\r
"Odgovorno lice na izvozima",\r
"Odluka CBCG, „Sl. list CG\\" 01/24",\r
"Odluka CBCG, „Sl. list CG\\" 01/25",\r
"Odluka CBCG, „Sl. list CG\\" 05/26",\r
"Odluka CBCG, „Sl. list CG\\" 65/24",\r
"Odluka CBCG, „Sl. list CG\\" 68/25",\r
"Odluka CBCG, „Sl. list CG\\" 95/26",\r
"Odluka se javno ističe na ulazu objekta, a za potrebe inspekcijskih službi.",\r
"Odnos od",\r
"odnos prestao",\r
"Odnos prestao",\r
"Odnos uspostavljen",\r
"Odobrenja izdavanja",\r
"Odobrenje izdavanja",\r
"Odobri i izdaj",\r
"Određen od",\r
"Odstupanje",\r
"Odstupanje %",\r
"Oglas mora sadržati {0} nepokretnosti (Zakon o posredovanju, čl. 25 st. 1). Upisati {1} na nepokretnosti.",\r
"Oglas sadrži naziv posrednika i broj upisa u Registar posrednika (Zakon o posredovanju, čl. 25 st. 1). Broj se upisuje u kartici Podaci posrednika.",\r
"oglašavanje nije dozvoljeno",\r
"OK-{0}-{1}",\r
"Okruženje",\r
"Onda upiši",\r
"OP-{0}-{1}",\r
"OP-{0}-%",\r
"Opis (zaduženo lice / mjesto, svrha)",\r
"Opis greške bez ličnih podataka.",\r
"Opis indikatora nije upisan.",\r
"Opis kvara, odnosno zahtjev klijenta",\r
"Opis kvara, odnosno zahtjeva klijenta nije upisan.",\r
"Opis prigovora",\r
"Opis prigovora nije upisan.",\r
"Opis rada",\r
"Opis rada, dio ili materijal",\r
"Opis sadrži (više uslova odvojiti znakom „;\\")",\r
"opis sadrži „{0}\\"",\r
"Opis zahtjeva",\r
"Opis zahtjeva klijenta nije upisan.",\r
"Opomena",\r
"OPOMENA",\r
"Opomena je obrisana.",\r
"Opomena je predata poštom ili lično",\r
"Opomena mora imati kupca.",\r
"Opomena ne postoji.",\r
"Opomena pred utuženje",\r
"OPOMENA PRED UTUŽENJE",\r
"Opomena se ne naplaćuje. Dani kašnjenja za predlog se podešavaju u Podešavanja → Zatezna kamata i opomene.",\r
"Opomene",\r
"Oprema",\r
"Oprema predata uz uređaj",\r
"Opšta i firma",\r
"Opšti indikatori",\r
"Opšti uslovi poslovanja posrednika su sastavni dio ovog ugovora (čl. 23). Nalogodavac nije dužan da pristupi pregovorima niti da zaključi pravni posao sa licem koje je posrednik pronašao (čl. 29).",\r
"Opšti uslovi poslovanja posrednika su sastavni dio ovog ugovora; nalogodavac je posebno upozoren na njihovu sadržinu i obaveznost (čl. 23).",\r
"opština {0}",\r
"Opština na kojoj se nepokretnost nalazi nije izabrana.",\r
"Opština sjedišta: šifra u pozivu na broj za poreze i doprinose.",\r
"Organizator",\r
"Osigurana suma po jednom slučaju je manja od 20.000 € (Zakon o posredovanju, čl. 8).",\r
"Osigurana suma za sve zahtjeve u godini je manja od 60.000 € (Zakon o posredovanju, čl. 8).",\r
"Osiguranje od profesionalne odgovornosti",\r
"Osiguranje od profesionalne odgovornosti posrednika ističe",\r
"Oslobođeni promet",\r
"Osnivač",\r
"Osnov „Promet van Crne Gore\\" (čl. 17) je izabran za kupca iz Crne Gore. Potrebna je provjera mjesta prometa.",\r
"Osnov (kapara, dio cijene, zakupnina…)",\r
"Osnov čl. 17 za fizičko lice: mjesto prometa usluge fizičkom licu je po pravilu u Crnoj Gori (čl. 17 st. 5).",\r
"Osnov čl. 17, kurs CBCG, tekst prenosa poreske obaveze.",\r
"Osnov odluke za rad u dane praznika.",\r
"Osnov oslobođenja za kase (stopa 0 %)",\r
"osnov PEP",\r
"Osnov sticanja",\r
"Osnov za 0 % PDV",\r
"Osnov za 0 % PDV nije poznat.",\r
"Osnov za stavke sa 0 % PDV (piše se na fakturi)",\r
"Osnova datuma za KPR i PDV (od mjeseca prelaza).",\r
"osoba za kontakt",\r
"ostaje u evidenciji; storno se upisuje kao nov unos sa razlogom.",\r
"Ostala nepjenušava fermentisana pića",\r
"Ostala pjenušava fermentisana pića",\r
"Ostali duvanski proizvodi",\r
"Ostali obveznici iz t. 13 (forfeting, izgradnja objekata, platni instrumenti — al. 1, 6, 7)",\r
"oštećeno / pokvareno",\r
"Ostvareno",\r
"Otkaz se upisuje u evidenciju o posredovanju; upis je trajan. Od dana otkaza teče rok od devet mjeseci za pravo na naknadu (čl. 27 st. 6). Otkazan ugovor se ne produžava.",\r
"Otkaz ugovora",\r
"Otkaz ugovora je upisan.",\r
"Otkaz ugovora o posredovanju",\r
"otkazan u Menadžeru",\r
"Otkazni rok (dana)",\r
"Otkazni rok (dana) nije ispravan.",\r
"otkazni rok {0} dana, {1} {2}",\r
"Otkazni rok je {0} dana.",\r
"Otključavanja",\r
"Otključavanja (razlog)",\r
"otpad pri pripremi",\r
"Otpis iz Menadžera {0}{1}{2}",\r
"Otpis nenaplaćene kamate i naknade {0}",\r
"Otpis obračuna kamate {0} — {1}",\r
"otpisan {0}",\r
"Otpisati nenaplaćeni dio obračuna {0} ({1} EUR) na današnji dan?",\r
"Otpiši",\r
"Otpremnica i revers: kolona „U objektu\\" pokazuje stanje na dan dokumenta; ovdje se bira šta se dešava pri izdavanju kad je količina veća od stanja.",\r
"Otpremnica sadrži samo artikle i količine (bez cijena, PDV-a i vrijednosti isporuke) — npr. za vozača ili magacin.",\r
"Otpremnica samo sa količinama (bez cijena i iznosa).",\r
"Otpremnica, revers, prenos, otpis, nivelacija, početno stanje i apoteka: upisana količina se zaokružuje na ovaj broj decimala.",\r
"otpremnice bez računa {0}",\r
"Otpremnice bez računa sa PDV obavezom do {0} (osmi dan od isporuke, čl. 18 st. 3 Zakona o PDV): {1}",\r
"Otvoren",\r
"otvorena firma",\r
"Otvoreno u kašnjenju",\r
"Ova podešavanja se mijenjaju na ekranu na kom se koriste.",\r
"ovaj računar",\r
"Ovaj računar nije glavni: izmjena marže ostaje samo na njemu i ne prenosi se razmjenom (prepisaće je sljedeći snimak glavnog računara). Marže se mijenjaju na glavnom računaru.",\r
"ovaj uređaj",\r
"ove stavke",\r
"Ovi računi ulaze u dug dobavljaču, a nisu u knjizi primljenih računa, PDV prijavi ni trgovačkoj knjizi (kalkulacija je obrisana, račun je ostao). Potrebna je odluka: ponovni unos kalkulacije ili brisanje računa.",\r
"Ovlašćeno lice i obuke",\r
"Ovlašćeno lice i zamjenik",\r
"Ovlašćeno lice i zamjenik nisu određeni",\r
"Ovlašćeno lice i zamjenik su snimljeni.",\r
"Ovlašćeno lice nije upisano (ZSPNFT čl. 14).",\r
"Ovlašćeno lice, zamjenik, stručno osposobljavanje zaposlenih",\r
"ovu stavku",\r
"Oznaka {0} već postoji.",\r
"Oznaka cjenovnika je najviše 20 znakova.",\r
"Oznaka cjenovnika je obavezna (npr. A, B, C).",\r
"Oznaka države ISO (npr. DE, USA, IRL)",\r
"Oznaka ISO: ME, RS, DE …",\r
"Oznaka ugovora. Obračun i IOPPD šifra su isti; normirani troškovi autorskog ugovora se provjeravaju sa knjigovođom (ZPDFL čl. 20 st. 2).",\r
"Paket „{0}\\" nije uključen za firmu. Postojeće evidencije su dostupne za pregled i izvoz (O programu → Izvoz posebnih evidencija); nov unos nije moguć.",\r
"Paket je uključen.",\r
"Paket nije uključen: evidencije su dostupne samo za pregled i izvoz.",\r
"Panel „Knjiženje\\" na izlaznoj fakturi, avansnom računu, knjižnom odobrenju i dokumentu materijala: dugme „Proknjiži\\" pravi nalog odmah, uz mjesečno knjiženje.",\r
"Parcela",\r
"Partner nije prepoznat i bira se ručno.",\r
"paušal",\r
"Pazara",\r
"Pazara ±",\r
"PDF evidencije je napravljen: {0}",\r
"PDF kalkulacije se snima pod brojem kalkulacije (npr. Kalkulacija_Objekat_00001_…) umjesto internog broja zapisa. Obrazac kalkulacije se ne mijenja.",\r
"PDF kalkulacije se zove po broju kalkulacije (Objekat_00001) umjesto po internom broju.",\r
"PDF knjige je napravljen: {0}",\r
"PDF ugovora je napravljen: {0}",\r
"PDO",\r
"PDV {0} % {1} (osnovica {2})",\r
"PDV {0} % −{1}",\r
"pdv br",\r
"pdv br.",\r
"pdv broj",\r
"PDV kontrole (pazari po stopama, stope ulaza)",\r
"PDV mjesec {0}/{1} je zaključan.",\r
"PDV obaveza",\r
"PDV obaveza po fakturi iz ugovora nastaje {0} (posljednji dan perioda prometa) i pripada zaključanom mjesecu {1}. Izdavanje je moguće nakon otključavanja tog mjeseca.",\r
"PDV otpremnice bez računa poslije 8 dana",\r
"PDV pravila ugostiteljskog objekta; saglasnost za zajednički katalog barkodova.",\r
"PDV prijava (PR-PDV)",\r
"PDV stopa mora biti od 0 do 100.",\r
"PDV stope i pravila artikala",\r
"PDV: {0}",\r
"PDVBroj",\r
"Pep",\r
"PEP",\r
"Period {0} je već fakturisan.",\r
"period {0}–{1} ugovora {2} je fakturisan fakturom {3}",\r
"Period bonusa nije ispravan (od – do).",\r
"Period akcije (od–do) je obavezan.",\r
"Period nije u planu fakturisanja ugovora.",\r
"Period prometa fakture iz ugovora određuje ugovor i ne mijenja se. Faktura za drugi period se pravi na ekranu Ugovori.",\r
"Period prometa je oznaka fakturisanog perioda ugovora i ne mijenja se na fakturi.",\r
"Periodi od",\r
"Periodi ugovora",\r
"periodično fakturisanje",\r
"pet godina od prestanka poslovnog odnosa, odnosno od izvršene povremene transakcije ili odbijanja",\r
"PIB „{0}\\" nije broj",\r
"pib / jmbg",\r
"PIB firme",\r
"PIB firme: fiskalizacija, obrasci, poziv na broj.",\r
"pib pdv",\r
"PIB u opisu",\r
"PIB: {0}{1}",\r
"PIN nije ispravan.",\r
"PIN za osjetljive radnje, kopija van računara, tehničke greške",\r
"PIN zaštite",\r
"PIN, kopija van računara, tehničke greške, dijelovi programa",\r
"pisana izjava",\r
"pisani pristanak e-poštom ili porukom",\r
"pisani pristanak predat lično",\r
"pisano (pošta ili predat lično)",\r
"Pivo",\r
"Pjenušavo vino",\r
"pl.NacinPlacanja",\r
"Plaćanje obaveza klijent učestalo vrši putem obveznica.",\r
"Placeno",\r
"Plaćeno gotovinom.",\r
"Plaćeno karticom.",\r
"Plan",\r
"Plan fakturisanja",\r
"Planirana količina",\r
"Planirana količina mora biti veća od nule.",\r
"Plate",\r
"Plate i kadrovi",\r
"Plate radnika: obračun mjeseca i IOPPD",\r
"plaćanja nije proknjiženo automatski: račun primaoca nije među poznatim računima dobavljača —",\r
"Plaćanje {0} EUR je veće od otvorenog duga prema dobavljaču ({1} EUR); razlika {2} EUR ostaje kao pretplata.",\r
"PLN",\r
"Po isteku roka",\r
"po isteku roka čuvanja (ZSPNFT čl. 127 st. 5). Zapis se ne mijenja.",\r
"Po isteku se ugovor produžava za isti period; fakturisanje se nastavlja",\r
"Po klijentu",\r
"Po normativu",\r
"Po normativu:",\r
"Po periodu sa PDV",\r
"Po periodu sa PDV:",\r
"Po projektu",\r
"po projektu i satnici",\r
"Po ugovoru",\r
"Po ugovoru {0}{1}: {2}.{3}",\r
"Po ugovoru su napravljene fakture. Brisanje nije moguće; ugovor se može označiti kao raskinut.",\r
"po unosu sati",\r
"Po usluzi",\r
"po ustaljenom radnom vremenu",\r
"Početak",\r
"Početak djelatnosti",\r
"Početni spisak: države za koje FATF poziva na mjere; dopunjuje se po spisku koji objavljuje FOJ",\r
"Počni rad",\r
"Podaci artikla su snimljeni.",\r
"Podaci artikla za uvoz",\r
"Pod",\r
"Podaci dostavljeni FOJ-u",\r
"Podaci firme, način poslovanja, računi firme, uvoz, šifarnik",\r
"Podaci firme, objekti, knjiženje, robno, štampa, fiskalizacija, rezervna kopija i zaštita · firma:",\r
"Podaci i evidencije po ZSPNFT se čuvaju pet godina od prestanka poslovnog odnosa, odnosno od izvršene transakcije (čl. 127).",\r
"Podaci iz lista nepokretnosti (stvarno pravo, osnov sticanja, zabilježbe, starost objekta)",\r
"Podaci klijenta su izmijenjeni.",\r
"Podaci kupca su snimljeni.",\r
"Podaci o klijentu i transakciji (ZSPNFT)",\r
"Podaci o klijentu, transakcijama, dokumentacija i izvještaji",\r
"Podaci o obuci se čuvaju četiri godine (ZSPNFT čl. 127 st. 4); brisanje je moguće od {0}",\r
"Podaci o transakciji nisu upisani (ZSPNFT čl. 117 st. 1 t. 7).",\r
"Podaci o transakciji se dostavljaju FOJ-u do {0} (ZSPNFT čl. 66).",\r
"Podaci o važećim verzijama nisu prošli provjeru potpisa izdavača. Ažuriranje nije preuzeto.",\r
"Podaci o važećim verzijama su istekli, pa se ažuriranja trenutno ne mogu provjeriti. Provjera se ponavlja sama.",\r
"Podaci posrednika",\r
"Podaci posrednika su snimljeni.",\r
"Podaci se čuvaju pet godina (ZSPNFT čl. 127 st. 1{0}); brisanje je moguće od {1}",\r
"Podaci se dostavljaju elektronski, kroz aplikaciju finansijsko-obavještajne jedinice, uz kvalifikovani elektronski potpis (ZSPNFT čl. 66 st. 13). Pregled služi za unos i ostaje u dokumentaciji obveznika. Evidencija: {0} ({1}).",\r
"Podaci se dostavljaju FOJ-u do {0} ({1}).",\r
"Podaci se dostavljaju FOJ-u prije izvršenja transakcije, uz rok u kome transakcija treba da se izvrši. Kad to nije moguće — najkasnije sljedećeg radnog dana od izvršenja, uz obrazloženje.",\r
"Podaci su već obrisani.",\r
"Podešavanja → {0}{1}",\r
"Podešavanja → Firma: upisati PIB i označiti da li je firma u sistemu PDV-a.",\r
"Podešavanja → Firma: upisati žiro račun. Štampa se na fakturi i šalje u fiskalnoj poruci računa koji se plaća virmanom.",\r
"Podešavanja i artikli",\r
"Podešavanja izvoza su snimljena.",\r
"Podešavanja knjiženja",\r
"Podešavanja knjiženja, kontni plan, inostranstvo i kurs, zatezna kamata, zaključavanje perioda",\r
"Podešavanja poreza po odbitku su snimljena.",\r
"Podešavanja su snimljena.",\r
"Podešavanje",\r
"Podešavanje je snimljeno.",\r
"Podešavanje kontrole",\r
"Podrazumijevana marža za skenove iz Menadžera",\r
"Podrazumijevana nabavna cijena sa posljednje kalkulacije",\r
"Podrazumijevana napomena predračuna",\r
"Podrazumijevana napomena računa",\r
"Podrazumijevana napomena reversa",\r
"Podrazumijevana satnica za nove unose sati, bez PDV-a",\r
"Podrazumijevane napomene",\r
"Podrazumijevane napomene predračuna, računa i reversa",\r
"Podrazumijevane napomene, radni nalozi, porez po odbitku",\r
"podrazumijevani (kupci bez cjenovnika)",\r
"Podrazumijevani objekat",\r
"Podrazumijevani objekat nije izabran: nudi se posljednji izabrani objekat.",\r
"Podrazumijevani objekat ovog računara",\r
"Podrazumijevani objekat: {0}.",\r
"Podrazumijevano upozorenje prije izdavanja; važi strožija od ove i opšte postavke.",\r
"Podsjetnik za nepreuzet uređaj (dana)",\r
"Pogodak {0} od {1}",\r
"Pojedinačan unos",\r
"Pojedinačno knjiženje fakture, avansa, odobrenja i dokumenta materijala uz mjesečno.",\r
"Pokušaj transakcije",\r
"polisa {0}",\r
"Polisa važi do",\r
"Politički eksponirano lice",\r
"Politički eksponirano lice: nivo rizika nije „visok\\" (produbljene mjere, ZSPNFT čl. 13).",\r
"Politički eksponirano lice: osnov je obavezan",\r
"Polja",\r
"Polje PR-PDV",\r
"Polje PR-PDV: ne ulazi, 13 ili 14.",\r
"poljoprivredno zemljište",\r
"Polugodište",\r
"POM",\r
"Ponderisani prosjek (pokretni)",\r
"poništen u Menadžeru",\r
"poništen unos (greška u evidenciji)",\r
"Ponisti",\r
"poništi",\r
"Poništi ispravku",\r
"Poništiti ispravku PDV-a (npr. potraživanje je naplaćeno)?",\r
"Poništiti knjiženje i ponovo prepoznati stavku? Plaćanje dobavljaču se briše, a transakcija se vraća na „čeka\\" sa novim predlogom partnera.",\r
"Poništiti vezu? Brišu se i zavisni troškovi carine i akcize te kalkulacije.",\r
"Ponovni unos: ponovno skeniranje QR koda računa (račun se veže za novu kalkulaciju). Brisanje: dugme „Obriši račun\\", na glavnom računaru; kalkulacije i knjige se ne mijenjaju.",\r
"Ponuda ima stavke sa stopom PDV-a za koju se avansni račun ne izdaje (avans: 21, 15 ili 7 %). Avans se unosi na ekranu Avansi i knjižna odobrenja.",\r
"ponuda izdata",\r
"Ponuda je {0} {1} i označiti ponudu kao prihvaćenu?",\r
"Ponuda je izdata: {0} €{1}",\r
"Ponuda je stornirana.",\r
"Ponuda nema kupca. Avansni račun se izdaje kupcu.",\r
"Ponuda nema stavki: upisati radove, djelove i materijal sa cijenama.",\r
"Ponuda prihvaćena {0}{1}.",\r
"Ponuda se izdaje za primljen nalog (sada: {0}). Za dodatne radove poslije pristanka upisuje se nov pristanak.",\r
"Ponuda se izdaje za primljen nalog ili za nalog koji čeka pristanak na povećanje cijene (sada: {0}). Za dodatne radove poslije pristanka upisuje se nov pristanak.",\r
"Popis materijala",\r
"Popis materijala (višak / manjak)",\r
"Popisana količina za „{0}\\" nije ispravna.",\r
"POPISNA LISTA MATERIJALA",\r
"Popuni",\r
"Popuni iz cjenovnika",\r
"popust %",\r
"Poreske knjige → podešavanje datuma",\r
"Poreske knjige → Porez po odbitku",\r
"Poreske knjige: kontrolna lista zatvaranja, zaključavanje, izmjene poslije zaključenja",\r
"Poreske knjige: PDV prijava za mjesec",\r
"poreski broj",\r
"PORESKI OBVEZNIK: {0}",\r
"Porez po odbitku",\r
"POREZ PO ODBITKU — ISPLATE NEREZIDENTIMA",\r
"Porez po odbitku — izmjena obračuna",\r
"Porez po odbitku — nerezident",\r
"Porez po odbitku — nerezidenti",\r
"Porez po odbitku {0} % — {1} ({2})",\r
"Porez po odbitku {0} EUR ({1} % na bruto {2} EUR); isplata primaocu {3} EUR. Osnov: {4}.",\r
"Porez po odbitku iz ove evidencije se obračunava na isplate nerezidentima (država van Crne Gore).",\r
"Porez po odbitku na isplate nerezidentima (ZPDPL čl. 29): obaveza za porez; dobavljač se umanjuje za porez",\r
"Porez po odbitku na isplatu nerezidentnom pravnom licu (ZPDPL čl. 29); obračun na bruto iznos, datum = datum računa (mijenja se u obračunu)",\r
"Porez po odbitku na isplatu nerezidentu (ZPDPL čl. 29)",\r
"Porez po odbitku nije obračunat: {0}",\r
"Porez po odbitku se obračunava i plaća u trenutku isplate. Izvještaj o uplaćenom porezu po odbitku (IOPPO) za",\r
"Porez po odbitku se obračunava na bruto iznos isplate i plaća u trenutku isplate. Primalac dobija iznos umanjen za porez.",\r
"Porez po odbitku: stope i države",\r
"Portal {0} → Moji podaci → Operateri: upisati lice koje izdaje fakture i prepisati njegov kod.",\r
"Portal {0} → Moji podaci → Poslovne jedinice → jedinica → ENU → Novi unos: tip ENU, softver {1} {2}, održavalac {3}, važi od današnjeg dana. Dobijeni kod upisati u polje „Kod ENU (za fakture)\\".",\r
"Portal {0} → Moji podaci → Poslovne jedinice: prepisati kod jedinice iz koje se izdaju fakture (najčešće sjedište).",\r
"Pošalji stanje Menadžeru",\r
"Posao je zaključen poslije isteka devet mjeseci od prestanka ugovora ({0}); pravo na naknadu ne postoji (Zakon o posredovanju, čl. 27 st. 6).",\r
"Posao je zaključen u roku od devet mjeseci od prestanka ugovora (do {0}); pravo na naknadu postoji ako je posao rezultat radnji posrednika prije prestanka ugovora (čl. 27 st. 6).",\r
"Posao je zaključen; ugovor je prestao zaključenjem pravnog posla.",\r
"posao zaključen",\r
"Posao zaključen",\r
"Posebne evidencije",\r
"Posebne evidencije određuje licenca firme.",\r
"Posebni paketi licence. Vide se kad ih licenca firme uključuje; podaci se ne brišu kad paket nije u licenci.",\r
"Poslata opomena se ne briše (ostaje u istoriji kupca).",\r
"Poslato faktura: {0}.{1}",\r
"Poslato poštom",\r
"Poslije roka od osam dana: {0}.",\r
"Posljednja opomena",\r
"posljednja prodajna cijena",\r
"Posljednja strana",\r
"posljednji obračun {0}",\r
"Poslovna kartica firme kupca. Plaćanje ličnom platnom karticom je gotovinsko i ide kroz kasu.",\r
"Poslovne transakcije klijenta nijesu u skladu sa njegovim prihodima i imovinom.",\r
"Poslovni odnos",\r
"Poslovni odnos ili transakcija uključuje neprofitne ili humanitarne organizacije za šta ne postoji pravi ekonomski razlog.",\r
"Poslovni odnos traje; rok čuvanja počinje od prestanka odnosa (ZSPNFT čl. 127 st. 1).",\r
"poslovni prostor",\r
"Posrednici u prometu i zakupu nepokretnosti",\r
"Posrednička naknada za nepokretnost u Crnoj Gori je promet u Crnoj Gori i podliježe PDV-u i kada je nalogodavac strano lice (Zakon o PDV, čl. 17a st. 1). Osnov „promet van Crne Gore\\" (čl. 17) se ne primjenjuje.",\r
"Posrednička naknada, izdati račun i broj računa",\r
"Posrednik ima saznanja da je klijent bio kažnjavan za neka krivična djela.",\r
"Posrednik se obavezuje da nastoji da pronađe i dovede u vezu sa nalogodavcem lice radi zaključenja pravnog posla, izvrši uvid u isprave o pravu svojine i upozori nalogodavca na upisana prava, terete, pravo preče kupovine i ograničenja u prometu, obavi radnje prezentacije nepokretnosti, omogući pregled nepokretnosti, posreduje u pregovorima i obavijesti nalogodavca o svim okolnostima od značaja za pravni posao (čl. 20).",\r
"Posrednik sumnja u istinitost navedene svrhe transakcije (npr. pomoć porodici, izdržavanje lica, pojmovi često korišćeni od strane ekstremista i terorista i sl.), naročito ako se radi o učestalim nalozima gdje se ne može utvrditi lična ili poslovna veza između učesnika transakcije.",\r
"Posrednik u prometu nepokretnosti",\r
"Posrednik: {0}, {1}, PIB {2}; broj upisa u Registar posrednika: {3}{4}.",\r
"Posrednik: {0}, broj upisa u Registar posrednika: {1}",\r
"Posredovanje",\r
"Posredovanje (nekretnine)",\r
"Posredovanje u prometu nepokretnosti",\r
"pošta",\r
"Pošta (Outlook): automatsko čitanje i uvoz",\r
"Poštanski broj",\r
"Postignuta cijena",\r
"postoje fakture",\r
"Postoje podaci da je klijent možda umiješan u nezakonite aktivnosti.",\r
"Postoje saznanja da klijent ima lošu reputaciju ili da postoji sumnja u izvore sredstava, da u svom poslovanju koristi virtuelne valute (npr. bitkoin ili lajtkoin) ili koristi alternativne kanale plaćanja (npr. havala, hundi), sa ciljem izbjegavanja redovnih finansijskih kanala.",\r
"Postojeći artikal mijenja vrstu u Trgovina → Artikli (kolona Vrsta) dok nema prometa robe.",\r
"Postoji sumnja u stvarnu svrhu obavljene transakcije.",\r
"Postoji veliki broj avansnih uplata, gdje do kraja obračunskog perioda nije došlo do realizacije usluge ili isporuke robe.",\r
"Potpis",\r
"Potpis na poreskim knjigama, PR-PDV i dokumentima.",\r
"potpisana ponuda (obje strane)",\r
"Potpisana potvrda",\r
"Potpisana potvrda o obilasku je dokaz o posredovanju (Zakon o posredovanju, čl. 24) i ne briše se.",\r
"Potpisi i podnožje izvoza",\r
"Potpisi na izvozima",\r
"Potpisi na izvozima (sastavio, kontrolisao, knjižio)",\r
"Potpisivanje radi samo u Windows programu.",\r
"Potposrednik",\r
"Potposredovanje",\r
"Potposredovanje je moguće samo uz izričitu saglasnost nalogodavca (Zakon o posredovanju, čl. 21 st. 1).",\r
"Potraživanja",\r
"Potraživanja od kupaca u inostranstvu (kupac sa državom van Crne Gore): faktura, avans, odobrenje, naplata",\r
"Potraživanja za kamatu",\r
"potraživanja, IOS, opomene",\r
"Potraživanje utuženo…",\r
"Potreban je nov sertifikat. {0}",\r
"Potrosac",\r
"Potrošač",\r
"Potrošač (ime i prezime)",\r
"potrošač je povukao prigovor",\r
"Potvrda je dokaz o obilasku nepokretnosti iz evidencije o posredovanju (Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 24).",\r
"Potvrda o obilasku je napravljena: {0}",\r
"Potvrda o rezidentnosti",\r
"Potvrda o rezidentnosti je izdata za državu {0}, a primalac je iz {1}.",\r
"Potvrda o rezidentnosti je od {0}; potrebno je provjeriti da važi za godinu isplate.",\r
"Potvrda otpisa odmah pravi i minus kalkulaciju (rashod u knjigama)",\r
"potvrda potpisana",\r
"Potvrda utvrđuje cijene{0} i knjiži nalog u glavnu knjigu. Dokument se poslije ne mijenja, samo stornira.",\r
"Potvrda: država",\r
"potvrđen",\r
"potvrdi",\r
"Potvrdi i napravi dokument",\r
"Potvrdjeno",\r
"Potvrđujem da sam {0} uz posredovanje {1} obišao/obišla nepokretnost: {2}{3}, {4}.",\r
"POV",\r
"Povećanje veleprodajne vrijednosti bez PDV:",\r
"Povećanje vrijednosti nedovršene proizvodnje",\r
"Povećanje vrijednosti zaliha nedovršenih i gotovih proizvoda",\r
"Povećanje zaliha proizvoda: {0}",\r
"Povezivanje → Ažuriranje",\r
"Povezivanje → Menadžer",\r
"Povezivanje → Program za kase",\r
"Povjerenik",\r
"Povrat „{0}\\" ({1}) je veći od količine izdate na radni nalog ({2}).",\r
"Povrat dobavljaču",\r
"Povrat dobavljaču {0}",\r
"Povrat dobavljaču iz Menadžera {0}",\r
"Povrat je vezan za knjižno odobrenje {0}.",\r
"Povrat je zatvoren bez knjižnog odobrenja.",\r
"povrat kupca",\r
"Povrat nema vezano odobrenje.",\r
"Povrat neutrošenog materijala {0}",\r
"Povrat neutrošenog materijala u magacin (storno troška).",\r
"Povrati dobavljaču",\r
"povratnica",\r
"Povratnica dobavljaču",\r
"POVRATNICA DOBAVLJAČU",\r
"Povratnica iz proizvodnje",\r
"POVRATNICA MATERIJALA",\r
"Povratnica u magacin {0}",\r
"povratnici",\r
"Povrsina",\r
"Površina (m²)",\r
"Površina je obavezna (podatak 10 evidencije o posredovanju, Pravilnik 45/26 čl. 3). Oglas sadrži površinu i strukturu nepokretnosti (Zakon o posredovanju, čl. 25 st. 1)",\r
"Površina m²",\r
"Površina ne može biti negativna.",\r
"Površina nepokretnosti",\r
"Površina nepokretnosti (m²) nije upisana. Površina je podatak evidencije o posredovanju (Pravilnik 45/26, čl. 3 t. 10) i obavezan podatak oglasa (Zakon o posredovanju, čl. 25 st. 1).",\r
"Površina nepokretnosti {0} nije upisana (Pravilnik o evidenciji o posredovanju 45/26, čl. 3 t. 10). Površina se upisuje na nepokretnosti.",\r
"Površina: {0} m²",\r
"površinu",\r
"površinu (m²)",\r
"površinu (m²) i strukturu",\r
"površinu i strukturu",\r
"povučena iz ponude",\r
"pozitivna",\r
"Pozitivna kursna razlika {0} — {1}",\r
"Pozitivna kursna razlika po računu {0}",\r
"Poznavanje klijenta · evidencije po ZSPNFT · rokovi za prijavu FOJ-u · analiza rizika · lista indikatora",\r
"Poznavanje klijenta, evidencije po ZSPNFT, prijave FOJ-u sa rokovima, lista indikatora, analiza rizika i rokovi čuvanja.",\r
"poznavanje klijenta, evidencije po ZSPNFT, prijave FOJ-u, analiza rizika i lista indikatora",\r
"PR PDV-2: polje 13 — promet po stopi 0 %, polje 14 — oslobođeni promet",\r
"PR-{0}-%",\r
"Praćenje poslovanja klijenta — transakcija",\r
"Prag",\r
"Prag pisane ponude (€, sa PDV-om)",\r
"Prag pisane ponude mora biti između 0 i 100.000 €.",\r
"Prag pisane ponude, dozvoljeno povećanje cijene",\r
"Pragovi",\r
"Pragovi i rokovi moraju biti veći od nule.",\r
"Prava i obaveze (tekst za ugovor o posredovanju)",\r
"Prava i obaveze posrednika i nalogodavca",\r
"Pravila banke",\r
"Pravila banke (izvodi)",\r
"Pravila godišnjeg odmora i okolnosti radnika",\r
"Pravila nisu primijenjena. {0}",\r
"Pravila su primijenjena: izmijenjeno stavki koje čekaju: {0}.",\r
"Pravilnik o bližem sadržaju, načinu vođenja i roku čuvanja evidencije o posredovanju u prometu i zakupu nepokretnosti („Sl. list CG\\" br. 45/26), čl. 3–5. Redni broj unosa je neprekidan; promjena se upisuje kao nov unos sa pozivom na prvobitni unos. Evidencija se čuva trajno.",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 3 t. 6 i 10",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 3–5",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 4 — upis u roku od osam dana",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 4 — upis u roku od osam dana od zaključenja ugovora, odnosno od nastanka promjene",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 5 st. 1",\r
"Pravilnik o evidenciji o posredovanju („Sl. list CG\\" 45/26), čl. 5 st. 2",\r
"Pravilnik o listi indikatora za prepoznavanje sumnjivih klijenata i transakcija („Sl. list CG\\" br. 29/24)",\r
"pravilo",\r
"Pravilo je obrisano.",\r
"Pravilo je snimljeno.",\r
"Pravilo kaže: kad opis stavke izvoda sadrži zadati tekst (ili je račun primaoca/uplatioca zadati račun) — upiši vrstu prometa i/ili partnera. Primjenjuje se pri uvozu izvoda i na zahtjev nad stavkama koje čekaju, redom (manji broj u koloni „Redoslijed\\" ide prvi). Partner prepoznat po PIB-u, po upamćenom računu ili izabran ručno se ne mijenja. Stavka sa dobavljačem iz pravila se pri uvozu knjiži kao stavka sa upamćenim računom.",\r
"Pravilo mora imati bar jedan uslov: tekst u opisu ili račun primaoca/uplatioca.",\r
"Pravilo mora nešto upisati: vrstu prometa ili partnera.",\r
"Pravilo nije obrisano. {0}",\r
"Pravilo nije snimljeno. {0}",\r
"Pravilo upisuje dobavljača ili kupca, ne oba.",\r
"pravilo „{0}\\"",\r
"Pravilo: {0}",\r
"Pravni posao i naknada",\r
"Pravni posao je zaključen prije ugovora o posredovanju.",\r
"Pravni posao po ugovoru o posredovanju {0}",\r
"Pravni posao zaključen {0}",\r
"Pravni posao zaključen / nije zaključen",\r
"Pravno lice",\r
"Pravo na naknadu do",\r
"Pravo na naknadu po ugovoru {0} (devet mjeseci po prestanku)",\r
"Prazno = satnica projekta",\r
"prazno = svi artikli",\r
"Prebacivanje fakture u troškove — kalkulacija {0}",\r
"Prebačeno iz kalkulacije {0} (faktura unesena kao roba) {1}",\r
"Prebivalište, odnosno sjedište",\r
"Pred utuženje",\r
"Predaja u",\r
"Predao (proizvodnja)",\r
"predat",\r
"predata",\r
"Predata količina",\r
"Predata količina mora biti veća od nule.",\r
"Predatnica",\r
"Predatnica gotovih proizvoda",\r
"PREDATNICA GOTOVIH PROIZVODA",\r
"Predatnica gotovih proizvoda {0}",\r
"Predatnica iz {0} — {1}{2}",\r
"Predatnica ne može biti prije datuma radnog naloga.",\r
"Predatnica sadrži samo proizvod radnog naloga.",\r
"Predatnica se pravi iz radnog naloga.",\r
"Predato",\r
"predato (isplaćeno) licu po nalogu",\r
"Predlog iz teksta zakona",\r
"Predlog stope = stopa ECB + 8 p.p. Važeća je stopa koju objavi CBCG.",\r
"Predlog stope:",\r
"Predloženo stopa: {0} (nepotvrđene).",\r
"Predložak (Excel)",\r
"Predložak je snimljen: {0}",\r
"Predloži iz lagera",\r
"Predmet (račun, radni nalog, proizvod ili usluga)",\r
"Predmet (uređaj ili vozilo) nije upisan.",\r
"Predmet (uređaj, vozilo, model)",\r
"Predmet posredovanja: {0} nepokretnosti — {1}{2}{3}; lokacija: {4}. {5}: {6} {7}. Cijena je utvrđena tako da uključuje iznos naknade za posredovanje (čl. 18 st. 3 Zakona).",\r
"Predmet ugovora nije upisan.",\r
"Predmet ugovora: {0}.",\r
"Predračun (ponuda)",\r
"Preduzeta mjera",\r
"pregled",\r
"Pregled za izvještaj IOPPO —",\r
"PREGLED ZA IZVJEŠTAJ O POREZU PO ODBITKU (IOPPO)",\r
"preko depozitnog računa",\r
"Preko kreditnog limita.",\r
"preko limita",\r
"prelazi u",\r
"prema računu",\r
"Prema računu: gotovinski račun je plaćen odmah, bezgotovinski je dug dobavljaču do plaćanja.",\r
"Preneseno: carina {0}, akciza {1} na {2} kalkulacija.",\r
"Prenesi",\r
"Prenesi carinu i akcizu u zavisne troškove",\r
"Prenos {0} je napravljen.",\r
"Prenos iz {0}",\r
"Prenos iz {0}: roba po {1}",\r
"Prenos iz Menadžera {0}",\r
"Prenos iz objekta maloprodaje u objekat veleprodaje",\r
"Prenos iz objekta veleprodaje u objekat maloprodaje",\r
"Prenos između magacina po nabavnoj vrijednosti (npr. magacin → šank / kuhinja).",\r
"Prenos poreske obaveze. Mjesto prometa van Crne Gore (čl. 17 st. 2 ZPDV).",\r
"Prenos u {0}",\r
"Prenos u {0}: roba po {1} (storno)",\r
"Prenos: {0} (interna kalkulacija)",\r
"Prenos: {0} (storno)",\r
"Prenosi novčanih sredstava manjih iznosa u kojima su uključena ista lica preko drugih alternativnih sistema za prenos novca su učestali.",\r
"Prenosi primljeni u objektu, otpisi, povrati dobavljaču i trebovanja šanka i kuhinje iz Menadžera stižu kao nacrti. Potvrdom nastaje dokument u knjigama (prenosnica, zapisnik o rashodu i minus kalkulacija, međumagacinski prenos); stanje se vraća u Menadžer.",\r
"Prenosi, otpisi, povrati dobavljaču i trebovanja iz Menadžera kao nacrti za potvrdu · knjižno odobrenje za povrat · nivelacija iz promjene cijene",\r
"prepoznat po pravilu banke (Banka → Pravila banke)",\r
"prestanak odnosa",\r
"pretečen",\r
"Prethodna strana",\r
"Prethodni pogodak",\r
"Pretraga (broj, klijent, predmet, serijski broj)",\r
"Pretraga (broj, nalogodavac, lokacija, agent)",\r
"Pretraga (broj, predmet, kupac)",\r
"Pretraga (naziv, matični broj, JMB)",\r
"Pretraga (naziv, PIB, grad)",\r
"Pretraga (oznaka, lokacija, parcela, vlasnik)",\r
"Pretraga (potrošač, predmet, opis)",\r
"Pretraga (proizvod)",\r
"Pretraga (šifra, naziv, kupac)",\r
"Pretraga cijena",\r
"pretraga indikatora",\r
"Pretraga kroz sve strane liste (Enter = sljedeći pogodak)",\r
"Pretraga po nazivu, opisu i mjestu podešavanja; nalazi i podešavanja koja su na drugim ekranima.",\r
"Pretraga proizvoda",\r
"Preuzeo (ime i prezime)",\r
"Preuzeto",\r
"Preuzeto dana: {0}.{1}",\r
"Preuzeto indikatora iz Pravilnika: {0}.",\r
"Preuzimanje ili ručni upis za jedan dan",\r
"Preuzimanje je upisano.",\r
"Preuzmi",\r
"Preuzmi kurs",\r
"Preuzmi liste iz Pravilnika (MUP 29/24)",\r
"Preuzmi za period",\r
"Prevoz, carina, osiguranje iz faktura drugih dobavljača (knjiže se kao trošak vrste sa kontom 1000); raspoređuju se po vrijednosti stavki.",\r
"Prigovor {0}/{1}",\r
"Prigovor {0}/{1} je evidentiran i na drugom računaru; ovdašnji unos dobija broj {2}/{3}.",\r
"Prigovor {0}/{1} je izmijenjen.",\r
"Prigovor {0}/{1} sa drugog računara dobija broj {2}/{3} (broj je ovdje već zauzet ranijim unosom).",\r
"Prigovor je obrisan.",\r
"Prigovor je odgovoren",\r
"Prigovor je odgovoren {0} Upisani podaci se ne mijenjaju; odgovor se može samo dopuniti (Zakon o zaštiti potrošača, čl. 27).",\r
"Prigovor je upisan pod brojem {0}/{1}. Rok za odgovor: {2}.",\r
"Prigovor ne postoji.",\r
"Prigovor se čuva najmanje dvije godine (Zakon o zaštiti potrošača, čl. 27); brisanje je moguće od {0}. Pogrešan unos se zatvara ishodom „poništen unos\\".",\r
"Prigovora bez odgovora kojima je istekao rok (",\r
"Prigovori potrošača, odgovori i rokovi za odgovor",\r
"Prigovori potrošača, odgovori i rokovi za odgovor.",\r
"Prigovori u Knjizi prigovora:",\r
"Prihod",\r
"Prihod bez PDV",\r
"Prihod bez PDV-a u periodu:",\r
"Prihodi od prodaje usluga na inostranom tržištu",\r
"PRIHODI PO KLIJENTU",\r
"PRIHODI PO MJESECIMA",\r
"PRIHODI PO PROJEKTU",\r
"PRIHODI PO UGOVORU",\r
"PRIHODI PO USLUZI I ARTIKLU",\r
"prihvaćena",\r
"Prihvaćenu ponudu potpisuju servis i klijent; jedan primjerak se predaje klijentu ({0}).",\r
"prijava",\r
"Prijava je dopunjena.",\r
"Prijava je dostavljena FOJ-u i ne mijenja se.",\r
"Prijave",\r
"PRIJAVE FOJ-u",\r
"Prijave FOJ-u koje čekaju:",\r
"Prijave FOJ-u koje čekaju: {0}",\r
"Prijedlog je odbijen.",\r
"Prijedlozi iz Menadžera",\r
"Prijem uređaja na servis · radni nalog · pisana ponuda za popravku · specifikacija uz račun",\r
"Prijem uređaja na servis, radni nalozi, pisana ponuda za popravku i specifikacija uz račun.",\r
"Prijemi robe ulaze u knjige kalkulacijom po fakturi. Prenosi primljeni u objektu, otpisi i povrati dobavljaču iz Menadžera stižu kao nacrti u Sistem → Dokumenti iz Menadžera: tamo ih knjigovođa potvrđuje (prenosnica, zapisnik o rashodu) ili odbija.",\r
"Prijemni magacin mora biti drugi magacin.",\r
"Prijemni magacin nije izabran.",\r
"Prijemni magacin: {0}",\r
"prijemnica",\r
"Prijemnica",\r
"Prijemnica i povratnica materijala",\r
"Prijemnica materijala",\r
"PRIJEMNICA MATERIJALA",\r
"prijemnici",\r
"Prikaz duga dobavljača",\r
"Prikazuj dugme „Proknjiži\\" na svakom računu i dokumentu (pojedinačno knjiženje uz mjesečno)",\r
"Prilagodi meni (omiljene i skrivene stavke, dopunske djelatnosti)",\r
"Priliv novčanih sredstava je nastao po osnovu ugovora o zajmu čiji je rok vraćanja istekao, a novčana sredstva koja su bila predmet ugovora o zajmu nijesu vraćena.",\r
"Priliv sa izvoda",\r
"Prilog",\r
"Prilog (potpisan ugovor, putanja do fajla)",\r
"Prilog (putanja do fotografija ili dokumenata)",\r
"Primalac (nerezidentno pravno lice)",\r
"Primalac dažbina",\r
"Primalac isplate nije upisan.",\r
"Primati dokumente izmijenjene od",\r
"Primati dokumente robe iz Menadžera kao nacrte",\r
"Primijeni pravila na stavke koje čekaju",\r
"Primijeni u kalkulaciju",\r
"Primijenjena je stopa zatezne kamate koju za svako polugodište objavljuje Centralna banka Crne Gore{0}. Kamata teče od dana poslije dospijeća; uplata umanjuje glavnicu od dana uplate.",\r
"Primijenjeno",\r
"Primio (dobavljač)",\r
"Primio (magacin)",\r
"Primio (magacioner)",\r
"Primjer DOO",\r
"primljen od",\r
"primljena",\r
"Primljena odobrenja",\r
"Primljeni depoziti nalogodavaca",\r
"primljeni računi danas (EUR sa PDV)",\r
"primljenih računa danas ·",\r
"primljenih računa ovaj mjesec ·",\r
"primljeno od nalogodavca ili druge strane",\r
"Primljeno: {0} {1}; srednji kurs CBCG na dan {2}: {3} {4} za 1 EUR",\r
"Prirez (%)",\r
"Prirez %",\r
"Pristanak klijenta je upisan.",\r
"Pristanak na povećanje",\r
"Pristanak na povećanje je upisan; nalog je ponovo u radu.",\r
"Pristanak se upisuje za nalog sa ponudom ili za povećanje cijene (sada: {0}).",\r
"Pristupi nadzornih organa podacima",\r
"PRM",\r
"PRO",\r
"Problem",\r
"Procenat bonusa je manji od 100, a prag 0 ili veći.",\r
"Procenat naknade nije ispravan.",\r
"Pročitano redova: {0} (kolone: {1}{2}).",\r
"Prodaja (ugostiteljstvo: razduženje pri prodaji)",\r
"Prodaja i proizvodnja",\r
"Prodaja objekta {0} {1} – {2}",\r
"Prodaja objekta za period (kase, izlazne fakture, prodaja bez kase) razdužuje sastojke po normativu namjene „prodaja\\" iz šanka, kuhinje ili magacina objekta (dokument UTR, nalog D 5110 / P 1010), a gotove proizvode bez prodajnog normativa iz magacina gotovih proizvoda (dokument PRO, D 6310 / P 1200). Ista prodaja se razdužuje jednom.",\r
"Prodaja objekta za period {0} – {1} je već razdužena dokumentom {2}.",\r
"PRODAJE SE",\r
"Prodajna cijena",\r
"Prodajna cijena odnosno cijena zakupa se utvrđuje tako da uključuje naknadu za posredovanje (Zakon o posredovanju, čl. 18 st. 3). Potrebno je označiti „Cijena uključuje naknadu za posredovanje\\".",\r
"Prodajna cijena odnosno zakupnina sa uračunatom naknadom za posredovanje (Zakon o posredovanju, čl. 18 st. 3)",\r
"prodajne",\r
"prodajnoj pošiljaoca",\r
"prodajnoj primaoca sa PDV",\r
"Prodati gotovi proizvodi",\r
"Prodavac",\r
"Produkcija (efi.tax.gov.me) — svaki izdati račun je fiskalni račun.",\r
"Produženje ugovora",\r
"Produženje ugovora…",\r
"Produži do datuma",\r
"Produži ugovor",\r
"Profitabilnost projekta",\r
"PROFITABILNOST PROJEKTA",\r
"Program prikazuje dijelove izabranih djelatnosti (trgovina, ugostiteljstvo, usluge, hotel…).",\r
"Program za kase (razmjena, uvoz probnih računa)",\r
"Proizvod",\r
"Proizvod (gotov proizvod ili usluga)",\r
"Proizvod ne može biti sastojak samog sebe.",\r
"Proizvod nije izabran.",\r
"proizvoda, najviše",\r
"Proizvodi po cijeni koštanja iz predatnice (konto 120)",\r
"Proizvodnja (radni nalog)",\r
"Proizvodnja: nedovršena proizvodnja (otvoreni radni nalozi na kraju mjeseca)",\r
"Proizvodnja: povećanje vrijednosti zaliha nedovršenih i gotovih proizvoda (predatnica)",\r
"Proizvodnja: predatnica, prodaja gotovih proizvoda, nedovršena proizvodnja",\r
"Proizvodnja: radni nalozi",\r
"Proizvodnja: smanjenje vrijednosti zaliha nedovršenih i gotovih proizvoda (prodaja, utrošak)",\r
"Proizvodnja: zalihe gotovih proizvoda po cijeni koštanja",\r
"Projekat",\r
"Projekat „{0}\\" nema kupca.",\r
"Projekat „{0}\\": evidentirano {1} h, budžet {2} h.",\r
"projekat {0}",\r
"Projekat {0}",\r
"projekat bez kupca",\r
"Projekat ima {0} unosa sati i ne briše se. Završen projekat se označava statusom „završen\\".",\r
"Projekat je obrisan.",\r
"Projekat je snimljen.",\r
"Projekat ne postoji.",\r
"Projekat nije aktivan; sati se unose samo na aktivan projekat.",\r
"Projekat nije izabran.",\r
"Projekat sa šifrom {0} već postoji.",\r
"Projekata",\r
"Projekti",\r
"PROJEKTI",\r
"Projekti i evidencija sati",\r
"Projekti po klijentima · evidencija radnih sati · faktura iz evidentiranih sati",\r
"Projekti po klijentima, evidencija radnih sati i fakturisanje po evidentiranim satima.",\r
"promet",\r
"Promet kulturnih dobara, dragocjenih metala i dragog kamenja (t. 13 al. 12)",\r
"Promet motornih vozila (t. 13 al. 10)",\r
"Promet plovnih i vazduhoplovnih objekata (t. 13 al. 11)",\r
"Promet sa inostranstvom",\r
"Promet sa inostranstvom, kursna lista, napomene osnova",\r
"Promet van CG — ne podliježe PDV (dodatna kolona)",\r
"Promet van Crne Gore (mjesto prometa u inostranstvu)",\r
"promjena",\r
"Promjena",\r
"promjena (prvi unos {0})",\r
"Promjena cijene ({0}{1}) — nacrt iz cjenovnika kasa. Provjeriti zatečenu količinu i upisati odgovorno lice.",\r
"promjena podataka",\r
"Promjena prodajne cijene robe na zalihi sa Menadžera ili kase pravi nacrt nivelacije na dan promjene (Pravilnik 34/12 čl. 11): zatečena količina iz lagera, stara cijena iz knjiga. Nivelaciju zaključuje knjigovođa u Zalihe i popis → Nivelacija, poslije provjere količine i upisa odgovornog lica.",\r
"Promjene za upis u evidenciju o posredovanju:",\r
"Promjene za upis u evidenciju o posredovanju: {0}",\r
"Pronađeno:",\r
"Propis",\r
"Prosj. cijena",\r
"Prosječno kašnjenje (dana)",\r
"Prosta kamata po stopi CBCG za svako polugodište, 36.500 (prestupna godina 36.600); uplata umanjuje glavnicu od dana uplate. Kupcu privrednom subjektu i naknada troškova naplate po zakašnjeloj fakturi.",\r
"provjera ažuriranja",\r
"Provjera konta u šemama knjiženja",\r
"Provjera kupca i cijena",\r
"Provjera nove verzije i adresa ažuriranja.",\r
"Provjera prije plaćanja",\r
"Provjera prije plaćanja:\\n{0}",\r
"Provjera računa:",\r
"Provjera stanja (minus), decimale količine, metoda vrednovanja izlaza",\r
"Provjera stanja pri izdavanju otpremnice i reversa",\r
"Provjera stanja pri izdavanju, decimale količine, materijalno knjigovodstvo",\r
"Provjera stanja u objektu veleprodaje (faktura, otpremnica, revers)",\r
"Provjera stanja: ne, upozori ili zabrani.",\r
"provjera u Registru stvarnih vlasnika",\r
"Provjera u Registru stvarnih vlasnika",\r
"provjereno u važećem propisu",\r
"Provjeri konta u šemama knjiženja",\r
"provjeriti da su uvjerenja dostavljena",\r
"Provjeriti lozinku i fajl sertifikata. {0}",\r
"Prva strana",\r
"Prvi list Excel fajla; zaglavlje se prepoznaje po nazivu kolone: Naziv, PIB, PDV broj, Adresa, Grad, Telefon, E-pošta, Rok plaćanja (dana), Rabat %, Kreditni limit, Grupa, Region, Kanal, Komercijalista, Kontakt osoba, Žiro račun, Napomena. Postojeći kupac (isti PIB) dobija samo popunjena polja.",\r
"Prvi račun dobavljača u ovoj firmi",\r
"Prvo plaćanje ovom dobavljaču. Prije plaćanja provjeriti podatke dobavljača i račun primaoca.",\r
"Prvo se upisuje magacin (kartica Magacini).",\r
"Prvo zaključavanje",\r
"punomocnik",\r
"punomoćnik",\r
"Putanja do potpisanog ugovora (PDF) na ovom računaru; fajl ne putuje razmjenom",\r
"Putanja fajla (folder firme {0})",\r
"Putanja skeniranog dokumenta nije upisana.",\r
"QR nije validan. Nedostaje IIC računa.",\r
"QRText",\r
"r.Nacin",\r
"rabat (%)",\r
"rabat {0} %",\r
"rabat %",\r
"Rabat akcije mora biti veći od 0 i manji od 100 %.",\r
"rabat grupe {0}",\r
"Rabat grupe %",\r
"Rabat grupe mora biti od 0 do 99,99 %.",\r
"Rabat je uklonjen.",\r
"Rabat je upisan.",\r
"rabat kupca",\r
"Rabat kupca %",\r
"rabat kupca za artikal",\r
"rabat kupca za grupu artikala",\r
"Rabat mora biti veći od 0 i manji od 100 %.",\r
"rabat nije ispravan (0–99,99 %)",\r
"Rabat važi za kupca ili za grupu kupaca, ne za oba.",\r
"Rabat za sve kupce se upisuje kao količinska skala ili B2B akcija.",\r
"Rabati i skale",\r
"Račun (faktura)",\r
"račun br. {0} od {1}",\r
"račun br. {0}{1}",\r
"Račun glasi na drugog kupca. Upis u troškove je moguć samo uz izričitu potvrdu.",\r
"Račun izdat kroz registrovan fiskalni softver: broj i datum za evidenciju (podatak 14)",\r
"Račun izdat van programa",\r
"Račun izdat van programa…",\r
"Račun je već unesen kao kalkulacija (#{0}).",\r
"Račun je već upisan u troškove (Nabavka i troškovi, unos {0}).",\r
"Račun koji nije roba (struja, voda, telefon, gorivo…) prelazi u „Nabavka i troškovi\\"; kalkulacija se briše (trgovačka knjiga i zalihe), dug dobavljaču ostaje kao trošak, ulazni PDV ostaje u istom mjesecu.",\r
"Račun naknade",\r
"Račun naknade je upisan.",\r
"Račun nema iznosa (stavke ni zbirni podaci po stopama).",\r
"račun nije izdat",\r
"Račun plaćen virmanom je dug dobavljaču do plaćanja (saldo, kartica, otvorene stavke, dospijeća, IOS). Plaćen gotovinom ili karticom ne ulazi u dug.",\r
"Račun u stranoj valuti nosi oznaku valute i kurs; iznosi u poruci su u EUR.",\r
"Račun unesen QR kodom {0}",\r
"Račun za posredničku naknadu po ugovoru {0}",\r
"Račun za posredničku naknadu se izdaje tek po zaključenju pravnog posla (Zakon o posredovanju, čl. 27 st. 1–2).",\r
"Račun za robu ide u kalkulaciju (zaliha, trgovačka knjiga). Račun za struju, telefon, zakup, usluge i sl. ide direktno u troškove (Nabavka i troškovi), bez kalkulacije i bez objekta.",\r
"Računi i fakture",\r
"računi kase {0}",\r
"Računovođe",\r
"Računovodstvo → Kontni plan i podešavanja knjiženja",\r
"Računovodstvo → Ponavljajući nalozi",\r
"Računovodstvo → Pravila dobavljača",\r
"Rad počinje poslije pristanka klijenta (sada: {0}).",\r
"Radni nalog",\r
"Radni nalog · trebovanje po normativu · predatnica gotovih proizvoda po cijeni koštanja · kalkulacija cijene koštanja · nedovršena proizvodnja",\r
"RADNI NALOG {0}",\r
"Radni nalog {0} — {1}",\r
"Radni nalog {0} — {1}{2}",\r
"Radni nalog {0} — {1}{2}.",\r
"Radni nalog {0} je evidentiran i na drugom računaru; ovdašnji nalog dobija broj {1}.",\r
"Radni nalog {0} nema normativ. Materijal se treba ručno (Materijal → Trebovanje) ili se upisuje normativ proizvoda.",\r
"Radni nalog {0} nije otvoren.",\r
"Radni nalog {0} sa drugog računara dobija broj {1} (broj je ovdje već zauzet ranijim nalogom).",\r
"Radni nalog → trebovanje materijala (D 5110 / P 1010) → predatnica gotovih proizvoda po cijeni koštanja (D 1200 / P 6300) → prodaja (D 6310 / P 1200). Otvoreni nalozi na kraju mjeseca su nedovršena proizvodnja (1100).",\r
"Radni nalog ima kasniju predatnicu. Prvo se stornira ona.",\r
"Radni nalog ima potvrđene dokumente (trebovanje, predatnica). Prvo se oni storniraju.",\r
"Radni nalog ima potvrđene dokumente. Proizvod se ne mijenja.",\r
"Radni nalog je obrisan.",\r
"Radni nalog je snimljen.",\r
"Radni nalog je storniran.",\r
"Radni nalog ne postoji.",\r
"Radni nalog nema planiranu količinu.",\r
"Radni nalog nije snimljen.",\r
"Radni nalog: {0}",\r
"Radni nalozi",\r
"RADNI NALOZI",\r
"Radni nalozi čekaju pisani pristanak klijenta na povećanje cijene: {0}",\r
"Radni nalozi: prag pisane ponude i povećanje cijene",\r
"Radnik nije izabran ni upisan.",\r
"Radnik nije u evidenciji radnika.",\r
"Radnika: {0} ({1}{2}).",\r
"radnja",\r
"Radno vrijeme i smjene objekata; objekti samo po svojim smjenama.",\r
"Radovi, djelovi i materijal",\r
"Rashod (otpis)",\r
"Raspored na stavke",\r
"Raspoloživo",\r
"Razduženje gotovih proizvoda {0}",\r
"Razduženje gotovih proizvoda prodatih fakturom ili kasom (631 / 120).",\r
"Razduženje iz",\r
"Razduženje po prodaji",\r
"Razduženje pravi i potvrđuje dokumente utroška na dan {0} i knjiži ih u glavnu knjigu.",\r
"Razduženje pri prodaji iz",\r
"Razduženje sastojaka po normativu na osnovu prodaje (kasa, fakture, prodaja bez kase).",\r
"Razduži",\r
"Razlika između uplate ({0} EUR) i otvorenog dijela fakture ({1} EUR) je veća od {2} % i nije kursna razlika.",\r
"Razlika je kursna",\r
"Razlika poslato / primljeno: {0}",\r
"Razlika prema povratu",\r
"razlika u cijeni pošiljaoca u veleprodaji",\r
"razlika u cijeni primaoca u veleprodaji",\r
"Razlika vrijednosti povrata {0}",\r
"Razlog (obavezno)",\r
"Razlog blokade isporuke",\r
"Razlog odbijanja",\r
"Razlog odbijanja (za prvi nacrt)",\r
"Razlog odbijanja je obavezan.",\r
"razlog odnosa",\r
"Razlog odnosa",\r
"Razlog otkaza",\r
"Razlog otključavanja",\r
"Razlog otključavanja mjeseca {0} {1}. (upisuje se u izvještaj „Izmjene poslije zaključenja\\"):",\r
"račun firme {0}",\r
"Račun ima kalkulaciju. Brisanje se radi brisanjem kalkulacije (Kalkulacije i fakture).",\r
"Račun kalkulacije nema stavki (iznosi se uzimaju sa računa).",\r
"Račun koji nije roba (struja, voda, telefon, gorivo…) prelazi u „Nabavka i troškovi\\"; kalkulacija se briše (trgovačka knjiga, zalihe i dug dobavljaču), ulazni PDV ostaje u istom mjesecu.",\r
"Račun ne postoji (možda je već obrisan).",\r
"Račun nije snimljen. Za unos u drugu firmu potrebno je otvoriti tu firmu.",\r
"Račun nije u obliku 3-13-2 cifre.",\r
"Račun primaoca / uplatioca",\r
"Račun primaoca {0} nije među poznatim računima dobavljača ({1}{2}). Prije plaćanja potvrditi sa dobavljačem, na poznat kontakt, da je račun promijenjen.",\r
"Račun primaoca/uplatioca nije ispravan (3-13-2 cifre, npr. 510-1234567-89).",\r
"Račun {0} je obrisan. Dug dobavljaču {1} je umanjen za {2} EUR.",\r
"Računi dobavljača bez kalkulacije",\r
"Računi dobavljača bez kalkulacije: {0}, ukupno {1} EUR.",\r
"Razlog poslovnog odnosa nije sa spiska.",\r
"Razlog poslovnog odnosa, odnosno transakcije nije izabran (ZSPNFT čl. 117 st. 1 {0}).",\r
"Razlog skidanja blokade",\r
"Razlog storna",\r
"Razlog storna je obavezan.",\r
"Razlozi za izvršenje transakcije (obrazloženje)",\r
"Razlozi za sumnju",\r
"Razlozi za sumnju (kad postoje)",\r
"Razlozi za sumnju nisu upisani (ZSPNFT čl. 117 st. 8).",\r
"Razlozi za sumnju nisu upisani.",\r
"Razmjena i uređaji",\r
"razmjena nije preko servera",\r
"Rb",\r
"Rbr",\r
"Recepture jela i pića · razduženje šanka i kuhinje po prodaji sa kase · odstupanja od popisa",\r
"Red {0}: kontakt — {1}",\r
"Red {0}: žiro račun — {1}",\r
"Redni broj unosa",\r
"Redni broj unosa je neprekidan. Promjena se upisuje kao nov unos sa pozivom na prvobitni unos; unosi se ne brišu i ne mijenjaju (evidencija se čuva trajno).",\r
"Redoslijed: osnovni rabat (kupac za artikal → kupac za grupu artikala → grupa kupaca za artikal / grupu artikala / sve → rabat kupca → rabat grupe), pa količinska skala, pa dodatni (kaskadni) rabati, pa B2B akcija — svaki sljedeći na već umanjenu cijenu.",\r
"Redovi {0}–{1} od {2}. Zbir, izvoz i štampa obuhvataju sve redove.",\r
"Redovna",\r
"Referentna stopa ECB za glavne operacije refinansiranja (MRO) koja važi prvog dana polugodišta",\r
"Region",\r
"Registar carinskih deklaracija, PR-PDV polje 20.",\r
"REGISTAR KLIJENATA (ZSPNFT čl. 117)",\r
"Registar klijenata, paket Usklađenost (ZSPNFT): pravni posao nalogodavca ulazi u provjeru pragova za dostavu podataka FOJ-u (ZSPNFT čl. 66)",\r
"REGISTAR NEPOKRETNOSTI",\r
"Registar nepokretnosti · ugovori o posredovanju · evidencija o posredovanju · obilasci · depozitni račun",\r
"registar nepokretnosti, ugovori i evidencija o posredovanju, depozitni račun",\r
"Registar nepokretnosti, ugovori o posredovanju, evidencija o posredovanju, obilasci i depozitni račun.",\r
"Registar posrednika",\r
"Registar, polisa, agenti, prava i obaveze, depozitni računi.",\r
"Registracija ENU",\r
"Registracija iz programa (porukom fiskalnom servisu)",\r
"Registracija uređaja za fakture kod Uprave prihoda.",\r
"repeat(auto-fit, minmax(320px, 1fr))",\r
"Revers razdužuje trgovačku knjigu",\r
"Revers sadrži samo artikle i količine (bez MPC i vrijednosti).",\r
"Revers samo sa količinama (bez MPC i vrijednosti).",\r
"Revizija finansijskih izvještaja",\r
"Revizija, računovodstvo i poresko savjetovanje (t. 13 al. 2)",\r
"Rezident",\r
"Režija — 512",\r
"Rezultat",\r
"rezultat nije SQLite baza",\r
"Rizik",\r
"RN-{0}-{1}",\r
"RNID",\r
"RNP-{0}-{1}",\r
"Roba (kalkulacija)",\r
"Roba ili trošak, vrsta troška, objekat, rok plaćanja po dobavljaču.",\r
"Roba izdata na revers razdužuje trgovačku knjigu pri izdavanju.",\r
"Roba u objektima",\r
"Robno i kalkulacija",\r
"Rok (radnih dana)",\r
"Rok čuvanja",\r
"Rok čuvanja do",\r
"Rok čuvanja istekao",\r
"Rok istekao",\r
"Rok iz opomene (dana)",\r
"Rok iz opomene mora biti između 1 i 90 dana.",\r
"Rok izvršenja nije ispravan.",\r
"Rok izvršenja transakcije",\r
"rok placanja (dana)",\r
"Rok plaćanja (dana) nije ispravan.",\r
"Rok plaćanja (datum valute)",\r
"rok plaćanja (upozorenje)",\r
"Rok plaćanja je prije datuma nabavke.",\r
"Rok plaćanja naknade",\r
"rok plaćanja nije ispravan (0–3650 dana)",\r
"Rok plaćanja nije ispravan datum.",\r
"Rok plaćanja: od 0 do 3650 dana.",\r
"Rok podsjetnika za nepreuzet uređaj mora biti između 1 i 365 dana.",\r
"Rok važenja ponude je istekao",\r
"Rok za odgovor",\r
"rok za odgovor je istekao {0}",\r
"Rok za otkaz ugovora {0}",\r
"Rok za plaćanje iz opomene mora biti između 1 i 90 dana.",\r
"Rok za upis",\r
"Rok za upis u evidenciju je istekao {0}",\r
"Rok za upis u Registar posrednika je istekao",\r
"Rok za upis u Registar posrednika je istekao {0} Posredovanje bez upisa nije dozvoljeno (Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 36); broj upisa se unosi u kartici Podaci posrednika.",\r
"Rok za visokorizičnu državu (dana)",\r
"Rok: {0} ({1}).",\r
"Rokovi čuvanja",\r
"RON",\r
"ROUND({0} - {1}, 2)",\r
"RSD",\r
"RUB",\r
"Ručna blokada kupca uvijek traži odobrenje (osim kad je provjera isključena). Odobrenje daje korisnik sa pravom knjiženja na ovom ekranu, uz razlog; bilježi se ko i kada.",\r
"Ručna potvrda",\r
"Ručni nalog: stavka na kontu kupaca, dobavljača ili radnika ne snima se bez izabranog partnera (analitika partnera u glavnoj knjizi).",\r
"Ručni nalog: stavka na kontu kupaca, dobavljača ili radnika traži partnera.",\r
"Ručni unos ulazne fakture (Nova kalkulacija → ručni unos): izabran artikal dobija nabavnu cijenu bez PDV i rabat sa posljednje kalkulacije tog artikla — prvo u istom objektu, inače u bilo kom. Upisana cijena se ne mijenja.",\r
"Ručni unos ulazne fakture: izabran artikal dobija nabavnu cijenu i rabat sa posljednje kalkulacije (prvo istog objekta).",\r
"Ručno",\r
"Ručno unesena faktura: {0}, {1} EUR (kalkulacija {2}).",\r
"Rukovodilac proizvodnje",\r
"sa dugom",\r
"Sačuvaj metodu",\r
"Sadržaj fiskalne poruke fakture",\r
"Saglasnost kupca za elektronski račun je upisana.",\r
"Saglasnost za elektronski račun (datum)",\r
"Saglasnost za potposredovanje",\r
"Saldo po ugovoru",\r
"Šalji datum ili period prometa (SupplyDateOrPeriod)",\r
"Šalji poreski period mjesečne fakture (TaxPeriod)",\r
"Šalji valutu računa (Currency)",\r
"samo bez odgovora",\r
"samo firme (PIB)",\r
"Samo plaćanja sa ovih računa se sa izvoda knjiže automatski.",\r
"Samo pregled ispod PR-PDV prijave",\r
"Samo prijave koje čekaju",\r
"Samo prikaz (kao do sada), upozorenje prije izdavanja ili zabrana izdavanja iznad stanja u objektu.",\r
"Samo prikaz stanja",\r
"Samo prikaz stanja (crveno iznad stanja)",\r
"Samo usluge",\r
"Šank",\r
"Šank objekta",\r
"Sastavio",\r
"Sastavio, kontrolisao, knjižio, odgovorno lice i tekst u podnožju izvoza",\r
"Sastojak",\r
"Sastojak „{0}\\" je dva puta u normativu.",\r
"Sastojak „{0}\\" mora biti artikal vrste „materijal\\" ili „gotov proizvod\\" (Artikli → Vrsta). Roba se vodi u trgovačkoj knjizi.",\r
"Sastojak (materijal / poluproizvod)",\r
"Sastojak / proizvod",\r
"Sastojak ne postoji.",\r
"Sastojaka",\r
"sastojaka)",\r
"Sastojci",\r
"Sastojci pića i napitaka koji se razdužuju po normativu pri prodaji",\r
"Sastojci po normativu",\r
"Sati bez troška",\r
"sati po projektu i klijentu",\r
"Sati po radniku",\r
"SATI PO RADNIKU I MJESECU",\r
"Sati su evidentirani.{0}",\r
"Sati su fakturisani (faktura {0}) i ne mijenjaju se. Za izmjenu se faktura stornira ili briše nacrt.",\r
"Sati zaključno sa",\r
"Satnica",\r
"Satnica (EUR, bez PDV)",\r
"Satnica (EUR)",\r
"Satnica nije ispravna.",\r
"Saznanje iz pouzdanih izvora (koji uključuju medije ili druge otvorene izvore podataka) koji ukazuju da je klijent uključen u neke nelegalne aktivnosti.",\r
"sb",\r
"Sedmica (bilo koji dan)",\r
"Sedmica je snimljena: novih unosa {0}, izmijenjeno {1}, obrisano {2}.",\r
"SEK",\r
"Ser. broj / registracija",\r
"Serijski broj / registracija",\r
"sertifikat (ljuska)",\r
"Sertifikat i lozinka",\r
"Sertifikat ističe za manje od 30 dana. Nov sertifikat naručiti prije isteka.",\r
"Sertifikat je istekao {0}.",\r
"Sertifikat na računaru pripada drugoj firmi (PIB {0}).",\r
"Sertifikat za bezgotovinske račune (napredni elektronski potpis za fiskalizaciju, fajl .pfx) izdaju CoreIT i Pošta Crne Gore, na ime firme. Fajl se bira dugmetom „Izaberi .pfx / .p12\\", zatim se upisuje lozinka.",\r
"Sertifikat, kodovi EFI portala, ENU, fiskalna poruka, provjera IKOF-a, zaostali računi",\r
"Sertifikat: {0} {1}",\r
"Server, uloga računara i razmjena",\r
"Servis (radni nalozi): kad je potrebna pisana ponuda.",\r
"Servis: radni nalozi",\r
"šifarnik (zaliha)",\r
"Šifarnik: pravila ugostiteljstva i zajednički katalog barkodova",\r
"Šifra „{0}\\" je zauzeta.",\r
"Šifra (nije obavezna)",\r
"šifra djelatnosti",\r
"Šifra djelatnosti (statistički aneks, obrasci).",\r
"Sirovine, repromaterijal, gorivo, sitan inventar (konto 101 / 103)",\r
"Sistem → O programu",\r
"Sistem → O programu → Dijelovi programa",\r
"Sistem → Povezivanje",\r
"sitan inventar",\r
"Sitan inventar",\r
"SITAN INVENTAR U UPOTREBI",\r
"Sitan inventar, auto-gume i ambalaža na zalihi",\r
"Sitan inventar, auto-gume i ambalaža se pri izdavanju na korišćenje otpisuju u cjelini (Kontni okvir 11/20 čl. 9: D 5121 / P 1030). Evidencija „u upotrebi\\" je ovaj spisak izdatnica sa zaduženim licem ili mjestom.",\r
"Sjedište (adresa i grad, odnosno opština) nije upisano (ZSPNFT čl. 117 st. 1 {0}).",\r
"Skenirana dokumentacija",\r
"Skenove u folderu firme obrisati ručno: {0}",\r
"Skini blokadu",\r
"skinuta: {0}",\r
"Skladištenje i promet kulturnih dobara u lukama i slobodnoj zoni (t. 13 al. 13)",\r
"Slanje {0} faktura kupcima e-poštom (SMTP).{1} Nastaviti?",\r
"Slanje faktura i obrazaca; lozinka ostaje na ovom računaru.",\r
"Slanje osnova nulte stope kasama.",\r
"Slanje tehničkih grešaka izdavaču",\r
"Slanje više faktura odjednom ide preko SMTP servera (Podešavanja → E-pošta); bez njega faktura se šalje pojedinačno (✉).",\r
"Sljedeća strana",\r
"Sljedeci",\r
"Sljedeći pogodak",\r
"Složena",\r
"Složene i neuobičajene transakcije",\r
"Smanjenje baze (za telefon)",\r
"Smanjenje vrijednosti nedovršene proizvodnje",\r
"Smanjenje vrijednosti zaliha nedovršenih i gotovih proizvoda",\r
"Smanjenje zaliha proizvoda (prodaja): {0}",\r
"Smjene po objektima",\r
"Smjene: odsustva i praznici (godišnji, bolovanje, menstrualno, očinsko…)",\r
"Smjer (primljeno ili predato) nije izabran.",\r
"SMTP server, pošiljalac, potpis",\r
"Snimi bonus",\r
"Snimi datum",\r
"Snimi dopunu",\r
"Snimi izmjenu",\r
"Snimi kurs",\r
"Snimi normativ",\r
"Snimi obračun",\r
"Snimi plaćanje",\r
"Snimi radni nalog",\r
"Snimi stopu",\r
"Snimi utuženje",\r
"Snimljeni obračuni",\r
"Snimljeni rezultati ovog obračuna potiču od starijeg pravila (prirez odbijen od neta radnika; prirez je na teret poslodavca i ne umanjuje neto).",\r
"Soft sertifikat i lozinka ostaju na ovom računaru.",\r
"Softver:",\r
"Sopstveni indikator",\r
"Sopstveni indikator {0} je dodat.",\r
"Sopstveni indikator {0} sa drugog računara dobija šifru {1} (šifra je ovdje zauzeta).",\r
"Sopstveni indikatori obveznika",\r
"Sopstveni uvoz (carinske deklaracije)",\r
"Specifikacija sati — prilog fakture",\r
"Specifikacija se izdaje uz račun za izvršenu uslugu ({0} st. 4).",\r
"SPISAK UGOVORA SA KLIJENTIMA",\r
"Spisak visokorizičnih trećih država je prazan.",\r
"spoljni saradnik — bez obračuna zarada",\r
"Sprat / spratnost",\r
"Sprat: {0}",\r
"Spremno za sljedeći QR kod.",\r
"Spremnost za fiskalizaciju",\r
"Srednja alkoholna pića",\r
"Srednji",\r
"Srednji kurs CBCG na dan priliva: jedinica valute za 1 EUR",\r
"Srednji kurs CBCG: jedinica valute za 1 EUR (ZPDV čl. 23 st. 2)",\r
"Srednji kurs Centralne banke Crne Gore (jedinica valute za 1 EUR). Kad lista CBCG nije dostupna, kurs se uzima sa liste ECB posljednjeg radnog dana CBCG; bez oba izvora kurs se upisuje ručno uz napomenu. Preuzet kurs se čuva i ne traži se ponovo.",\r
"St",\r
"Šta se upisuje",\r
"Štampa bez dijaloga za „Štampaj sve\\".",\r
"Štampa dokumenata",\r
"Štampa i izvozi",\r
"Štampa otpremnice bez cijene",\r
"Štampa reversa bez cijene",\r
"Štampač za kalkulacije, automatska štampa, broj kopija",\r
"Štampač, dodatni tekstovi, štampa bez cijene, potpisi, logo i znak",\r
"Štampaj otpremnicu bez cijene",\r
"Štampaj revers bez cijene",\r
"Štampaju se na dnu izabranih dokumenata, redom I, II, III (npr. uslovi isporuke, reklamacije, izjava o porijeklu robe). Prazan tekst se ne štampa.",\r
"Stanje i količine",\r
"Stanje knjiga pri prvom zaključavanju mjeseca (ili zatečeno pri prelasku na verziju 2.7.0) upoređeno sa današnjim, i sva otključavanja sa razlogom.",\r
"Stanje knjiga pri prvom zaključavanju mjeseca upoređeno sa današnjim, i sva otključavanja sa razlogom. Za mjesec zaključan prije verzije 2.7.0 polazište je stanje zatečeno pri prvom otključavanju u 2.7.0.",\r
"Stanje na dan",\r
"Stanje pri prijemu (oštećenja, tragovi)",\r
"Stanje pri prvom zaključavanju i danas; otključavanja sa razlogom",\r
"Stanje računa",\r
"Stanje ugovora:",\r
"Stanje za Menadžer je upisano ({0}).",\r
"Stanje za Menadžer nije upisano: {0}.",\r
"Stara VP cijena bez PDV",\r
"Starost",\r
"Starost objekta",\r
"STAROST POTRAŽIVANJA",\r
"Status nepokretnosti nije poznat.",\r
"Status ponude",\r
"Status ponude je snimljen.",\r
"Status ponude: poslata, prihvaćena ili odbijena.",\r
"Status projekta: aktivan, završen ili obustavljen.",\r
"Status se vodi samo za ponude.",\r
"Status ugovora: aktivan, raskinut ili istekao.",\r
"Stavka „{0}\\": cijena nije ispravna.",\r
"Stavka „{0}\\": količina mora biti veća od nule.",\r
"Stavka „{0}\\": stopa PDV-a 21, 15, 7 ili 0 %.",\r
"Stavka „{0}\\": stopa PDV-a je 21, 15, 7 ili 0 %.",\r
"Stavka „{0}\\": vrsta je rad, dio ili materijal.",\r
"Stavka je uklonjena sa nivelacije.",\r
"Stavka ne pripada kalkulaciji.",\r
"Stavke (cijena bez PDV u",\r
"Stavke fakture",\r
"Stavki koje traže pažnju: {0}",\r
"Stavki koje čekaju i odgovaraju ovom pravilu:",\r
"Stopa — poreski suverenitet (%)",\r
"Stopa (% godišnje)",\r
"Stopa ECB (MRO, %)",\r
"Stopa je obrisana.",\r
"Stopa je snimljena.",\r
"Stopa mora biti broj (0 ili veći).",\r
"Stopa na dan",\r
"stopa nije potvrđena",\r
"stopa nije upisana",\r
"Stopa PDV-a: 21, 15, 7 ili 0 %.",\r
"Stopa po ugovoru (%)",\r
"Stopa po ugovoru o izbjegavanju dvostrukog oporezivanja nije ispravna.",\r
"Stopa poreza po odbitku nije ispravna.",\r
"Stopa poreza po odbitku, povlašćena stopa, države sa stopom 30 %.",\r
"Stopa se utvrđuje za svako polugodište: referentna stopa Evropske centralne banke za glavne operacije refinansiranja koja važi prvog dana polugodišta, uvećana za 8 procentnih poena. Objavljuje je Centralna banka Crne Gore prvog radnog dana polugodišta. Obračun za period bez unesene stope se ne pravi.",\r
"Stopa za {0} je snimljena.",\r
"Stopa za teritorije sa poreskim suverenitetom nije ispravna.",\r
"Stopa zatezne kamate CBCG za {0} nije unesena",\r
"Stopa zatezne kamate mora biti veća od 0 i manja od 100 %.",\r
"Stopa zatezne kamate se unosi po polugodištu: od 01.01. ili od 01.07.",\r
"Stopa zatezne kamate za period od {0} nije unesena.",\r
"Stope CBCG po polugodištima, dani za predlog opomene, naknade B2B.",\r
"Stope i države",\r
"Stope nisu upisane.",\r
"Stope zatezne kamate",\r
"Stope zatezne kamate i opomene",\r
"Stope zatezne kamate po polugodištima, opomene",\r
"Stornirati obračun {0}? Period ovog obračuna se može ponovo obračunati.",\r
"Stornirati radni nalog? Nalog bez potvrđenih dokumenata se stornira.",\r
"Storno naloga",\r
"Storno nije moguć: „{0}\\" je već izdat (stanje bi na dan {1} bilo {2}).",\r
"Storno računa s greškom",\r
"Storno radnog naloga",\r
"Storno uklanja promet dokumenta iz zaliha i nalog iz glavne knjige.",\r
"Storno ulaznog PDV-a {0} %",\r
"Storno unos je upisan.",\r
"Storno unos se ne stornira.",\r
"storno unosa {0}",\r
"Storno unosa {0}",\r
"Storno unosa…",\r
"Strana {0} od {1}",\r
"Strana {0}/{1}",\r
"strana veleprodaje bez PDV",\r
"Stručno osposobljavanje i usavršavanje zaposlenih",\r
"Stručno osposobljavanje zaposlenih",\r
"Struktura",\r
"Struktura: {0}",\r
"Strukturirani depoziti (izvjesno je planski vršeno deponovanje gotovog novca u određenim iznosima, periodično, od strane različitih lica kako bi se izbjeglo lako uočavanje) koji se koriste kao garancija za kredit, deponovanje velikih iznosa novca koji su uplaćeni u istim velikim novčanim apoenima ili sitnim apoenima.",\r
"Stvarni utrošak",\r
"stvarni vlasnici",\r
"Stvarni vlasnici",\r
"Stvarni vlasnik",\r
"Stvarni vlasnik je politički eksponirano lice.",\r
"Stvarni vlasnik klijenta je strano fizičko lice državljanin \\"poreskog raja\\", odnsono visoko-rizične treće države, dok se iz opšteg poslovanja stiče utisak da je stvarni vlasnik neko domaće fizičko lice.",\r
"Stvarni vlasnik nije upisan.",\r
"Stvarnih vlasnika",\r
"Stvarno pravo",\r
"Stvarno stanje prema knjižnom na dan: višak (674) i manjak (574).",\r
"substr(COALESCE(k.DatumFakture, k.DatumDokumenta, ''),1,10)",\r
"Suma po slučaju",\r
"Suma za godinu",\r
"Sumnjiva",\r
"Sumnjiva transakcija",\r
"Sumnjiva transakcija — {0}",\r
"Sumnjiva transakcija je upisana; podaci se dostavljaju FOJ-u do {0}",\r
"Sumnjiva transakcija se upisuje dugmetom „Sumnjiva transakcija\\" (sa razlozima i indikatorima).",\r
"Svaka firma ima svoj sertifikat i lozinku",\r
"Svaka kalkulacija iz skena odmah ide na štampač.",\r
"Svaka stavka se provjerava iz podataka. Upozorenje koje je u redu (npr. račun bez prometa) potvrđuje se ručno; potvrda pamti ko je i kada potvrdio.",\r
"Svaka uloga šeme ima konto iz kontnog plana.",\r
"Sve izmjene i dopune ugovora važe samo u pisanoj formi. Sporove strane rješavaju sporazumno, a u suprotnom nadležni sud u Crnoj Gori.",\r
"sve kupce (skala / dodatni)",\r
"sve transakcije su proknjižene ili razvrstane",\r
"Sve uloge imaju ispravno konto.",\r
"svi artikli",\r
"svi kupci",\r
"svi kupci-firme",\r
"Svi magacini",\r
"Svi obavezni elementi su upisani.",\r
"svi unosi",\r
"Svrha i namjena",\r
"svrha odnosa",\r
"Svrha, namjena i priroda odnosa",\r
"t.KljucRacuna NOT IN ({0})",\r
"t.Status='ceka' AND t.Napomena LIKE ?",\r
"Tarifna oznaka",\r
"Tarifna oznaka se upisuje ciframa (4–10 cifara, npr. 22030001).",\r
"TAX",\r
"Tekst indikatora iz Pravilnika se ne mijenja; firma dodaje sopstveni indikator.",\r
"Tekst koji nov predračun (ponuda) dobija u polju Napomena.",\r
"Tekst koji nov revers dobija u polju Napomena.",\r
"Tekst koji nova faktura dobija u polju Napomena.",\r
"Tekst oglasa",\r
"Tekst u podnožju svake strane izvoza (npr. napomena o obradi podataka).",\r
"Tekst u podnožju svake strane izvoza (PDF).",\r
"Tekstovi na dokumentima",\r
"tekuci racun",\r
"Tereti",\r
"Tereti i upisana prava (napomena)",\r
"Test (efitest.tax.gov.me) — izdati računi nisu važeći fiskalni računi.",\r
"Test okruženje i firma u sistemu PDV-a",\r
"tip kupca",\r
"Tip transakcije nije sa spiska.",\r
"Trajna podešavanja nijesu dostupna.",\r
"Trajni backup i izvoz kopije baze",\r
"Trajni backup, izvoz kopije, arhiva godine, smanjenje baze",\r
"Trajni backup, kopija baze, arhiva godine, veličina baze",\r
"transakcija {0} EUR uključuje visokorizičnu treću državu ({1})",\r
"Transakcija izvoda depozitnog računa",\r
"Transakcija izvoda je već vezana za drugi unos depozita.",\r
"Transakcija je upisana (praćenje poslovanja klijenta). Obaveza dostave FOJ-u po iznosu ne postoji.",\r
"Transakcija je upisana u evidenciju složenih i neuobičajenih transakcija.",\r
"Transakcija je upisana. {0}",\r
"Transakcija je već izvršena",\r
"Transakcija klijenta",\r
"Transakcija koju klijent obavlja nije u skladu sa njegovom uobičajenom poslovnom praksom.",\r
"Transakcija se ne izvršava do dostave podataka FOJ-u (ZSPNFT čl. 66 st. 6–7).",\r
"Transakcija se provjerava prema pragovima za dostavu podataka FOJ-u (vrsta obveznika i pragovi: kartica Analiza rizika). Sumnjiva transakcija se upisuje u kartici Transakcije i prijave FOJ-u.",\r
"Transakcije banke",\r
"Transakcije banke proknjižene i razvrstane",\r
"Transakcije gdje klijent zahtijeva plaćanje koje se sastoji od više manjih uplata, koje u zbiru čine cijenu nepokretnosti (usitnjavanje), naročito ako se radi o nekretninama velike vrijednosti i ako postoje saznanja da su ugovorne strane povezane sa nelegalnim ili kriminalnim aktivnostima.",\r
"Transakcije i prijave FOJ-u",\r
"Transakcije koje dolaze iz država koje se nalaze na \\"crnoj listi\\", koje ne primjenjuju propise iz oblasti sprečavanja pranja novca ili finansiranja terorizma i gdje postoji visok rizik od pranja novca, bez obzira na to da li klijent dolazi iz tih država.",\r
"Transakcije sa pravnim licima čiji identitet stvarnih vlasnika je teško utvrditi.",\r
"Transakcije za koje su zaposleni kod obveznika (u daljem tekstu: obveznik) na osnovu iskustva, znanja i informacija kojima raspolažu, ocijenili da nijesu u skladu sa uobičajenim aktivnostima klijenta",\r
"Traži podešavanje (npr. žiro račun, štampač, decimale, napomena)",\r
"Traži u svim redovima",\r
"TRB",\r
"TREBOVANJE — IZDATNICA MATERIJALA",\r
"Trebovanje {0}",\r
"Trebovanje / izdatnica",\r
"Trebovanje i izdatnica smiju preći stanje magacina.",\r
"Trebovanje i izdatnica smiju preći stanje.",\r
"Trebovanje iz Menadžera {0}",\r
"Trebovanje materijala",\r
"Trebovanje ne može biti prije datuma radnog naloga.",\r
"Trebovanje po normativu za {0} — {1}",\r
"Trebovanje šanka / kuhinje",\r
"Trebovanje za količinu",\r
"Trebovanje, izdatnica i povratnica materijala smiju preći stanje magacina (stanje u minusu).",\r
"Trebovanje, izdatnica i povratnica materijala. Isto podešavanje kao Materijal → Podešavanja i artikli.",\r
"Trebovanje, utrošak i prenos materijala",\r
"Trebovao",\r
"Trebuj po normativu",\r
"Trgovačka knjiga za {0}. je zaključena i pripremljena za ovjeru. Prebacivanje fakture iz {1}/{2} u troškove nije moguće bez poništavanja zaključenja knjige (Trgovačka knjiga → „Poništi zaključenje {3}.\\").",\r
"Trgovina → Apoteka",\r
"Trgovina → Artikli",\r
"Trgovina → Cjenovnik → Kase i objekti",\r
"Trgovina → Cjenovnik → PDV",\r
"Trgovina → Otpis",\r
"Trgovina → Revers",\r
"trošak",\r
"Trošak „{0}\\"{1} od {2} na isti iznos",\r
"Trošak „{0}\\"{1} od {2} na isti iznos je upisan kao plaćen gotovinom i već je knjižen na blagajnu. Ista isplata se ne unosi ponovo kroz blagajnu.",\r
"Trošak (bez kalkulacije)",\r
"trošak {0}",\r
"Trošak iz „Nabavka i troškovi\\" sa ovim dobavljačem (račun bez kalkulacije)",\r
"Trošak iz ovog računa ulazi u knjige ove firme, a ulazni PDV u PR-PDV. Upisati trošak?",\r
"Trošak je unesen prije verzije 2.7.5 bez načina plaćanja i nije u dugu dobavljaču (saldo, otvorene stavke, IOS). Oznaka „dug\\" ga uvodi u dug; plaćanja se vežu na ekranu Obaveze.",\r
"Trošak je upisan kao dug dobavljaču.",\r
"Trošak je upisan: {0}, račun {1}, {2} EUR.",\r
"Trošak je već plaćen",\r
"Trošak nema dobavljača iz šifarnika, pa nije dug dobavljaču.",\r
"Trošak nije upisan: {0}",\r
"Trošak nije upisan.",\r
"Trošak plaćen gotovinom (blagajna)",\r
"Trošak plaćen karticom (tekući račun)",\r
"Trošak rada",\r
"Trošak se knjiži i kao isplata iz blagajne. Ista isplata se ne unosi ponovo u blagajnu.",\r
"Trošak se knjiži i kao plaćanje sa tekućeg računa. Transakcija kartice na izvodu se ne razvrstava kao plaćanje dobavljaču.",\r
"trošak stranog dobavljača",\r
"Trošak: {0}",\r
"Troškovi dodatnih usluga (izričito ugovoreni, čl. 27 st. 4): {0}.",\r
"Troškovi dodatnih usluga (samo ako su izričito ugovoreni)",\r
"Troškovi dodatnih usluga nisu ugovoreni.",\r
"Troškovi sitnog inventara (otpis pri izdavanju)",\r
"TRY",\r
"Tržišni",\r
"Tužba je podnesena prije otvaranja stečajnog postupka nad kupcem (Zakon o PDV čl. 20a).",\r
"U {0}. i kasnije postoje potvrđeni izlazi ({1}). Metoda se mijenja od 01.01. naredne godine bez izlaza (promjena računovodstvene politike).",\r
"U / dobavljač",\r
"U EUR (PDV",\r
"U godini nema evidentiranih prigovora.",\r
"U godini nema zaključanih mjeseci.",\r
"U klijentovom poslovanju pojavljuju se velike i neobjašnjive oscilacije u prihodima i/ili rashodima, odnosno neuobičajeno i neobjašnjivo visoki prihodi u odnosu na rashode.",\r
"U periodu nema prodaje artikala sa normativom ni gotovih proizvoda.",\r
"U periodu nema prodaje artikala sa normativom.",\r
"u potpunosti",\r
"U PR-PDV prijavu (polja 10–12 i 16–18)",\r
"U prilogu se nalazi avansni račun {0}.",\r
"U prilogu se nalazi izvod otvorenih stavki{0}. Molimo da potvrdite saglasnost sa iskazanim stanjem ili dostavite primjedbe u roku od 8 dana.",\r
"U prilogu se nalazi knjižno odobrenje {0}.",\r
"U prilogu se nalazi obračun zatezne kamate {0} sa specifikacijom po fakturama i periodima.",\r
"U prilogu se nalazi opomena {0} za fakture kojima je istekao rok plaćanja. Molimo da dug izmirite u roku navedenom u opomeni. Ako je plaćanje već izvršeno, molimo da dostavite podatke o uplati.",\r
"u radu",\r
"U ratama",\r
"u ravnoteži",\r
"u roku",\r
"u roku od 8 dana od zaključenja pravnog posla",\r
"U sertifikatu nije PIB firme {0} (u sertifikatu: {1}).",\r
"U šifarniku",\r
"U šifarniku već postoji artikal „{0}\\".",\r
"U šifarniku već postoji artikal „{0}\\"{1}.",\r
"ub",\r
"Učešće %",\r
"Ucestalost",\r
"Učestalost",\r
"Učestalost fakturisanja: mjesečno, kvartalno ili godišnje.",\r
"Udio",\r
"Udio (%)",\r
"Udio kalkulacije mora biti veći od nule.",\r
"Udio stvarnog vlasnika je od 0 do 100 %.",\r
"UG-{0}-{1}",\r
"UG-{0}-%",\r
"Ugovor (država, član)",\r
"ugovor {0}",\r
"Ugovor {0}",\r
"Ugovor {0} je obrisan.",\r
"Ugovor {0}, period {1}.",\r
"Ugovor broj {0} već postoji.",\r
"Ugovor ima stavke sa 0 % PDV. Potrebno je izabrati osnov (čl. 25, 26, 27 ili 17 Zakona o PDV), koji se štampa na fakturi.",\r
"ugovor ističe",\r
"ugovor ističe — produženje ili nov ugovor",\r
"Ugovor je istekao {0} Otkaz nije moguć: ugovor je prestao istekom vremena na koje je zaključen (Zakon o posredovanju, čl. 19).",\r
"Ugovor je izmijenjen.",\r
"Ugovor je obrisan.",\r
"Ugovor je prestao i ne produžava se; zaključuje se nov ugovor.",\r
"Ugovor je produžen.",\r
"Ugovor je sačinjen u dva istovjetna primjerka, po jedan za svaku stranu.",\r
"Ugovor je snimljen.",\r
"Ugovor je već otkazan {0}",\r
"Ugovor mora imati bar jednu stavku.",\r
"Ugovor mora imati kupca.",\r
"Ugovor ne postoji.",\r
"Ugovor nema stavki.",\r
"Ugovor nije aktivan ({0}).",\r
"ugovor o djelu",\r
"Ugovor o izbjegavanju dvostrukog oporezivanja",\r
"ugovor o izbjegavanju dvostrukog oporezivanja, ZPDPL čl. 29a ({0} %)",\r
"Ugovor o posredovanju",\r
"Ugovor o posredovanju {0}",\r
"Ugovor o posredovanju {0} ističe",\r
"Ugovor o posredovanju {0} je zaključen i na drugom računaru; ovdašnji ugovor dobija broj {1}.",\r
"Ugovor o posredovanju {0} sa drugog računara dobija broj {1} (broj je ovdje već zauzet ranijim ugovorom).",\r
"Ugovor o posredovanju {0}; kapara zadržana {1}",\r
"Ugovor o posredovanju i dokumenta vezana za ugovor",\r
"Ugovor o posredovanju je snimljen i upisan u evidenciju.",\r
"Ugovor o posredovanju koji predviđa naplatu iz kapare",\r
"Ugovor o posredovanju ne sadrži obavezne elemente (Zakon o posredovanju, čl. 18 st. 2): {0}.",\r
"Ugovor o posredovanju nije izabran.",\r
"Ugovor o posredovanju se čuva deset godina od zaključenja (Pravilnik 45/26, čl. 5 st. 2); brisanje je moguće od {0}",\r
"Ugovor sadrži sedam obaveznih elemenata (čl. 18 st. 2).",\r
"ugovor se automatski produžava",\r
"Ugovor se zaključuje {0} na određeno vrijeme do {1} i može se produžiti (čl. 19).",\r
"Ugovor važi do upisanog datuma (čl. 19); promjena se upisuje u evidenciju o posredovanju.",\r
"Ugovor: otkazni rok prije isteka",\r
"Ugovor: rok važenja",\r
"ugovoreno {0} {1}",\r
"ugovoreno {0} od cijene",\r
"Ugovori i ponavljajuće fakture",\r
"Ugovori i ponavljajuće fakture → Plan fakturisanja",\r
"Ugovori kojima je istekao rok čuvanja od deset godina:",\r
"Ugovori o posredovanju",\r
"UGOVORI O POSREDOVANJU",\r
"Ugovori sa klijentima · periodično fakturisanje (mjesečno, kvartalno, godišnje) · rokovi važenja ugovora",\r
"Ugovori sa klijentima, periodično fakturisanje (mjesečno, kvartalno, godišnje) i rokovi važenja ugovora.",\r
"Ugovori: periodi za fakturisanje — {0}",\r
"ugovorna cijena · {0}",\r
"Ugovorna cijena je uklonjena.",\r
"Ugovorna cijena je upisana.",\r
"ugovorna cijena{0}{1}",\r
"Ugovorne cijene",\r
"UI",\r
"ukalkulisana RUC pošiljaoca",\r
"ukalkulisana RUC primaoca",\r
"Uključenje fiskalizacije na ovom računaru.",\r
"uključeno u polja 10–12 i 16–18.",\r
"Uključuju se ručno, po potrebi firme. Podaci se ne brišu kad se evidencija isključi.",\r
"Ukloni stavku",\r
"Ukloniti „{0}\\" sa spiska dokumentacije klijenta? Fajl ostaje u folderu.",\r
"UKnjigama",\r
"Ukloniti akciju „{0}\\"?",\r
"Ukloniti cijenu artikla „{0}\\" iz cjenovnika?",\r
"Ukloniti objekat isporuke „{0}\\"? Objekat korišćen na otpremnici postaje neaktivan.",\r
"Ukloniti rabat?",\r
"Ukloniti ugovornu cijenu „{0}\\" za {1}?",\r
"Ukupna vrijednost razlike:",\r
"Ukupna vrijednost:",\r
"Ukupno ({0})",\r
"Ukupno nedovršeno:",\r
"Ukupno prigovora: {0}. Odgovoreno: {1}. Bez odgovora: {2}.",\r
"ukupno sa PDV-om",\r
"Ukupno unosa: {0}.",\r
"Ulaz (kalkulacije)",\r
"Ulaz od dobavljača po fakturi: nabavna cijena = fakturna + zavisni troškovi. Faktura ide u obaveze, KPR i PR-PDV.",\r
"Ulaz proizvoda iz radnog naloga po cijeni koštanja (bez ručnog upisa cijene).",\r
"Ulazni računi imaju kalkulaciju sa stavkama",\r
"Ulica i broj",\r
"Uloga nije sa spiska.",\r
"Uloga ovog uređaja (računar u kancelariji / telefon)",\r
"Uloga ovog uređaja, naziv, korisnik, marža za skenove iz Menadžera",\r
"Uloga uređaja, server i razmjena, e-pošta, pošta, ažuriranje",\r
"Umanjen PDV",\r
"Umanjenje fakture FZO za softver.",\r
"Unaprijed",\r
"unaprijed (period koji počinje)",\r
"Unesi stopu",\r
"Unesi u {0}",\r
"unijeti stopu (Podešavanja → Zatezna kamata i opomene)",\r
"Unos {0} evidencije o posredovanju je napravljen i na drugom računaru; ovdašnji unos dobija redni broj {1}.",\r
"Unos {0} evidencije o posredovanju sa drugog računara dobija redni broj {1} (broj je ovdje već zauzet ranijim unosom).",\r
"Unos {0} je interni (ne fakturiše se).",\r
"Unos {0} je već fakturisan (faktura {1}).",\r
"Unos {0} je već storniran.",\r
"Unos {0} nema satnicu.",\r
"Unos depozita",\r
"Unos depozita je obrisan.",\r
"Unos depozita je snimljen.",\r
"Unos depozita je snimljen. {0}.",\r
"Unos evidencije {0}",\r
"Unos je nastao iz dokumenta {0} (Materijal: prijem i izdavanje). Uklanja se stornom tog dokumenta.",\r
"Unos je upisan u evidenciju.",\r
"Unos nastaje dugmetom „Uvid nadzornog organa\\" (kartica Transakcije i prijave FOJ-u).",\r
"Unos ne čeka dostavu FOJ-u.",\r
"Unos ne postoji.",\r
"Unos o obuci ne postoji.",\r
"Unos plaćanja dobavljaču",\r
"Unos sati",\r
"Unos sati je izmijenjen.",\r
"Unos sati je obrisan.",\r
"Unos sati ne postoji.",\r
"Unosa",\r
"Unosi bez podatka 6 (agent):",\r
"Unosi nastaju pri svakom upisu i izmjeni podataka klijenta i pri upisu transakcije.",\r
"Unosi nastaju u kartici Transakcije i prijave FOJ-u.",\r
"UP-{0}-{1}",\r
"Upamćen račun primaoca",\r
"Upis prigovora klijenta u Knjigu prigovora, sa vezom na ovaj nalog",\r
"Upis u Registar posrednika",\r
"Upis u Registar posrednika: rok",\r
"upis ugovora",\r
"Upisani podaci se ne mijenjaju; odgovor se može dopuniti, a kontakt potrošača izmijeniti.",\r
"Upisano cijena: {0} (postojeće cijene nisu mijenjane).",\r
"Upisano je da je opomena poslata poštom.",\r
"upisano poslije roka od {0} dana (promjena {1})",\r
"Upisano u evidenciju: {0}.{1}",\r
"Upisao",\r
"Upisati bar dva slova naziva.",\r
"Upisati dobavljača „{0}\\" u šifarnik?",\r
"Upisati dostavu FOJ-u {0}? Poslije upisa prijava se više ne mijenja.",\r
"Upisati nabavne cijene iz valute u kalkulaciju?",\r
"Upisati otkaz ugovora {0} na dan {1}?",\r
"Upisati razlog odbijanja.",\r
"Upisati storno unosa {0}? Storno je nov trajan unos u evidenciji o posredovanju.",\r
"Upisati trošak „{0}\\" kao dug dobavljaču (plaćanje virmanom)?",\r
"Upisati zaključen pravni posao po ugovoru {0}: {1}, cijena {2} EUR?",\r
"Upisati zašto se povrat zatvara bez knjižnog odobrenja (npr. zamjena robe).",\r
"Upiši akciju",\r
"Upiši cijenu",\r
"Upiši dostavu",\r
"Upiši kao dug",\r
"Upiši kupce",\r
"Upiši otkaz",\r
"Upiši preuzimanje",\r
"Upiši pristanak",\r
"Upiši promjene u evidenciju",\r
"Upiši rabat",\r
"Upiši račun",\r
"Upiši saglasnost danas",\r
"Upiši storno",\r
"Upiši transakciju",\r
"Upiši trošak",\r
"Upiši zaključen posao",\r
"Upisuje",\r
"Uplaćen porez",\r
"Uplata / isplata",\r
"Uplata i faktura pripadaju različitim kupcima.",\r
"Uplata i obračun kamate pripadaju različitim kupcima.",\r
"Uplata ili faktura ne postoji.",\r
"Uplata ili obračun kamate ne postoji.",\r
"Uplata je razvezana od obračuna.",\r
"Uplata je već evidentirana u valuti; kursna razlika se obračunava iz veze.",\r
"Uplata je vezana i za druge fakture. Kursna razlika se zatvara za uplatu koja plaća samo ovu fakturu.",\r
"Uplata je vezana i za obračun kamate.",\r
"Uplata je vezana za obračun kamate.",\r
"Uplata kupca kojom je plaćena kamata i naknada (zatvara potraživanje za kamatu)",\r
"Uplata na fakturi (virman) i podatak za fiskalizaciju.",\r
"Uplata od {0} ({1}) vezana za obračun kamate još nije primljena.",\r
"Uplata poreza",\r
"uplate {0}",\r
"Uplate, prilivi sa izvoda, depoziti i pravni poslovi klijenata iz registra se provjeravaju prema pragovima iz čl. 66; kad je prag dostignut, prijava se pojavljuje ovdje sa rokom. Dostava ide kroz aplikaciju FOJ-a uz kvalifikovani elektronski potpis; program daje pregled podataka i bilježi datum dostave.",\r
"Upozorenje kad zaliha padne ispod minimuma.",\r
"upozorenje prije izdavanja",\r
"Upozori prije izdavanja",\r
"UPPER(REPLACE(REPLACE(REPLACE(REPLACE(COALESCE({0}.PIB,''),' ',''),'-',''),'.',''),'/',''))=?",\r
"Uprava carina",\r
"Upravljanje imovinom za treća lica (t. 13 al. 4)",\r
"uređaj",\r
"Uređaj je primljen radi utvrđivanja kvara i popravke. Za popravku čija je vrijednost veća od {0} € klijentu se izdaje pisana ponuda sa specifikacijom radova, materijala i djelova; popravka počinje po prihvatanju ponude.",\r
"Uređaj preuzet{0}, ispravan, sa predatom opremom.",\r
"Uređaj se preuzima uz ovu prijemnicu. {0}.",\r
"USD",\r
"Usklađenost",\r
"Usklađenost (ZSPNFT)",\r
"Usklađenost → Analiza rizika",\r
"Usklađenost → Lista indikatora",\r
"Usklađenost → Ovlašćeno lice i obuke",\r
"Usklađenost → Rokovi čuvanja",\r
"Uslov",\r
"Uslovi isporuke, reklamacije, izjave — na računu, predračunu, otpremnici, reversu.",\r
"Uslovi su ispunjeni. Okruženje: produkcija.",\r
"Uslovi su ispunjeni. Okruženje: test.",\r
"Uslovi za izdavanje fiskalizovanih faktura za ovu firmu. Uz svaki neispunjen uslov stoji šta je potrebno uraditi.",\r
"usluga",\r
"Usluga „{0}\\" je dodata u šifarnik.",\r
"Usluga / artikal",\r
"Usluga DESC,",\r
"Usluga nema zalihu ni razduženje; barkod nije potreban. Na izlaznoj fakturi ide na prihod od usluga.",\r
"Usluga nema zalihu ni razduženje; na fakturi ide na prihod od usluga.",\r
"Usluga nema zalihu ni razduženje; na fakturi ide na prihod od usluga. Materijal, gotov proizvod i sitan inventar vodi materijalno knjigovodstvo (magacini).",\r
"usluga stranog lica",\r
"Usluga stranom poreskom obvezniku sa mjestom prometa van Crne Gore (Zakon o PDV čl. 17 st. 2) — osnov „čl. 17\\" na fakturi. Pravila su podesiva do odgovora Poreske uprave; zaključan mjesec zadržava pravila iz trenutka zaključavanja.",\r
"Usluge (IT, agencije, konsalting, servisi, zakup)",\r
"Usluge → Nekretnine",\r
"Usluge → Usklađenost (ZSPNFT)",\r
"Usluge osnivanja pravnih lica, poslovne i fiducijarne usluge (t. 13 al. 3)",\r
"Usluge po evidenciji radnih sati za period {0}. Specifikacija sati je prilog računa.",\r
"Usluge po satu — {0}, {1}",\r
"Usluge, poslovni odnosi i transakcije",\r
"usmeno (do praga pisane ponude)",\r
"Uspostavljanje poslovnog odnosa",\r
"usvojena {0}",\r
"UTR",\r
"Utrošak po normativu",\r
"UTROŠAK PO NORMATIVU",\r
"Utrošak po normativu {0}",\r
"Utužena potraživanja i ispravka PDV-a",\r
"Utuženje i ispravka PDV-a se upisuju na fakturi (klik na fakturu u spisku otvorenih faktura).",\r
"Utuženje je obrisano.",\r
"Utuženje je upisano.",\r
"Utuženje se upisuje samo za izdatu fakturu.",\r
"Utuženo",\r
"Utuženo potraživanje i ispravka PDV-a",\r
"Uvezeno: {0}, {1} stavki, {2} EUR (zbirno, {3}).",\r
"Uvezeno: {0}, {1} stavki, {2} EUR.",\r
"Uvid je upisan u evidenciju. {0}",\r
"uvid nadzornog organa",\r
"Uvid nadzornog organa",\r
"Uvjerenja ljekara za menstrualno odsustvo za {0}. godinu (radnica: {1})",\r
"Uvoz",\r
"Uvoz iz Excela",\r
"Uvoz izvoda iz pošte",\r
"Uvoz, akcize i bonusi",\r
"Uvoz je završen: novih {0}, izmijenjenih {1}, bez promjene {2}, preskočeno zbog greške {3}.{4}",\r
"Uvoz kupaca - predlozak ({0}).xlsx",\r
"Uz odgovor se upisuje datum odgovora.",\r
"Uz račun se izdaje specifikacija izvršenih radova, korišćenog materijala i djelova.",\r
"valuta (dana)",\r
"Valuta nije ispravna.",\r
"valuta placanja",\r
"Valuta se upisuje troslovnom oznakom ISO 4217 (npr. USD, GBP, CHF).",\r
"Valuta se upisuje troslovnom oznakom ISO 4217 (USD, GBP, CHF…); EUR nije devizna.",\r
"Valuta, IBAN, napomena u poruci.",\r
"van Crne Gore",\r
"važi",\r
"Važi do (prazno = neodređeno)",\r
"Važi na dan",\r
"Važi samo za ovaj računar",\r
"važi samo za ovaj računar (uređaj, sertifikat, štampa, jezik).",\r
"Važi za",\r
"Važi za firmu na svim računarima",\r
"važi za firmu na svim računarima (podaci firme putuju razmjenom ili snimkom glavnog računara) ·",\r
"već postoji (povezan)",\r
"Već realizovano",\r
"veleprodaja bez PDV",\r
"Veleprodaja: grupa, region, kanal, komercijalista, kreditni limit, blokada isporuke, objekti isporuke · uvoz kupaca iz Excela",\r
"Veleprodajna cijena bez PDV pošiljaoca (crveni storno u evidenciji EV)",\r
"Veleprodajna cijena bez PDV primaoca (interna kalkulacija, zaduženje u evidenciji EV)",\r
"veleprodajne",\r
"Veleprodajni cjenovnici",\r
"Veleprodajni podaci kupca: grupa, region, kanal, komercijalista, kreditni limit, rok plaćanja i rabat, VP cjenovnik, objekti isporuke i blokada isporuke. Provjera limita i blokade pri otpremnici i fakturi; isti podaci idu kasama i Menadžeru.",\r
"veleprodajnoj pošiljaoca bez PDV",\r
"veleprodajnoj primaoca bez PDV",\r
"veleprodajnu cijenu primaoca",\r
"Veliki broj prenosa novčanih sredstava između nekoliko pravnih ili fizičkih lica koji se realizuju sistematski, po sumnjivim osnovima upotrebom računa samo kao prolaznih i tzv. escrow računa.",\r
"Verzija {0} je povučena. Čeka se sljedeća verzija.",\r
"Veza je poništena; raspored zavisnih troškova kalkulacije je poništen i ponavlja se po potrebi.",\r
"Veza je poništena.",\r
"Veza je uklonjena; povrat ponovo čeka knjižno odobrenje.",\r
"Veza sa kasama IRIS CORVINA, uvoz zaključaka.",\r
"Veza sa programom Menadžer.",\r
"video zapis",\r
"Video-audio zapis (putanja fajla)",\r
"Video-elektronska identifikacija",\r
"Vidi se na skenovima i u dnevniku unosa.",\r
"Virman (dug dobavljaču)",\r
"virmanom na račun posrednika",\r
"Višak",\r
"višak {0}",\r
"Višak po popisu {0}",\r
"Višak: {0}",\r
"Više transakcija kupoprodaje nepokretnosti koje vrši grupa fizičkih i/ili pravnih lica (nevladina, humanitarna, vjerska ili druga neprofitna organizacija) za koje se pretpostavlja da su umiješana u neke nedozvoljene radnje, a postoje sazanja da izvori novca za plaćanja potiču od nesrodnih lica.",\r
"Više unosa za dan — izmjena u spisku unosa",\r
"Visok",\r
"Visokorizična država (EUR)",\r
"Visokorizične treće države (ISO, odvojene zarezom)",\r
"Vlasnik",\r
"Vlasnik / nalogodavac",\r
"Vlasnik klijenta je firma ili fizičko lice registrovano u \\"poreskom raju\\", državi preko koje se obavlja promet narkoticima ili državi u kojoj nije pravno regulisana oblast sprečavanja pranja novca i finansiranja terorizma, dok se iz opšteg poslovanja stiče utisak da je pravi vlasnik neko domaće fizičko lice.",\r
"Vlasnik klijenta je firma registrovana u \\"poreskom raju\\", državi koja se dovodi u vezu sa proizvodnjom i prometom narkoticima ili državi u kojoj nije pravno regulisana oblast sprečavanja pranja novca i finansiranja terorizma.",\r
"VP cijena pošiljaoca bez PDV",\r
"VP cijena primaoca bez PDV",\r
"VP cjenovnik",\r
"VP cjenovnik grupe",\r
"Vr. manjka",\r
"Vr. viška",\r
"vraćanja",\r
"Vraćanje materijala dobavljaču: izlaz po cijeni zalihe, faktura sa minusom (umanjenje obaveze i ulaznog PDV-a).",\r
"vraćeno jelo / piće",\r
"Vrati podrazumijevani tekst",\r
"Vratio",\r
"Vrednovanje izlaza",\r
"Vrednovanje izlaza zaliha (FIFO / prosjek)",\r
"Vrednovanje izlaza zaliha materijala i gotovih proizvoda (",\r
"Vrijednost ponuđene nepokretnosti je velika, a klijent daje nelogične odgovore o načinima plaćanja te nepokretnosti, odnosno raspituje se da se transakcije isključivo obave u gotovom novcu ili kombinovano sa nepouzdanim izvorima plaćanja.",\r
"Vrijednost popravke je {0} €, veća od {1} €: potrebna je pisana ponuda sa specifikacijom radova, materijala i djelova koju potpisuju servis i klijent ({2} st. 1 i 3). Izdati ponudu za povećan iznos ili upisati pristanak potpisom ponude.",\r
"Vrijednost popravke je {0} €, veća od {1} €: prije pristanka se izdaje pisana ponuda sa specifikacijom radova, materijala i djelova ({2} st. 1).",\r
"Vrijednost popravke je veća od",\r
"Vrijednost popravke je veća od {0} €: potrebna je pisana ponuda sa specifikacijom radova, materijala i djelova ({1} st. 1).",\r
"Vrijednost predatog",\r
"Vrijednost robe",\r
"Vrijednosti iz zakona: pisana ponuda za popravku čija je vrijednost sa PDV-om veća od 50,00 €; nov pisani pristanak klijenta za povećanje cijene veće od 10 %. Mijenjaju se samo uz izmjenu propisa.",\r
"Vršenje transakcije",\r
"Vrsta akcize",\r
"Vrsta artikla je snimljena.",\r
"Vrsta artikla nije sa spiska.",\r
"Vrsta dokumenta nije upisana.",\r
"Vrsta dokumenta se ne mijenja.",\r
"Vrsta evidencije nije izabrana.",\r
"vrsta isprave",\r
"Vrsta klijenta",\r
"Vrsta klijenta nije izabrana.",\r
"Vrsta magacina nije sa spiska.",\r
"Vrsta nepokretnosti",\r
"Vrsta nepokretnosti nije izabrana.",\r
"Vrsta obveznika",\r
"Vrsta obveznika i pragovi za dostavu FOJ-u",\r
"Vrsta obveznika nije izabrana.",\r
"Vrsta obveznika, pragovi, analiza rizika.",\r
"Vrsta obveznika: {0}. Lista obuhvata indikatore iz priloga Pravilnika ({1}) koje obveznik primjenjuje i sopstvene indikatore obveznika (ZSPNFT čl. 83). Pri utvrđivanju razloga za sumnju koriste se liste iz čl. 82 i 83 (čl. 81).",\r
"Vrsta posla (prodaja ili zakup) nije izabrana.",\r
"Vrsta prihoda",\r
"Vrsta prihoda nije izabrana.",\r
"Vrsta prometa",\r
"vršiti {0}.",\r
"Vrsta transakcije (gotovinska, bezgotovinska, kriptoimovina) nije izabrana.",\r
"Vrsta unosa",\r
"vrste „{0}\\"",\r
"VRT",\r
"WHERE c.Aktivan=1",\r
"WHERE fd.DatumIzdavanja>=?",\r
"WHERE g.Aktivan=1",\r
"WHERE g.Aktivna=1",\r
"WHERE kr.PlacID=?",\r
"WHERE m.Status='nacrt'",\r
"WHERE o.KupacID=?",\r
"x.VaziOd<=? AND x.VaziDo>=?",\r
"Za „{0}\\" već postoji normativ iste namjene koji važi od {1}. Izmjena važi od drugog datuma ili se mijenja postojeći.",\r
"Za blokadu isporuke potreban je razlog.",\r
"Za brzi unos se bira radnik; red je projekat, kolona dan u sedmici.",\r
"Za dio naknade iz zadržane kapare upisuju se ugovor o posredovanju koji tu naplatu predviđa i datum kada je nalogodavac zadržao kaparu (Zakon o posredovanju, čl. 27 st. 3).",\r
"Za dokument u valuti {0} potreban je kurs (jedinica valute za 1 EUR). Kurs se preuzima dugmetom „Preuzmi kurs\\" ili upisuje ručno.",\r
"za fakturisanje",\r
"Za fakturisanje",\r
"Za fakturisanje (EUR)",\r
"Za fakturisanje (sati)",\r
"Za fakturu je urađena ispravka PDV-a. Datum utuženja se ne mijenja dok ispravka postoji.",\r
"Za fakturu je urađena ispravka PDV-a. Prvo se poništava ispravka.",\r
"Za fizičko lice se upisuje JMB, a za lice bez JMB broj lične isprave (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Za indeksaciju je potreban datum od kada važi.",\r
"Za isti period ugovora postoje dvije fakture: {0} i {1}. Jedna se ispravlja stornom ili korektivnim računom.",\r
"Za izabrani period nema unosa u evidenciji.",\r
"Za izabrani period nema upisanih kurseva.",\r
"Za izvršenu sumnjivu transakciju upisuje se obrazloženje zašto podaci nisu dostavljeni prije izvršenja (ZSPNFT čl. 66 st. 9).",\r
"Za klijenta postoji prijava FOJ-u koja nije dostavljena; lični podaci se ne brišu dok se ne upiše datum dostave.",\r
"Za količinu",\r
"Za kupca nema zatezne kamate za obračun do",\r
"Za kupca nema zatezne kamate za obračun do {0}.",\r
"Za ličnu ispravu se upisuju vrsta, broj i datum prestanka važenja (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Za lokaciju nepokretnosti upisuje se ulica i broj ili katastarska parcela.",\r
"Za nalog {0} postoji prigovor u Knjizi prigovora; nalog se ne briše.",\r
"Za nepokretnost ne postoji važeći ugovor o posredovanju; oglašavanje nije dozvoljeno (Zakon o posredovanju, čl. 25 st. 3).",\r
"Za obračun je vezana uplata kupca. Prije storna potrebno je razvezati uplatu (Naplata → Kamata i opomene).",\r
"Za obračun nije vezana nijedna uplata.",\r
"Za odbijanje je potreban razlog.",\r
"Za odobrenje je potreban razlog.",\r
"Za ovaj ugovor je posao već zaključen.",\r
"Za ovu vrstu nacrta potvrda ne pravi dokument (povrat: veza sa knjižnim odobrenjem; nivelacija: zaključenje nivelacije).",\r
"Za politički eksponirano lice upisuje se osnov: javna funkcija, član uže porodice ili bliži saradnik (ZSPNFT čl. 117 st. 1 t. 3).",\r
"Za popravku veću od {0} € prihvaćenu ponudu potpisuju servis i klijent; jedan primjerak se predaje klijentu ({1} st. 3).",\r
"Za potvrđenu popisnu listu magacina: utrošak po normativu od prethodnog popisa, manjak i višak, stvarni utrošak i odstupanje u procentima. Prihvatljiv kalo i rastur određuje knjigovođa (CG nema zvaničan normativ za ugostiteljstvo); manjak preko toga nije porezno priznat rashod.",\r
"Za povećanje cijene veće od {0} % potreban je prethodni pisani pristanak klijenta, dat lično ili sredstvima komunikacije na daljinu ({1} st. 2).",\r
"Za prave fakture isključiti „Test okruženje\\" i upisati kodove sa portala sep.tax.gov.me (kod jedinice, ENU i operatera se razlikuju od probnih). Probne fakture se izdaju u probnoj firmi, jer ostaju u knjigama firme u kojoj su izdate.",\r
"Za preduzetnika se upisuju ime, prezime i JMB (ZSPNFT čl. 117 st. 1 t. 2).",\r
"za protekli period",\r
"Za račun koji je Uprava prihoda označila greškom (Samouslužni EFI portal → Računi s greškom). Izdaje korektivni račun za račun s greškom; rok za ispravku je 8 dana.",\r
"za razduženje",\r
"Za razduženje",\r
"Za ručno upisan kurs potrebna je napomena (izvor ili razlog).",\r
"Za saglasnost za elektronski račun potreban je i način davanja saglasnosti.",\r
"Za stavke sa 0 % PDV primjenjuje se {0} Zakona o PDV ({1}).",\r
"Za stopu 0 % PDV potrebno je izabrati osnov (čl. 25, 26, 27 ili 17 Zakona o PDV), koji se štampa na fakturi.",\r
"Za stvarnog vlasnika {0} (politički eksponirano lice) upisuje se osnov.",\r
"Za svaki dospio period pravi se nacrt obične fakture sa periodom prometa; PDV obaveza nastaje posljednjeg dana perioda. Isti period se ne fakturiše dvaput.",\r
"Za svaku ulogu šeme knjiženja provjerava da konto postoji u kontnom planu i da je aktivan.",\r
"Za ugovor već postoji faktura naknade {0}.",\r
"Za unos depozita postoji zapis u evidenciji po ZSPNFT (prijava FOJ-u); unos se ne briše. Ispravka se upisuje novim unosom depozita.",\r
"Za uplatu je izdat avansni račun. Kursna razlika se ne zatvara ovom radnjom.",\r
"Za uplatu u valuti {0} potreban je kurs na dan priliva ili iznos priliva u EUR.",\r
"za: {0}",\r
"Zabiljezbe",\r
"Zabilježbe",\r
"Zadnji put",\r
"zadržati do",\r
"Zadržati do",\r
"Zaduženo lice / mjesto",\r
"Zaglavlja izvještaja, knjiga, obrazaca i faktura.",\r
"Zaglavlje dokumenata; Kasa, Menadžer i QR meni.",\r
"Zaglavlje nije prepoznato: u prvih 10 redova nema kolone „Naziv\\".",\r
"Zaglavlje statističkog aneksa.",\r
"Zahtjev klijenta je upisan; FOJ se obavještava bez odlaganja (ZSPNFT čl. 66 st. 11).",\r
"Zahtjevi za praćenje finansijskog poslovanja klijenta",\r
"Zainteresovani",\r
"Zaključan mjesec se ne mijenja; otključavanje traži razlog.",\r
"Zaključavanje mjeseca",\r
"Zaključavanje mjeseca (zaštita od izmjena i brisanja)",\r
"Zaključen",\r
"zaključen ({0})",\r
"Zaključen posao je upisan.",\r
"Zaključen posao se upisuje u evidenciju o posredovanju (podaci 11–13); upis je trajan i ne može se poništiti. Faktura naknade se izdaje tek po zaključenju posla (čl. 27 st. 1–2).",\r
"Zaključen pravni posao",\r
"zaključena",\r
"zaključno sa {0}",\r
"Zakon o akcizama, prečišćen tekst (Sl. list CG 45/14) — iznos je potrebno provjeriti u važećem tekstu",\r
"Zakon o obaveznom zdravstvenom osiguranju čl. 36a — uvjerenje se dostavlja poslodavcu do 30. januara",\r
"Zakon o PDV čl. 18 st. 3 — kad račun nije izdat, PDV se obračunava osam dana od dana prometa",\r
"Zakon o PDV čl. 18 st. 3: ako račun nije izdat, PDV se obračunava osam dana od dana isporuke. Važi za otpremnice unesene od ove verzije programa.",\r
"Zakon o PDV čl. 18 st. 3: PDV nefakturisane isporuke ulazi u PR-PDV mjeseca osmog dana, ili samo u pregled ispod prijave.",\r
"Zakon o PDV čl. 20a",\r
"Zakon o PDV, čl. 31 st. 6",\r
"Zakon o PDV, čl. 31 st. 6: elektronski račun se izdaje uz saglasnost primaoca.",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 18 st. 2",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 19 — ugovor na određeno vrijeme, može se produžiti",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 25 st. 3",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 25 st. 3 — oglas samo za nepokretnost za koju postoji ugovor o posredovanju",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 26 i 34",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 27 st. 6",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 36 — posredovanje bez upisa u Registar posrednika nije dozvoljeno",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 36 i 41",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 41 (izmjena „Sl. list CG\\" 114/26)",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 41 (izmjena „Sl. list CG\\" 114/26) — zahtjev za upis u roku od 24 mjeseca od stupanja zakona na snagu",\r
"Zakon o posredovanju u prometu i zakupu nepokretnosti, čl. 8 — najmanje 20.000 € po slučaju i 60.000 € godišnje",\r
"Zakon o posredovanju, čl. 18 st. 3 — cijena se utvrđuje tako da uključuje iznos naknade za posredovanje",\r
"Zakon o posredovanju, čl. 19 — bez upisanog datuma ugovor važi {0} mjeseci",\r
"Zakon o posredovanju, čl. 20 t. 2 — upozorenje nalogodavcu na upisana prava i terete",\r
"Zakon o posredovanju, čl. 21 — potposredovanje samo uz izričitu saglasnost nalogodavca",\r
"Zakon o posredovanju, čl. 25: oglas sa nazivom posrednika i brojem upisa u Registar posrednika, samo uz važeći ugovor",\r
"Zakon o posredovanju, čl. 27 st. 3 — dio naknade iz kapare koju je nalogodavac zadržao zbog neizvršenja ugovora od drugog lica",\r
"Zakon o posredovanju, čl. 31 — upozorenje nalogodavcu se štampa u ugovoru",\r
"Zakon o posredovanju, čl. 34 — transakcije ovih računa nisu dio novčanog toka firme i ne knjiže se nalogom izvoda",\r
"Zakon o posredovanju, čl. 8 — najmanje 20.000 € po slučaju i 60.000 € za sve zahtjeve u godini",\r
"Zakon o rokovima izmirenja novčanih obaveza čl. 3 t. 6 i čl. 6 st. 2 se razlikuju; podrazumijevano se primjenjuje stopa CBCG (0 p.p.). Mijenja se samo po uputstvu knjigovođe.",\r
"Zakon o visini stope zatezne kamate („Sl. list CG\\" 83/09, 75/18), čl. 3–6",\r
"Zakon o visini stope zatezne kamate čl. 3–5 — stopa ECB za glavne operacije refinansiranja prvog dana polugodišta + 8 p.p.; CBCG je objavljuje prvog radnog dana polugodišta",\r
"Zakon o visini stope zatezne kamate čl. 6; Zakon o rokovima izmirenja novčanih obaveza čl. 7",\r
"Zakon o visini stope zatezne kamate čl. 6: prosta kamata, 36.500 (prestupna godina 36.600), stopa po polugodištu; Zakon o rokovima izmirenja novčanih obaveza čl. 7",\r
"Zakon o zaštiti potrošača („Sl. list CG\\" 12/26), čl. 21",\r
"Zakon o zaštiti potrošača čl. 26",\r
"Zakona o državnim i drugim praznicima („Sl. list CG\\", br. 27/07, 36/13, 3/23 i 30/23)",\r
"zakonski zastupnik",\r
"Zakup pokretne i nepokretne imovine",\r
"Zakup, kredit, lizing: šablon i učestalost.",\r
"Zakupnina",\r
"Zakupnina u iznosu koji je značajno veći od zakupnine nekretnine približnih karakteristika na istoj ili sličnoj lokaciji, koja se unaprijed plaća za duži vremenski period, kad postoji sumnja u kriminalnu namjeru i fiktivnost ugovora.",\r
"Zaliha po {0} {1}",\r
"Zalihe i stanje",\r
"Zalihe robe bez negativnog stanja (glavna knjiga)",\r
"Zamjenik",\r
"zapis",\r
"zapisa",\r
"Zapisnik o rashodu {0} je napravljen i proknjižen (minus kalkulacija {1}).",\r
"Zapisnik o rashodu {0} je napravljen.",\r
"Zaposleni",\r
"Zaposleni (klik — brisanje ličnih podataka)",\r
"Zašto je transakcija složena, odnosno neuobičajena",\r
"Zastupnik",\r
"Zatezna kamata do {0}",\r
"Zatezna kamata i opomene",\r
"Zatezna kamata je obračunata prostim (dekurzivnim) kamatnim računom na dospjelu glavnicu, bez pripisa kamate glavnici, za kalendarski broj dana: kamata = glavnica × stopa × dani / 36.500, u prestupnoj godini / 36.600 (Zakon o visini stope zatezne kamate, „Sl. list CG\\" br. 83/09 i 75/18, čl. 6).",\r
"Zatvara se povrat koji čeka knjižno odobrenje.",\r
"Zatvaranje mjeseca",\r
"{0}\\n\\nProknjižiti plaćanje?",\r
"{0}\\n\\nSnimiti plaćanje?",\r
"{0} (kod nas {1}datum {2}.{3}.{4}.)",\r
"{0} od {1} računa bez stavki",\r
"{0} račun primaoca {1} nije među poznatim računima dobavljača, plaćanje nije proknjiženo automatski",\r
"{0} račun(a) bez kalkulacije, ukupno {1} EUR ({2}, račun {3} od {4}). Račun je u dugu dobavljaču, a nije u knjizi primljenih računa, PDV prijavi ni trgovačkoj knjizi.",\r
"{0} računa",\r
"{0} računa — izvodi do {1} ili kasnije",\r
"{0} se upisuje samo za radnicu ({1}). Po podacima radnika (pol, JMBG) radnik je muškog pola.",\r
"{0} transakcija čeka knjiženje ili razvrstavanje",\r
"{0} u danima {1} {2} – {3}.",\r
"{0} {1}: zadnji izvod {2}",\r
"{0} · račun {1} od {2} · {3} EUR (PDV {4})",\r
"{0}: neto {1}, po važećem pravilu {2}",\r
"{0}: {1}{2}, a zakon daje najviše {3} dana mjesečno ({4}). Dane preko toga treba upisati kao „Bolovanje\\".",\r
"· mjesec je spreman za predaju",\r
"· zatečeno pri otključavanju (zaključan prije 2.7.0)",\r
"· zatečeno pri prelasku na 2.7.0",\r
"· {0} mjeseci sa izmjenama",\r
"· {0} stavki traži pažnju",\r
"čl. 36a Zakona o obaveznom zdravstvenom osiguranju",\r
"– {0} {1}: 0 stavki{2}",\r
"– {0} {1}: izvod firme {2} (PIB {3}) — druga firma, preskočeno",\r
"– {0} {1}: račun druge firme{2}, preskočeno",\r
"– {0} {1}: račun nije prepoznat, čeka ručni uvoz",\r
"– {0}: bez stavki",\r
"– {0}: nije PDF, preskočeno",\r
"– {0}: račun druge firme, preskočeno",\r
"— (trošak perioda)",\r
"— bez vrste —",\r
"— ne mijenja —",\r
"— npr.",\r
"— {0}; sati i minimalac su srazmjerni",\r
"— automatski",\r
"— bez dokumenta (upisano u Plate → Radnici)",\r
"— bez nadgrupe —",\r
"— CENTAR ZA SOCIJALNI RAD",\r
"— cijela godina —",\r
"— drugi (upiši) —",\r
"— državni praznik",\r
"— fali {0} radnika",\r
"— firma PIB {0}",\r
"— FOND ZA ZDRAVSTVENO OSIGURANJE",\r
"— i one će dobiti nove brojeve.",\r
"— isti poziv na broj.",\r
"— izaberi —",\r
"— izaberi kupca —",\r
"— izaberi objekat —",\r
"— izaberi osnov —",\r
"— izaberi račun —",\r
"— izaberi uplatu —",\r
"— izaberite —",\r
"— izaberite sanduče firme —",\r
"— izabrati kupca —",\r
"— izbor —",\r
"— izbor objekta —",\r
"— izbor vrste —",\r
"— kalkulacije, pazari, knjige, plate, finansije",\r
"— klik otvara transakcije",\r
"— koriste je: {0}",\r
"— objekat u minusu (nema početnog stanja ili neproknjižen raniji mjesec)",\r
"— matični objekat —",\r
"— mjesecu u kojem su primljeni i roba i račun (ZPDV čl. 37 st. 7; PPZPDV čl. 94 st. 3).",\r
"— mjesto se preskače —",\r
"— naknadni upis (period {0} zaključan)",\r
"— naknadni upis prenosa od {0}",\r
"— ne uvozi se —",\r
"— nedjelja",\r
"— nema otvorenog obračuna —",\r
"— nema takvog konta —",\r
"— nemamo ovu fakturu",\r
"— nije cio dan: promet poslije toga nije obuhvaćen (dnevni Z izvještaj ga kasnije zamjenjuje)",\r
"— nije dodijeljen —",\r
"— nije izabrano —",\r
"— nije prepoznat —",\r
"— nije proknjižen",\r
"— nov objekat „",\r
"— novi izvršilac —",\r
"— nulta stopa",\r
"— obračun je potrebno potvrditi sa knjigovođom.",\r
"— obračun umanji osnovnu tako da osnovna + minuli = uneseni iznos, pa radnik dobije",\r
"— od opštine zavise prirez radnika i poziv na broj za uplatu poreza.",\r
"— odlučiće se poslije izjašnjenja —",\r
"— ograničeno na raspoloživu {0}",\r
"— PDV umanjen u",\r
"— plaća virmanom",\r
"— po broju računa —",\r
"— poziv na broj odobrenja za javne prihode:",\r
"— pravi kalkulacije i dodjeljuje brojeve",\r
"— preskoči —",\r
"— pretraga po nazivu ili šifri",\r
"— program bira —",\r
"— prosječan broj zaposlenih: {0}",\r
"— račun sobe",\r
"— radni dan",\r
"— radni dan (ne računa se kao praznik)",\r
"— razmjenjuju podatke",\r
"— rotira —",\r
"— sa PDV-om {0} bez prava na odbitak",\r
"— samo skenira fakture",\r
"— sedmica potvrđena",\r
"— slobodno upisan primalac —",\r
"— snima u fajl, ne štampa",\r
"— snimljeno uz upozorenje (aritmetika nije potvrđena)",\r
"— srazmjerno {0} h sedmično",\r
"— stopa PDV-a —",\r
"— sva sandučad —",\r
"— sve grupe —",\r
"— svoja rekapitulacija, listići i isplata. Oporezuje se kao zarada: porez je razlika poreza na zbir plate i IQOS-a i poreza na samu platu (progresivne stope važe za ukupna primanja u mjesecu), prirez na teret poslodavca. U",\r
"— u Excelu svaki na svom listu, u PDF-u na svojoj strani.",\r
"— u izboru",\r
"— ukupan prihod: {0} EUR",\r
"— ukupna aktiva: {0} EUR",\r
"— ulazni PDV se odbija, vodi se PR-PDV; isključi za firmu van sistema PDV-a.",\r
"— uvećanje odmora za",\r
"— za njega se gore upisuje odsustvo „Vjerski praznik\\" (naknada kao za praznik); ako tog dana ipak radi, rad se plaća kao rad na praznik. Program ne pamti vjeroispovijest, samo zahtjev. Dan kada firma ne radi uopšte označava se sa ↺ (neradni za sve).",\r
"— zamjena ili radnik drugog objekta —",\r
", {0} druge firme",\r
", {0} grešaka",\r
", {0} zamijenilo stavku iz izvoda drugog oblika",\r
", a kao PDV bez prava na odbitak i u polje 26 (ne umanjuje obavezu)",\r
", a na stavke je raspoređeno",\r
", a najkasnije do {0}",\r
", a stavke to ne pokazuju.",\r
", Aktivna=1, Uklonjena=NULL",\r
", bez artikla {0}",\r
", bez artikla: {0}",\r
", bez objekta {0}",\r
", bez osnova",\r
", bez poznate kase/objekta {0}",\r
", bez putanje (npr. https://192.168.1.10:8443).",\r
", bez veze sa artiklom {0}",\r
", dio fajla je već uvezen",\r
", dio smjene za dan {0}",\r
", duplikata (isti promet iz drugog izvoda): {0}",\r
", ili kasnije",\r
", invaliditet →",\r
", iz reda za slanje poslato {0}",\r
", IzmjenaUTC=?",\r
", kasir {0}",\r
", knjiženo {0}",\r
", knjiženo {0} ({1} EUR)",\r
", knjiženo {0} plaćanja ({1} EUR)",\r
", kontrola se ne slaže na {0}",\r
", kontrola se ne slaže na {0} (nisu upisani)",\r
", kontrola se ne slaže na {0} (potreban ručni uvoz)",\r
", kontrola se slaže na svima",\r
", kontrola: {0} naloga, zbirovi i stanje se slažu",\r
", lice sa invaliditetom",\r
", objekat ima noviju cijenu {0}",\r
", objekat ima noviju cijenu: {0}",\r
", MarketID=?",\r
", marža",\r
", marža {0} %",\r
", mlađi od 18",\r
", najveća (cijena objekta) {0} €",\r
", najviše",\r
", ne cijelu bazu: svaka faktura se prepoznaje po IIC kodu, a svaki pazar po svojoj trajnoj oznaci, pa se isti dokument nikad ne upiše dvaput.",\r
", nemijenjanih: {0}",\r
", novih artikala {0}",\r
", novih kasa: {0}",\r
", novih objekata: {0}",\r
", npr. 16:00–18:00). Bez objekta važi na svim kasama; sa izabranim objektima samo na njihovim kasama. Vrste:",\r
", objekti: {0}",\r
", obrisanih računa/stavki {0}",\r
", od kojih {0} nosi radno mjesto iz ovog pravilnika; ostali se raspoređuju aneksom ugovora u roku iz člana 15.",\r
", odbijeno {0}",\r
", otpisa {0}",\r
", ovdje obrisanih (ne vraćaju se) {0}",\r
", pa ih je poslije potrebno ponovo odštampati (Kalkulacije i fakture → „Štampaj sve kalkulacije\\"). Stari brojevi ostaju trajno zapisani.",\r
", pa ne štiti od otkaza diska. Ovdje se uključuje dnevna kopija u folder za rezervnu kopiju (Google Drive, Povezivanje → „Rezervna kopija\\"), pa su podaci i van računara. Taj folder služi samo za rezervne kopije; razmjena ide preko servera IRIS CORVINA.",\r
", pa se isti primalac na sljedećim izvodima prepoznaje automatski.",\r
", pa se ovdje vidi zbir po objektima. Izvoz pravi knjigu za",\r
", PIB {0}",\r
", ponovljenih (isti dokument iz druge poruke): {0}",\r
", porez",\r
", pravilnik) i odlukom; važi samo za",\r
", preskočeno {0}",\r
", preskočeno mjesta: {0}",\r
", preskočeno objekata: {0}",\r
", preskočeno: {0}",\r
", probnih preskočeno {0}",\r
", program za kase",\r
", račun {0}",\r
", račun čeka odluku: {0}",\r
", račun nije potvrđen: {0}",\r
", sa greškom {0}",\r
", sa Liste FZO:",\r
", sa PDV bez prava na odbitak",\r
", skoro trenutno: promjena se šalje nekoliko sekundi poslije upisa, a promjene drugih uređaja stižu i upisuju se automatski. Podaci ostaju i na ovom uređaju. Google Drive se ne koristi za razmjenu, već samo za",\r
", smjena #…\\" stižu automatski iz kase IRIS CORVINA (Povezivanje → Program za kase) i ne unose se ručno.",\r
", stimulacija za doprinos u radu do",\r
", sukoba {0}",\r
", svi raspoređeni na radna mjesta iz ovog pravilnika.",\r
", upisano",\r
", upisano novih zapisa {0}",\r
", upisuju se podaci iz predatog iskaza za",\r
", već evidentirano iz izvoda drugog oblika — dnevni / mjesečni / pregled (isti račun, iznos i datum): {0}",\r
", već iste {0}",\r
", već iste: {0}",\r
", već postojalo {0}",\r
", već proknjiženo ranije: {0}",\r
", veza barkodova",\r
", zamijenjen prethodni predlog ({0})",\r
", zamijenjeno ranijih uvoza {0}",\r
"; {0} novih stavki je zamijenilo ranije evidentirane iz izvoda bez primaoca (one su sada duplikati)",\r
"; {0} transakcija sa izvoda čeka vrstu",\r
"; {0} uopšte bez podjele",\r
"; 6-dnevna",\r
"; aplikacija ih provjerava pri svakom otvaranju",\r
"; dostavlja se FZO-u elektronski i u papirnom obliku do 10. u mjesecu (rok:",\r
"; druga firma na istom računaru ima svoju vezu (ili dijeli ovu, ako je iz iste grupe firmi).",\r
"; iznad — PDV se obračunava. Procenat je po",\r
"; kasa bez objekta: {0}",\r
"; mlađi od 18 →",\r
"; na njemu se upisuju korisnici i PIN-ovi ostalih.",\r
"; neobavezne: Datum (bez nje — jedan period za cijeli fajl), Objekat (bez nje — izbor ispod), JM, Iznos sa PDV, Cijena, PDV %. Decimalni zarez je dozvoljen. Isti fajl uvezen dva puta ne pravi duplu prodaju; novi fajl za isti objekat i period zamjenjuje ranije uvezene dane uz potvrdu.",\r
"; neobavezne: JM, Nabavna (bez PDV), MPC (sa PDV), PDV %. Decimalni zarez je dozvoljen. Bez cijena u fajlu predlog su cijene objekta, cjenovnik kase ili zadnja kalkulacija. Isti fajl uvezen dva puta ne pravi duple redove.",\r
"; odbitak (softver FZO) {0} €; iznos fakture {1} €.",\r
"; ostale (Kasa, ZBroj, BrojRacuna, Osnovica i PDV po stopi 21/15/7, Oslobodjeno0, Gotovina, Kartica) su neobavezne. Decimalni zarez je dozvoljen; kad je dat samo iznos sa PDV po stopi (Bruto21…), osnovica i PDV se izračunavaju. Isti fajl uvezen dva puta ne pravi duple pazare.",\r
"; plan do",\r
"; popisna razlika = popisano − knjigovodstveno stanje na taj dan.",\r
"; popusti sa kase {0} EUR",\r
"; poziv na broj zaduženja",\r
"; pravilnik: do",\r
"; pravilo bi dalo {0}",\r
"; preskočeno {0}: {1}",\r
"; preskočeno: {0}",\r
"; primjenjuju se automatski). Uvećanja po stažu i drugim osnovama firma uređuje pravilnikom (",\r
"; prvi dio ≥",\r
"; razlika u nabavnu",\r
"; rješenje",\r
"; tekst se kopira ikonicom za tekst (⌷) dolje desno, ili držanjem prsta na tekstu →",\r
"; uklonjeno {0} naloga bez dokumenta",\r
"; uklonjeno bez iznosa: {0}",\r
"; uplata je veća i od tog zbira",\r
": CoreIT „CoreSign EFI“ ili odgovarajući sertifikat Pošte CG. Sertifikat i lozinka ostaju",\r
": deinstalacija briše bazu na telefonu, neposlate skenove i podešavanja. Prije neizbježne deinstalacije potrebno je poslati skenove (Povezivanje → „Sinhronizuj sada\\") i napraviti kopiju baze (Podešavanja → Backup → „Izvezi kopiju baze\\").",\r
": do fonda radnika kao „Redovan rad\\", preko fonda kao „Prekovremeni rad\\" (+40 %). Noćni (22–06), nedjelja i praznik su",\r
": ENU koji se dijeli sa kasom daje dvostruke redne brojeve računa.",\r
": fakturisano",\r
": firma pri isplati zakupnine obračunava i uplaćuje porez na prihod od imovine — osnovica je zakupnina umanjena za standardne troškove (",\r
": ovdje se prave kalkulacije i dodjeljuju brojevi dokumenata",\r
": po Zakonu o svetkovanju vjerskih praznika (čl. 2) radnik koji ga svetkuje dobija",\r
": poruke se ne označavaju, ne premještaju i ne brišu.",\r
": pravila barkoda sa vage u obliku „prefiksi:vrsta:cifara artikla:cifara vrijednosti:decimala\\", odvojena tačka-zarezom; vrsta: tezina | iznos | komad. Primjer: „27,28:iznos:5:5:2; 2:tezina:5:5:3\\". Prazno = podrazumijevano pravilo (prefiksi 20–29, težina).",\r
": prilog se otvara, pregleda i potvrđuje. Isti izvod poslat na više adresa prikazuje se jednom.",\r
": program i dalje piše i čita Google Drive folder za razmjenu, kao prije servera. Režim je potreban samo dok neki uređaj firme (stariji telefon, računar na staroj verziji) nije uparen sa serverom; kad su svi upareni, režim se isključuje, jer bi Drive inače i dalje prenosio sve fajlove razmjene.",\r
": računar u kancelariji. Telefoni po radnjama skeniraju i šalju fakture.",\r
": svaka izmjena ovdje objavljuje nov cjenovnik u sljedećem krugu razmjene. Kasa akciju primjenjuje sama: po periodu (od–do), po danima u sedmici i po satima (",\r
": svaka kalkulacija napravljena skeniranjem (na ovom računaru ili obradom skenova sa telefona) odmah ide na štampač.",\r
": svaki izvod se upisuje u registar, a svaka transakcija dobija otisak i",\r
": traženo plaćanje stavki kojih nema u evidenciji. Plaćanje tek poslije fizičke provjere.",\r
"! nema kod njih",\r
". — pazari sa PDV",\r
". (fond",\r
". (nisu u „svi objekti\\"):",\r
". (polje „Početno stanje\\" ili Zalihe → Popis robe); bez njega saldo ne predstavlja stanje robe.",\r
". (popis) nijesu upisane. Bez njih procjena nije moguća, jer bi cijela nabavka bila trošak. Potrebno je upisati zalihe ili unijeti popis.",\r
". (rashod u PD)",\r
". Ako je knjiženje pogrešno: „↩ poništi\\" pa proknjiži pravom dobavljaču.",\r
". Artikala povezanih sa šifarnikom sa faktura:",\r
". Bez tih podataka knjige, obrasci i plate nemaju potpuno zaglavlje.",\r
". Cijena i ostali podaci se upisuju u Cjenovnik kasa.",\r
". Dogovoreni neto svakog radnika ostaje isti, a bruto, porez i doprinosi se usklađuju.",\r
". godinu",\r
". godinu — podaci na 31.12.",\r
". godinu (",\r
". godinu.",\r
". godinu. Bez broja odluke, odluka direktora je sadržana u samom rješenju.",\r
". i početno stanje",\r
". ili ručno početno stanje imaju prednost.",\r
". Izmjene plata i smjena sa tog uređaja čekaju ažuriranje.",\r
". je moguće kad su zaključena svih 12 mjeseci (otvoreni:",\r
". je privremeno (",\r
". je zaključena i pripremljena za ovjeru (Pravilnik čl. 13 i 15). Prikazuje se snimljeno stanje.",\r
". Knjige se vode po datumu prijema (ZPDV čl. 37 st. 7), pa računi ulaze u knjigu tekućeg mjeseca. Spisak služi za pregled.",\r
". Knjiženje: Finansije → Proknjiži mjesec.",\r
". Kod se upisuje na kasi: Podešavanja → Server IRIS CORVINA (razmjena).",\r
". Kod se upisuje u Menadžeru: prvo pokretanje → Poveži sa Knjigovodstvom.",\r
". koja još nije zaključena. Kad se knjiga",\r
". Mjesec koji je knjigovođa odobrio zaključava se dugmetom „Zaključi mjesec\\"; poslije toga izmjene tog perioda nijesu moguće.",\r
". narednog mjeseca (podešavanja objekta).",\r
". ne bi bili tačni.",\r
". nema podjelu gotovina + kartice jednaku ukupnom pazaru (virman sa kase ili pazar bez podjele). Razduženje obuhvata cio pazar (red „Pazar-virman i ostalo\\"), ali",\r
". Njihove fakture, kalkulacije i sva poreska dokumenta ostaju u knjigama kao i do sada. Razlika je samo u pregledu duga: u prikazu „naš dug\\" njihove fakture se ne računaju, a u prikazu „partnerski\\" se vidi koliko oni duguju dobavljačima.",\r
". Noćni, nedjelja i praznik se dodaju",\r
". Nov uređaj dobija korisnike sa uređaja administratora Menadžera; prijava je imenom i PIN-om koje upisuje administrator.",\r
". Novi podaci se ne prenose automatski; za stalnu vezu Menadžer se povezuje kodom (odjeljak 1). Fajl sadrži podatke firme i predaje se samo osobi koja koristi Menadžer.",\r
". Obaveza za",\r
". Obavezne kolone su",\r
". Obračun i fajl PD postoje samo na jednom mjestu.",\r
". Podaci se ne upisuju u bazu.",\r
". Podjela na puni, umanjeni i oslobođeni iznos po gostima: Smještaj → Izvještaji → Boravišna taksa.",\r
". Poreska vraća kôd ENU koji se odmah upisuje gore. Prethodno moraju biti upisani kôd poslovnog prostora i",\r
". poslije poreza · prodato",\r
". Poslije promjene kalkulacije se izrađuju u PDF i Excel ili šalju na štampač.",\r
". Poslodavac dodatno: doprinosi",\r
". Potrebno je poništiti raspored i ponoviti ga.",\r
". Potrebno je ponovo otvoriti godinu.",\r
". Potrebno je prethodno zaključiti tu godinu i otvoriti narednu; do tada",\r
". Potrebno je razvrstati ih (Banka → Transakcije, kolona „Vrsta\\") i ponovo proknjižiti taj mjesec (Finansije → Proknjiži mjesec).",\r
". Potrebno je unijeti popis od 31.12.",\r
". Prilozi čekaju pregled i ne knjiže se automatski.",\r
". Primjenjuje se automatski: pri uvozu fakture, obradi skenova sa telefona i na kalkulaciji (globalna marža je ne mijenja). Ručna promjena marže cigarete na kalkulaciji postaje novo pravilo. Ako je upisana cijena, marža se računa iz nabavne cijene sa fakture.",\r
". Pristup je moguć samo uz pristanak korisnika ovog uređaja.",\r
". Promjena: Povezivanje → „Uloga ovog računara\\".",\r
". Provjeriti stopu i osnov.",\r
". Rashod do ovog procenta",\r
". Raspored je zaključan;",\r
". Razliku pravi {0} kalkulacija/računa (spisak ispod).",\r
". Revizija:",\r
". Sa „?\\" su dvosmisleni nazivi (npr. „Classic\\", „Kent\\" postoji i na čokoladi, kafi, bombonama); označavaju se samo ako su duvan.",\r
". Sljedeća šifra poslije:",\r
". Snimanje je moguće, a podatak je potrebno dopuniti prije obračuna.",\r
". su mijenjana poslije otvaranja):",\r
". Uvoz se može vratiti dugmetom „Poništi posljednji uvoz\\".",\r
". vodi glavnu knjigu, pa se",\r
". Za objekat bez kase i bez uvezene prodaje RUC po artiklu nije moguće izračunati (procjena prodaje: Zalihe i popis → Obračun prodaje po popisu).",\r
". zaključi, ovdje stoji konačan saldo (Pravilnik čl. 15). Popis od 31.12.",\r
". Zakup od pravnog lica ili preduzetnika (po fakturi) se ovdje ne unosi.",\r
". Zatvoren objekat ove firme bira se pojedinačno (grupa „Zatvoreni objekti\\" u izboru objekta); objekat druge firme ovdje ne pripada.",\r
"… i još",\r
"… i još {0}",\r
"… i još {0} mjesta sa razlikom.",\r
"… još",\r
"…ili tabela kopirana iz PDF-a / maila",\r
".) nije upisano. Bez njega procjena nije moguća, jer bi cijela nabavka bila trošak. Stanje se preuzima dugmetom „« Iz popisa\\" ili upisuje ručno.",\r
"· {0} {1} UTC",\r
"· {0} artikala · {1} stolova · kasa {2} · naručivanje {3}",\r
"· {0} dana bez računa",\r
"· {0} grešaka",\r
"· {0} ponovljenih",\r
"· {0} redova nije prepoznato",\r
"· {0} upozorenja: {1}",\r
"· 134002 ukalk. PDV",\r
"· aktiva",\r
"· automatska provjera uključena",\r
"· barkod {0}",\r
"· baza {0}",\r
"· BEZ PRODAJE PO ARTIKLU (nema kase) — samo ulazi",\r
"· čeka slanje: {0}",\r
"· cijena na kasi {0} €",\r
"· cijene utvrđene do",\r
"· dolazak {0}",\r
"· duplih brojeva:",\r
"· dvosmislen naziv, potrebna provjera",\r
"· Faktura dob.:",\r
"· fiskalizovan",\r
"· fond mjeseca",\r
"· grupa {0}",\r
"· grupa: {0}",\r
"· instalacija {0}",\r
"· isplata izvršiocu",\r
"· isplata zakupodavcu",\r
"· izmjene idu uređajima kao ručne izmjene",\r
"· iznos procijenjen {0}",\r
"· iznos:",\r
"· izvještaj do",\r
"· izvod {0}",\r
"· izvor: {0}",\r
"· kasa {0}",\r
"· kasni od {0}",\r
"· knjiženo na {0}",\r
"· kod primaoca",\r
"· količina",\r
"· licenca sa servera {0} ({1}) ne ograničava rad",\r
"· nabavna sa PDV {0}",\r
"· najveći redni broj:",\r
"· nedjelja",\r
"· nije na meniju kase",\r
"· nije u registru firme",\r
"· objekat registra {0} „{1}\\"",\r
"· objekti: {0}",\r
"· od početnog stanja {0}",\r
"· od popisa {0}",\r
"· od toga kiosk {0} EUR",\r
"· odlazak {0}",\r
"· odlazak je bio {0}",\r
"· odobreno",\r
"· osnovica",\r
"· PDV obveznik:",\r
"· period {0} – {1}",\r
"· PIB {0}",\r
"· PIB na izvodu",\r
"· plaćen avans",\r
"· po računu",\r
"· porez",\r
"· poslije ovog dijela ostaje",\r
"· POTVRĐENO",\r
"· povučenih serija:",\r
"· Predati oblik nije snimljen.",\r
"· Predati oblik snimljen {0}.",\r
"· PREDLOG",\r
"· predugo bez javljanja serveru",\r
"· pregled od",\r
"· prekovremeni",\r
"· prepoznat",\r
"· pretraga: {0}",\r
"· prihod",\r
"· primljeno robe",\r
"· primljeno u prijemnom folderu:",\r
"· prirez",\r
"· prirez (na teret izvršioca): {0}",\r
"· prirez: {0}",\r
"· prodajna",\r
"· prodajna vrijednost bez PDV ostaje",\r
"· prodato",\r
"· promet duguje",\r
"· prosječna marža",\r
"· provjereno {0}",\r
"· račun {0}",\r
"· ranije iskorišćeno",\r
"· razmak",\r
"· recepata sa kasa:",\r
"· redoslijed {0}",\r
"· redova artikala u fajlu:",\r
"· redovan rad",\r
"· rok istekao",\r
"· sa artikla {0}",\r
"· sa pravilom:",\r
"· šifra {0}",\r
"· sljedeće čitanje kreće od",\r
"· sljedeće čitanje od",\r
"· smjena {0}",\r
"· stanje",\r
"· stanje kase od",\r
"· stiglo {0}×",\r
"· sve promjene",\r
"· trajanje upisa",\r
"· u fiokama",\r
"· ukalkulisani PDV",\r
"· ukupan trošak",\r
"· ukupan trošak firme",\r
"· ukupna uplata {0}",\r
"· ukupno plaćanje {0}",\r
"· ukupno sa PDV",\r
"· upis u serijama (uređaji izmjene dobijaju cjenovnikom)",\r
"· Upozorenja: {0}",\r
"· uvoz",\r
"· van formata („~\\"):",\r
"· verzija {0}",\r
"· višak {0} → drugo primanje",\r
"· za isplatu",\r
"· zadnji uvoz izvoda",\r
"· zaključane",\r
"· zakonski najviše",\r
"· zalihe robe ({0}): {1}{2}",\r
"· zaposlen od",\r
"· žiro račun iz podataka firme",\r
"\\" — Poreske knjige → Period po datumu)",\r
"\\" (tako je radila i prije ažuriranja), ali server za nju još nije poslao nijedan fajl. Firmu koja nije iz iste grupe potrebno je odvojiti i upariti njenim kodom.",\r
"\\" ispod knjige. Rok je prošao za",\r
"\\": način rada",\r
"„{0}\\" i „{1}\\" su isto radno mjesto i oba imaju radnike; potrebno je ispraviti radnike (Plate → Radnici) i deaktivirati jedno",\r
"„{0}\\" je dodat u grupu.",\r
"„{0}\\" je rezervna kopija firme „{1}\\". Vratiti je kao firmu „{2}\\"?\\n\\nU redu: vraćanje kao firma „{3}\\"{4}.\\nOdustani: otvaranje kao posebna baza „{5}\\" (razmjena sa drugim računarima za nju ne radi).",\r
"„{0}\\" ne štampa nego snima u fajl. Za snimanje koristi „Snimi PDF\\", a ovdje izaberi pravi štampač.",\r
"„{0}\\" nije barkod koji se može zapamtiti (8–14 cifara ili kod od 4 do 32 znaka).",\r
"„{0}\\" nije baza knjigovodstva — izaberi fajl sa nastavkom .knj.db.",\r
"„{0}\\" nije baza knjigovodstva. Potrebno je izabrati fajl sa nastavkom .knj.db.",\r
"„{0}\\" nije ispravan barkod (do 32 znaka: cifre, slova, tačka i crtica).",\r
"„{0}\\" se u IOPPD prijavljuje pod osnovom {1}.",\r
"„{0}\\" snima u fajl umjesto da štampa. Za snimanje u fajl služi dugme „Snimi PDF\\" u pregledu kalkulacija.",\r
"„{0}\\": „{1}\\" nije broj.",\r
"„{0}\\": nedostaje radnik u {1} {2} ({3}): {4}.",\r
"„{0}\\": upisuje se DA ili NE.",\r
"„Bez provjere\\" = kasa taj dan ne provjerava vrijeme. Kraj prije početka = rad preko ponoći.",\r
"„Obračunaj sve\\"",\r
"„Proknjiži na kraj mjeseca\\" (za račune primljene u tom mjesecu, a zavedene kasnije) i sigurnosna mreža za zakašnjele fakture rade u osnovi",\r
"„Ukupno bez PDV\\" + „Ukupno PDV\\" ({0}) nije „Ukupno sa PDV\\" ({1})",\r
"„Ukupno PDV\\" ({0}) je veći od 21 % osnovice {1} (osnovica i porez su vjerovatno zamijenjeni)",\r
"„Ukupno PDV\\" ({0}) nije zbir PDV-a po stopama ({1})",\r
"„Važi do\\" je prije „važi od\\".",\r
"„Važi do\\" ne može biti u prošlosti.",\r
"„Važi od\\" ne može biti u prošlosti.",\r
"« Iz popisa",\r
"({0} % na nabavnu)",\r
"({0} − odsustva {1})",\r
"({0} EUR, nisu stavke)",\r
"({0} objekata)",\r
"({0} nema nijednu kalkulaciju).",\r
"({0} OR {1}.IzvorUID LIKE '{2}%')",\r
"({0} OR s.IzvorUID NOT LIKE '{1}%')",\r
"({0} stavki bez prodajne cijene — knjižene po nabavnoj)",\r
"({0} ugovora sa fizičkim licima)",\r
"({0} već postoji)",\r
"({0}; poklapa se samo serija)",\r
"({0}; Pravilnik o godišnjim odmorima{1}) i važi samo za {2}. godinu; nagradni dani se koriste kao i ostali dani odmora i ne mogu se zamijeniti novcem, osim pri prestanku radnog odnosa (čl. 79 st. 7 {3}).",\r
"(*) Očekivana uplata — nema izvoda ni ručnog upisa; datum je naredni radni dan poslije pazara (bez subote, nedjelje i neradnih praznika).",\r
"(*) Očekivana uplata: za ovaj pazar nema evidentirane uplate (izvod banke ili ručni upis); datum je naredni radni dan poslije pazara (subote, nedjelje i neradni praznici se preskaču), a iznos je gotovina pazara.",\r
"(+40 / +80 / +150 %) i sabiraju se — ne smanjuju redovan rad. Radni dani se upisuju gore (dani × 8 h), a noćni, nedjeljni i praznični sati kao stavke; druga mogućnost je unos dana po smjenama ili preuzimanje sati iz rasporeda smjena. Plaćena odsustva (odmor, bolovanje…) umanjuju fond radnika.",\r
"(13), oslobođeno",\r
"(14), van sistema PDV",\r
"(a.Naziv LIKE ? OR a.Sifra LIKE ?)",\r
"(a.Naziv LIKE ? OR s.NazivArtikla LIKE ?)",\r
"(automatski)",\r
"(Badnji dan i Božić 6–8. januar, Vaskrs, Bajram, krsna slava…) su",\r
"(bez dobavljača)",\r
"(bez objekta — firma)",\r
"(bez naslova)",\r
"(bez objekta)",\r
"(bez pauze).",\r
"(bez servera, podaci do trenutka izvoza).",\r
"(cijene utvrđene do {0})",\r
"(cio mjesec)",\r
"(dnevnice, terenski dodatak, otpremnine…) ne ulaze u osnovicu za porez i doprinose samo do unesenog limita; iznos preko limita se automatski oporezuje. Limite provjeriti sa knjigovođom (mijenjaju se propisom); 0 znači bez limita.",\r
"(dodatak povrh redovnog)",\r
"(drugačijom od globalne marže kalkulacije — tako se unose cigare) ostaju kakve jesu",\r
"(faktura po procjeni)",\r
"(fali {0})",\r
"(forsiran, uz kopiju baze)",\r
"(grupa / prefiks)",\r
"(gzip)",\r
"(i još {0})",\r
"(ili FolderSync): lokalni folder",\r
"(ili Šifra / Barkod) i",\r
"(ispod nabavne)",\r
"(ista grupa firmi).",\r
"(isti promet iz dnevnog i mjesečnog izvoda, ili isti izvod poslat na dvije adrese, prepoznaje se kao duplikat i preskače). Plaćanja dobavljačima prepoznata po PIB-u ili upamćenom računu se odmah knjiže; ostalo ostaje u „Transakcije\\" sa oznakom",\r
"(isti vlasnik, npr. Atlantic i Magud), povezuje se preko te veze, bez novog koda:",\r
"(iz dana)",\r
"(iz perioda)",\r
"(iz smjena)",\r
"(izveden iz dana po smjenama ispod)",\r
"(izvod {0})",\r
"(izvršilac osiguran po drugom osnovu),",\r
"(jedinstveni račun poreza na dohodak i doprinosa) —",\r
"(klik na kvadratić uz ime je mijenja).",\r
"(klik za detalje)",\r
"(ključ firme je na serveru)",\r
"(knjige se sada vode po osnovi „",\r
"(knjige)",\r
"(knjigovođa, 08.10.2026) — nalozi su u „Nalozi za plaćanje\\" obračuna plata tog mjeseca; knjigovođu obavijestiti o isplati najkasnije na dan isplate.",\r
"(knjiženja",\r
"(kod knjigovođe). Glavni računar obrađuje skenove, a svaka njegova promjena se u roku od 2 minuta pojavljuje na svim sporednim računarima. Sporedni računari unose dokumente: unosi odlaze glavnom, a nazad stiže kompletna, sređena baza.",\r
"(kod nas {0} EUR — razlika {1})",\r
"(konto 494).",\r
"(lokalnoj samoupravi, van bruta) → ukupan trošak",\r
"(objekat {0})",\r
"(objekti)",\r
"(marža do 18 %, PDV",\r
"(mjesec još nije proknjižen)",\r
"(model 18).",\r
"(n.Broj LIKE ? OR n.Opis LIKE ?)",\r
"(na dan",\r
"(nabavna vrijednost).",\r
"(najniže",\r
"(naknadni upis).",\r
"(nazivi dugmadi), radi ispravke prije prijave korisnika. Lični podaci (JMBG, žiro računi, telefoni, iznosi, imena radnika i kupaca) se brišu prije slanja; sadržaj dokumenata se ne šalje. Ide kroz server, samo sa uparenog uređaja (Povezivanje → Server).",\r
"(ne diraju se).",\r
"(ne odbija se)",\r
"(neaktivna)",\r
"(negativne količine) dobija novu maržu",\r
"(nepopunjeno {0})",\r
"(nepoznat)",\r
"(nepoznata)",\r
"(nepoznato kad)",\r
"(neto {0} + neoporezivo {1})",\r
"(nije današnji)",\r
"(nije dozvoljeno)",\r
"(nije osiguran) ili",\r
"(nije pročitan)",\r
"(nije u Cjenovniku kasa)",\r
"(nije u registru)",\r
"(nije u šifarniku kase)",\r
"(nije u šifarniku)",\r
"(Nova godina, Praznik rada, Dan nezavisnosti, Dan državnosti, Njegošev dan) su neradni za sve: rad tog dana se plaća +150 %, a ko ne radi dobija naknadu. Upisuju se automatski, po dva dana, a kad praznik padne u nedjelju, neradan je i naredni dan (Zakon o državnim i drugim praznicima, čl. 3).",\r
"(novih art. {0})",\r
"(novih artikala {0})",\r
"(npr. {0})",\r
"(Obaveze → Pošta)",\r
"(objavljena {0})",\r
"(obračun još nije zaključen)",\r
"(od toga {0} sa IV stepenom podrške — računa se kao dva)",\r
"(osnov 065): osnovica",\r
"(osnova kao KPR). Zbir „Sa PDV\\" = kontrola KPR-a.",\r
"(ovaj radnik {0} h — nepuno radno vrijeme)",\r
"(ovjera je potrebna samo za sporazumni prestanak). Ako radnik nastavi da radi poslije isteka, smatra se da je na neodređeno.",\r
"(p.IzMarketID=? OR p.UMarketID=?)",\r
"(Pazari, oznaka „Kasa <ENU>, smjena #…\\"), promet po artiklu se čuva za preglede, otpis sa kase pravi naš dokument otpisa (za artikle koje šifarnik prepoznaje; ostali u napomeni), a obrisani računi idu u „Sumnjiv rad\\". Kasa mora biti upisana uz objekat (Cjenovnik kasa → Kase i objekti). Smjene iz",\r
"(PIB {0} {1})",\r
"(PIB {0})",\r
"(plaća firma",\r
"(po radnom mjestu)",\r
"(početno stanje iz zaključka)",\r
"(podaci se ažuriraju automatski) ili",\r
"(Podešavanja → Podaci firme).",\r
"(Podešavanja → Zaštita)",\r
"(polja 13 i 14)",\r
"(poslala ih je novija verzija programa; upisuju se automatski poslije ažuriranja) ili",\r
"(potvrđeno {0}/{1} sedmica)",\r
"(pozitivan = dugovni)",\r
"(poziv bez perioda)",\r
"(Pravilnik 11/20 čl. 57–60)",\r
"(preko Wi-Fi veze)",\r
"(preostalo",\r
"(presjek do {0})",\r
"(Pri sljedećem pokretanju se vraća sama.)",\r
"(probni režim)",\r
"(prodajne cijene i obrazac ostaju isti); prikazuje se samo stvarna marža.",\r
"(program {0})",\r
"(promet po načinu plaćanja i PDV po stopi) i upisuje ga kao pazar. Isti Z-izvještaj se ne može uvesti dvaput.",\r
"(prostor",\r
"(prvo upari sa izvoda).",\r
"(račun {0})",\r
"(račun opštine nije upisan)",\r
"(računi nisu fiskalni) se preskaču, osim za probu.",\r
"(radi ga {0} {1})",\r
"(sada",\r
"(saldo). Konta su primjer knjigovođe; za druga konta u okviru grupe 134 iznosi su isti.",\r
"(samo kod retrospektivne korekcije ili reklasifikacije)",\r
"(samo zdravstveno); ne broji se u zaposlene. Za stalne poslove radnog mjesta (kasir, prodavac) ugovor o djelu nije dozvoljen — to je radni odnos ili privremeni i povremeni poslovi.",\r
"(stari put). Preporučuje se povezivanje sa serverom IRIS CORVINA: razmjena je tada skoro trenutna, a Drive služi samo za rezervnu kopiju.",\r
"(stavki bez artikla {0})",\r
"(stornirano)",\r
"(treba",\r
"(trenutna baza „{0}\\" se prethodno snima u Knjig_backup\\\\Arhiva)",\r
"(u nabavnoj, van polja 19).",\r
"(u tom mjesecu dobija srazmjerne sate).",\r
"(ulazi u PR-PDV, polje 19, a ne u nabavnu) · sa PDV",\r
"(unaprijed): na ugovoru mjesečna zakupnina 0, a isplaćeni iznos se unese u mjesecu isplate — klikom na zakupodavca u obračunu tog mjeseca.",\r
"(upisana na ovom računaru)",\r
"(USB/bluetooth čitač upisuje kod u polje), a zatim se upisuje količina. Više telefona može brojati isti popis istovremeno. Nepoznat barkod se jednom veže za artikal i nakon toga se prepoznaje automatski.",\r
"(važi stanje drugog računara) ili",\r
"(važi stanje ovog računara i šalje se ostalima). Odluka važi za sve računare.",\r
"(vrijednost",\r
"(Z br. {0})",\r
"(zatečena roba na početku dana); kretanja su od tog dana.",\r
"(zatvoren)",\r
"(zbirno, {0})",\r
") — minuli rad se računa na ukupan staž. Radnik se u svaki novi mjesec obračuna prenosi sam — uklanja se upisom",\r
") — ne ulazi u lager dok se ne poveže",\r
") — nisu u glavnoj knjizi",\r
") — odznači onaj koji NIJE cigara da i on dobije novu maržu",\r
") — preko servera IRIS CORVINA (bez servera: preko foldera razmjene). Svaka kasa sama uzme nov cjenovnik i izmjene koje se odnose na nju, a izmjene koje je šef uradio na kasi (i nove artikle sa kase) ovaj računar preuzme u sljedećem krugu razmjene. Svaka cijena nosi vrijeme svoje izmjene — važi posljednja izmjena. Menadžer radi isto. Kasa bez veze prima cjenovnik kao fajl (dugmad dolje).",\r
") — suzi period ili pretragu ·",\r
") — uvoze se i bez veze; veza se može dodati sada ili kasnije",\r
") · bez pravila:",\r
") · IOS",\r
") · ukupan trošak firme",\r
") = osnovica",\r
") − porez",\r
") i knjižna odobrenja (PDV",\r
") i otkazni rok od",\r
") ide u poziv na broj odobrenja pri uplati poreza i doprinosa (model 18, PIB-šifra).",\r
") je istekao. Kod primaoca:",\r
") kad god je mijenjan, i",\r
") nijesu u glavnoj knjizi:",\r
") postavi",\r
") razlikuje se od popisa od 31.12.",\r
") su u Pravilniku o radnoj disciplini (katalog ispod).",\r
") upisuje se automatski iz polja „Opština\\". Ukupan staž danas:",\r
") upisuju se pri sljedećem čitanju zaključaka (Povezivanje → Program za kase → „Preuzmi zaključke sada\\").",\r
"), ostala se unose ručno. Stope: 9 % do 100.000, 12 % do 1.500.000, 15 % preko. Rok prijave i uplate: 31. mart (elektronski, IRMS).",\r
"), ovdje; polazne vrijednosti su one iz Opšteg kolektivnog ugovora koji je važio do 30.04.2026. Dokumenti i obračun prava čitaju ove vrijednosti.",\r
"), uvećanja po stažu",\r
"), zatim rješenje (",\r
"); za teže povrede (neopravdano izostajanje, nasilje, krivično djelo…) bez otkaznog roka. Za težu povredu radne obaveze postupak se prvo vodi na kartici „Radna disciplina\\", a otkaz se pravi odatle. Pisano upozorenje se pravi na kartici „Svi dokumenti\\".",\r
"): osnovica",\r
"): zatvorene smjene zadnjih ~90 dana, promet po artiklu, otpise i obrisane račune. Glavni računar ih čita u svakom krugu sinhronizacije:",\r
"). Automatski se vezuje samo tačan iznos; pazar za ostale uplate bira se ovdje.",\r
"). Firma se može preuzeti sa servera, ili se uređaj može upariti novim kodom.",\r
"). Iznos za FZO = dio FZO (već umanjen za naplaćenu participaciju i doplatu) + naknada po FZO receptu; odbitak za softver FZO se upisuje ručno. Recepti stižu sa kasa uz razmjenu cijena (kasa šalje posljednja 62 dana); stornirani i privatni recepti nisu u fakturi.",\r
"). Lakše i teže povrede i mjere (",\r
"). Ne ulaze artikli sa ručno upisanom stopom ni artikli koji imaju stopu sa fakture. Stopa se mijenja samo označenim artiklima, dugmetom „Snimi\\".",\r
"). Potrebno je provjeriti koji je iznos tačan.",\r
"). Povezivanje: kartica „Prodaja po artiklu (uvoz)\\".",\r
"). Računi iz probnog režima kase nisu fiskalni i ne knjiže se. Za probu se uvoz uključuje u Povezivanje → Program za kase („uvozi i probne smjene\\"), a zatim „Preuzmi zaključke sada\\".",\r
"). Rješenje potpisuje direktor i uručuje se radniku;",\r
"). Roba je izašla iz lagera objekta.",\r
"). Roba je razdužena u lageru i trgovačkoj knjizi na dan isporuke.",\r
"). Šifra kase se povezuje sa artiklom u Cjenovniku kasa.",\r
"). Uprava prihoda odbija račun kad se PIB ne slaže sa sertifikatom.",\r
"[ \\\\t]*([\\\\d.,OolI \\\\t-]+)",\r
"[kasaocr] vađenje slike palo:",\r
"[Provjeriti prije predaje: {0}. Iznosi ispod ih ne sadrže.]",\r
"[STORNIRANO {0} korektivnim računom]",\r
"[STORNIRANO {0}: {1}]",\r
"{0}\\n\\nIpak snimiti deklaraciju sa ovim iznosima?",\r
"{0}\\n\\nIpak snimiti kao nabavku?",\r
"{0}\\n\\nIpak snimiti plaćanje?",\r
"{0}\\n\\nIpak upisati uplatu?",\r
"{0}\\n\\nSnimiti pazar uprkos upozorenju?",\r
"{0}\\n\\nSnimiti ugovor?",\r
"{0}\\n\\nU redu: upis nove, druge uplate.\\nOdustani: bez upisa (ista uplata).",\r
"{0}\\n\\nU redu: uplata se upisuje.\\nOdustani: bez upisa (iznos se ispravlja).",\r
"{0}\\n\\nUpisati?",\r
"{0}\\nFirma u programu: {1} (PIB {2}).\\n\\nKalkulacija iz ovog računa ulazi u knjige ove firme, a ulazni PDV u PR-PDV. Napraviti kalkulaciju?",\r
"{0} - PDV {1}%",\r
"{0} – {1} · prethodna cijena = najniža u 30 dana prije sniženja (Zakon o zaštiti potrošača, čl. 15)",\r
"{0} — {1} · nivo: {2}",\r
"{0} — {1} EUR",\r
"{0} — {1} EUR {2}",\r
"{0} — {1} EUR. Stavka se zatvara bez naplate i ne ulazi u saldo.",\r
"{0} — {1}: bruto {2}",\r
"{0} — firma „{1}\\"",\r
"{0} — IRIS Knjigovodstvo",\r
"{0} — kartica Stope → Prirez po opštinama",\r
"{0} — klik skida",\r
"{0} — klik: sljedeća smjena, Shift+klik: uklanjanje",\r
"{0} — nema na kartici dobavljača",\r
"{0} — neradni dan (drugi dan u nedjelju)",\r
"{0} — neradni dan (praznik u nedjelju)",\r
"{0} — po kartici {1} / kod nas {2} / razlika {3} EUR",\r
"{0} — povećanje prodajne vrijednosti",\r
"{0} — račun {1}",\r
"{0} — račun sobe {1}",\r
"{0} — radno vrijeme i smjene",\r
"{0} — smanjenje prodajne vrijednosti (crveni storno)",\r
"{0} — zakup za {1} {2}.",\r
"{0} · {1} – {2} · {3} noći{4}",\r
"{0} · {1} · {2} · nabavna {3} EUR · prodajna {4} EUR",\r
"{0} · {1} EUR (slobodno {2})",\r
"{0} · {1} h ove sedmice — klik dodaje u smjenu",\r
"{0} · {1} stavki · marža {2}",\r
"{0} · {1} stavki{2}",\r
"{0} · {1}. ista uplata",\r
"{0} · datum fakture {1} · rok dostave {2}",\r
"{0} · do {1} · saldo {2} EUR",\r
"{0} · do {1}{2}{3}",\r
"{0} · kontrola: ulaz (nabavna) {1} − KPR bez PDV {2} = {3}",\r
"{0} · na dan {1}",\r
"{0} · na dan {1}{2} · nabavna {3} EUR · prodajna sa PDV {4} EUR",\r
"{0} · na dan {1}{2}{3}",\r
"{0} · od {1} do {2} · promet {3}–{4}",\r
"{0} · period {1}–{2}{3}{4}",\r
"{0} · PIB {1}",\r
"{0} · PIB {1} · poreski period 01.01.{2}. — 31.12.{3}. · u EUR",\r
"{0} · PIB {1}{2}{3} · saldo {4} EUR",\r
"{0} ({1} bez dokumenta)",\r
"{0} ({1} KB)",\r
"{0} ({1} od {2})",\r
"{0} ({1} računa)",\r
"{0} ({1}, isporuka {2}, PDV obaveza {3})",\r
"{0} ({1}, rok {2})",\r
"{0} (bez prerađevina i marinade)",\r
"{0} (bez sobe)",\r
"{0} (brisanje)",\r
"{0} (dijeljenje otkazano)",\r
"{0} (dogovoreno {1}, sati daju {2})",\r
"{0} (drugi dan)",\r
"{0} (EV)",\r
"{0} (ispravka računa {1})",\r
"{0} (JM: kasa {1}, knjige kg; potreban ručni upis)",\r
"{0} (jogurt bez dodataka; samo bijeli sir)",\r
"{0} (kristal, kocka, prah)",\r
"{0} (ne pripada {1} {2} ; razlika se isplaćuje posebno)",\r
"{0} (PIB {1})",\r
"{0} (po nalogu sa računara „{1}\\")",\r
"{0} (prije skeniranja)",\r
"{0} (račun od {1})",\r
"{0} (rok izjašnjenja {1}; postupak okončati do {2})",\r
"{0} (sam)",\r
"{0} (uvezena {1})",\r
"{0} (uvezena {1}{2})",\r
"{0} (već u snimku glavnog)",\r
"{0} {1} — klik: raspoređivanje u smjenu {2}",\r
"{0} {1} — obračun",\r
"{0} {1} · {2} ({3}) — slobodan dan",\r
"{0} {1} (dogovoreno {2}, obračun daje {3})",\r
"{0} {1} (od {2})",\r
"{0} {1} {2} EUR",\r
"{0} {1} {2}, JMB {3}, na radnom mjestu {4}, utvrđuje se pravo na godišnji odmor za {5}. godinu u trajanju od {6} radnih dana{7}: osnov {8} radnih dana ({9}){10}.",\r
"{0} {1} EUR",\r
"{0} {1} ispod nabavne cijene",\r
"{0} {1} je napravljen: {2}",\r
"{0} {1} je ugovorom o radu{2} od {3} godine zasnova{4} radni odnos na određeno vrijeme, do {5} godine, radi obavljanja poslova na radnom mjestu {6}.",\r
"{0} {1} ne pripada {2} {3} (datum zaposlenja/prestanka ili nije aktivan).",\r
"{0} {1} ne pripada obračunu za {2} {3} ({4}). Potrebna je provjera datuma zaposlenja/prestanka i statusa „Aktivan\\" kod radnika.",\r
"{0} {1} ne pripada ovom mjesecu (datum zaposlenja / prestanka).",\r
"{0} {1} postavljena za {2} artikala.",\r
"{0} {1} prijavu",\r
"{0} {1} raspoređen: {2}, {3}, {4} smjena {5}–{6}.",\r
"{0} {1}: {2} mogućih pazara (potrebno ručno povezivanje)",\r
"{0} {1}: automatski je obračunato {2} radnika (puna satnica). Dani, sati i obustave se po potrebi mijenjaju u obračunu radnika.",\r
"{0} {1}: isti broj sa drugog računara — primljen kao {2}",\r
"{0} {1}: izvod nema stanja za kontrolu; automatsko knjiženje nije izvršeno, stavke čekaju pregled",\r
"{0} {1}: ne raspoređuje se u smjene",\r
"{0} {1}: nepoznata PDV stopa {2}; iznos nije razvrstan.",\r
"{0} {1}: nije u radnom odnosu",\r
"{0} {1}: PIB u izvodu je PIB ove firme — račun potvrđen kao naš",\r
"{0} {1}: ugovor o djelu. Naknada nije zarada i nije u ovom obračunu; obračunava se na kartici „Ugovor o djelu\\" (porez 15 % i PIO 10 % na osnovicu umanjenu za 30 %, IOPPD 047/048/079)",\r
"{0} {1}: već postoji {2} pazar(a) koji nisu iz kase {3} ({4} €). Provjera: „Mogući dupli unosi\\".",\r
"{0} {1}: već raspoređen",\r
"{0} {1}: vrsta ugovora je „{2}\\". Naknada po ugovoru o djelu nije zarada i ne obračunava se kroz plate, već na kartici „Ugovor o djelu\\" (Plate radnika → Ugovor o djelu: porez 15 % i PIO 10 % na osnovicu umanjenu za 30 %, IOPPD 047/048/079). Druga mogućnost je ispravka vrste ugovora kod radnika.",\r
"{0} {1}. · IOPPD šifra 047/048/079 · porez i PIO se uplaćuju na {2}{3}",\r
"{0} {1}. · IOPPD šifra osnova 065 · porez se uplaćuje na {2}{3}",\r
"{0} {1}. je otključan. Izmjene su ponovo moguće.",\r
"{0} {1}. je zaključan ({2} dokumenata). Naknadne fakture za taj mjesec idu u tekući period uz obavještenje.",\r
"{0} {1}. Potrebno je prethodno zaključiti {2} i otvoriti narednu (Iskazi → Zaključak godine). Do tada {3} prihodi i rashodi nijesu preneseni u rezultat, pa zaključak {4}. i početno stanje {5}. ne bi bili tačni.",\r
"{0} % — prodajna {1}, PDV {2}, nabavna {3}",\r
"{0} % × {1} mj.",\r
"{0} % za svaku navršenu godinu ukupnog radnog staža",\r
"{0} → firma „{1}\\"",\r
"{0} > ks.ProdajnaCijenaBezPdv + 0.0001",\r
"{0} AND m.MarketID=?",\r
"{0} AND n.Datum>=?",\r
"{0} artikala bez MPC na dan novog popisa; njihova vrijednost nije u zbiru.",\r
"{0} artikala{1}",\r
"{0} br. {1} od {2}{3}",\r
"{0} dana",\r
"{0} EUR",\r
"{0} EUR {1}",\r
"{0} fajl",\r
"{0} fajla",\r
"{0} fajlova",\r
"{0} firma „{1}\\": {2}.{3}",\r
"{0} Fiskalizacija izlaznih računa nije uključena.",\r
"{0} Fiskalizacija: {1}",\r
"{0} Fiskalizovano.",\r
"{0} god.",\r
"{0} hitno ·",\r
"{0} IN ({1})",\r
"{0} izmjena cijena iz {1} ima vrijeme „u budućnosti\\" (sat uređaja ide naprijed). Izmjene su primljene sa vremenom prijema. Potrebna je provjera sata na tom uređaju.",\r
"{0} izvod {1}",\r
"{0} izvoda u fajlu: upisano {1}, već postojalo {2}{3}{4} · {5} novih transakcija{6}",\r
"{0} izvoda: upisano {1}, već postojalo {2}{3}{4}{5} · {6} novih transakcija{7}",\r
"{0} je {1} na odsustvu ({2} – {3}).",\r
"{0} je {1} na ovom uređaju. {2}",\r
"{0} je {1} na ovom uređaju. Server još nije potvrdio prijem slika firme (starija verzija servera ili još nije bilo razmjene) — slika se šalje kad server to podrži.",\r
"{0} je {1} već u drugoj smjeni.",\r
"{0} je {1}.",\r
"{0} je {1}. Server ne prima slike ove firme — slika ostaje na ovom uređaju.",\r
"{0} je postavljen i poslat na server (vide ga Kasa, Menadžer i ostali računari firme).",\r
"{0} je uklonjen i sa servera (Kasa, Menadžer i ostali računari firme).",\r
"{0} je veći od {1} × {2} piksela.",\r
"{0} je veći od {1} KB.",\r
"{0} Kalkulacija je napravljena uz potvrdu.",\r
"{0} Kalkulacija se ne pravi automatski.",\r
"{0} kalkulacija u izabranom periodu · klik na red za detalje",\r
"{0} min",\r
"{0} min{1}",\r
"{0} naloga nije moglo da se pročita (bez datuma ili iznosa)",\r
"{0} naplata od kupaca ({1} EUR)",\r
"{0} nije poslat na server: {1}",\r
"{0} nije u obliku ab123ab123 (unijeto: {1})",\r
"{0} noći",\r
"{0} novih",\r
"{0} novih, {1} dupl.{2}",\r
"{0} objekata",\r
"{0} objekata: {1}…",\r
"{0} od {1}",\r
"{0} od {1} faktura nema upisan rok plaćanja (Poreska uprava ga nije dostavila) i nisu u ovom pregledu.",\r
"{0} odliva",\r
"{0} Opoziv na serveru nije izvršen.",\r
"{0} označenih strana nije potvrđeno (strane {1}).\\n\\n{2}\\n\\nSnimiti ove strane nakon provjere prema slici?",\r
"{0} pazar(a) bez ispravne podjele po stopama PDV-a (promet {1} EUR{2})",\r
"{0} pazar(a): upisano „Ukupno\\" se ne slaže sa kolonama po stopama. Knjiga prikazuje iznose izračunate iz kolona po stopama. Ispravka pazara: ekran „Unos pazara\\". Redovi su označeni crvenom bojom.",\r
"{0} pazara",\r
"{0} pazara {1}–{2}",\r
"{0} pazara nema podjelu po stopama PDV. Prihod sadrži i PDV (precijenjen).",\r
"{0} plaćanja dobavljačima ({1} EUR)",\r
"{0} po nalogu sa računara „{1}\\"",\r
"{0} po računu {1}",\r
"{0} pogođeno po iznosu otvorene fakture",\r
"{0} pojeftinilo",\r
"{0} poskupjelo",\r
"{0} Poslodavac će Zaposlenog odjaviti sa obaveznog socijalnog osiguranja sa danom prestanka radnog odnosa i uručiti mu primjerak odjave. Sporazum je sačinjen u 3 istovjetna primjerka (po jedan za svaku stranu i jedan za ovjeru).",\r
"{0} Potrebno je provjeriti internet vezu. Promjene čekaju i šalju se kad se veza uspostavi.",\r
"{0} pravno lice",\r
"{0} puta",\r
"{0} radnika nosi radno mjesto kojeg nema u sistematizaciji: {1}{2}",\r
"{0} redova",\r
"{0} redova ima razliku do 2 EUR (ukupno {1} EUR). Razlika potiče od zaokruživanja kase na računima dnevnog pazara i ne zahtijeva ispravku.",\r
"{0} redova ima razliku veću od 2 EUR između „Iznos sa PDV\\" i zbira osnovica i poreza (ukupno {1} EUR): {2}{3}. Pazar tog dana nije ispravno razdvojen po stopama. Ispravka: ekran „Unos pazara\\" (pazar po datumu i objektu iz reda). Ti redovi su označeni crvenom bojom.",\r
"{0} smjena: početak i kraj se upisuju u obliku SS:MM (npr. 08:00 i 16:30).",\r
"{0} smjena: početak i kraj su isti.",\r
"{0} snimljeno: {1}",\r
"{0} stavk{1} ({2} EUR) koj{3} u našoj evidenciji",\r
"{0} stavk{1} sa većim iznosom od naše fakture (+{2} EUR)",\r
"{0} stavki bez prodajne cijene knjiženo po nabavnoj ({1} EUR)",\r
"{0} stavki iz {1} kalkulacija · pregled prije štampe",\r
"{0} Stiže kasama sa sljedećim cjenovnikom.",\r
"{0} stranih dobavljača ima obavezu iz ranijih naloga na {1}; prenos ručnim nalogom na {2} (dobavljači u inostranstvu) ili ponovno knjiženje otvorenog mjeseca",\r
"{0} termina, {1} h.",\r
"{0} traje duže od {1} s. Potrebno je ponoviti čitanje.",\r
"{0} Ukupno: prodajna vrijednost bez PDV {1} EUR, nabavna vrijednost prodatog {2} EUR, RUC {3} EUR ({4} % od prodajne, {5} % na nabavnu). Prodaja bez nabavne cijene: {6} EUR bez PDV.",\r
"{0} ulazni dokument(a) sa stopom PDV-a van 21 / 15 / 7 / 0 %",\r
"{0} upozorenja ·",\r
"{0} uređaja",\r
"{0} Vrijednost {1} EUR; pazar iz trgovačke knjige {2} EUR{3}; razlika {4} EUR (pozitivna: manjak, negativna: višak).{5}",\r
"{0} WHERE a.KasaSifra=?",\r
"{0} WHERE d.DokID=?",\r
"{0} WHERE d.KorektivniZaDokID=?",\r
"{0} WHERE k.KalkID=?",\r
"{0} za označene artikle ({1})?",\r
"{0} Za vrijeme korišćenja godišnjeg odmora {1} ima pravo na naknadu zarade u visini zarade koju bi ostvari{2} da radi ({3}). Izmjena termina moguća je samo zbog potreba procesa rada, najkasnije {4} radnih dana prije početka i uz saglasnost {5} ({6}).",\r
"{0} Zaključati mjesec?",\r
"{0} Zaposleni potvrđuje da je sa tim upoznat i da sporazum zaključuje slobodnom voljom, bez prinude i zablude.",\r
"{0} zaposlenih — do 10 zaposlenih nema doprinosa",\r
"{0} zaposlenih (11–19), bez lica sa invaliditetom → 5 % prosječne zarade {1} = {2} EUR",\r
"{0} zaposlenih → obavezno {1} {2} sa invaliditetom{3}, {4}, nedostaje {5} × {6} = osnovica {7} × 20 % = {8} EUR",\r
"{0} zaposlenih, obavezno {1}, {2} — nema doprinosa",\r
"{0} zaposlenih, zaposleno lice sa invaliditetom — nema doprinosa",\r
"{0} Zaposlenom je {1}dostavljeno pisano upozorenje sa razlozima za otkaz i dokazima i ostavljen mu je rok od najmanje {2} radnih dana za odgovor ({3}). Razlog za otkaz je opravdan u smislu {4} i ne spada u razloge iz {5}. Cijeneći sve okolnosti, odlučeno je kao u dispozitivu.",\r
"{0}–{1} (jedan period)",\r
"{0}, {1} EUR",\r
"{0}, {1}, kol. {2}{3}",\r
"{0}, boravišna taksa {1} odvojena (obaveza prema opštini)",\r
"{0}, dana {1}",\r
"{0}, drugi prolaz (kontrola se ne slaže)",\r
"{0}, PIB {1}",\r
"{0}, serija {1}: ukloniti sa spiska povučenih serija?",\r
"{0}: {1} — gotovina {2} EUR",\r
"{0}: {1} ({2} u smjeni).",\r
"{0}: {1} (novi pokušaj za {2} min)",\r
"{0}: {1} dana odmora iz {2}. nije iskorišćeno; rok je {3}{4}. ({5}).",\r
"{0}: {1} izvoda. Upis nije izvršen.",\r
"{0}: {1} je raspoređen u {2} smjene ({3} h).",\r
"{0}: {1} kalkulacija",\r
"{0}: {1} kalkulacija za {2}/{3}.",\r
"{0}: {1} KB",\r
"{0}: {1} skenova",\r
"{0}: {1} stavki ({2} odliva) · dobavljač prepoznat na {3}.{4} Stavke je potrebno pregledati prije unosa.",\r
"{0}: {1} uzastopnih radnih dana od {2}, bez slobodnog dana.",\r
"{0}: {1}. Odluka o mjeri se donosi u roku od {2} dana (do {3}){4}.",\r
"{0}: {1}. Ostale stavke (pazar, POS, plate, nepoznati) čekaju pregled u Banka → Transakcije.{2}",\r
"{0}: {1}. Prirez ({2} %) se plaća opštini prebivališta; potrebno je dopuniti podatke radnika",\r
"{0}: {1}. Važi za sve naredne fakture.",\r
"{0}: +{1} (ukupno {2}).",\r
"{0}: +{1} {2} (ukupno prebrojano: {3}).",\r
"{0}: adresa „{1}\\" nije ispravna.",\r
"{0}: bolovanje pokriva cio period rada u mjesecu ({1}), a u obračunu postoji i redovna zarada. Periodi u IOPPD se ne smiju preklapati; potrebno je ispraviti datume odsustva ili stavke obračuna.",\r
"{0}: broj dana službenog puta je obavezan (neoporezivo = dana × dnevnica; pola dnevnice = 0,5), kao i obroci ako su obezbijeđeni.",\r
"{0}: bruto {1} EUR. Potrebna je provjera stavki primanja radnika",\r
"{0}: čas u obliku 14:00",\r
"{0}: čeka se izjašnjenje zaposlenog do {1} (ćutanje = saglasnost sa navodima).",\r
"{0}: datum ili null.",\r
"{0}: fajl je druge firme (PIB {1}).",\r
"{0}: fajl Menadžera sa drugim ključem firme ({1}) je preskočen.",\r
"{0}: izaberite datum.",\r
"{0}: između 0 i 100 %",\r
"{0}: iznos nije ispravan.",\r
"{0}: iznosi su pročitani ispod etiketa (kolona po kolona). Potrebna je provjera da je svaki iznos na svom mjestu.",\r
"{0}: izrečen prestanak radnog odnosa. Potrebno je napraviti rješenje o otkazu ugovora o radu ({1}).",\r
"{0}: mjesec {1}/{2} je zaključan. Izmjena nije moguća.",\r
"{0}: nabavna vrijednost zaliha je negativna {1}",\r
"{0}: naknada {1} bruto → isplata {2} EUR (porez {3}, PIO {4}).{5}",\r
"{0}: nalog je upisan. U šifarnik ovog računara ništa nije upisano; uvoz izvršava glavni računar.{1}",\r
"{0}: nalog je upisan.{1}",\r
"{0}: nedjelja {1} sklonjena.",\r
"{0}: neispravan broj",\r
"{0}: neoporezivi iznos za ovaj slučaj je obavezan (polje „neop. do\\" u stavci; za otpremninu zbog tehnološkog viška najniži iznos po Zakonu o radu).",\r
"{0}: neto {1} EUR je ispod minimalne ({2}{3})",\r
"{0}: novčana kazna ({1} % × {2} mj.) nije odbijena od plate. Izvršenje mora početi do {3} ({4} dana od konačnosti, {5}).",\r
"{0}: obustave {1} EUR prelaze {2}% neta ({3}); dozvoljeno je do 1/3 zarade, za izdržavanje do 1/2 (Zakon o radu, čl. 106)",\r
"{0}: odluka o mjeri donesena {1}. Potrebno je uručiti odluku zaposlenom i upisati datum uručenja (dostava u {2} dana, do {3}).",\r
"{0}: odmor od {1} do {2} je u planu, a rješenje nije napravljeno. Zakon propisuje dostavu rješenja {3} dana prije početka ({4}).",\r
"{0}: označen kao „ne radi\\".",\r
"{0}: periodi bolovanja pod različitim IOPPD osnovama ({1} i {2}) se preklapaju, što u prijavi nije dozvoljeno. Potrebno je ispraviti datume odsustava ili ostaviti jednu vrstu bolovanja za isti period.",\r
"{0}: početak i kraj su isti. Cio dan: 00:00–24:00.",\r
"{0}: početno stanje {1}. je privremeno ({2} EUR, saldo nezaključene knjige {3}.). Prenos postaje konačan zaključenjem knjige {4}.",\r
"{0}: popust {1} %.",\r
"{0}: postupak se morao okončati do {1} ({2} mj. od pokretanja, {3}). Odluka više nije moguća; postupak je potrebno obustaviti.",\r
"{0}: povreda od {1}: potrebno je uručiti pisano upozorenje (rok {2} dana od saznanja: {3}); zastarjelost pokretanja {4}.",\r
"{0}: povreda od {1}: rok za pokretanje postupka je istekao {2} (zastarjelost {3} mj., {4}). Postupak je potrebno obustaviti.",\r
"{0}: prirez {1} %, a za opštinu {2} je {3} %. Potrebna je provjera stope ({4})",\r
"{0}: prirez {1} %.",\r
"{0}: probni rad ističe {1} (za {2} dana). Ako zaposleni nije zadovoljio, akt o tome se donosi prije isteka; u suprotnom se smatra da je zadovoljio ({3}).",\r
"{0}: prodato {1} bez PDV, raspoloživa RUC {2}{3}",\r
"{0}: rad na određeno od {1}; zakonska granica od {2} mjeseca pada {3} ({4}); poslije toga ugovor mora biti na neodređeno.",\r
"{0}: raspoređen {1}, a na odsustvu je ({2} – {3}).",\r
"{0}: raspoređen {1}, a tražio je slobodan dan za svoj vjerski praznik; rad tog dana se plaća kao rad na dan praznika.",\r
"{0}: roba po prodajnoj ({1}) je u minusu {2} — nema početnog stanja ili popisa",\r
"{0}: RUC ({1}) je dugovna {2} — realizovano više nego ukalkulisano",\r
"{0}: saldo 31.12.{1}. je negativan ({2} EUR). Roba ne može biti u minusu; potrebno je provjeriti popis, prenose i nivelacije.",\r
"{0}: sedmica od {1} ima {2} h (maksimum {3} h).",\r
"{0}: stopa {1} → {2} (sa fakture).",\r
"{0}: stopa prireza opštine {1} ({2} %) nije potvrđena odlukom opštine. Potrebna je provjera odluke i upis stope (Stope → Prirez po opštinama)",\r
"{0}: telefon {1}.",\r
"{0}: u {1} se ne prijavljuje (iznos 0).",\r
"{0}: u obračunu je naknada za bolovanje (IOPPD osnov {1}), a nije upisan period bolovanja (od–do). Potrebno je upisati odsustvo „Bolovanje\\" ili „Trudničko bolovanje\\" sa datumima (Smjene radnika → Odsustva i praznici) i ponoviti izvoz.",\r
"{0}: u pregledu na računaru „{1}\\" {2}, na glavnom računaru {3}.",\r
"{0}: u šifarniku {1}, u fajlu {2}",\r
"{0}: ugovor na određeno ističe {1} (za {2} dana). Potrebno je pripremiti novi ugovor, aneks ili rješenje o prestanku.",\r
"{0}: ugovor na određeno je istekao {1} (prije {2} dana). Potrebna je hitna odluka: novi ugovor, aneks ili rješenje o prestanku. Zaposleni koji nastavi da radi poslije isteka po zakonu je na neodređeno ({3}).",\r
"{0}: ukloniti farmaceutske podatke? Artikal ostaje na kasama kao obična roba.",\r
"{0}: upisan prestanak {1}, a nema dokumenta o prestanku (sporazum / rješenje). Potrebno je napraviti dokument i odjaviti radnika sa osiguranja.",\r
"{0}: upisan rad u nedjelju {1}.",\r
"{0}: upisano {1}{2}{3}{4}",\r
"{0}: upišite cio broj.",\r
"{0}: važi polazna stopa {1} %.",\r
"{0}: vraćen je iznos iz ugovora.",\r
"{0}: vraćen na zajedničke smjene.",\r
"{0}: vrijeme se upisuje kao SS:MM (od 00:00 do 23:59, kraj do 24:00).",\r
"{0}: za period {1}–{2} već postoji uvezena prodaja ({3}).",\r
"{0}: zakupnina za {1} je postavljena na {2} EUR (bruto).",\r
"{0}: zaposleni {1} {2} {3}, prihod {4} {5} {6}, aktiva {7} {8} {9} → prekoračeno {10} od 3",\r
"{0}:\\\\Moj disk",\r
"{0}:\\\\My Drive",\r
"{0}. {1} {2}: mjesto već popunjeno ovdje",\r
"{0}. {1} {2}: ne raspoređuje se u smjene",\r
"{0}. {1} {2}: nije u radnom odnosu",\r
"{0}. {1} {2}: odsustvo",\r
"{0}. {1} {2}: već raspoređen",\r
"{0}. {1}: radnik nije nađen",\r
"{0}. {1}: smjena {2} ne postoji",\r
"{0}. Artikala {1}. Po stopi PDV-a: {2}. Razlika u cijeni (prodajna bez PDV − nabavna): {3} EUR.",\r
"{0}. Fajl se uvozi na portalu Poreske uprave u IOPPD za {1}.",\r
"{0}. godina",\r
"{0}. kvartal {1}.",\r
"{0}. Potrebna je provjera prema PDF-u.",\r
"{0}. Rad se obavlja u smjenama (uključujući subotu, nedjelju i praznike kad je objekat otvoren), po rasporedu koji Poslodavac utvrđuje pisanom odlukom i objavljuje zaposlenima najmanje {1} dana unaprijed ({2}); noćni rad je rad od 22 do 06 časova ({3}), a noćna smjena uzastopno traje najduže jednu radnu sedmicu.",\r
"{0}. smjenu",\r
"{0}{1} → {2}\\n\\nVelika promjena cijene. Potvrditi novu cijenu?",\r
"{0}{1} EUR",\r
"{0}{1} od {2}",\r
"{0}{1} ORDER BY m.Naziv",\r
"{0}{1} Upisati cijenu?",\r
"{0}%: osnovica {1} / PDV {2}",\r
"{0}+ god. → +{1}",\r
"{0}=COALESCE(?, {1})",\r
"{0}>=? AND {1}<=?",\r
"{0}Baza glavnog računara nije preuzeta ({1}). Preuzimanje: Povezivanje → „Preuzmi kompletnu bazu glavnog\\".",\r
"{0}broj na uređaju pošiljaoca: {1}",\r
"{0}kasa {1}: {2} ({3})",\r
"{0}Mjeseci prije {1} ostaju nepromijenjeni (po datumu računa), pa se predate prijave ne mijenjaju. Od {2} račun se knjiži u mjesecu prijema.\\n\\nNastaviti?",\r
"{0}Nastaviti?",\r
"{0}Neiskorišćeno je {1} EUR. Na ovoj strani ({2} objekti) nema otvorenih faktura.\\n\\nPrimijeniti ostatak i na fakture druge strane ({3} objekata)?",\r
"{0}Novih transakcija: {1}{2}{3}{4}{5}. Duplikati se ne knjiže; stavka koja je stvarno druga uplata označava se dugmetom „nije duplikat\\".",\r
"{0}Razmjena: poslato {1} promjena, primljeno {2} paketa: novih zapisa {3}, već postojećih {4}.{5}{6}{7}",\r
"{0}Upisano novih zapisa: {1}, poslato promjena: {2}.{3}",\r
"{mjesto}: {naziv} · {stara} → {nova}",\r
"* iznos nije u fajlu: količina × MPC objekta na dan.",\r
"* Orijentaciona zaliha objekta (nabavljeno + primljeno − izdato prenosima; ne oduzima maloprodaju). Prodajna cijena je bez PDV (kao na kalkulaciji) i predlaže se sa zadnje kalkulacije artikla.",\r
"* Zaliha izvora je orijentaciona (nabavljeno + primljeno − izdato prenosima; ne oduzima maloprodaju).",\r
"&amp;",\r
"&gt;",\r
"&lt;",\r
"&quot;",\r
"% = porez",\r
"% godišnje — referentna stopa + 8 p.p., Zakon o rokovima izmirenja novčanih obaveza; stopu objavljuje CBCG) i naknadom troškova naplate 40 €:",\r
"% i PIO",\r
"% na nabavnu",\r
"% na osnovicu (na teret izvršioca); prirez na porez po opštini izvršioca. Primjer: 1.000 → osnovica 700, porez 105, PIO 70, prirez 13 % = 13,65, isplata 811,35. Isplata ulazi u",\r
"% od prodajne ·",\r
"% osnovice. Zakupodavac dobija zakupninu umanjenu za porez; prirez na taj porez plaća firma opštini zakupodavca. Obračun mjeseca ulazi u",\r
"% po godini).",\r
"↩ poništi i ponovi",\r
"↪ Prebaci u troškove",\r
"⚠ čeka provjeru računa primaoca",\r
"✅ Kontrolna lista zatvaranja —",\r
"✓pravilo",\r
"％ Promjena marže",\r
"％ Promjena marže na kalkulacijama",\r
"% zarade",\r
"%), porez",\r
"%); obračun je potrebno potvrditi sa knjigovođom. Prazno polje MP uz upisanu VP se izračunava pri snimanju.",\r
"%); porez",\r
"• … još {0}",\r
"• {0} EUR — {1}",\r
"• {0} EUR{1}, unesen {2}",\r
"• str. {0}: {1}",\r
"• str. {0}: {1} {2}",\r
"© {0} {1}, autor i nosilac prava. Sva prava zadržana.",\r
"← ovaj računar",\r
"→ Moji podaci. Svi kodovi su oblika",\r
"→ na",\r
"→ na cio",\r
"→ protivstav",\r
"→ redovni",\r
"→ sa troškovima",\r
"→ stvarna",\r
"↔ Drive folder koji gleda računar. Bez dodatne aplikacije: „⬆ Pošalji promjene\\" (u dijalogu se bira Drive) i „Učitaj iz Drive-a…\\". Uz server IRIS CORVINA ovo nije potrebno.",\r
"↩ poništi",\r
"↩ Poništi knjiženje",\r
"↩ Poništi potvrdu",\r
"↩ Poništi prestanak",\r
"↩ Poništi zaključak",\r
"↩ Poništi zaključenje",\r
"↩ Vrati iznos iz ugovora",\r
"↩ Vrati prethodnu verziju programa",\r
"↩ zajedničke",\r
"↺ Podrazumijevana",\r
"↺ Poništi raspored",\r
"↻ Osvježi iz glavne knjige",\r
"↻ Osvježi kontrole",\r
"↻ ponovi",\r
"↻ Ponovo proknjiži",\r
"↻ Vrati šablon iz podataka",\r
"⇄ Promijeni firmu",\r
"⇄ Razmijeni sa kasama sada (preuzmi izmjene + objavi cjenovnik)",\r
"⇄ razmijeni sa…",\r
"⇢ Rasporedi na stavke",\r
"+ {0} kod nas od {1}",\r
"+ nezap.",\r
"+ nov objekat „",\r
"+ Nova faktura",\r
"+ Nova ponuda",\r
"+ nova vrsta…",\r
"+ prirez",\r
"+ stimulacija",\r
"+ trošak/jed",\r
"+ Unesi uplatu kupca",\r
"+ zavisni troškovi",\r
"+{0} dana prenijeto iz {1}. (iskoristiti do {2}{3}.)",\r
"+{0} fali",\r
"+dani",\r
"<!doctype html>",\r
"= dobit prije poreza {0} − porez {1}",\r
"= nabavna vrijednost",\r
"| s:<šifra> | n:",\r
"~iznos",\r
"− nabavna vrijednost prodate robe {0} (poč. zalihe {1} + nabavka {2} − zalihe na kraju {3}{4})",\r
"− normirani troškovi",\r
"− obustave",\r
"− porez",\r
"− preplata {0}",\r
"− roba",\r
"− standardni troškovi",\r
"− troškovi {0} · amortizacija {1} · zarade sa doprinosima {2}",\r
"− troškovi i plate",\r
"⌨ Ukucaj barkod",\r
"⏰ Podsjetnici (",\r
"⏸ {0} {1}: nije uvezeno izvoda: {2}; račun nije potvrđen kao račun ove firme (potrebna oznaka „naš račun\\" ili „druga firma\\")",\r
"⏹ Prekini",\r
"⏹ Prekinuto.",\r
"▲ biram",\r
"▲ Pravila",\r
"▲ sakrij",\r
"▲ sakrij druge objekte",\r
"▲ Sakrij šifarnik smjena",\r
"▶ Pokreni Outlook",\r
"▼ iz drugih objekata ({0})",\r
"▼ Napredno: šifarnik svih smjena (pauza, boja, zajedničke smjene)",\r
"▼ ne raspoređuju se u smjene ({0})",\r
"▼ Pravila raspoređivanja",\r
"▼ unos dana",\r
"☀ Nedjelje",\r
"☁ Napravi kopiju odmah",\r
"♻ Rasporedi ponovo od nule",\r
"⚖ Donesi odluku + rješenje (PDF)",\r
"⚖ Marže po stavci",\r
"⚙ Automatski rasporedi",\r
"⚙ Napravi kalkulacije ({0})",\r
"⚙ Obračunaj sve",\r
"⚙ Pravila (pravilnik)",\r
"⚙ Predlog za",\r
"⚙ Preračunaj",\r
"⚙ Rasporedi sve objekte",\r
"⚠ {0}: PIB na izvodu ({1}) nije PIB ove firme ({2}), a račun ima proknjižena plaćanja. Brisanje nije izvršeno. Potrebno je provjeriti PIB firme (Podešavanja); račun druge firme se označava ručno („Druga firma\\").",\r
"⚠ bez Z broja",\r
"⚠ dan zauzet",\r
"⚠ Izvrši renumeraciju",\r
"⚠ kontrola zbira se ne slaže",\r
"⚠ mogući duplikat",\r
"⚠ nije uravnoteženo",\r
"⚠ proknjiženo — primalac se ne slaže (za provjeru)",\r
"⚠ sistematizacija",\r
"⚠ Sporne stavke dobavljača",\r
"⚠ za provjeru ({0})",\r
"⚡ Brzi unos (radnik × dan)",\r
"✂ Raskid ugovora po isteku —",\r
"✂ Raskid ugovora po isteku…",\r
"✅ Ukupna aktiva = ukupna pasiva.",\r
"✉ Odgovor na IOS e-poštom",\r
"✍ Ručni unos fakture (bez QR)",\r
"✍ Upiši uručenje odluke",\r
"✎ Datum / naziv",\r
"✎ Izmijeni kupca",\r
"✓ {0} — {1}: {2} izvoda, upisano {3}, već postojalo {4}, {5} novih transakcija{6}",\r
"✓ {0} {1} {2}: {3} novih, {4} već evidentirano{5}{6}{7}",\r
"✓ potvrđena sedmica",\r
"✓ Potvrdi sedmicu",\r
"✓ Pročitaj uneseni tekst",\r
"✓ proknjižen",\r
"✓ slaže se",\r
"✓ uvezen",\r
"✓ zamjenjuje presjek",\r
"✓upamćen",\r
"✔ fiskalizovan",\r
"✔ Potvrdi raspored",\r
"✔ Potvrdi sedmicu",\r
"✔ Pregledano — nema šta da se unese",\r
"✔ Primijeni marže",\r
"✔ Promijeni maržu na {0} kalkulacija",\r
"✔ UPIŠI",\r
"✔ Upiši sate iz dana",\r
"✔ Upiši u ovaj obračun",\r
"✗ {0} {1} ({2}): čitanje nije završeno — ostaje za ručni uvoz",\r
"✗ {0} {1}: kontrola se ne slaže — nije uvezen",\r
"✗ {0}: kontrola se ne slaže — nije uvezen{1}",\r
"❌ Aktiva i pasiva nijesu jednake. Razlika je u ručnim ispravkama ili nalozima (bruto bilans mora biti u ravnoteži).",\r
"➕ Dodaj konto",\r
"➕ Dodaj kupca",\r
"➕ Dodaj objekat",\r
"➕ Dodaj označene (",\r
"➕ Dodaj period",\r
"➕ Dodaj popis",\r
"➕ Dodaj praznik",\r
"➕ dodaj radnika",\r
"➕ Dodaj razliku (",\r
"➕ Dodaj trošak",\r
"➕ još jedna smjena",\r
"➕ Nova povreda / postupak",\r
"➕ Novi otpis",\r
"➕ Novi prenos",\r
"➕ red",\r
"➕ Ručni unos transakcije",\r
"➕ u grupu",\r
"➕ Unesi odsustvo",\r
"➕ Upiši šemu",\r
"➕ Upiši u plan + rješenje…",\r
"➕ Započni popis",\r
"➖ Odbij kaznu u ovom mjesecu",\r
"➜ Kalkulacija iz QR",\r
"➜ Pročitaj pazare",\r
"➜ Uporedi karticu",\r
"➡ Napravi fakturu iz ponude",\r
"⤵ Popuni CIJENE iz postojećih podataka",\r
"⤵ Popuni MARŽE iz postojećih podataka",\r
"⤵ Popuni polaznu sistematizaciju",\r
"⤵ Uvezi cjenovnik iz fajla (kasa-paket)…",\r
"⤵ Uvezi izmjene sa kase / iz Menadžera (fajl)…",\r
"⤵ Uvoz svih izvoda („čista godina\\")",\r
"⬆ Pošalji promjene",\r
"⬇ Izvezi kopiju baze (.knj.db)",\r
"⬇ Povuci pazare iz kase",\r
"⬇ Preuzmi promjene",\r
"⬇ Preuzmi zaključke sada",\r
"⬇ XML (portal)",\r
"🌐 Nova firma sa servera IRIS CORVINA",\r
"🌐 Poveži sa serverom (nova firma)",\r
"🌐 Preuzmi podatke firme sa servera",\r
"🌐 Server IRIS CORVINA (razmjena)",\r
"🎯 Uklopi",\r
"🏘 Prirez po opštinama (Excel)",\r
"🏛 IOPPD XML (e-prijava)",\r
"🏦 Transakcije koje čekaju",\r
"👁 Pregled prije štampe",\r
"👤 Isplate fizičkim licima (Excel)",\r
"💲 Pošalji MPC na kasu",\r
"💶 Unesi IQOS iznose",\r
"💸 Nalog za plaćanje PDV-a",\r
"💸 Nalozi za plaćanje (Excel)",\r
"💾 Kopiraj cijelu bazu u folder",\r
"💾 Rezervna kopija (Google Drive)",\r
"💾 Sačuvaj cjenovnik u fajl (za kasu bez foldera)",\r
"💾 Sačuvaj izmjene u fajl",\r
"💾 SNIMI",\r
"💾 Snimi deklaraciju",\r
"💾 Snimi fakturu i kalkulaciju",\r
"💾 Snimi i obračunaj",\r
"💾 Snimi i primijeni na stavke koje čekaju",\r
"💾 SNIMI ISPRAVKU",\r
"💾 Snimi izabrane pazare",\r
"💾 Snimi iznos za ovaj mjesec",\r
"💾 Snimi kupca",\r
"💾 Snimi nalaz — prati sporne stavke",\r
"💾 Snimi nalog",\r
"💾 Snimi napomene",\r
"💾 Snimi odluku",\r
"💾 Snimi pazar",\r
"💾 SNIMI PAZAR",\r
"💾 Snimi PD prijavu",\r
"💾 Snimi PDF",\r
"💾 Snimi plaćanje",\r
"💾 Snimi podatke",\r
"💾 Snimi pravila",\r
"💾 Snimi predati oblik",\r
"💾 Snimi prijavu (porez",\r
"💾 Snimi uplatu",\r
"💾 Snimi uslugu",\r
"💾 Unesi označena plaćanja",\r
"💾 Zabilježi da je kartica provjerena",\r
"📂 Izaberi fajl (PDF / Excel / CSV)",\r
"📂 Otvori folder",\r
"📂 Ponovo otvori",\r
"📂 Uvezi bazu (.knj.db)",\r
"📂 Uvezi postojeću bazu (.knj.db)",\r
"📄 IOPPD pregled (PDF)",\r
"📄 IOS dobavljaču (PDF)",\r
"📄 IOS kupcu (PDF)",\r
"📄 Izvezi spisak staro → novo (Excel)",\r
"📄 Nalog za knjiženje (PDF)",\r
"📄 Napravi dokument",\r
"📄 Napravi odluku",\r
"📄 Obračun (PDF)",\r
"📄 Obračun zakupa (PDF)",\r
"📄 Odgovor na IOS (PDF)",\r
"📄 Odluka o razvrstavanju (PDF)",\r
"📄 Odluka: rad na praznik",\r
"📄 PDF kalkulacije",\r
"📄 Popisna lista (PDF)",\r
"📄 Pravilnik (PDF)",\r
"📄 Pravilnik o disciplini (PDF)",\r
"📄 Pravilnik o sistematizaciji (PDF)",\r
"📄 QR iz PDF računa",\r
"📄 Rješenje ponovo",\r
"📄 Ručni uvoz izvoda (PDF)",\r
"📄 Skenirani dnevni izvještaji (PDF)",\r
"📄 Skenirani izvještaji (PDF)",\r
"📄 Učitaj PDF izvod banke",\r
"📄 Ugovor o radu (PDF)",\r
"📄 Upozorenje (PDF) + upiši uručenje danas",\r
"📅 Premjesti mjesec",\r
"📅 Rokovi obaveza",\r
"📅 Sedmica — svi objekti",\r
"📉 Efektivna marža sa troškovima",\r
"📊 IOPPD pregled (Excel)",\r
"📊 Listići — svi (Excel)",\r
"📊 Nalog za knjiženje (Excel)",\r
"📊 Obračun (Excel)",\r
"📊 Obračun zakupa (Excel)",\r
"📊 Platni listić (Excel)",\r
"📊 Zapisnik (Excel)",\r
"📊 Zbirni nalog rashoda za mjesec",\r
"📋 Izmjene poslije zaključenja —",\r
"📋 Katalog povreda (lakše / teže)",\r
"📋 Nalijepi drugi presjek",\r
"📋 Normativ (Pravilnik)",\r
"📋 Pripremi ovaj mjesec za slanje",\r
"📋 Tekst zahtjeva dobavljaču (kopiraj)",\r
"📑 Specifikacija (mjesečna)",\r
"📑 Specifikacija dobavljača",\r
"📒 Proknjiži popis",\r
"📘 Proknjiži (minus kalkulacija)",\r
"📤 Objavi bazu (telefoni i sporedni računari)",\r
"📥 Otvori poštu",\r
"📥 Preuzmi iz javnog iskaza",\r
"📥 Preuzmi kompletnu bazu glavnog",\r
"📥 Proknjiži na kraj mjeseca",\r
"📥 Učitaj karticu dobavljača",\r
"📥 Učitaj obrađenu bazu (.knj.db)",\r
"📥 Uvoz iz fajla (CSV/Excel)",\r
"📦 Paket za predaju",\r
"📦 Sa stavkama…",\r
"📧 1. Provjeri poštu od datuma",\r
"📧 Pošta",\r
"📧 Pošta i izvodi banke",\r
"📧 Pročitaj poštu i uvezi izvode",\r
"📷 Popis skenerom (barkod)",\r
"📷 SKENIRAJ BARKOD",\r
"📷 Slikaj ponovo",\r
"📷 Slikaj presjek",\r
"📷 Slikaj presjek iz kase",\r
"🔁 Sedmica-šablon:",\r
"🔄 Obračunaj mjesec iz ugovora",\r
"🔄 Preračunaj po stopama",\r
"🔄 Sinhronizuj sada",\r
"🔍 Pročitaj izvod",\r
"🔍 Pronađi bazu",\r
"🔍 Pronađi Google Drive",\r
"🔍 Provjeri duple artikle",\r
"🔍 Provjeri odmah",\r
"🔍 Provjeri ovu firmu",\r
"🔎 Bez barkoda (po nazivu)",\r
"🔎 Nema barkoda — nađi po nazivu",\r
"🔎 Prepoznaj cigare u šifarniku",\r
"🔐 Upiši IIC/FIK ručno",\r
"🔒 zaključana",\r
"🔒 Zaključavanje poreskih knjiga",\r
"🔒 Zaključi (nabavna)",\r
"🔒 Zaključi (prodajna)",\r
"🔒 Zaključi godinu",\r
"🔒 Zaključi knjigu",\r
"🔒 Zaključi mjesec",\r
"🔒 Zaključi obračun",\r
"🔓 Otključaj mjesec",\r
"🔗 Automatski poveži plaćanja sa fakturama",\r
"🔗 Poveži i preuzmi firmu",\r
"🔗 Spoji duple artikle",\r
"🔗 Upari uplate sa izvoda",\r
"🔢 Pripremi renumeraciju (pregled)",\r
"🔢 Provjeri niz brojeva",\r
"🔦 Svjetlo",\r
"🕘 Obračunaj po smjenama",\r
"🕘 Sati iz smjena",\r
"🖨 automatski štampaj kalkulaciju",\r
"🖨 Automatski štampaj svaku kalkulaciju napravljenu skeniranjem",\r
"🖨 Listići — svi (PDF)",\r
"🖨 Platni listić (PDF)",\r
"🖨 Probna strana",\r
"🖨 Štampaj sve (",\r
"🖨 Štampaj sve ({0})",\r
"🖨 Zapisnik (PDF)",\r
"🖼 Iz galerije",\r
"🖼 Izaberi sliku iz galerije",\r
"🗄 Napravi arhivu godine",\r
"🗑 Obriši kalkulaciju",\r
"🗑 Obriši nacrt",\r
"🗑 Obriši otpis",\r
"🗑 Obriši prenos",\r
"🗑 Obriši ručne",\r
"🗑 Obriši ručno",\r
"🗑 Obriši sva ručna",\r
"🗑 Obriši tuđe zapise iz ove firme",\r
"🗒️ CSV",\r
"🗜 Smanji bazu (za telefon)",\r
"🧮 Predloži iz programa",\r
"🧹 Obriši automatske",\r
"🧹 Provjera miješanja firmi",\r
"🧾 Kalkulacije za izabrani period",\r
"🧾 XML",\r
"🚬 Cigare — zapamćene cijene i marže",\r
"🛟 Podrška: nov odgovor",\r
"🛡 Napravi trajni backup (Arhiva)",\r
"€ · KPR „iznos bez PDV\\"",\r
"€ · najviša MP",\r
"€ (po Pravilniku o amortizaciji to nisu OS, već trošak):",\r
"€). ZPDV čl. 37 st. 7: obveznik „može odbiti ulazni PDV u poreskom periodu u kojem je primio račun\\".",\r
"0 % (oslobođeno)",\r
"0 = bez ograničenja",\r
"0 = bez ograničenja.",\r
"003 — zarada lica sa invaliditetom",\r
"006 — bolovanje do 60 dana",\r
"006 = bolovanje 70 %, 007 = trudničko 70 %, 008 = porodiljsko 100 %. Ostale šifre mijenjaju samo IOPPD prijavu.",\r
"007 — bolovanje preko 60 dana / trudničko",\r
"008 — porodiljsko / roditeljsko odsustvo",\r
"01.10.2026;{0};1001;3870000000017;Mlijeko 1 l;kom;12;13,80;21",\r
"01.10.2026;{0};1002;;Hljeb bijeli 500 g;kom;20;16,00;7",\r
"02.10.2026;{0};1001;3870000000017;Mlijeko 1 l;kom;9;10,35;21",\r
"030, 039(dio)",\r
"031(dio), 032(dio)",\r
"031(dio), 032(dio), 039(dio)",\r
"032(dio), 034, 035, 036, 039(dio)",\r
"033(dio), 039(dio)",\r
"038, 039(dio)",\r
"047 — izvršilac je osiguran po drugom osnovu (zaposlen drugdje, penzioner…)",\r
"048 — izvršilac nije prijavljen na obavezno osiguranje",\r
"065 — prihod od imovine",\r
"070 — neplaćeno odsustvo (ne za njegu člana porodice)",\r
"079 — izvršilac ima samo zdravstveno osiguranje (nije prijavljen na PIO)",\r
"1 godina na skladišnim poslovima",\r
"1 obrok",\r
"1 Rb",\r
"1. Dugoročni krediti",\r
"1. Kod za uparivanje (server IRIS CORVINA)",\r
"1. Obaveze po osnovu kredita i zajmova od lica koja nisu kreditne institucije",\r
"1. Opšte informacije. {0}, PIB {1}, sjedište {2}, pravna forma: društvo sa ograničenom odgovornošću, pretežna djelatnost: {3}. Društvo nema matično pravno lice. Prosječan broj zaposlenih u {4}. godini: {5}. Odluka o razvrstavanju: {6} pravno lice (čl. 7 Zakona o računovodstvu „Sl. list CG\\" 84/25, {7}).",\r
"1. Osnovna zarada po akciji",\r
"1. Pisano upozorenje o pokretanju postupka (",\r
"1. Potraživanja od kupaca",\r
"1. Presjek se slika običnom",\r
"1. Prihodi od prodaje — neto prihod",\r
"1. Promjene revalorizacionih rezervi (NPO, nematerijalna, biološka)",\r
"1. Tekući porez na dobit",\r
"1. Učešće u kapitalu zavisnih pravnih lica namijenjeno trgovanju",\r
"1. Utvrđuje se da je zaposleni {0}, JMB {1}, na radnom mjestu {2}, dana {3} godine učinio {4} povredu radne obaveze: {5}.",\r
"1. Zalihe materijala (materijal za izradu, rezervni djelovi, sitan inventar i auto gume)",\r
"1. Zaposlenom {0}, JMB {1}, na radnom mjestu {2}, OTKAZUJE SE ugovor o radu {3}od {4} godine i radni odnos prestaje sa danom {5} godine{6}.",\r
"1. Zbog prirode djelatnosti (trgovina na malo — snabdijevanje stanovništva), utvrđuje se da će Poslodavac raditi na dan praznika {0} — {1} godine, u objektima: {2}.",\r
"1. Zemljište i objekti",\r
"1) izaberite praznik (ili ga dodajte / promijenite datum u spisku), 2) označite dane i objekte, 3) „Napravi odluku\\" — PDF po obrascu firme, upisan u evidenciju dokumenata. Isti spisak praznika koriste Smjene i Plate.",\r
"1/3 (1/2 ako zaposleni izdržava porodicu)",\r
"10 Krajnjim potrošačima bez PDV",\r
"10 Ukupan ulazni PDV",\r
"10. Materijalno značajne stavke prihoda i rashoda: prihodi od prodaje {0} EUR; nabavna vrijednost prodate robe i materijal {1} EUR; troškovi zarada {2} EUR; ostali troškovi poslovanja {3} EUR; amortizacija {4} EUR; rezultat prije oporezivanja {5} EUR.",\r
"10. Prihodi od ostalih finansijskih ulaganja i zajmova (227 do 229)",\r
"1001;3870000000017;Mlijeko 1 l;kom;24;0,79;1,15;21",\r
"1002;;Hljeb bijeli 500 g;kom;12,5;0,55;0,80;7",\r
"1003;3870000000031;Sir trapist;kg;3,250;6,20;9,90;21",\r
"11. Dugovanja sa rokom dospijeća preko pet godina i obezbijeđena dugovanja: {0}",\r
"11. Ostali prihodi po osnovu kamata, kursnih razlika i drugih efekata ugovorene zaštite (231 do 233)",\r
"12. Vrijednosno usklađivanje kratkoročnih finansijskih sredstava (235-236)",\r
"13. Rashodi po osnovu kamata, kursnih razlika i drugih efekata ugovorene zaštite (238 do 240)",\r
"134000 − 134001 − 134002 = nabavna vrijednost",\r
"134000 roba u MP",\r
"134000 Roba u MP (duguje)",\r
"134001 Razlika u cijeni (potr.)",\r
"134001 RUC (potražuje)",\r
"134002 PDV u MP (potr.)",\r
"134002 PDV u MP (potražuje)",\r
"14 Ino 7 %",\r
"14 Ino usl. 7 %",\r
"15 Ino 15 %",\r
"15 Ino usl. 15 %",\r
"15 Ukupno oporezivi promet",\r
"15. DOBITAK ILI GUBITAK NAKON OPOREZIVANJA (244-245)",\r
"16 Ino 21 %",\r
"16 Ino usl. 21 %",\r
"17 Paušal 8 %",\r
"18 cifara (nije obavezno)",\r
"2 · Globalna marža %",\r
"2 godine vozačkog iskustva",\r
"2 obroka",\r
"2. {0} je posljednji radni dan, odnosno dan pojavljivanja na poslu, {1}, a prestanak radnog odnosa i odjava sa obaveznog socijalnog osiguranja vrše se sa danom {2}.",\r
"2. Dugoročni krediti matičnom i zavisnim pravnim licima",\r
"2. Fajl baze za Menadžer (bez servera)",\r
"2. Izjašnjenje zaposlenog (pisano u",\r
"2. Koncesije, patenti, licence i slična prava i ostala nematerijalna ulaganja",\r
"2. Na dan praznika rade zaposleni prema rasporedu smjena koji se objavljuje najmanje {0} dana unaprijed ({1}){2}. Zaposleni se o radu na dan praznika obavještavaju najkasnije tri dana prije praznika ({3}).",\r
"2. Obaveze po osnovu kredita od kreditnih institucija",\r
"2. Odloženi poreski rashodi ili prihodi perioda",\r
"2. Otkupljene sopstvene akcije i otkupljeni sopstveni udjeli",\r
"2. Period i nova marža",\r
"2. Potraživanja od matičnog i zavisnih pravnih lica",\r
"2. Praznik za odluku",\r
"2. Preračun finansijskih izvještaja inostranog poslovanja",\r
"2. Promjena vrijednosti zaliha gotovih proizvoda i nedovršene proizvodnje",\r
"2. Slika se otvara u",\r
"2. Statutarne rezerve",\r
"2. Umanjena (razvodnjena) zarada po akciji",\r
"2. Usaglašenost sa propisima. Finansijski iskazi su sastavljeni u skladu sa Zakonom o računovodstvu i {0}; obrasci po Pravilniku o sadržini i formi obrazaca finansijskih iskaza („Sl. list CG\\" 11/20, 139/21, 13/22, 139/22). Iznosi su iskazani u eurima.",\r
"2. Zaposlenom će biti isplaćene sve neisplaćene zarade, naknade i druga primanja zaključno sa danom prestanka najkasnije u roku od {0} dana ({1}) i naknada štete za neiskorišćeni godišnji odmor{2} ({3}). Poslodavac će izvršiti odjavu sa obaveznog socijalnog osiguranja i vratiti radnu knjižicu na dan prestanka.",\r
"2/ Troškovi doprinosa za penzije",\r
"200, 209(dio)",\r
"201, 209(dio)",\r
"202, 203, 209(dio)",\r
"21, 22 osim 223",\r
"23 osim 236(dio) i 237",\r
"236(dio)",\r
"28 osim 288",\r
"3 · QR kod (skener ili zalijepljen tekst, Enter za obradu)",\r
"3 godine na rukovodećim poslovima",\r
"3 godine u trgovini, od toga 1 na rukovodećem mjestu",\r
"3. Druge rezerve",\r
"3. Gotovi proizvodi i roba",\r
"3. Izrada kalkulacija",\r
"3. Korekcije početnog stanja: nije bilo korekcija početnog stanja ni retroaktivnih promjena računovodstvenih politika.",\r
"3. Mjera se evidentira u personalnom dosijeu; briše se iz evidencije ako zaposleni u roku od {0} godine ne učini novu povredu radne obaveze ({1} st. 3).",\r
"3. Odluka o mjeri (",\r
"3. Ostala dugoročna rezervisanja",\r
"3. Ostala ugrađena oprema, alati i oprema (012+013+014)",\r
"3. Ovdje se zatim dodiruje",\r
"3. Potraživanja od ostalih povezanih lica",\r
"3. Učešća u kapitalu kod pravnih lica (sem zavisnih pravnih lica)",\r
"3. Ulaganja u vlasničke instrumente kapitala",\r
"3. Zaposlenima koji rade na dan praznika pripada uvećanje zarade od {0} % po času rada ({1} i ugovor o radu), a zaposleni koji ne rade imaju pravo na naknadu zarade u visini zarade koju bi ostvarili da su radili. Rad na dan praznika evidentira se u rasporedu smjena i ulazi u obračun zarade za mjesec u kom je praznik.",\r
"3. Zarada, naknade zarade i druga primanja po osnovu rada i u vezi sa radom koje je {0} ostvari{1} zaključno sa {2} biće isplaćeni na dan prestanka radnog odnosa iz tačke 1 ovog rješenja, a najkasnije u roku od {3} dana od tog dana ({4}){5}.",\r
"3.2. Biološka sredstva",\r
"3.3. Ostala nepomenuta materijalna stalna sredstva",\r
"322(dio)",\r
"330 i potr. saldo 331–337",\r
"3a. Uručenje odluke zaposlenom (dostava u",\r
"4 Datum ispostavljanja",\r
"4. Aktuarski dobici i gubici",\r
"4. Avansi za nekretnine, postrojenja, opremu i biološka sredstva i NPO u pripremi",\r
"4. Avansi za nematerijalna ulaganja i nematerijalna ulaganja u pripremi",\r
"4. Dati avansi",\r
"4. Dugoročni krediti pravnim licima kod kojih postoji učešće u kapitalu",\r
"4. Na dan prestanka radnog odnosa Poslodavac će {0} uručiti uredno popunjenu i zaključenu radnu knjižicu ({1}).",\r
"4. Odbitak od plate",\r
"4. Osnove vrednovanja: istorijski trošak. Zalihe robe u maloprodaji vode se po prodajnoj vrijednosti sa ukalkulisanim PDV i razlikom u cijeni (račun 134); nabavna vrijednost prodate robe utvrđuje se mjesečno maloprodajnom metodom (prosječna ponderisana razlika u cijeni po objektu).",\r
"4. Ostali prihodi iz poslovanja (205 do 207)",\r
"4. Pozitivne revalorizacione rezerve i nerealizovani dobici po osnovu finansijskih sredstava i OSR",\r
"4.1. Potraživanja za više plaćen porez na dobit",\r
"4.2. Potraživanja po osnovu poreza na dodatu vrijednost",\r
"4.3. Ostala nepomenuta potraživanja",\r
"40 sem 400 i 404",\r
"400(dio)",\r
"404(dio)",\r
"41 bez 414, 415",\r
"422–425, 429 (dio)",\r
"422–426, 429 (dio)",\r
"439(dio)",\r
"47, 48 osim 481",\r
"47.11 (trgovina na malo u nespecijalizovanim prodavnicama)",\r
"490, 491, 494, 495(dio), 496, 497 i 499",\r
"495(dio)",\r
"5 dana (pon–pet)",\r
"5 Kupac i sjedište",\r
"5 st. 4",\r
"5. Negativne revalorizacione rezerve i nerealizovani gubici po osnovu finansijskih sredstava i OSR",\r
"5. Obaveze po mjenicama",\r
"5. Ovo rješenje je konačno.",\r
"5. Računovodstvene politike: prihodi od prodaje robe priznaju se u trenutku prodaje (dnevni pazar, odnosno izdata faktura), bez PDV. Nekretnine, postrojenja i oprema vrednuju se po nabavnoj vrijednosti umanjenoj za amortizaciju; amortizacija se obračunava po stopama iz Pravilnika o razvrstavanju osnovnih sredstava (grupa I 2,5 % proporcionalno, grupe II–V 10/15/20/30 % degresivno). Obaveze prema dobavljačima vode se po fakturnoj vrijednosti. Zarade i doprinosi priznaju se u mjesecu obračuna.",\r
"5. Troškovi poslovanja (209+210+210a)",\r
"5. Učešća u kapitalu koja se vrednuju metodom učešća",\r
"5. Učešće u OSR pridruženog društva",\r
"52 (dio)",\r
"53, 54 (dio) i 55",\r
"5771 Rashod (duguje)",\r
"580, 581, 582, 589 (dio)",\r
"584, 589 (dio)",\r
"6 dana (pon–sub)",\r
"6 Isporučilac",\r
"6 Isporučilac i sjedište",\r
"6 PDV broj kupca",\r
"6. Dugoročna finansijska ulaganja (dati krediti i hartije od vrijednosti)",\r
"6. Obaveze prema matičnom i zavisnim pravnim licima",\r
"6. Revalorizacija: nekretnine, postrojenja i oprema nijesu revalorizovani.",\r
"6. Troškovi zarada, naknada zarada i ostali lični rashodi (212+213)",\r
"6. Zaštita neto ulaganja u inostrano poslovanje",\r
"660 (dio)",\r
"661 (dio)",\r
"662, 663, 664, 669 (dio)",\r
"669 (dio)",\r
"68, sem 683 i 685",\r
"6A4D-92DE-B3DB-A31D",\r
"7 dana za hljeb, mlijeko i štampu",\r
"7 Oslobođeni promet",\r
"7. Finansijski instrumenti: društvo nema finansijske instrumente koji se vrednuju po fer vrijednosti; potraživanja i obaveze iskazani su po nominalnoj vrijednosti.",\r
"7. Hedžing tokova gotovine",\r
"7. Obaveze prema ostalim povezanim licima",\r
"7. Ostali dugoročni finansijski plasmani i potraživanja",\r
"7. Rashodi po osnovu vrijednosnog usklađivanja imovine (osim finansijske) (218+219)",\r
"8 Oslobođene",\r
"8 Oslobođene nabavke",\r
"8. Ostale obaveze iz poslovanja i ostale kratkoročne obaveze (138 do 142)",\r
"8. Ostali rashodi iz poslovanja",\r
"8. Vanbilansne obaveze i garancije: poslovni prostori koriste se po ugovorima o zakupu{0}; društvo nije dalo garancije niti jemstva.",\r
"8.2. Ostale kratkoročne obaveze",\r
"8.3. Obaveze po osnovu poreza na dodatu vrijednost i ostalih javnih prihoda",\r
"8.4. Obaveze po osnovu poreza na dobit",\r
"8.5. Obaveze po osnovu sredstava namijenjenih prodaji i sredstava poslovanja koje je obustavljeno",\r
"9 Obveznicima bez PDV",\r
"9 Oporezive nabavke sa PDV",\r
"9 Oporezive sa PDV",\r
"9. Avansi, krediti i obaveze prema članovima organa upravljanja: nije bilo.",\r
"9. Prihodi po osnovu učešća u kapitalu (223 do 225)",\r
"a mjeseca",\r
"a mjesta",\r
"A-ZČĆŠŽĐ0-9",\r
"A. KAPITAL (102+103+104+105+111+116)",\r
"A. NEUPLAĆENI UPISANI KAPITAL",\r
"A. Poslovna dobit i gubici — I. Finansijski rezultat iz bilansa uspjeha",\r
"a.Broj",\r
"a.FIK",\r
"a.IIC",\r
"a.InvNum",\r
"a) 9 % za oporezivu dobit do 100.000,00",\r
"a) Nabavna vrijednost prodate robe i troškovi materijala",\r
"a) Neto troškovi zarada, naknada zarada i lični rashodi",\r
"a) od matičnog i zavisnih pravnih lica",\r
"a) od zavisnih pravnih lica",\r
"a) Ostali prihodi iz redovnog poslovanja",\r
"a) prema matičnom i zavisnim pravnim licima",\r
"a) Prihodi po osnovu vrijednosnog usklađivanja",\r
"a) Rashodi po osnovu vrijednosnog usklađivanja stalne imovine (osim finansijske)",\r
"ab123ab123",\r
"ACCOUNT",\r
"AD",\r
"ada bojana",\r
"Addiko Bank",\r
"admin",\r
"Admin",\r
"ADMIN (može sve kao glavni, ne objavljuje bazu, prati glavnog)",\r
"Administrativne takse",\r
"Administrativni troškovi plaćeni od strane stalne poslovne jedinice nerezidentnoj centrali",\r
"administrator",\r
"Administrator",\r
"Administrator — sve, bez objave baze",\r
"administratorski",\r
"adresa",\r
"Adresa",\r
"Adresa „{0}\\" nije ispravna.",\r
"Adresa {0} nema zapamćen otisak CA lokalnog servera — potrebno je ponovo upariti uređaj.",\r
"Adresa bez https:// je dozvoljena samo za server na ovom računaru (probe). Lokalni server firme radi na https://.",\r
"Adresa IRIS-a (radi odmah): {0}",\r
"Adresa kase",\r
"Adresa lokalnog servera",\r
"Adresa lokalnog servera nije upisana.",\r
"Adresa menija za goste",\r
"Adresa mora počinjati sa https:// ili http://.",\r
"Adresa nije https:// — server bez TLS-a nema sertifikat.",\r
"Adresa nije ispravna.",\r
"Adresa pošiljaoca",\r
"Adresa pošiljaoca nije ispravna.",\r
"Adresa primaoca",\r
"Adresa servera mora biti oblika https://",\r
"Adresa servera mora počinjati sa „https://\\".",\r
"Adresa servera nije ispravna (primjer lokalnog servera: https://192.168.1.10:8443).",\r
"Adresa servera nije ispravna.",\r
"adresa sjedišta",\r
"Adresa sjedišta",\r
"Adresa SMTP servera nije ispravna.",\r
"Adresa SMTP servera nije pronađena.",\r
"Adresa SMTP servera nije upisana.",\r
"Adresa za ažuriranje daje neispravnu oznaku verzije „{0}\\". Ažuriranje je odbijeno.",\r
"Adresa za ažuriranje daje neispravnu oznaku verzije.",\r
"Adresa za ažuriranje je vratila grešku (HTTP {0}).",\r
"Adresa za ažuriranje ne daje ispravan kontrolni zbir paketa (sha256). Ažuriranje je odbijeno.",\r
"Adresa za ažuriranje nije podešena.",\r
"Adresa za provjeru ažuriranja",\r
"Adresa, kod i otisak CA su preuzeti iz linka.",\r
"adresa; druga adresa",\r
"Adriatic Bank",\r
"ADVANCE",\r
"Agencija",\r
"Akcija",\r
"Akcija „{0}\\" je dodata. Artikli akcije se biraju dugmetom „artikli\\".",\r
"Akcija „{0}\\" je izmijenjena. Izmjena stiže kasama sa sljedećim cjenovnikom.",\r
"Akcija „{0}\\": {1} artikala. Stiže kasama sa sljedećim cjenovnikom.",\r
"Akcija bez artikala se ne šalje kasama",\r
"Akcija je obrisana.",\r
"Akcija nije nađena.",\r
"Akcije",\r
"Akcije (promocije) stižu kasama",\r
"Akcijska cijena",\r
"akcijska cijena nije niža od prethodne najniže; nije sniženje",\r
"Akcijski kapital",\r
"Akciza",\r
"Ako je pristup dozvoljen, potrebno je pokrenuti",\r
"Ako je prozor prazan, vrati prethodnu verziju — podaci se ne diraju.{0}",\r
"Ako red ima više brojeva, iznos je",\r
"Ako zaposleni u roku od {0} mjeseci od dana izricanja ove mjere učini novu težu povredu radne obaveze, radni odnos mu prestaje ({1} st. 3).",\r
"Akt o sistematizaciji: za svako radno mjesto opis poslova, tražena kvalifikacija, iskustvo, posebni uslovi, broj izvršilaca i kome odgovara. Opis poslova ide u",\r
"Aktivan",\r
"Aktivan ENU se ne može mijenjati.",\r
"aktivna",\r
"Aktivna",\r
"aktivna (isključena akcija se ne šalje kasama)",\r
"AKTIVNA VREMENSKA RAZGRANIČENJA",\r
"Aktivne kase",\r
"Aktivni (",\r
"Aktivnih kasa na serveru: {0} · kodova koji čekaju uparivanje: {1} · učitano {2}",\r
"aktivnih sniženja pred istek",\r
"aktivno",\r
"Aktivno",\r
"aktivno radno mjesto",\r
"Aktuarski dobici ili gubici po osnovu planova definisanih primanja",\r
"Alat i inventar",\r
"alergeni",\r
"Alergeni (Uredba o informisanju potrošača o hrani)",\r
"alkohol",\r
"Am. grupa",\r
"AMO",\r
"Amortizacija (godišnji OA)",\r
"Amortizacija (iz OA)",\r
"Amortizacija {0} ({1} %)",\r
"Amortizacija {0} po obrascu OA: {1}",\r
"amortizacija po obrascu OA za {0}. nije proknjižena (Finansije → Proknjiži mjesec, decembar)",\r
"Amortizacija tekuće",\r
"Amortizacija: ispravka vrijednosti objekata (grupa I)",\r
"Amortizacija: ispravka vrijednosti opreme (grupe II–V)",\r
"Amortizacija: ispravka vrijednosti softvera i licenci (nematerijalna)",\r
"Amortizacija: trošak (godišnji OA obračun)",\r
"Amortizaciona grupa",\r
"AN",\r
"Analitički konto ima 4 do 8 cifara (prve tri su sintetički račun iz okvira).",\r
"analitika",\r
"Analitika po",\r
"Analitika troškova",\r
"ANALITIKA TROŠKOVA",\r
"AND {0}",\r
"AND {0}.Datum>=?",\r
"AND {0}<=?",\r
"AND {0}>=?",\r
"AND Aktivna=1",\r
"AND c.ArtikalID=?",\r
"AND d.MarketID=?",\r
"AND Datum<=?",\r
"AND Datum>=?",\r
"AND DobavljacID=?",\r
"AND ENU=?",\r
"AND f.MarketID=?",\r
"AND k.DobavljacID=?",\r
"AND k.MarketID=?",\r
"AND ks.ArtikalID=?",\r
"AND m.Aktivan=1",\r
"AND MarketID=?",\r
"AND n.Datum>=?",\r
"AND n.Vrsta<>'ZK'",\r
"AND n.Vrsta=?",\r
"AND o.Datum<=?",\r
"AND o.MarketID=?",\r
"AND o.RadnikID=?",\r
"AND p.Datum<=?",\r
"AND p.DobavljacID=?",\r
"AND p.MarketID=?",\r
"AND p.Status='razlika'",\r
"AND pl.DobavljacID=?",\r
"AND ps.DobavljacID=?",\r
"AND r.MarketID=?",\r
"AND RadnikID=?",\r
"AND s.ArtikalID=?",\r
"AND s.Datum<=?",\r
"AND s.Uredjaj=?",\r
"AND Status='zakljucen'",\r
"AND t.DobavljacID=?",\r
"AND t.KljucRacuna=?",\r
"AND u.MarketID=?",\r
"AND z.RadnikID=?",\r
"Andrijevica",\r
"Android",\r
"Aneks ugovora o radu",\r
"antibiotik",\r
"Antibiotik",\r
"aplikacija nema „pristup svim fajlovima\\", pa ne vidi fajlove koje Autosync preuzme sa Drive-a. Potrebno je odobriti pristup i vratiti se u aplikaciju.",\r
"Aplikaciju ne treba deinstalirati",\r
"Apoteka: ljekovi i FZO",\r
"application/json, text/plain, */*",\r
"application/x-www-form-urlencoded; charset=UTF-8",\r
"april",\r
"April",\r
"aprila",\r
"Arapski",\r
"Arhiva",\r
"Arhiva {0} je napravljena (fajlova: {1}): {2}",\r
"Arhiva {0}: {1}",\r
"Arhiva godine",\r
"ARHIVA GODINE {0} — {1}",\r
"Arhiva godine se pravi na Windows računaru (glavna baza).",\r
"Arhivira dokumentaciju i čuva je u rokovima propisanim zakonom.",\r
"art. ·",\r
"artikal",\r
"Artikal",\r
"ARTIKAL",\r
"Artikal „{0}\\" je povezan sa artiklom kase. Dokument otpisa pravi glavni računar pri sljedećem čitanju zaključaka kasa.",\r
"Artikal „{0}\\" je povezan sa artiklom kase.{1}{2}{3}{4}",\r
"Artikal „{0}\\" nije nađen: šifra ne postoji, a novog artikla tog naziva nema na listu „Artikli\\".",\r
"Artikal „{0}\\" već ima barkod {1}.",\r
"artikal {0}",\r
"Artikal {0}",\r
"Artikal {0} je povezan sa redom izvještaja CInMED: najviša VP {1} €, najviša MP {2} €.",\r
"Artikal {0} je snimljen. Izmjena stiže na kase sa sljedećim cjenovnikom.",\r
"Artikal {0} je već na nivelaciji.",\r
"Artikal {0} nema naziv — upisuje se kao neaktivan pod nazivom „(bez naziva)\\".",\r
"artikal {0}: {1}",\r
"Artikal {0}: {1}",\r
"Artikal {0}: jedinica mjere „{1}\\" nije sa spiska — upisano KOM.",\r
"Artikal dobija šifru koju dodjeljuje program i barkod",\r
"artikal istog naziva već postoji (šifra {0})",\r
"Artikal iz fajla",\r
"Artikal iz grupe „Cigare\\" nosi",\r
"Artikal iz Menadžera nije pronađen u šifarniku. Barkod je potrebno povezati ručno (Popis skenerom).",\r
"artikal je",\r
"Artikal je dodat: šifra {0}, {1}.",\r
"Artikal je dodat: šifra {0}, {1}. {2}",\r
"Artikal kase „{0}\\" već postoji.",\r
"Artikal kase (naziv, šifra, barkod)",\r
"Artikal kase {0} („{1}\\") povezati sa artiklom šifarnika „{2}\\"?\\n\\nOtpis sa kase se zatim razdužuje sa tim artiklom, a ista veza važi i za buduće otpise i preglede prometa.",\r
"Artikal kase {0} nije u Cjenovniku kasa, a šifra nije barkod. Artikal se pravi kad stigne u Cjenovnik kasa.",\r
"Artikal kase {0} nije u Cjenovniku kasa, a šifra nije barkod. Povezivanje je moguće kad artikal stigne u Cjenovnik kasa.",\r
"Artikal kase nije izmijenjen: {0}",\r
"Artikal kase nije povezan sa artiklom šifarnika (artikal dodat u Cjenovnik kasa ili na kasi, ili firma još nema kalkulacija), pa stavka nije razdužena. Artikal se pravi iz podataka kase ili se šifra kase povezuje sa postojećim artiklom; poslije toga otpis se razdužuje.",\r
"artikal kase nije povezan sa šifarnikom",\r
"Artikal kase sa šifrom {0} ne postoji.",\r
"Artikal ne postoji.",\r
"Artikal nema barkod.",\r
"Artikal nema opštu cijenu. Cijena objekta se može ukloniti tek nakon upisa opšte cijene.",\r
"Artikal nema opštu cijenu. Poništavanje nije moguće.",\r
"Artikal nema stopu sa fakture dobavljača.",\r
"Artikal nije izabran.",\r
"Artikal nije nađen u šifarniku.",\r
"Artikal nije nađen.",\r
"Artikal nije pronađen u šifarniku.",\r
"artikal nije upisan",\r
"artikal poskupio",\r
"artikal se prodaje",\r
"artikal se prodaje po upisanoj jediničnoj cijeni (€)",\r
"Artikal šifarnika",\r
"Artikal šifarnika (naziv, šifra ili barkod)",\r
"Artikal šifarnika nije nađen.",\r
"Artikal u programu",\r
"artikala",\r
"Artikala",\r
"artikala (stopa se ne mijenja).",\r
"artikala bez barkoda",\r
"Artikala bez barkoda",\r
"artikala bez MPC",\r
"artikala bez nabavne cijene",\r
"artikala bez nabavne cijene (vrijednost 0)",\r
"Artikala koji nisu aktivni u šifarniku kase: {0}. Ne idu u paket.",\r
"artikala liči na cigarete",\r
"artikala poskupilo",\r
"artikala sa izmjenom podataka",\r
"Artikala sa izmjenom podataka",\r
"artikala se prodaje",\r
"Artikala šifarnika kojih nema u fajlu:",\r
"artikala su",\r
"artikala; izbor važi i za artikle koji nisu prikazani.",\r
"artikala. Za ostale je potrebno suziti pretragu.",\r
"Artikla „{0}\\" nema u šifarniku.",\r
"Artikla ili objekta više nema.",\r
"Artikla kase „{0}\\" nema u cjenovniku.",\r
"Artikla pod novom šifrom više nema.",\r
"Artikla više nema u šifarniku.",\r
"artikli",\r
"Artikli",\r
"Artikli akcije „{0}\\"",\r
"Artikli bez barkoda",\r
"ARTIKLI BEZ BARKODA",\r
"Artikli čija se stopa razlikuje od stope po pravilu (",\r
"Artikli cijelog šifarnika koji nemaju barkod; prvi su artikli sa posljednjih faktura izabranog objekta.",\r
"Artikli i barkodovi",\r
"Artikli iz grupe „Cigare\\" (Artikli → Cigare) uvijek ostaju sa svojom maržom.",\r
"Artikli koje je ovaj objekat nabavljao ove godine, a nijesu u popisu. Spisak služi kao kontrola preskočenih polica i ne predstavlja manjak (prodaja se ne vodi po artiklu).",\r
"Artikli koje program ne prepoznaje (",\r
"Artikli po 0 % bez osnova:",\r
"ARTIKLI SA FAKTURA BEZ BARKODA",\r
"ARTIKLI SA POGREŠNIM KONTROLNIM BROJEM BARKODA",\r
"Artikli sa posebnom maržom (",\r
"Artikli sa stopom 0 % bez osnova. Bez osnova promet ide u PR PDV-2 polje po postavci firme (Obrasci → PR-PDV).",\r
"Artikli su izbačeni iz grupe.",\r
"Artiklima bez pravila upisuje se marža sa njihove zadnje kalkulacije.",\r
"Artiklima bez pravila upisuje se prodajna cijena sa PDV sa njihove zadnje kalkulacije.",\r
"artiklu",\r
"ATC",\r
"ATC šifra nije ispravna (oblik: M01AE01).",\r
"ATLANTIC INVESTMENT D.O.O.",\r
"auto",\r
"Auto",\r
"Auto PDF",\r
"Automatska dnevna kopija radi od instalacije nove verzije programa (Setup). Do tada se kopija pravi dugmetom ispod.",\r
"automatska provjera (pri pokretanju i na svakih 30 min)",\r
"Automatska razmjena kroz folder ide sa glavnog računara (Windows).",\r
"automatska štampa",\r
"Automatska štampa je isključena.",\r
"Automatska štampa je uključena. Svaka nova kalkulacija iz skena ide na štampač.",\r
"Automatski „Gost nije došao\\"",\r
"automatski (izvor {0} #{1})",\r
"Automatski backup se nalazi",\r
"Automatski backup se pravi pri otvaranju firme (prvo stanje dana), u toku rada i pri zatvaranju aplikacije (posljednje stanje dana), za svaku otvorenu firmu; rotacija 14 dana, Arhiva se ne briše. (Kopija pri otvaranju i u toku rada — od nove instalacije programa.)",\r
"automatski isključeno: firma nema ovih podataka ni paket koji ih traži",\r
"Automatski nalog se mijenja kroz dokument i „Proknjiži mjesec\\".",\r
"Automatski nalog se ne briše ručno. Brisanje ide kroz dokument i ponovno „Proknjiži mjesec\\".",\r
"Automatski nalog se ne mijenja ručno. Izmjena ide kroz dokument i ponovno „Proknjiži mjesec\\".",\r
"Automatski objavljuj bazu poslije promjena",\r
"Automatski povezano {0} sa fakturama (zatvoreno {1}).",\r
"Automatski predlog za cio mjesec, za sve objekte",\r
"Automatski preuzimaj bazu glavnog računara",\r
"Automatski preuzmi nova ažuriranja",\r
"automatski uvoz izvoda u Banku poslije čitanja",\r
"Automatski vezano {0} plaćanja ({1} EUR), zatvoreno {2} faktura.",\r
"automatski: {0}",\r
"automatsko čitanje isključeno",\r
"automatsko čitanje uključeno",\r
"Automatsko slanje tehničkih grešaka:",\r
"Automatskog knjiženja nema",\r
"Autor i nosilac prava",\r
"Autosync for Google Drive",\r
"AV-{0}-{1}",\r
"avans",\r
"Avans",\r
"Avans — {0}",\r
"Avans {0} — {1}",\r
"Avans {0} EUR je naplaćen.",\r
"Avans {0} EUR je vraćen.",\r
"Avans i otkaz",\r
"Avans je odbijen na konačnom računu.",\r
"Avans je odbijen na konačnom računu. Brisanje je moguće tek nakon poništavanja odbitka.",\r
"Avans nije odbijen ni na jednom računu.",\r
"Avans odbijen na ovom računu",\r
"Avans pri otkazu",\r
"Avans za smještaj {0} – {1}",\r
"Avans{0}",\r
"Avansi",\r
"Avansi i knjižna odobrenja",\r
"Avansi iskorišćeni",\r
"Avansi primljeni",\r
"Avansi vraćeni",\r
"Avansi za nekretnine, postrojenja, opremu i biološka sredstva",\r
"Avansi za nematerijalna ulaganja",\r
"Avansni račun",\r
"AVANSNI RAČUN",\r
"avansni račun {0}",\r
"Avansni račun {0}",\r
"Avansni račun {0} — {1}",\r
"Avansni račun {0} pripada drugom kupcu.",\r
"Avansni račun {0}, uplata {1}",\r
"Avansni račun i storno avansa",\r
"Avansni račun ima IKOF i ne briše se.",\r
"Avansni račun iz uplate",\r
"Avansni račun je fiskalizovan.",\r
"Avansni račun je izdat (IKOF {0}), ali upis na server nije uspio. Ponovite upis; račun se ne izdaje ponovo.",\r
"Avansni račun je obrisan.",\r
"Avansni račun je snimljen.",\r
"Avansni račun je storniran.",\r
"Avansni račun mora imati kupca.",\r
"Avansni račun ne postoji.",\r
"Avansni račun nije fiskalizovan.",\r
"Avansni račun nije fiskalizovan. Korektivni račun avansa nije potreban.",\r
"Avansni račun sa stopom PDV-a {0} %.",\r
"Avansni račun za ovu uplatu",\r
"Avansni račun za uplatu kupca koja nije vezana za fakturu (izvod ili Naplata od kupaca)",\r
"Avansni račun: primljeni avans bez PDV (po kupcu); zatvara se stornom na konačnom računu",\r
"Avansni računi",\r
"Avansni računi kupcima, odbitak avansa na konačnom računu, knjiga avansa · knjižna odobrenja i obavještenja kupaca",\r
"Avansni računi po datumu uplate; storno po datumu izdatog konačnog računa. PR-PDV obuhvata ovu knjigu i redovni I-RAČ.",\r
"Avansni računi, odbitak avansa na konačnom računu, knjiga avansa · knjižna odobrenja kupcima i obavještenja kupaca",\r
"avgust",\r
"Avgust",\r
"avgusta",\r
"AVR",\r
"Ažuriranje",\r
"Ažuriranje je dozvoljeno samo preko HTTPS veze.",\r
"Ažuriranje je preuzeto",\r
"B. DUGOROČNA REZERVISANJA I DUGOROČNE OBAVEZE (118+122)",\r
"B. Kapitalni dobici i gubici",\r
"B. STALNA IMOVINA (003+008+016)",\r
"b) 12 % za oporezivu dobit koja prelazi 100.000,00",\r
"b) od ostalih povezanih pravnih lica",\r
"b) Ostali prihodi iz poslovanja",\r
"b) Ostali troškovi poslovanja (rezervisanja i ostali poslovni rashodi)",\r
"b) prema drugim povezanim licima",\r
"b) Rashodi po osnovu vrijednosnog usklađivanja",\r
"b) Rashodi po osnovu vrijednosnog usklađivanja obrtne imovine (osim finansijske)",\r
"b) Troškovi poreza i doprinosa (214 do 216)",\r
"Backup",\r
"Backup baze",\r
"Backup nije uspio.",\r
"Badnji dan",\r
"banka",\r
"Banka",\r
"Banka — izvodi i novčani tok",\r
"Banka / izvod",\r
"Banka 2410 odlivi — nalozi IZV vs izvodi (bez „ostalo\\")",\r
"Banka 2410 prilivi — nalozi IZV vs izvodi (bez „ostalo\\")",\r
"Banka: {0} odliva sa izvoda čeka knjiženje.",\r
"Banka: izvodi i novčani tok",\r
"Bankarske provizije",\r
"Bar",\r
"BAR",\r
"bar jedan objekat (prodavnica, lokal, kancelarija)",\r
"barkod",\r
"Barkod",\r
"Barkod (čitač ili ručno) + Enter",\r
"Barkod (čitač ili ručno), šifra ili naziv + Enter",\r
"Barkod (upis ili čitač)",\r
"barkod {0}",\r
"Barkod {0}",\r
"Barkod {0} je dodat artiklu koji je izabrao Menadžer.",\r
"Barkod {0} ostaje na postojećem artiklu.",\r
"Barkod {0} već ima artikal šifarnika „{1}\\". Potrebno je povezivanje sa postojećim artiklom.",\r
"Barkod {0}: {1}",\r
"Barkod {barkod} je povezan sa artiklom „{naziv}\\".",\r
"Barkod {barkod} već ima artikal „{naziv}\\".",\r
"Barkod + Enter",\r
"Barkod ili naziv",\r
"Barkod imaju i:",\r
"Barkod je u Excelu upisan kao broj; vodeće nule su izgubljene.",\r
"Barkod nije upisan.",\r
"Barkod nije vezan ni za jedan artikal.",\r
"Barkod se skenira čitačem ili upisuje u polje uz artikal i potvrđuje tasterom Enter. Artikal bez upisanog barkoda ostaje na spisku „Artikli bez barkoda\\".",\r
"Barkod se upisuje ili skenira u koloni Barkod (sa robom u ruci, red po red) i pamti se za naredne unose; stiže na kase i u Menadžer.",\r
"barkod u nedozvoljenom obliku",\r
"Barkod već ima",\r
"Barkodova",\r
"barkodova {0}{1}",\r
"barkodova na više artikala",\r
"Barkodova na više artikala",\r
"barkodova sa pogrešnim kontrolnim brojem",\r
"Barkodova sa pogrešnim kontrolnim brojem",\r
"Barkodovi",\r
"Barkodovi iz Menadžera za provjeru (",\r
"Baza",\r
"baza artikala",\r
"Baza artikala je napravljena za drugu firmu.",\r
"Baza firme na ovom uređaju",\r
"Baza je objavljena u {0} ({1} MB). Telefoni, sporedni računari i Menadžer je preuzimaju.",\r
"Baza je smanjena: {0} MB → {1} MB (očišćeno starijih faktura: {2}).",\r
"Baza kase na ovom računaru",\r
"Baza kase nije pronađena na ovom računaru.",\r
"Baza kase nije pronađena. Putanja do kasa.db se podešava u Podešavanjima.",\r
"baza nije mijenjana od posljednjeg sklapanja",\r
"Baza nije objavljena: {0}",\r
"baza nije otvorena",\r
"Baza nije otvorena",\r
"baza_obradjena_….knj.db",\r
"baza_obradjena.knj.db",\r
"baze.",\r
"Bazu ove firme trenutno objavljuje:",\r
"BB",\r
"Bearer {0}",\r
"bečići",\r
"BENSTON",\r
"Berane",\r
"BERANE",\r
"BEST",\r
"bez artikala",\r
"bez barkoda",\r
"Bez barkoda",\r
"bez broja",\r
"Bez cijene",\r
"bez datuma",\r
"Bez dodijeljene sobe",\r
"bez dokumenta",\r
"bez ENU",\r
"Bez evidentirane prodaje po artiklu u periodu:",\r
"Bez glutena",\r
"bez grupe",\r
"Bez isplate u ovom mjesecu",\r
"Bez izbora: svi objekti",\r
"bez izmjena",\r
"bez kase",\r
"bez ključa (Menadžer 1.4.0)",\r
"Bez knjiženja: sve transakcije čekaju pregled u „Transakcije\\".",\r
"bez kupca",\r
"Bez laktoze",\r
"bez licence (PIB firme nije upisan u Podešavanja → Firma)",\r
"bez licence: program radi bez ograničenja",\r
"bez limita",\r
"bez objekta",\r
"bez mjesta",\r
"Bez nabavne cijene{0}",\r
"bez načina",\r
"bez narudžbe",\r
"bez naziva",\r
"bez numeracije (po danima)",\r
"bez obroka",\r
"bez odgovora",\r
"bez opisa poslova: {0}",\r
"bez otkaznog roka (",\r
"Bez oznake kad se vraća roba primljena ranije po staroj marži (povrat se razdužuje po cijeni po kojoj je zadužen).",\r
"Bez para: {0}. Ručno povezivanje: spisak „Uplate sa izvoda bez para\\" (sa predlogom pazara).",\r
"Bez partnera",\r
"bez PDV",\r
"Bez PDV",\r
"bez PDV · odbitni PDV",\r
"bez PDV-a",\r
"Bez prava na odbitak",\r
"bez pravila (opšta stopa)",\r
"Bez prodajne cijene otpis se ne može proknjižiti.",\r
"bez promjena ({0} fajlova već pročitano)",\r
"bez promjene",\r
"Bez promjene ostaju: {0}.",\r
"bez provjere",\r
"Bez računa",\r
"Bez rasporeda (nisu dirani): {0}{1}.",\r
"bez razloga",\r
"bez roka",\r
"Bez rotacije (svako svoju smjenu)",\r
"bez secera; vanil; zele; vuna; bombon; zvak; sok; napitak",\r
"Bez slike",\r
"bez sobe",\r
"Bez sobe",\r
"Bez takse poslije noći",\r
"bez takse: {0}",\r
"bez tražene kvalifikacije: {0}",\r
"bez uloge",\r
"bez veze",\r
"Bez veze",\r
"Bez veze od {0}",\r
"Bez veze od {0}:{1}",\r
"Bez veze sa serverom {0} {1} (dozvoljeno {2}). Samo čitanje i izvoz do uspostavljanja veze sa serverom.",\r
"bez zaštite",\r
"Bez zaštite veze lozinka i poruka putuju nešifrovano. Preporučuje se STARTTLS ili SSL/TLS.",\r
"bezgotovinske (virmanske) račune",\r
"BIJELO",\r
"Bijelo Polje",\r
"Bilans stanja",\r
"Bilans stanja · bilans uspjeha · statistički aneks · napomene · razvrstavanje · PD · zaključak — iz glavne knjige, po obrascima iz Pravilnika („Sl. list CG\\" 11/20, 139/21, 13/22, 139/22) i Zakona o računovodstvu 84/25. Rok predaje: 31. mart (IRMS).",\r
"Bilans stanja i bilans uspjeha po zvaničnom obrascu, statistički aneks, napomene, zaključak godine",\r
"bilans stanja i uspjeha, PD",\r
"Bilans stanja, Bilans uspjeha, Pojednostavljene napomene, Statistički aneks",\r
"Bilans uspjeha",\r
"Bilo",\r
"Biološka sredstva namijenjena prodaji",\r
"Blagajna",\r
"Blagajna — uplata / isplata gotovine",\r
"Blagajna (gotovina od pazara)",\r
"Blagajna {0}: {1}",\r
"Blagajna objekta",\r
"Blagajnički nalog je snimljen: {0}.",\r
"BLG",\r
"Blok stope {0}% nije pročitan; izveden je iz UKUPAN POREZ ({1} + {2} = {3}).",\r
"Blok UKUPAN POREZ nije pročitan.",\r
"BO",\r
"bočica",\r
"Boja",\r
"Boja {0}",\r
"Boja i oznaka mjesta",\r
"Boja i oznaka mjesta „{0}\\" se ponovo određuju iz naziva mjesta. Kase i Menadžer ih dobijaju sa sljedećim cjenovnikom.",\r
"Boja i oznaka mjesta „{0}\\" su snimljene. Kase i Menadžer ih dobijaju sa sljedećim cjenovnikom.",\r
"Boja i oznaka se ponovo određuju iz naziva mjesta.",\r
"Boja i oznaka stoje uz svaki unos i izmjenu cijene (u Knjigovodstvu, na kasi i u Menadžeru), da se vidi za koje mjesto cijena važi. Program ih određuje iz naziva mjesta; ovdje se mogu izabrati druge.",\r
"Boja mjesta {0}",\r
"Boja mora biti jedna od 16 boja palete.",\r
"Boja radnika u rasporedu (klik za promjenu)",\r
"Bolovanje",\r
"Bolovanje 100 % (povreda na radu, prof. bolest, darivanje…)",\r
"Bolovanje 100 % do 60 dana (povreda na radu, prof. bolest…)",\r
"Bolovanje 100 % preko 60 dana",\r
"Bolovanje do 60 dana (70%)",\r
"Bolovanje i porodiljsko se vode u obračunu plate, ne u posebnom obračunu.",\r
"bolovanje od {0}: nema obračunatih mjeseci prije početka — tekuća osnovna + minuli = {1} EUR",\r
"bolovanje od {0}: prosjek osnovne zarade (osnovna + minuli) {1}–{2}, {3} mj. = {4} EUR",\r
"Bolovanje preko 60 dana",\r
"Bolovanje, trudničko, porodiljsko po periodu (plata i IOPPD)",\r
"Bombone i drugi proizvodi od šećera",\r
"Bon",\r
"BOND",\r
"Bonus / nagrada (oporezivo)",\r
"Boranija, grašak, paprika, paradajz i tikva",\r
"Boravak",\r
"Boravak duži od {0} dana",\r
"Boravak duži od 30 dana",\r
"Boravišna taksa",\r
"Boravišna taksa — evidencija {0}.",\r
"boravišna taksa — obaveza prema opštini, nije prihod ({0} osoba-noćenja)",\r
"Boravišna taksa ({0}{1}",\r
"Boravišna taksa (EUR po osobi i noćenju)",\r
"Boravišna taksa (procjena)",\r
"Boravišna taksa je obaveza prema opštini, a ne prihod: ne ulazi u pazar, KIF ni u oslobođeni promet PR-PDV-a. Rok uplate:",\r
"Boravišna taksa po mjesecima",\r
"Boravišna taksa za opštinu {0} je {1} EUR; u pravilima objekta je {2} EUR.",\r
"Boravišna taksa: rok uplate za period {0} istekao je {1} Neuplaćeno: {2} EUR.",\r
"Boravišna taksa: uplata za period {0} dospijeva {1} Iznos: {2} EUR.",\r
"Božić",\r
"Božić (drugi dan)",\r
"br",\r
"BR",\r
"br original",\r
"br. {0}",\r
"br. dok",\r
"Br. dok:",\r
"br. dokumenta",\r
"Br. dokumenta",\r
"Br. faktura",\r
"br. fakture",\r
"Br. fakture",\r
"Br. fakture dob.",\r
"Br. fakture dobavljača",\r
"Br. izvoda",\r
"br. original",\r
"Br. računa",\r
"Br. ulaza",\r
"Brašno",\r
"Brašno (kukuruzno i pšenično) i pirinač u refuzi",\r
"Brašno (kukuruzno i pšenično) i pirinač upakovano",\r
"Brine o izgledu objekata, zaštiti na radu i poštovanju propisa o trgovini i fiskalizaciji.",\r
"Brisanje",\r
"brisanje kalkulacije",\r
"Brisanje kalkulacije, renumeracija godine, zaključavanje perioda i spajanje artikala traže PIN. PIN sprječava",\r
"Brisanje nije izvršeno.",\r
"Brisanje računa koji se kuca (kupac odustao, nema novca); ostaje u evidenciji obrisanih",\r
"Brisanje ručno upisanog praznika",\r
"Brisanje stavke",\r
"Brisanje upisanog početnog stanja",\r
"Brisanje, zaključavanje perioda, plate i kadrovi traže PIN, radi zaštite od slučajne radnje.",\r
"Brišu se samo konta koja je korisnik dodao.",\r
"broj",\r
"Broj",\r
"BROJ",\r
"Broj (ID) programa za pristup (neobavezno)",\r
"broj {0} (npr. 123 456 789)",\r
"broj / iznos; vrsta se određuje na ekranu Banka, zatim ponovo „Proknjiži mjesec\\"",\r
"Broj / oznaka obavještenja",\r
"Broj barkodova",\r
"Broj carinske deklaracije je obavezan.",\r
"Broj dana službenog puta (8–12 h = 0,5 dnevnice)",\r
"Broj deklaracije",\r
"broj dok",\r
"Broj dok. staro → novo",\r
"broj dokumenta",\r
"Broj dokumenta",\r
"Broj dokumenta — NOVI",\r
"Broj dokumenta — STARI",\r
"Broj dokumenta mora teći bez prekida kroz cijelu godinu na nivou firme, a broj kalkulacije po objektu. Zato brojeve dodjeljuje",\r
"Broj dokumenta, IKOF ili JIKR",\r
"Broj fakture",\r
"Broj fakture / opis",\r
"broj fakture dobavljača",\r
"Broj gratis komada mora biti bar 1.",\r
"Broj ili oznaka obavještenja kupca nije upisan.",\r
"broj isprave",\r
"Broj isprave",\r
"Broj izvoda",\r
"Broj izvršilaca",\r
"Broj kalk. staro → novo",\r
"broj kalkulacije",\r
"Broj kalkulacije",\r
"Broj kalkulacije — NOVI",\r
"Broj kalkulacije — STARI",\r
"Broj kalkulacije iz niza",\r
"Broj komada je u međuvremenu promijenjen.",\r
"Broj komada mora biti veći od nule.",\r
"Broj komada od kojeg važi cijena (N) je obavezan, najmanje 1.",\r
"Broj komada u pakovanju mora biti veći od nule.",\r
"Broj komada uz barkod {0} mora biti veći od nule.",\r
"Broj licence mora biti oblika L-2026-0001.",\r
"Broj lične karte",\r
"Broj na kasi",\r
"Broj nagradnih dana je obavezan kad je stimulacija uključena.",\r
"Broj nagradnih dana ne može biti negativan.",\r
"Broj naloga",\r
"broj naloga ({0}) i redova sa iznosima ({1}) se ne slaže",\r
"Broj odluke",\r
"Broj odluke (neobavezno)",\r
"broj odobrenja {0} ≠ {1}",\r
"Broj osoba-noćenja",\r
"Broj osoba-noćenja: {0} · iznos takse: {1} EUR · uplaćeno za mjesec: {2} EUR",\r
"Broj plaćenih komada za gratis (N) je obavezan, najmanje 1.",\r
"broj programa za pristup",\r
"broj racuna",\r
"broj računa",\r
"Broj računa",\r
"Broj računa / opis",\r
"broj računa dobavljača",\r
"broj računa ENU",\r
"Broj računa nije upisan.",\r
"broj računa, naziv, PIB…",\r
"Broj radnih dana koje je radnik radio. „Redovan rad\\" = dani × sati dnevno.",\r
"Broj recepta",\r
"Broj serije (LOT) sa otpremnice veledrogerije. Fiskalni račun ga ne sadrži, upisuje se ručno.",\r
"Broj soba",\r
"Broj ugovora",\r
"Broj ugovora (prazno = automatski)",\r
"Broj uređaja",\r
"Broj uređaja nije ispravan.",\r
"Broj vize",\r
"broj zaduženja {0} ≠ {1}",\r
"Broj žiro računa",\r
"Broj žiro računa nije upisan.",\r
"broj, dobavljač…",\r
"brojač šifara",\r
"Brojali:",\r
"Brojanje",\r
"Brojano",\r
"Brojčana polja primaju samo brojeve.",\r
"Brojevi",\r
"Brojevi na već izdatim kalkulacijama se mijenjaju",\r
"brojevi se razlikuju od kontrolnih brojeva fajla.",\r
"brojevi u šifarniku su jednaki kontrolnim brojevima fajla.",\r
"bruto",\r
"Bruto",\r
"BRUTO",\r
"Bruto (EUR)",\r
"bruto (porez se odbija od zakupnine)",\r
"bruto (ugovorena naknada)",\r
"Bruto bilans",\r
"BRUTO BILANS",\r
"BRUTO DOBIT (prihodi − nabavna vrijednost)",\r
"bruto promet tih dana; podjela se upisuje sa Z-izvještaja, zatim se procjena ponavlja",\r
"Bruto zarade ({0} lica)",\r
"Bruto: porez se odbija od ugovorene zakupnine. Neto: zakupodavac dobija tačno ugovoreni iznos, a bruto se izračunava.",\r
"Bruto: porez, PIO i prirez se odbijaju od ugovorene naknade. Neto: izvršilac dobija tačno taj iznos, a bruto se izračunava.",\r
"Brza promjena",\r
"Brzi izbor",\r
"Brzi pristup",\r
"Brzo javljanje",\r
"BS",\r
"BU",\r
"Budva",\r
"BUDVA",\r
"button",\r
"Bypass",\r
"C. ODLOŽENA PORESKA SREDSTVA",\r
"C. ODLOŽENE PORESKE OBAVEZE",\r
"C. Poreska osnovica",\r
"c) 15 % za oporezivu dobit koja prelazi 1.500.000,00",\r
"c) Amortizacija",\r
"c) NEMATERIJALNA SREDSTVA — računovodstvena amortizacija (čl. 11)",\r
"c) od nepovezanih pravnih lica",\r
"c) prema nepovezanim licima",\r
"c) Prihodi po osnovu vrijednosnog usklađivanja imovine",\r
"calc(10px + env(safe-area-inset-top)) 14px 10px",\r
"CAMEL",\r
"CAMERA",\r
"Carina",\r
"Carinska deklaracija",\r
"Carinska vrijednost",\r
"Carinske deklaracije — PDV pri uvozu, PR-PDV polje 20",\r
"carinske deklaracije (Uvoz i ino usluge) + ručno",\r
"Čas (0–23) dana poslije planiranog dolaska.",\r
"CASH",\r
"CAST(substr(COALESCE(DatumUUpotrebu,DatumNabavke),1,4) AS INTEGER)",\r
"čeka",\r
"Čeka",\r
"čeka {0}",\r
"čeka izjašnjenje",\r
"čeka knjiženje",\r
"čeka knjiženje / razvrstavanje",\r
"čeka obavještenje kupca",\r
"čeka obradu",\r
"Čeka obradu",\r
"čeka odluku",\r
"čeka podatak na koji se poziva",\r
"Čeka podatak na koji se poziva.",\r
"čeka pregled ·",\r
"čeka slanje",\r
"Čeka slanje",\r
"Čeka slanje: {0}.",\r
"čeka sumarni",\r
"čeka u Pošti)",\r
"Celer",\r
"Centar za socijalni rad (CSR)",\r
"čet",\r
"Čet",\r
"Cetinje",\r
"CETINJE",\r
"četvrtak",\r
"Četvrtak",\r
"CHESTERFIELD",\r
"Cigare",\r
"Cigare — cijene i marže",\r
"Cigare — ostaju sa svojom maržom",\r
"Cigare — posebne cijene i marže",\r
"CIGARETA",\r
"cigarete",\r
"CIGARETE",\r
"Cigarete i ostale prerađevine od duvana",\r
"CIGARILLOS",\r
"CIGARILOS",\r
"Cijela baza je kopirana u folder za rezervnu kopiju: {0}",\r
"Cijela godina",\r
"cijena",\r
"Cijena",\r
"Cijena (EUR sa PDV-om)",\r
"Cijena (N/P/S)",\r
"cijena {0} EUR sa PDV",\r
"cijena {0}{1}",\r
"Cijena {nova} je niža od nabavne cijene ({nabavna}). Upisati cijenu?",\r
"Cijena {nova} je veća od najviše dozvoljene cijene lijeka ({max}).",\r
"cijena artikla",\r
"Cijena bez PDV",\r
"Cijena čeka",\r
"Cijena FZO",\r
"Cijena i plaćanje",\r
"Cijena iz postojećih podataka upisana za {0} artikala{1}",\r
"cijena iznad najviše MP:",\r
"Cijena je nepromijenjena.",\r
"Cijena je u međuvremenu promijenjena.",\r
"Cijena je u međuvremenu promijenjena. Poništavanje nije moguće.",\r
"Cijena je zakazana: {0}, {1}, {2} od {3}.",\r
"Cijena kasa",\r
"cijena koja čeka {0}",\r
"cijena koje čekaju mjesto",\r
"Cijena koje čekaju povezivanje mjesta",\r
"cijena objekta (posljednja prodajna cijena sa kalkulacije).",\r
"Cijena mjesta „{0}\\" se ne može ukinuti: artikal nema opštu cijenu.",\r
"Cijena mora biti manja od 100.000,00 €. Potrebno je provjeriti da u polje cijene nije očitan barkod.",\r
"Cijena mora biti veća od nule.",\r
"cijena na kasama ({0}) je veća od najviše cijene lijeka ({1})",\r
"Cijena na kasi",\r
"Cijena na kasi ({0} €) je veća od najviše MP ({1} €).",\r
"Cijena na kasi (najveća {0}) je veća od najviše MP.",\r
"Cijena na kasi je veća od najviše MP:",\r
"Cijena na kasi: opšta",\r
"Cijena ne može biti negativna.",\r
"Cijena noći",\r
"Cijena noći (EUR)",\r
"Cijena noći nije ispravna.",\r
"Cijena noći sa PDV-om po periodu. Period za vrstu sobe ima prednost nad periodom za sve vrste; van perioda važi osnovna cijena vrste.",\r
"Cijena od N komada (€)",\r
"Cijena po kojoj kasa ovog objekta prodaje artikal (cjenovnik)",\r
"cijena po mjestima",\r
"Cijena po mjestima (upisane i koje čekaju)",\r
"Cijena po noćima",\r
"Cijena sa Liste (€)",\r
"Cijena sa PDV",\r
"CIJENA sa PDV",\r
"Cijena sa PDV-om (EUR)",\r
"Cijena se upisuje tasterom Enter i važi samo za",\r
"Cijena se upisuje u kolonu tog mjesta. Brisanjem polja mjesto ponovo koristi opštu cijenu.",\r
"Cijena za mjesto",\r
"Cijena za mjesto „{0}\\" mora biti veća od nule (prazno polje = važi opšta cijena).",\r
"Cijena za mjesto „{0}\\" nije broj.",\r
"Cijena za mjesto „{0}\\": {1}",\r
"cijene",\r
"Cijene",\r
"CIJENE AKCIJE — {0}",\r
"Cijene akcije: {0}",\r
"Cijene čekaju povezivanje prodajnog mjesta sa objektom:",\r
"Cijene kase ažurirane: {0}.",\r
"Cijene koje čekaju mjesto",\r
"Cijene mjesta „{0}\\": u pregledu {1}, na glavnom računaru {2}.",\r
"Cijene na kasama · akcije sa prethodnom najnižom cijenom (30 dana) · etikete",\r
"Cijene na kasi su već iste kao na kalkulaciji.",\r
"cijene objekta",\r
"Cijene ovih mjesta se ne odbacuju: čekaju i upisuju se kad se mjesto poveže sa objektom („Poveži prodajna mjesta sa objektima\\").",\r
"Cijene po kojima kase prodaju: opšta cijena firme i cijena objekta. Izmjena ovdje stiže na kase i u Menadžer; izmjene šefa na kasi i iz Menadžera stižu ovdje. ·",\r
"Cijene po mjestima",\r
"cijene po objektu, slanje na kase",\r
"Cijene prodajnog mjesta iz fajla koje nije povezano sa objektom čekaju ovdje. Poslije povezivanja se upisuju kao cijene tog objekta. Veza se pamti za sljedeće uvoze.",\r
"Cijene za kase mijenja računar u režimu obrade (glavni ili admin).",\r
"Cijenu mijenja korisnik sa ovlašćenjem.",\r
"cijenu sa PDV",\r
"Cilj",\r
"Cilj {0} {1}: {2} €",\r
"Cilj je prenizak za uklapanje.",\r
"Ciljni neto iznos je obavezan.",\r
"CInMED",\r
"cio cjenovnik",\r
"cio dan",\r
"cio objekat",\r
"cio objekat (godišnji / potpun popis)",\r
"cio objekat: ulazi u trgovačku knjigu, zalihe i PD",\r
"Cio obračun (stavke, obustave i rezultati) prepisuje se na izabrani mjesec. Fond sati se postavlja na fond tog mjeseca, osim ako je bio ručno mijenjan.",\r
"cip",\r
"Čišćenje",\r
"Čišćenje u toku",\r
"Čista",\r
"čitač (OCR) je stao i poslije ponovnog pokretanja ({0}). Potrebno je ponoviti čitanje.",\r
"Čitač isprave upisuje zonu ovdje; može i ručno, red po red.",\r
"čitačem",\r
"čitam",\r
"Čitam Outlook…",\r
"Čitam…",\r
"Čitanje baze kase je dostupno samo u Windows verziji.",\r
"Čitanje fajla",\r
"Čitanje fajlova Menadžera…",\r
"čitanje je stalo; čitač se ponovo pokreće",\r
"čitanje nije završeno; potreban ručni uvoz (Obaveze → Uvoz izvoda)",\r
"čitanje nije završeno: {0}",\r
"Čitanje Outlooka nije uspjelo. {0}",\r
"Čitanje Outlooka od zadnjeg datuma i uvoz izvoda u Banku",\r
"Čitanje Outlooka radi samo na Windowsu.",\r
"Čitanje PDF-a nije uspjelo: {0}",\r
"Čitanje PDF-a…",\r
"Čitanje pošte iz Outlooka od {0}. Obrada može trajati nekoliko minuta…",\r
"Čitanje pošte iz Outlooka… (prilozi se snimaju, pošta se ne mijenja)",\r
"Čitanje pošte je dostupno samo na računaru sa klasičnim Outlookom i instalacijom Setup 1.0.67 ili novijom. Pojedinačan uvoz izvoda: Obaveze → Uvoz izvoda.",\r
"Čitanje pošte radi samo na računaru (Windows) na kojem je Outlook.",\r
"Čitanje pošte traži novu instalaciju programa (Setup 1.0.67 ili noviji) na ovom računaru.",\r
"Čitanje pošte zahtijeva instalaciju programa Setup 1.0.67 ili noviji na računaru sa Outlookom. Ažuriranje preko interneta ne sadrži ovu mogućnost.",\r
"Čitanje računa sa slike…",\r
"čitanje reda {0}/{1}",\r
"Čitanje sa servera…",\r
"Čitanje teksta nije dostupno na ovom uređaju.",\r
"Čitanje…",\r
"Cjenovnik",\r
"cjenovnik iz fajla",\r
"Cjenovnik iz fajla „kasa-paket\\": cjenovnik sačuvan iz drugog Knjigovodstva dugmetom „Sačuvaj cjenovnik u fajl\\" ili katalog jedne kase iz programa Kasa (Podešavanja → Artikli i cijene → „Sačuvaj katalog u fajl\\"). Svakom prodajnom mjestu iz paketa dodjeljuje se objekat. Cijene iz paketa ne zamjenjuju novije cijene u cjenovniku; uvoz ništa ne briše.",\r
"Cjenovnik iz fajla (kasa-paket)",\r
"cjenovnik je objavljen (kase ga preuzimaju automatski).",\r
"Cjenovnik je prazan.",\r
"Cjenovnik je prazan. Artikli se dodaju pojedinačno ili uvozom (Razmjena i Excel).",\r
"Cjenovnik kasa",\r
"Cjenovnik kasa, cijene i zaključci kasa IRIS CORVINA",\r
"Cjenovnik kasama objavljuje glavni računar firme, automatski u svakom krugu sinhronizacije.",\r
"cjenovnik kase",\r
"Cjenovnik mijenjan",\r
"cjenovnik nije mijenjan od posljednje objave.",\r
"Cjenovnik nije upisan u folder: {0}",\r
"cjenovnik objavljen",\r
"cjenovnik postoji",\r
"CKB",\r
"čl. 101 st. 2 Zakona o radu",\r
"čl. 102 Zakona o radu",\r
"čl. 105 Zakona o radu",\r
"čl. 106 Zakona o radu",\r
"čl. 119a st. 6 Zakona o radu",\r
"čl. 120 st. 7 Zakona o radu",\r
"čl. 126 Zakona o radu",\r
"čl. 126a Zakona o radu",\r
"čl. 139, 140 i 141 Zakona o radu",\r
"čl. 144 i 145 Zakona o radu",\r
"čl. 146 Zakona o radu",\r
"čl. 147 i 148 Zakona o radu",\r
"čl. 149 Zakona o radu",\r
"čl. 150 Zakona o radu",\r
"čl. 151 Zakona o radu",\r
"čl. 152 Zakona o radu",\r
"čl. 153 Zakona o radu",\r
"čl. 154–157 Zakona o radu",\r
"čl. 158 Zakona o radu",\r
"čl. 161 i 162 Zakona o radu",\r
"čl. 163 Zakona o radu",\r
"čl. 164 st. 1 tač. 7 Zakona o radu",\r
"čl. 164 Zakona o radu",\r
"čl. 165 Zakona o radu",\r
"čl. 166 Zakona o radu",\r
"čl. 169a Zakona o radu",\r
"čl. 17",\r
"čl. 172 st. 1 tač. 2 al. 5 Zakona o radu",\r
"čl. 172 Zakona o radu",\r
"čl. 173 Zakona o radu",\r
"čl. 174 Zakona o radu",\r
"čl. 175 Zakona o radu",\r
"čl. 176 i 176a Zakona o radu",\r
"čl. 177 Zakona o radu",\r
"čl. 179 Zakona o radu",\r
"čl. 18 tač. 5 i 5a Zakona o radu",\r
"čl. 180a st. 1 i čl. 140 Zakona o radu i čl. 65 st. 3 Zakona o mirnom rješavanju radnih sporova",\r
"čl. 19 st. 1 tač. 1 Zakona o radu",\r
"čl. 19 st. 1 tač. 3 Zakona o radu",\r
"čl. 193 Zakona o radu",\r
"čl. 205 Zakona o radu",\r
"čl. 25",\r
"čl. 26",\r
"čl. 27",\r
"čl. 29 i 30 Zakona o radu",\r
"čl. 29 st. 4 Zakona o radu",\r
"čl. 31 st. 1 tač. 15 i čl. 92 Zakona o radu",\r
"čl. 31 st. 1 Zakona o radu",\r
"čl. 31 st. 3 Zakona o radu",\r
"čl. 33 Zakona o radu",\r
"čl. 34 i 35 Zakona o radu",\r
"čl. 35b st. 3 t. 2",\r
"čl. 35b st. 3 t. 6",\r
"čl. 35b st. 3 t. 7",\r
"čl. 37 st. 9 Zakona o radu",\r
"čl. 37 Zakona o radu",\r
"čl. 38 Zakona o radu",\r
"čl. 47 i 48 Zakona o radu",\r
"čl. 48 st. 5–7 Zakona o radu",\r
"čl. 49 Zakona o radu",\r
"čl. 5 st. 1 tač. 6 i 9 Zakona o radu",\r
"čl. 50 Zakona o radu",\r
"čl. 61 Zakona o radu",\r
"čl. 62 st. 4 Zakona o radu",\r
"čl. 62 Zakona o radu",\r
"čl. 64 Zakona o radu",\r
"čl. 67 Zakona o radu",\r
"Čl. 7 st. 1: kategorija se utvrđuje po kriterijumima na zadnji dan",\r
"čl. 7 Zakona o zabrani zlostavljanja na radu",\r
"čl. 70 Zakona o radu",\r
"čl. 73 Zakona o radu",\r
"čl. 75 Zakona o radu",\r
"čl. 76 Zakona o radu",\r
"čl. 79 st. 3 i 4 Zakona o radu",\r
"čl. 79 Zakona o radu",\r
"čl. 80 Zakona o radu",\r
"čl. 81 st. 4 Zakona o radu",\r
"čl. 81 Zakona o radu",\r
"čl. 83 st. 1 Zakona o radu",\r
"čl. 83 st. 2 Zakona o radu",\r
"čl. 83 st. 4 Zakona o radu",\r
"čl. 85 Zakona o radu",\r
"čl. 86 Zakona o radu",\r
"čl. 87 Zakona o radu",\r
"čl. 88 i 88a Zakona o radu",\r
"čl. 89 Zakona o radu",\r
"čl. 9 Zakona o zabrani zlostavljanja na radu",\r
"čl. 90 Zakona o radu",\r
"čl. 93 Zakona o radu",\r
"čl. 98 Zakona o radu",\r
"Član i tačka zakona (npr. „čl. 27 t. 5\\")",\r
"Član ugovora o roku (neobavezno)",\r
"član, tačka",\r
"Članarine komorama, savezima i udruženjima iznad 0,1 % ukupnog prihoda",\r
"CLASSIC",\r
"COALESCE({0},'') LIKE ? ESCAPE '\\\\'",\r
"COALESCE({0}DatumFakture, {1}DatumDokumenta)",\r
"COALESCE({0}DatumKnjizenja, {1}DatumDokumenta, {2}DatumFakture)",\r
"COALESCE(d.Naziv,'')",\r
"COALESCE(k.DatumFakture, k.DatumDokumenta)",\r
"COALESCE(k.DatumKnjizenja, k.DatumFakture, k.DatumDokumenta)",\r
"COALESCE(k.MarketID, r.MarketID)",\r
"COALESCE(ks.PDVProcenat,0)",\r
"COALESCE(ks.ZavisniJed,0)",\r
"COALESCE(NULLIF({0}.DatumPDV,''), {1}.DatumIzdavanja)",\r
"COALESCE(NULLIF(Racun,''), Banka)=?",\r
"COALESCE(p.Iznos,0)",\r
"COALESCE(p.Iznos,0)-{0}",\r
"COALESCE(pl.Placeno,0)",\r
"COALESCE(ps.Poc,0)",\r
"COALESCE(vz.Vezano,0)",\r
"coca; cola; fanta; sprite; sok; juice; ledeni caj; tonik; bitter; energetsk; cedevita; limunada",\r
"cokolad; kakao; voc; jagod; vanil; keks; napolitank; karamel; sladoled; puding; sojin; bademov; zoben; kokosov; rizin; tijelo; sapun; losion",\r
"cokolad; kinder; tjestenin; rezanci; sampon; liker",\r
"Čokolada i proizvodi od čokolade i kakaoa",\r
"Consolas, monospace",\r
"Content-Disposition: attachment; filename=\\"{0}\\"",\r
"Content-Transfer-Encoding: base64",\r
"Content-Type: application/octet-stream; name=\\"{0}\\"",\r
"Content-Type: multipart/mixed; boundary=\\"{0}\\"",\r
"Content-Type: text/plain; charset=UTF-8",\r
"CORRECTIVE",\r
"CRNA",\r
"Crne Gore",\r
"Crnogorska komercijalna banka (CKB)",\r
"Crnogorski",\r
"crvena",\r
"crveno",\r
"CSR",\r
"Ctrl+K",\r
"Čuvanje ličnih podataka (godina)",\r
"Čuvanje ličnih podataka: najmanje 1 godina",\r
"Cvijeće",\r
"Cvijeće ostalo",\r
"Cvijeće svježe (rezano)",\r
"D. DUGOROČNI ODLOŽENI PRIHODI I PRIMLJENE DONACIJE",\r
"D. OBRTNA SREDSTVA (026+031+039+043+044)",\r
"d.Broj",\r
"d.DokID IN ({0})",\r
"d.FIK",\r
"d.IIC",\r
"d.InvNum",\r
"d.MarketID",\r
"da",\r
"Da",\r
"DA",\r
"Da — IV stepen potrebne podrške (računa se kao dva lica)",\r
"da — raspoređeno na stavke",\r
"da se o navodima iz ovog upozorenja pisano izjasnite u roku od {0} dana od dana dostavljanja, najkasnije do {1} godine, i priložite dokaze kojima raspolažete. Ako se u tom roku ne izjasnite, smatra se da ste saglasni sa navodima iz upozorenja ({2} st. 5 i 6). Imate pravo da u roku od {3} dana od dostavljanja (do {4}) zahtijevate da se izjasnite usmeno — rasprava se tada održava u roku od 15 dana od dostavljanja upozorenja, u prisustvu predstavnika sindikata čiji ste član i branioca koga sami izaberete, ako to zahtijevate, i o njoj se vodi zapisnik ({5} st. 7–12).",\r
"da upišeš njegove zahtjeve (slobodan dan, odmor, željena smjena, rad u drugom objektu) — prije „Automatski rasporedi\\". Klikni bilo koju ćeliju ili zaglavlje dana da dodaš radnika, zamijeniš ga ili skloniš iz smjene. Zadnji redovi pokazuju koliko je radnika raspoređeno po smjeni tog dana (crveno = fali).",\r
"Dalje",\r
"dan",\r
"Dan",\r
"Dan / od",\r
"Dan državnosti",\r
"dan ima pazar",\r
"Dan izvještaja: od 1 do 31",\r
"Dan je neradni za sve.",\r
"Dan je vraćen u neradni praznik.",\r
"Dan kada su primljeni i roba i račun (kasniji od ta dva). Po njemu ulazni PDV ide u PR-PDV.",\r
"Dan nezavisnosti",\r
"Dan prijema fakture — ZPDV čl. 37 st. 7",\r
"dana",\r
"Dana",\r
"Dana (0 = nema)",\r
"dana {0} radni odnos kod Poslodavca, po osnovu isteka ugovora o radu na određeno vrijeme{1}.",\r
"dana da se pisano izjasni,",\r
"dana da traži usmeno; ćutanje = saglasnost) →",\r
"Dana do roka",\r
"dana i izvršenje",\r
"dana i njeno uručenje u",\r
"Dana kašnjenja",\r
"dana od isteka roka za izjašnjenje)",\r
"dana od saznanja (radnik ima",\r
"dana po isteku svakih 15 dana u mjesecu; mjesečni izvještaj do",\r
"Dana po isteku svakih 15 dana u mjesecu.",\r
"dana prije.",\r
"dana; od uručenja teku rok za pravni lijek",\r
"dana; ostatak do",\r
"dana; usmeno na zahtjev u",\r
"dana), a za prestanak napravi rješenje o otkazu. Cio postupak mora da se završi u",\r
"danas",\r
"Danas",\r
"danas ({0})",\r
"Danas nema izmjena cijena sa ovog uređaja.",\r
"Današnja kopija je već napravljena.",\r
"Dani",\r
"Dani i sati se vode u obračunu plate, ne u posebnom obračunu.",\r
"Dani praznika u odluci",\r
"Dani u sedmici (ništa označeno = svi dani)",\r
"Danilovgrad",\r
"DANILOVGRAD",\r
"danima",\r
"Danom stupanja na snagu ovog pravilnika prestaje da važi raniji akt o sistematizaciji radnih mjesta Poslodavca. Pravilnik se objavljuje na oglasnoj tabli sjedišta i svakog objekta i elektronski, i stupa na snagu osmog dana od dana objavljivanja. Svaki zaposleni upoznaje se sa pravilnikom i opisom poslova svog radnog mjesta i to potvrđuje potpisom (Prilog 2).",\r
"danu",\r
"DATA",\r
"datalist",\r
"DATI AVANSI",\r
"Dati avansi za zalihe i usluge",\r
"Datum",\r
"datum „{0}\\" nije prepoznat (dd.mm.gggg ili gggg-mm-dd)",\r
"Datum „do\\" je prije „od\\".",\r
"Datum „do\\" je prije datuma „od\\".",\r
"Datum „do\\" mora biti GGGG-MM-DD ili null (bez roka).",\r
"Datum „do\\" ne može biti prije datuma „od\\".",\r
"Datum „do\\" nije ispravan.",\r
"Datum „do\\" ugovora je prije datuma „od\\".",\r
"Datum „od\\" je poslije datuma „do\\".",\r
"Datum „od\\" mora biti GGGG-MM-DD.",\r
"Datum „od\\" nije ispravan.",\r
"datum dokumenta",\r
"Datum dokumenta",\r
"datum fakture",\r
"Datum fakture",\r
"Datum i vrijeme izdavanja",\r
"Datum isplate",\r
"Datum isplate (ili ugovora) je obavezan. Po njemu se određuje mjesec IOPPD prijave.",\r
"Datum isporuke",\r
"Datum izdavanja",\r
"Datum izdavanja je u budućnosti. Uprava prihoda takav račun ne prima.",\r
"Datum izdavanja nije ispravan.",\r
"Datum je uzet sa dna izvještaja (uz korekciju za štampu poslije ponoći). Potrebna je provjera dana.",\r
"datum knjizenja",\r
"datum knjiženja",\r
"Datum knjiženja",\r
"Datum knjiženja (u koju knjigu ulazi)",\r
"Datum knjiženja {0} je prije datuma računa {1}.",\r
"Datum knjiženja {0} nije primijenjen: {1}",\r
"Datum knjiženja je postavljen: {0}.",\r
"Datum konačnog računa je prije prijema avansa.",\r
"Datum nabavke",\r
"Datum nabavke je obavezan.",\r
"Datum nastanka PDV obaveze: {0} (osmi dan od isporuke).",\r
"Datum nije ispravan.",\r
"Datum nivelacije nije ispravan.",\r
"Datum obavještenja je prije datuma odobrenja.",\r
"Datum obavještenja je u budućnosti.",\r
"Datum obavještenja nije ispravan.",\r
"Datum od kada rabat važi nije ispravan.",\r
"Datum od kada šema važi je obavezan.",\r
"Datum od kada važi osnov je obavezan.",\r
"Datum od kog nova stopa važi je obavezan.",\r
"Datum od kog stopa važi nije ispravan (oblik GGGG-MM-DD).",\r
"Datum od kog važi nova cijena je obavezan (GGGG-MM-DD).",\r
"Datum odluke",\r
"Datum odobrenja",\r
"Datum odobrenja je prije datuma fakture.",\r
"Datum odobrenja je u budućnosti.",\r
"Datum odobrenja nije ispravan.",\r
"Datum otpremnice nije ispravan.",\r
"Datum otuđenja (prodaje ili rashodovanja), GGGG-MM-DD:",\r
"Datum otuđenja je prije datuma nabavke.",\r
"Datum pazara",\r
"Datum pazara je obavezan.",\r
"Datum pazara: {0}",\r
"Datum početnog stanja",\r
"Datum početnog stanja nije ispravan.",\r
"Datum pod kojim kalkulacija ulazi u knjige (KPR po datumu knjiženja, trgovačka knjiga, konta 134). Za fakture prethodnog mjeseca koje se unose početkom mjeseca upisuje se zadnji dan prethodnog mjeseca.",\r
"Datum pod kojim napravljene kalkulacije ulaze u knjige. Početkom mjeseca se za skenove iz prethodnog mjeseca upisuje zadnji dan tog mjeseca.",\r
"Datum podnošenja prijave",\r
"Datum popisa",\r
"Datum popisa je obavezan.",\r
"Datum povrata",\r
"Datum povrata je prije datuma izdavanja reversa.",\r
"Datum povrata je u budućnosti.",\r
"Datum povrata nije ispravan.",\r
"Datum povrede *",\r
"Datum prestanka",\r
"Datum prijema",\r
"Datum prijema (po zakonu)",\r
"Datum prijema {0} je prije datuma računa {1}. Račun ne može biti primljen prije izdavanja.",\r
"Datum prijema {0} je u budućnosti. Upisuje se dan stvarnog prijema robe i računa.",\r
"Datum prijema avansa je u budućnosti.",\r
"Datum prijema avansa nije ispravan.",\r
"Datum prijema avansa: {0}",\r
"Datum prijema deklaracije je obavezan.",\r
"Datum prijema fakture je prije datuma procjene.",\r
"Datum prijema fakture je u budućnosti.",\r
"Datum prijema fakture nije upisan.",\r
"Datum prijema je obavezan.",\r
"Datum prijema ne može biti prije datuma računa.",\r
"Datum prijema ne može biti u budućnosti.",\r
"Datum prijema nije ispravan.",\r
"Datum prijema obavještenja",\r
"Datum procjene je u budućnosti.",\r
"Datum prometa",\r
"Datum računa",\r
"Datum računa je obavezan.",\r
"Datum računa je prije prijema avansa {0}.",\r
"Datum računa nije ispravan.",\r
"Datum rješenja",\r
"datum rođenja",\r
"Datum rođenja",\r
"Datum troška je u zaključanom mjesecu. Potreban je datum u otvorenom mjesecu.",\r
"Datum ugovora",\r
"Datum ulaska u Crnu Goru",\r
"datum unosa u program",\r
"Datum uplate",\r
"Datum uplate nije ispravan.",\r
"Datum uručenja odluke zaposlenom nije upisan (dostava u roku od 8 dana od donošenja, čl. 148 st. 7). Od tog datuma teče rok za izvršenje.",\r
"Datum uručenja odluke:",\r
"Datum zadnje fakture",\r
"Datum zaključenja",\r
"Datum zaposlenja",\r
"Datum zaposlenja (prijave)",\r
"Datum;Objekat;Kasa;ZBroj;BrojRacuna;UkupnoSaPDV;Osnovica21;PDV21;Osnovica15;PDV15;Osnovica7;PDV7;Oslobodjeno0;Gotovina;Kartica",\r
"Datum;Objekat;Sifra;Barkod;Naziv;JM;Kolicina;Iznos;PDV",\r
"Datum: ____________ Odgovorno lice: {0}",\r
"Datum: izvještaj je štampan ujutru ({0} oko {1} h), a fiskalni dan na vrhu nije pročitan. Za Z izvještaj prethodnog dana datum je potrebno ispraviti.",\r
"Datum: vrh ({0}) i dno ({1}) izvještaja se ne slažu. Uzet je datum sa dna; potrebna je provjera.",\r
"datuma prestanka",\r
"Datumi nisu u obliku GGGG-MM-DD.",\r
"Datumi praznika (GGGG-MM-DD, više odvojeno zarezom):",\r
"datumu prijema",\r
"DAVIDOFF",\r
"Deaktiviran ENU se ne može mijenjati.",\r
"decembar",\r
"Decembar",\r
"decembra",\r
"Deklaracija {0} od {1} je već upisana.",\r
"Deklaracija je upisana. PDV ide u PR-PDV polje 20.",\r
"Deklaracija nije snimljena. Potrebno je provjeriti osnovicu i PDV.",\r
"Detalji: Nabavka · OA · PD.",\r
"Deterdžent za pranje rublja",\r
"Devizna blagajna",\r
"Devizni akreditivi",\r
"Devizni račun",\r
"Dijeli",\r
"dijeli ga i",\r
"dijeljeni barkod",\r
"Dijeljeni barkod",\r
"Dijeljenje je otkazano. Promjene nisu poslate.",\r
"Dijeljenje nije dostupno na ovom uređaju.",\r
"Dijelove programa određuje licenca firme.",\r
"Dijelovi programa (moduli)",\r
"Dijelovi van knjiga",\r
"Dijete do {0} godina",\r
"Dijete do 12 godina",\r
"dijete sa smetnjama",\r
"Dimenzije slike nisu čitljive.",\r
"dio dana",\r
"Dio dugoročnih finansijskih plasmana koji dospijeva do jedne godine",\r
"Dio dugoročnih kredita koji dospijeva do jedne godine",\r
"Dio FZO",\r
"Dio gosta ({0} EUR)",\r
"Dio gosta (saldo)",\r
"dio naziva",\r
"dio naziva (npr. milka 100)",\r
"Dio ostalih dugoročnih obaveza koje dospijevaju do jedne godine",\r
"Dio pacijent",\r
"Dio pacijenta",\r
"Dio partnera ({0} EUR)",\r
"Dio partnera (saldo)",\r
"Dio pregleda nije sastavljen: {0}.",\r
"Dio računa partnera ostaje za fakturu.",\r
"dio robe (kontrolni popis)",\r
"dio robe (kontrolni)",\r
"dio robe: kontrolni, bez uticaja na knjigu i zalihe",\r
"Direktni otpis potraživanja",\r
"Direktno slanje",\r
"Direktno slanje: dostupno po dobijanju tehničkog uputstva Uprave policije.",\r
"direktor",\r
"Direktor, administrator, menadžer, kasir, izlagač, magacioner, pomoćni knjigovođa, vozač, higijeničar — sa opisima poslova. Postojeća mjesta se ne dupliraju (Direktor = Izvršni direktor), prazna polja se dopune.",\r
"Disciplina",\r
"Disciplinska mjera — novčana kazna {0} % ({1}/{2})",\r
"Disciplinski postupak",\r
"Disciplinski postupak — {0} {1}",\r
"disciplinski postupak još nije stigao",\r
"div",\r
"dj",\r
"DJE",\r
"Djece",\r
"Djelatnost",\r
"Djelatnosti",\r
"djelimično fakturisana",\r
"djelimično vraćen",\r
"Djelo {0} {1}/{2}",\r
"Dnevna (mijenja smjenu svaki dan)",\r
"Dnevna i periodična štampa",\r
"Dnevna kopija se uključuje/isključuje u Podešavanja → Zaštita.",\r
"Dnevna kopija u taj folder",\r
"Dnevni (ciklični) popis koji poslovođe rade u programu IRIS Menadžer: prebrojano prema knjižnom stanju, po objektu i danu. Samo pregled — ne upisuje se u Popis robe. Puni popis iz Menadžera je na kartici „Popis skenerom\\".",\r
"dnevni izvod",\r
"dnevni izvod računa — unos plaćanja dobavljačima",\r
"Dnevni pazar",\r
"Dnevni pazari po objektu · pregled pazara sa kontrolom zbira (izvoz)",\r
"Dnevni pregled",\r
"Dnevni promet po objektu — osnov za KIF/EDI/KPP, PR-PDV i trgovačku knjigu.",\r
"Dnevnica u zemlji — neoporezivo po danu (EUR; 20 % OVK, Uredba čl. 7a — provjeri važeću OVK)",\r
"Dnevnice za službeni put (neoporezivo: dana × dnevnica; upiši dane i obroke)",\r
"dnevnik",\r
"Dnevnik",\r
"DNEVNIK",\r
"dnevnik ({0} redova)",\r
"Dnevnik izmjena",\r
"Dnevnik je veći od {0} MB.",\r
"DNEVNIK KNJIŽENJA",\r
"Dnevnik poslatih dokumenata",\r
"Dnevnik se vodi automatski i čuva koliko i podaci o prijavi gostiju.",\r
"Dnevnik u prilogu: niz do {0} redova teksta (red do {1} znakova).",\r
"Dnevnik unosa (Zakon o računovodstvu čl. 12–13)",\r
"dnevnik za izdavača: {0} B{1}",\r
"Dnevnik, glavna knjiga (bruto bilans) i finansijski iskazi — 10 godina (Zakon o računovodstvu 84/25, čl. 14)",\r
"do",\r
"Do",\r
"DO",\r
"Do (prazno = do daljeg)",\r
"Do (uključeno)",\r
"do {0}",\r
"Do {0}",\r
"do daljeg",\r
"Do kada gost napušta sobu na dan odlaska.",\r
"do ručnog pregleda i potvrde.",\r
"Do sata",\r
"do unosa nove",\r
"Dob. šifre",\r
"Dobavljac",\r
"dobavljač",\r
"Dobavljač",\r
"Dobavljač · PIB",\r
"Dobavljač (iz šifarnika ili ručni upis)",\r
"Dobavljač (naziv ili PIB) je obavezan.",\r
"Dobavljač (šifarnik ili novi)",\r
"Dobavljač (zadnja faktura)",\r
"Dobavljač i šifra su obavezni.",\r
"Dobavljač ili kupac nije izabran.",\r
"Dobavljač ima",\r
"Dobavljač ima {0} spornih stavki ({1} EUR) koje traži, a nema ih u evidenciji. Plaćanje ne smije pokrivati te stavke bez fizičke provjere.\\n\\nSnimiti plaćanje?",\r
"Dobavljač ima račune u zaključanim mjesecima ({0}). Oznaka se ne mijenja.",\r
"Dobavljač ne postoji.",\r
"dobavljač nije poznat",\r
"dobavljač PIB {0} ne postoji",\r
"Dobavljač PIB {0} nije u šifarniku (konto {1}). Stavka je upisana bez partnera.",\r
"dobavljač traži {0} EUR više nego naša faktura",\r
"dobavljač traži, kod nas nema fakture ni kalkulacije",\r
"dobavljač: {0}",\r
"Dobavljač: {0}{1}{2}",\r
"dobavljača",\r
"Dobavljačeve šifre — {0}",\r
"Dobavljaci",\r
"dobavljači",\r
"Dobavljači - matična i zavisna pravna lica",\r
"Dobavljači - ostala povezana pravna lica",\r
"Dobavljači — saldo i dugovi",\r
"Dobavljači (roba)",\r
"Dobavljači i dugovi",\r
"Dobavljači u inostranstvu",\r
"Dobavljači u zemlji",\r
"Dobavljači, kartice, IOS dobavljaču, dugovi",\r
"dobavljačima neproknjiženo",\r
"dobavljaču",\r
"Dobici ili gubici od instrumenata zaštite neto ulaganja u inostrano poslovanje",\r
"Dobici ili gubici po osnovu instrumenata zaštite rizika (hedžinga) novčanog toka",\r
"Dobici ili gubici po osnovu udjela u ostaloj sveobuhvatnoj dobiti ili gubitku pridruženih društava",\r
"Dobici od prodaje bioloških sredstava",\r
"Dobici od prodaje materijala",\r
"Dobici od prodaje nematerijalnih ulaganja, nekretnina, postrojenja i opreme",\r
"Dobici od prodaje učešća i dugoročnih hartija od vrijednosti",\r
"dobija se uz kôd softvera",\r
"Dobit",\r
"Dobit poslovne godine (bilans uspjeha, prije poreza)",\r
"DOBIT PRIJE OPOREZIVANJA",\r
"Dobitak ili gubitak",\r
"Dobitak od prodaje OS — {0}",\r
"Dobitak poslovanja koje je obustavljeno",\r
"DOBITAK POSLOVANJA KOJE JE OBUSTAVLJENO, RASHODI IZ PRETHODNIH IZVJEŠTAJNIH PERIODA I PRENOS PRIHODA",\r
"Dobitak prije oporezivanja",\r
"dobra voda",\r
"DOCUMENTS",\r
"Documents/",\r
"dodaci povrh toga",\r
"dodaci: noćni",\r
"Dodaj",\r
"Dodaj akciju",\r
"Dodaj artikal (naziv, šifra, barkod)",\r
"Dodaj artikal iz šifarnika (naziv, šifra, barkod)",\r
"Dodaj artiklu iz Menadžera",\r
"Dodaj barkod",\r
"Dodaj gosta",\r
"Dodaj i ovom artiklu",\r
"Dodaj kasu",\r
"Dodaj kasu i napravi kod",\r
"Dodaj način plaćanja",\r
"Dodaj objekat",\r
"Dodaj pravilo",\r
"Dodaj rabat",\r
"Dodaj radnika u tabelu",\r
"Dodaj sobe",\r
"Dodaj stavku",\r
"Dodaj stopu",\r
"Dodaj u otvoren obračun",\r
"Dodaj uslugu",\r
"Dodaj vrstu sobe",\r
"Dodaj žiro račun",\r
"Dodatak PG 1 — prenos poslovnih gubitaka (5 godina)",\r
"Dodatak za noćni rad 22–06 (+40 % povrh osnove)",\r
"Dodatak za rad na dan praznika (+150 % povrh osnove)",\r
"Dodatak za rad nedjeljom (+80 % povrh osnove)",\r
"Dodati razliku minulog rada ({0} EUR bruto, {1} radnika) u obračun za {2} {3}?",\r
"Dodatna mogućnost: sati iz rasporeda smjena (redovni, noćni, praznik, prekovremeni) se prepišu u stavke radnika i obračunaju. Kad su sedmice potvrđene na ekranu „Smjene radnika\\", ulaze samo potvrđene.",\r
"Dodatna tačka (neobavezno)",\r
"Dodatni",\r
"Dodatni modul",\r
"Dodatni računar firme koja već radi na drugom računaru",\r
"Dodatnih dana",\r
"Dodatnih ležaja",\r
"Dodatno",\r
"dodato",\r
"Dodato soba: {0}{1}.",\r
"Dodato u grupu „Cigare\\": {0} artikala. Slijedi upis marži ili cijena.",\r
"Dodato.",\r
"Dodavanje artikla (naziv, šifra, barkod)",\r
"Dodavanje više soba",\r
"Dodijeliti nov ID ovom uređaju?\\n\\nPotrebno je samo kad drugi računar ima isti ID.",\r
"Dodijeljen je nov ID: {0}",\r
"Dodijeljeni brojevi:",\r
"Dogovorena cijena noći (EUR)",\r
"Dogovoreni neto nije zadržan kod {0} radnika jer sati i osnovna plata daju veći iznos (potrebna je provjera sati i fonda sati): {1}{2}.",\r
"Dogovoreni neto zadržan kod {0} radnika.",\r
"DOK",\r
"Dok uređaj nije uparen sa serverom, uređaji mogu razmjenjivati promjene i preko ovog foldera (Google Drive ga kopira između računara), sporije i uz više fajlova u Drive-u. Poslije uparivanja uređaja ovo nije potrebno.",\r
"dok. br",\r
"Dokazi",\r
"Dokazi (snimak kamere, presjek kase, izjave…)",\r
"Doktor nauka (VIII)",\r
"dokumenata plata",\r
"Dokument",\r
"Dokument {0}{1}",\r
"Dokument je označen kao poništen.",\r
"Dokument je proslijeđen na dijeljenje.",\r
"Dokument je štampan dvaput na strani. Uzeta je lijeva kopija.",\r
"Dokument je storniran.",\r
"Dokument je vraćen u važenje.",\r
"Dokument mora imati bar jednu stavku sa nazivom.",\r
"Dokument mora imati bar jednu stavku.",\r
"Dokument naloga",\r
"Dokument ne postoji.",\r
"Dokument nema prilog.",\r
"Dokument nema stavki.",\r
"Dokument nije fiskalizovan.",\r
"dokument plata",\r
"Dokument radnika",\r
"Dokument se dijeli ili preuzima; primalac se bira u programu za poštu.",\r
"Dokument se šalje kroz sistemsko dijeljenje; primalac se bira u programu za poštu.",\r
"dokumenta plata",\r
"Dokumenti",\r
"Dokumenti radnika",\r
"Dolasci",\r
"Dolasci i noćenja po državi (TU-11)",\r
"Dolasci i noćenja po državi i mjesecu",\r
"Dolasci od danas",\r
"Dolazak",\r
"Dolazak (prva noć)",\r
"dolazak {0}",\r
"dolazak danas",\r
"Dolazak danas",\r
"Dolazak je prijavljen.",\r
"Dolazak kasni ({0})",\r
"Dolazak na posao pod dejstvom alkohola ili opojnih sredstava",\r
"Dolazak od",\r
"Dolazak od (čas)",\r
"DOMACE",\r
"Domaće",\r
"domaći",\r
"Domaći gost",\r
"Domaći gost (državljanin Crne Gore)",\r
"Domaći: {0} dolazaka, {1} noćenja · strani: {2} dolazaka, {3} noćenja.",\r
"Domen {0} je upisan. QR kodovi sa tim domenom se štampaju na glavnoj kasi (QR meni → Podešavanja → sopstveni domen).",\r
"Domen je uklonjen. QR kodovi vode na adresu menija IRIS-a.",\r
"Donacije iznad 3,5 % ukupnog prihoda (+ sve fizičkim licima) + naučnoistraživački projekti + sportski savezi iznad 5 % (a+b+c)",\r
"Donos (saldo prije perioda)",\r
"Donosi akt o sistematizaciji, pravilnike i druge opšte akte poslodavca.",\r
"DOO",\r
"DOOEL",\r
"Doplata",\r
"Doplate",\r
"doplatna lista",\r
"Dopr. poslod.",\r
"DOPRINOS",\r
"doprinos se ne obračunava (isključen na kartici Stope)",\r
"doprinos se obračunava uz prijavu redovnih zarada, ne uz poseban obračun",\r
"Doprinos za lica sa invaliditetom — prosječna mjesečna zarada u CG (EUR)",\r
"Doprinos za lica sa invaliditetom — prosječna mjesečna zarada u CG {0}. (osnovica za obračune {1}.) (EUR)",\r
"Doprinos za lica sa invaliditetom: 1 = obračunava se, 0 = ne (novoosnovani poslodavac — prva 24 mjeseca; udruženje lica sa invaliditetom)",\r
"Doprinos za PIO izvršioca",\r
"Doprinos zbog nezapošljavanja lica sa invaliditetom:",\r
"DOPRINOSA",\r
"doprinosi",\r
"Doprinosi",\r
"DOPRINOSI",\r
"Doprinosi na teret poslodavca",\r
"Doprinosi na teret poslodavca + prirez",\r
"Doprinosi na teret zaposlenog",\r
"doprinosi po ugovoru o djelu",\r
"doprinosi poslodavca",\r
"doprinosi zaposlenog",\r
"Dopuna podataka firme",\r
"Dopuni",\r
"Dopunjeno stavki postojećih dokumenata: {0}.",\r
"Dopunski rad",\r
"Doručak, polupansion, pansion.",\r
"Dosadašnja i nova šifra su obavezne i različite.",\r
"Dosadašnja šifra",\r
"Dosadašnja šifra {0} je u međuvremenu zauzeta.",\r
"Dospijeca",\r
"Dospijeća i plaćanje obaveza",\r
"DOSPIJEĆA OBAVEZA",\r
"Dospijeva u narednih 7 dana",\r
"DOSPJELI PDV ZA UPLATU (24−27)",\r
"DOSPJELI PDV za uplatu (28)",\r
"Dospjelo",\r
"DOSPJELO",\r
"Dospjelo (do 30 dana)",\r
"dospjelo:",\r
"Dostaviti (svaki red jedna stavka)",\r
"Dostavljanje: lično u prostorijama Poslodavca uz potpis, na adresu prebivališta ili na e-adresu zaposlenog iz evidencije Poslodavca ({0}). Ako se dostava ne može izvršiti, sačinjava se pisana zabilješka i akt se objavljuje na oglasnoj tabli — dostava se smatra izvršenom istekom 8 dana.",\r
"Dostupna je verzija",\r
"Dostupna je verzija {0}.",\r
"dozvoli kad fali ljudi",\r
"Dozvoli pristup",\r
"dozvoljen",\r
"Dozvoljene vrijednosti: jedinice mjere, stope PDV-a, vrste barkoda i vrste mjesta.",\r
"Dozvoljeno nedjeljom",\r
"DR",\r
"Dragomir Dačević",\r
"DRI, revizija završnog računa budžeta Opštine Nikšić za 2022 (citira Odluku o prirezu)",\r
"DRI, revizija završnog računa budžeta Opštine Petnjica za 2023 (citira Odluku o prirezu)",\r
"DRI, revizija završnog računa budžeta Opštine Rožaje za 2022 (citira Odluku o prirezu)",\r
"DRINA",\r
"droga",\r
"Droga",\r
"Druga",\r
"druga firma",\r
"Druga firma",\r
"druga firma (PIB {0})",\r
"Druga isprava",\r
"Druga kalkulacija istog računa",\r
"DRUGA POTRAŽIVANJA",\r
"druga smjena",\r
"Druga smjena",\r
"drugačije",\r
"Druge nepomenute obaveze — obustave iz zarada",\r
"DRUGE OBAVEZE",\r
"Druge vrste",\r
"drugi ključ (ne pripada firmi, ne čita se)",\r
"drugi kupac",\r
"DRUGI POSLOVNI PRIHODI",\r
"Drugi prihodi",\r
"drugi računar nije upisao izmjenu ovog računara",\r
"drugo",\r
"Drugo",\r
"Društvo sastavlja i dostavlja: {0}.{1}",\r
"društvo se razvrstava kao {0} PRAVNO LICE.",\r
"Država",\r
"Država (ISO-3)",\r
"Država izdavanja",\r
"Država izdavanja isprave",\r
"država koja je izdala ispravu",\r
"Država kupca se upisuje kao troslovna oznaka ISO 3166 (npr. MNE, SRB, DEU).",\r
"država rođenja",\r
"Država rođenja",\r
"Drzavljanstvo",\r
"državljanstvo",\r
"Državljanstvo",\r
"državni",\r
"državni — neradan za sve",\r
"Državni kapital",\r
"Državni praznici",\r
"državni praznik",\r
"DUG",\r
"dug dobavljačima (EUR)",\r
"Dug dobavljaču {0} (početno stanje)",\r
"Dug kupca se umanjuje odmah. Iznos se dijeli po stopama računa.",\r
"dug PARTNERSKIH objekata",\r
"DUGA",\r
"dugme",\r
"dugme malo",\r
"dugme: {0}",\r
"DUGOROČNE OBAVEZE",\r
"DUGOROČNI FINANSIJSKI PLASMANI",\r
"Dugoročni krediti matičnim, zavisnim i ostalim povezanim pravnim licima",\r
"Dugoročni krediti u inostranstvu",\r
"Dugoročni krediti u zemlji",\r
"dugov. saldo 331–337",\r
"Duguje",\r
"DUNHILL",\r
"Dupl.",\r
"Dupli artikli",\r
"dupli u fajlu",\r
"duplikat",\r
"duplikata (količina se sabira)",\r
"duplikata preskočeno",\r
"DUPLIKATI (prepoznati i preskočeni)",\r
"DUVAN",\r
"Dva glavna računara objavljuju dvije različite baze i daju dvostruke brojeve dokumenata.",\r
"Dva računara su u ulozi glavnog: bazu objavljuje i „{0}\\". Glavni smije biti samo jedan računar; na drugom je potrebno izabrati ulogu sporednog (Povezivanje → „Uloga ovog računara\\"). Do tada ovaj računar ne objavljuje bazu automatski.",\r
"Dvokrevetna soba",\r
"dvopek; prezla; mrvice",\r
"e nema",\r
"E-adresa radnika (dostava akata e-poštom, čl. 31 st. 1 tač. 2a)",\r
"E-mail knjigovođe",\r
"E-mail knjigovođe (za slanje obrazaca)",\r
"E-pošta",\r
"E. AKTIVNA VREMENSKA RAZGRANIČENJA",\r
"E. KRATKOROČNA REZERVISANJA I KRATKOROČNE OBAVEZE (128+129)",\r
"EAN-13",\r
"EAN-8",\r
"EC",\r
"ECDSA",\r
"EDI",\r
"EDI — Evidencija dnevnih izvještaja",\r
"Efektivna nab.",\r
"Egzotično voće",\r
"Ekran za unos nije otvoren.",\r
"ekran: {0}",\r
"Električna energija",\r
"ELEKTRONSKI ŽURNAL — IZDATI RAČUNI",\r
"Email",\r
"Emisiona premija",\r
"Engleski",\r
"Enter",\r
"ENU",\r
"ENU {0} je registrovan na drugom računaru ({1}).",\r
"ENU {0} je registrovan na drugom računaru ({1}). Za ovaj računar je potreban sopstveni ENU (Podešavanja → Fiskalizacija).",\r
"ENU {0} je registrovan sa drugim programom za kase; za fakture je potreban novi ENU",\r
"ENU je registrovan. Kôd: {0}",\r
"ENU mora biti zaseban, samo za fakture",\r
"err",\r
"Erste Bank",\r
"Escape",\r
"EUR",\r
"EUR — ulazi u IOPPD XML ovog mjeseca (kartica „Ugovor o djelu\\"), ne broji se u zaposlene.",\r
"EUR — ulazi u IOPPD XML ovog mjeseca (kartica „Zakup\\").",\r
"EUR · neto:",\r
"EUR · ostatak",\r
"EUR · PDV obaveza bez računa:",\r
"EUR · prirez",\r
"EUR · računa",\r
"EUR · rokovi uplate",\r
"EUR · saldo",\r
"EUR · smanjenje (crveni storno):",\r
"EUR · staž ukupno",\r
"EUR · trgovačka knjiga:",\r
"EUR · ukupan trošak firme",\r
"EUR · uplaćeno",\r
"EUR · uplaćeno za mjesec:",\r
"EUR (čl. 106 Zakona o radu — 1/3 zarade; za obavezno izdržavanje do 1/2).",\r
"EUR (crveni storno),",\r
"EUR (nabavna). Normativ",\r
"EUR bez PDV-a) na stavke kalkulacije. Nabavna cijena po j.m. = (neto fakturna − rabat + raspoređeni trošak) / količina; odbitni PDV ne ulazi u nabavnu. Prodajne cijene se ne mijenjaju; mijenjaju se nabavna cijena i RUC.",\r
"EUR je u nabavnoj cijeni (kolona „NV+zav trosk.\\") i u RUC-u kalkulacije. Prodajne cijene nijesu mijenjane.",\r
"EUR na račun opštine izvršioca · isplata izvršiocima",\r
"EUR nije raspoređeno po načinu plaćanja, pa kolona uplate gotovine za te dane možda nije tačna. Podjelu je potrebno dopuniti na ekranu Pazari.",\r
"EUR slobodno",\r
"EUR: na razliku se obračunava PDV (provjeriti sa knjigovođom).",\r
"EUR. Ti pazari nijesu u kolonama uplate, nego u spisku „",\r
"EUR) — klikni „Automatski poveži\\" ili ručno preko fakture. Neraspoređeno = pretplata ili plaćanje bez odgovarajuće otvorene fakture.",\r
"EUR) na račun opštine zakupodavca:",\r
"EUR) raspoređeni su na stavke srazmjerno vrijednosti.",\r
"EUR): to je saldo knjige",\r
"EUR). Dobavljač ih traži, a evidencija ih ne pokriva.",\r
"EUR). Saldo je vrijednost robe i ne može biti negativan (čl. 7); uzrok je obično početno stanje koje nedostaje ili neunesena kalkulacija.",\r
"EVA",\r
"Evidencija EV: zaduženje i razduženje po veleprodajnim cijenama bez PDV-a.",\r
"Evidencija trgovine EV (veleprodaja)",\r
"EVIDENCIJA UVOZA (carinske deklaracije)",\r
"Evidentira dnevne pazare, presjeke kase i uplate pazara na račun.",\r
"evidentira se tačno jednom",\r
"Evidentirana prodaja",\r
"evidentirano",\r
"evidentirano (bez knjiženja)",\r
"Excel",\r
"Excel {0}/{1}: {2}",\r
"Excel je snimljen ({0} kalkulacija): {1}",\r
"Excel nema listova.",\r
"Expand-Archive -LiteralPath '{0}' -DestinationPath '{1}' -Force",\r
"F. PASIVNA VREMENSKA RAZGRANIČENJA",\r
"F. UKUPNA AKTIVA (001+002+024+025+045)",\r
"fajl",\r
"Fajl",\r
"Fajl {0} je snimljen. Uvoz na kasi: Podešavanja → Artikli i cijene.",\r
"Fajl {0} koji daje izdavač IRIS CORVINA (npr. na USB-u)",\r
"Fajl {0} ne postoji.",\r
"Fajl {0} trenutno nije čitljiv. Čitanje se ponavlja.",\r
"Fajl baze artikala je prazan.",\r
"Fajl baze za Menadžer je snimljen: {0} ({1} MB).",\r
"fajl i predlog",\r
"Fajl ima zaglavlje, ali nijedan red sa podacima.",\r
"Fajl izmjena cijena je druge firme (PIB {0}).",\r
"Fajl izmjena nije upisan u folder: {0}",\r
"Fajl je izvezen za drugu firmu.",\r
"Fajl je već uvezen u ovo početno stanje.",\r
"Fajl je već uvezen.",\r
"fajl je veći od {0} MB i ne šalje se na server.",\r
"Fajl licence koji je dao izdavač IRIS CORVINA (npr. na USB-u) učitava se ovdje. Bez licence program radi kao paket „Knjige\\".",\r
"Fajl nema kolonu Datum. Potrebno je izabrati period od–do za cijeli fajl.",\r
"Fajl nema kolonu Objekat. Potrebno je izabrati objekat.",\r
"fajl nema kontrolne brojeve.",\r
"Fajl nema list „Artikli\\".",\r
"Fajl nema nijedan list.",\r
"Fajl nema podatke o izvozu. Zaštita od starog fajla nije moguća.",\r
"Fajl nije baza artikala (format „iris-sifarnik\\").",\r
"Fajl nije čitljiv (očekuje se Excel .xlsx).",\r
"Fajl nije čitljiv (očekuje se fajl baze artikala, .json).",\r
"Fajl nije čitljiv (očekuje se JSON).",\r
"Fajl nije fajl izmjena cijena (format „kasa-cijene\\").",\r
"Fajl nije fajl stanja kase (format „{0}\\").",\r
"Fajl nije fajl zaključaka kase (format „kasa-zakljuci\\").",\r
"Fajl nije izvještaj CInMED o maksimalnim cijenama (nema zaglavlja sa kolonama ATC i INN).",\r
"Fajl nije licenca IRIS CORVINA (nije ispravan JSON).",\r
"Fajl nije licenca IRIS CORVINA.",\r
"Fajl nije moguće pročitati: {0}. PDF sken (bez teksta) se unosi kopiranjem tabele u polje ispod ili kao Excel fajl od dobavljača.",\r
"Fajl nije paket podataka kase (očekuje se format „kasa-paket\\").",\r
"Fajl ovog naloga više nije na ovom računaru. Uvoz je potrebno poslati ponovo iz fajla.",\r
"Fajl sa jednim periodom ima prodaju na posljednji dan perioda; tada se poredi po uvozu.",\r
"Fajl se ne može pročitati: {0}",\r
"Fajl se ne razlikuje od šifarnika. Nema izmjena za upis.",\r
"Fajl u nalogu nije baza artikala.",\r
"Fajl XLSX sa sajta CInMED (utvrđena maksimalna cijena je veleprodajna, bez PDV). Novi uvoz zamjenjuje prethodni; povezani ljekovi se povezuju sa istim redom novog izvještaja i dobijaju novu cijenu. Najviša MP ≈ VP ×",\r
"Fajl za štampu ne postoji: {0}",\r
"Fajl zaključaka je druge firme (PIB {0}).",\r
"fajl zaključaka kase",\r
"Fajl zaključaka nema kod kase (ENU).",\r
"fajla",\r
"fajlom baze",\r
"fajlova",\r
"fajlova {0}, primijenjeno {1}{2}{3}",\r
"fajlova {0}, smjena {1}: novih pazara {2}, izmijenjenih {3}{4}{5}{6}",\r
"Fajlova čeka slanje",\r
"Fajlovi koji čekaju slanje ({0}) se ne šalju na server.",\r
"Fajlovi Menadžera se ne mogu pročitati: {0}",\r
"FAKT",\r
"Fakt.",\r
"Faktoring",\r
"faktura",\r
"Faktura",\r
"FAKTURA",\r
"Faktura (broj)",\r
"Faktura (nacrt)",\r
"Faktura (stornirana)",\r
"Faktura {0}",\r
"Faktura {0} — {1}",\r
"faktura bez objekta",\r
"Faktura bez PDV",\r
"faktura danas ·",\r
"Faktura FZO",\r
"Faktura ima knjižno odobrenje. Brisanje nije moguće.",\r
"Faktura ima stavke sa 0 % PDV bez osnova. Potrebno je izabrati osnov (nulta stopa čl. 25 ili oslobođenje čl. 26/27 Zakona o PDV).",\r
"Faktura iz otpremnica (",\r
"Faktura iz otpremnica: roba je razdužena otpremnicom (lager i trgovačka knjiga).",\r
"Faktura iz otpremnice",\r
"Faktura iz ove ponude",\r
"Faktura iz reversa: roba je izašla iz lagera reversom.",\r
"Faktura je fiskalizovana. FIK: {0}{1}",\r
"Faktura je fiskalizovana. Izmjena sadržaja nije moguća.",\r
"Faktura je stornirana.",\r
"Faktura je uvezena: {0} ({1} stavki, {2} EUR). Slijedi unos marži po stavci.",\r
"Faktura je uvezena: {0} ({1} stavki, {2} EUR).{3}",\r
"Faktura je uvezena. PDF nije napravljen: {0}",\r
"Faktura je već fiskalizovana.",\r
"Faktura koja se fiskalizuje izdaje se danas ({0}). Datum izdavanja mora biti današnji; raniji datum se upisuje u „Datum prometa\\".",\r
"Faktura mora imati kupca.",\r
"Faktura na koju se odobrenje odnosi",\r
"Faktura na koju se odobrenje odnosi nije fiskalizovana (nema IKOF).",\r
"Faktura ne postoji ili nije izdata.",\r
"Faktura ne postoji.",\r
"Faktura nema kupca.",\r
"Faktura nema stavki (items prazan) niti zbirnih poreskih podataka (sameTaxes) — kalkulacija se ne može napraviti.",\r
"Faktura nema stavki sa stopom {0} %.",\r
"Faktura nema stavki.",\r
"Faktura nije fiskalizovana: PDF nosi oznaku „Nacrt fakture — nije fiskalni račun\\".",\r
"Faktura nije primljena: iznos je procjena, knjiži se na konto 494 do prijema fakture; ne ulazi u knjigu primljenih računa ni u PR-PDV",\r
"faktura ovaj mjesec ·",\r
"faktura po dobavljaču,",\r
"Faktura primljena",\r
"Faktura sa PDV",\r
"Faktura stranog dobavljača nema domaći PDV: stavke računa idu sa 0 % (kalkulacija zadržava stopu prodaje). PDV pri uvozu se upisuje sa carinske deklaracije (Obrasci → Uvoz i ino usluge) i ide u PR-PDV polje 20.",\r
"Faktura umanjena ovim odobrenjem",\r
"Faktura unesena ručno: {0}, {1} EUR (kalkulacija {2}).",\r
"Faktura već postoji",\r
"Faktura za",\r
"Faktura za procijenjeni trošak",\r
"Faktura za robu sa reversa",\r
"Faktura zavisnog troška",\r
"fakture",\r
"Fakture",\r
"FAKTURE",\r
"fakture dobavljača + oprema/troškovi + zavisni",\r
"Fakture koje su radnje skenirale telefonima ili u programu IRIS Menadžer. Kalkulaciju i broj dokumenta pravi glavni računar — zato je numeracija kontinualna kroz cijelu godinu.",\r
"Fakture skenirane telefonom — čekaju obradu na računaru",\r
"Fakture u kašnjenju sa zateznom kamatom (",\r
"Fakture: {0}.",\r
"Fakturisano",\r
"fale {0} dnevna izvještaja",\r
"fali",\r
"Fali",\r
"fali 1 dnevni izvještaj",\r
"Farmaceutski oblik",\r
"Farmaceutski podaci artikala (režim izdavanja, lista, najviša cijena).",\r
"Farmaceutski podaci artikala kase (režim Apoteka, Kasa 1.7): šifarnik ljekova i povučene serije stižu na kase sa cjenovnikom; recepti izdati na kasama stižu ovdje uz razmjenu cijena. · Ljekova:",\r
"Farmaceutski podaci artikla {0} su uklonjeni.",\r
"farmaceutski podaci nisu upisani",\r
"FAST",\r
"februar",\r
"Februar",\r
"februara",\r
"Feed nema ispravan kontrolni zbir paketa (sha256) — ažuriranje je odbijeno.",\r
"Feed nema polja \\"verzija\\" i \\"url\\".",\r
"Feed nije ispravan JSON.",\r
"Feed nosi neispravnu oznaku verzije „{0}\\" — ažuriranje je odbijeno.",\r
"FIIT",\r
"FIK",\r
"Finansije",\r
"Finansije — glavna knjiga",\r
"Finansije: nalozi i glavna knjiga",\r
"Finansijska odobrenja bez PDV",\r
"Finansijski iskazi",\r
"Finansijski iskazi → Bilans uspjeha",\r
"Finansijski iskazi → PD — porez na dobit",\r
"Finansijski iskazi i porez na dobit",\r
"Finansijski iskazi i prijava poreza na dobit za {0}",\r
"Finansijski iskazi podliježu zakonskoj reviziji (Zakon o reviziji „Sl. list CG\\" 84/25, čl. 35).",\r
"FINANSIJSKI PRIHODI",\r
"Finansijski prihodi od matičnih i zavisnih pravnih lica",\r
"Finansijski prihodi od ostalih povezanih pravnih lica",\r
"FINANSIJSKI RASHODI",\r
"Finansijski rashodi iz odnosa sa matičnim i zavisnim pravnim licima",\r
"Finansijski rashodi iz odnosa sa ostalim povezanim pravnim licima",\r
"Finansijsko knjigovodstvo (nalozi, glavna knjiga, bruto bilans) vodi se na računaru. Na telefonu nije dostupno.",\r
"Finansijsko knjigovodstvo i porezi",\r
"firma",\r
"Firma",\r
"Firma · PIB",\r
"Firma „{0}\\" je zamijenjena uvezenom bazom.\\n\\nPrethodna baza je snimljena u:\\n{1}",\r
"Firma „{0}\\" već postoji na ovom računaru.",\r
"Firma „{0}\\" već postoji na ovom uređaju. Zamijeniti je uvezenom bazom?\\n\\nU redu: zamjena uvezenom bazom (trenutna baza se prethodno snima kao „{1}\\").\\nOdustani: bez uvoza.",\r
"firma ima {0} aktivna objekta",\r
"Firma ima sopstveni uvoz (carinske deklaracije)",\r
"Firma ima trajnu licencu — uključeni su svi dijelovi programa.",\r
"Firma ima ugostiteljski objekat (PDV pravila za ugostiteljski objekat)",\r
"firma isključena na serveru",\r
"Firma je isključena na serveru (npr. licenca). Fajlovi čekaju na ovom uređaju i šalju se kad administrator ponovo uključi firmu (provjera svakih 15 minuta). Ponovno uparivanje nije potrebno.",\r
"Firma je odvojena. Za razmjenu je potrebno upariti je kodom za ovu firmu.",\r
"firma je promijenjena",\r
"Firma je promijenjena dok se čitao snimak „{0}\\". Preuzimanje je prekinuto i ponavlja se kad ta firma bude otvorena.",\r
"firma je promijenjena poslije upisa",\r
"Firma je promijenjena tokom prijema iz Menadžera. Prijem je prekinut.",\r
"Firma je promijenjena tokom razmjene cijena. Cjenovnik nije objavljen.",\r
"Firma je promijenjena tokom razmjene cijena. Razmjena je prekinuta.",\r
"Firma je promijenjena tokom sklapanja pregleda.",\r
"Firma je spremna za rad. Ostala podešavanja nisu obavezna i mogu se urediti kasnije.",\r
"Firma je u sistemu PDV-a",\r
"Firma je uparena sa serverom: u ovaj folder se snimaju samo rezervne kopije, bez fajlova razmjene.",\r
"Firma je zatvorena prije nego što je račun obrađen.",\r
"Firma ne postoji u Registru poreskih obveznika.",\r
"Firma nema Menadžer.",\r
"Firma nema nijedan objekat.",\r
"Firma nema nijedan objekat. Objekat se dodaje dugmetom „+ Dodaj objekat\\" (ili Podešavanja → Objekti).",\r
"Firma nema PIB (Podešavanja → Firma).",\r
"Firma nema PIB (Podešavanja → Firma). Kase se vode lokalno.",\r
"Firma nema PIB (Podešavanja → Firma). Menadžer prepoznaje firmu po PIB-u.",\r
"Firma nije aktivna u Registru poreskih obveznika.",\r
"Firma nije među firmama ovog računara na serveru. Menadžer se povezuje fajlom baze.",\r
"Firma nije među firmama ovog uređaja na serveru. Kase se vode lokalno.",\r
"Firma nije otvorena.",\r
"Firma nije povezana sa serverom",\r
"Firma nije u sistemu PDV-a, a na računu je iskazan PDV.",\r
"Firma nije uparena sa serverom. Kase se vode lokalno; kod za uparivanje kase izdaje administrator.",\r
"Firma nije uparena sa serverom. Prelazni režim nije primjenljiv.",\r
"firma promijenjena",\r
"Firma radi bez licence (paket „Knjige\\"): knjigovodstvo je uvijek uključeno; Kasa i Menadžer se uključuju sami kad firma ima podatke kase ili Menadžera, ili ručno ispod.",\r
"Firma radi po stalnom sedmičnom obrascu: jedna uređena sedmica se prepisuje na ostale dane",\r
"Firma sa tim imenom već postoji.",\r
"Firma tog dana ne radi uopšte: neradni dan za sve (naknada svima)",\r
"Firma već ima glavni računar, pa se prazna baza ne pravi (dala bi pogrešne brojeve dokumenata). Ovaj računar se povezuje sa serverom kodom za tu firmu (dugme ispod), uz automatsko preuzimanje baze glavnog, ili se uvozi kopija baze glavnog (.knj.db).",\r
"Firma već ima Menadžer",\r
"Firma za",\r
"Firma, korisnici, backup i arhiva godine",\r
"Fiskalizacija",\r
"Fiskalizacija izlaznih računa nije uključena, pa izdavanje fakture nije moguće (Zakon o fiskalizaciji, čl. 10). Do uključenja kupcu se šalje ponuda (predračun), a račun se izdaje kroz registrovanu kasu ili fiskalni softver. Nedostaje: {0}.",\r
"Fiskalizacija izlaznih računa nije uključena, pa izdavanje fakture nije moguće (Zakon o fiskalizaciji, čl. 10). Faktura ostaje nacrt; kupcu se šalje ponuda (predračun), a račun se izdaje kroz registrovanu kasu ili fiskalni softver.",\r
"Fiskalizacija je isključena.",\r
"Fiskalizacija je uključena.",\r
"Fiskalizacija nije spremna. Nedostaje: {0}",\r
"Fiskalizacija radi samo na računaru sa sertifikatom (Windows aplikacija). Na telefonu se faktura može pripremiti i snimiti, a fiskalizuje se na računaru.",\r
"Fiskalizacija se podešava u Windows aplikaciji (na računaru sa sertifikatom).",\r
"Fiskalizacija: čeka",\r
"Fiskalizacija: greška",\r
"Fiskalizovana faktura se ne briše. Ispravka ide stornom.",\r
"Fiskalizovana faktura se ne mijenja. Ispravka ide knjižnim odobrenjem ili stornom.",\r
"fiskalizovano",\r
"Fiskalizuj",\r
"Fiskalizuj fakture pri izdavanju",\r
"Fiskalizuje se samo faktura, ne ponuda.",\r
"Fiskalni broj",\r
"Fiskalni broj računa: {0}",\r
"Fiskalni dokumenti pri odjavi",\r
"Fiskalni podaci računa",\r
"Fiskalni podaci su upisani.",\r
"Fiskalni račun",\r
"Fiskalni servis se ne javlja (isteklo vrijeme).",\r
"Fiskalni status",\r
"Fiskalni žurnal (za poresku kontrolu)",\r
"Fiskalno",\r
"fizičko lice",\r
"Fizičko lice",\r
"Fizičko lice od kojeg firma zakupljuje — kako se upisuje u prijavu",\r
"fizičkog lica",\r
"Folder je podešen i provjeren: {0}. U folderu: {1} {2}{3}",\r
"Folder postoji, ali čitanje iz njega nije moguće.",\r
"folder razmjene",\r
"Folder razmjene nije dostupan: {0}",\r
"Folder u Dokumentima telefona",\r
"Folder za razmjenu nije izabran.",\r
"Folder za razmjenu trenutno nije dostupan (npr. Google Drive disk nije spojen). Fajl čeka.",\r
"Folder za rezervnu kopiju (Google Drive)",\r
"Folder za rezervnu kopiju (Google Drive) nije izabran (Povezivanje → „Rezervna kopija\\").",\r
"Folder za rezervnu kopiju (Google Drive) nije podešen (Povezivanje → „Rezervna kopija\\").",\r
"Folder za rezervnu kopiju: {0}",\r
"Folder:",\r
"Fond rada — poslodavac (%)",\r
"fond radnika",\r
"Fond radnika je 0 (odsustva pokrivaju cio mjesec), pa su svi sati prekovremeni. Potrebna je provjera odsustava.",\r
"Fond sati (radni dani × 8 =",\r
"Fond sati je postavljen na {0}. Plate se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Fond sati mjeseca",\r
"Fond sati važi za redovan rad svih radnika. Poslije promjene iznosi se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Fond za zdravstveno osiguranje (FZO)",\r
"Format .xls (stari Excel) nije podržan. Fajl je potrebno snimiti u Excelu kao .xlsx ili .csv.",\r
"Format: 3 cifre banke + 13 cifara partije + 2 kontrolne (ukupno 18)",\r
"formula",\r
"Fotografijama",\r
"FZO",\r
"FZO aplikacija",\r
"FZO ručno",\r
"FZO servis",\r
"G. UKUPNA PASIVA (101+117+125+126+127+143)",\r
"GAULOISES",\r
"Gdje",\r
"GET",\r
"GHIJKLMNOPQRSTUVWXYZ",\r
"GK",\r
"glavna knjiga",\r
"Glavna knjiga",\r
"glavna knjiga {0}",\r
"Glavna knjiga mora dati isto što i poreske knjige iz istih dokumenata. Oznaka ❌: nalozi i knjige nijesu usklađeni (razlog u koloni Napomena).",\r
"glavni",\r
"Glavni — ovdje se prave kalkulacije i brojevi dokumenata",\r
"glavni grad",\r
"Glavni je računar na kom se prave kalkulacije i brojevi dokumenata; firma ima tačno jedan.",\r
"Glavni računar („{0}\\") radi na starijoj verziji programa. Njegova baza se ovdje ne preuzima dok se ne ažurira (na glavnom: Povezivanje → Ažuriranje → Provjeri → Ažuriraj). Dokumenti i dalje stižu normalno, a plaćanja i izvodi uneseni ovdje ostaju sačuvani.",\r
"GLAVNI računar (obrada — dodjeljuje brojeve, objavljuje bazu)",\r
"Glavni računar objavljuje",\r
"Glavni računar ove radnje izvršava sam. {0}",\r
"Glavnom računaru se šalje samo uvoz baze artikala. Uvoz šifarnika iz Excela radi se na glavnom računaru firme.",\r
"GLO",\r
"GO",\r
"god.",\r
"god. (",\r
"god. staža na 01.",\r
"godina",\r
"Godina",\r
"Godina {0}",\r
"Godina {0} je već zaključena (nalog {1}). Ponovni zaključak je moguć nakon poništavanja postojećeg.",\r
"Godina {0} je zaključena.",\r
"Godina {0} je zaključena. Unos nije moguć.",\r
"Godina {0} nije zaključena. Potrebno je prethodno napraviti zaključak.",\r
"godina {0}.",\r
"godina {0}. — nije zvanični bilans uspjeha; pozicije bez podataka su označene",\r
"Godina datuma ({0}) odstupa od ostalih strana. Potrebna je provjera.",\r
"Godina datuma usklađena sa ostalim stranama ({0} → {1}).",\r
"Godina je zaključena (nalog",\r
"godina nije zaključena",\r
"godina nije zaključena, pa njeni",\r
"godine (prosječan broj zaposlenih, ukupan prihod, ukupna aktiva). Kad program nema knjige za",\r
"Godine {0} nijesu zaključene. Njihov rezultat ({1}) dodat je na poziciju {2}, a porez ({3}) na 141. Potrebno je redom zaključiti i otvoriti te godine (kartica Zaključak godine).",\r
"godine nijesu zaključene",\r
"godine nijesu zaključene, pa njihovi",\r
"godišnje (zbir u kalendarskoj godini)",\r
"godišnje ili jednokratno",\r
"Godišnji obračuni zarada (rekapitulacije, IOPPD) — trajno (Zakon o računovodstvu 84/25, čl. 14)",\r
"Godišnji odmor",\r
"Godišnji odmor koristi se u jednom ili dva dijela (na zahtjev Zaposlenog i u više djelova ako proces rada dozvoljava); prvi dio traje najmanje {0} radnih dana neprekidno u toku godine, a ostatak najkasnije do {1} naredne godine ({2}). Poslodavac donosi plan korišćenja odmora do {3} uz konsultaciju sa Zaposlenim i dostavlja rješenje o odmoru najkasnije {4} dana prije početka korišćenja ({5} i {6}). Za vrijeme godišnjeg odmora Zaposleni ima pravo na naknadu zarade u visini zarade koju bi ostvario da radi ({7}).",\r
"Godišnji odmor koristi se u jednom ili dva dijela, a na zahtjev zaposlenog i u više djelova ako proces rada to dozvoljava. Prvi dio traje najmanje {0} radnih dana neprekidno u toku kalendarske godine, a ostatak se koristi najkasnije do {1} naredne godine ({2}). Zaposleni koji odmor nije iskoristio ili ga je prekinuo zbog privremene spriječenosti za rad ili njege djeteta koristi ga po povratku, najkasnije u roku od {3} mjeseci po isteku godine u kojoj je pravo stečeno; zbog porodiljskog, očinskog ili roditeljskog odsustva — u roku od {4} mjeseci od povratka na rad.",\r
"Godišnji odmor utvrđuje se u radnim danima prema {0} radnoj sedmici ({1}); neradni praznici, plaćeno odsustvo i privremena spriječenost za rad ne uračunavaju se u dane odmora. Osnov je {2} radnih dana ({3}); zaposleni mlađi od 18 godina ima najmanje {4} radnih dana ({5}), zaposleno lice sa invaliditetom najmanje {6} ({7}), a zaposleni sa skraćenim radnim vremenom {8} radnih dana.",\r
"Godišnji odmori",\r
"GODIŠNJI ODMORI {0} — PRAVO I ISKORIŠĆENO",\r
"Godišnji popis na 31.12.{0} (prije njega usaglašavanje sa partnerima — IOS)",\r
"Goodwill",\r
"Google Drive na telefonu nema svoj folder, pa se veza pravi aplikacijom",\r
"Google Drive za računare nije pronađen. Potrebno je instalirati Google Drive ili izabrati drugi folder koji se kopira van računara.",\r
"GORA",\r
"Gorivo",\r
"Gorivo — putnički automobil",\r
"gost",\r
"Gost",\r
"Gost — {0} {1}",\r
"gost čeka",\r
"Gost je ipak stigao",\r
"Gost je obrisan.",\r
"Gost je odjavljen.{0}",\r
"Gost je premješten.",\r
"Gost je sačuvan.",\r
"Gost nije došao",\r
"gost odlazi danas",\r
"gost u sobi",\r
"Gost u sobi",\r
"gosta čekaju",\r
"Gosti",\r
"gosti nisu upisani",\r
"Gosti nisu upisani.",\r
"gostiju u objektu",\r
"Gotovi proizvodi",\r
"GOTOVI PROIZVODI",\r
"gotovina",\r
"Gotovina",\r
"GOTOVINA",\r
"gotovina · kartice",\r
"Gotovina · kartice",\r
"Gotovina · kartice · virman",\r
"Gotovina (EUR)",\r
"Gotovina {0} + kartica {1} = {2}, a ukupan promet je {3}.",\r
"Gotovina + kartica = {0} (ukupan promet: {1})",\r
"Gotovina + kartica se ne slaže sa ukupnim prometom. Potrebna je provjera prema slici.",\r
"gotovina + kartice ({0}) su veće od prometa ({1})",\r
"gotovina + kartice ≠ ukupno ({0})",\r
"GOTOVINA I GOTOVINSKI EKVIVALENTI",\r
"Gotovina i kartica",\r
"Gotovina pazara bez evidentirane uplate, rok uplate prošao: {0} — {1} pazara, {2} EUR.",\r
"Gotovina sa ovim partnerom u ±30 dana: {0} EUR (zajedno sa ovim plaćanjem). Plaćanje i primanje gotovine od {1} EUR i više, i kroz više povezanih transakcija, nije dozvoljeno (Zakon o sprječavanju pranja novca i finansiranja terorizma; kazna za pravno lice 5.000–20.000 EUR).",\r
"Gotovo",\r
"Grad",\r
"grad (opština) sjedišta",\r
"Grad (sjedište)",\r
"Grad / opština sjedišta",\r
"grad nije upisan: Podešavanja → Firma",\r
"Grad sjedišta nije prepoznat kao opština Crne Gore (npr. Podgorica, Nikšić, Budva). Bez opštine poziv na broj za uplatu poreza i doprinosa nije ispravan.",\r
"Građevinski objekti",\r
"Građevinski objekti namijenjeni prodaji",\r
"Granica je prekoračena. Obustave je potrebno smanjiti ili ostatak prenijeti u naredni mjesec.",\r
"Gratis (npr. 2+1)",\r
"Gratis komada",\r
"greska",\r
"greška",\r
"Greška",\r
"greška · čeka {0}",\r
"Greška je prijavljena izdavaču (sa ekranom, posljednjim radnjama i verzijom programa).",\r
"Greška koju program nije zabilježio prijavljuje se na ekranu Podrška i zahtjevi.",\r
"Greška pri čitanju elektronskog potpisa.",\r
"Greška pri čitanju elementa potpisa.",\r
"Greška pri izvozu: {0}",\r
"greška pri pokretanju: {0}",\r
"Greška servera.",\r
"Greška u prikazu: {0}",\r
"Greška u prikazu. Uneseni podaci su snimljeni.",\r
"Greška veze sa SMTP serverom (zaštita veze ili port).",\r
"greška: {0}",\r
"Greška: {0}",\r
"Greške",\r
"Greške (redovi koji se ne uvoze)",\r
"grupa",\r
"Grupa",\r
"GRUPA",\r
"grupa {0}",\r
"GRUPA {0} — degresivno {1} %",\r
"GRUPA I — ukupno (proporcionalno, 2,5 %)",\r
"Grupa I proporcionalno po sredstvu; grupe II–V degresivno na nivou grupe (kumulativno kroz godine).",\r
"Grupa je prazna. „Prepoznaj cigare u šifarniku\\" predlaže artikle po robnim markama; predlog se potvrđuje ručno.",\r
"Grupa može imati najviše jednu nadgrupu.",\r
"Grupa nije nađena u šifarniku grupa.",\r
"Grupa računa, račun",\r
"Grupa se koristi.",\r
"Grupa za označene",\r
"Grupe (kategorije)",\r
"Grupe kase",\r
"Grupe koje kasa ne vodi ne idu u paket: {0}{1}. Za takvu robu birati artikle.",\r
"grupni unos",\r
"grupnu promjenu marže na kalkulacijama",\r
"grupu",\r
"Gubici od prodaje materijala",\r
"Gubici po osnovu prodaje učešća u kapitalu i hartija od vrijednosti",\r
"Gubici po osnovu rashodovanja i prodaje bioloških sredstava",\r
"Gubici po osnovu rashodovanja i prodaje nematerijalnih ulaganja, nekretnina, postrojenja i opreme",\r
"Gubitak",\r
"GUBITAK",\r
"Gubitak i dobitak po osnovu prodaje materijala",\r
"Gubitak iz prethodnih godina (do visine oporezive dobiti, PG 1)",\r
"Gubitak iz prethodnih godina ulazi u r.br. 40 do visine oporezive dobiti. Program ga uzima iz snimljenih prijava (r.br. 39); za godine prije programa iznos se upisuje ručno.",\r
"Gubitak od prodaje OS",\r
"Gubitak poslovanja koje je obustavljeno",\r
"GUBITAK POSLOVANJA KOJE JE OBUSTAVLJENO, RASHODI IZ PRETHODNIH IZVJEŠTAJNIH PERIODA I PRENOS RASHODA",\r
"Gubitak poslovne godine",\r
"Gubitak ranijih godina",\r
"Gubitak tekuće godine",\r
"Gusinje",\r
"h",\r
"h · nedjelja odrađeno",\r
"h · praznik",\r
"h ulazi u obračun plata po smjenama.",\r
"H:TAKSA",\r
"h) · noćni",\r
"h), jednom, samo za kasu",\r
"h), za",\r
"happy hour = akcija sa satima",\r
"Hartije od vrijednosti - gotovinski ekvivalenti",\r
"Hartije od vrijednosti koje se drže do dospijeća",\r
"Hartije od vrijednosti koje se drže do dospijeća - dio koji dospijeva do jedne godine",\r
"Hartije od vrijednosti kojima se trguje",\r
"HEETS",\r
"hemija",\r
"Hemijski",\r
"HERCEG",\r
"Herceg Novi",\r
"higijena",\r
"Higijeničar",\r
"Hipotekarna banka",\r
"hitno ·",\r
"Hitnost",\r
"Hljeb",\r
"Hljeb, pekarski proizvodi i kolači",\r
"hljeb,mlijek,štamp,stamp,novin",\r
"hljeb; hleb; kruh; vekna; baget; somun; lepinja",\r
"Hostel",\r
"Hotel",\r
"Hotelijerstvo (hoteli, apartmani, sobe)",\r
"Hrana uz smještaj",\r
"Hrana za odojčad",\r
"hrana za pse; hrana za macke; hrana za ptice; hrana za ribice; granule za pse; djubrivo; sjeme",\r
"Hrana za životinje, sjeme, đubrivo",\r
"hsl({0}, {1}%, {2}%)",\r
"http",\r
"HTTP {0}",\r
"HTTP {0} - {1}",\r
"https",\r
"https://… ili http://…:8080",\r
"Humanitarna pomoć",\r
"i",\r
"I",\r
"I — osnovno obrazovanje",\r
"I (2,5%) — objekti",\r
"i {0} plaćanja proknjiženih sa njih ({1} EUR)",\r
"i ažuriranje aplikacije",\r
"i čeka instalaciju.",\r
"i još {0}",\r
"I KRATKOROČNA REZERVISANJA",\r
"i minus kalkulacije",\r
"i mjesec",\r
"i ne idu u bazu, pa se fakture fiskalizuju samo ovdje. Sertifikat sa lične karte (MUP) služi za prijavu na portal, ne za ovu namjenu.",\r
"I NEMATERIJALNA ULAGANJA (004 do 007)",\r
"i novija). Samo pregled: kasi se ništa ne šalje i rad kase se ne prekida.",\r
"i objekat{0}",\r
"i obračuna upisani popust (%). Kupci su isti šifarnik kao za izlazne fakture (Kupci). ·",\r
"i pravilniku: do",\r
"i primjenjuje se pri sljedećem pokretanju.",\r
"i računi drugih firmi",\r
"i raspored je zaključan. Izmjena je moguća poslije poništavanja potvrde (kartica „Mjesec po objektu\\").",\r
"i riješene",\r
"i skeniraj sljedeći",\r
"I smjena",\r
"i u ovoj prijavi",\r
"i upisati njegov broj (ID) ispod. Bez odgovora za",\r
"I-RAČ",\r
"I. DUGOROČNA REZERVISANJA (119 do 121)",\r
"I. OSNOVNI KAPITAL",\r
"I. POSLOVNI REZULTAT (201+202+203+204-208-211-217-220)",\r
"I. ZALIHE (027 do 030)",\r
"ID",\r
"ID radnika za pisano upozorenje (Plate → Radnici, kolona ID):",\r
"ID uređaja:",\r
"idu kopija baze (samo za čitanje), iskazi, bruto bilans i dnevnik, I-RAČ / U-RAČ po mjesecima, trgovačke knjige svih objekata i obračuni zarada, uz SADRZAJ.txt sa SHA-256 otiscima. Rotacija backupa ne briše arhivu.",\r
"iframe",\r
"ih nema",\r
"IHDR",\r
"II",\r
"II — osnovno stručno obrazovanje",\r
"II KRATKOROČNE OBAVEZE (130 do 137)",\r
"II NEKRETNINE, POSTROJENJA, OPREMA I BIOLOŠKA SREDSTVA (009+010+011+015)",\r
"II smjena",\r
"II. DUGOROČNE OBAVEZE (123+124)",\r
"II. FINANSIJSKI REZULTAT (222+226+230+234-237)",\r
"II. Kapitalni dobici i gubici",\r
"II. KRATKOROČNA POTRAŽIVANJA (032 do 035)",\r
"II. NEUPLAĆENI UPISANI KAPITAL",\r
"IIC",\r
"IIC {0}… — {1}",\r
"IICPotpis",\r
"IICRefOriginala",\r
"III",\r
"III — srednje stručno obrazovanje (KV)",\r
"III DUGOROČNI FINANSIJSKI PLASMANI I DUGOROČNA POTRAŽIVANJA (017 do 023)",\r
"III smjena",\r
"III. EMISIONA PREMIJA",\r
"III. KRATKOROČNI FINANSIJSKI PLASMANI (040 do 042)",\r
"III. REZULTAT IZ REDOVNOG POSLOVANJA PRIJE OPOREZIVANJA (221+241)",\r
"III. Usklađivanje rashoda",\r
"IKOF",\r
"IKOF {0}",\r
"IKOF {0}{1}",\r
"ili",\r
"ili MARŽA %",\r
"ili veza sa artiklom…",\r
"ima",\r
"IMAGENAME eq OUTLOOK.EXE",\r
"ime",\r
"Ime",\r
"Ime / naziv",\r
"Ime foldera je obavezno (npr. KnjigSync).",\r
"ime i prezime",\r
"Ime i prezime",\r
"Ime i prezime\\nNaziv firme\\nTelefon",\r
"Ime i prezime / naziv primaoca",\r
"ime i prezime direktora",\r
"Ime korisnika (ko skenira)",\r
"Ime pošiljaoca",\r
"ime radnika",\r
"Ime, JMBG, adresa, radno mjesto, zarada i staž se mijenjaju u Plate → Radnici.",\r
"img",\r
"info",\r
"Informativni prikaz: troškovi označeni „u nabavnu\\" (",\r
"informativno: pazari uneseni OCR-om često nemaju „ukupno bez PDV\\"; nalog uzima sa PDV − PDV",\r
"INN",\r
"INN (generički naziv)",\r
"ino €/dan",\r
"Inostranstvo: propisana dnevnica te države (EUR po danu); prazno = Crna Gora",\r
"input",\r
"INPUT",\r
"Instalacija iz programa nije dostupna na ovom uređaju.",\r
"Instalira se preko postojeće verzije; podaci ostaju sačuvani.",\r
"Instaliraj",\r
"Instaliraj sada",\r
"Instalirana (Setup)",\r
"Instalirana je najnovija verzija ({0}).",\r
"instrukcije za plaćanje, ugovori, IOPPD, rješenja",\r
"INTEGER",\r
"Integrisani računovodstveni informacioni sistem",\r
"Interna napomena",\r
"Interna napomena je snimljena.",\r
"Interna otpremnica / kalkulacija (Excel)",\r
"Interna otpremnica / kalkulacija (PDF)",\r
"Interna otpremnica i interna kalkulacija · trgovačke knjige oba objekta · nije promet za PDV",\r
"interna otpremnica i interna kalkulacija, trgovačke knjige oba objekta",\r
"Interna oznaka ENU",\r
"Interni (redni) broj radnika u evidenciji — koristi se na listićima i u rekapitulaciji. NIJE organizaciona jedinica.",\r
"Interni dokument između objekata iste firme. Nije promet za PDV (PPZPDV čl. 80).",\r
"Interni dokument između objekata iste firme. Nije promet za PDV (PPZPDV čl. 80). Trgovačka knjiga: pošiljalac — kol. 4 crveni storno po vrijednosti pošiljaoca; primalac — kol. 4 zaduženje po vrijednosti primaoca.",\r
"Interni kod. Ako proizvod ima barkod, dodati ga.",\r
"Interni prenos {0}: {1} → {2} (nabavna {3}){4}",\r
"Interni prenos br. {0} od {1} iz {2} (interna kalkulacija){3}",\r
"Interni prenos br. {0} od {1} u {2} (crveni storno){3}",\r
"Interni prenos robe između objekata",\r
"Inv. broj",\r
"Invaliditet",\r
"Investicione nekretnine",\r
"Investicione nekretnine namijenjene prodaji",\r
"INVOICE",\r
"IOPPD",\r
"IOPPD i plaćanje poreza i doprinosa za {0}/{1}",\r
"IOPPD osnov",\r
"IOPPD šifra osnova iz Šifrarnika osnova za obračun (1 = zarada, 6 = bolovanje do 60 dana, 7 = bolovanje preko 60 dana). Stavke sa posebnom osnovom idu u prijavi u zaseban red, sa periodom od–do iz evidencije odsustava.",\r
"IOPPD XML",\r
"IOPPD zahtijeva JMBG od 13 cifara za svako lice. Neispravan JMBG kod izvršioca ugovora o djelu: {0} (kartica „Ugovor o djelu\\").",\r
"IOPPD zahtijeva JMBG za svako lice. JMBG nedostaje kod zakupodavca: {0} (kartica „Zakup\\").",\r
"IOPPD zahtijeva JMBG za svako lice. JMBG nedostaje kod: {0} (kartica „Radnici\\").",\r
"IOS dobavljaču: {0}",\r
"ipak naš",\r
"IPv4",\r
"IQOS",\r
"IQOS — naknada za prodaju (oporezivo)",\r
"IQOS — poseban obračun naknada",\r
"IQOS iznosi — {0} {1}",\r
"IQOS iznosi se unose u poseban obračun vrste „IQOS\\".",\r
"IQOS: obračunato {0} radnika za {1} {2}{3}.",\r
"IRIS CORVINA",\r
"IRIS CORVINA Knjigovodstvo",\r
"IRIS Knjigovodstvo",\r
"IRIS Server",\r
"iriscorvina.me",\r
"Ishod",\r
"Isječak za potpis gosta",\r
"iskaz FI BU-47507/2026 ima iste iznose kao 2024; potrebna je provjera sa knjigovođom",\r
"ISKAZ O FINANSIJSKOJ POZICIJI / BILANS STANJA",\r
"Iskaz o novčanim tokovima",\r
"Iskaz o promjenama na kapitalu",\r
"ISKAZ O UKUPNOM REZULTATU / BILANS USPJEHA",\r
"iskazi nisu snimljeni",\r
"Iskazi se sastavljaju na računaru.",\r
"iskazi snimljeni",\r
"isključen",\r
"isključen na serveru",\r
"isključena",\r
"Isključena stopa se više ne nudi pri unosu; artikli je zadržavaju.",\r
"Isključeni objekti sa prometom u",\r
"isključeno",\r
"Isključeno = ne nudi se pri unosu (radnici koji ga već imaju ostaju netaknuti)",\r
"Isključeno: računi se izdaju bez PDV-a.",\r
"Isključi",\r
"Isključi na serveru",\r
"Isključi sve",\r
"Isključi vezu",\r
"Isključiti vezu sa serverom na ovom uređaju?\\n\\n{0}Razmjena se vraća na stari put (Google Drive folder, ako je izabran), a fajlovi primljeni sa servera se brišu iz prijemnog foldera.{1}\\nZa ponovno uparivanje potreban je nov kod od administratora.",\r
"Isknjiženje OS (nabavna vrijednost) — {0}",\r
"Iskorišćeno",\r
"Iskustvo",\r
"Isplaceno",\r
"Isplaćeno",\r
"isplaćeno više nego po šemi; razlika se ne dodaje",\r
"isplata",\r
"Isplata",\r
"Isplata izvršiocu",\r
"isplata je bila uklopljena na dogovoreni neto (stimulacija)",\r
"Isplata je obrisana.",\r
"Isplata ulazi u IOPPD prijavu ovog mjeseca",\r
"Isplata zakupodavcima:",\r
"Isplata zakupodavcu",\r
"Isplata zarada",\r
"Isplate",\r
"Isplate iz fioke",\r
"Isplate mjeseca se preračunaju po važećim stopama (kartica „Stope\\")",\r
"Isplate za",\r
"ispod nabavne cijene ({0})",\r
"ispomoć",\r
"Ispomoć iz drugih objekata",\r
"Isporuka",\r
"Isporuka robe prije računa · razduženje lagera i trgovačke knjige na dan isporuke · faktura iz otpremnica",\r
"Isporuka robe prije računa · razduženje lagera i trgovačke knjige na dan isporuke · faktura iz otpremnica · PDV osmog dana od isporuke",\r
"Isporuke po 0% stopi",\r
"Isporuke po 15% stopi",\r
"Isporuke po nižoj stopi",\r
"Isporuke0",\r
"Isporuke15",\r
"Isprava",\r
"Isprava važi do",\r
"Isprave i pomoćne knjige — 5 godina (Zakon o računovodstvu 84/25, čl. 14)",\r
"Ispravi",\r
"Ispravka pazara {0} od {1} Izmjene se snimaju dugmetom „SNIMI ISPRAVKU\\".",\r
"Ispravka podataka",\r
"Ispravka vrijednosti — {0}",\r
"Ispravka vrijednosti datih avansa za zalihe i usluge",\r
"Ispravka vrijednosti drugih potraživanja",\r
"Ispravka vrijednosti dugoročnih finansijskih plasmana",\r
"Ispravka vrijednosti građevinskih objekata",\r
"Ispravka vrijednosti kratkoročnih finansijskih plasmana",\r
"Ispravka vrijednosti pojedinačnih potraživanja od lica kojima se istovremeno duguje",\r
"Ispravka vrijednosti postrojenja i opreme",\r
"Ispravka vrijednosti potraživanja iz specifičnih poslova",\r
"Ispravka vrijednosti potraživanja od kupaca",\r
"Ispravka vrijednosti robe",\r
"Ispravka vrijednosti softvera i licenci",\r
"Ispravka vrijednosti ulaganja na tuđim objektima",\r
"Ispravka vrijednosti zaliha materijala",\r
"Ispravke i poboljšanja.",\r
"Ispravu izdao",\r
"Ista greška je već prijavljena u posljednjih 10 minuta.",\r
"Ista marža za sve stavke (%)",\r
"istaknuta",\r
"istekao",\r
"Istekao rok trajanja",\r
"istekla",\r
"isteklo",\r
"Isteklo je vrijeme čekanja odgovora lokalnog servera.",\r
"Isteklo je vrijeme čekanja odgovora Poreske uprave (MAPR). Veza je prekinuta ili server ne odgovara.",\r
"Isteklo vrijeme (timeout) za MAPR poziv.",\r
"Isteklo vrijeme preuzimanja.",\r
"Isteklo vrijeme.",\r
"Isti artikal je zaveden više puta (razlika u razmaku ili velikim slovima), pa se količine dijele na dva zapisa. Spajanjem sve stavke prelaze na najstariji artikal;",\r
"isti artikal kao u redu {0}; količina se sabira, cijena iz reda {1}",\r
"isti dokument: interna otpremnica pošiljaoca i interna kalkulacija primaoca",\r
"isti fajl je već uvezen",\r
"isti iznosi ({0}) već upisani: {1} {2}",\r
"isti izvještaj je već u redu {0} ovog fajla",\r
"isti izvještaj je već upisan ({0}{1} EUR)",\r
"Isti objekat i dan upisan više puta (smjene iste kase se ne računaju), ili pazar od 0,00 EUR",\r
"Isti objekat i dan upisan više puta znači dupli promet i PDV, osim kad objekat ima više kasa. Smjene iste kase istog dana (različit Z broj) nisu duplikat; pazar iz kase je duplikat samo uz istu kasu, isti Z broj i isti dan. Prikazani su i pazari od 0,00 EUR. Pogrešan red se, nakon poređenja sa Z-izvještajem, briše ili ispravlja; brisanje i ispravka važe i na ostalim računarima.",\r
"isti naziv",\r
"Isti račun već postoji",\r
"Isti redni broj na više kalkulacija: firma {0}, objekti {1}; brojeva sa „~\\": {2}. Nastaju kad dva računara istovremeno daju brojeve — renumeracija ih ispravlja.",\r
"Isti telefon već ima kupac „{0}\\", koji se može označiti u spisku.",\r
"isti Z br. {0} je već upisan za {1}",\r
"Isti zavisni trošak je već upisan za ovu kalkulaciju (isti dobavljač, račun, datum i iznos).",\r
"Ističe",\r
"isto kao transakcija #{0}",\r
"Isto odsustvo (radnik, vrsta i period) je već upisano.",\r
"isto plaćanje je upisano ručno i proknjiženo iz izvoda banke, pa kartica prikazuje preplatu",\r
"istoj grupi firmi",\r
"Istom {0} je već proknjižena uplata istog iznosa ({1} EUR) i datuma sa drugog izvoda: {2}.\\n\\nProknjižiti kao novu uplatu?\\n\\nU redu: knjiženje nove uplate.\\nOdustani: bez knjiženja (ista uplata se označava dugmetom „duplikat\\").",\r
"Istorija — {0}",\r
"istorija izmjena",\r
"Istu vezu koriste i:",\r
"ITF",\r
"IV",\r
"IV — srednje opšte/stručno obrazovanje (SSS)",\r
"IV. GOTOVINA NA RAČUNIMA I U BLAGAJNI",\r
"IV. Korekcija rashoda po osnovu transfernih cijena između povezanih lica",\r
"IV. NETO REZULTAT POSLOVANJA KOJE JE OBUSTAVLJENO",\r
"IV. REZERVE (106+107+108+109-110)",\r
"IX. NETO SVEOBUHVATNI REZULTAT (248-259)",\r
"iz",\r
"Iz",\r
"Iz {0} fajla: novih zapisa {1}, već postojećih {2}.{3}",\r
"iz Drive foldera se zatim dijeli telefonu i učitava gornjim dugmetom.",\r
"Iz evidencije odsustava prepisano {0} h (odmor, plaćeno odsustvo, bolovanje).",\r
"iz fajla",\r
"Iz fajla",\r
"iz foldera za razmjenu (Google Drive)",\r
"Iz foldera za razmjenu se brišu samo dnevne kopije baze.",\r
"Iz isprave se čitaju samo podaci; slika se ne snima.",\r
"Iz izvoda banke",\r
"iz kartice radnika (period)",\r
"iz kase",\r
"Iz kase {0} (smjena {1})",\r
"iz linka",\r
"Iz magacina",\r
"Iz Menadžera: novih skenova {0}, otkazanih {1}, popisa {2} novih / {3} dopunjenih.",\r
"Iz ove ponude je napravljena faktura {0}.",\r
"Iz ove ponude je već napravljena faktura {0}.",\r
"iz PD obračuna (isti kao kartica PD; prijava nije snimljena)",\r
"Iz podataka sa štampanog računa računa se IKOF ovim sertifikatom. Ako se poklapa sa IKOF-om na računu, dokazano je da je račun izdala ova firma. Ovaj ekran je propisan zahtjev za svaki fiskalni softver.",\r
"Iz pošte: {0}. Poslije unosa plaćanja prilog se u Pošti označava kao uvezen.",\r
"Iz prometa 0 % odvojeno je {0} EUR boravišne takse — ne ulazi u prihod ni u oslobođeni promet{1}.",\r
"Iz rasporeda smjena ovog mjeseca:",\r
"iz sertifikata servera",\r
"Iz smjena je preuzeto {0} h.",\r
"iz snimljene PD prijave",\r
"iz zadnje kalkulacije",\r
"Iz zaključaka nove kase: ko je koliko računa obrisao (i za koliko), koliko stavki uklonio sa računa i koliko ih je vraćeno. Veliki brojevi kod jednog kasira su razlog za provjeru, a ne dokaz.",\r
"Izaberi .pfx / .p12",\r
"Izaberi fajl…",\r
"Izaberi folder za sinhronizaciju (npr. u Google Drive-u)",\r
"Izaberi folder…",\r
"Izaberi sertifikat za fiskalizaciju (.pfx / .p12)",\r
"Izaberi sliku…",\r
"Izaberi sve",\r
"Izaberite avansni račun.",\r
"Izaberite bar jedan dan praznika.",\r
"Izaberite datum.",\r
"Izaberite ispravan period.",\r
"Izaberite izvještaj i period, pa „Prikaži\\".",\r
"Izaberite objekat.",\r
"Izaberite posljednju noć u istom redu.",\r
"izaberite praznik gore",\r
"Izaberite praznik ili upišite naziv.",\r
"Izaberite vrstu sobe.",\r
"izabran",\r
"izabrana",\r
"Izabrana roba pripada različitim grupama ({0}). Specijalizovan kiosk prodaje pretežno jednu vrstu robe (čl. 35b st. 4).",\r
"Izabrane otpremnice su fakturisane.",\r
"Izabrani fajl nije baza (.knj.db). Potrebno je izabrati fajl „baza_obradjena.knj.db\\" koji je objavio računar.",\r
"Izabrani fajl nije snimak baze.",\r
"Izabrani objekat nije aktivan u ovoj firmi. Potrebno je izabrati objekat iz liste.",\r
"Izabrani pazar više ne postoji.",\r
"Izabrani snimak pripada firmi „{0}\\", a otvorena je „{1}\\". Snimak se učitava u firmi „{2}\\".",\r
"izabrano",\r
"Izabrano",\r
"izabrano hotelijerstvo (način poslovanja)",\r
"Izabrano je {0} kalkulacija. Priprema može trajati nekoliko minuta. Nastaviti?",\r
"Izabrano: {0}, {1}. Sljedeći korak: smjena drugog radnika (može i drugi dan).",\r
"Izabrati objekat.",\r
"izbačen iz grupe",\r
"Izbaci iz grupe",\r
"Izbaciti {0} artikala iz grupe „Cigare\\"? Njihova pravila se brišu.",\r
"Izbor artikla",\r
"Izbor artikla sa liste otvara naziv i opis na jezicima, alergene, oznake i sliku.",\r
"Izbor firme za rad",\r
"Izbor grupe sa liste otvara naziv na jezicima, redoslijed na meniju i sliku pločice.",\r
"Izbor je sačuvan na ovom računaru; server ga nije primio ({0}).",\r
"Izbor objekata koji su",\r
"Izbor objekata",\r
"Izbor radnog marketa",\r
"Izbor sa spiska otvara izmjenu; „Novi unos\\" dodaje novi.",\r
"Izbor sa spiska prikazuje podatke.",\r
"Izbor smjene u koju radnik ulazi tog dana.",\r
"Izbor strelicama i tasterom Enter ili klikom na red.",\r
"Izbor za fakturu iz otpremnica",\r
"Izdaj",\r
"Izdaj avansni račun",\r
"Izdaj fakturu / ponudu",\r
"Izdao",\r
"Izdao (organ)",\r
"Izdao: {0}.",\r
"Izdat",\r
"Izdat dokument ostaje u {0}. godini i datum mora ostati u toj godini. Za drugu godinu potreban je novi dokument.",\r
"Izdata faktura",\r
"Izdata faktura se ne mijenja.",\r
"izdate fakture",\r
"izdate fakture (bez PDV, bez nacrta i storna)",\r
"Izdati dokumenti",\r
"Izdato",\r
"Izdato: {0}.",\r
"Izdavač",\r
"Izdavač je odgovorio na poruku podršci.",\r
"Izdavalac:",\r
"Izdvojena novčana sredstva i akreditivi",\r
"IZF",\r
"Izjasnjenje",\r
"Izjašnjenje",\r
"izjašnjenje primljeno {0}",\r
"Izjavljujem pod punom materijalnom i krivicnom odgovornoscu da su navedeni podaci tacni.",\r
"Izlagač robe (trgovac)",\r
"Izlaz",\r
"izlazi {0}",\r
"Izlazna faktura",\r
"Izlazne fakture i ponude kupcima",\r
"Izlazne fakture: prihod od prodaje robe",\r
"Izlazne fakture: prihod od usluga (stavke bez artikla)",\r
"Izlazni",\r
"Izlazni dokument",\r
"Izlazni PDV",\r
"IZLAZNI PDV",\r
"Izlazni PDV {0} %",\r
"Izlazni PDV po fakturama 15 %",\r
"Izlazni PDV po fakturama 21 %",\r
"Izlazni PDV po fakturama 7 %",\r
"Izlazni PDV se umanjuje kada kupac pismeno obavijesti da je umanjio odbitak ulaznog PDV (ZPDV čl. 20 st. 9). Kupac dostavlja pisano obavještenje o ispravci odbitka.{0}",\r
"između Z {0} ({1}) i Z {2} ({3}) {4}: nije upisan ili je upisan sa pogrešnim datumom ili Z brojem",\r
"Izmijeni",\r
"Izmijenjeno artikala: {0}.{1}",\r
"Izmjena",\r
"Izmjena akcije",\r
"izmjena cijena čeka objekat",\r
"Izmjena cijene {0} sa {1} nema oznaku kase ni prodajnog mjesta i odbijena je (kasa ne mijenja opštu cijenu).",\r
"Izmjena cijene artikla {0} sa {1} je odbijena. {2}",\r
"izmjena cijene čeka objekat",\r
"Izmjena cijene nije nađena.",\r
"Izmjena isplate po ugovoru o djelu",\r
"Izmjena je moguća na glavnom računaru firme.",\r
"Izmjena je odbačena.",\r
"Izmjena je poništena. Cijena je vraćena na {stara}.",\r
"Izmjena je upisana.",\r
"Izmjena kupca",\r
"Izmjena ovog računara (poslije preuzimanja baze glavnog)",\r
"Izmjena podataka artikla",\r
"Izmjena radnika",\r
"Izmjena ručnog naloga",\r
"izmjena sa drugih računara čeka",\r
"izmjena sa prelaza na novu verziju; ovdje taj podatak već postoji sa drugačijim sadržajem",\r
"Izmjena smjene",\r
"Izmjena zakupodavca",\r
"Izmjene",\r
"Izmjene cijena",\r
"izmjene cijena čekaju objekat",\r
"Izmjene cijena po prodajnim mjestima",\r
"Izmjene i dopune pravilnika donose se po postupku za njegovo donošenje: nacrt se dostavlja sindikatu odnosno predstavniku zaposlenih najmanje {0} dana prije donošenja radi informisanja i savjetovanja ({1}). Evidenciju radnih mjesta i izvršilaca Poslodavac vodi u knjigovodstvenom programu, iz koga se izrađuju ovaj pravilnik i pojedinačni akti (ugovori, aneksi, rješenja).",\r
"Izmjene koje čekaju",\r
"Izmjene nisu sačuvane. Napustiti ih?",\r
"Izmjene podataka",\r
"Izmjene podataka artikala",\r
"izmjene sa drugih računara čekaju",\r
"Izmjene su stigle sa kase koja nije upisana u „Kase i objekti\\". Kada se kasa (kod ENU) upiše uz svoj objekat, izmjene se primjenjuju automatski.",\r
"Izmjene su vidljive nakon osvježavanja prikaza. Započeti unos se prethodno snima.",\r
"Izmjene u verziji",\r
"izmjenu cijena za kase",\r
"iznad normativa za",\r
"Iznos",\r
"IZNOS",\r
"Iznos „od toga usluge\\" ne može biti negativan.",\r
"iznos (bruto)",\r
"Iznos (EUR)",\r
"Iznos (sa PDV)",\r
"iznos / duguje−potražuje",\r
"iznos / duguje−potražuje (PS iz podnožja preskočen)",\r
"Iznos 0 = radnik nema IQOS obračun ovog mjeseca.",\r
"Iznos avansa (najviše {0})",\r
"Iznos avansa mora biti veći od nule.",\r
"Iznos bez PDV",\r
"Iznos fakture",\r
"Iznos fakture bez PDV nije upisan.",\r
"iznos je negativan",\r
"Iznos je obavezan.",\r
"Iznos je veći od slobodnog dijela avansa.",\r
"Iznos mora biti veći od nule.",\r
"Iznos naknade je obavezan.",\r
"iznos nije u fajlu",\r
"iznos nije u fajlu, a MPC artikla u objektu nije poznata",\r
"Iznos odobrenja mora biti veći od nule.",\r
"Iznos pazara je obavezan.",\r
"Iznos PDV",\r
"Iznos PDV (sa računa)",\r
"Iznos plaćanja je obavezan.",\r
"Iznos plaćanja nije ispravan.",\r
"Iznos po stopi mora biti veći od nule.",\r
"Iznos početnog stanja je obavezan. Upisano stanje se briše dugmetom za brisanje.",\r
"Iznos poreza plaćenog u drugoj državi",\r
"Iznos povrata (EUR)",\r
"Iznos procijenjen po MPC",\r
"Iznos računa",\r
"Iznos računa (EUR)",\r
"Iznos sa PDV",\r
"Iznos sa PDV po stopi. Bez podjele cio iznos ide po 21 % (roba nije poznata u trenutku uplate).",\r
"Iznos se nudi po opštini; za ostale opštine upisati iznos iz odluke opštine.",\r
"Iznos takse",\r
"Iznos takse (EUR po osobi i noćenju)",\r
"Iznos takse (EUR)",\r
"Iznos takse je sačuvan.",\r
"Iznos takse je veći od 10 EUR",\r
"Iznos takse nije ispravan.",\r
"Iznos troška (bez PDV) je obavezan.",\r
"Iznos u eurima",\r
"Iznos u eurima bez PDV-a. Isti PDV ulazi i u izlazni (24) i u ulazni PDV (25), pa ne mijenja obavezu; U-RAČ kolone 14–16.",\r
"iznos u lokalnoj valuti",\r
"Iznos uplate",\r
"Iznos uplate mora biti veći od nule.",\r
"Iznos veze",\r
"Iznos veze mora biti veći od nule.",\r
"Iznos za FZO",\r
"Iznosi se ne slažu:\\n\\n{0}\\n\\nSnimiti pazar uprkos razlikama?",\r
"Iznosi se popunjavaju automatski i provjeravaju prije snimanja, isto kao na Androidu.",\r
"Izračunaj IKOF",\r
"Izračunaj po težini",\r
"izračunat iz stope",\r
"Izrada izvoza…",\r
"Izrada rezervne kopije i promjena marže…",\r
"izravnaj razliku na konto šeme „ps.razlika\\"",\r
"Izravnanje početnog stanja (provjeriti sa knjigovođom)",\r
"Izravnanje računa stanja",\r
"Izrečena mjera nije novčana kazna.",\r
"Izuzeci",\r
"Izuzeci (izraz bilo gdje u nazivu isključuje pravilo)",\r
"Izuzimanje drugog artikla (pretraga po nazivu)",\r
"IZV",\r
"izveden iz stopa",\r
"izveden iz UKUPNO",\r
"izveden porez",\r
"izveden promet",\r
"izvedena osnovica",\r
"izvedeno iz cijene i zadnje nabavne",\r
"izvezeno",\r
"Izvezeno (XML; prvo učitavanje na IRMS provjeriti kao nacrt): {0}",\r
"Izvezeno: {0}",\r
"Izvezeno: {0}{1}",\r
"Izvezi šifarnik u Excel",\r
"Izvještaj",\r
"Izvještaj je napravljen iz knjigovodstvenog programa na osnovu kartice koju ste dostavili ({0} stavki upoređeno: {1} se slaže, {2} razlika u iznosu, {3} samo kod Vas, {4} samo kod nas).",\r
"Izvještaj je snimljen: {0}",\r
"Izvještaj još nije uvezen.",\r
"Izvještaj menadžmenta",\r
"Izvještaj o boravišnoj taksi — {0}",\r
"Izvještaj o izvršenom popisu pri promjeni cijena robe — Pravilnik o obliku i načinu vođenja evidencije nabavke i prodaje robe („Sl. list CG\\" 34/12, 18/13), čl. 11. Iznos promjene = popisana (zatečena) količina × (nova − stara prodajna cijena sa PDV). Razlika popisane i knjigovodstvene količine je popisna razlika i ne ulazi u nivelaciju.",\r
"Izvještaj o popisu (Excel)",\r
"Izvještaj o popisu (PDF)",\r
"Izvještaj o taksi za prethodni mjesec.",\r
"Izvještaj o utvrđenim maksimalnim cijenama (CInMED)",\r
"Izvještaj prodaje po artiklu iz kase drugog proizvođača. Obavezne kolone su",\r
"Izvještaji",\r
"Izvještaji na telefonu se prave iz",\r
"izvod",\r
"Izvod",\r
"Izvod ({0}) je već uvezen.",\r
"izvod (nije cijela knjiga firme)",\r
"Izvod {0} je upisan u registar banke.",\r
"izvod {0}{1} od {2}, {3}",\r
"Izvod {0}/{1}: {2} {3} ({4})…",\r
"Izvod banke",\r
"izvod br. {0}",\r
"Izvod druge firme",\r
"Izvod glasi na firmu {0} (PIB {1}), a otvorena je firma „{2}\\". Izvod nije uvezen. Uvoz je moguć u firmi na koju izvod glasi.",\r
"izvod ima {0} naloga, pročitano {1}",\r
"izvod ima više odliva od zaglavlja, a ista uplata čeka pod drugim primaocem (moguće ranije pogrešno čitanje)",\r
"Izvod nije u PDF obliku. Tekst izvoda se unosi kopiranjem u „Uvoz izvoda\\".",\r
"Izvod nije uklonjen. Za uplatu sa izvoda je izdat avansni račun.",\r
"Izvod nije uvezen: račun {0} nije potvrđen kao račun firme „{1}\\".",\r
"IZVOD OTVORENIH STAVKI (IOS)",\r
"Izvod računa {0} koji je označen kao račun druge firme. Izvod nije uvezen u firmu „{1}\\". (Za račun ove firme: Obaveze → Pošta → „i računi drugih firmi\\" → „ipak naš\\".)",\r
"Izvod sa plaćanjima nije uklonjen. {0}",\r
"Izvod se uvozi samo sa računa potvrđenog kao račun firme „",\r
"Izvod za izabrane objekte: računi knjiženi na te objekte (kalkulacije, njihovi zavisni troškovi i nabavke opreme upisane na objekat). Usluge stranih lica i nabavke bez objekta su samo u knjizi cijele firme (bez izbora objekta).",\r
"Izvod: administrativne takse i naknade za licence",\r
"Izvod: isplata zarada",\r
"Izvod: kamata uz uplatu poreza (poziv „kamata\\")",\r
"Izvod: naknade banke",\r
"Izvod: naplaćen zakup (prihod)",\r
"Izvod: naplata od kupca",\r
"Izvod: novčane kazne (račun javnih prihoda za kazne)",\r
"Izvod: plaćanje dobavljaču",\r
"Izvod: porezi i doprinosi (do podjele po vrsti)",\r
"Izvod: povrat od dobavljača",\r
"Izvod: pozajmica / zajam od vlasnika ili povezanog lica (priliv = obaveza, odliv = vraćanje)",\r
"Izvod: prenos između računa firme (obje strane preko prelaznog računa)",\r
"Izvod: priliv POS / kartice",\r
"Izvod: režije bez računa u programu",\r
"Izvod: uplata pazara (gotovina)",\r
"Izvod: uplata poreza na dobit",\r
"Izvod: zakup plaćen fizičkom licu",\r
"izvoda",\r
"Izvoda",\r
"izvoda · zadnji",\r
"izvoda nije uvezeno u Banku",\r
"izvodi banaka, kartice, računi",\r
"Izvodi banaka, prepoznavanje uplata i isplata (i refundacija naknada), novčani tok",\r
"Izvodi čija se kontrola ne slaže otvaraju se dugmadima ispod, radi označavanja tačnih stavki.",\r
"izvodi i novčani tok",\r
"Izvodi i pokrivenost",\r
"Izvodi iz pošte čekaju potvrdu računa.",\r
"Izvor",\r
"Izvor podataka",\r
"Izvor polazne stope",\r
"Izvor prodaje",\r
"Izvor stope PDV-a",\r
"Izvor stope PDV-a se upisuje za",\r
"Izvor: stanje koje kasa šalje (Kasa {0} i novija). {1}",\r
"Izvoz",\r
"Izvoz „{0}\\" nije dozvoljen (izvršni fajl).",\r
"Izvoz CSV",\r
"Izvoz daje cio šifarnik (artikli, barkodovi, cijene po prodajnim mjestima) u jednom Excel fajlu. Uvoz prvo prikazuje pregled razlika; upis slijedi poslije potvrde, uz rezervnu kopiju baze. Uvoz ne briše artikle, barkodove ni cijene kojih u fajlu nema.",\r
"Izvoz šifarnika u Excel",\r
"Izvoz svih stavki (artikala) izabranih kalkulacija",\r
"Izvrš.",\r
"izvršen",\r
"Izvršen je nalog {0}: {1}. {2}",\r
"IZVRSENA",\r
"Izvršena radnja, očekivani i dobijeni rezultat …",\r
"Izvršenje naloga je prekinuto (program je zatvoren dok je nalog bio u toku). Nalog se ne ponavlja; potrebno je provjeriti posljednji uvoz na glavnom računaru.",\r
"izvršilac",\r
"Izvršilac",\r
"Izvršilac iz ranijeg ugovora",\r
"Izvršilac je zaposleni raspoređen ugovorom o radu na radno mjesto; broj izvršilaca je najveći broj zaposlenih koji istovremeno mogu biti raspoređeni na to radno mjesto.",\r
"izvršilaca",\r
"Izvršilaca",\r
"Izvršni direktor",\r
"j4sVG68Z6QZGUfZ64qBQSMeUiLa8LQYOxzMKIXC-Pmg",\r
"Jabuke, kruške, šljive, dunje, lubenice",\r
"Jacina",\r
"Jačina",\r
"Jagodasto voće, svježe smokve",\r
"Jaja",\r
"Jaja svježa",\r
"jaja; jaje",\r
"januar",\r
"Januar",\r
"januara",\r
"javila se",\r
"Javila se",\r
"Javljanje kase",\r
"javni iskaz",\r
"javni iskaz (IRMS registar) za {0}",\r
"javni iskaz (IRMS registar) za {0}{1}",\r
"je dan kada su primljeni i roba i račun (kasniji od ta dva). Po njemu ulazni PDV ide u PR-PDV (ZPDV čl. 37 st. 7: PDV se odbija „u poreskom periodu u kojem je primio račun\\").",\r
"je potraživanje od kupca; naplata se prati ručno dok knjigovođa ne odluči kako se ovi računi knjiže (posebno u KIF-u kao obveznik).",\r
"je preuzeta",\r
"je uloga za vlasnika/administratora: ima ovlašćenja glavnog (izmjena knjiga, obrada skenova, podešavanja), promjene šalje glavnom kao pakete, ne objavljuje bazu i prati snimak glavnog, pa ne može postati drugi glavni računar.",\r
"je upisano i jednako stanju na 31.12.",\r
"je zaključan. Izmjena nije moguća.",\r
"Jed.",\r
"jedan",\r
"jedan dan",\r
"Jedan Excel sa svim iskazima + PD + napomene + JSON za prenos na portal",\r
"Jedan red je jedan artikal. „Opšta cijena\\" važi na svakom mjestu koje nema svoju cijenu; kolona sa nazivom mjesta je cijena samo za to mjesto (prazno polje = važi opšta cijena). Cijene su maloprodajne, sa PDV-om.",\r
"Jedan red je jedan barkod jednog artikla. Artikal može imati više barkodova. Barkod koji već ima drugi artikal se pri uvozu ne dodaje bez odluke: dijeli, premjesti ili preskoči.",\r
"jedan red po artiklu",\r
"jedan red po dnevnom izvještaju",\r
"jedan uređaj",\r
"jedinica · nabavna vrijednost",\r
"Jedinica mjere",\r
"Jedinica mjere „{0}\\" nije sa spiska.",\r
"Jedinica mjere je obavezna za nov artikal.",\r
"Jedinica mjere se bira sa spiska (list „Šifarnici\\").",\r
"Jedinica neto količine „{0}\\" nije sa spiska ({1}).",\r
"Jedinica neto količine: {0}.",\r
"jedinstveni račun — za {0}/{1}{2} nema obračuna plata, zakupa ni djela u glavnoj knjizi",\r
"Jedinstveni račun {0}/{1} — {2}",\r
"Jedinstveni račun poreza i doprinosa",\r
"Jednim kodom se uparuje od 1 do 5 uređaja.",\r
"Jedno početno stanje po dobavljaču, na 01.01. Novi unos zamjenjuje ranije upisano.",\r
"jednokratno",\r
"Jednokrevetna soba",\r
"jednom",\r
"Jela gotova i polugotova",\r
"Jezik",\r
"Jezik natpisa na ekranu ove kase; važi odmah. Fiskalni računi, štampa, etikete i izvozi ostaju na crnogorskom jeziku.",\r
"Jezik natpisa na ekranu ovog uređaja. Izvozi (Excel, PDF), štampa i etikete ostaju na crnogorskom jeziku.",\r
"Jezik natpisa na ekranu ovog uređaja. Izvozi (PDF, Excel, XML), štampa, fiskalni računi i obrasci za Poresku upravu ostaju na crnogorskom jeziku.",\r
"Jezik nije promijenjen: {0}",\r
"Jezik programa",\r
"JIKR",\r
"JM",\r
"JM izmijenjena.",\r
"JM neto",\r
"JMB",\r
"JMB {0}",\r
"JMBG",\r
"JMBG izvršioca (13 cifara) je obavezan za IOPPD prijavu.",\r
"JMBG mora imati tačno 13 cifara (upisano: „{0}\\").",\r
"JMBG mora imati tačno 13 cifara.",\r
"JMBG mora imati tačno 13 cifara. Neispravan JMBG kod: {0} (kartica „Radnici\\").",\r
"JMBG zakupodavca mora imati 13 cifara.",\r
"još {0}",\r
"još {0} {1} ▾",\r
"još {0} d",\r
"još jedna kasa,",\r
"još nije napravljena",\r
"još nije stiglo: {0}",\r
"još nije stiglo: {0}{1}",\r
"Još nijedan uređaj nije poslao redove.",\r
"još ništa",\r
"Još ništa.",\r
"još se nije javila",\r
"Jubilarna nagrada (10/20/30/40 god. staža: do 150/250/350/450 EUR)",\r
"Juče",\r
"juče ({0})",\r
"jul",\r
"Jul",\r
"jula",\r
"jun",\r
"Jun",\r
"juna",\r
"Južno voće (pomorandža, limun, banane, mandarine, ananas i sl.)",\r
"k.BrojDokumenta",\r
"k.BrojDokumentaStari",\r
"k.BrojFaktureDobavljaca",\r
"k.BrojKalkulacije",\r
"k.BrojRacunaDobavljaca",\r
"k.DatumFakture",\r
"k.DatumFakture DESC, k.KalkID DESC",\r
"k.DatumValute IS NOT NULL",\r
"k.DobavljacID",\r
"k.FIK",\r
"k.KalkID DESC",\r
"k.MarketID",\r
"k.MarketID=? AND",\r
"Kad",\r
"Kad drugi prozor nije otvoren (program je neočekivano prekinut), oznaka se poništava za oko minut.",\r
"Kad je štampač izabran, „Štampaj sve\\" iz pregleda kalkulacija šalje dokumente direktno na njega, bez dijaloga za svaku kalkulaciju. Ovdje se uključuje i",\r
"kad kupi N ili više komada, jedinična cijena je upisana vrijednost (€)",\r
"Kad program naiđe na tehničku grešku (pad prikaza, greška u krugu razmjene), šalje izdavaču",\r
"Kad se greška ponavlja poslije ažuriranja: povratak na prethodnu verziju (podaci ostaju nepromijenjeni).",\r
"Kad se nakupi najviše uzastopnih dana",\r
"Kadrovi",\r
"Kadrovi: ugovori, odmori, disciplina",\r
"Kafa svih vrsta — u pakovanju",\r
"kafa; espres; kapucin; cappuccin; macchiat; makijat; nes; latte",\r
"Kako",\r
"Kako je riješeno? (npr. faktura nađena i unesena / dobavljač ispravio karticu / greška dobavljača):",\r
"Kako radi",\r
"Kako se folder veže sa Google Drive-om (bez servera)?",\r
"Kako se izdaju računi kad gost odlazi.",\r
"Kako se upisuje u IOPPD prijavu",\r
"Kalendar",\r
"Kalk",\r
"KALK",\r
"Kalk. {0} · {1} · {2}{3}",\r
"kalkulacija",\r
"Kalkulacija",\r
"Kalkulacija — korektivni račun dobavljača",\r
"Kalkulacija — odobrenje dobavljača",\r
"Kalkulacija · faktura i račun dobavljača · izlazna faktura, ponuda, korektivni račun · otpremnica · revers · knjižno odobrenje · avansni račun · prenosnica · otpis · nivelacija. Dovoljan je dio broja.",\r
"kalkulacija {0}",\r
"Kalkulacija {0}",\r
"Kalkulacija {0} — {1}{2}{3}",\r
"Kalkulacija / izvod",\r
"kalkulacija bez računa u KPR-u (ručni ulaz bez računa)",\r
"Kalkulacija iz potvrde nije nađena u ovoj bazi (obrisana ili još nije stigla).",\r
"Kalkulacija iz računa koji glasi na drugog kupca, uz potvrdu",\r
"Kalkulacija je napravljena ({0}, {1} EUR). Greška poslije upisa: {2}",\r
"Kalkulacija je napravljena. {0} (Podešavanja → Štampač)",\r
"Kalkulacija je obrisana {0}. Sken se može vratiti u red ili obrisati (obrisan sken telefon može ponovo skenirati).",\r
"Kalkulacija je poslata razmjenom. Broj se ne mijenja.",\r
"Kalkulacija je u zaključanom mjesecu. Raspored zavisnih troškova se ne može mijenjati.",\r
"Kalkulacija je u zaključanom periodu.",\r
"Kalkulacija ne postoji.",\r
"Kalkulacija nema objekat: cijena koje nisu poslate na kasu: {0}. Opšta cijena se mijenja na pregledu „Opšte cijene\\" (Cjenovnik kasa).",\r
"Kalkulacija nema stavki sa količinom i vrijednošću na koje se trošak može rasporediti.",\r
"Kalkulacija nije napravljena. {0}",\r
"Kalkulacija nije pronađena.",\r
"Kalkulacija otpisa nema zavisne troškove nabavke.",\r
"kalkulacija ovog mjeseca upisano poslije roka (naredni dan od računa; za hljeb, mlijeko i štampu 7 dana — Pravilnik 34/12 čl. 5 i 6)",\r
"Kalkulacija poslata na štampač.",\r
"Kalkulacija se mijenja tek potvrdom rasporeda.",\r
"Kalkulacija se ne mijenja",\r
"Kalkulacija se ne mijenja sama. Ispravku (povrat, knjižno odobrenje, izmjena količine) radi knjigovođa.",\r
"kalkulacija se ne slaže sa računom (rabat, količina ili cijena); potrebna je provjera",\r
"Kalkulacija u",\r
"kalkulacija u izboru",\r
"kalkulacija van izabranog perioda/objekta",\r
"Kalkulacija zavisnog troška",\r
"kalkulacija, nedostaje",\r
"Kalkulacija: razlika u centima između kalkulacije i fakture",\r
"Kalkulacija: roba u maloprodaji po prodajnoj sa PDV (duguje)",\r
"Kalkulacija: ukalkulisana razlika u cijeni (potražuje)",\r
"Kalkulacija: ukalkulisani PDV (potražuje)",\r
"Kalkulacije",\r
"Kalkulacije (ulaz)",\r
"kalkulacije bez računa dobavljača nisu u specifikaciji",\r
"Kalkulacije i fakture",\r
"Kalkulacije i fakture dobavljača · ručni unos (i strani dobavljač) · dnevnik unosa: ko je dokument unio, izmijenio ili obrisao",\r
"Kalkulacije po stavkama (",\r
"KALKULACIJE SA STAVKAMA",\r
"kalkulacije u zaključanom periodu ({0})",\r
"Kalkulacije{0}{1}",\r
"Kalo",\r
"Kamata plaćena nerezidentima po stopi većoj od uobičajene komercijalne stope",\r
"Kamata uz uplatu PDV-a",\r
"Kamata za neblagovremeno plaćene poreze i doprinose",\r
"Kamate prema povezanim licima iznad „van dohvata ruke\\", zatezne kamate među povezanim licima",\r
"Kamate prema povezanim licima manje od prihoda „van dohvata ruke\\"",\r
"Kamera",\r
"Kamera nije dostupna: {0}",\r
"Kamera: {0}",\r
"Kamerom",\r
"kamerom telefona",\r
"Kameru trenutno koristi druga aplikacija. Potrebno je zatvoriti tu aplikaciju i ponoviti skeniranje.",\r
"Kamp",\r
"Kanal mora biti probni ili stabilni.",\r
"Kancelarija — ne raspoređuje se u smjene (oznaka na kartici radnika, Plate → Radnici)",\r
"Kancelarijski materijal",\r
"Kancelarijski radnik (administrator, direktor, knjigovođa…) ne ulazi u raspored smjena — ni automatski kao zamjena, ni kao ispomoć drugom objektu, ni iz Menadžera. Dok se kućica ne promijeni, odluka prati naziv radnog mjesta.",\r
"kao pomoćni (dodatna ruka, preko potrebnog broja)",\r
"kao pomoćni (dodatna ruka)",\r
"kao za sve",\r
"KAPITAL",\r
"Kapital, krediti, žiro-račun, blagajna, kupci, PDV i porez na dobit nijesu u programu. Podaci se uzimaju iz bruto bilansa knjigovođe (uvoz iz Excela ili ručno).",\r
"Kapitalni dobici (42 − 43) > 0",\r
"Kapitalni dobici (iskazani u bilansu uspjeha)",\r
"Kapitalni gubici (43 − 42) > 0",\r
"Kapitalni gubici (iskazani u bilansu uspjeha)",\r
"KARELIA",\r
"KARELIAS",\r
"kartica",\r
"Kartica",\r
"KARTICA",\r
"Kartica (hronološki, po datumu)",\r
"Kartica / IOS dobavljača",\r
"Kartica artikla — {0} ({1})",\r
"KARTICA DOBAVLJAČA",\r
"Kartica dobavljača — {0}",\r
"Kartica dobavljača — učitavanje i provjera",\r
"Kartica konta",\r
"KARTICA KONTA {0} {1}",\r
"Kartica kupca iz glavne knjige (konto",\r
"Kartica nema kolonu iznosa (iznos / duguje / potražuje).",\r
"kartica otvorena u poređenju",\r
"Kartica prikazuje fakture i naplate kako su proknjižene u glavnoj knjizi (Finansije → Proknjiži mjesec).",\r
"Kartica radnika ima za ovaj mjesec:",\r
"kartice",\r
"Kartice",\r
"Kartice {0} umanjene za proviziju banke",\r
"Kartice bez priliva (2419, starije od 3 dana, poslije POS provizije)",\r
"Kartice bez priliva {0} (više od 5 % kartica {1}: {2}). Nedostaje izvod ili priliv; POS provizija nije proknjižena.",\r
"kartice mjeseca {0}, prilivi POS {1}, provizija {2}",\r
"kartična naplata — kontrola pazara",\r
"kasa",\r
"Kasa",\r
"kasa — podaci artikla",\r
"Kasa \\"{0}\\" ({1}) — {2} artikala, {3} nesinhronizovanih računa",\r
"kasa (artikal nije u šifarniku)",\r
"Kasa (ENU / PJ)",\r
"kasa {0}",\r
"Kasa {0}",\r
"Kasa {0} — {1}",\r
"Kasa {0} · dan {1} · stanje kase od {2} · promet {3} EUR",\r
"Kasa {0} · stanje kase od {1} · pregled od {2}",\r
"Kasa {0} ({1}, {2}) se isključuje na serveru i označava kao uklonjena. Pazari, promet i zaključci kase ostaju. Nastaviti?",\r
"Kasa {0} ({1}) se isključuje na serveru. Nastaviti?",\r
"Kasa {0} je isključena na serveru.",\r
"Kasa {0} je počela naplatu. Oslobađa se samo ako ta kasa ne radi.",\r
"Kasa {0} je premještena.{1}{2}",\r
"Kasa {0} je uklonjena. Kasa se ponovo upisuje dugmetom „Dodaj kasu\\".",\r
"Kasa {0} je uklonjena.{1}{2}{3}",\r
"Kasa {0} je upisana u objekat.{1}",\r
"Kasa {0} je upisana.{1}{2}",\r
"Kasa {0} je već upisana ({1}).",\r
"Kasa {0} nije kasa objekta „{1}\\".",\r
"Kasa {0} nije u spisku kasa.",\r
"Kasa {0}, smjena #{1}{2}",\r
"Kasa {0}{1} nije upisana uz objekat (Cjenovnik kasa → Kase i objekti).",\r
"Kasa / smjena",\r
"Kasa 1.5.1 · radi do {0} · kasni do {1}",\r
"Kasa 1.5.2 iz osnova artikla (Artikli → osnov za 0 %) upisuje oznaku EX (VAT_CL26, VAT_CL27, VAT_CL17) u fiskalni račun stavke po stopi 0 %. Oznaka EX nije provjerena na testnom servisu Poreske uprave. Isključeno: paket kase je kao u verziji 1.0.107 (bez osnova).",\r
"Kasa 1.5.2 šalje interval javljanja (preko servera 110 s uz otvorenu smjenu, 10 min bez nje; samo folder razmjene 5 min): „radi\\" = javila se u roku od {0} intervala, „kasni\\" = do {1} intervala, poslije toga „ne javlja se\\". Kasa 1.5.1: radi do {2} min, kasni do {3} min; bez otvorene smjene {4} i {5} min.",\r
"kasa bez objekta: {0}",\r
"Kasa ID",\r
"kasa IRIS",\r
"Kasa izdaje korektivni račun avansnog računa.",\r
"Kasa je isključena na serveru.",\r
"Kasa je na serveru već bila isključena.",\r
"Kasa je vratila neočekivan odgovor.",\r
"Kasa još nije poslala zaključak smjene.",\r
"Kasa kioska nedjeljom i praznikom prodaje samo izabrane artikle i grupe. Grupe kase nemaju štampu, cvijeće i suvenire — za takvu robu birati artikle.",\r
"Kasa kioska traži kod poslovnog prostora (PJ) kioska. {0}",\r
"Kasa na mreži",\r
"Kasa ne šalje stanje uživo. Dostupno od verzije Kase",\r
"Kasa ne šalje stanje uživo. Stanje uživo je dostupno od verzije Kase {0}.",\r
"Kasa nije bila uparena na serveru.",\r
"Kasa nije dostupna na {0}: {1}",\r
"kasa nije poslala promet.",\r
"Kasa nije poslala račune.",\r
"Kasa nije upisana u spisak kasa firme (Cjenovnik kasa → Kase i objekti).",\r
"Kasa odbija prodaju povučene serije. Spisak stiže na kase sa cjenovnikom. Serija uklonjena sa spiska ostaje zabranjena na kasama koje su je već primile (Kasa 1.7 spisak povučenih serija samo dopunjuje). Kolona „Primljeno\\" pokazuje ulaze te serije po kalkulacijama (serija se upisuje na stavci kalkulacije u „Kalkulacije i fakture\\").",\r
"Kasa OfflineKasa — kako radi",\r
"Kasa označena kao kiosk u objektu (zapis prije 1.0.108). Kiosk je posebno prodajno mjesto: „Otvori kiosk\\" uz objekat.",\r
"Kasa prodaje po drugoj cijeni od kalkulacije",\r
"kasa radi",\r
"kasa radi · kasni ili se ne javlja: {0}",\r
"Kasa sada",\r
"kasa se javlja na {0} · radi do {1} · kasni do {2}",\r
"Kasa upisana",\r
"Kasa vodi račune i smjene. Knjigovodstvu treba dnevni pazar, pa aplikacija uzima",\r
"Kasama slati osnov za 0 % (fiskalna oznaka EX)",\r
"KasaZakljuciPotpis:{0}",\r
"kase",\r
"Kase",\r
"Kase 1.x (nova kasa) — zaključci",\r
"Kase firme po objektima (kod kase ENU kod Poreske uprave); prema objektu kasa dobija cijene i pravila. Kasa se dodaje uz kod za uparivanje sa servera, uklanja se opozivom na serveru; pazari, promet i zaključci uklonjene kase ostaju u knjigama.",\r
"Kase i kioske mijenja računar u režimu obrade (glavni ili admin).",\r
"Kase i objekti",\r
"Kase i Menadžer",\r
"Kase koje prelaze u kiosk",\r
"Kase sa kodom za uparivanje, kiosk i radno vrijeme u registru firme zahtijevaju server 0.5.2 i IRIS Admin 0.3.1 kod izdavača. Kasa 1.5.2 primjenjuje nedjeljni režim kioska i radno vrijeme iz paketa.",\r
"Kase sa servera nijesu učitane: {0}",\r
"Kase uživo",\r
"Kase uživo — posljednji računi: {0} · {1}",\r
"Kase uživo — pregled kasa",\r
"Kase uživo — promet po artiklu: {0} · {1}",\r
"Kasir",\r
"Kasni",\r
"Kasni (dana)",\r
"kasni {0} d",\r
"Kasni 1–30 dana",\r
"Kasni 30–60 dana",\r
"Kasni 31–60 dana",\r
"Kasni 61–90 dana",\r
"Kasni preko 60 dana",\r
"Kasni preko 90 dana",\r
"kasni sa javljanjem",\r
"Kasnije",\r
"Kašnjenje na posao ili raniji odlazak bez odobrenja (do 3 puta mjesečno)",\r
"kasno",\r
"Katalog povreda radne obaveze (ide u Pravilnik i ugovore)",\r
"katalog: —",\r
"Kategorija",\r
"Kategorija koja važi za",\r
"Kategorija koja važi za {0}",\r
"Kategorija za {0} (čl. 7 Zakona 84/25)",\r
"Kazna % zarade (",\r
"Kazna je već odbijena od plate. Potrebno je prethodno ukloniti obustave iz obračuna.",\r
"Kazna je već odbijena za {0} mjesec(a), a izrečena je na {1} mjesec(a).",\r
"Kazna se odbija od plate, ne od posebnog (IQOS) obračuna.",\r
"Kazna se odbija tek kad je odluka donesena i uručena zaposlenom.",\r
"Kazne i penali (poreski nepriznati)",\r
"Kazne u obračunu",\r
"KB",\r
"KENT",\r
"KEPU",\r
"KEPU - Knjiga evidencije prometa",\r
"KEPU{0}",\r
"KG",\r
"KIF",\r
"KIF, KUF, PDV prijava, kartica poreza",\r
"Kikiriki",\r
"Kiosci",\r
"kiosk",\r
"Kiosk",\r
"Kiosk „{0}\\"",\r
"Kiosk „{0}\\" je otvoren.{1}{2} Roba dozvoljena nedjeljom i praznikom se bira u „Podesi kiosk\\".",\r
"Kiosk „{0}\\" je snimljen.{1}{2}",\r
"kiosk (u objektu)",\r
"Kiosk {0}",\r
"Kiosk je maloprodajno mjesto i otvara se uz maloprodajni objekat.",\r
"Kiosk je otvoren u Knjigovodstvu; registar firme na serveru nije izmijenjen: {0}",\r
"Kiosk je posebno prodajno mjesto (čl. 15 st. 2 Zakona o unutrašnjoj trgovini): poseban poslovni prostor prijavljen Poreskoj upravi, svoja kasa i evidencija trgovine. Roba stiže internim prenosom iz matičnog objekta.",\r
"Kiosk je posebno prodajno mjesto uz objekat: svoj kod poslovnog prostora (PJ), svoja kasa i evidencija trgovine (EM); roba stiže internim prenosom iz matičnog objekta. Nedjeljom i praznikom kasa kioska prodaje samo izabranu robu (čl. 35b Zakona o unutrašnjoj trgovini).",\r
"Kiosk je posebno prodajno mjesto: kod poslovnog prostora (PJ) kioska dodjeljuje Poreska uprava pri prijavi poslovnog prostora. Kase kioska fiskalizuju račune pod tim kodom.",\r
"Kiosk je upisan u registar firme na serveru (objekat {0}).",\r
"Kiosk nema kod poslovnog prostora (PJ).",\r
"Kiosk nema nijednu aktivnu kasu.",\r
"Kiosk se otvara uz objekat, ne uz drugi kiosk.",\r
"Kiosk uz objekat…",\r
"Kiseli kupus u refuzi",\r
"klasa",\r
"Klase, grupe i trocifreni računi su iz Pravilnika o kontnom okviru CG („Sl. list CG\\" 11/20) i obavezni su. Analitička konta (4+ cifre) dodaje program i korisnik; partner, objekat i račun banke se vode kao dimenzije stavke, ne u broju konta.",\r
"klasičnom Outlooku",\r
"klasu",\r
"klauzula zabrane konkurencije (",\r
"Klik",\r
"Klik — izmjena dana (zamjena, dodavanje, sati)",\r
"klik — radio je ove nedjelje",\r
"Klik na ćeliju — dodavanje klikom na ime, zamjena, stvarni sati. Klik na ime u koloni „Slobodan dan\\" — radnik ulazi u smjenu. ✎ uz naziv objekta — radno vrijeme.",\r
"Klik na fakturu otvara pregled i ispravku uplata vezanih za nju.",\r
"Klik na fakturu otvara ručno vezivanje i razvezivanje plaćanja.",\r
"Klik na ime: radnik ulazi u ovu smjenu.",\r
"Klik na račun prikazuje stavke.",\r
"Klik na red otvara dokument.",\r
"Klik na red otvara farmaceutske podatke artikla. Artikal se upisuje kao lijek pretragom svih artikala kase (polje za pretragu). Podaci stižu na kase sa sljedećim cjenovnikom; kasa izdaje lijek na recept (Rx) samo uz recept i prijavljenog farmaceuta.",\r
"Klik uklanja artikal iz izuzetih.",\r
"Klik za potvrdu sedmice ovog objekta",\r
"Klik: izmjena rasporeda tog dana",\r
"klik: upis u prvu smjenu",\r
"Klik: zahtjevi radnika za ovaj mjesec — slobodan dan, odmor, željena smjena u sedmici, rad u drugom objektu. Uvažavaju se pri automatskom raspoređivanju.",\r
"Klikni",\r
"Kljuc",\r
"Ključ",\r
"Ključ firme",\r
"ključ firme · uparen uređaj",\r
"ključ firme · uređaj administratora",\r
"Ključ rasporeda",\r
"Ključ rasporeda nije izabran (po vrijednosti, količini ili težini).",\r
"knj.datumKnjizenjaUnos",\r
"knj.server.bazaUredjaja",\r
"knj.server.firmeUredjaja{0}",\r
"knj.server.opisiSnimka",\r
"knj.server.zigKopije",\r
"knj.server.zigSnimka",\r
"knj.servis.saljiGreske",\r
"knj.updateAuto",\r
"knj.updateFeed",\r
"Knjig_backup → Arhiva → firma → godina",\r
"Knjig. količina",\r
"Knjiga {0}. je zaključena ({1} objekata, {2} strana). PDF: {3} · za ovjeru: {4}{5}",\r
"Knjiga {0}. je zaključena. Izmjena početnog stanja nije moguća.",\r
"Knjiga {0}. se zaključuje kad je zaključeno svih 12 mjeseci. Nijesu zaključeni: {1}.",\r
"Knjiga avansa (I-RAČ)",\r
"Knjiga domaćih gostiju",\r
"Knjiga gostiju",\r
"KNJIGA IZDATIH RAČUNA (I-RAČ)",\r
"Knjiga izdatih računa za avanse (I-RAČ, 15 kolona):",\r
"KNJIGA IZDATIH RAČUNA ZA AVANSE (I-RAČ)",\r
"Knjiga Izlaznih Računa (I-RAČ)",\r
"Knjiga je zaključena i zaštićena od izmjena. Ukupno strana snimljene knjige: {0}.",\r
"Knjiga nema početno stanje 01.01.",\r
"KNJIGA PRIMLJENIH (ULAZNIH) RACUNA",\r
"KNJIGA PRIMLJENIH RAČUNA (U-RAČ)",\r
"Knjiga se puni po ovom datumu. Za raniji račun koji se knjiži naknadno: tekući datum ili posljednji dan mjeseca u koji račun ulazi.",\r
"Knjiga se vodi",\r
"Knjiga stranih gostiju",\r
"Knjiga za",\r
"knjiga; slikovnica; roman; enciklopedija; rjecnik; bojanka",\r
"Knjige / dokumenti",\r
"Knjige i serijske publikacije",\r
"Knjige izdatih i primljenih računa (I-RAČ, U-RAČ) — 5 godina (Zakon o PDV, čl. 54)",\r
"Knjige prikazuju sve fakture po datumu računa u izabranom periodu, bez obzira na datum prijema. Propis traži datum prijema (ZPDV čl. 37 st. 7): „Datum prijema (po zakonu)\\".",\r
"Knjige se vode po osnovi „Datum računa\\", a propis traži „Datum prijema (po zakonu)\\" (prekidač „Period po datumu\\").",\r
"Knjige ulaznih računa (KPR, U-RAČ), PR-PDV polje 19, trgovačka knjiga i lager vode se po datumu prijema, odnosno u mjesecu u kojem su primljeni roba i račun (ZPDV čl. 37 st. 7).",\r
"Knjige ulaznih računa i PR-PDV polje 19 idu po",\r
"Knjigovodstveno stanje u objektu na dan isporuke",\r
"Knjigovodstveno stanje u objektu na dan izdavanja",\r
"Knjigovodstvo",\r
"Knjigovodstvo — cjenovnik firme",\r
"Knjigovodstvo → Cjenovnik kasa → Razmjena i Excel → „Uvezi šifarnik iz Excela…\\" (glavni računar firme, uz PIN).",\r
"Knjigovodstvo baza",\r
"Knjigovodstvo-Updater",\r
"Knjiženje (salda):",\r
"Knjiženje je poništeno: plaćanje je obrisano, a transakcija ponovo čeka knjiženje. Dobavljač se bira ponovo pri sljedećem knjiženju.",\r
"Knjiženje je poništeno. Minus kalkulacija je obrisana.",\r
"Knjiženje nije poništeno. {0}",\r
"Knjiženje u toku…",\r
"Knjiženje…",\r
"Knjiženo",\r
"knjiženo)",\r
"Knjiži izvode banaka, plaćanja dobavljačima i naplatu od kupaca; usaglašava kartice sa dobavljačima.",\r
"Knjiži se",\r
"knjižna",\r
"knjižna nota",\r
"Knjižna nota (odobrenje dobavljača).",\r
"Knjižna odobrenja",\r
"Knjižne note primijenjene na {0} faktura ({1} EUR).",\r
"knjižnih",\r
"knjižno",\r
"KNJIZNO ODOBRENJE",\r
"Knjižno odobrenje",\r
"KNJIŽNO ODOBRENJE",\r
"Knjižno odobrenje {0}",\r
"Knjižno odobrenje {0} — {1}",\r
"knjižno odobrenje {0} (faktura {1})",\r
"Knjižno odobrenje {0} po računu {1}",\r
"Knjižno odobrenje {0} po računu {1}{2}",\r
"Knjižno odobrenje / zaduženje",\r
"Knjižno odobrenje je obrisano.",\r
"Knjižno odobrenje je snimljeno.",\r
"Knjižno odobrenje je snimljeno. Odobrenje čeka obavještenje kupca.",\r
"Knjižno odobrenje kupcu",\r
"Knjižno odobrenje kupcu obvezniku: PDV do pismenog obavještenja kupca (ZPDV čl. 20 st. 9)",\r
"Knjižno stanje",\r
"Ko",\r
"KO dobavljača — provjera u kalkulacijama",\r
"Ko nam je uplaćivao i kome smo plaćali —",\r
"KO-{0}-{1}",\r
"Kod",\r
"KOD",\r
"kod {0}",\r
"Kod {0} je obrisan sa artikla „{1}\\".",\r
"Kod {stari} je i barkod artikla „{drugi}\\". Obrisati ga sa ovog artikla?",\r
"Kod daje administrator IRIS CORVINA (12 znakova, važi 48 sati). Veza važi za",\r
"Kod dobavljača",\r
"kod ENU",\r
"Kod ENU",\r
"Kod ENU (za fakture)",\r
"Kôd ENU nije registrovan, nije aktivan ili ne pripada ovoj firmi.",\r
"Kod ima znak koji barkod ne može imati (dozvoljeni su cifre, slova, tačka i crtica; do 32 znaka). Očitati barkod sa proizvoda i dodati ga artiklu, a ovaj kod ukloniti u formi artikla.",\r
"Kod je kopiran.",\r
"Kod kase (ENU)",\r
"Kod kase (ENU) je obavezan.",\r
"Kod kase (ENU): slova, cifre, tačka, crtica i donja crta, najviše 40 znakova.",\r
"Kod nas",\r
"Kod nas postoji {0} stavki (plaćanja/fakture) kojih nema na Vašoj kartici — dostavljamo spisak na zahtjev.",\r
"Kôd održavaoca ne odgovara aktivnom održavaocu.",\r
"Kôd održavaoca softvera",\r
"kod poslovnog prostora",\r
"Kod poslovnog prostora",\r
"Kod poslovnog prostora (PJ)",\r
"Kod poslovnog prostora (PJ) kioska je obavezan.",\r
"Kod poslovnog prostora (PJ) kioska je obavezan. {0}",\r
"Kod poslovnog prostora je duži od 40 znakova.",\r
"Kôd poslovnog prostora ne pripada aktivnoj poslovnoj jedinici.",\r
"Kod poslovnog prostora objekta kod Poreske uprave.",\r
"Kod primaoca",\r
"Kod primaoca (kol.)",\r
"Kod registra domena (npr. domen.me) napravite DNS zapis CNAME: ime „meni\\" (ili koje želite) → vrijednost {0}.",\r
"Kod se prikazuje samo sada; server čuva samo njegov otisak.",\r
"kod softvera",\r
"Kod softvera",\r
"kôd softvera",\r
"kod softvera {0} je kod drugog programa za kase; za IRIS se koristi kod softvera IRIS",\r
"Kôd softvera ne odgovara aktivnom softveru. Kôd je potrebno provjeriti u Podešavanjima.",\r
"Kod za kasu {0} nije napravljen. {1}",\r
"Kod za Menadžer je napravljen i važi do {0}.",\r
"Kod za uparivanje",\r
"Kod za uparivanje daje administrator IRIS CORVINA. Program preuzima podatke firme (naziv, PIB, adresa, PDV broj, objekti i kase) i pravi bazu firme, bez ručnog upisa.",\r
"Kod za uparivanje je obavezan (dodjeljuje ga administrator IRIS CORVINA).",\r
"Kod za uparivanje je obavezan (dodjeljuje ga administrator servera).",\r
"Kod za uparivanje kase",\r
"Kod za uparivanje kase {0} je napravljen.",\r
"Kod za uparivanje kase sa serverom (kasa ostaje u spisku).",\r
"Kod za uparivanje Menadžera",\r
"Kod za uparivanje nije napravljen.",\r
"Kod za uparivanje važi od 1 do 48 sati i samo jednom.",\r
"kodom sa servera",\r
"Kodovi koji čekaju uparivanje",\r
"Kodovi sa EFI portala",\r
"Kodovi se prepisuju sa",\r
"Kodovi su snimljeni.",\r
"Kodovi za uparivanje nijesu poništeni: {0}",\r
"Koeficijent",\r
"koja uloga se knjiži na koji konto",\r
"koja važi",\r
"koji je server najavio u mreži",\r
"Kol.",\r
"Kolač industrijski",\r
"Kolašin",\r
"Kolicina",\r
"Količina",\r
"Količina {0} izgleda kao barkod skeniran u polje količine i nije upisana. Potrebno je upisati stvarnu količinu.",\r
"količina 0",\r
"Količina izgleda kao barkod skeniran u polje količine i nije upisana.",\r
"količina je negativna",\r
"Količina je obavezna.",\r
"Količina mora biti veća od nule.",\r
"Količina ne može biti negativna.",\r
"količina nije upisana",\r
"Količina nije upisana: {0}.",\r
"Količina povrata nije upisana.",\r
"Količina za „{0}\\" (upisuje se slobodnim tekstom):",\r
"Kolicina*ProdajnaCijenaBezPdv",\r
"količine i cijene se ne mijenjaju",\r
"Količinska cijena",\r
"koliko",\r
"Koliko ljudi mora biti u svakoj smjeni",\r
"Koliko nedjelja je radio",\r
"Kolona „{0}\\" nije prepoznata i nije učitana.",\r
"Kolona „Šifra\\" postojećih artikala i skrivena kolona „Otisak\\".",\r
"kolona 7 — početno stanje",\r
"kolona saldo (iznos sa predznakom po redu)",\r
"kolona saldo, PS iz podnožja preskočen",\r
"kom",\r
"KOM",\r
"Komada",\r
"Komada {0}",\r
"Komada u pakovanju",\r
"Komanditno društvo",\r
"Kome",\r
"Komisija (imena, odvojena zarezom)",\r
"kompaktno",\r
"Kompenzacija",\r
"kompenzovano",\r
"KOMPLET",\r
"KOMUNALIJA",\r
"Komunalije",\r
"KOMUNALNIH",\r
"Konačni račun",\r
"Konačni račun ima IKOF. Avans se odbija prije izdavanja računa.",\r
"Konačni račun ima IKOF. Odbitak avansa se ne poništava.",\r
"Konačni račun istog kupca, prije izdavanja (fiskalizacije). Račun nosi PayMethod ADVANCE sa IKOF-om avansa.",\r
"Konačni račun je izdat drugom kupcu.",\r
"Konačni račun je storniran.",\r
"Konačni račun ne postoji.",\r
"Konačni račun se fiskalno veže za jedan avansni račun (jedan način plaćanja ADVANCE).",\r
"Koncesije, patenti, licence i slična prava",\r
"KONTA",\r
"Konta 134",\r
"KONTA GRUPE 134 — ROBA U MALOPRODAJI",\r
"Kontakt",\r
"Kontakt i žiro računi",\r
"Kontakt je snimljen.",\r
"Kontakt osoba",\r
"Kontakti",\r
"Kontakti za obavještenja i ponude",\r
"Kontekst „{0}\\": nedozvoljeno polje ili predugačak tekst.",\r
"Kontekst u prilogu mora biti objekat {program, verzija, uloga, ekran}.",\r
"Kontni okvir 11/20, račun 494 „Razgraničeni zavisni troškovi nabavke\\"",\r
"Kontni plan",\r
"KONTNI PLAN",\r
"Kontni plan (analitički konto)",\r
"Kontni plan i šeme",\r
"Kontni plan, nalozi za knjiženje, glavna knjiga, bruto bilans",\r
"Konto",\r
"Konto (ili početak, npr. 134) — Enter",\r
"Konto {0} ({1}) ne postoji. Red je preskočen.",\r
"Konto {0} {1}",\r
"Konto {0} je potvrđen. Uplata ulazi u glavnu knjigu nakon ponovnog knjiženja mjeseca.",\r
"Konto {0} ne postoji ili se na njega ne knjiži.",\r
"konto {0} ne postoji u kontnom planu",\r
"Konto {0} ne postoji u kontnom planu.",\r
"Konto {0} već postoji.",\r
"Konto je dodat.",\r
"Konto ne postoji.",\r
"Konto nije upisan.",\r
"Konto se određuje po računu primaoca (PDV, jedinstveni račun poreza i doprinosa po periodu iz poziva na broj, prirez opštine, kazne, takse). Ove uplate program ne može sam razvrstati: konto se bira ručno (predlog je po opisu) i potvrđuje, nakon čega je potrebno ponovo proknjižiti mjesec.",\r
"Kontrola",\r
"KONTROLA KPR ↔ KONTA 134",\r
"Kontrola prema KPR-u:",\r
"Kontrola se ne slaže; izvod nije upisan u Banku. Stavke je potrebno uporediti sa PDF-om i označiti tačne (automatski nije označena nijedna):",\r
"Kontrola stopa: zbir 51a–c se ne slaže sa progresivnim obračunom. Potrebna je provjera.",\r
"Kontrola zbira se ne slaže; potreban ručni uvoz (Obaveze → Uvoz izvoda): {0}",\r
"Kontrola zbira se ne slaže. Iznosi su možda pogrešno pročitani. Izvod nije upisan u Banku i nijedna stavka nije označena; potrebno je uporediti stavke sa izvodom i označiti tačne. {0} ({1})",\r
"kontrola: {0} naloga, zbirovi i broj naloga se slažu sa izvodom",\r
"Kontrola: 134000 − 134001 − 134002 = nabavna vrijednost u minus; protivstav 5771 (rashodi po osnovu rashodovanja robe). Duguje = Potražuje.",\r
"Kontrola: 134000 − 134001 − 134002 = nabavna vrijednost u minus; protivstav 5771. Duguje = Potražuje.",\r
"Kontrola: iznos sa računa (sa PDV)",\r
"Kontrola: uvezena prodaja prema pazaru",\r
"Kontrola: zbir pročitanih stavki ({0}) = štampani saldo na kartici ({1}). Kartica je pročitana u cjelini.",\r
"Kontrola: zbir pročitanih stavki {0} ≠ štampani saldo {1}. Dio kartice možda nije pročitan; potrebno je pregledati neprepoznate redove ili unijeti tabelu kopiranjem.",\r
"Kontrole nisu moguće: {0}",\r
"Kontrole se ne slažu:\\n\\n{0}\\n\\nSnimiti pazar uprkos razlikama?",\r
"Kontrole se ne slažu. Polja je potrebno ispraviti prema papiru ili ponoviti slikanje ako je slika nejasna.",\r
"Kontrole za",\r
"Kontroliše dnevne pazare, presjeke kase, popis robe i manjkove.",\r
"Kontrolna (zadnja) cifra JMBG-a ne odgovara ostalim ciframa. Moguće je da su neke cifre zamijenjene.",\r
"Kontrolni broj se ne slaže. Provjerite podatke prema ispravi.",\r
"Kontrolni popis iz Menadžera",\r
"Kontrolni zbir paketa nije ispravan. Ažuriranje je odbijeno.",\r
"Kontrolni zbir paketa se ne poklapa — preuzimanje je odbijeno.",\r
"Kontrolnih popisa u razmjeni: {0} (sa {1} uređaja Menadžera).",\r
"konzervirano",\r
"Kopija",\r
"Kopija (opciono)",\r
"Kopija baze je samo za čitanje; otvara se u programu (Podešavanja → Backup → uvoz kopije) ili se iz nje prave isti izvještaji.",\r
"Kopija baze je snimljena: {0}",\r
"Kopija baze prije čišćenja: {0}.",\r
"Kopija baze se pravi u Podešavanja → Backup i čuva na sigurnom mjestu.",\r
"Kopija baze van računara",\r
"Kopija dokumenta {0} je napravljena kao nacrt {1}.{2}",\r
"Kopija dokumenta {0}.",\r
"Kopija je snimljena u folder: {0} ({1} MB).",\r
"Kopija otpremnice {0} je napravljena: {1}.",\r
"Kopija postojeće baze nije napravljena, pa je uvoz prekinut: {0}",\r
"kopija se ne može pročitati",\r
"kopija:",\r
"Kopiju baze je potrebno preuzeti i čuvati na sigurnom mjestu (Google Drive, računar…).",\r
"Kopiju pravi glavni računar sam, jednom dnevno (dok je program otvoren i folder za rezervnu kopiju izabran); čuva se posljednjih {0} dana.",\r
"Kopiraj",\r
"Kopiraj cijelu prijavu",\r
"Kopiranje nije uspjelo.",\r
"Kopiranje nije uspjelo. Kod je potrebno prepisati sa ekrana.",\r
"Kopirano",\r
"Korektivni",\r
"korektivni čeka slanje",\r
"korektivni fiskalizovan",\r
"Korektivni račun",\r
"Korektivni račun {0} je izdat i fiskalizovan. Original je storniran.",\r
"Korektivni račun avansa čeka slanje: {0}",\r
"Korektivni račun avansa ima IKOF. Brisanje fakture nije moguće.",\r
"Korektivni račun avansa ima IKOF. Odbitak se ne poništava.",\r
"Korektivni račun avansa je fiskalizovan.",\r
"Korektivni račun je izdat (IKOF {0}), ali upis na server nije uspio. Ponovite upis.",\r
"Korektivni račun nije konačni račun za avans.",\r
"Korektivni račun se ne kopira.",\r
"Korišćenje mobilnog telefona u privatne svrhe tokom usluživanja kupaca",\r
"Korišćenje preplate PDV-a iz prethodnog perioda (PDV kredit)",\r
"Korisničko ime",\r
"Korisnik",\r
"Korisnik {0} ({1}){2}",\r
"Korisnik nema pravo izmjene cijena za {mjesto}.",\r
"koristi se",\r
"Koristi se podrazumijevani štampač iz Windowsa.",\r
"Koristi se samo za prijavu.",\r
"Koštičavo voće: kajsije, breskve, trešnje i višnje",\r
"Kotor",\r
"KOTOR",\r
"Kozmetički i higijenski proizvodi",\r
"kp.MarketID",\r
"KPP",\r
"KPP — Knjiga prometa",\r
"KPR",\r
"KPR · KIF · EDI · KPP · KEPU · PR-PDV — pregled na ekranu + izvoz u Excel i PDF",\r
"KPR bez PDV",\r
"KPR, KIF, PR-PDV",\r
"kraj dana",\r
"Kraj perioda je prije početka.",\r
"Kraj smjene (24 h; manji od početka = prelazi ponoć, npr. 01:00)",\r
"Krajnje stanje robe",\r
"Krajnje stanje robe (popis od 31.12.",\r
"kratki kod",\r
"KRATKOROČNA POTRAŽIVANJA, PLASMANI I GOTOVINA",\r
"KRATKOROČNE FINANSIJSKE OBAVEZE",\r
"KRATKOROČNI FINANSIJSKI PLASMANI",\r
"Kratkoročni krediti i plasmani - matična i zavisna pravna lica",\r
"Kratkoročni krediti i plasmani - ostala povezana pravna lica",\r
"Kratkoročni krediti od matičnih i zavisnih pravnih lica",\r
"Kratkoročni krediti od ostalih povezanih pravnih lica",\r
"Kratkoročni krediti u inostranstvu",\r
"Kratkoročni krediti u zemlji",\r
"Kreiraj",\r
"Kriptografski potpis nije ispravan. Potrebna je provjera sertifikata.",\r
"Krompir i šargarepa rana, celer i peršun",\r
"Krompir, šargarepa, luk",\r
"krug razmjene",\r
"Krug razmjene: {0}",\r
"krug sa serverom",\r
"Krug sa serverom: {0}",\r
"ks.Kolicina*ks.ProdajnaCijenaBezPdv",\r
"ks.MarzaProcenat",\r
"ks.ProdajnaCijenaBezPdv",\r
"Kuća ili stan",\r
"KUF",\r
"kupac",\r
"Kupac",\r
"Kupac „{0}\\" je dodat i označen za kase.",\r
"Kupac (firma) na računu",\r
"Kupac bez telefona se ne može poslati kasama. Kasa kupca prepoznaje po broju telefona.",\r
"Kupac ima izdate dokumente. Brisanje nije moguće.",\r
"Kupac ima otpremnice ili reverse. Brisanje nije moguće.",\r
"Kupac iz šifarnika ili slobodno upisan primalac",\r
"Kupac je obveznik PDV: izlazni PDV se umanjuje u mjesecu prijema pisanog obavještenja kupca.",\r
"Kupac na računu: {0}{1}.",\r
"Kupac ne postoji.",\r
"Kupac nije izabran.",\r
"Kupac nije nađen.",\r
"Kupac nije obveznik PDV: izlazni PDV se umanjuje u mjesecu odobrenja.",\r
"Kupac nije obveznik PDV. Obavještenje se ne upisuje.",\r
"Kupac obveznik PDV: izlazni PDV se umanjuje u mjesecu prijema pisanog obavještenja kupca (ZPDV čl. 20 st. 9)",\r
"kupac PIB {0} ne postoji",\r
"Kupac PIB {0} nije u šifarniku (konto {1}). Stavka je upisana bez partnera.",\r
"Kupac sa PIB-om {0} već postoji i može se označiti u spisku.",\r
"Kupac uplate je obavezan.",\r
"Kupac: {0}{1}{2}",\r
"kupca",\r
"Kupci - matična i zavisna pravna lica",\r
"Kupci - ostala povezana pravna lica",\r
"Kupci (fakture)",\r
"Kupci (vjernost)",\r
"Kupci u inostranstvu",\r
"Kupci u zemlji",\r
"kupcu",\r
"Kupovina (u upotrebi)",\r
"Kupus, kelj, blitva, zelena salata svježa",\r
"KV — kvalifikovan (III)",\r
"Kvadratna slika: zaglavlje programa, izbor firme, Kasa i Menadžer. Slika koja nije kvadratna se smješta u kvadrat.",\r
"Kvalifikacija",\r
"Kvar „{0}\\" — {1} ({2})",\r
"Kvar / neispravno",\r
"Kvarovi",\r
"Kvartal",\r
"Kvota {0} mora biti cio broj ≥ 0 ili null (neograničeno).",\r
"Kvote su obavezne.",\r
"kz.MarketID",\r
"l.KasaSifra IS NOT NULL",\r
"label",\r
"LAGER — STANJE PO ARTIKLU",\r
"Lager (stanje po artiklu)",\r
"Lager lista iz drugog programa,",\r
"Lager nije prikazan za objekte bez prodaje po artiklu sa kase: {0}.",\r
"Lager po artiklu i kartica artikla · stanje po objektu · popis robe · nivelacija (promjena cijena) · početno stanje robe · prodaja po artiklu bez kase IRIS",\r
"lager, popis robe",\r
"lakša",\r
"Lakše povrede",\r
"Lanac",\r
"Lanac sertifikata nije ispravan.",\r
"LD",\r
"ležaja",\r
"Ležaja",\r
"li",\r
"lica",\r
"lice",\r
"Lice odgovorno za sastavljanje iskaza",\r
"Lice odgovorno za sastavljanje: ________________ Odgovorno lice: {0}",\r
"Lice sa invaliditetom",\r
"lice sa invaliditetom ({0})",\r
"lice sa invaliditetom (pravilnik)",\r
"Lice sa teškim čulnim ili tjelesnim smetnjama",\r
"Licenca",\r
"Licenca (neobavezno)",\r
"Licenca {0} · {1} · {2} · moduli {3}{4}{5}",\r
"Licenca {0} ističe {1} (za {2} {3}).",\r
"Licenca {0} je istekla {1} Program radi još {2} {3}. Potrebno je produženje licence.",\r
"Licenca {0} je istekla {1} Program radi samo za čitanje i izvoz podataka. Potrebno je produženje licence.",\r
"Licenca {0} je opozvana {1} Program radi samo za čitanje i izvoz podataka.",\r
"Licenca {0} je suspendovana od {1} Program radi samo za čitanje i izvoz podataka do ukidanja suspenzije.",\r
"Licenca {0} je već učitana.",\r
"Licenca {0} ne uključuje modul Knjigovodstvo. Program radi samo za čitanje i izvoz podataka.",\r
"Licenca {0} ne važi. Program radi samo za čitanje i izvoz podataka.",\r
"Licenca {0} važi bez roka.",\r
"Licenca {0} važi do {1}",\r
"Licenca je provjerena, ali server IRIS CORVINA za ovu firmu daje drugu licencu. Važi licenca sa servera.",\r
"Licenca je učitana: {0}",\r
"Licenca je učitana.",\r
"Licenca je za firmu sa PIB-om {0}, a otvorena je firma sa PIB-om {1}.",\r
"Licenca nije ispravna: {0}",\r
"Licenca nije objekat.",\r
"Licenca se ne može snimiti na ovom uređaju.",\r
"licenca: paket {0}",\r
"licenca: paket Lanac",\r
"Licence korišćenih biblioteka",\r
"Lična karta",\r
"lična karta (ID)",\r
"Lične podatke gostiju vidi i upisuje recepcija.",\r
"Lične podatke gostiju vidi korisnik sa tim ovlašćenjem.",\r
"LICNI",\r
"Lični podaci",\r
"Lični podaci su obrisani po isteku roka čuvanja.",\r
"Lijek",\r
"Lijek (naziv, šifra, INN, ATC)",\r
"lijek {0}",\r
"Lijek {0} je snimljen. Podaci stižu na kase sa sljedećim cjenovnikom.",\r
"lijek:",\r
"Lijek: {0} ({1})",\r
"Lijepljenje iz memorije nije uspjelo. Tekst je moguće nalijepiti ručno u polje ispod.",\r
"Limit",\r
"LIMIT {0}",\r
"Limit za „{0}\\" je sada {1}.",\r
"Link nema otisak CA lokalnog servera. Otisak se čita dugmetom „Pročitaj otisak\\" i poredi sa programom IRIS Server.",\r
"Link nije link za uparivanje iz IRIS Admina (iris://upari?s=…&k=…&o=…).",\r
"Link za uparivanje iz IRIS Admina (neobavezno)",\r
"List",\r
"List „Artikli\\" nema kolone „Šifra\\" i „Naziv artikla\\".",\r
"List „Barkodovi\\" nema kolone „Šifra\\" i „Barkod\\" i nije učitan.",\r
"Lista",\r
"Lista FZO",\r
"Lista FZO nije ispravna.",\r
"Lista je osnovna, doplatna ili prazno.",\r
"Lista ljekova FZO",\r
"Ljekova",\r
"Ljekovi",\r
"Ljekovi čiji red nije pronađen u novom izvještaju: {0} (veza je uklonjena, upisana cijena ostaje).",\r
"ljuska ne podržava.",\r
"Ljuto",\r
"LM",\r
"logo",\r
"Logo",\r
"Logo i znak firme",\r
"Logo nije postavljen.",\r
"Lokacija",\r
"Lokalni IRIS server firme (umjesto servera IRIS CORVINA)",\r
"Lokalni IRIS server radi na računaru firme (program IRIS Server). Program prihvata samo sertifikat koji potpisuje CA tog servera; otisak CA se pamti pri uparivanju. CA se ne dodaje u Windows.",\r
"Lokalni server firme radi samo na https:// adresi.",\r
"Lokalni server firme traži potvrđen otisak CA: link za uparivanje iz IRIS Admina, traženje u mreži ili „Pročitaj otisak\\" uz poređenje sa ekranom Pregled programa IRIS Server.",\r
"lom",\r
"Lom / rasipanje",\r
"Lovćen banka",\r
"Lozinka",\r
"Lozinka je obrisana sa ovog računara.",\r
"Lozinka je preduga.",\r
"Lozinka naloga nije upisana na ovom računaru (Podešavanja → E-pošta).",\r
"Lozinka se upisuje u Windows programu (nova instalacija).",\r
"Lozinka sertifikata",\r
"LS",\r
"LUCKY STRIKE",\r
"Lupina",\r
"m.MarketID IN ({0})",\r
"Magacin",\r
"Magacioner",\r
"Magistar / specijalista (VII-2)",\r
"MAGUD COMPANY D.O.O.",\r
"MAGUD COMPANY DOO",\r
"maj",\r
"Maj",\r
"maja",\r
"Mak i pšenične mekinje",\r
"Mali hotel",\r
"malo",\r
"maloprodaja",\r
"Maloprodaja",\r
"Maloprodajna cijena sa PDV-om. Može se upisati direktno; marža se izvodi iz nje.",\r
"maloprodajnog procenta. Za robu koja nije u tabeli koristi se normativ obveznika. Rashod se utvrđuje popisom/komisijom (zapisnik).",\r
"manjak",\r
"Manjak (popis)",\r
"Manjak na fakturama",\r
"Manjak poslije odobrenja",\r
"Manjak robe",\r
"Manjak robe po popisu (nabavna)",\r
"Manjak u kasi ili robi koji nije opravdan",\r
"manje",\r
"Manjkovi",\r
"Manjkovi materijala i robe",\r
"Manjkovi robe",\r
"MAPR odgovor nije validan JSON.",\r
"objekat",\r
"Objekat",\r
"Objekat „{0}\\"",\r
"Objekat \\"{0}\\" iz kase ne postoji u knjigovodstvu. Objekat je potrebno dodati ili preimenovati.",\r
"Objekat „{0}\\" je deaktiviran u ovoj firmi. Potrebno je izabrati aktivan objekat.",\r
"Objekat „{0}\\" je dodat.",\r
"objekat „{0}\\" ne postoji",\r
"Objekat „{0}\\" ne postoji na glavnom računaru.",\r
"Objekat \\"{0}\\" ne postoji u knjigovodstvu.",\r
"Objekat „{0}\\" ne postoji u programu (mjesto „{1}\\").",\r
"Objekat „{0}\\" ne postoji. Stavka je upisana bez objekta.",\r
"Objekat „{0}\\" radi samo po svojim smjenama",\r
"Objekat „{0}\\" već postoji.",\r
"Objekat „iz\\" i objekat „u\\" su obavezni.",\r
"Objekat (opciono)",\r
"Objekat (za smjene)",\r
"objekat {0}",\r
"Objekat {0}",\r
"Objekat / kasa",\r
"Objekat čija se sedmica potvrđuje nije izabran.",\r
"Objekat i iznos su obavezni.",\r
"Objekat ima {0} smjene. Smjena broj {1} ne postoji.",\r
"Objekat izvora i odredišta ne smiju biti isti.",\r
"objekat još nije stigao",\r
"objekat još nije stigao ({0})",\r
"Objekat koristi zajedničke smjene. Snimanjem dobija vlastito radno vrijeme.",\r
"Objekat ne postoji u ovoj firmi. Potrebno je izabrati objekat iz liste.",\r
"Objekat nema smjene. Potrebno je podesiti radno vrijeme objekta.",\r
"Objekat nema smjene. Smjene se podešavaju na kartici „Radno vrijeme objekta\\".",\r
"Objekat nije izabran",\r
"Objekat nije izabran. Lager se vodi po prodajnom objektu.",\r
"Objekat nije izabran. Objekti se dodaju u Podešavanjima.",\r
"objekat nije upisan",\r
"objekat radnika još nije stigao ({0})",\r
"Objekat se ne slaže: Menadžer šalje „{0}\\" (oznaka {1}), a pod tom oznakom je u Knjigovodstvu „{2}\\". Potrebno je provjeriti da li Menadžer radi sa ovom firmom, zatim pokrenuti „↻ ponovi\\".",\r
"objekat smjene još nije stigao ({0})",\r
"Objekat u kojem radnik radi — po njemu se slažu liste u rasporedu smjena. „Zamjena\\" = bez stalnog objekta, pokriva slobodne dane. Ne utiče na obračun plate.",\r
"Objekat u kojem radnik radi — po njemu se slažu liste u rasporedu smjena. Ne utiče na obračun plate.",\r
"Objekat u kojem radnik radi u tom periodu nije izabran.",\r
"Objekat za koji se pravi raspored nije izabran.",\r
"Objekat za otpis nije izabran.",\r
"Objekat: {0}",\r
"objekata sa svojim cijenama,",\r
"Objekti",\r
"MarketID IS NULL",\r
"objektu",\r
"MARLBORO",\r
"mart",\r
"Mart",\r
"marta",\r
"Marža",\r
"Marža (%) za ovaj sken. Kad dobavljač ima prethodnu kalkulaciju, obrada ipak uzima maržu sa nje.",\r
"marža {0} %",\r
"Marža {0} % je upisana na {1} kalkulacija ({2} stavki).{3}{4}{5}{6}{7} Kalkulacije su spremne za izradu (PDF / Excel) ili štampu.",\r
"Marža % na nabavnu",\r
"marža ispod 0 (prodaja ispod nabavne)",\r
"Marža iz postojećih podataka upisana za {0} artikala{1}",\r
"Marža je primijenjena. Prodajne cijene su preračunate.",\r
"Marža kalk.",\r
"Marža mora biti broj (npr. 25 ili 22,5).",\r
"Marža mora biti između {0} % i {1} %.",\r
"Marža nije promijenjena: {0}",\r
"Marža nije promijenjena. {0}",\r
"marža preko 200 %, potrebna provjera unosa",\r
"Marža primaoca %",\r
"Marža sad",\r
"Marža sada %",\r
"Marža se upisuje za svaku stavku posebno. Prodajna cijena se preračunava odmah po primjeni.",\r
"Marža skena",\r
"Marža stvarna",\r
"Marža za ovaj sken (sken sa greškom ide ponovo u obradu)",\r
"Marže po stavci —",\r
"Marže po stavci (cigare)",\r
"Marže po stavci su primijenjene. Prodajne cijene su preračunate.",\r
"Marže preuzete iz istorije:",\r
"maržu",\r
"Mast",\r
"Mast jestiva",\r
"Materijal",\r
"MATERIJAL",\r
"MATERIJAL I ROBA",\r
"MATERIJALA",\r
"Materijalna odgovornost za robu u magacinu; rad na računaru (prijem i izdavanje); po potrebi vozačka dozvola B.",\r
"Materijalno knjigovodstvo",\r
"matični",\r
"Matični broj",\r
"Matični broj: {0}",\r
"Matični objekat",\r
"Matični objekat je prvi; u drugom objektu radnik je zamjena.",\r
"Matični objekat ne postoji.",\r
"Max cijene CInMED",\r
"Max MP",\r
"Max MP sa PDV (€)",\r
"Max VP",\r
"Max VP bez PDV (€)",\r
"Max. zaliha",\r
"ME + PIB",\r
"ME{0}",\r
"Med",\r
"Mekušci",\r
"menadzer",\r
"Menadžer",\r
"Menadžer · {0}",\r
"Menadžer „{0}\\" se isključuje na serveru i odmah gubi vezu. Nastaviti?",\r
"Menadžer (telefon ili računar vlasnika, poslovođe) dobija podatke firme iz Knjigovodstva: objekte, dobavljače, artikle, primljenu robu, pazare, radnike i smjene. Povezuje se",\r
"Menadžer je zaključio popis {0}; popis je spreman za zaključenje. Nakon pregleda popisne liste (i međuzbira po uređaju) zaključuje se po nabavnoj ili prodajnoj cijeni.",\r
"Menadžer je zapamtio barkod za artikal koji nije nađen u šifarniku. Barkod se povezuje sa artiklom izborom u redu ili ostaje kako jeste.",\r
"Menadžer maloprodaje",\r
"Menadžer predlaže",\r
"Menadžer se povezuje sa računara knjigovodstva (režim obrade: glavni ili admin).",\r
"Menadžer se povezuje samo sa računara knjigovodstva (režim obrade).",\r
"Menadžer uređaja firme: {0} · kodova koji čekaju uparivanje: {1} · učitano {2}",\r
"Menadžer uređaji firme",\r
"Menadžer uređaji sa servera nijesu učitani: {0}",\r
"Menadžer zaključio — spreman za zaključenje",\r
"Menadžer zaključio {0}",\r
"Meni",\r
"Meni još nije objavljen ni sa jedne kase.",\r
"Meni još nije objavljen. QR meni se uključuje na glavnoj kasi objekta.",\r
"Meni za goste na stolovima: nazivi i opisi na 8 jezika, alergeni, slike, grupe, sopstveni domen, adrese stolova",\r
"Meni: {0} {1}, {2} artikala",\r
"Menstrualni proizvodi",\r
"Meso i riba",\r
"Meso i svježa riba",\r
"Meso svježe",\r
"Metod:",\r
"Mijenja maržu na svim kalkulacijama izbora (osim cigara, zaključanog perioda i otpisa)",\r
"mijenja se (",\r
"Mijenja se broj dokumenta:",\r
"Mijenja se broj kalkulacije:",\r
"Mijenja se propisana MPC cigareta „{0}\\": {1} → {2}.\\n\\nCijenu određuje proizvođač ili uvoznik (Zakon o akcizama, čl. 50). Potvrda samo ako je objavljena nova cijena.\\n\\nPromijeniti propisanu cijenu?",\r
"Mijenjaju se knjige ovih nezaključanih mjeseci: {0}. Ako je neki od njih već predat, PR-PDV i knjige se više neće slagati sa predatim.",\r
"mijenjano poslije izvoza",\r
"Mijenjano poslije izvoza",\r
"mikro",\r
"MIKRO",\r
"milostDana: 0–90.",\r
"MIME-Version: 1.0",\r
"min",\r
"min pristup nije dozvoljen. Odgovor se bilježi u dnevnik programa.",\r
"Min. zaliha",\r
"Min. zaliha izmijenjena.",\r
"Minimalna neto zarada (EUR) — upozorenje",\r
"Minimalna neto zarada za VI nivo kvalifikacije i više (EUR) — upozorenje",\r
"minmax(46px, 1fr)",\r
"minmax(92px, max-content) repeat({0}, {1})",\r
"Minuli rad",\r
"Minuli rad — šema po periodima",\r
"Minuli rad od {0}: {1}",\r
"Minuli rad od {0}: {1}. Otvoreni obračuni se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Minuli rad u ovom obračunu:",\r
"Minuli rad, razredi: % po godini staža do granice 1",\r
"Minuli rad, razredi: % po godini staža između granice 1 i 2",\r
"Minuli rad, razredi: % po godini staža preko granice 2",\r
"Minuli rad, razredi: granica 1 (godina staža)",\r
"Minuli rad, razredi: granica 2 (godina staža)",\r
"Minuli rad, šema „ravno\\": % po svakoj godini staža",\r
"Minus kalkulacija (knjiženje otpisa)",\r
"Minus kalkulacija (otpis)",\r
"minus kalkulacije otpisa ({0})",\r
"mj.; izvršenje u",\r
"mj.; teža:",\r
"Mjera",\r
"Mjera nije izabrana.",\r
"Mjera nije izabrana. Izbor mjere je obavezan prije donošenja odluke.",\r
"mjesec",\r
"Mjesec",\r
"MJESEC",\r
"Mjesec {0} je zaključan prije uvođenja osnova za 0 %. Sav promet 0 % je u polju 14.",\r
"Mjesec {0} je zaključan. Podjela prometa 0 % je iz snimka od {1}",\r
"mjesec {0}/{1} je zaključan; upis nije moguć",\r
"mjesec {0}/{1} je zaključan; upis pazara nije moguć",\r
"Mjesec {0}/{1} je zaključan. Nalozi se ne mijenjaju.",\r
"Mjesec {0}/{1} je zaključan. Premještanje naloga u taj mjesec nije moguće.",\r
"Mjesec {0}/{1} je zaključan. Unos nije moguć.",\r
"Mjesec {0}/{1} se ne može zaključati: {2}. Spisak: Obrasci → PR-PDV. Podjela po stopama upisuje se sa Z-izvještaja (Unos pazara).",\r
"Mjesec isplate",\r
"Mjesec koji je knjigovođa odobrio se zaključava; izmjene više nijesu moguće, a zakašnjele fakture idu u tekući period.",\r
"Mjesec koji se zaključava",\r
"mjesec naloga je ovdje zaključan",\r
"mjesec naloga je zaključan",\r
"Mjesec nije ispravan (oblik GGGG-MM).",\r
"Mjesec nije ispravan.",\r
"mjesec nije zaključen",\r
"Mjesec od kog važi datum prijema nije ispravan (očekuje se GGGG-MM).",\r
"Mjesec otpisa ({0}) je zaključan. Za knjiženje je potreban datum otpisa u otvorenom mjesecu ili otključavanje mjeseca uz saglasnost knjigovođe.",\r
"Mjesec po objektu (napredno)",\r
"mjesec u knjigama",\r
"mjesec zaključan — prijava spremna",\r
"Mjesec zbirnog naloga rashoda",\r
"mjeseca isplate kao red sa šifrom",\r
"mjeseca od pokretanja (",\r
"mjeseca od saznanja) →",\r
"mjeseci",\r
"Mjeseci (",\r
"mjeseci → prestanak radnog odnosa.",\r
"Mjeseci nijesu proknjiženi: {0}.",\r
"Mjeseci sa dokumentima koji nijesu proknjiženi:",\r
"mjesecima",\r
"Mjesečna zakupnina (EUR) *",\r
"Mjesečna zakupnina {0} EUR ulazi u obračun i IOPPD svakog mjeseca dok ugovor važi. Godišnji ili jednokratni (unaprijed plaćen) zakup upisuje se ovdje kao 0, a isplaćeni iznos se unosi u mjesecu isplate (klik na zakupodavca u obračunu tog mjeseca).",\r
"Mjesečni izvještaj do (dan u mjesecu)",\r
"Mjesečni izvještaj NLB-a za lične račune (fizičko lice), a ne izvod računa firme. Izvještaj se ne uvozi. Tuđi račun se u Pošti označava sa „nije naš\\".",\r
"Mjesečni izvještaj o boravišnoj taksi",\r
"Mjesečni izvještaj o boravišnoj taksi za {0} predaje se do {1}",\r
"Mjesečni obračun",\r
"Mjesečni obračun PDV: obaveza za uplatu (razlika)",\r
"Mjesečni obračun PDV: preplata / potraživanje",\r
"Mjesečni obračun zarada po propisima CG · radnici · zakup i ugovori o djelu · IOPPD prijava i listići",\r
"Mjesečni raspored je predlog. Sedmica postaje važeća kad se potvrdi (✔). Tada je zaključana i njeni sati ulaze u obračun plata po smjenama.",\r
"Mjesečnih arhiva",\r
"Mjesečno",\r
"mjesečno (zbir u mjesecu; 0 = bez limita)",\r
"Mjesečno: zakupnina (bruto)",\r
"mjesecu",\r
"mjesecu, a primljeni (zavedeni) u",\r
"mjesecu, a zavedeni poslije zaključavanja, pa ulaze u knjigu tekućeg mjeseca (zaključana knjiga se ne mijenja). Spisak služi za pregled.",\r
"mješovito",\r
"mjesta",\r
"Mjesta „{0}\\" i „{1}\\" su vezana za isti objekat.",\r
"Mjesta i stolovi",\r
"Mjesta su povezana. {0}.",\r
"mjesto",\r
"Mjesto",\r
"Mjesto isporuke",\r
"Mjesto izdavanja vize",\r
"Mjesto nema svoju cijenu; važi opšta cijena.",\r
"Mjesto nema svoju cijenu.",\r
"mjesto nije povezano sa objektom — cijene čekaju",\r
"Mjesto rada (objekat / grad)",\r
"Mjesto rada je {0}. Djelatnost Poslodavca (trgovina na malo) obavlja se u više maloprodajnih objekata, pa Zaposleni može biti raspoređen na rad u drugi objekat Poslodavca na području iste opštine odnosno na udaljenosti manjoj od 60 km, uz organizovan prevoz ili naknadu troškova prevoza, bez promjene ostalih uslova rada ({1}); privremeni raspored po hitnoj potrebi procesa rada vrši se pisanim nalogom najduže 30 dana u 12 mjeseci ({2}). Rad kao pomoćni radnik u drugom objektu evidentira se u rasporedu smjena i iskazuje na obračunu zarade.",\r
"mjesto rođenja",\r
"Mjesto rođenja",\r
"Mjesto ulaska",\r
"ML",\r
"mlađi od 18 godina ({0})",\r
"Mlađi od ovoliko godina ne plaćaju taksu.",\r
"Mlađi od ovoliko godina plaćaju umanjen iznos.",\r
"Mlijeko i mliječni proizvodi",\r
"Mlijeko i proizvodi",\r
"mlijeko; mleko; jogurt; kiselo mlijeko; kefir; bijeli sir; mladi sir",\r
"MNE",\r
"model {0}, poziv na broj odobrenja {1} ({2})",\r
"modul Plate: bruto + doprinosi poslodavca + neoporeziva primanja",\r
"Moduli: bar jedan od {0}.",\r
"moguć dupli unos: {0}",\r
"Moguća dupla plaćanja:",\r
"Mogući dupli unos:\\n\\n{0}\\n\\nSnimiti pazar?\\n\\nU redu: pazar se snima.\\nOdustani: bez snimanja (isti dnevni izvještaj).",\r
"Mogući dupli unosi",\r
"Mogući duplikat: {0}",\r
"Moje izmjene danas",\r
"Moji zahtjevi",\r
"Mojkovac",\r
"Molimo da potvrdite saglasnost sa iskazanim stanjem ili dostavite primjedbe u roku od 8 dana. Nepotvrđen IOS smatra se prihvaćenim.",\r
"Molimo da potvrdite saglasnost sa iskazanim stanjem ili dostavite Vašu karticu sa primjedbama u roku od 8 dana.",\r
"MONTE CARLO",\r
"MONTENEGRO",\r
"MOODS",\r
"Motel",\r
"motorn; masaz; suncanj; kosu; tijelo; etericn",\r
"može da čeka",\r
"Može se odbiti",\r
"Može se promijeniti kasnije (Poreske knjige).",\r
"MP",\r
"MP iz VP →",\r
"MPC",\r
"MPC (sa PDV)",\r
"MPC pošiljaoca",\r
"MPC primaoca",\r
"MPC sa PDV",\r
"MRS/MSFI u skladu sa Zakonom o računovodstvu („Sl. list CG\\" 84/25) i Pravilnikom o kontnom okviru („Sl. list CG\\" 11/20)",\r
"MSFI za MSP (čl. 26 st. 2 Zakona o računovodstvu, primjena od 01.01.2027.)",\r
"MURATTI",\r
"muški",\r
"MUSTANG",\r
"n.Broj",\r
"n.Status<>'storniran' AND n.Datum<=?",\r
"n.Vrsta IN ('PAZ','PS')",\r
"n.Vrsta='PAZ' AND n.Datum>?",\r
"n.Vrsta='PAZ' AND n.Datum>=?",\r
"na {0} {1}",\r
"Na {0} {1} se ne knjiži. Potrebno je izabrati račun.",\r
"Na {0} se ne knjiži (klasa/grupa). Red je preskočen.",\r
"Na Androidu se ažuriranje instalira preuzimanjem nove verzije.",\r
"Na Androidu vraćanje prethodne verzije nije moguće bez brisanja podataka, jer sistem ne dozvoljava instalaciju starije verzije preko novije. Ispravka se objavljuje kao nova verzija.",\r
"na ćeliju: prazno → I → II → prazno (Shift+klik odmah briše). Nedjelje su narandžaste — tako se na brzinu vidi i označi ko je radio nedjeljom (kolona „Ned\\"). Ovako upisane smjene su ručne (program ih ne gazi). Radnika koji ovdje nema (zamjena, drugi objekat) dodaj gore.",\r
"Na dan",\r
"na dan {0}",\r
"Na dan {0}",\r
"Na dan {0} je već praznik „{1}\\".",\r
"Na dan {0} je već upisan praznik.",\r
"na dan 31.12.{0}.",\r
"na dan 31.12.{0}. · u EUR",\r
"Na dan zaključenja ugovora pravo Zaposlenog iznosi {0} radnih dana godišnje{1}.",\r
"Na fakturi {n} artikala nema barkod.",\r
"Na fiskalnim računima",\r
"Na glavnoj kasi: Podešavanja → QR meni → Adresa u QR kodu: „Sopstveni domen\\", pa odštampajte kodove stolova ponovo.",\r
"Na glavnom računaru nema uvoza za poništavanje.",\r
"Na iPhoneu tekst sa slike čita sam telefon:",\r
"Na izabrani dan nema robe na reversu.",\r
"na izvodu nema računa primaoca",\r
"na kasi",\r
"Na kasi",\r
"Na kasu je poslato cijena: {0}.",\r
"Na koliko plaćenih (N)",\r
"na kontu ima knjiženja",\r
"Na kontu postoje knjiženja. Brisanje nije moguće; konto se može samo ugasiti.",\r
"Na korišćenje",\r
"Na kraju smjene pravi presjek kase i predaje pazar uz dnevni izvještaj.",\r
"Na listi",\r
"Na neodređeno vrijeme",\r
"Na oba termina je isti radnik. Razmjena nije moguća.",\r
"na obradu čeka: {0}",\r
"Na određeno do (prazno = neodređeno)",\r
"Na određeno vrijeme",\r
"Na osnovu člana 7 Zakona o računovodstvu („Sl. list CG\\" br. 84/25), a prema podacima na dan 31.12.{0}. godine:",\r
"na ostatak mjeseca {0} {1}",\r
"na ovom računaru",\r
"na ovom računaru i preuzima priloge: izvode banaka, kartice dobavljača, račune i skenove.",\r
"Na ovom uređaju dokument se šalje kroz sistemsko dijeljenje. SMTP server se koristi u Windows programu.",\r
"Na ovom uređaju nema nijedne firme. Firma se pravi unosom naziva nove firme ili uvozom postojeće baze.",\r
"Na ovom uređaju nije pronađena kamera.",\r
"Na ovom uređaju već postoji baza „{0}\\" sa drugim PIB-om ({1}). Baza nije mijenjana. Potrebno je preimenovati tu bazu ili se obratiti podršci.",\r
"Na ovom uređaju već postoji veza sa serverom. Ako je ova firma u",\r
"Na ovu fakturu još nije vezana nijedna uplata.",\r
"Na probu",\r
"Na računaru u kancelariji:",\r
"na recept",\r
"Na reversu",\r
"Na reversu nema robe kod primaoca.",\r
"Na rješenju piše",\r
"na serveru ima {0} smještaja",\r
"Na serveru nema prodajnih objekata ove firme. Upisuju se samo prazna polja podataka firme.",\r
"Na servis",\r
"Na sobu",\r
"Na šta se primjenjuje procenat: promet objekta u mjesecu (pazar bez PDV) ili nabavka knjižena na taj objekat",\r
"Na stanici, aerodromu ili u luci",\r
"na stavku se obračunava upisani procenat popusta",\r
"na svakih N plaćenih komada kupac dobija upisani broj komada gratis (2+1: N = 2, vrijednost = 1)",\r
"na vezi",\r
"Na vezi · ažurno · {0}",\r
"Na vezi · ažurno{0}",\r
"Nab.",\r
"Nab. cijena",\r
"Nab. cijena bez PDV",\r
"nab. kol.",\r
"Nab. vrijednost",\r
"Nabavka",\r
"Nabavka · OA · PD",\r
"Nabavka · stavke označene kao TROŠAK",\r
"Nabavka (neto)",\r
"Nabavka i troškovi",\r
"Nabavka i troškovi · OA · PD",\r
"nabavka knjižena na objekat",\r
"Nabavka materijala",\r
"Nabavka OS",\r
"Nabavka OS / trošak",\r
"Nabavka robe",\r
"Nabavka robe (bez PDV)",\r
"nabavke objekta u mjesecu ({0} EUR)",\r
"nabavke označene „bez prava na odbitak\\" + ručni dodatak",\r
"Nabavljeno (kom)",\r
"nabavna",\r
"Nabavna",\r
"Nabavna (bez PDV)",\r
"Nabavna bez PDV",\r
"Nabavna cijena",\r
"nabavna cijena 0, RUC je cijela prodajna cijena",\r
"nabavna cijena je negativna",\r
"Nabavna cijena ne može biti negativna.",\r
"Nabavna cijena ulaza: fakturna bez PDV umanjena za rabat, uvećana za raspoređene zavisne troškove.",\r
"Nabavna vr.",\r
"Nabavna vrijednost",\r
"nabavna vrijednost (EUR)",\r
"Nabavna vrijednost prodate robe",\r
"NABAVNA VRIJEDNOST PRODATE ROBE",\r
"Nabavna vrijednost prodate robe (COGS)",\r
"Nabavna vrijednost prodate robe (razduženje)",\r
"Nabavna vrijednost prodate robe u maloprodaji",\r
"Nabavna vrijednost prodate robe u veleprodaji",\r
"Nabavna vrijednost prodatih nekretnina pribavljenih radi prodaje",\r
"Nabavna vrijednost prodatog",\r
"Nabavna vrijednost prodatog = prodata količina × nabavna cijena posljednjeg ulaza artikla u objekat do dana prodaje (kalkulacija, prijem prenosom, početno stanje).",\r
"Nabavna vrijednost prodatog = prodata količina × pokretna prosječna ponderisana nabavna cijena artikla u objektu na dan prodaje (svaki ulaz — kalkulacija, prijem prenosom, početno stanje — mijenja prosjek srazmjerno zatečenoj količini; izlazi ga ne mijenjaju).",\r
"Nabavna/jed",\r
"Nacin",\r
"Način",\r
"Način iskazivanja takse na računu odjave.",\r
"Način limita (ZPDFL čl. 5a)",\r
"Način plaćanja",\r
"Način plaćanja „{0}\\" daje gotovinski račun. Gotovinska i kartična prodaja ide kroz kasu (ona prijavljuje depozit). Faktura se izdaje samo za bezgotovinsko plaćanje: {1}.",\r
"Način plaćanja „{0}\\" nije dozvoljen na fakturi: gotovinska i kartična prodaja ide kroz kasu. Dozvoljeni su bezgotovinski načini ({1}).",\r
"Način poslovanja",\r
"Način povrata",\r
"Način prijave",\r
"Nacrt — izvještaj nije zaključen.",\r
"Nacrt fakture {0} je napravljen (Izdaj fakturu / ponudu).",\r
"Nacrt fakture za izabrane otpremnice istog kupca i objekta (nefakturisane količine, iste cijene).",\r
"Nacrt fakture za robu kod primaoca, po MPC sa reversa. Faktura ne razdužuje lager drugi put.",\r
"Nacrt je obrisan.",\r
"nacrt poruke",\r
"Nacrt poruke sa prilogom je otvoren u programu za poštu.",\r
"nacrta čeka odobrenje",\r
"nacrti",\r
"Nađeno {0} Z-izvještaja: uvezeno {1}, već postojalo {2}.",\r
"Nađeno {0} zapisa iz paketa drugih firmi ({1}) u ovoj bazi. Spisak je ispod.",\r
"Nadgrupa",\r
"Nadgrupa nije nađena.",\r
"Nađi",\r
"Nađi artikal po nazivu",\r
"Nadredjeno",\r
"Nadzire finansijsko poslovanje, naplatu i plaćanja; odobrava nabavke i investicije.",\r
"Nagradnih dana",\r
"Najbliže moguće: {0} EUR (cilj {1}).",\r
"Najduže kasni (dana)",\r
"Najmanje jedna stopa mora ostati uključena.",\r
"najmanje noći",\r
"Najmanje noći",\r
"Najniža osnovica za doprinose — minimalna bruto zarada (EUR)",\r
"Najniža u 30 dana",\r
"najnovije",\r
"najstarije",\r
"Najveća cijena",\r
"Najveća obustava od neta (%) — čl. 106 ZOR (1/3; izdržavanje do 50)",\r
"Najveća zaliha",\r
"Najveća zaliha ne može biti manja od nule.",\r
"Najveće odobrenje na ovoj fakturi je {0} EUR.",\r
"Najveće odobrenje po stopi {0} % je {1} EUR.",\r
"najveći broj u redu",\r
"Najveći dio baze je sirovi odgovor Poreske uprave koji se čuva uz svaku fakturu (za reviziju). Na telefonu nije potreban, pa se za starije fakture može obrisati;",\r
"Najveći dug po sobi",\r
"Najveći dug po sobi (EUR)",\r
"Najveći odbitak je {0} EUR.",\r
"Najviša cijena",\r
"Najviša cijena je preuzeta iz izvještaja CInMED.",\r
"Najviša maloprodajna cijena je {0}; cijena na kasama je {1}.",\r
"Najviša MP",\r
"Najviša MP ≈ VP ×",\r
"Najviša MP ≈ VP × {0} × {1}",\r
"Najviša VP",\r
"Najviše sati sedmično",\r
"Najviše ukupno",\r
"Najviše uzastopnih dana",\r
"Naknada",\r
"NAKNADA",\r
"Naknada (bruto)",\r
"Naknada (EUR) *",\r
"Naknada banke",\r
"Naknada je upisana. Redovan rad: {0} h.{1}",\r
"Naknada na računu",\r
"Naknada naplate",\r
"Naknada po receptu",\r
"Naknada za bolovanje — osnovica:",\r
"Naknada za novorođeno dijete zaposlenog (do 1.000 EUR)",\r
"Naknada za odvojeni život od porodice (do 100 EUR mjesečno)",\r
"Naknada za praznik",\r
"Naknada za praznik (neradni dan)",\r
"NAKNADE",\r
"Naknade banke",\r
"Naknade troškova na službenom putu",\r
"Naknade za izdate licence i odobrenja",\r
"Naknadni popust (rabat, bonus)",\r
"Naknadno proknjiženi računi (raniji mjesec)",\r
"Naknadno vraćen porez na dodatu vrijednost kupcima - stranim državljanima",\r
"Nalaz je snimljen ({0} spornih stavki). Prikazuje se u Dobavljačima, na kartici dobavljača i pri unosu plaćanja do označavanja kao riješenog.",\r
"Nalaz je snimljen (bez spornih stavki).",\r
"Nalijepi presjek",\r
"Nalijepljen tekst",\r
"Nalog",\r
"NALOG",\r
"Nalog „{0}\\"",\r
"Nalog „{0}\\" nije podržan u ovoj verziji programa ({1} {2}).",\r
"Nalog „{0}\\" sa ovim parametrima traži potpis izdavača. Nalog nije izvršen.",\r
"Nalog „poruka\\" nema tekst.",\r
"Nalog {0} · {1}",\r
"Nalog {0} nije izvršen: {1}. {2}",\r
"Nalog {0} od {1}: {2}",\r
"nalog {0}: iznosi nisu jasno pročitani",\r
"nalog {0}: nema datuma",\r
"Nalog čeka sljedeću razmjenu ({0}).",\r
"Nalog glavnom računaru šalje se sa računara u ulozi administratora.",\r
"Nalog je istekao (stariji od {0} dana).",\r
"Nalog je izmijenjen.",\r
"Nalog je obrisan.",\r
"nalog je otkazan.",\r
"nalog je poslat — čeka glavni računar",\r
"nalog je poslat ponovo.",\r
"Nalog je predat razmjeni.",\r
"nalog je u zaključanom mjesecu",\r
"Nalog kuhinji / šanku za ono što još nije poslato",\r
"Nalog ne nosi fajl baze artikala.",\r
"Nalog ne nosi izbor iz pregleda.",\r
"Nalog ne nosi prodajno mjesto.",\r
"Nalog ne nosi sažetak pregleda; poređenje sa pregledom na računaru pošiljaoca nije moguće.",\r
"Nalog ne postoji.",\r
"Nalog nema ispravan datum.",\r
"Nalog nema stavki.",\r
"Nalog nije uravnotežen: duguje {0} ≠ potražuje {1} (razlika {2}).",\r
"Nalog sa ovim potpisom je već izvršen na ovom uređaju (ponovljen potpis) — nije izvršen ponovo.",\r
"Nalog sa računara administratora",\r
"Nalog traži reset PIN-a za ulogu „{0}\\", a ovaj program ima samo PIN uređaja na nivou admina/vlasnika — uloga ne odgovara, PIN nije dirnut.",\r
"Nalog u GK",\r
"Nalog već postoji u zaključanom mjesecu {0}/{1}. Premještanje nije moguće.",\r
"Nalog za e-banking: šifra 128, račun 820-15111-24, model 18, poziv na broj PIB-šifra opštine, iznos iz polja 28",\r
"Nalog za knjiženje",\r
"NALOG ZA KNJIŽENJE {0}",\r
"Nalog za PDV: {0}",\r
"Nalog za uklanjanje veze mjesta „{0}\\" je upisan.{1}",\r
"Naloge je potrebno ponovo proknjižiti ručno (Finansije → Proknjiži mjesec): {0}",\r
"Naloge u Finansijama potrebno je ponovo proknjižiti ({0}).",\r
"Nalozi",\r
"NALOZI",\r
"Nalozi poslati glavnom računaru",\r
"Nalozi sa računara administratora",\r
"Nalozi sa računara administratora: izvršeno {0}{1}.",\r
"Nalozi su upisani ({0}).",\r
"Nalozi su upisani ({0}). Povezivanje izvršava glavni računar.{1}",\r
"Nalozi u Finansijama su ponovo proknjiženi za {0}.",\r
"Nalozi u GK",\r
"Nalozi u mjesecu kod kojih duguje ≠ potražuje",\r
"Nalozi za knjiženje iz dokumenata · kartica konta · bruto bilans · dnevnik · kontni plan (CG, Pravilnik 11/20)",\r
"nalozi, glavna knjiga, bruto bilans",\r
"nalozi: izvršeno {0}, greške {1}, odbijen potpis {2}",\r
"nap",\r
"NAP",\r
"Naplaćen zakup",\r
"Naplaćena faktura",\r
"Naplaćena otpisana potraživanja",\r
"Naplaćena sumnjiva potraživanja koja ranije nijesu priznata kao rashod",\r
"naplaćeno",\r
"Naplaćeno",\r
"Naplaćuje robu na fiskalnoj kasi gotovinom i karticama i izdaje fiskalne račune.",\r
"Naplata",\r
"Naplata — soba {0}",\r
"Naplata „Na sobu\\"",\r
"Naplata (izvod banke)",\r
"Naplata je oslobođena.",\r
"Naplata je u toku na kasi {0}.",\r
"Naplata je upisana.",\r
"Naplata od",\r
"Naplata od kupaca",\r
"Naplata u toku na kasi {0}",\r
"Naplati",\r
"Naplati i izdaj račun",\r
"Naplati sve noći",\r
"Napomena",\r
"Napomena (čl. 7–11)",\r
"Napomena / poziv na broj",\r
"Napomena / razlog (neobavezno)",\r
"Napomena broj",\r
"Napomena je snimljena.",\r
"Napomena mora biti tekst (može biti prazna).",\r
"Napomena uz knjige za",\r
"Napomena za internu evidenciju (ne štampa se)",\r
"Napomena: {0}",\r
"NAPOMENA: račun nije fiskalizovan — nema IKOF/JIKR ni QR kod.",\r
"Napomena: u {0}. godini u nizu rednih brojeva dokumenata (kalkulacija) nisu dodijeljeni brojevi {1} (ukupno {2}). Tim brojevima ne odgovara nijedan dokument — nijedna isprava nije izostavljena iz knjige. Brojevi već izdatih kalkulacija nisu naknadno mijenjani, da bi se sačuvao vremenski slijed unosa (Zakon o računovodstvu, čl. 13).",\r
"Napomene",\r
"NAPOMENE",\r
"Napomene su snimljene.",\r
"NAPOMENE UZ FINANSIJSKE ISKAZE ZA {0}. GODINU — {1}",\r
"Napravi artikal",\r
"Napravi kalkulaciju",\r
"Napravi kod",\r
"Napravi novi kod",\r
"Napravi objekat i sobe",\r
"Napravi rješenje",\r
"Napravio",\r
"Napraviti nacrt fakture za robu kod primaoca?",\r
"Napraviti predlog rasporeda za {0} {1} za sve objekte?\\n\\n• smjene se rotiraju sedmično (nastavlja se od prethodne sedmice)\\n• svako ima jedan slobodan dan u sedmici (stalni slobodan dan sa kartice radnika se poštuje)\\n• radnici bez objekta su zamjene za slobodne dane\\n\\nRučno uneseni termini i potvrđene sedmice se ne diraju; prethodni automatski predlog mjeseca se zamjenjuje.",\r
"Napravljen",\r
"Napravljena je",\r
"Napravljena: {0}",\r
"napravljeno",\r
"Napravljeno dokumenata otpisa: {0}.",\r
"Napravljeno kalkulacija iz skenova: {0}{1}.",\r
"Napredno",\r
"Naprijed ›",\r
"Napusti izmjene",\r
"Naredba o načinu uplate javnih prihoda, čl. 4: model 18; poziv na broj odobrenja = PIB-šifra opštine sjedišta; poziv na broj zaduženja = period i broj zaposlenih",\r
"naredni dan",\r
"Narednih 30 dana · crveno = isteklo/≤7 dana. Rok se unosi na stavci u „Kalkulacije i fakture\\".",\r
"Narudžba {0} — {1} ({2})",\r
"Narudžbe",\r
"narudžbi kasni sa isporukom",\r
"Naš dokument",\r
"naš dug — bez partnerskih objekata",\r
"NAŠ DUG — bez partnerskih objekata",\r
"Naš objekat",\r
"naš račun",\r
"Naš račun",\r
"naše fakture i predfakture",\r
"naši",\r
"naših",\r
"Nasilno, uvredljivo ili nedolično ponašanje prema kupcima, kolegama ili pretpostavljenima",\r
"Naslov",\r
"Naslov / prilog",\r
"naSobu.limit",\r
"naSobu.potpis",\r
"naSobu.ukljuceno",\r
"Nastavi brojanje",\r
"Nastavi rad",\r
"Naučeno",\r
"nav",\r
"Nazad",\r
"naziv",\r
"Naziv",\r
"Naziv (ime) kupca je obavezan.",\r
"Naziv (klik za preimenovanje)",\r
"Naziv (neobavezno)",\r
"Naziv (za koga je uređaj)",\r
"Naziv akcije (vidi se na kasi)",\r
"Naziv akcije je obavezan.",\r
"Naziv artikla",\r
"Naziv artikla je obavezan.",\r
"naziv artikla…",\r
"Naziv firme",\r
"Naziv firme je obavezan.",\r
"Naziv firme sa servera nije upotrebljiv kao ime baze.",\r
"Naziv grupe",\r
"Naziv grupe je obavezan.",\r
"Naziv grupe po jezicima",\r
"Naziv i opis po jezicima (* obavezno; prazno = osnovni naziv / engleski)",\r
"Naziv i sjedište dobavljača",\r
"Naziv i sjedište kupca",\r
"Naziv i vrijednost su obavezni.",\r
"naziv ili šifra",\r
"Naziv je duži od 120 znakova.",\r
"Naziv je obavezan.",\r
"Naziv kase",\r
"Naziv kase je duži od 120 znakova.",\r
"Naziv kase je obavezan.",\r
"Naziv kioska",\r
"Naziv kioska je duži od 120 znakova.",\r
"Naziv kioska je obavezan.",\r
"Naziv konta",\r
"Naziv konta je obavezan.",\r
"Naziv objekta",\r
"Naziv objekta je obavezan.",\r
"Naziv nove firme",\r
"Naziv nove vrste troška:",\r
"Naziv novog artikla",\r
"Naziv novog objekta",\r
"Naziv objekta, opština i broj soba po vrsti. Sobe se kasnije mijenjaju u Podešavanjima.",\r
"Naziv obustave",\r
"Naziv ovog uređaja",\r
"Naziv perioda",\r
"Naziv pravila je obavezan.",\r
"Naziv praznika",\r
"Naziv praznika (npr. Nova godina, Dan nezavisnosti):",\r
"Naziv praznika je obavezan.",\r
"Naziv praznika je promijenjen.",\r
"Naziv praznika u odluci",\r
"Naziv radnog mjesta *",\r
"Naziv radnog mjesta je obavezan.",\r
"Naziv se ponavlja među novim artiklima u fajlu.",\r
"Naziv sredstva",\r
"Naziv sredstva/troška",\r
"Naziv stranog lica je obavezan.",\r
"Naziv uređaja (vidi se na skenovima)",\r
"naziv usluge ili robe",\r
"naziv, šifra ili barkod",\r
"naziv, šifra, barkod",\r
"Nazivi radnih mjesta upotrijebljeni u muškom rodu odnose se jednako na lica ženskog i muškog pola (kasir/kasirka, magacioner/magacionerka).",\r
"ne",\r
"Ne",\r
"NE",\r
"Ne (bivši)",\r
"ne javlja se",\r
"Ne može se odbiti",\r
"ne ovjerava se kod notara",\r
"Ne podleže PDV",\r
"ne podliježe PDV-u",\r
"ne postoji (obrisan)",\r
"ne prijavljuje se",\r
"Ne prikazuj na meniju za goste (kasa ga i dalje prodaje)",\r
"ne računa ovdje. Porez na dobit (iz glavne knjige):",\r
"ne radi",\r
"ne radi (sezonski zatvoren)",\r
"ne raspoređuje se u smjene",\r
"ne raspoređuje se u smjene ({0}) — oznaka je na kartici radnika (Plate → Radnici)",\r
"Ne raspoređuje se u smjene (kancelarija). Promjena: kartica radnika → „ne raspoređuje se u smjene\\".",\r
"ne šalje se kasama",\r
"Ne ulazi u PR PDV-2.",\r
"ne uvozi se (greška, dupli, zaključan mjesec)",\r
"neaktivan",\r
"neaktivan objekat",\r
"Neaktivni (",\r
"neaktivno",\r
"ned",\r
"Ned",\r
"nedjelja",\r
"Nedjelja",\r
"NEDJELJA · objekat",\r
"Nedjelja (dana)",\r
"Nedjelja (sati)",\r
"nedjelja u mjesecu · ukupno",\r
"Nedolazak dan poslije dolaska u (sati)",\r
"Nedolazak: čas od 0 do 23",\r
"nedolazak.doSati",\r
"Nedostaje",\r
"Nedostaje datum, objekat ili radnik.",\r
"Nedostaje datum, objekat, smjena ili radnik.",\r
"nedostaje marža",\r
"Nedostaje marža: sken iz Menadžera je bez marže, dobavljač nema prethodnih kalkulacija, a „Podrazumijevana marža za skenove iz Menadžera\\" (Podešavanja → Uređaj) nije upisana. Nakon upisa marže (dugme „Marža\\") sken ponovo ide u obradu.",\r
"Nedostaje: {0}",\r
"Nedostaje: {0}.",\r
"Nedostaju",\r
"Nedovršena proizvodnja",\r
"NEDOVRŠENA PROIZVODNJA",\r
"Nedovršene usluge",\r
"Negativne kursne razlike",\r
"Negativno početno stanje (dobavljač duguje firmi ili pretplata iz ranijih godina) umanjuje otvorene fakture kao knjižna nota.",\r
"Neiskorišćeni kodovi za kasu {0} prestaju da važe. Nastaviti?",\r
"Neiskorišćeni odmor (radnih dana)",\r
"Neispravan broj.",\r
"Neispravan datum knjiženja.",\r
"Neispravan datum otuđenja.",\r
"Neispravan mjesec.",\r
"Neispravna adresa: {0}",\r
"Neispravna firma ili godina za arhivu.",\r
"Neispravna godina.",\r
"Neispravna oznaka verzije „{0}\\" — ažuriranje je odbijeno.",\r
"Neispravno ime firme „{0}\\".",\r
"Neispravno preusmjeravanje.",\r
"Neizdavanje fiskalnog računa ili naplata mimo kase",\r
"Nejasno {0}: {1}.",\r
"NEKRETNINE, POSTROJENJA, OPREMA I BIOLOŠKA SREDSTVA",\r
"Nekretnine, postrojenja, oprema i biološka sredstva u pripremi",\r
"nema",\r
"Nema akcija.",\r
"Nema aktivnih objekata. Objekti se otvaraju u Podešavanja → Objekti.",\r
"Nema aktivnih radnika za raspoređivanje.",\r
"Nema aktivnih radnika.",\r
"Nema aktivnih radnika. Radnici se unose na kartici „Radnici\\".",\r
"Nema aktivnih radnika. Unos: „Novi radnik\\".",\r
"Nema artikala bez barkoda. Artikal se traži po nazivu.",\r
"Nema artikala sa pogrešnim kontrolnim brojem.",\r
"Nema artikala u popisima ni kretanja u periodu.",\r
"Nema artikala za ovaj izbor.",\r
"Nema artikla {0}",\r
"Nema artikla kase za tu pretragu.",\r
"Nema artikla za „",\r
"Nema artikla za taj prikaz.",\r
"Nema artikla za tu pretragu.",\r
"Nema artikla.",\r
"Nema avansa u periodu.",\r
"Nema avansnih računa.",\r
"Nema carinskih deklaracija u periodu.",\r
"nema definisanih smjena",\r
"Nema definisanih smjena za ovaj objekat.",\r
"nema dokumenata",\r
"Nema dokumenata.",\r
"Nema dokumenta sa tim brojem.",\r
"Nema dolazaka danas.",\r
"Nema duplih artikala.",\r
"Nema duplih unosa ni praznih pazara.",\r
"nema fajlova zaključaka",\r
"Nema faktura ni pazara u ovoj godini.",\r
"Nema faktura sa rokom plaćanja u ovom izboru.",\r
"Nema gostiju u objektu.",\r
"Nema grešaka koje čekaju slanje.",\r
"Nema grupa — grupe dolaze iz šifarnika artikala (Knjigovodstvo).",\r
"Nema ispravnog kontrolnog zbira paketa — ažuriranje je odbijeno.",\r
"Nema izabranih artikala. Artikal se dodaje pretragom lijevo i dugmetom +.",\r
"Nema izmjena koje čekaju odluku. Izmjene plata, smjena i radnika sa drugih računara su upisane.",\r
"Nema izmjena za upis: šifarnik glavnog računara se ne razlikuje od fajla (uz izbor iz pregleda).",\r
"Nema izmjena za upis.",\r
"Nema izmjena.",\r
"nema iznosa „UkupnoSaPDV\\"",\r
"Nema iznosa za odbitak: avans je iskorišćen ili je račun zatvoren.",\r
"Nema iznosa za primjenu (nota je iskorišćena ili je faktura zatvorena).",\r
"Nema izvoda.",\r
"Nema kalkulacija sa prodajnom cijenom. Početni cjenovnik nije napravljen.",\r
"Nema kalkulacija u izabranom periodu.",\r
"Nema kalkulacija za izabrani period i objekat.",\r
"Nema kalkulacija za izradu u izboru.",\r
"Nema kalkulacija za izvoz u izabranom periodu.",\r
"Nema kalkulacija za štampu u izabranom periodu.",\r
"Nema kasa. Kase se upisuju iz početnog cjenovnika ili dugmetom „Dodaj kasu\\".",\r
"Nema kasa. Kase se upisuju u Cjenovnik kasa → Kase i objekti; kasa koja šalje stanje uživo prikazuje se automatski.",\r
"Nema kioska. Kiosk se otvara uz objekat (spisak objekata ispod).",\r
"Nema knjiženja na tom kontu u periodu.",\r
"Nema knjiženja. Nalozi nastaju dugmetom „Proknjiži mjesec\\".",\r
"Nema knjižnih odobrenja.",\r
"nema kod nas",\r
"Nema kod nas",\r
"nema kod nas; moguća nedostajuća faktura",\r
"Nema kod njih",\r
"Nema kontrolnih popisa u izabranom periodu.",\r
"Nema kretanja robe po artiklima za ovaj objekat.",\r
"Nema kupaca.",\r
"Nema kupca za tu pretragu.",\r
"Nema lijeka za tu pretragu.",\r
"nema nabavne cijene do dana prodaje",\r
"Nema naloga za izabrani period. Nalozi nastaju dugmetom „Proknjiži mjesec\\".",\r
"Nema narudžbi iz Menadžera.",\r
"Nema neaktivnih radnika.",\r
"Nema nenaplaćenih faktura. Svi kupci su izmirili obaveze.",\r
"Nema neobračunatih rabata u periodu (ugovoreni rabati su ispoštovani ili nisu uneseni).",\r
"Nema neobrađenih priloga. Provjera: „Provjeri poštu\\".",\r
"nema neoporezivog dijela (sve je drugo primanje)",\r
"Nema neraspoređenih uplata ovog kupca. Uplatu je potrebno prethodno unijeti.",\r
"Nema nevezanih plaćanja ovog dobavljača. Plaćanje se unosi kroz „Uvoz izvoda\\" ili kod dobavljača.",\r
"Nema nijednog objekta. Objekat se dodaje ispod.",\r
"Nema nivelacija u izabranoj godini.",\r
"Nema novih prijedloga. Svi prepoznati artikli su već u grupi.",\r
"nema novih priloga",\r
"Nema novih promjena za slanje.",\r
"Nema objekta.",\r
"nema obračuna plata",\r
"nema obračuna u modulu Plate za ovu godinu; potreban je obračun plata ili ručni upis",\r
"Nema obračunate ni ugovorene neto zarade za ovog radnika u tom mjesecu.",\r
"Nema obračunate takse ni uplata u ovoj godini.",\r
"Nema obračunatih radnika. Potrebno je prethodno pokrenuti obračun.",\r
"Nema obrisanih računa ni stavki u periodu.",\r
"Nema odgovora lokalnog servera.",\r
"Nema odlazaka danas.",\r
"Nema osnovnih sredstava.",\r
"Nema osnovnih sredstava. Unos: kartica „Nabavka i troškovi\\".",\r
"Nema otpisa u ovoj godini.",\r
"Nema otpisa u periodu.",\r
"Nema otpremnica u izabranoj godini.",\r
"nema otvorene",\r
"Nema otvorene smjene.",\r
"Nema otvorenih faktura u ovom izboru.",\r
"Nema otvorenih faktura za vezivanje; plaćanje se vodi kao pretplata.",\r
"Nema otvorenih stavki. Sve fakture su izmirene.",\r
"Nema označenih stavki za unos.",\r
"Nema paketa razmjene.",\r
"Nema pazara sa gotovinom bez uplate 0–7 dana prije ove uplate. Uplata se upisuje ručno kod pazara.",\r
"Nema plaćanja za automatsko povezivanje. Plaćanja su već raspoređena ili nema odgovarajućih faktura.",\r
"Nema početnog popisa robe za {0} (Trgovačka knjiga → početno stanje).",\r
"Nema početnog stanja robe po artiklima.",\r
"Nema podataka o kasirima.",\r
"Nema podataka za {0} (ni knjiga, ni ručnog upisa, ni javnog iskaza)",\r
"Nema podataka za {0}. godinu.",\r
"nema podataka za {0}.; uzeta je tekuća godina (novoosnovano pravno lice, čl. 7 st. 3), a podaci prethodne godine se upisuju iz predatog iskaza",\r
"Nema podataka za izabrani objekat/godinu.",\r
"Nema podataka za izabrani period ili pretragu.",\r
"Nema podataka za izabranu godinu.",\r
"Nema podataka za period.",\r
"Nema podataka za trgovačku knjigu.",\r
"nema podataka; unosi se ručno",\r
"Nema podataka.",\r
"nema podjele po stopama",\r
"Nema popisa po artiklima.",\r
"Nema popisa u periodu.",\r
"Nema popunjenih lista i obilazaka u periodu.",\r
"Nema poruka.",\r
"Nema poslatih dokumenata u izabranom periodu.",\r
"Nema postupaka u ovoj godini.",\r
"Nema potvrda prijema iz Menadžera.",\r
"Nema povezanih barkodova.",\r
"Nema povučenih serija.",\r
"Nema pravila.",\r
"Nema praznika za",\r
"nema predloga",\r
"Nema prenosa u ovoj godini.",\r
"Nema prenosa.",\r
"Nema prijava kvarova.",\r
"Nema prijedloga. Red izvještaja se može pronaći ručnom pretragom ispod.",\r
"Nema prijema u periodu.",\r
"Nema priloga za ovaj izbor.",\r
"Nema prodaje sa nabavnom cijenom za izabrani period i filtere.",\r
"Nema proknjiženih otpisa u {0}.",\r
"Nema prometa po artiklu za ovaj dan.",\r
"Nema prometa po artiklu.",\r
"Nema prometa u izabranom periodu.",\r
"Nema prometa u ovoj godini.",\r
"Nema računa po satu.",\r
"Nema radnih mjesta. Novo radno mjesto se dodaje gore.",\r
"Nema radnih mjesta. Polazna sistematizacija se pravi dugmetom „Popuni polaznu sistematizaciju\\".",\r
"Nema radnika koji pripadaju ovom mjesecu.",\r
"Nema radnika sa objektom koji ima smjene.",\r
"Nema rasporeda za taj mjesec.",\r
"Nema reversa u izabranoj godini.",\r
"Nema rezervacija za ovaj izbor.",\r
"Nema robe kojoj rok ističe u narednih 30 dana.",\r
"Nema ručnih upisa u ovoj godini.",\r
"Nema salda za prenos.",\r
"Nema šifre artikla.",\r
"Nema skenova u ovoj kategoriji.",\r
"Nema slobodne sobe ove vrste u tom periodu.",\r
"Nema slobodne sobe za taj period.",\r
"Nema slobodnog iznosa (uplata ili faktura su već zatvoreni).",\r
"Nema slobodnog iznosa za vezivanje (plaćanje ili faktura su već zatvoreni).",\r
"Nema smjena iz nove kase. Smjene se prikazuju kad kasa upiše zaključke u folder.",\r
"Nema sniženja. Sniženje iz Menadžera stiže i kao izmjena cijene u Cjenovnik kasa.",\r
"Nema soba za čišćenje.",\r
"Nema spornih stavki.",\r
"nema stavki za promjenu",\r
"Nema stavki.",\r
"Nema stavki. Stavke se dodaju ispod; „Preračunaj\\" upisuje pun redovan rad.",\r
"Nema stopa za provjeru.",\r
"Nema storna ni izuzetaka.",\r
"nema termina.",\r
"Nema transakcija u periodu.",\r
"Nema transakcija za ovaj izbor.",\r
"Nema trgovačke knjige za {0}. godinu.",\r
"Nema troškova u periodu (ili nijesu razvrstani po vrsti).",\r
"Nema ulaza robe u periodu.",\r
"Nema ulaznih računa u periodu.",\r
"Nema unesenih odsustava za",\r
"Nema unesenih pazara.",\r
"Nema unesenih radnika (kartica „Radnici\\").",\r
"Nema unesenih radnika. Radnici se unose na ekranu „Plate radnika\\", a raspored se zatim pravi dugmetom „Automatski rasporedi\\".",\r
"Nema unesenih stavki.",\r
"Nema unesenih zakupodavaca.",\r
"Nema unosa.",\r
"Nema upisanih perioda — za sve mjesece važi „ravno\\" (",\r
"Nema upisanih računa.",\r
"Nema uplata sa slobodnim iznosom.",\r
"Nema uplata.",\r
"Nema usluga stranih lica u periodu.",\r
"Nema uvezene prodaje po artiklu.",\r
"Nema uvezenih izvoda u",\r
"Nema uvezenih izvoda. Uvoz: „Uvoz svih izvoda iz pošte\\" ili Obaveze → Uvoz izvoda.",\r
"Nema uvoza za poništavanje.",\r
"Nema važećeg neiskorišćenog koda za Menadžer.",\r
"Nema vezanih šifri. Dodaju se automatski pri sljedećem uvozu ovog artikla.",\r
"Nema veze sa serverom ({0}).",\r
"Nema veze sa serverom.",\r
"Nema zadataka.",\r
"Nema zahtjeva ni odsustava.",\r
"Nema zahtjeva.",\r
"Nema zakazanih cijena.",\r
"Nema zapisanih veza sa drugim dokumentima.",\r
"Nema zavisnih troškova označenih „u nabavnu\\". Raspoređuju se samo troškovi koji ulaze u nabavnu vrijednost robe.",\r
"NEMATERIJALNA ULAGANJA",\r
"Nematerijalna ulaganja namijenjena prodaji",\r
"Nematerijalna ulaganja u pripremi",\r
"NEMATERIJALNI TROŠKOVI",\r
"nematerijalno (softver, licence) — računovodstvena stopa",\r
"Nenaplaćeno od vraćenih",\r
"Nenaplaćeno ukupno",\r
"Nenošenje radne odjeće / neuredan izgled na radnom mjestu",\r
"NEO",\r
"NEO STICK",\r
"Neobavezno. Upisuje se samo za robu sa rokom trajanja.",\r
"Neobračunati rabati",\r
"NEOBRAČUNATI RABATI",\r
"Neobrađeno obećanje: {0}",\r
"Neobrađeno odbijanje",\r
"neobrađeno ukupno:",\r
"Neočekivan oblik zahtjeva — potpis se ne može ubaciti.",\r
"Neodržavanje reda i čistoće na radnom mjestu",\r
"neop. do",\r
"neop. do {0}",\r
"Neoporeziva primanja",\r
"Neoporezivi iznos po načinu ispod (za dnevnice se ne koristi — limit je dana × dnevnica). Višak iznad je drugo primanje.",\r
"Neoporezivi iznos za ovaj slučaj (prazno = limit vrste)",\r
"Neoporezivi prag bruto zarade (EUR)",\r
"neoporezivo",\r
"Neoporezivo",\r
"Neoporezivo do · način · višak",\r
"Neoporezivo do (iznos) · način limita · višak iznad neoporezivog („drugo primanje\\", porez 15 %): IOPPD osnov i da li se plaćaju doprinosi",\r
"Neopravdani izostanak sa posla (jedan ili više radnih dana)",\r
"Neopravdano neizvršenje naloga pretpostavljenog bez štetnih posljedica",\r
"Neotpisana (2+3−4)",\r
"Neotpisana na kraju",\r
"Neplaćeno — njega člana porodice (čl. 88 st. 1 ZOR, do 5 dana)",\r
"Neplaćeno odsustvo",\r
"nepopunjeno",\r
"Nepopunjeno: {0} smjena (crveno), nema dovoljno slobodnih radnika.",\r
"Nepopunjeno: {0} smjena (dani označeni crveno).",\r
"Nepopunjeno: {0} smjena. Nema dovoljno raspoloživih radnika (odsustva, slobodni dani ili sedmični maksimum sati).",\r
"Nepoštovanje propisa zaštite na radu koje je dovelo do opasnosti po život i zdravlje",\r
"NEPOTPUNO — NE PREDAVATI: {0}",\r
"nepoznat artikal",\r
"Nepoznat barkod {barkod}",\r
"Nepoznat objekat.",\r
"Nepoznat osnov za 0 %.",\r
"nepoznata (generički)",\r
"Nepoznata greška",\r
"Nepoznata greška servisa.",\r
"Nepoznata PDV stopa: {0}; iznos nije razvrstan.",\r
"Nepoznata šifra opštine.",\r
"Nepoznata verzija licence.",\r
"nepoznata vrsta",\r
"nepoznata vrsta {0}",\r
"Nepoznata vrsta akcije.",\r
"Nepoznata vrsta kioska.",\r
"Nepoznata vrsta naloga „{0}\\".",\r
"Nepoznata vrsta partnera.",\r
"Nepoznata vrsta podatka.",\r
"Nepoznata vrsta zaštite veze.",\r
"nepoznatih (izbor ispod)",\r
"nepoznato",\r
"Nepoznato polje artikla „{0}\\".",\r
"Nepravovremena predaja dnevnog izvještaja ili presjeka kase",\r
"Neprebrojano",\r
"Neradni",\r
"Neraspoređene uplate ovog kupca",\r
"NERASPOREĐENI DOBITAK",\r
"Neraspoređeni dobitak ranijih godina",\r
"Neraspoređeni dobitak tekuće godine",\r
"Nerazvrstane transakcije banke u",\r
"Nerazvrstane transakcije banke u {0}: {1}{2}. Nijesu u glavnoj knjizi; potrebno je razvrstati ih (Banka → Transakcije, kolona „Vrsta\\") i ponovo proknjižiti taj mjesec (Finansije → Proknjiži mjesec).",\r
"Nerazvrstane transakcije sa izvoda (",\r
"Nerazvrstane transakcije sa izvoda (vrsta „ostalo\\") — nisu proknjižene",\r
"nerazvrstano ·",\r
"Nerealizovani dobici i gubici po osnovu preračuna finansijskih izvještaja prikazanih u drugoj valuti prikazivanja",\r
"Nerealizovani dobici i gubici po osnovu vrednovanja finansijskih sredstava po fer vrijednosti",\r
"Nestašica {0} — {1}",\r
"neta =",\r
"neto",\r
"Neto",\r
"Neto (EUR)",\r
"neto (izvršilac dobija taj iznos)",\r
"neto (na ruke)",\r
"NETO (priliv − odliv)",\r
"neto (svih",\r
"neto (zakupodavac dobija taj iznos)",\r
"neto {0}",\r
"Neto = iznos koji radnik dobija na ruke. Bruto se izračunava tako da poslije doprinosa i poreza ostane tačno taj iznos (prirez je na teret poslodavca).",\r
"Neto cijena",\r
"Neto dobit",\r
"NETO DOBIT",\r
"Neto fakturna vrijednost",\r
"Neto količina",\r
"Neto količina mora biti veća od nule.",\r
"Neto nab. cijena",\r
"Neto nab./jed",\r
"NETO REZULTAT",\r
"Neto zarade na žiro račune radnika, porez i doprinosi, prirez po opštini i doprinos za invalide — model, poziv na broj i svrha za e-banking",\r
"Neuplaćene upisane akcije",\r
"Neuplaćeni raniji dani istog objekta: {0} (gotovina {1} EUR, sa ovim danom {2} EUR){3}.",\r
"NEUPLAĆENI UPISANI KAPITAL",\r
"NEUPLAĆENI UPISANI KAPITAL I STALNA IMOVINA",\r
"Neuplaćeni upisani udjeli",\r
"Nevezano plaćanje",\r
"NEW",\r
"Nezaposlenost na teret poslodavca (%)",\r
"Nezaposlenost na teret zaposlenog (%)",\r
"NFC",\r
"NFD",\r
"ni cjenovnik kasa",\r
"nije",\r
"nije bilo.",\r
"Nije dospjelo",\r
"nije duplikat",\r
"nije fajl zapisa Menadžera",\r
"nije fiskalizovan",\r
"nije glavni računar",\r
"nije glavni računar / nema modula",\r
"nije izabran",\r
"Nije izabran",\r
"Nije izmijenjeno: {0} ({1})",\r
"Nije kopirano",\r
"nije na kasama",\r
"nije na Listi",\r
"NIJE na vezi (narudžbe se ne primaju)",\r
"nije naš",\r
"nije ni bio postavljen",\r
"nije obavezna",\r
"Nije obrisano {0}: {1}{2}",\r
"nije PDF; potreban ručni uvoz (Obaveze → Uvoz izvoda)",\r
"Nije plaćanje dobavljaču ili kupcu (plata, porez, naknada…). Ostaje u pregledu bez knjiženja.",\r
"nije podešena (Povezivanje)",\r
"Nije poništeno: {0}. {1}",\r
"nije poslato",\r
"Nije poslato: {0}",\r
"nije potvrđeno — odluka opštine nije objavljena na mreži (27.10.2026); polazna = zakonski maksimum {0} %",\r
"nije povezan sa registrom",\r
"Nije povezan sa serverom",\r
"nije povezano sa artiklom",\r
"Nije prepoznat nijedan red. Datum i iznos moraju biti u istom redu teksta.",\r
"Nije preuzeto — ponavlja se",\r
"Nije prijavljen početni gotovinski depozit za danas.",\r
"nije pročitana nijedna stavka{0}",\r
"Nije pročitano: {0}",\r
"Nije promet u sistemu PDV",\r
"Nije pronađen nijedan blok „PORESKA STOPA\\". Slika je vjerovatno nejasna ili je odsječen dio računa.",\r
"Nije pronađen nijedan štampač. Štampač mora biti uključen i instaliran u Windowsu.",\r
"Nije pronađena",\r
"nije radni odnos i naknada nije zarada — obračunava se ovdje, ne kroz plate. Ugovorena naknada je bruto: osnovica = bruto − normirani troškovi (",\r
"nije se javila za {0} s",\r
"Nije u redu",\r
"Nije učitano (druga firma): {0}. Ti fajlovi se učitavaju u svojoj firmi.",\r
"Nije unijet kod održavaoca softvera.",\r
"Nije unijet kod poslovnog prostora.",\r
"Nije unijet kod softvera. Bez njega Poreska uprava ne prima registraciju ENU.",\r
"Nije unijet PIB firme.",\r
"nije uparen",\r
"nije uparena",\r
"nije upisan",\r
"Nije upisan datum pisanog upozorenja (čl. 174). Otkaz bez prethodnog upozorenja je nezakonit. Nastaviti?",\r
"nije upisana opština prebivališta",\r
"nije upisano",\r
"nije uslov",\r
"nije uslov; prednost rad na kasi",\r
"Nije uvezeno izvoda: {0}. Račun nije potvrđen kao račun ove firme ({1}); potrebna je oznaka „naš račun\\" ili „druga firma\\" (traka na vrhu ili Obaveze → Pošta).",\r
"Nijedan",\r
"Nijedan artikal nema stopu {0}.",\r
"Nijedan artikal nije dozvoljen nedjeljom i praznikom. Kasa kioska nedjeljom radi kao objekat: upozorenje bez zabrane prodaje.",\r
"Nijedan artikal nije izabran.",\r
"Nijedan artikal šifarnika ne odgovara pretrazi.",\r
"Nijedan objekat nema definisane smjene. Radno vrijeme svakog objekta se upisuje na kartici „Radno vrijeme objekta\\" (npr. I 08–16:30, II 16:30–01).",\r
"Nijedan objekat nema i smjene i matične radnike. Raspoređivanje nije moguće.",\r
"Nijedan objekat nije označen kao partnerski. Izbor: dugme „Partnerski objekti\\".",\r
"Nijedan objekat nije označen.",\r
"Nijedan objekat nije upisan (Podešavanja).",\r
"Nijedan Menadžer nije poslao fajl.",\r
"Nijedan Menadžer uređaj nije uparen.",\r
"Nijedan mjesec ne mijenja sadržaj.",\r
"Nijedan radnik nema ovaj objekat kao matični. Objekat se dodjeljuje na kartici „Radnici\\" (Plate); druga mogućnost je uključena ispomoć.",\r
"Nijedan radnik nema ovaj objekat kao matični. Objekat se dodjeljuje u „Plate radnika → Radnici\\"; druga mogućnost je automatsko raspoređivanje sa uključenom ispomoći.",\r
"Nijedna firma ne odgovara pretrazi „",\r
"Nijedna firma nije otvorena.",\r
"Nijedna izmjena nije primijenjena. Kase još nisu razvrstane u objekte.",\r
"Nijedna stavka ne mijenja cijenu.",\r
"Nijedna stavka nema naziv i količinu.",\r
"Nijedna stavka nije prepoznata u šifarniku. Artikal se pravi ili povezuje u spisku „Stavke otpisa bez artikla u šifarniku\\" ispod.",\r
"Nijedna strana nije izabrana.",\r
"Nijedno mjesto nije povezano sa objektom.",\r
"Nijedno plaćanje još nije vezano za ovu fakturu.",\r
"Nijedno prodajno mjesto ne čeka povezivanje.",\r
"NIKSIC",\r
"Nikšić",\r
"ništa",\r
"ništa ne nedostaje",\r
"ništa novo",\r
"Nisu dio knjigovodstva u užem smislu. Firma sa paketom „Knjige\\" ih ne vidi; uključuju se sami kad firma ima te podatke, paket Market ili Lanac, ili Menadžer — a ovdje se mogu uključiti ili isključiti ručno. Podaci se ne brišu i razmjena ih i dalje prenosi.",\r
"Nisu snimljene (nisu označene): strane {0}.",\r
"Nit #",\r
"NIV",\r
"Nivelacija",\r
"Nivelacija — promjena prodajne cijene robe na zalihi · izvještaj o izvršenom popisu (Pravilnik 34/12 čl. 11)",\r
"Nivelacija (promjena prodajne cijene)",\r
"Nivelacija {0}",\r
"Nivelacija {0} — {1}: {2} {3} (prodajna sa PDV)",\r
"Nivelacija {0} je numerisana u {1}. godini. Datum mora ostati u toj godini.",\r
"Nivelacija br. {0} od {1} (izvještaj o popisu)",\r
"Nivelacija je obrisana.",\r
"Nivelacija je otključana.",\r
"Nivelacija je već zaključena.",\r
"Nivelacija je zaključena. Izmjena nije moguća.",\r
"Nivelacija je zaključena. Upisana je u trgovačku knjigu, lager i cjenovnik kase.",\r
"Nivelacija je zaključena.{0}",\r
"Nivelacija ne postoji.",\r
"Nivelacija nema stavki.",\r
"Nivelacija nije zaključena.",\r
"Nivelacija se zaključuje na dan nivelacije ({0}) ili kasnije.",\r
"Nivelacija: prodajna vrijednost sa PDV ({0} %)",\r
"Nivelacija: ukalkulisana razlika u cijeni",\r
"Nivelacija: ukalkulisani PDV ({0} %)",\r
"Nivelaciju otključava glavni računar.",\r
"Nivelaciju zaključuje glavni računar.",\r
"Nivo",\r
"Nivo kvalifikacije obrazovanja određuje se prema Nacionalnom okviru kvalifikacija; za jedno radno mjesto može se tražiti raspon od najviše dva susjedna nivoa.",\r
"Niz brojeva dokumenta je neprekidan — nema preskoka.",\r
"Njegošev dan",\r
"Njemački",\r
"njeni",\r
"njihovi",\r
"Njihovo",\r
"NK — nekvalifikovan (I)",\r
"NLB banka",\r
"NLB Banka",\r
"NLB banka — naknade",\r
"NLB banka (dnevni izvod)",\r
"NLB banka (mjesečni)",\r
"NLB banka (pregled transakcija)",\r
"NLB banka (pregled)",\r
"NLB dnevni izvodi se čitaju OCR-om (nekoliko sekundi po izvodu), pa uvoz cijele godine traje duže. Uvoz se može prekinuti i nastaviti kasnije.",\r
"NLB mjesečni izvještaj za lične račune (fizičko lice), nije izvod računa firme.",\r
"NN",\r
"NO",\r
"Noćenja",\r
"Noćenje — {0}",\r
"Noćenje i doplate uz smještaj koje nisu hrana.",\r
"noći",\r
"Noći",\r
"Noćni (+40 %)",\r
"Noćni h / smjena",\r
"Noćni rad",\r
"Noćni rad 22–06 (dodatak +40 % povrh osnove)",\r
"Noćni rad na dan praznika",\r
"Noćni rad na dan praznika (dodatak +190 % povrh osnove)",\r
"NONCASH",\r
"noopener noreferrer",\r
"Normativ je postavljen: {0} %.",\r
"Normativ rashoda (% mj.)",\r
"Normativ rashoda (kalo, rastur, kvar, lom)",\r
"Normativ se računa od nabavke knjižene na objekat.",\r
"Normativ se računa od prometa objekta (pazar bez PDV).",\r
"Normirani troškovi",\r
"Nosilac rezervacije",\r
"Nosioci troškova",\r
"NOSIOCI TROŠKOVA",\r
"nota",\r
"Nota nije primijenjena. Odobrenje ostaje neiskorišćeno.",\r
"nov",\r
"nov artikal",\r
"Nov artikal",\r
"Nov artikal u šifarniku iz podataka kase:\\n\\nNaziv: {0}\\nŠifra (kasa): {1}\\nBarkod: {2}\\nJedinica mjere: {3}\\nPDV: {4} %\\nProdajna cijena na kasi: {5} (ostaje u Cjenovniku kasa)\\n\\nArtikal se povezuje sa artiklom kase, a otpis sa kase se razdužuje sa tim artiklom. Nastaviti?",\r
"Nov kod za uparivanje; raniji neiskorišćen kod ove kase prestaje da važi.",\r
"Nov kupac za kase",\r
"Nov nacrt sa današnjim datumom, istim kupcem i stavkama",\r
"Nov objekat",\r
"Nov odgovor podrške",\r
"Nov odgovor podrške IRIS CORVINA (Više → Podrška)",\r
"Nov red na listu „Artikli\\" sa praznom kolonom „Šifra\\" — šifru dodjeljuje program. Obavezno: naziv, JM i PDV. Barkod novog artikla se upisuje na list „Barkodovi\\"; u kolonu „Šifra\\" tada ide naziv artikla.",\r
"Nov red na listu „Barkodovi\\": šifra artikla i barkod. Kolona „Barkod\\" je tekst.",\r
"Nov zahtjev",\r
"nova",\r
"Nova",\r
"Nova akcija",\r
"Nova cijena",\r
"Nova cijena bez PDV ispod nabavne: {0}{1}",\r
"Nova cijena bez PDV je ispod nabavne cijene.",\r
"Nova cijena mora biti veća od nule.",\r
"Nova cijena nije upisana: {0}.",\r
"Nova cijena se upisuje u kolonu „Opšta cijena\\" ili u kolonu mjesta.",\r
"nova firma",\r
"Nova firma — ovaj računar je glavni",\r
"Nova globalna marža %",\r
"Nova godina",\r
"Nova grupa",\r
"Nova isplata po ugovoru o djelu",\r
"Nova kalkulacija",\r
"Nova kalkulacija (QR skeniranje)",\r
"Nova kalkulacija (QR)",\r
"Nova kasa šalje svoje zaključke na server IRIS CORVINA",\r
"Nova kasa šalje svoje zaključke na server IRIS CORVINA (u prelaznom režimu i u Drive folder)",\r
"Nova kasa u isti folder za razmjenu kroz koji ide cjenovnik piše svoje zaključke",\r
"Nova marža %",\r
"Nova marža u procentima je obavezna (npr. 40).",\r
"Nova marža za izabrane objekte i period odjednom (osim cigara), pa izrada svih kalkulacija u PDF/Excel i štampa",\r
"Nova MPC",\r
"Nova nit umjesto odgovora",\r
"Nova nivelacija",\r
"Nova otpremnica",\r
"Nova otpremnica sa današnjim datumom, istim kupcem i stavkama",\r
"Nova poruka podršci",\r
"Nova povreda",\r
"Nova povreda radne obaveze — pokretanje postupka",\r
"nova priloga",\r
"nova propisana MPC od {0} (potvrđeno na kalkulaciji)",\r
"Nova rezervacija",\r
"Nova rezervacija: izaberite prvu i posljednju noć u redu sobe.",\r
"Nova šema važi od",\r
"Nova šifra",\r
"Nova smjena",\r
"Nova stopa",\r
"Nova stopa stupa na snagu sama na taj dan, u programu i na kasama.",\r
"Nova stopa važi odmah.",\r
"Nova uplata sa istim podacima je upisana u registar banke.",\r
"Nova verzija je preuzeta.",\r
"Nova verzija se primjenjuje pri sljedećem pokretanju programa.",\r
"novčana kazna",\r
"Novčana kazna ({0})",\r
"novčana kazna (do",\r
"Novčana kazna se obustavlja od zarade zaposlenog počev od prve naredne isplate zarade, u {0} mjesečn{1}, tako da ukupne obustave u jednom mjesecu ne pređu trećinu zarade ({2}). Mjera se izvršava po konačnosti odluke, a ne može se izvršiti ako je proteklo {3} dana od konačnosti a izvršenje nije započeto ({4}).",\r
"Novčana sredstva čije je korišćenje ograničeno ili vrijednost umanjena",\r
"Novčane kazne i penali",\r
"Novčane kazne za prekršaje",\r
"NOVČANI TOK — {0}",\r
"Nove grupe",\r
"novembar",\r
"Novembar",\r
"novembra",\r
"novi",\r
"NOVI",\r
"Novi analitički konto",\r
"Novi artikal",\r
"Novi artikli",\r
"Novi barkod",\r
"Novi barkod {0}",\r
"Novi barkodovi",\r
"Novi datum nije ispravan.",\r
"Novi gost",\r
"Novi ID",\r
"Novi kod",\r
"Novi kod za kasu",\r
"Novi kupac",\r
"Novi naziv je obavezan.",\r
"Novi objekat",\r
"Novi PIN (4–8 cifara)",\r
"Novi podaci su vidljivi nakon osvježavanja prikaza. Započeti unos se prethodno snima.",\r
"Novi popis",\r
"Novi praznik — datum",\r
"novi prilog",\r
"Novi radnik",\r
"Novi revers",\r
"Novi ručni nalog",\r
"Novi trošak „u nabavnu\\" može se dodati tek nakon poništavanja rasporeda; raspored se zatim ponavlja sa svim troškovima.",\r
"Novi unos",\r
"Novi zakupodavac",\r
"novih artikala",\r
"Novih artikala",\r
"novih grupa",\r
"Novih grupa",\r
"Novih kalkulacija stiglih poslije pregleda: {0}. One nisu mijenjane (vidljive su u tabeli i mogu se promijeniti posebno).",\r
"novih priloga",\r
"novih priloga u Pošti čeka pregled",\r
"novih transakcija ·",\r
"novine; dnevni list; nedjeljnik; casopis; magazin; revija; ukrstenic; enigmat; skandi; zagonetk",\r
"novo",\r
"Novo",\r
"Novo početno stanje",\r
"Novo pravilo",\r
"Novo radno mjesto",\r
"Novo stanje",\r
"npr. 1, 2, 3, 4, Šank, Terasa 1",\r
"npr. 1001, 1002, 4475",\r
"npr. 101-110, 201",\r
"npr. 1234/26",\r
"npr. 15 godina staža = {0} %",\r
"npr. 20 (ne smije se poklopiti sa kasama)",\r
"npr. 2026-0001, naziv kupca ili tekst napomene",\r
"npr. 2026-0007 (uz broj fakture uplata se automatski veže na nju)",\r
"npr. 30",\r
"npr. 4*",\r
"npr. 40",\r
"npr. 4331",\r
"npr. 4711",\r
"npr. 5",\r
"npr. 510-0000000000000-11",\r
"npr. 510-12345-67",\r
"npr. Atlantic 2_00015, 2026061400002, OT-2026-00004, F8471C7C…",\r
"npr. čl. 9 ugovora o radu — rad noću",\r
"npr. Crnogorska komercijalna banka",\r
"npr. Dan nezavisnosti",\r
"npr. Dan opštine, neradni dan po odluci Vlade",\r
"npr. Drina, Eva, IQOS…",\r
"npr. Godišnji popis 2026",\r
"npr. gost otkazao telefonom",\r
"npr. ibuprofen 400",\r
"Npr. Još probamo program, treba nam još 30 dana.",\r
"npr. Kredit CKB",\r
"npr. mail.firma.me",\r
"npr. Objekat Centar",\r
"npr. Marko",\r
"npr. meni.vasrestoran.me",\r
"npr. MNE",\r
"Npr. Na ekranu Banka uvoz izvoda javlja grešku …",\r
"npr. nalog, izvod",\r
"npr. Naziv firme d.o.o.",\r
"npr. Njegošev dan",\r
"npr. Objekat X radi skraćeno.",\r
"Npr. Otvaramo nov objekat — treba nam još jedna kasa.",\r
"npr. Petar P., Ana A., Marko M.",\r
"npr. Podgorica",\r
"npr. popravka rashladne vitrine, izrada reklame. Ako odgovara radnom mjestu iz sistematizacije, prikazuje se upozorenje.",\r
"npr. poslovni prostor, magacin, adresa objekta",\r
"npr. poziv na broj, opis posla…",\r
"npr. privremeno povećan obim posla",\r
"npr. privremeno povećan obim posla u sezoni / zamjena odsutnog zaposlenog",\r
"npr. Prodavac, Magacioner, Vozač…",\r
"npr. Prva smjena",\r
"npr. Računar u kancelariji",\r
"npr. Telefon Objekat 9",\r
"npr. Vlasnik",\r
"npr. zamjena odsutnih kolega u sezoni",\r
"npr. zamjena odsutnih kolega u sezoni, rezultati prodaje, popis bez manjka",\r
"Npr. Želimo i modul Menadžer za dva telefona.",\r
"Nude se pri upisu gosta; jedan osnov u redu.",\r
"NULL",\r
"nulta / oslobođeno",\r
"Nulta stopa (čl. 25)",\r
"Nulta stopa (izvoz, međunarodni prevoz, diplomatska predstavništva…)",\r
"Numeracija nivelacija: slobodan broj nije nađen.",\r
"Numeracija otpisa: nije nađen slobodan broj.",\r
"Numeracija otpremnica: slobodan broj nije nađen.",\r
"Numeracija prenosa: nije nađen slobodan broj poslije 500 pokušaja.",\r
"Numeracija reversa: slobodan broj nije nađen.",\r
"Numeracija: nije nađen slobodan broj.",\r
"Numeracija: slobodan broj nije pronađen.",\r
"NV-{0}-{1}",\r
"NZ:{0}",\r
"o mjesto",\r
"O programu",\r
"o.Broj",\r
"o.FIK",\r
"o.IIC",\r
"o.InvNum",\r
"o.MarketID",\r
"OA — amortizacija",\r
"OA — OBRAČUN AMORTIZACIJE",\r
"OA {0}",\r
"oba",\r
"oba računara su mijenjala isti podatak",\r
"OBAVEZA",\r
"Obaveza „{0}\\" {1}",\r
"Obaveza na kontu 4340 „Dobavljači u inostranstvu\\" (Kontni okvir 11/20, račun 434); faktura za robu van U-RAČ kol. 8, PDV pri uvozu sa carinske deklaracije (PR-PDV polje 20). Ne mijenja se dok dobavljač ima račune u zaključanom mjesecu.",\r
"Obaveza na kraju mjeseca",\r
"Obaveza za paušalnu naknadu",\r
"Obaveza za PDV pri uvozu (carina)",\r
"Obaveza za PDV za uplatu (PR-PDV polje 28, umanjeno za preplatu)",\r
"Obaveza za porez na dobit",\r
"obaveza za uplatu",\r
"Obavezan za IOPPD prijavu (13 cifara)",\r
"Obavezan za poreske prijave (IOPPD).",\r
"Obaveze dobavljačima {0}{1} — nalozi KALK vs specifikacija dobavljača (sa PDV)",\r
"Obaveze i plaćanja",\r
"OBAVEZE IZ POSLOVANJA",\r
"OBAVEZE IZ SPECIFIČNIH POSLOVA",\r
"Obaveze koje se mogu konvertovati u kapital",\r
"Obaveze po emitovanim hartijama od vrijednosti u periodu dužem od godinu dana",\r
"Obaveze po kratkoročnim hartijama od vrijednosti",\r
"Obaveze po osnovu izvoza za tuđ račun",\r
"Obaveze po osnovu kamata i troškova finansiranja",\r
"Obaveze po osnovu komisione i konsignacione prodaje",\r
"Obaveze po osnovu stalnih sredstava i sredstava obustavljenog poslovanja namijenjenih prodaji",\r
"OBAVEZE PO OSNOVU ZARADA I NAKNADA ZARADA",\r
"Obaveze po ugovoru o djelu (neto)",\r
"Obaveze po zakupljenim objektima i opremi (vanbilansno)",\r
"Obaveze prema članovima upravnog i nadzornog odbora",\r
"Obaveze prema dobavljačima",\r
"Obaveze prema dobavljačima (po partneru)",\r
"Obaveze prema dobavljačima u inostranstvu (dobavljač označen „Strani\\"): faktura, plaćanje i povrat sa izvoda",\r
"Obaveze prema fizičkim licima po ugovorima (zakup)",\r
"Obaveze prema fizičkim licima za naknade po ugovorima",\r
"Obaveze prema matičnim i zavisnim pravnim licima",\r
"Obaveze prema ostalim povezanim pravnim licima",\r
"Obaveze prema uvozniku",\r
"Obaveze prema zaposlenima",\r
"Obaveze za akcize",\r
"Obaveze za dividende",\r
"Obaveze za doprinose koji terete troškove",\r
"Obaveze za doprinose komorama i udruženjima",\r
"Obaveze za doprinose na teret zaposlenog",\r
"Obaveze za doprinose na zarade i naknade zarada na teret zaposlenog",\r
"Obaveze za doprinose po ugovorima o djelu (PIO izvršioca)",\r
"Obaveze za neto naknade koje se refundiraju",\r
"Obaveze za neto naknade zarada koje se refundiraju",\r
"Obaveze za neto zarade i naknade zarada",\r
"Obaveze za neto zarade i naknade zarada, osim naknada zarada koje se refundiraju",\r
"OBAVEZE ZA OSTALE POREZE, DOPRINOSE I DRUGE DAŽBINE",\r
"Obaveze za PDV — razlika obračunatog i prethodnog poreza",\r
"Obaveze za PDV i carinu pri uvozu",\r
"Obaveze za PDV na usluge inostranih lica (obrnuto obračunavanje)",\r
"Obaveze za PDV po izdatim fakturama 15 %",\r
"Obaveze za PDV po izdatim fakturama 21 %",\r
"Obaveze za PDV po izdatim fakturama 7 %",\r
"Obaveze za PDV po osnovu prodaje za gotovinu 15 %",\r
"Obaveze za PDV po osnovu prodaje za gotovinu 21 %",\r
"Obaveze za PDV po osnovu prodaje za gotovinu 7 %",\r
"Obaveze za PDV po osnovu sopstvene potrošnje (manjak iznad normativa)",\r
"Obaveze za PDV po primljenim avansima 15 %",\r
"Obaveze za PDV po primljenim avansima 21 %",\r
"Obaveze za PDV po primljenim avansima 7 %",\r
"Obaveze za porez iz rezultata",\r
"Obaveze za porez na dobit",\r
"OBAVEZE ZA POREZ NA DODATU VRIJEDNOST",\r
"Obaveze za porez na dodatu vrijednost po izdatim fakturama po opštoj stopi (osim primljenih avansa)",\r
"Obaveze za porez na dodatu vrijednost po izdatim fakturama po sniženoj stopi (osim primljenih avansa)",\r
"Obaveze za porez na dodatu vrijednost po osnovu prodaje za gotovinu",\r
"Obaveze za porez na dodatu vrijednost po osnovu razlike obračunatog poreza na dodatu vrijednost i prethodnog poreza",\r
"Obaveze za porez na dodatu vrijednost po osnovu sopstvene potrošnje po opštoj stopi",\r
"Obaveze za porez na dodatu vrijednost po osnovu sopstvene potrošnje po sniženoj stopi",\r
"Obaveze za porez na dodatu vrijednost po primljenim avansima po opštoj stopi",\r
"Obaveze za porez na dodatu vrijednost po primljenim avansima po sniženoj stopi",\r
"Obaveze za porez na naknade zarada",\r
"Obaveze za porez na zarade (na teret zaposlenog)",\r
"Obaveze za porez na zarade i naknade zarada na teret zaposlenog",\r
"Obaveze za porez po odbitku i prirez (zakup, djelo) i ostale dažbine",\r
"Obaveze za poreze i doprinose na naknade zarada na teret poslodavca koje se refundiraju",\r
"Obaveze za poreze i doprinose na naknade zarada na teret zaposlenog koje se refundiraju",\r
"Obaveze za poreze i doprinose na teret poslodavca",\r
"Obaveze za poreze i doprinose na zarade i naknade zarada na teret poslodavca",\r
"Obaveze za poreze na teret troškova (nepokretnosti i dr.)",\r
"Obaveze za poreze, carine i druge dažbine iz nabavke ili na teret troškova",\r
"Obaveze za prirez porezu na dohodak",\r
"Obaveze za učešće u dobitku",\r
"obavezna",\r
"obavezna (srednje/veliko)",\r
"Obavezni iskazi",\r
"obavezno",\r
"Obavijest",\r
"Obavijest je uklonjena.",\r
"obavještenja",\r
"obavještenje",\r
"Obavještenje",\r
"Obavještenje „{0}\\" za {1}",\r
"Obavještenje kupca",\r
"Obavještenje kupca je upisano.",\r
"Obavještenje kupca po odobrenju {0} — {1}",\r
"Obavještenje kupca: {0} od {1}.",\r
"Obavještenje o pokretanju postupka za utvrđivanje povrede radne obaveze",\r
"Obavlja i druge finansijsko-administrativne poslove po nalogu direktora.",\r
"Obavlja i druge pomoćne poslove po nalogu.",\r
"Obavlja i druge poslove po nalogu izvršnog direktora.",\r
"Obavlja i druge poslove po nalogu menadžera.",\r
"Obezbijeđeni obroci (Uredba čl. 7a: ručak i večera −60 %, jedan obrok −40 %)",\r
"Obilasci i liste",\r
"obilazaka objekata: {0}",\r
"Obj",\r
"Objava baze je u toku…",\r
"Objavljen",\r
"Objekat „{0}\\" {1}.{2}",\r
"Objekat „{0}\\" nije aktivan.",\r
"objekat „{0}\\" nije među objektima firme; potrebno je izabrati objekat firme",\r
"Objekat „{0}\\" nije povezan sa registrom firme na serveru. Kasa {1} nije upisana u registar.",\r
"Objekat „{0}\\": {1}.",\r
"Objekat ima dokumente ({0}). Vrsta trgovine se ne mijenja.",\r
"Objekat je dodat.",\r
"Objekat je mjesto prometa (prodavnica, lokal, kancelarija). Ostali objekti: Podešavanja → Objekti.",\r
"Objekat je mjesto prometa: prodavnica, lokal, kafić, kancelarija. Kalkulacije, pazari, trgovačka knjiga i zalihe se vode po objektu.",\r
"Objekat je sačuvan.",\r
"Objekat je u upotrebi",\r
"Objekat je unesen.",\r
"Objekat još nije unesen. Unos radi korisnik sa ovlašćenjem za podešavanja.",\r
"Objekat ne postoji.",\r
"Objekat nema prodaju po artiklu — predlog 100 %",\r
"Objekat nema prodaju po artiklu. Knjigovodstvena količina je zbir ulaza. Upisati popisanu količinu.",\r
"Objekat nema soba.",\r
"Objekat nema soba. Sobe se unose u Podešavanjima.",\r
"Objekat nema vrsta soba. Vrste se unose u Podešavanjima.",\r
"Objekat nije izabran.",\r
"Objekat nije izabran. Kontrola se radi po objektu.",\r
"Objekat nije kiosk.",\r
"Objekat registra",\r
"Objekat registra je već povezan sa drugim objektom.",\r
"Objekat se ne mijenja dok nivelacija ima stavke.",\r
"Objekat se ne mijenja dok otpremnica ima stavke.",\r
"Objekat se ne mijenja dok revers ima stavke.",\r
"Objekat u registru firme na serveru (izdavač, IRIS Admin). Veza se prepoznaje po kasi, PJ ili nazivu.",\r
"Objekti ({0}): {1}{2}.",\r
"Objekti (poslovne jedinice) koji rade",\r
"Objekti firme sa servera",\r
"Objekti iz fajla koji nisu prepoznati",\r
"Objekti koje vodi partner se biraju u polju „Objekti\\" iznad; bez izbora se prikazuju svi objekti sa prometom.",\r
"Objekti smještaja, sobe, cjenovnik i izvještaji · boravišna taksa · smjene recepcije",\r
"Objekti smještaja, sobe, cjenovnik i izvještaji · boravišna taksa (obaveza prema opštini) · avansi i smještaj sa recepcije",\r
"objekti smještaja, sobe, cjenovnik, izvještaji i boravišna taksa",\r
"Objekti, sobe, cjenovnik i izvještaji smještaja vode se na serveru firme (Povezivanje → Server). Boravišna taksa i smjene recepcije vode se i bez veze.",\r
"objekti: {0}",\r
"Oblik",\r
"Obračun",\r
"Obračun {0} — {1} lica, bruto {2}{3}",\r
"obračun {0} · iznos refundacije = naknada × procenat, do limita (broj prosječnih zarada × {1} €)",\r
"Obračun ili radnik nije pronađen.",\r
"Obračun je otključan.",\r
"obračun je otvoren, a razlika je već dodata u drugi mjesec; ponovni obračun ovog mjeseca bi je isplatio dvaput",\r
"obračun je ovdje zaključen",\r
"Obračun je premješten na {0} {1}. Ako se fond sati promijenio, iznosi se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Obračun je upisan.",\r
"Obračun je zaključan. Izmjene nisu moguće.",\r
"Obračun je zaključen.",\r
"Obračun je zaključen. Izmjena nije moguća.",\r
"Obračun je zaključen. Izmjene su moguće poslije otključavanja.",\r
"Obračun nabavke robe",\r
"Obračun nabavke zaliha materijala, rezervnih djelova, alata i inventara",\r
"OBRAČUN NAKNADA PO UGOVORU O DJELU",\r
"Obračun nema rezultata. Potrebno je prethodno pokrenuti „Obračunaj sve\\".",\r
"Obračun nije pronađen.",\r
"obračun nije zaključen; minuli rad se ispravlja pri ponovnom obračunu („Obračunaj sve\\")",\r
"Obračun PDV (izlazni − odbitni) — glavna knjiga vs PR-PDV 24 − 27",\r
"Obračun PDV (mjesečno)",\r
"Obračun PDV {0}/{1}: izlazni {2} − odbitni {3}{4} = {5}",\r
"Obračun plata",\r
"obračun plata {0} još nije stigao",\r
"obračun plata nije zaključen",\r
"Obračun plata za {0} postoji samo na ovom računaru i preuzimanje baze bi ga obrisalo. Obračun plata se radi na glavnom računaru. Ručno preuzimanje je moguće uz potvrdu (obračun se tada briše).",\r
"obračun plata zaključen",\r
"Obračun plate (mjesec)",\r
"Obračun po smjenama: {0} h za {1} radnika. Stavke su upisane i obračunate.{2}{3}{4}",\r
"OBRAČUN POREZA NA PRIHOD OD IMOVINE — ZAKUP OD FIZIČKIH LICA",\r
"Obračun realizovane RUC (mjesečno)",\r
"Obračun realizovane RUC {0}/{1} ({2})",\r
"Obračun tog mjeseca je zaključen. Kazna se odbija u otvorenom obračunu (npr. narednog mjeseca).",\r
"OBRAČUN TROŠKOVA I UČINAKA",\r
"Obračun u toku…",\r
"Obračun za",\r
"Obračun zarada za {0} {1} je zaključen (IOPPD tog mjeseca). Izmjena ugovora o djelu isplaćenog tog mjeseca nije moguća dok se obračun ne otključa.",\r
"Obračun zarada za {0} {1} je zaključen. Izmjena zakupa tog mjeseca nije moguća dok se obračun ne otključa.",\r
"Obračun zarada za ovaj mjesec je zaključen (ista IOPPD prijava). Izmjena isplata tog mjeseca nije moguća dok se obračun ne otključa.",\r
"Obračun zarada za ovaj mjesec je zaključen. Izmjena zakupa tog mjeseca nije moguća dok se obračun ne otključa.",\r
"Obračun zarada, prirez, IOPPD, refundacije naknada (FZO, CSR), nalozi za plaćanje, ugovor o djelu, zakup",\r
"obračun, IOPPD, listići",\r
"Obračunati prihodi budućeg perioda",\r
"Obračunati prihodi primjenom cijena „van dohvata ruke\\"",\r
"Obračunati prihodi primjenom transfernih cijena",\r
"Obračunati troškovi primjenom cijena „van dohvata ruke\\"",\r
"Obračunati troškovi primjenom transfernih cijena",\r
"Obračunato",\r
"Obračunato {0} radnika sa unesenim IQOS iznosom za {1} {2}.{3}",\r
"Obračunato {0} radnika za {1} {2}.{3}",\r
"Obračunato na kasama",\r
"Obračunato neto",\r
"Obračunato ručno",\r
"obračunato ukupno",\r
"Obračunato ukupno",\r
"Obrada faktura nije moguća na telefonu. Kalkulacije i brojeve dokumenata pravi računar.",\r
"obrada nije uspjela: {0}",\r
"Obrada…",\r
"Obrađena baza (izvještaji na telefonu)",\r
"Obrađeni",\r
"obrađenih",\r
"Obrađeno {0}: napravljeno {1} kalkulacija, preskočeno {2}, grešaka {3}.",\r
"Obradi",\r
"Obradi uz potvrdu",\r
"Obrazac EV — evidencija veleprodajnog mjesta. Zaduženje i razduženje po veleprodajnim cijenama bez PDV-a (Pravilnik 34/12 čl. 7 kol. 4).",\r
"obrazac OA",\r
"Obrazac PD",\r
"Obrazac PD (Pravilnik „Sl. list CG\\" 8/09 … 20/25). Polazi od rezultata iz bilansa uspjeha; polja koja program zna računa sam (amortizacija računovodstvena vs OA, kazne 5591, neisplaćene zarade 4500/4650, reprezentacija 1 %, članarine 0,1 % ukupnog prihoda",\r
"Obrisan na glavnom računaru. Neće biti obrađen.",\r
"obrisan račun",\r
"Obrisan u Menadžeru prije obrade.",\r
"Obrisan u Menadžeru{0} prije obrade.",\r
"Obrisani računi",\r
"Obrisani računi, otpis robe, etikete sa cijenama",\r
"Obrisanih računa",\r
"Obrisanih računa / stavki",\r
"Obrisano {0} automatskih termina.",\r
"Obrisano {0} zapisa.{1}{2}",\r
"Obrisano iz evidencije.",\r
"Obrisano je ručno plaćanje {0} {1}: {2} EUR. Plaćanje iz izvoda ostaje.",\r
"Obrisano ovdje",\r
"Obrisano ručno unesenih plaćanja: {0}. Plaćanja iz izvoda banke ostaju.",\r
"Obrisano.",\r
"Obrisao: {0}, {1}",\r
"Obrisati „{0}\\" sa ovog računara?\\n\\nTo je kopija snimka, ne firma; podaci firme ostaju na glavnom računaru.",\r
"Obrisati {0} zapisa drugih firmi iz ove baze?\\n\\nBrišu se samo dokumenti koje je sinhronizacija pogrešno unijela (postoje u bazi svoje firme). U numeraciji mogu ostati praznine, vidljive u provjeri numeracije.\\n\\nPrije brisanja se automatski pravi sigurnosna kopija u folderu za rezervnu kopiju (ako je izabran).",\r
"Obrisati akciju „{0}\\"? Kase je uklanjaju sa sljedećim cjenovnikom.",\r
"Obrisati avansni račun {0}? Uplata ostaje.",\r
"Obrisati cijeli popis sa svim unesenim količinama?",\r
"Obrisati deklaraciju {0} od {1}?",\r
"Obrisati gosta {0} {1}?",\r
"Obrisati i {0} proknjiženo sa ovog izvoda?\\n\\nU redu: brišu se i plaćanja/naplate (izvod je pogrešan ili pripada drugoj firmi).\\nOdustani: plaćanja i naplate ostaju (izvod se ponovo uvozi).",\r
"Obrisati isplatu po ugovoru o djelu — {0}?",\r
"Obrisati iz evidencije? (PDF fajl ostaje)",\r
"Obrisati kalkulaciju {0} sa svim stavkama i računom?",\r
"Obrisati knjižno odobrenje {0}?",\r
"Obrisati nivelaciju?",\r
"Obrisati otpremnicu?",\r
"Obrisati ovaj nacrt?",\r
"Obrisati ovaj odmor iz plana?",\r
"Obrisati ovaj otpis?",\r
"Obrisati ovaj prenos?",\r
"Obrisati ovaj ručni nalog?",\r
"Obrisati ovaj sken?",\r
"Obrisati ovaj unos?",\r
"Obrisati ovaj upis boravišne takse?",\r
"Obrisati ovu uplatu i sve njene veze?",\r
"Obrisati pazar {0} od {1} ({2} EUR)?\\n\\nBrisanje važi i na ostalim računarima.",\r
"Obrisati početno stanje ovog dobavljača ({0} EUR)?",\r
"Obrisati početno stanje sa svim artiklima?",\r
"Obrisati popis?",\r
"Obrisati postupak i njegove dokumente iz evidencije?",\r
"Obrisati povrat?",\r
"Obrisati pravilo „{0}\\"?",\r
"Obrisati revers?",\r
"Obrisati sirovi zapis Poreske uprave za fakture starije od 7 dana?\\n\\nPodaci faktura ostaju netaknuti. Puna kopija ostaje na računaru.",\r
"Obrisati smjenu „{0}\\"?",\r
"Obrisati sva ručno unesena plaćanja ({0}, {1} EUR)? Plaćanja iz izvoda banke ostaju.",\r
"Obrisati sve automatski generisane smjene ovog mjeseca? Ručno unesene i zamijenjene ostaju.",\r
"Obrisati unos?",\r
"Obrisati uslugu {0} od {1}?",\r
"Obrisati uvezenu prodaju {0} za {1}?",\r
"Obrisati zakupodavca {0}?",\r
"Obrisati žiro račun {0}?",\r
"Obriši",\r
"Obriši lozinku",\r
"Obriši popis",\r
"Obriši pravilo {0}",\r
"obriši prethodni automatski raspored",\r
"Obriši stari kod sa ovog artikla",\r
"Obrnuti obračun — uklopi na ciljni neto",\r
"Obroka",\r
"Obuhvat",\r
"Obuhvat popisa",\r
"Obustava {0} EUR je upisana u obračun i odbijena od isplate radnika.",\r
"Obustave",\r
"Obustave iz neta (krediti, kazne, štete, administrativne zabrane…)",\r
"Obustave iz zarada",\r
"Obustavi postupak",\r
"Obustavljeno: {0}",\r
"Obustavljeno.",\r
"Obveznik PDV-a",\r
"Ocekivano",\r
"Očekivano",\r
"Očekivano u fioci",\r
"Očitaj ispravu (mašinski čitljiva zona)",\r
"Očitati barkod sa proizvoda (ekran „Artikli i barkodovi\\" ili skeniranje na kasi).",\r
"Očitati barkod sa proizvoda i dodati ispravan; postojeći kod ostaje dok se ne ukloni.",\r
"Očitavanje barkoda kamerom",\r
"Ocjena",\r
"OCR iz skeniranog izvještaja (strana {0}){1}",\r
"od",\r
"Od",\r
"OD",\r
"od {0}",\r
"od {0} kom. {1}",\r
"od 07:00 do 14:00 časova",\r
"Od datuma",\r
"Od datuma (prazno = od zadnje provjere)",\r
"od datuma: program čita Outlook i u „Pošti\\" razvrstava sve izvode banaka (dnevne, mjesečne, preglede).",\r
"Od kada je soba spremna za gosta.",\r
"Od kog datuma važi nova cijena? (GGGG-MM-DD)",\r
"Od koliko komada (N)",\r
"Od oktobra 2026. Poreska po službenoj dužnosti mijenja PDV broj u ME + PIB (čl. 72c ZPDV)",\r
"Od ovog časa teče rok prijave.",\r
"Od ovog datuma radnik više ne ulazi u obračune narednih mjeseci; u mjesecu prestanka dobija srazmjerne sate.",\r
"Od ovog datuma se same računaju godine staža kod nas (minuli rad).",\r
"Od sata (happy hour)",\r
"Od toga bez prava na odbitak",\r
"Od toga kasni",\r
"Od toga probnih računa",\r
"Od toga usluge",\r
"Od toga usluge (EUR)",\r
"Od toga usluge (pazar {0}{1}) (nije roba)",\r
"Od toga usluge sa kase {0} (nije roba)",\r
"od tri kriterijuma prelazi (prelazi dva od tri → sljedeća kategorija). Prekategorizacija tek poslije dvije uzastopne godine odstupanja. Obaveza:",\r
"Odakle",\r
"Odakle je uzeto",\r
"Odavanje poslovne tajne (cijene nabavke, podaci o dobavljačima i prometu)",\r
"Odbaci",\r
"Odbici na konačnim računima",\r
"Odbij",\r
"Odbij avans",\r
"odbijanje novčane kazne od plate (lakša: do",\r
"odbijen",\r
"odbijena cijena",\r
"Odbijeno",\r
"odbijeno — iznos cijene",\r
"odbijeno — kasa bez oznake",\r
"odbijeno — sukob šifre",\r
"Odbijeno na računima: {0}. Neiskorišćeno: {1} EUR.",\r
"Odbitak",\r
"Odbitak (prazno = najviše)",\r
"Odbitak avansa ({0}) je veći od iznosa računa ({1}).",\r
"Odbitak avansa {0} na računu {1}",\r
"Odbitak avansa je poništen.",\r
"Odbitak avansa ne postoji.",\r
"Odbitak avansa:",\r
"Odbitak: softver FZO (€)",\r
"Odgovara",\r
"Odgovara (nadređeno radno mjesto)",\r
"Odgovara za robu u prevozu i za urednost prateće dokumentacije.",\r
"Odgovor izdavača",\r
"Odgovor je prevelik.",\r
"odgovor na IOS",\r
"Odgovor na izvod otvorenih stavki",\r
"Odgovor servera je prevelik.",\r
"Odgovor servera nije ispravan (sabijanje).",\r
"Odgovor u niti #{0}",\r
"Odgovori u ovoj niti",\r
"Odgovorno lice",\r
"Odjava",\r
"Odjava policiji",\r
"Odjava policiji {0}",\r
"odjava.vrijemeDolaska",\r
"odjava.vrijemeOdlaska",\r
"Odjavi",\r
"Odjavi uz dug",\r
"Odjaviti gosta? Soba prelazi u stanje „za čišćenje\\".",\r
"Odjavljena",\r
"Odjavljeno policiji",\r
"Odjavljeno turističkoj organizaciji",\r
"Odjavu gostiju policiji označite u kartici Gosti.",\r
"Odlasci",\r
"Odlazak",\r
"odlazak {0}",\r
"Odlazak danas",\r
"Odlazak do",\r
"Odlazak do (čas)",\r
"Odlazak je planiran za {0} Skratiti boravak na {1}?",\r
"Odlazak mora biti poslije dolaska.",\r
"Odlazak: {0}",\r
"odliv",\r
"Odliv",\r
"ODLIV",\r
"ODLIVI",\r
"odlivi dobavljačima koji čekaju knjiženje",\r
"ODLIVI PO PRIMAOCU",\r
"Odložena poreska sredstva",\r
"Odložene poreske obaveze",\r
"Odloženi poreski rashodi i prihodi perioda",\r
"Odloženi prihodi i primljene donacije",\r
"Odlučuje o zasnivanju i prestanku radnog odnosa, rasporedu i zaradama zaposlenih.",\r
"Odluka",\r
"ODLUKA",\r
"odluka donesena",\r
"Odluka je konačna. Zaposleni može u roku od {0} dana od dana dostavljanja pokrenuti postupak pred Agencijom za mirno rješavanje radnih sporova{1} ({2}); pokretanje postupka ne odlaže izvršenje odluke. Odluka se dostavlja zaposlenom, braniocu i sindikalnom predstavniku koji je učestvovao u postupku u roku od {3} dana od donošenja.",\r
"Odluka nije snimljena.",\r
"Odluka o prirezu (javna rasprava 15.10.2019), čl. 3",\r
"Odluka o prirezu (Sl. list RCG – opšt. propisi 037/03, 008/04; Sl. list CG 006/20), čl. 3",\r
"Odluka o prirezu (Sl. list RCG – opšt. propisi 05/07) — DRI, revizija završnog računa Budve 2014; knjigovođa 30.09.2026 (2,49 na 24,99)",\r
"Odluka o prirezu Opštine Bijelo Polje (2003, izmjene 2016), čl. 3",\r
"Odluka o radu na dan praznika",\r
"Odluka o radu za vrijeme praznika",\r
"Odluka o radu za vrijeme praznika: izbor i uređivanje praznika (dodavanje, promjena datuma), objekti, radno vrijeme, broj i datum odluke",\r
"ODLUKA O RAZVRSTAVANJU PRAVNOG LICA ZA {0}. GODINU",\r
"Odluka o razvrstavanju za",\r
"Odluka o razvrstavanju za {0}. je snimljena.",\r
"odluka poslodavca",\r
"Odluka se objavljuje na oglasnoj tabli svakog objekta i dostavlja zaposlenima koji rade na dan praznika ({0}).",\r
"Odluka se objelodanjuje u napomenama uz finansijske iskaze (čl. 7 st. 6 Zakona).",\r
"Odluka Skupštine Glavnog grada, čl. 3 — zakon za Glavni grad do 15 %",\r
"Odluka Skupštine Prijestonice (2019), čl. 3 — zakon za Prijestonicu do 15 %",\r
"Odluka snimljena {0}.",\r
"Odluka SO Bar 28.10.2019 (Sl. list CG – opšt. propisi 044/19), čl. 4",\r
"Odluka SO Danilovgrad 07.02.2020, čl. 4",\r
"Odluka SO Kolašin 2020 (nacrt 06.05.2020), čl. 4",\r
"Odluka SO Kotor (Sl. list CG – opšt. propisi 045/22 od 16.09.2022), čl. 3; DRI 2024",\r
"Odluka SO Mojkovac 19.12.2019, čl. 3",\r
"Odluka SO Plav 29.03.2021 (Sl. list CG – opšt. propisi 009/21), čl. 3",\r
"Odluka SO Plužine (Sl. list CG – opšt. propisi 44/20 od 24.12.2020), čl. 5",\r
"Odluka SO Žabljak (Sl. list CG – opšt. propisi 16/18, 17/20), čl. 3",\r
"Odluka SO Zeta 30.03.2023 (Sl. list CG – opšt. propisi 017/23), čl. 4",\r
"Odluka uručena",\r
"odluku",\r
"Odluku o obustavi postupka, oslobađanju od odgovornosti ili izricanju mjere donijeće izvršni direktor u roku od {0} dana od isteka roka za izjašnjenje odnosno od održane rasprave (30 dana ako je potreban uviđaj ili vještačenje), i dostaviti je u roku od {1} dana od donošenja.",\r
"odmah proknjiži sigurno prepoznata plaćanja (PIB / upamćen račun)",\r
"Odmah rasporedi na otvorene fakture (tačan iznos → poziv na broj → najstarije prvo)",\r
"Odmori",\r
"odobrene",\r
"Odobrenja (kom)",\r
"Odobrenja koja čekaju obavještenje kupca: {0}.",\r
"Odobrenje čeka obavještenje kupca.",\r
"Odobrenje dobavljača (negativna faktura) — umanjuje dug; neiskorišćeni dio je negativan",\r
"Odobrenje dobavljača primijenjeno na ovu fakturu",\r
"Odobrenje ima IKOF i ne briše se.",\r
"Odobrenje je fiskalizovano.",\r
"Odobrenje je stornirano.",\r
"Odobrenje ne postoji.",\r
"Odobrenje se ne izdaje na korektivni račun.",\r
"Odobreno",\r
"ODOBRENO",\r
"Odobri pristup…",\r
"Odobrio",\r
"odojcad; adaptirano mlijeko; pocetna formula",\r
"Odrađeno u mjesecu — dani po smjenama",\r
"Odraslih",\r
"Određuje opština, od 0,10 do 1,00 EUR.",\r
"Određuje prirez za radnike i poziv na broj za uplatu poreza.",\r
"Određuje šifru osnova u IOPPD prijavi",\r
"Održava čistoću polica, magacinskog prostora i rashladnih uređaja.",\r
"Održava čistoću prodajnog prostora, magacina, sanitarnih čvorova i okoline objekta.",\r
"Održava red i čistoću radnog mjesta i poštuje pravila o higijeni.",\r
"Održava red, čistoću i uslove čuvanja (temperatura, rok) u magacinu.",\r
"Održava šifarnike (dobavljači, artikli, radnici) i arhivu dokumenata.",\r
"Održava vozilo u ispravnom i čistom stanju, vodi putni nalog i evidenciju goriva.",\r
"Održavanje i popravke",\r
"Održavanje trudnoće",\r
"odštampano: {0}",\r
"odstupanja",\r
"Odstupanja u troškovima gotovih proizvoda",\r
"Odstupanja u troškovima nosioca troškova",\r
"Odstupanje salda: kod dobavljača {0}, u evidenciji {1}. Razlika: {2} EUR.",\r
"Odsustva",\r
"Odsustva i praznici",\r
"Odsustva radnika",\r
"odsustvo",\r
"Odsustvo",\r
"Odsustvo — {0} {1}–{2}",\r
"Odsustvo je obrisano.",\r
"Odsustvo je upisano. Uvažava se pri automatskom raspoređivanju.",\r
"odsustvo na koje se rješenje odnosi još nije stiglo",\r
"Odsustvo nije godišnji odmor.",\r
"odsustvo: {0}",\r
"Odustani",\r
"Odvoji ovu firmu",\r
"Odvojiti ovu firmu od zajedničke veze?\\n\\nOstale firme veze ostaju uparene; ova firma do novog uparivanja nema razmjenu preko servera.",\r
"offlineDana: 1–365.",\r
"ok",\r
"oktobar",\r
"Oktobar",\r
"oktobra",\r
"ol",\r
"OLD",\r
"onako kako stigne iz banke (Hipotekarna, Prva banka i NLB se čitaju automatski; NLB",\r
"onemoguceno",\r
"ono što ovdje piše. Bez kvačice minuli rad (po šemi sa kartice „Stope\\") ide",\r
"OP",\r
"Opciono",\r
"Opciono (zakup, mjesečne usluge); štampa se na dokumentu.",\r
"Operater",\r
"operaterski kod",\r
"Operaterski kod",\r
"Opis",\r
"opis (sastojci, gramaža…)",\r
"Opis (svrha)",\r
"Opis događaja (šta se desilo, gdje, ko je bio prisutan) — ide u obavještenje i rješenje",\r
"opis greške, verziju programa, naziv ekrana i posljednje radnje",\r
"Opis iz izvoda",\r
"Opis na računu",\r
"Opis naloga",\r
"Opis poslova — svaka stavka u novom redu (ide u ugovor o radu)",\r
"Opis povrede je obavezan.",\r
"Opis problema je obavezan.",\r
"Opis sa izvoda",\r
"Opis svrhe",\r
"Opis zahtjeva ili problema: ekran, izvršena radnja i dobijeni rezultat. Lični podaci (JMBG, žiro računi, telefoni, imena radnika i kupaca) se iz teksta i priloga brišu prije slanja.",\r
"Opis zahtjeva.",\r
"opis, dobavljač, kupac",\r
"Opiši zahtjev.",\r
"opojna droga / psihotropna supstanca (poseban recept)",\r
"Opojna droga i psihotropna supstanca se izdaju samo na recept (Rx).",\r
"opomena",\r
"Oporeziva",\r
"Oporeziva dobit (1−3+4+5−6+7…24−25+28+29+30+31+34−35−36−37) > 0",\r
"Oporezivi promet po stopi od 0% (čl. 25 Zakona o PDV)",\r
"Oporezivi promet po stopi od 0% (čl. 25 Zakona o PDV) (pazari po osnovu artikla + fakture sa osnovom čl. 25 + ručno)",\r
"Oporezivi promet po stopi od 15% — osnovica",\r
"Oporezivi promet po stopi od 15% — osnovica (pazari + izdate fakture)",\r
"Oporezivi promet po stopi od 21% — osnovica",\r
"Oporezivi promet po stopi od 21% — osnovica (pazari + izdate fakture)",\r
"Oporezivi promet po stopi od 7% — osnovica",\r
"Oporezivi promet po stopi od 7% — osnovica (pazari + izdate fakture)",\r
"oporezivo",\r
"OPREMA",\r
"OPREME",\r
"opšta",\r
"Opšta",\r
"OPŠTA",\r
"opšta cijena",\r
"Opšta cijena",\r
"Opšta cijena {0}",\r
"Opšta cijena bez prethodne vrijednosti se ne poništava.",\r
"Opšta cijena firme",\r
"Opšta cijena mora biti veća od nule (prazno polje = cijena se ne mijenja).",\r
"Opšta cijena nije broj.",\r
"Opšta cijena važi na {n} mjesta koja nemaju svoju cijenu. Promijeniti opštu cijenu?",\r
"Opšta cijena važi na svim mjestima koja za artikal nemaju svoju cijenu. Nova cijena se upisuje u polje i potvrđuje tasterom Enter; svaka izmjena traži PIN i potvrdu.",\r
"Opšta cijena: {0}",\r
"Opšte cijene",\r
"Opšti kolektivni ugovor („Sl. list CG\\", br. 150/22) — važio do 30.04.2026",\r
"Opšti kolektivni ugovor čl. 26 i 27 (važio do 30.04.2026)",\r
"opštih cijena",\r
"Opštih cijena",\r
"opštih i",\r
"Opstina",\r
"Opština",\r
"opština „{0}\\" nije prepoznata kao opština Crne Gore",\r
"Opština (za prirez)",\r
"Opština {0} (šifra {1}): prirez i poziv na broj {2}-{3}",\r
"opština nije upisana",\r
"opština odluka nije objavljena na mreži). Kad opština promijeni stopu, nova stopa se upisuje u kolonu „Stopa\\" (prazno = polazna). Promjena važi za nove radnike i za provjeru obračuna; postojećim radnicima stopa stoji na kartici radnika. Šifra opštine sjedišta firme (",\r
"Opština prebivališta — po njoj se određuje prirez",\r
"Opština prebivališta izvršioca — po njoj se određuje prirez i račun za uplatu",\r
"Opština prebivališta izvršioca je obavezna. Po njoj se određuje prirez.",\r
"Opština prebivališta radnika nije upisana. Po njoj se određuje prirez (stopa se upisuje automatski). Sjedište firme nije poznato (Podešavanja → Podaci firme → Grad).",\r
"Opština prebivališta zakupodavca — po njoj se određuje prirez i račun za uplatu",\r
"Opština sjedišta — njena šifra ide u poziv na broj pri uplati poreza i doprinosa (model 18, PIB-šifra)",\r
"Opština sjedišta:",\r
"Opština Tivat, stranica Budžet: „Stopa prireza iznosi 13% poreske obaveze\\"",\r
"Opštu cijenu mijenjaju administrator i direktor.",\r
"optgroup",\r
"option",\r
"Orah, badem, lješnik, kesten, rogač",\r
"Orašasti plodovi",\r
"Org. jedinica",\r
"organ koji je izdao ispravu",\r
"Organizaciona jedinica je dio Poslodavca u kome se obavlja srodna grupa poslova pod jedinstvenim rukovođenjem.",\r
"Organizacione i rukovodeće sposobnosti; poznavanje propisa o radu, trgovini i porezima.",\r
"Organizuje i vodi poslovanje, donosi odluke iz nadležnosti izvršnog direktora.",\r
"Organizuje nabavku kancelarijskog materijala i opreme i vodi evidenciju osnovnih sredstava.",\r
"original dok",\r
"Orijentacioni globalni normativ. Po Pravilniku procenat zavisi od vrste robe (tabela „Normativ (Pravilnik)\\").",\r
"Ortačko društvo",\r
"OS",\r
"OS {0}",\r
"osjetljive radnje, naročito kad program koristi više osoba; nije zaštita od zlonamjernog korisnika (baza je fajl na disku).",\r
"Osl. 0%",\r
"Oslobođen",\r
"Oslobođen po međunarodnom sporazumu",\r
"Oslobođene PDV",\r
"Oslobođeni do",\r
"Oslobođeni do (godina)",\r
"Oslobođeni promet — isporuke (čl. 26 i 27)",\r
"Oslobođeni promet — isporuke (čl. 26 i 27) (pazari po osnovu artikla + fakture sa tim osnovom + ručno)",\r
"Oslobođeno",\r
"Oslobođeno — od javnog interesa",\r
"Oslobođeno — ostala oslobođenja",\r
"Oslobođeno (čl. 26–27)",\r
"Oslobodi naplatu",\r
"Oslobodjen",\r
"Oslobodjeno",\r
"Osn. kr.potr. 15",\r
"Osn. obveznici 15",\r
"Osn. obveznici NS",\r
"Osn0",\r
"Osn15",\r
"Osn21",\r
"Osn7",\r
"Osnivač / skupština društva",\r
"Osnov",\r
"Osnov (član ugovora o radu)",\r
"Osnov (propis)",\r
"osnov {0} dana: {1}",\r
"Osnov 0 % je snimljen.",\r
"Osnov kr. potr. NS",\r
"Osnov nije određen. Promet ide u polje po postavci firme (PR-PDV).",\r
"Osnov oslobađanja, ako postoji.",\r
"Osnov za promet po stopi 0 %. {0} ZPDV čl. 71e: čl. 25 st. 1 t. 12d (hljeb, brašno, ulje po 0 %) prestao je da važi 31.12.2022.",\r
"Osnov za rad na određeno (obavezan element ugovora,",\r
"Osnov za stavke sa 0 % PDV (piše se na računu)",\r
"Osnov za zaključivanje ugovora na određeno vrijeme: {0} ({1}). Ukupno trajanje jednog ili više ugovora na određeno vrijeme sa Zaposlenim ne može biti duže od {2} mjeseca, pri čemu se prekid kraći od {3} dana ne smatra prekidom; ako Zaposleni nastavi da radi po isteku ugovorenog vremena, radni odnos se smatra zasnovanim na neodređeno vrijeme ({4}). Zaposleni na određeno vrijeme ima ista prava i obaveze kao zaposleni na neodređeno vrijeme ({5}).",\r
"Osnov zbog kog je ugovor na određeno zaključen (ulazi u obrazloženje)",\r
"Osnov: {0}{1}.",\r
"Osnova",\r
"Osnovi i procenti uvećanja zarade ({0}): minuli rad — {1} (ukupan staž na dan zaključenja: {2} god., uvećanje {3} %); prekovremeni rad {4} %; noćni rad {5} %; rad na dan državnog ili vjerskog praznika {6} %; rad nedjeljom {7} %, osim kad je nedjelja redovan radni dan po rasporedu smjena (rad u turnusu) za koji je obezbijeđen drugi dan sedmičnog odmora. Uvećanja po više osnova se sabiraju.",\r
"Osnovi oslobađanja",\r
"Osnovica",\r
"Osnovica je obavezna (iznos računa bez PDV-a, u eurima).",\r
"Osnovica kr.potr.",\r
"Osnovica niža st.",\r
"Osnovica normativa",\r
"Osnovica obveznici",\r
"Osnovica opšta st.",\r
"Osnovica PDV",\r
"Osnovica PDV pri uvozu mora biti veća od nule.",\r
"Osnovica snižena st.",\r
"osnovica21%",\r
"Osnovice + PDV + oslobođeno = {0} (ukupan promet: {1})",\r
"Osnovna bruto",\r
"Osnovna cijena noći (EUR sa PDV-om)",\r
"osnovna lista",\r
"Osnovna neto",\r
"osnovna plata",\r
"Osnovna plata BRUTO (EUR)",\r
"Osnovna plata NETO (EUR) *",\r
"Osnovna škola (I–II)",\r
"Osnovna sredstva do",\r
"Osnovna sredstva i troškovi (ulazni PDV se odbija u PR-PDV) · amortizacija · porez na dobit",\r
"Osnovna sredstva i troškovi, amortizacija (OA), porez na dobit (PD)",\r
"Osnovna sredstva: objekti (grupa I)",\r
"Osnovna sredstva: oprema (grupe II–V)",\r
"Osnovna sredstva: softver i licence",\r
"Osnovne stavke već daju {0} EUR (neto {1} + neoporezivo {2}), što je više od cilja {3}. Potrebno je smanjiti osnovnu platu, sate ili neoporeziva primanja.",\r
"Osnovne stavke već daju tačno traženi iznos.",\r
"OSNOVNI KAPITAL",\r
"Osnovnih",\r
"Osnovnih dana",\r
"Osnovnih ležaja",\r
"Osnovno sredstvo (>300 EUR, >1 god)",\r
"Osnovno sredstvo {0}",\r
"Osnovno stado",\r
"OSO",\r
"osoba",\r
"Osoba",\r
"Osoba-noćenja",\r
"osobe",\r
"Osporavanje IOS-a",\r
"Ostaje dug partnera {0} EUR za fakturu. Odjaviti gosta?",\r
"ostaje: samo cigare",\r
"ostaju po datumu računa, kako su vođeni do prelaza — predati mjeseci se ne mijenjaju.",\r
"ostaju sa svojom maržom (mijenja se samo ostala roba na istoj fakturi), kao i kalkulacije u",\r
"Ostala aktivna vremenska razgraničenja",\r
"Ostala nematerijalna ulaganja",\r
"Ostala novčana sredstva",\r
"Ostala oporeziva primanja",\r
"Ostala pasivna vremenska razgraničenja",\r
"Ostala potraživanja",\r
"Ostala potraživanja iz specifičnih poslova",\r
"Ostala rezervisanja",\r
"Ostala stalna sredstva namijenjena prodaji",\r
"Ostala tekstilna roba / obuća",\r
"ostale {0} %",\r
"Ostale dugoročne obaveze",\r
"Ostale kratkoročne finansijske obaveze",\r
"Ostale kratkoročne finansijske obaveze — pozajmice vlasnika i povezanih lica",\r
"Ostale nekretnine, postrojenja i oprema",\r
"Ostale obaveze",\r
"Ostale obaveze iz poslovanja",\r
"Ostale obaveze iz specifičnih poslova",\r
"Ostale obaveze za poreze, doprinose i druge dažbine",\r
"Ostale promjene nerealizovanih dobitaka i gubitaka",\r
"Ostali dugoročni finansijski plasmani",\r
"Ostali finansijski prihodi",\r
"Ostali finansijski rashodi",\r
"Ostali hemijski proizvodi",\r
"Ostali kratkoročni finansijski plasmani",\r
"Ostali lični rashodi i naknade",\r
"Ostali nematerijalni troškovi",\r
"Ostali nepomenuti prihodi",\r
"Ostali nepomenuti rashodi",\r
"Ostali osnovni kapital",\r
"Ostali poslovni prihodi",\r
"Ostali poslovni rashodi",\r
"Ostali prehrambeni",\r
"Ostali prihodi",\r
"OSTALI PRIHODI",\r
"Ostali rashodi",\r
"OSTALI RASHODI",\r
"Ostali troškovi (Tip=TROSAK + zavisni troškovi van nabavne)",\r
"Ostali troškovi (Tip=TROSAK)",\r
"ostalo",\r
"Ostalo",\r
"Ostalo / nerazvrstano",\r
"Ostalo nespomenuto",\r
"Ostalo povrće",\r
"Ostalo voće",\r
"Ostatak",\r
"Ostatak do",\r
"Ostatak kapitalnog dobitka (44 − 46) ≥ 0",\r
"Ostatak oporezive dobiti (38 − 40) > 0",\r
"OSTVARENA RAZLIKA U CIJENI — {0}",\r
"Ostvarena razlika u cijeni (RUC)",\r
"Ostvarena razlika u cijeni na prodaji za period: po artiklu, grupi i objektu · nabavna vrijednost prodatog · izvoz",\r
"Osvježavanje…",\r
"Osvježi",\r
"Osvježi program",\r
"Osvježi sa servera",\r
"Osvježi spisak",\r
"OT",\r
"OT-{0}-{1}",\r
"OTC",\r
"OTC — bez recepta",\r
"Otisak CA (SHA-256)",\r
"Otisak CA iz sertifikata se razlikuje od otiska koji je server najavio u mreži. Uparivanje nije bezbjedno.",\r
"Otisak CA nije ispravan (SHA-256, 32 para heks znakova).",\r
"Otisak CA nije ispravan.",\r
"Otisak je isti kao na ekranu Pregled programa IRIS Server (ili na listi kodova iz IRIS Admina)",\r
"Otisak se ne može pročitati: {0}",\r
"Otisak SHA-256 dokazuje da fajl nije mijenjan: ponovo izračunati otisak mora biti isti kao ovdje.",\r
"Otkaz od strane poslodavca traži",\r
"Otkaz od strane poslodavca…",\r
"Otkaz rezervacije",\r
"otkaz.stopaNaknade",\r
"otkaz.zadrzaniAvans",\r
"otkazan",\r
"Otkazana",\r
"otkazane",\r
"Otkazani",\r
"otkazano {0}",\r
"Otkazano na računaru „{0}\\"{1}.",\r
"otkazano u Menadžeru",\r
"Otkazati nalog „{0}\\"?\\n\\nNalog koji je glavni računar u međuvremenu izvršio ostaje izvršen.",\r
"Otkazati se može samo nalog koji čeka glavni računar.",\r
"Otkazati zakazanu cijenu {0} za „{1}\\" ({2})?",\r
"Otkaži",\r
"Otkaži cijenu",\r
"Otkaži nalog",\r
"Otkaži rezervaciju",\r
"Otkazni rok iznosi {0} dana od dana dostavljanja otkaza odnosno rješenja ({1}); u slučajevima iz {2} st. 2 (neopravdano izostajanje, nasilničko ponašanje, krivično djelo na radu i druge teže povrede) radni odnos prestaje bez otkaznog roka. Za vrijeme otkaznog roka Zaposleni ima pravo na najmanje {3} časa sedmično odsustva radi traženja posla. Pri prestanku radnog odnosa Poslodavac isplaćuje sve neisplaćene zarade i naknade najkasnije u roku od {4} dana ({5}), omogućava korišćenje neiskorišćenog godišnjeg odmora ili isplaćuje naknadu štete ({6}) i vraća radnu knjižicu na dan prestanka ({7}); Zaposleni vraća sredstva rada, opremu, ključeve i dokumentaciju.",\r
"Otključaj",\r
"Otključano",\r
"Otključati {0}?\\n\\nPoslije otključavanja se kalkulacije i fakture tog mjeseca mogu mijenjati i brisati, pa se mogu promijeniti i knjige već predate knjigovođi.",\r
"Otključati nivelaciju? Nivelacija izlazi iz trgovačke knjige, a cijena kase se vraća na prethodnu.",\r
"Otključati otpremnicu radi ispravke? Do ponovnog izdavanja roba nije razdužena.",\r
"Otključati revers radi ispravke? Roba se vraća u lager dok se revers ponovo ne izda.",\r
"OTKUP",\r
"Otkupljene sopstvene akcije i otkupljeni sopstveni udjeli namijenjeni prodaji ili poništavanju",\r
"OTP",\r
"otpis",\r
"Otpis",\r
"OTPIS",\r
"Otpis (kol.)",\r
"Otpis (minus kalkulacija)",\r
"Otpis (rashod) robe i nalog za knjiženje",\r
"Otpis (zapisnik) čije je ovo knjiženje",\r
"Otpis {0}",\r
"Otpis {0} — {1}, {2}, {3} €",\r
"Otpis {0} sa kase {1}: {2}",\r
"Otpis evidentiran na kasi",\r
"Otpis je numerisan u {0}. godini. Datum mora ostati u toj godini; za drugu godinu potreban je nov otpis.",\r
"Otpis je otključan.",\r
"Otpis je prazan.",\r
"Otpis je proknjižen (ima minus kalkulaciju). Otključavanje je moguće nakon poništavanja knjiženja.",\r
"Otpis je proknjižen. Izmjena je moguća nakon poništavanja knjiženja.",\r
"Otpis je već poslat na glavni računar. {0}",\r
"Otpis je već proknjižen (minus kalkulacija postoji).",\r
"Otpis je zaključan.",\r
"Otpis je zaključan. Izmjena je moguća nakon otključavanja.",\r
"Otpis knjiži glavni računar. {0}",\r
"Otpis nema stavki. Knjiženje nije moguće.",\r
"Otpis nije nađen.",\r
"Otpis nije proknjižen.",\r
"Otpis sa kase {0}{1}{2}{3}",\r
"Otpis se razdužuje sa sljedećim čitanjem zaključaka.",\r
"otpisa",\r
"Otpisa",\r
"Otpisa sa kase",\r
"Otpisana vrijednost i ispravka vrijednosti sumnjivih potraživanja koje se ne priznaju (a+b)",\r
"otpisano",\r
"Otpisano",\r
"otpisano ({0} dokumenata, nabavna)",\r
"Otpisi",\r
"Otpisi (brojevi)",\r
"Otpisi i manjkovi zaliha učinaka",\r
"Otpisi materijala i robe",\r
"Otpisi sa kase",\r
"Otpisi sa kase: {0}",\r
"Otpiši stavku",\r
"OTPR",\r
"Otpremnica",\r
"Otpremnica (PDF)",\r
"Otpremnica (račun nije izdat)",\r
"Otpremnica {0}",\r
"Otpremnica {0} je numerisana u {1}. godini. Datum mora ostati u toj godini.",\r
"Otpremnica {0} nije izdata.",\r
"Otpremnica br. {0} od {1}{2} (račun nije izdat)",\r
"Otpremnica ima fakturu. Otključavanje nije moguće.",\r
"Otpremnica iz koje je faktura nastala",\r
"Otpremnica je izdata (",\r
"Otpremnica je izdata.",\r
"Otpremnica je izdata. Izmjena je moguća nakon otključavanja.",\r
"Otpremnica je obrisana.",\r
"Otpremnica je otključana.",\r
"Otpremnica je već izdata.",\r
"Otpremnica ne postoji.",\r
"Otpremnica nema kupca.",\r
"Otpremnica nema stavki.",\r
"Otpremnica nije fiskalni račun. Račun za isporučenu robu se izdaje naknadno.",\r
"Otpremnica nije izabrana.",\r
"Otpremnica nije izdata.",\r
"Otpremnica se izdaje na dan isporuke ({0}) ili kasnije.",\r
"Otpremnice",\r
"Otpremnice bez računa",\r
"OTPREMNICE BEZ RAČUNA",\r
"Otpremnice bez računa sa PDV obavezom do {0} (osmi dan od isporuke, čl. 18 st. 3 Zakona o PDV): {1}. PDV po njima nije u prijavi dok se ne izda račun.",\r
"Otpremnice bez računa starije od",\r
"Otpremnice bez računa starije od 8 dana: {0}",\r
"Otpremnice na fakturi pripadaju različitim PDV periodima ({0}). Za svaki period potrebna je posebna faktura.",\r
"Otpremnice pripadaju različitim PDV periodima; za svaki period potrebna je posebna faktura.",\r
"Otpremnice su iz različitih objekata. Za svaki objekat potrebna je posebna faktura.",\r
"Otpremnice su za različite kupce. Faktura se pravi za jednog kupca.",\r
"Otpremnina — sporazumni raskid (cijela drugo primanje, porez 15 %)",\r
"Otpremnina — tehnološki višak (neoporezivo do najniže po Zakonu o radu; upiši iznos za slučaj)",\r
"Otpremnina pri odlasku u penziju (do 1.500 EUR)",\r
"Otuđenje ili namjerno oštećenje imovine poslodavca ili robe",\r
"Otuđenje OS (prodaja / rashodovanje)",\r
"Otuđenje OS: {0} ({1}; ispravka {2})",\r
"Otuđenje OS: dobitak od prodaje",\r
"Otuđenje OS: gubitak (rashodovanje, prodaja ispod sadašnje vrijednosti)",\r
"Otuđenje osnovnog sredstva",\r
"Otuđeno",\r
"otuđeno {0}",\r
"Otuđi",\r
"otvara se uz izmjenu artikla",\r
"OTVARANJE I ZAKLJUČAK RAČUNA STANJA I USPJEHA",\r
"Otvaranje kioska „{0}\\" uz objekat „{1}\\" za prodajno mjesto „{2}\\"",\r
"Otvaranje objekta „{0}\\" za prodajno mjesto „{1}\\"",\r
"otvaranje PDF-a",\r
"Otvaranje PDF-a",\r
"otvaranje plata, kadrova i smjena (JMBG, zarade, ugovori radnika)",\r
"Otvaranje postojeće firme „{0}\\"…",\r
"Otvaranje računa glavne knjige finansijskog knjigovodstva",\r
"OTVARANJE RAČUNA GLAVNE KNJIGE FINANSIJSKOG KNJIGOVODSTVA",\r
"otvoren",\r
"Otvoren obračun plate za razliku nije izabran.",\r
"otvorena",\r
"Otvorena",\r
"Otvorena firma nema upisan PIB. Prema podacima servera, ovaj uređaj pripada firmi „{0}\\" (PIB {1}).\\n\\nUpisati te podatke u otvorenu firmu (samo prazna polja)?",\r
"Otvorena je druga firma. Fajl {0} firme „{1}\\" nije upisan (ponavlja se u sljedećem krugu).",\r
"Otvorena je druga firma. Fajl {0} nije upisan.",\r
"Otvorena je postojeća",\r
"otvorena od {0}",\r
"Otvorena smjena{0}",\r
"otvorene",\r
"Otvorene fakture",\r
"Otvorene stavke",\r
"OTVORENE STAVKE DOBAVLJAČA",\r
"Otvoreni obračuni se usklađuju pri „Obračunaj sve\\"; ovdje je prikaz informativan.",\r
"Otvorenih faktura",\r
"otvorenih kvarova",\r
"otvorenih narudžbi · {0}",\r
"otvorenih zadataka · {0} kasni",\r
"otvoreno",\r
"Otvoreno",\r
"Otvori",\r
"Otvori ažuriranje",\r
"Otvori Banku",\r
"Otvori Dobavljače",\r
"Otvori dokument",\r
"Otvori Kadrove",\r
"Otvori kalkulaciju",\r
"Otvori kiosk",\r
"Otvori kiosk uz „{0}\\"",\r
"Otvori KO",\r
"Otvori nacrt poruke",\r
"Otvori nov objekat…",\r
"Otvori Obaveze → Pošta",\r
"Otvori Podršku",\r
"Otvori ponovo",\r
"Otvori postojeću",\r
"Otvori spisak",\r
"Outlook ima više poštanskih sandučadi ({0}). Pošta se ne čita dok se ne izabere sanduče ove firme (Obaveze → Pošta → Sanduče).",\r
"Outlook nije odgovorio (vjerovatno nije pokrenut). Potrebno je pokrenuti klasični Outlook i ponoviti provjeru nakon učitavanja pošte.",\r
"Outlook nije odgovorio na vrijeme. Otvori Outlook, sačekaj da učita poštu i pokušaj ponovo.",\r
"Outlook nije pokrenut.",\r
"Outlook nije pokrenut. Čitanje pošte nije moguće dok Outlook ne radi.",\r
"Outlook nije pokrenut. Pokreni klasični Outlook i sačekaj da učita poštu — program će sam pročitati poruke.",\r
"Outlook se ne može pokrenuti: {0}",\r
"Outlook se pokreće. Čitanje pošte se automatski ponavlja za oko 40 sekundi.",\r
"Outlook se pokreće. Učitavanje pošte traje oko pola minuta; zatim je potrebno pokrenuti „Provjeri poštu\\".",\r
"Ova baza je snimak za razmjenu, a ne firma. Objava nije dozvoljena; snimak je potrebno obrisati sa početnog ekrana.",\r
"Ova baza je snimak za razmjenu. Fajl za Menadžer se pravi iz baze firme.",\r
"ova firma",\r
"Ova firma razmjenjuje preko veze firme „",\r
"Ova firma već ima glavni računar (njegova baza je na serveru), pa je ovaj računar dodatni: „Sporedni\\" ili „Administrator\\". Glavni smije biti samo jedan.",\r
"Ova godina",\r
"Ova godina ({0}.)",\r
"Ova instalacija programa čuva jedan sertifikat za sve firme na računaru. Za više firmi sa sopstvenim sertifikatima potrebna je instalacija Setup 1.0.90 ili novija; do tada se račun ne potpisuje sertifikatom na kom nije PIB firme.",\r
"Ova prodaja ne ulazi u RUC. Rješenje: povezati artikal kase ili red uvoza sa artiklom šifarnika, odnosno unijeti kalkulaciju ili početno stanje sa nabavnom cijenom.",\r
"Ova promjena je već poništena.",\r
"Ova radnja nije dozvoljena na ovom uređaju.",\r
"Ova sedmica",\r
"Ova verzija aplikacije nema ugrađeno potpisivanje računa. Fiskalizacija je dostupna uz novu instalaciju programa (Setup), ne uz obično ažuriranje.",\r
"Ova verzija programa ({0}) više nije podržana na serveru. Potrebno je ažuriranje na verziju {1} ili noviju — upis na server čeka ažuriranje.",\r
"Ova vrsta dokumenta se ne kopira.",\r
"ovaj",\r
"Ovaj kvartal ({0}.)",\r
"ovaj objekat",\r
"Ovaj mjesec",\r
"Ovaj mjesec ({0})",\r
"Ovaj mjesec je prije prelaza na datum prijema ({0}/{1}) i ostaje po datumu računa, kako je vođen.",\r
"Ovaj račun je fiskalizovan. Storno se radi korektivnim računom (dugme „Storno (korektivni račun)\\").",\r
"Ovaj račun je već skeniran i čeka obradu na računaru.",\r
"Ovaj račun je već skeniran i čeka obradu.",\r
"Ovaj račun je već skeniran i obrađen u kalkulaciju.",\r
"Ovaj račun ulazi u knjige za",\r
"Ovaj računar je",\r
"Ovaj računar je admin. Promjene se šalju glavnom računaru; kad glavni objavi noviji snimak, baza se ovdje zamjenjuje (već poslati unosi ostaju sačuvani).",\r
"Ovaj računar je glavni i objavljuje snimak; ponovni prijem bi njegovu bazu zamijenio starijim snimkom. Nalog nije izvršen.",\r
"Ovaj računar je sada admin: ima ovlašćenja glavnog (obrada, brojevi, knjige, podešavanja), ne objavljuje bazu i automatski prati bazu glavnog.",\r
"Ovaj računar je sada glavni: obrađuje skenove, dodjeljuje brojeve i objavljuje bazu.",\r
"Ovaj računar je sada sporedni: unosi dokumente i automatski prati bazu glavnog.",\r
"Ovaj računar nije povezan sa serverom IRIS CORVINA (Povezivanje → Razmjena). Menadžer se povezuje fajlom baze.",\r
"Ovaj računar nije uparen sa serverom kao Knjigovodstvo. Kase se vode lokalno.",\r
"Ovaj računar nije uparen sa serverom kao Knjigovodstvo. Menadžer se povezuje fajlom baze.",\r
"Ovaj radnik nema smjena u tom mjesecu.",\r
"Ovaj uređaj",\r
"Ovaj uređaj je podešen kao skener i ne pravi kalkulacije. Za računar u kancelariji režim se mijenja u Podešavanja → Uređaj.",\r
"Ovaj uređaj je podešen kao skener. Ova radnja se izvršava na računaru u kancelariji.",\r
"Ovaj uređaj je podešen samo za skeniranje. Kalkulacije pravi računar.",\r
"Ovaj uređaj je telefon: skenira i šalje fakture. Kalkulacije i brojeve dokumenata pravi računar u kancelariji; na telefonu to nije moguće uključiti.",\r
"Ovaj uređaj je već uparen za firmu „{0}\\" (PIB {1}).\\n\\nNov kod uparuje uređaj za drugu firmu: razmjena za „{2}\\" preko servera na ovom uređaju se tada prekida (baza ostaje).\\n\\nNastaviti?",\r
"Ovaj uređaj ne razmjenjuje podatke",\r
"Ovaj uređaj ne razmjenjuje podatke sa kasama. Potrebna je veza sa serverom ili folder za razmjenu (Povezivanje).",\r
"Ovaj uređaj ne razmjenjuje podatke. Potrebna je veza sa serverom IRIS CORVINA (Povezivanje).",\r
"Ovaj uređaj nije povezan sa serverom IRIS CORVINA. Povezivanje se radi kodom koji daje administrator (Povezivanje → Server).",\r
"Ovaj uređaj nije uparen sa serverom IRIS CORVINA. Poruke, zahtjevi i prijave grešaka se šalju kroz server. Uparivanje: Povezivanje → „Server (IRIS CORVINA)\\" (kod daje izdavač).",\r
"Ovaj uređaj sada pravi kalkulacije i dodjeljuje brojeve.",\r
"Ovaj uređaj sada samo skenira. Kalkulacije pravi računar.",\r
"Ovdje",\r
"ovdje je taj podatak mijenjan poslije stanja od kog je krenuo drugi računar",\r
"ovdje je taj podatak mijenjan, a izmjena još nije otišla",\r
"ovdje je taj podatak obrisan",\r
"ovdje već postoji drugi objekat sa nazivom „{0}\\"",\r
"Ove izmjene sa drugih računara nisu upisane automatski, jer bi mogle prepisati noviji rad. Za svaku izmjenu se bira:",\r
"Ovi računi su izdati u",\r
"Ovim je godišnji odmor za tekuću godinu iskorišćen u cjelini.",\r
"Ovim pravilnikom uređuju se dužina godišnjeg odmora, kriterijumi za njegovo uvećanje, način i postupak korišćenja, plan korišćenja, naknada zarade za vrijeme odmora i plaćeno i neplaćeno odsustvo zaposlenih kod Poslodavca. Pošto Opšti kolektivni ugovor ne važi od 30.04.2026, prava koja je on utvrđivao uređuju se ovim pravilnikom i ugovorom o radu ({0}).",\r
"Ovim pravilnikom utvrđuju se radne obaveze zaposlenih, lakše i teže povrede radne obaveze, mjere koje se za njih izriču, postupak utvrđivanja odgovornosti, privremeno udaljenje sa rada i materijalna odgovornost. Zaposleni odgovara samo za povredu koja je u vrijeme izvršenja bila utvrđena zakonom, kolektivnim ugovorom ili ugovorom o radu (čl. 144 st. 4 ZOR), pa se lista povreda iz ovog pravilnika ugrađuje i u ugovor o radu svakog zaposlenog.",\r
"Ovim pravilnikom utvrđuju se unutrašnja organizacija {0} (u daljem tekstu: Poslodavac), organizacione jedinice i njihov djelokrug, radna mjesta sa opisom poslova, uslovi za zasnivanje radnog odnosa i obavljanje poslova na svakom radnom mjestu (nivo kvalifikacije obrazovanja odnosno stručna kvalifikacija, radno iskustvo, posebna znanja, vještine i kompetencije), broj izvršilaca, odgovornost i rukovođenje, kao i način raspoređivanja zaposlenih ({1}). Poslodavac ima više od {2} zaposlenih i dužan je da ima ovaj akt ({3}).",\r
"Ovim ugovorom Zaposleni zasniva radni odnos kod Poslodavca na {0}, sa {1}. Dan stupanja na rad je {2} godine; prava i obaveze iz radnog odnosa nastaju tim danom.",\r
"Ovlašćeno lice",\r
"Ovo je admin računar. Njegova baza može kasniti za glavnim nekoliko minuta, a kase uzimaju svaki noviji cjenovnik. Objaviti cjenovnik sa ovog računara?",\r
"Ovo je admin računar. Zaključke kasa preuzima glavni računar; preuzimanje ovdje pravi dokumente otpisa sa brojevima ovog računara.\\n\\nNastaviti?",\r
"Ovo je presjek stanja do {0}; promet poslije toga nije obuhvaćen.\\n\\nPresjek se snima samo ako je dan tada završen. Dnevni (Z) izvještaj istog dana ga kasnije zamjenjuje.\\n\\nSnimiti presjek?",\r
"Ovo je prvi Menadžer firme: na njemu se pravi administrator Menadžera (ime i PIN).",\r
"Ovo je snimak za razmjenu, ne baza firme. Na sporednom računaru podaci se preuzimaju kroz Povezivanje → „Preuzmi kompletnu bazu glavnog\\". Ova stavka se može obrisati.",\r
"Ovo je sporedni računar: nalozi napravljeni ovdje ostaju samo na ovom računaru i snimak glavnog računara ih prepisuje. Finansije se vode na glavnom (ili admin) računaru.",\r
"Ovo nije fiskalni račun.",\r
"Ovo nije ponuda.",\r
"Ovo nije QR kod fiskalnog računa. Kameru je potrebno usmjeriti na QR kod sa računa.",\r
"Ovo nije zvanični obrazac bilansa. Troškovi zarada se povlače iz modula Plate (bez obračuna za godinu stoje na nuli); ostali poslovni rashodi se ne vode u aplikaciji i stoje na nuli, pa ih je potrebno dopuniti prije predaje. Bilans stanja traži kontni plan i u ovom obliku nije dostupan.",\r
"Ovo podešavanje je dostupno samo na Android telefonu.",\r
"Ovo su dvije stvarne, odvojene uplate",\r
"ovu firmu",\r
"oz",\r
"oz s",\r
"Označava robu cijenama i deklaracijama, mijenja cijene po nalogu.",\r
"Označavanje dokumenta kao poništenog (ostaje u evidenciji, broj je potrošen)",\r
"Označen kao pomoćni.",\r
"Označen kao strani dobavljač (konto 4340).",\r
"označena kao duplikat",\r
"označeni ostaju sa starom maržom",\r
"označenih u prikazu",\r
"Označenima (",\r
"Označeno „u nabavnu\\":",\r
"Označeno kao plaćeno.",\r
"označeno za uvoz",\r
"Označeno:",\r
"Označi {0}",\r
"Označi aktivne",\r
"označi sve",\r
"Označi sve",\r
"Označi sve prikazane",\r
"Označi sve redove bez rizika",\r
"Označite bar jedan dan praznika.",\r
"Označite bar jedan objekat (ili „svi objekti\\").",\r
"Označiti da gost nije došao? Soba se oslobađa.",\r
"Oznaka",\r
"Oznaka izuzeća stavke takse",\r
"Oznaka mjesta {0}",\r
"Oznaka mjesta ima najviše 4 znaka.",\r
"Oznaka pomoćni skinuta.",\r
"Oznaka poslovnog prostora kojem objekat pripada; prazno = nije povezan.",\r
"Oznaka serije je preduga (najviše 40 znakova).",\r
"Oznaka stranog dobavljača uklonjena (konto 4330).",\r
"Oznaka verzije nije ispravna. Ažuriranje je odbijeno.",\r
"Oznake",\r
"Oznake na meniju",\r
"Oznake soba",\r
"p.Broj",\r
"p.DatumPazara>=? AND p.DatumPazara<=?",\r
"p.IzMarketID",\r
"p.MarketID",\r
"p.UMarketID",\r
"pa.MarketID",\r
"page",\r
"PAK",\r
"Paket iz feed-a nije potpisan ključem izdavača — ažuriranje je odbijeno.",\r
"Paket kase",\r
"Paket kase bez osnova za 0 %.",\r
"Paket kase nosi osnov za 0 % (fiskalna oznaka EX).",\r
"Paket mora biti: {0}.",\r
"Paket ne sadrži index.html i sve njegove fajlove — nije ispravan paket aplikacije.",\r
"Paket nema nijedan artikal.",\r
"Paket nije potpisan ključem izdavača — ažuriranje je odbijeno.",\r
"Paket od",\r
"Paket za predaju: {0} i {1}",\r
"Paketa",\r
"Pakovanje",\r
"PALL MALL",\r
"Pansion",\r
"papir na ravnoj svijetloj podlozi, telefon paralelno iznad papira, traka ispunjava kadar. Blijeda štampa se bolje čita sa slike napravljene običnom kamerom telefona (sa blicem) i izabrane iz galerije.",\r
"Papirni presjek iz kase se slika, a aplikacija čita iznose i popunjava pazar; iznosi se provjeravaju prije snimanja.",\r
"PAR",\r
"PARLIAMENT",\r
"Participacija",\r
"Partner",\r
"Partner / objekat",\r
"Partner nema upisanu e-poštu.",\r
"partner:",\r
"Partner: {0}{1}{2}.",\r
"Partneri",\r
"Partneri (firme i agencije)",\r
"partnerski",\r
"Partnerski",\r
"Partnerski objekti",\r
"Partnerski objekti: {0}. Njihove fakture ostaju u knjigama i poreskim obrascima; ovdje se samo razdvaja čiji je dug. Plaćanje vezano za fakturu ide tamo gdje je faktura, nevezana plaćanja i početna stanja su naša.",\r
"partnerskih",\r
"PASIVNA VREMENSKA RAZGRANIČENJA",\r
"Pasoš",\r
"pasoš (PASS)",\r
"PASS",\r
"pastet; kobasic; salam; sunk; prsut; slanin; suho; dimljen; pecen; marinir; zacinj; cevap; pljeskavic; hrenovk; virsl; konzerv; narezak; panir; supa; kocka",\r
"Pasulj",\r
"PAUŠAL",\r
"Paušalna nadoknada isplaćena poljoprivredniku po stopi od 8%",\r
"Paušalna nadoknada isplaćena poljoprivredniku po stopi od 8% (ručno)",\r
"Paušalna naknada poljoprivrednicima (PR-PDV polje 22)",\r
"Paušalno plaćanje",\r
"Paušalno plaćanje takse",\r
"Pauza",\r
"Pauza (min)",\r
"Pauze: niz {od, do} datuma.",\r
"PAZ",\r
"pazar",\r
"Pazar",\r
"Pazar (bez podjele po načinu plaćanja)",\r
"Pazar (ukupno sa PDV)",\r
"Pazar {0} {1}",\r
"Pazar {0} {1} (kasa {2}, smjena #{3}) je ručno ispravljen, a kasa sada šalje drugačiji iznos ({4} €). Zadržana je ručna ispravka; potrebna je provjera.",\r
"Pazar {0} {1} (kasa {2}, smjena #{3}) je u zaključanom mjesecu. Izmjena sa kase nije upisana.",\r
"Pazar {0} {1}{2}",\r
"pazar {0}{1}",\r
"Pazar {0}{1} (bez PDV)",\r
"Pazar bez podjele gotovina/kartice",\r
"Pazar bez Z broja (u KIF-u „Z-0000\\"), Z broj van redoslijeda objekta, ili dnevni izvještaj koji fali",\r
"Pazar gotovina",\r
"pazar iz trgovačke knjige",\r
"pazar iz zaključka kase",\r
"Pazar je ispravljen: {0} EUR.",\r
"Pazar je snimljen sa slike: {0} EUR{1}.",\r
"Pazar je snimljen: {0} EUR.{1}",\r
"Pazar kartice",\r
"Pazar ne postoji.",\r
"Pazar nije snimljen. {0}",\r
"Pazar nije snimljen. Iznosi se ne slažu: {0}.",\r
"Pazar nije snimljen. Mogući dupli unos: {0}.",\r
"Pazar nije snimljen. Za taj dan je upisan presjek stanja.",\r
"Pazar nije snimljen. Za taj objekat i datum pazar već postoji.",\r
"Pazar od {0} već ima evidentiranu uplatu.",\r
"pazar od 0,00 EUR",\r
"Pazar sa povraćajem ili bez prometa ne može imati usluge. Polje „od toga usluge\\" mora ostati prazno.",\r
"Pazar više ne postoji (obrisan, moguće na drugom računaru).",\r
"Pazar za uplatu nije izabran.",\r
"Pazar-gotovina",\r
"Pazar-kartica",\r
"Pazar-virman i ostalo",\r
"Pazar: dio bez podjele gotovina/kartice (nije virman)",\r
"Pazar: gotovina (blagajna po objektu)",\r
"Pazar: kartice u naplati (POS)",\r
"Pazar: prihod od prodaje robe u maloprodaji",\r
"pazara",\r
"pazara sa gotovinom nema evidentiranu uplatu (izvod ili ručni upis):",\r
"pazara u",\r
"Pazara u {0}. bez podjele po stopama PDV: {1} ({2} EUR bruto). „Prodato\\" i zarada sadrže i PDV dok se podjela ne upiše sa Z-izvještaja.",\r
"Pazari",\r
"pazari + izdate fakture",\r
"Pazari bez ispravne podjele po stopama (",\r
"Pazari i promet koji su već upisani ostaju u matičnom objektu.",\r
"pazari po osnovu artikla + fakture sa osnovom čl. 25 + ručno",\r
"pazari po osnovu artikla + fakture sa tim osnovom + ručno",\r
"Pazari sa gotovinom za koje nema izvoda banke ni ručnog upisa uplate. Nijesu u kolonama „Datum uplate\\" i „Iznos uplate\\" ni u zbiru uplata, jer se tamo upisuje samo stvarno uplaćen pazar (Pravilnik čl. 7, kol. 6–7).",\r
"Pazari sa gotovinom za koje nema izvoda banke ni ručnog upisa uplate. Nijesu u kolonama „Uplata pazara\\" ni u zbiru uplata (Pravilnik 34/12 čl. 7: kolona 7 je „iznos uplaćenog dnevnog pazara\\").",\r
"Pazari sa oznakom „Kasa",\r
"Pazari za dan {0}",\r
"pazari: ukupno − PDV po stopama",\r
"PD",\r
"PD — porez na dobit",\r
"PD obračun, prijava nije snimljena",\r
"PD prijava",\r
"PD prijava {0} je snimljena. Porez u bilansu uspjeha se uzima iz snimljene prijave.",\r
"PDF",\r
"PDF {0}/{1}: {2}",\r
"PDF dokumenta nije napravljen.",\r
"PDF ima {0} strana bez čitljivog teksta. OCR se radi samo za NLB dnevni izvod (do {1} strana), a ovo nije takav izvod (POS izvještaj, skenirani dokument…). Plaćanja sa izvoda računa se unose ručno ili kopiranjem teksta iz e-bankinga.",\r
"PDF izvod",\r
"PDF je napravljen: {0}",\r
"PDF je preuzet.",\r
"PDF je snimljen ({0} kalkulacija, svaka na svojoj strani): {1}",\r
"PDF je snimljen: {0}",\r
"PDF nema čitljiv tekst (ugrađen font bez mape znakova, tipično NLB/ibank izvod), a OCR čitanje nije dalo nijednu stavku. Plaćanja se unose kopiranjem teksta izvoda iz e-bankinga ili ručno.",\r
"PDF nema čitljiv tekst. {0}…",\r
"PDF nema čitljiv tekst. OCR čitanje, strana {0}/{1} ({2})…",\r
"PDF nema strana.",\r
"PDF nema tekstualni sloj (sken). Tabela se unosi kopiranjem ili kao Excel fajl od dobavljača.",\r
"PDF nije moguće pročitati: {0}",\r
"PDF sa skeniranim „DNEVNI IZVJEŠTAJ\\" trakama iz kase (više strana odjednom). Svaka strana se čita dva puta (dva OCR motora) i potvrđuje aritmetikom izvještaja; nepotvrđene strane su označene i provjeravaju se prema slici. Prvo čitanje priprema oko 19 MB podataka i traje duže.",\r
"PDF sadrži {0} izvoda ({1}).\\n\\nUpisati izvode u registar banke i proknjižiti plaćanja prepoznata po PIB-u ili upamćenom računu?\\n\\nIzvod čija se računska kontrola ne slaže se ne upisuje; postojeći izvodi se preskaču.",\r
"PDF se ne može pročitati: {0}",\r
"PDF se pravi i odmah otvara radi pregleda prije štampe.",\r
"PDF svih kalkulacija se pravi i odmah otvara radi pregleda prije štampanja.",\r
"PDF: {0}",\r
"PDF: {0} str., zaglavlje: {1}{2}",\r
"PDobracun",\r
"PDV",\r
"PDV (polje 20)",\r
"PDV (polje 21)",\r
"PDV (sa deklaracije)",\r
"PDV {0} %",\r
"PDV {0} % — čeka obavještenje kupca",\r
"PDV {0} ne odgovara stopi {1} % na osnovicu {2} (očekivano {3}). PDV plaćen pri uvozu upisuje se kao carinska deklaracija (Obrasci → Uvoz i ino usluge; registar se uključuje u Podešavanja → Firma) i ide u PR-PDV polje 20, ne u 19.",\r
"PDV {0} ne odgovara stopi {1} % na osnovicu {2} (očekivano {3}). Potrebna je provjera osnovice i PDV-a na deklaraciji; upisuje se iznos sa deklaracije.",\r
"PDV {0}% ({1}) ne odgovara osnovici {2} (treba oko {3})",\r
"PDV 15 % u pazaru",\r
"PDV 21 % u pazaru",\r
"PDV 7 % u pazaru",\r
"PDV bez prava na odbitak",\r
"PDV bez prava na odbitak: u nabavnoj vrijednosti, ne u PR-PDV polju 19",\r
"PDV broj",\r
"PDV Broj",\r
"PDV broj (VAT)",\r
"PDV i carina pri uvozu",\r
"PDV izlazni",\r
"PDV iznos",\r
"PDV je obračunat na dan prijema avansa iz primljenog iznosa (ZPDV čl. 18 st. 4, PPZPDV čl. 76 st. 2). Avansni račun se stornira računom za isporuku (PPZPDV čl. 76 st. 3).",\r
"PDV kredit",\r
"PDV KREDIT (27−24)",\r
"PDV na avans {0} %",\r
"PDV na domaći promet po stopi od 15%",\r
"PDV na domaći promet po stopi od 15% (pazari + izdate fakture)",\r
"PDV na domaći promet po stopi od 21%",\r
"PDV na domaći promet po stopi od 21% (pazari + izdate fakture)",\r
"PDV na domaći promet po stopi od 7%",\r
"PDV na domaći promet po stopi od 7% (pazari + izdate fakture)",\r
"PDV na manjak {0} (4740) je u knjizi, a prijava ga još ne prikazuje",\r
"PDV na manjak iznad normativa",\r
"PDV na promet gasa, el. energije i grijanja/hlađenja (prenos obaveze)",\r
"PDV na promet gasa, el. energije i grijanja/hlađenja (prenos obaveze) (ručno)",\r
"PDV na usluge inostranih lica",\r
"PDV na usluge inostranih lica — obaveza (PR-PDV polje 21)",\r
"PDV na usluge inostranih lica — prethodni porez (PR-PDV polje 21)",\r
"PDV na usluge inostranih lica (usluge stranih lica (Uvoz i ino usluge) + ručno)",\r
"PDV ne može biti negativan.",\r
"PDV neto",\r
"PDV nije obračunat na osnovu člana {0} Zakona o porezu na dodatu vrijednost.",\r
"PDV nije razdvojen po stopama; uvoz je moguć samo uz izabranu stopu PDV-a",\r
"PDV obaveza je nastala {0} (ZPDV čl. 18 st. 3).",\r
"PDV obaveza po ovoj fakturi nastaje {0} (osmi dan od isporuke, čl. 18 st. 3 Zakona o PDV) i pripada zaključanom mjesecu {1}. Potrebna je izmijenjena PDV prijava za {2}; izdavanje je moguće nakon otključavanja tog mjeseca.",\r
"PDV obračunat na usluge inostranih lica (prethodni porez)",\r
"PDV plaćen na uvoz",\r
"PDV plaćen na uvoz (carinske deklaracije (Uvoz i ino usluge) + ručno)",\r
"PDV plaćen pri uvozu (PR-PDV polje 20)",\r
"PDV plaćen pri uvozu (prethodni porez)",\r
"PDV po objektima",\r
"PDV PO OBJEKTIMA — IZVOD ZA PARTNERA",\r
"PDV po primljenim avansima 15 %",\r
"PDV po primljenim avansima 21 %",\r
"PDV po primljenim avansima 7 %",\r
"PDV pravila za ugostiteljski objekat",\r
"PDV prijava i plaćanje za {0}/{1}",\r
"PDV prijava, KPR, KIF, I-RAČ i U-RAČ, PDV bez prava na odbitak, uvoz (carinska deklaracija) i usluge stranih lica",\r
"PDV registracioni broj",\r
"PDV sa računa kase (isto kao presjek stanja); stopa 0 % sa osnovom oslobođenja je poseban red.",\r
"PDV sa računa ulazi u nabavnu vrijednost i raspored, ne u PR-PDV polje 19 (Kontni okvir 11/20 čl. 12 st. 2)",\r
"PDV se ne može odbiti",\r
"PDV smještaja",\r
"PDV status",\r
"PDV status firme se ne slaže sa onim što je poslato na računu.",\r
"PDV stopa izmijenjena.{0}",\r
"PDV stopa mora biti broj od 0 do 100.",\r
"PDV u dnevnom pazaru 15 %",\r
"PDV u dnevnom pazaru 21 %",\r
"PDV u dnevnom pazaru 7 %",\r
"PDV u pazaru 476x — nalozi PAZ vs pazari (PDV 21+15+7)",\r
"PDV u primljenim fakturama po nižoj stopi 7 %",\r
"PDV u primljenim fakturama po opštoj stopi 21 %",\r
"PDV u primljenim fakturama po sniženoj stopi 15 %",\r
"PDV u prodajnoj",\r
"PDV ulazi u nabavnu vrijednost i raspored, ne u PR-PDV polje 19",\r
"PDV ulazni",\r
"PDV umanjen",\r
"PDV važi od (prazno = odmah)",\r
"Pdv134002",\r
"Pdv15",\r
"Pdv21",\r
"Pdv7",\r
"PDVIzvor",\r
"PDVIzvorVrijeme",\r
"PDVMKT",\r
"PDVProc",\r
"PDVStopa",\r
"Pecivo svih vrsta",\r
"Pečurke, šampinjoni svježi",\r
"Pelene",\r
"pelene; pelena",\r
"Period",\r
"Period (od – do) nije izabran.",\r
"Period {0} je zaključan. Izmjena nije moguća.",\r
"Period je uklonjen.",\r
"Period je upisan, ali plate nisu promijenjene. U obračunu radnika traka nudi upis za taj mjesec.",\r
"Period nije ispravan.",\r
"Period od",\r
"Period odsustva (od–do) je obavezan.",\r
"Period po datumu",\r
"Period po istoj osnovi kao knjiga iznad. Iznosi fakture (bez PDV, ulazni PDV po stopama, sa PDV) su sa računa dobavljača; nabavna, RUC i prodajna vrijednost su iz kalkulacije (zaduženje objekta). Klik na red otvara kalkulaciju.",\r
"Period ponavljanja nije ispravan.",\r
"Period prometa je pomjeren na sljedeći mjesec.",\r
"Period prometa od",\r
"Period prometa: datum „od\\" je poslije datuma „do\\".",\r
"Period prometa: datum nije ispravan.",\r
"Period prometa: potrebna su oba datuma (od i do).",\r
"Period rada",\r
"Period rada u mjesecu:",\r
"Period se odnosi na",\r
"Period se preklapa sa već upisanim ({0} – {1}). Na prethodnom periodu je potrebno upisati datum „do\\".",\r
"Period zahtjeva nije ispravan (od–do).",\r
"period: {0} - {1}",\r
"period: {0} - {1} · PDV pri uvozu = PR-PDV polje 20",\r
"period: {0} - {1} · PPZPDV čl. 121 st. 4",\r
"period: {0} - {1}{2}",\r
"Periodični analitički pregled izdatih računa sa IKOF-om, JIKR-om i oznakama ENU / poslovnog prostora / operatera, za period izabran gore.",\r
"pet",\r
"Pet",\r
"petak",\r
"Petak",\r
"Petnjica",\r
"PGO",\r
"PHILIP MORRIS",\r
"PHOTOS",\r
"PI",\r
"PIB",\r
"PIB (firma; prazno = fizičko lice)",\r
"PIB (TIN)",\r
"PIB {0}",\r
"PIB {0} · {1} · šifra djelatnosti {2}",\r
"PIB / JMB",\r
"PIB / matični broj",\r
"PIB dobavljača nije pronađen u odgovoru.",\r
"PIB firme (8 cifara) je obavezan. Po PIB-u se firma prepoznaje u knjigama, licenci i razmjeni.",\r
"PIB firme (Podešavanja → Firma)",\r
"PIB firme nije upisan",\r
"PIB firme nije upisan (Podešavanja → Firma). Fajlovi Menadžera se ne mogu dodijeliti firmi.",\r
"PIB firme nije upisan (Podešavanja → Firma). Pripadnost zaključaka kasa nije moguće utvrditi.",\r
"PIB firme nije upisan (Podešavanja → Firma). Razmjena cijena nije moguća bez PIB-a.",\r
"PIB firme nije upisan (Podešavanja → Podaci firme). Licenca se učitava poslije upisa PIB-a.",\r
"PIB ima 8 cifara (13 za fizička lica).",\r
"PIB izdavaoca",\r
"PIB kupca",\r
"PIB mora imati 8 ili 13 cifara.",\r
"PIB na izvještaju ({0}) nije PIB otvorene firme ({1}). Ovo je izvještaj druge firme.",\r
"PIB nepoznat",\r
"PIB partnera",\r
"PIB pravnog lica ima 8 cifara.",\r
"PIB u sertifikatu se ne slaže sa PIB-om firme na računu.",\r
"PIB vlasnika računa na izvodu nije PIB ove firme",\r
"PIB-{0}",\r
"PIB, grad (opština) sjedišta, bar jedan objekat (prodavnica, lokal, kancelarija)",\r
"PIB: {0}",\r
"Pića",\r
"Pića (alkoholna i bezalkoholna) — u flašama i drugom pakovanju",\r
"PIN",\r
"PIN (4–8 cifara)",\r
"PIN i potvrda PIN-a se ne slažu.",\r
"PIN i potvrda se ne poklapaju.",\r
"PIN je aktivan",\r
"PIN je postavljen.",\r
"PIN je uklonjen.",\r
"PIN je već postavljen.",\r
"PIN mora imati 4 do 8 cifara.",\r
"PIN uređaja je uklonjen. Nov PIN se postavlja u Podešavanja → Zaštita.",\r
"PIN za osjetljive radnje",\r
"PIN za osjetljive radnje (neobavezno)",\r
"Pio",\r
"PIO",\r
"PIO (izvršilac)",\r
"PIO na teret zaposlenog (%)",\r
"Pisana odluka o radu na dan praznika (čl. 89): objekti, zaposleni po rasporedu, uvećanje 150 %, obavještenje 3 dana ranije",\r
"Pisano upozorenje",\r
"Pisano upozorenje o pokretanju postupka nije uručeno. Zaposleni mora dobiti rok za izjašnjenje (čl. 147).",\r
"Pisano upozorenje uručeno",\r
"Pisano upozorenje zaposlenom",\r
"Pitanje o pristupu ekranu nije moguće na ovom uređaju. Nalog nije izvršen.",\r
"pivo; vino; rakija; viski; votka; dzin; rum; liker; konjak; tekila; vinjak; loza; sampanjac; koktel",\r
"PJ",\r
"PK — polukvalifikovan (II)",\r
"pl.DobavljacID IS NOT NULL",\r
"PLAC",\r
"Plaća",\r
"Plaća (po godinama)",\r
"Plaća virmanom",\r
"PLACANJA",\r
"plaćanja dobavljačima čeka knjiženje (Banka → Transakcije)",\r
"Plaćanja dobavljačima prepoznata po PIB-u ili upamćenom računu se odmah knjiže; ostalo čeka pregled.",\r
"plaćanja ima neraspoređen dio (",\r
"Plaćanja nisu knjižena automatski za račune koji nisu među računima firme: {0} (Podešavanja → Firma).",\r
"plaćanja proknjiženo (",\r
"Plaćanja sa izvoda (pošta i ručni uvoz) se knjiže automatski samo sa ovih računa. Račun se upisuje potvrdom „Naš račun\\" ili kad izvod nosi PIB ove firme.",\r
"PLACANJE",\r
"plaćanje",\r
"Plaćanje",\r
"Plaćanje (izvod banke)",\r
"Plaćanje {0} (režije)",\r
"Plaćanje {0} {1} ({2} EUR)",\r
"plaćanje {0} od {1} EUR nije vezano za transakciju, a ista uplata na izvodu čeka pod drugim primaocem ({2})",\r
"Plaćanje je proknjiženo iz izvoda banke i ne briše se ovdje. Knjiženje se poništava u Banci.",\r
"Plaćanje je snimljeno.{0}",\r
"Plaćanje ne postoji (možda je već obrisano).",\r
"Plaćanje nije preporučljivo bez provjere. Dobavljač traži {0}{1}{2}. Odstupanje od evidencije može biti greška dobavljača, faktura koja još nije unesena (uključujući skenove koji čekaju obradu) ili pokušaj prevare. Prije plaćanja potrebna je fizička provjera originalnih faktura/otpremnica i kalkulacija za te stavke, kao i kopije sa potpisom lica koje je preuzelo robu, zatražene od dobavljača.",\r
"plaćanje nije vezano za fakturu{0}",\r
"Plaćanje se uvijek može unijeti i ručno, kod dobavljača.",\r
"Plaćen avans",\r
"Plaćen zakup {0}",\r
"Plaćen zakup fizičkom licu",\r
"plaćena",\r
"Plaćena faktura dobavljača",\r
"plaćeno",\r
"Plaćeno",\r
"Plaćeno / iskorišćeno",\r
"Plaćeno odsustvo",\r
"plaćeno odsustvo po zahtjevu",\r
"Plan do",\r
"Plan korišćenja —",\r
"PLAN KORIŠĆENJA GODIŠNJIH ODMORA {0}",\r
"Plan korišćenja godišnjih odmora za {0}. (rok {1}, {2}): {3} radnika nema upisan odmor: {4}{5}.",\r
"Planira nabavku, prati zalihe, cijene, marže i rokove trajanja robe.",\r
"Planirani odlazak",\r
"Planirani, ravnomjerno kroz sedmicu",\r
"PLAT",\r
"plata",\r
"Plata",\r
"Plata (redovna zarada)",\r
"Plata = redovna mjesečna zarada. IQOS = poseban obračun naknada za prodaju IQOS-a: svoja rekapitulacija, listići i isplata; porez se računa na zbir sa platom, a u IOPPD XML ulazi zajedno sa platom (jedna prijava za mjesec).",\r
"plata uključuje minuli rad (ukupna); ukupan iznos ostaje isti, potrebna je provjera ugovora",\r
"Plate {0}.{1}.{2}",\r
"Plate {0}/{1}{2}",\r
"Plate / kadrovi",\r
"Plate radnika",\r
"Plate su upisane za: {0}.{1}",\r
"Plate, kadrovi i smjene (JMBG, zarade, ugovori radnika) se ne otvaraju na uređaju za skeniranje, već na računaru u kancelariji.",\r
"Plate, smjene, radnici, odsustva i zakup",\r
"Plate: bruto zarade (neto + porez + doprinosi zaposlenog)",\r
"Plate: doprinosi na teret poslodavca (nezaposlenost, Fond rada)",\r
"Plate: doprinosi na teret poslodavca + prirez (pravilo knjigovođe: prirez plaća poslodavac)",\r
"Plate: doprinosi na teret zaposlenog (PIO, nezaposlenost)",\r
"Plate: naknade koje refundira Fond zdravstva (FZO) ili Centar za socijalni rad (CSR) — potraživanje, ne trošak",\r
"Plate: neoporeziva primanja (dnevnice, otpremnine, pomoć…)",\r
"Plate: obaveza za isplatu radnicima (neto + neoporezivo − obustave)",\r
"Plate: obustave iz zarada (krediti, administrativne zabrane)",\r
"Plate: porez na dohodak",\r
"Plate: prirez porezu",\r
"plate.doprinosiPos",\r
"plate.doprinosiZap",\r
"PLATILAC",\r
"Plav",\r
"Pljevlja",\r
"PLJEVLJA",\r
"PLT",\r
"Plužine",\r
"PNG",\r
"Po",\r
"PO",\r
"po artiklu",\r
"Po artiklu",\r
"po artiklu i objektu",\r
"Po artiklu i objektu",\r
"po broju telefona",\r
"po broju u nazivu",\r
"po cjenovniku",\r
"Po danima",\r
"po danu",\r
"po danu (dnevnice: dana × dnevnica, umanjenje za obroke)",\r
"Po dobavljaču",\r
"Po dobavljaču. Naknadni rabat kroz finansijsko knjižno odobrenje računovodstveno je isto što i rabat na fakturi. Ako ugovor kaže da se rabat daje odobrenjem, važi „manjak poslije odobrenja\\"; ako je rabat na fakturi, a odobrenje poseban bonus, važi „manjak na fakturama\\". Povraćaj robe se ne računa.",\r
"Po fakturi",\r
"po godinama staža (jubilarna)",\r
"Po grupi",\r
"po grupi artikala",\r
"Po isteku roka od odjave lični podaci gosta se brišu.",\r
"Po kalkulaciji",\r
"po kasi",\r
"Po kasiru",\r
"po kodu prostora",\r
"po količini",\r
"Po kom datumu se vode knjige",\r
"Po kupcu",\r
"Po mjesecima",\r
"po mjesecu",\r
"Po načinu plaćanja",\r
"po narudžbi",\r
"po nazivu",\r
"Po nazivu liče na cigarete (nisu u grupi „Cigare\\" i imaju istu maržu kao ostala roba);",\r
"po nazivu ne liči na cigaretu — provjeri",\r
"po noći",\r
"Po objektima —",\r
"po objektu",\r
"Po objektu",\r
"Po opštini se nudi iznos boravišne takse.",\r
"po osobi i noći",\r
"Po otpremnicama {0}.",\r
"Po otpremnici {0}.",\r
"po podacima na 31.12.{0}. ({1}) — čl. 7 st. 1 Zakona 84/25",\r
"Po ponudi {0}.{1}",\r
"po popisu",\r
"Po potrebi radi na kasi i obavlja druge poslove po nalogu menadžera.",\r
"po procjeni",\r
"po prodajnoj sa PDV",\r
"Po računu",\r
"po računu {0}",\r
"Po računu: {0} od {1}",\r
"Po radnom stažu",\r
"Po reversu {0} od {1}.",\r
"Po satu",\r
"po slučaju (svaka stavka posebno)",\r
"Po stopi PDV",\r
"po težini",\r
"po ugovoru",\r
"po uvozu",\r
"po veleprodajnoj bez PDV",\r
"po vrijednosti",\r
"Po vrsti prometa —",\r
"Po Zakonu o radu zarada pripada srazmjerno vremenu provedenom na radu",\r
"Poč. duguje",\r
"Poč. potražuje",\r
"poč. zalihe {0} + nabavka {1} − kraj {2}",\r
"početak",\r
"Početak perioda je poslije kraja perioda.",\r
"Početak rada",\r
"Početak smjene (24 h, npr. 16:30)",\r
"Početna",\r
"Početna stanja",\r
"početne cijene",\r
"Početne cijene",\r
"početne cijene iz kalkulacija",\r
"Početne cijene iz kalkulacija: {0} artikala, {1} opštih i {2} cijena objekta.",\r
"Početne cijene napravljene iz kalkulacija",\r
"početni cjenovnik je već pravljen",\r
"Početni cjenovnik: {0}",\r
"Početni gotovinski depozit je već prijavljen za danas.",\r
"Početni popis {0} {1}",\r
"Početni saldo (neotpisana)",\r
"Početno (nabavna)",\r
"početno stanje",\r
"Početno stanje",\r
"Početno stanje — popis robe po artiklima od {0}",\r
"Početno stanje (dug)",\r
"Početno stanje (dug) — upisano {0}",\r
"Početno stanje (neobavezno)",\r
"POČETNO STANJE (prije perioda)",\r
"Početno stanje {0}",\r
"Početno stanje {0} je ponovo upisano.",\r
"Početno stanje {0} nije jednako stanju na 31.12.{1}. Nalog nije snimljen. Razlike: {2}{3}. Moguć uzrok: na 01.01.{4} postoji još jedan nalog početnog stanja.",\r
"Početno stanje {0} upisano.",\r
"Početno stanje {0}. ne može se upisati: {1}. {2} prihodi i rashodi nijesu preneseni u rezultat (razlika {3} EUR). Redosljed: poništavanje zaključka {4}., zaključak i otvaranje {5}., zatim ponovni zaključak {6}. i otvaranje {7}.",\r
"Početno stanje {0}. ne može se upisati: poslije zaključka su u {1}. knjiženi prihodi ili rashodi (npr. konto {2}), pa ih zaključak ne obuhvata (razlika {3} EUR). Potrebno je poništiti zaključak {4}., napraviti ga ponovo i otvoriti {5}.",\r
"Početno stanje {0}. ne može se upisati: stanja konta na 31.12.{1}. nijesu u ravnoteži (razlika {2} EUR). Potrebno je provjeriti ručne naloge i početno stanje ranijih godina.",\r
"Početno stanje = sva knjiženja prije „Od\\"; promet = u periodu. Zbir salda duguje mora biti jednak zbiru salda potražuje (glavna knjiga u ravnoteži).",\r
"Početno stanje 01.01.{0}: NIJE UNESENO (nema popisa od 31.12.{1})",\r
"Početno stanje dobavljača (dug iz ranijih godina) — najstarija stavka; negativno umanjuje fakture kao knjižna nota",\r
"Početno stanje je {0}: {1} EUR na dan {2} (prvi red kartice).",\r
"Početno stanje je obrisano.",\r
"Početno stanje je ponovo otvoreno.",\r
"Početno stanje je privremeno: to je saldo knjige prethodne godine koja nije zaključena (Pravilnik 34/12 čl. 15 st. 2: prenosi se konačan saldo). Poslije zaključenja prethodne godine zamjenjuje se konačnim.",\r
"Početno stanje je snimljeno kao nalog {0}.{1}",\r
"Početno stanje je snimljeno: {0} EUR (PS red 01.01.{1}.).",\r
"Početno stanje je već upisano ({0} EUR). Zamijeniti ga iznosom {1} EUR?",\r
"Početno stanje je već zaključeno.",\r
"Početno stanje je zaključeno: nabavna {0} EUR, prodajna {1} EUR.{2}",\r
"Početno stanje je zaključeno: popis cijelog objekta u Popisu robe, trgovačkoj knjizi, lageru, zalihama i PD. Izmjena je moguća nakon ponovnog otvaranja.",\r
"Početno stanje je zaključeno. Izmjena je moguća nakon ponovnog otvaranja.",\r
"početno stanje knjige",\r
"Početno stanje konta na dan",\r
"Početno stanje na dan {0}",\r
"Početno stanje na dan {0}-01-01 (iz zaključka {1})",\r
"Početno stanje ne postoji.",\r
"Početno stanje nema artikala.",\r
"Početno stanje nema stavki.",\r
"Početno stanje nije uneseno: saldo knjige ne uključuje robu zatečenu 01.01. Potreban je popis od 31.12. prethodne godine.",\r
"Početno stanje nije upisano. Glavna knjiga počinje od nule (sjenka godina).",\r
"Početno stanje nije uravnoteženo: duguje {0}, potražuje {1} (razlika {2}). Potrebno je dopuniti kapital/rezultat ili uključiti „izravnaj razliku\\".",\r
"Početno stanje nije zaključeno.",\r
"Početno stanje otvara glavni računar.",\r
"Početno stanje robe",\r
"POČETNO STANJE ROBE — POPISNA LISTA",\r
"Početno stanje robe (nabavna)",\r
"Početno stanje robe 01.01.{0}. (popis 31.12.{1}){2}",\r
"Početno stanje robe po artiklima",\r
"Početno stanje robe po artiklima ({0} artikala)",\r
"Početno stanje zaključuje glavni računar.",\r
"Početno stanje: razlika za izravnanje (kapital / neraspoređeni dobitak ranijih godina)",\r
"Počni",\r
"Podaci",\r
"Podaci → Uvoz iz Knjigovodstva",\r
"podaci artikla",\r
"podaci faktura, stavke i iznosi ostaju netaknuti",\r
"Podaci firme",\r
"Podaci firme „{0}\\" sa servera: {1}{2}. Postojeći podaci nisu mijenjani.",\r
"Podaci firme (koriste se u zaglavljima izvještaja)",\r
"Podaci firme idu u zaglavlja knjiga, obrazaca, faktura i naloga za plaćanje. Polja sa * su obavezna; ostala se mogu dopuniti kasnije (Podešavanja → Podaci firme).",\r
"Podaci firme na serveru IRIS CORVINA su izmijenjeni.",\r
"Podaci firme na serveru su izmijenjeni otkad su preuzeti.",\r
"Podaci firme su snimljeni.",\r
"Podaci firme, objekti, fiskalizacija, štampač, rezervna kopija i zaštita · firma:",\r
"Podaci gosta — {0} {1}",\r
"Podaci iz isprave su upisani. Provjerite ih i dopunite.",\r
"Podaci lijeka su u međuvremenu promijenjeni.",\r
"Podaci na 31.12.{0} (odluka za {1})",\r
"Podaci na 31.12.{0}: {1}",\r
"Podaci na 31.12.{0}. su upisani. Kategorija za {1}: {2}.",\r
"Podaci novog objekta",\r
"Podaci ovog računa:",\r
"Podaci se razmjenjuju preko Google Drive foldera (stari put). Preporučuje se povezivanje sa serverom IRIS CORVINA: razmjena je tada skoro trenutna, a Drive služi samo za rezervnu kopiju.",\r
"Podaci su izmijenjeni na drugom uređaju. Sačuvajte ili odustanite od izmjena, pa osvježite.",\r
"Podaci ugovora su snimljeni.",\r
"Podaci za prijavu su potpuni.",\r
"Podaci za prijavu Upravi policije i turističkoj organizaciji.",\r
"Podaci za ugovor —",\r
"Podatak",\r
"Podatak je u međuvremenu promijenjen.",\r
"podataka (kalkulacije sa brojevima, pazari i sve radnje zajedno). Obrađena baza postoji samo na računaru: računar je objavljuje, a telefon preuzima.",\r
"Podatke apoteke mijenja računar u režimu obrade (glavni ili admin).",\r
"Podatke je u međuvremenu izmijenio drugi korisnik. Podaci su osvježeni; ponovite izmjenu.",\r
"Podešavanja",\r
"Podešavanja e-pošte su snimljena.",\r
"Podešavanja su potpuna. Okruženje: {0}.",\r
"Podešavanje „{0}\\" se ne mijenja odavde.",\r
"Podešavanje {0} = {1}",\r
"podešavanje čitača",\r
"Podesi kiosk",\r
"Podgorica",\r
"PODGORICA",\r
"Podgrupa",\r
"Podijeli",\r
"Podraz. rabat (%)",\r
"Podrazumijevana marža je obrisana. Sken iz Menadžera bez marže i bez istorije dobavljača čeka na ekranu Skenovi (greška „nedostaje marža\\").",\r
"Podrazumijevana marža za skenove iz Menadžera (%)",\r
"podrazumijevani",\r
"Podrazumijevani",\r
"Podrazumijevani štampač u Windowsu je „{0}\\", a on ne štampa nego traži gdje da snimi fajl. Izaberi pravi štampač u Podešavanja → Štampač.",\r
"Podrazumijevani štampač u Windowsu je „{0}\\", koji snima u fajl umjesto da štampa. Za „Štampaj sve\\" potrebno je izabrati štampač sa spiska i snimiti izbor.",\r
"podrazumijevani u Windowsu",\r
"Podrazumijevani žiro račun je promijenjen.",\r
"podrazumijevano",\r
"Podrazumijevano",\r
"Podrazumijevano isključeno: roba na reversu nije prodata (ZPDV čl. 4 st. 1 — promet je prenos prava raspolaganja), ostaje imovina trgovca i razdužuje se tek računom; povrat nema upisa (Pravilnik 34/12 čl. 7 kol. 5). Uključeno: primalac robom raspolaže, isporuka je izvršena (PDV najkasnije 8 dana od predaje, ZPDV čl. 18 st. 3) — razduženje na dan reversa po MPC, povrat kao minus razduženje, a faktura iz reversa ne razdužuje ponovo. Propis revers ne pominje; izbor treba potvrditi sa knjigovođom.",\r
"Podrška",\r
"Podrška (izdavač)",\r
"Podrška i zahtjevi",\r
"Podrška i zahtjevi u programu (uz vezu sa serverom)",\r
"Podrška IRIS CORVINA traži pristup ekranu ovog uređaja",\r
"Pogrebna oprema",\r
"pogrešan kontrolni broj",\r
"Pogrešan kontrolni broj",\r
"Pogrešan PIN.",\r
"Pogrešan PIN. Zaboravljen PIN se mijenja u Podešavanja → Zaštita.",\r
"Pogrešna lozinka sertifikata (ili fajl nije .pfx/.p12).",\r
"Pogrešna metoda kanonizacije.",\r
"Pogrešna metoda potpisa.",\r
"Pogrešna metoda sažetka.",\r
"Pogrešno knjiženje (pogrešan dobavljač, tuđi račun…): plaćanje se briše, a transakcija vraća na „čeka\\".",\r
"poIsteku mora biti „citanje\\".",\r
"Pojednostavljene napomene",\r
"Pojednostavljene napomene za mikro i mala pravna lica — 11 tačaka iz čl. 27 st. 4 Pravilnika o sadržini i formi obrazaca. Program popunjava šablon iz podataka; tekst se može urediti i pamti se po godini.",\r
"Poklon djeci zaposlenog do 15 god. (do 50 EUR godišnje po djetetu)",\r
"Poklon zaposlenim ženama za 8. mart (do 100 EUR godišnje)",\r
"pokretanje čitača",\r
"pokretanje čitanja",\r
"pokretanje čitanja: prvo pokretanje preuzima oko 17 MB (potreban internet; poslije radi i bez njega)",\r
"Pokretanje kamere…",\r
"Pokretanje Outlooka traži novu instalaciju programa (Setup 1.0.68 ili noviji).",\r
"Pokriće gubitka",\r
"Pokrivenost izvoda po računu —",\r
"Pokušaj ponovo",\r
"Pokušaja",\r
"Pol",\r
"Polazna %",\r
"Polazna sistematizacija: dodato {0} radnih mjesta, dopunjeno {1}, spojeno duplikata {2}, usklađen broj izvršilaca {3}.",\r
"Policija",\r
"Polja 16–18 obuhvataju knjigu avansa (PDV",\r
"Polja artikla nisu ispravna.",\r
"polja firme su već bila popunjena",\r
"Polja sa",\r
"Polje",\r
"POLJE",\r
"Polje „izdao\\" je obavezno.",\r
"Polje „izdato\\" mora biti ISO vrijeme.",\r
"polje 13",\r
"Polje 13: nulta stopa (ZPDV čl. 25). Polje 14: oslobođeni promet (ZPDV čl. 26–27). Promet van sistema PDV ne ulazi u prijavu. Osnov se određuje na artiklu (Artikli → Osnov 0 %); pazar IRIS kase se dijeli po prometu artikala.",\r
"polje 14",\r
"Polje 30 — samo kad postoji PDV kredit (polje 29)",\r
"Polje format mora biti „iris-licenca\\".",\r
"Polje mora biti 13 ili 14.",\r
"Polje PR PDV-2 za promet 0 % čiji osnov nije poznat (ručni pazar, OCR Z-izvještaja, artikal bez osnova). Podrazumijevano polje 14. Zaključani mjeseci se ne mijenjaju.",\r
"Polog",\r
"Polog (početna gotovina)",\r
"Poluproizvodi sopstvene proizvodnje",\r
"Pomaže pri utovaru, istovaru i smještaju robe u objektima.",\r
"pomocni",\r
"Pomocni",\r
"pomoćni",\r
"Pomoćni knjigovođa",\r
"pomoćni radnik",\r
"Pomoćni radnik — preko potrebnog broja ili iz drugog objekta; vidi se na platnom listiću",\r
"pon",\r
"Pon",\r
"PON-{0}-{1}",\r
"Ponavljanje lakše povrede (treća lakša povreda u 12 mjeseci)",\r
"ponedjeljak",\r
"Ponedjeljak",\r
"poništava",\r
"Poništavanje posljednjeg računa (kupac nije platio, greška u kucanju); stavke mogu na čekanje",\r
"Poništavanje posljednjeg uvoza{0}",\r
"Poništavanje prestanka: radnik se vraća kao aktivan, dokument ostaje označen",\r
"Poništavanje zaključka",\r
"poništen",\r
"PONIŠTEN",\r
"poništeno",\r
"Poništeno izmjena: {0}.{1}",\r
"Poništeno kodova za kasu {0}: {1}.",\r
"Poništeno kodova za Menadžer: {0}.",\r
"Poništeno kodova za uparivanje: {0}.",\r
"poništeno sa kartice radnika",\r
"poništeno sa liste prestanaka",\r
"Poništeno: {0} stavki na {1} kalkulacija vraćeno na staru maržu.{2}{3}{4}",\r
"Poništi",\r
"Poništi izbor",\r
"Poništi kod",\r
"Poništi kodove",\r
"Poništi posljednji uvoz",\r
"Poništi sve",\r
"Poništi upis",\r
"Poništi uvoz",\r
"Poništiti knjiženje? Minus kalkulacija se briše (ako mjesec nije zaključan), a otpis ostaje.",\r
"Poništiti knjiženje? Plaćanje dobavljaču se briše, a transakcija se vraća na „čeka\\".",\r
"Poništiti posljednji uvoz ({0})?\\n\\nCijene i podaci se vraćaju na stanje prije uvoza, novi artikli postaju neaktivni, a nove veze barkodova se uklanjaju. Stavka koja je poslije uvoza mijenjana se ne vraća.",\r
"Poništiti potvrdu ove sedmice? Raspored se opet može mijenjati, a sati izlaze iz obračuna po smjenama dok se sedmica ponovo ne potvrdi.",\r
"Poništiti potvrdu sedmice {0}? Raspored te sedmice se opet može mijenjati, a njeni sati izlaze iz obračuna po smjenama dok se ponovo ne potvrdi.",\r
"Poništiti potvrdu sedmice za {0}?",\r
"Poništiti prestanak {0} za {1} {2}? Radnik se vraća kao aktivan, a sporazum/rješenje ostaje u evidenciji sa oznakom PONIŠTEN.",\r
"Poništiti prestanak {0} za {1}?",\r
"Poništiti prestanak radnog odnosa ({0})? Radnik se vraća kao aktivan. Razlog:",\r
"Poništiti promjenu marže ({0})?\\n\\nStavke dobijaju maržu i prodajnu cijenu kakve su bile prije te promjene. Stavke ručno mijenjane poslije te promjene i zaključani periodi ostaju bez promjene.",\r
"Poništiti raspored zavisnih troškova? Nabavna cijena i RUC stavki vraćaju se na iznose sa fakture (prodajne cijene ostaju iste).",\r
"Poništiti sve današnje izmjene sa ovog uređaja ({0})?",\r
"Poništiti zaključak godine (brisanje zaključnog naloga)?",\r
"Poništiti zaključenje trgovačke knjige za {0}.? Ovjerena knjiga više neće odgovarati programu dok se ponovo ne zaključi.",\r
"Poništiti zatvaranje procjene? Faktura se briše iz knjiga, a procjena ostaje otvorena.",\r
"Ponovi PIN",\r
"Ponovi upis na server",\r
"Ponovljeno",\r
"Ponovljeno: {0} termina u {1} objekata ({2} dana){3}.{4}",\r
"ponovni prijem snimka po nalogu #{0}{1}",\r
"Ponovni raspored…",\r
"Ponovo otvoriti početno stanje? Do novog zaključenja nije u Popisu robe, trgovačkoj knjizi ni lageru.",\r
"Ponovo otvoriti popis? Upisana vrijednost u Popisu robe se briše.",\r
"Ponovo pokreni",\r
"Ponovo pokreni sada",\r
"Ponovo se može poslati samo nalog koji čeka glavni računar.",\r
"Ponovo upisati početno stanje {0} iz stanja na 31.12.{1}?",\r
"ponuda",\r
"Ponuda",\r
"Ponuda iz koje je faktura nastala",\r
"Ponuda je izdata.",\r
"Ponuda ne postoji.",\r
"Ponuda nije poreski dokument. Po prihvatanju se izdaje faktura.",\r
"Ponuda važi do",\r
"Ponude",\r
"Ponude (predfakture) i fakture za naše usluge i prodaju",\r
"POP",\r
"popis",\r
"Popis",\r
"Popis — bez razlike ({0})",\r
"Popis „{0}\\" {1} {2}: {3} artikala ({4})",\r
"Popis (nabavna)",\r
"Popis {0}",\r
"Popis {0} {1}",\r
"Popis {0} {1}: {2} artikala, razlika {3} €",\r
"Popis cijelog objekta",\r
"Popis cijelog objekta ulazi u trgovačku knjigu (višak/manjak), zalihe i PD; kontrolni popis dijela robe ne utiče na knjige.",\r
"Popis iz Menadžera „{0}\\": {1} Popis čeka.",\r
"Popis iz Menadžera „{0}\\": objekat {1} ne postoji u Knjigovodstvu. Popis čeka dok se objekat ne upiše u Knjigovodstvu ili ne poveže u Menadžeru.",\r
"Popis iz Menadžera ({0}): {1}",\r
"Popis iz Menadžera: brojanje je u toku na uređajima Menadžera. Svaka nova verzija sa uređaja zamjenjuje njegove redove dok popis nije zaključen ovdje.",\r
"Popis je jednak knjigovodstvenom stanju. Nema razlike za knjiženje.",\r
"Popis je prazan.",\r
"Popis je proknjižen (manjak/višak prema stanju 134000).",\r
"Popis je snimljen: {0} EUR.",\r
"Popis je već zaključen.",\r
"Popis je zaključen.",\r
"Popis je zaključen. Izmjena je moguća nakon ponovnog otvaranja popisa.",\r
"Popis je zaključen. U Popis robe je upisano {0} EUR (nabavna).",\r
"Popis je zaključen. U Popis robe je upisano {0} EUR (prodajna).",\r
"Popis ne postoji.",\r
"Popis nema stavki.",\r
"popis nije upisan",\r
"popis od {0}: {1} {2}, knjiga {3}",\r
"Popis OS",\r
"Popis po artiklima: {0} ({1} artikala)",\r
"Popis robe",\r
"Popis robe (manjak / višak)",\r
"Popis sastavio",\r
"Popis se otvara za objekat; barkod se skenira",\r
"Popis se poredi sa stanjem konta 134000 objekta na dan popisa (prodajna sa PDV); razlika ide na manjak (5741) ili višak (6741). Knjiženje je ručno i ima smisla tek kad je uneseno početno stanje robe; bez njega cijeli popis izgleda kao manjak.",\r
"Popis skenerom — barkod, pa količina",\r
"popis upisan",\r
"Popis: manjak robe (nabavna vrijednost)",\r
"Popis: višak robe (nabavna vrijednost)",\r
"popisa · manjak {0}",\r
"popisa {0} novih, {1} dopunjeno",\r
"Popisana (zatečena) količina — osnov iznosa nivelacije",\r
"Popisana količina",\r
"Popisano",\r
"Popisano {0} od {1} artikala sa ulazom u {2}.",\r
"Popisi",\r
"Popisi robe u mjesecu (",\r
"Popisna komisija",\r
"Popisna lista",\r
"POPISNA LISTA",\r
"POPISNA LISTA — ROBA NA REVERSU",\r
"POPISNA LISTA OSNOVNIH SREDSTAVA",\r
"Popisna razlika",\r
"Popisna razlika — manjak ({0})",\r
"Popisna razlika — višak ({0})",\r
"Popunj.",\r
"Popunjavaju se samo prazna polja; objekti se vežu za objekte u pregledu.",\r
"Popunjeno",\r
"Popunjeno: dodato {0}, dopunjeno {1}, spojeno {2}, usklađeno {3}.",\r
"Popunjenost",\r
"Popunjenost i prihod",\r
"Popust",\r
"POPUST",\r
"Popust mora biti procenat od 0 do 100.",\r
"Popust mora biti veći od nule.",\r
"Popust na cijenu noći (%)",\r
"Popust na kasi (%)",\r
"Popust na teret razlike u cijeni",\r
"Popust ne može biti veći od 100 %.",\r
"Popust u %",\r
"Popust u procentima: broj, zatim %",\r
"Popust: između 0 i 100 %.",\r
"Popusti",\r
"popusti {0}",\r
"popusti sa kase",\r
"Popusti sa kase — razduženje robe (bez PDV)",\r
"Popusti sa kase — razduženje robe po prodajnoj",\r
"Popusti sa kase (pazar {0}{1}){2}",\r
"Popusti sa trake (EUR)",\r
"PORCIJA",\r
"pored same baze",\r
"poređenje sa našim knjigama",\r
"Poređenje sa šifarnikom",\r
"Poreska / knjigovođa",\r
"poreska dokumenta",\r
"Poreska nije vratila kôd ENU: {0}",\r
"Poreska osnovica — oporeziva dobit (48 − 49) > 0",\r
"Poreska osnovica (41 + 100 % od 47) > 0",\r
"Poreska uprava (MAPR) je vratila prazan odgovor za ovaj račun. Server trenutno nema podatke o računu; ponovni pokušaj je moguć kasnije.",\r
"Poreska uprava je vratila prazan odgovor za ovaj račun.",\r
"Poreske knjige",\r
"Poreske knjige i obrasci",\r
"poreski dokument",\r
"poreski period 01.01.–31.12.{0}.",\r
"Poreski rashod perioda",\r
"Poreski rashod perioda (porez na dobit)",\r
"Poreski tretman",\r
"Poreski tretman naknade provjeriti sa Poreskom upravom.",\r
"poreskih dokumenata",\r
"Porez",\r
"POREZ",\r
"Porez — niža stopa (%)",\r
"Porez — viša stopa (%)",\r
"Porez i prirez se plaćaju istog dana kada se isplaćuje zakupnina",\r
"Porez kr.potr.",\r
"Porez kr.potr. 15",\r
"Porez kr.potr. NS",\r
"porez na dobit",\r
"Porez na dobit",\r
"Porez na dobit — procjena (9/12/15% progresivno)",\r
"Porez na dobit (procjena)",\r
"Porez na dobit (r.br. 246): {0}. Za godinu koja nije zaključena rezultat ide u bilans stanja kao dobitak/gubitak tekuće godine.",\r
"Porez na dobit na teret rezultata",\r
"Porez na dodatu vrijednost",\r
"POREZ NA DODATU VRIJEDNOST",\r
"Porez na dodatu vrijednost obračunat na usluge inostranih lica",\r
"Porez na dodatu vrijednost plaćen pri uvozu sredstava po opštoj stopi",\r
"Porez na dodatu vrijednost plaćen pri uvozu sredstava po sniženoj stopi",\r
"Porez na dodatu vrijednost u datim avansima po opštoj stopi",\r
"Porez na dodatu vrijednost u datim avansima po sniženoj stopi",\r
"Porez na dodatu vrijednost u primljenim fakturama po opštoj stopi (osim plaćenih avansa)",\r
"Porez na dodatu vrijednost u primljenim fakturama po sniženoj stopi (osim plaćenih avansa)",\r
"Porez na dohodak",\r
"Porez na drugo primanje — višak iznad neoporezivog (%) — ZPDFL čl. 37n i 50d",\r
"porez na zarade",\r
"Porez niža st.",\r
"Porez obv. 15",\r
"Porez obv. NS",\r
"Porez obveznici",\r
"Porez opšta st.",\r
"porez po odbitku i druge dažbine",\r
"Porez po odbitku i prirez",\r
"Porez po odbitku i prirez (IOPPD 065)",\r
"Porez po odbitku na dividende koji je platila nerezidentna filijala",\r
"Porez snižena st.",\r
"POREZA",\r
"POREZI",\r
"Porezi i doprinosi",\r
"Porodiljsko / roditeljsko",\r
"Porodiljsko / roditeljsko odsustvo",\r
"Port",\r
"Port SMTP servera mora biti broj od 1 do 65535.",\r
"Port SMTP servera nije ispravan.",\r
"Portal",\r
"poruka",\r
"Poruka",\r
"Poruka izdavača (IRIS CORVINA)",\r
"poruka izdavača #{0} prikazana",\r
"poruka izdavača #{0} zatvorena",\r
"Poruka je poslata (nit #{0}). Odgovor izdavača stiže na ovaj ekran, uz traku „Nov odgovor podrške\\".",\r
"Poruka je poslata: {0}.",\r
"Poruka je prevelika — najviše 150 kB. Potrebno je podijeliti fakturu ili smanjiti broj stavki.",\r
"Poruka nije mogla biti pročitana (provjera veličine).",\r
"Poruka nije mogla biti pročitana pri provjeri po XSD šemi.",\r
"Poruka nije prihvaćena.",\r
"Poruka nije prošla provjeru šeme — neko polje je pogrešnog oblika.",\r
"poruka podršci #{0} (nit {1})",\r
"Poruka za Poresku je {0} kB, a dozvoljeno je najviše 150 kB. Faktura ima previše stavki. Potrebno je podijeliti je na dvije.",\r
"Poruke podršci",\r
"Poruke podršci izdavača (IRIS CORVINA), zahtjevi firme i prijava greške, kroz server sa ovog uređaja",\r
"Poruke se trenutno ne mogu pročitati: {0}",\r
"POS",\r
"POS / kartice",\r
"POS izvještaj",\r
"POS izvještaj (kartična naplata), nije izvod računa. Služi za kontrolu pazara, ne za plaćanja.",\r
"POS izvještaj (naplata karticama), a ne izvod računa. Nema plaćanja za unos.",\r
"POS izvještaja",\r
"POS provizija (mjesečno)",\r
"POS provizija {0}: kartice iz pazara koje prilivi sa izvoda nijesu pokrili {1}",\r
"POS provizija banke: kartice iz pazara koje priliv sa izvoda nije pokrio",\r
"Pošalji",\r
"Pošalji dokument",\r
"Pošalji e-poštom",\r
"Pošalji glavnom računaru",\r
"Pošalji nalog",\r
"Pošalji podršci",\r
"Pošalji ponovo",\r
"Pošalji zahtjev",\r
"Pošalji zaostale",\r
"Posao",\r
"Posao „{0}\\" je radno mjesto iz sistematizacije{1}. Za stalne poslove radnog mjesta to nije ugovor o djelu nego radni odnos ili privremeni i povremeni poslovi (IOPPD 098, puni doprinosi). Potrebna je provjera sa knjigovođom.",\r
"Poseban doprinos zbog nezapošljavanja lica sa invaliditetom. Upisuje se u IOPPD prijavu (blok na dnu). Zaposleno lice sa invaliditetom se označava na radniku (kartica „Radnici\\"); prosječna zarada se mijenja na kartici „Stope i vrste primanja\\".",\r
"Poseban obračun IQOS naknada",\r
"Posebna popisna lista robe koja se ne nalazi u objektu (Pravilnik o popisu, čl. 2)",\r
"Posebna popisna lista: roba izdata na revers koja se na dan popisa nalazi kod primaoca (izdato − vraćeno − prodato).",\r
"Posebna stavka bez PDV-a",\r
"Posebni uslovi (dozvole, sanitarna knjižica, rad u smjenama…)",\r
"posebno:",\r
"posebnom maržom",\r
"Pošiljalac",\r
"pošiljalac, naslov, fajl",\r
"Posivljen radnik je tog dana već u nekoj smjeni ili na odsustvu (razlog piše kad zadržiš miš). Stvarni sati se upisuju samo kad odstupaju od smjene.",\r
"Posl. prostor (PJ)",\r
"Posl. prostor kioska (PJ)",\r
"Posl. prostor kioska (PJ) — obavezno",\r
"Poslao",\r
"poslat — čeka glavni računar",\r
"poslate",\r
"Poslati glavnom računaru nalog za poništavanje posljednjeg uvoza ({0})?\\n\\nGlavni računar nalog izvršava samo ako je to i njegov posljednji uvoz. Cijene i podaci se vraćaju na stanje prije uvoza, novi artikli postaju neaktivni, a nove veze barkodova se uklanjaju.",\r
"Poslato",\r
"Poslato {0} promjena ({1}).",\r
"Poslato {0} promjena. Primljeno {1} paketa: novih zapisa {2}, već postojećih {3}.{4}{5}{6}{7}",\r
"poslato {0} puta",\r
"poslato grešaka: {0}",\r
"Poslato je više podataka o ključu nego što treba.",\r
"Poslato je više potpisa nego što smije.",\r
"Poslato na štampač: {0} kalkulacija ({1}).",\r
"Poslato: {0}.{1}",\r
"Poslije ovoliko uzastopnih noći taksa se ne obračunava; 0 = ne primjenjuje se.",\r
"poslije praznika",\r
"poslije roka ili izjašnjenja odluka o mjeri u",\r
"Poslije skeniranja otvara se unos marži po stavci.",\r
"Poslije svakog skeniranja kalkulacija se odmah šalje na štampač izabran u Podešavanja → Štampač (bez dijaloga). Važi i za obradu skenova sa telefona.",\r
"poslije upisa odmah sljedeći",\r
"Poslije uvoza su dodijeljene nove šifre.",\r
"Poslije zaključka godine u",\r
"Posljednja izmjena: {0}, {1}",\r
"Posljednja nabavka",\r
"posljednja nabavna cijena",\r
"Posljednja razmjena",\r
"Posljednje čitanje · {0}",\r
"Posljednje kalkulacije",\r
"Posljednji broj računa sa Z-izvještaja (KIF)",\r
"Posljednji dan rada",\r
"Posljednji fiskalizovan račun",\r
"Posljednji računi (",\r
"Posljednji uneseni",\r
"Posljednji uneseni pazari",\r
"Posljednji upis",\r
"Posljednji uvoz je već poništen.",\r
"Posljednji uvoz na glavnom računaru ({0}{1}) nije uvoz naveden u nalogu ({2}{3}).",\r
"Posljednji uvoz na glavnom računaru je već poništen.",\r
"Posljednji uvoz:",\r
"Posljednjih",\r
"Poslodavac će Zaposlenom isplatiti zaradu, naknade i druga primanja zaključno sa danom prestanka najkasnije u roku od {0} dana od prestanka ({1}), kao i naknadu štete za {2}neiskorišćenog godišnjeg odmora ({3}). Otpremnina {4}. Zaposleni će do dana prestanka vratiti sredstva rada, opremu, ključeve i dokumentaciju; Poslodavac vraća radnu knjižicu na dan prestanka ({5}).",\r
"Poslodavac donosi plan korišćenja godišnjih odmora za kalendarsku godinu najkasnije do {0} tekuće godine ({1}), uz prethodnu konsultaciju sa zaposlenima (želje se dostavljaju do 31.03.) i vodeći računa o potrebama procesa rada (sezona, popis, broj zaposlenih po objektu). Na osnovu plana donosi se rješenje o korišćenju odmora koje se zaposlenom dostavlja najkasnije {2} dana prije početka korišćenja ({3}); kraći rok samo uz saglasnost zaposlenog i Poslodavca. Termin se može izmijeniti zbog potreba procesa rada najkasnije {4} radnih dana prije početka i uz saglasnost zaposlenog, a bez saglasnosti samo u slučaju više sile ({5}); Poslodavac tada nadoknađuje stvarne troškove koje je zaposleni zbog toga imao.",\r
"Poslodavac je dužan da Zaposlenom obezbijedi uslove rada i mjere zaštite i zdravlja na radu, osposobi ga za bezbjedan rad prije stupanja na rad i obezbijedi sredstva i opremu za rad ({0} i Zakon o zaštiti i zdravlju na radu). Zaposleni je dužan da se pridržava propisanih mjera zaštite, higijenskih i sanitarnih propisa za promet namirnica, da koristi zaštitnu opremu, čuva imovinu i robu Poslodavca i da o svakoj opasnosti, kvaru ili šteti odmah obavijesti pretpostavljenog.",\r
"Poslodavac je Zaposlenog prije stupanja na rad pisano upoznao sa pravima, obavezama i odgovornostima u vezi sa zabranom zlostavljanja na radu i sa posrednikom za zaštitu od zlostavljanja ({0}). Poslodavac je dužan da Zaposlenog prijavi na obavezno socijalno osiguranje sa danom stupanja na rad, prijavu podnese u roku od {1} dana i kopiju uruči Zaposlenom u roku od {2} dana ({3}). Zaposleni je dužan da promjenu adrese prebivališta i e-adrese prijavi Poslodavcu u roku od {4} dana ({5}) i saglasan je da mu se akti dostavljaju i na e-adresu ({6}).",\r
"Poslodavac vodi evidenciju o korišćenju odmora i odsustava u knjigovodstvenom programu (po radniku i godini: pripada, iskorišćeno, preostalo), koja je osnov za rješenja, obračun zarade i naknade pri prestanku radnog odnosa. Na pitanja koja nijesu uređena ovim pravilnikom primjenjuje se {0}; ako kolektivni ugovor koji obavezuje Poslodavca utvrdi povoljnija prava, primjenjuju se ona. Pravilnik se objavljuje na oglasnoj tabli i stupa na snagu osmog dana od objavljivanja.",\r
"Poslodavca zastupa i njegovim radom rukovodi izvršni direktor, koji je nadređen svim zaposlenima. Radom organizacione jedinice Maloprodaja i objekata rukovodi menadžer maloprodaje; u objektu, u odsustvu menadžera, rad koordinira zaposleni koga menadžer odredi (vođa smjene), bez promjene radnog mjesta. Zaposleni za svoj rad odgovaraju neposrednom rukovodiocu utvrđenom ovim pravilnikom (rubrika „Odgovara\\"), a rukovodioci za rad jedinice kojom rukovode. U odsustvu izvršnog direktora zamjenjuje ga lice koje on pisano ovlasti.",\r
"Poslovi radnog mjesta utvrđuju se ugovorom o radu do dopune ovog pravilnika.",\r
"Poslovi se organizuju tako da se obezbijedi zakonito, efikasno i ekonomično poslovanje, puna iskorišćenost radnog vremena, jasna odgovornost svakog zaposlenog i jednake mogućnosti pri zapošljavanju i napredovanju, bez diskriminacije po bilo kom osnovu. Za radna mjesta utvrđuju se samo oni uslovi koji su stvarno potrebni za obavljanje poslova.",\r
"Poslovna kartica",\r
"Poslovni dobitak i gubitak",\r
"POSLOVNI PRIHODI",\r
"POSLOVNI RASHODI",\r
"POSLOVNI REZULTAT (dobit/gubitak)",\r
"Poslovnom tajnom Poslodavca, utvrđenom opštim aktom u skladu sa {0}, smatraju se podaci o nabavnim cijenama i uslovima sa dobavljačima, prometu i pazarima, zalihama, poslovnim planovima, podacima o kupcima i zaposlenima i sigurnosnim mjerama u objektima. Zaposleni je dužan da ih čuva za vrijeme trajanja radnog odnosa i {1} godine nakon prestanka; odavanje poslovne tajne je razlog za otkaz ugovora o radu ({2}). Lični podaci Zaposlenog obrađuju se samo u svrhu ostvarivanja prava i obaveza iz radnog odnosa; Zaposleni je pisano obaviješten o video nadzoru u objektima radi bezbjednosti lica i imovine.",\r
"Poslovođa u Menadžeru potvrđuje prijem robe po kalkulaciji („u redu\\" ili razlika po artiklu). Kalkulacija se ne mijenja automatski; razliku rješava knjigovođa (povrat, knjižno odobrenje, ispravka). Klik na red: detalj i kalkulacija.",\r
"poslovodja",\r
"POST",\r
"Pošta (izvodi, kartice, računi) se čita samo dok je klasični Outlook otvoren. Nakon pokretanja Outlooka i učitavanja pošte čitanje se ponavlja dugmetom „Pokušaj ponovo\\".",\r
"Pošta iz Outlooka",\r
"Pošta je pročitana",\r
"pošta još nije čitana na ovom računaru",\r
"Pošta pročitana",\r
"Pošta se ne čita automatski.",\r
"Pošta se samo čita",\r
"Pošta: „{0}\\" je izvod računa ({1}, šalterski ispis) — uvozi se kao izvod",\r
"Postavi",\r
"Postavi {0} EUR",\r
"Postavi PIN",\r
"Postavka je snimljena.",\r
"Postoje izmjene koje još nisu objavljene kasama. Objavljuju se automatski u sljedećem krugu na glavnom računaru ili odmah, dugmetom ispod.",\r
"postojeći nalog je u zaključanom mjesecu",\r
"Postoji novija promjena marže. Promjene se poništavaju obrnutim redom, počev od najnovije.",\r
"Postoji početno stanje {0}. Poništavanje zaključka je moguće nakon brisanja tog početnog stanja (Finansije → Početno stanje).",\r
"Poštovani,\\n\\n{0}\\n\\nS poštovanjem,\\n{1}",\r
"Poštovani,\\n\\nu Vašoj kartici / IOS-u za {0} na dan {1}. nalaze se stavke koje nemaju pokriće u našoj evidenciji:\\n\\n{2}\\n\\nUkupno sporno: {3} EUR.\\n\\nMolimo Vas da nam za navedene stavke dostavite kopije faktura i otpremnica sa potpisom lica koje je preuzelo robu (ime, prezime, objekat), odnosno da ispravite karticu ako je riječ o grešci. Do usaglašavanja te stavke ne možemo smatrati dospjelim za plaćanje niti ovjeriti IOS.\\n\\nSrdačan pozdrav,\\n{4}",\r
"Postrojenja i oprema",\r
"Postrojenja i oprema namijenjena prodaji",\r
"Poštuje sanitarne i higijenske propise za objekte u kojima se prodaju namirnice.",\r
"Postupak — {0} · {1}",\r
"Postupak je pokrenut pisanim upozorenjem od {0} godine, dostavljenim zaposlenom uz rok od {1} dana za pisano izjašnjenje i pravo na usmeno izjašnjenje. {2} {3}utvrđeno je da je zaposleni učinio povredu iz dispozitiva, koja je u vrijeme izvršenja bila utvrđena ugovorom o radu i Pravilnikom (čl. 144 st. 4 ZOR).",\r
"Postupak nije pronađen.",\r
"Postupak po zakonu (",\r
"Postupak pokreće izvršni direktor po saznanju ili na inicijativu bilo kog zaposlenog, pisanim upozorenjem zaposlenom u roku od {0} dana od saznanja. Upozorenje sadrži lične podatke i radno mjesto zaposlenog, opis i vremenski okvir povrede, dokaze i naznaku prava na usmeno izjašnjenje. Zaposleni se pisano izjašnjava u roku od {1} dana od dostavljanja (ćutanje se smatra saglasnošću sa navodima), a u roku od {2} dana može zahtijevati usmeno izjašnjenje; rasprava se održava u roku od 15 dana od dostavljanja upozorenja, uz pravo zaposlenog na prisustvo sindikalnog predstavnika i branioca, i o njoj se vodi zapisnik ({3}). Odluku — o obustavi postupka, oslobađanju ili mjeri — donosi izvršni direktor u roku od {4} dana od isteka roka za izjašnjenje odnosno od rasprave (30 dana uz uviđaj ili vještačenje); odluka sadrži uvod, izreku, obrazloženje i pouku o pravnom lijeku, konačna je i dostavlja se u roku od {5} dana. Zaposleni je može osporiti u roku od {6} dana pred Agencijom za mirno rješavanje radnih sporova, a kod prestanka i uslovnog prestanka i pred sudom ({7}).",\r
"Postupak se može pokrenuti u roku od {0} mjeseca od saznanja za povredu i učinioca, a mora se okončati u roku od {1} mjeseca od pokretanja; ako povreda ima obilježja krivičnog djela, pokretanje je moguće u roku od 6 mjeseci od saznanja ({2}). Mjera se ne može izvršiti ako je proteklo {3} dana od konačnosti odluke a izvršenje nije započeto; opomena, novčana kazna i uslovni prestanak brišu se iz evidencije ako zaposleni u roku od {4} godine ne učini novu povredu ({5}). Novčana kazna obustavlja se od zarade po konačnoj odluci, tako da ukupne obustave bez saglasnosti zaposlenog ne pređu trećinu zarade ({6}).",\r
"Potpis (na kraju poruke)",\r
"Potpis licence nije ispravan. Fajl je izmijenjen ili ga nije izdao IRIS CORVINA.",\r
"Potpis naloga ne odgovara ključu izdavača. Nalog nije izvršen.",\r
"Potpis odgovornog lica (Pravilnik 34/12 čl. 11). U elektronskom zapisu se uz ime pamti korisnik koji zaključi izvještaj.",\r
"Potpis u cjelini nije ispravan.",\r
"Potpisan je pogrešan dio poruke.",\r
"Potpisan nalog je stariji od 7 dana (ili bez vremena) — nije izvršen; izdavač treba da izda nov.",\r
"potpisivanje računa (Windows aplikacija sa ugrađenom fiskalizacijom; potrebna je nova instalacija, ne samo ažuriranje)",\r
"Potpisom zaposleni potvrđuje da je upoznat sa Pravilnikom o unutrašnjoj organizaciji i sistematizaciji radnih mjesta broj {0} od {1} godine i sa opisom poslova svog radnog mjesta.",\r
"Potpisuje se samo fiskalni zahtjev (IKOF ili SignedInfo).",\r
"Potraživanja i naplata od kupaca",\r
"Potraživanja iz komisione i konsignacione prodaje",\r
"POTRAŽIVANJA IZ SPECIFIČNIH POSLOVA",\r
"Potraživanja od državnih organa i organizacija",\r
"Potraživanja od Fonda (refundacije naknada)",\r
"Potraživanja od izvoznika",\r
"Potraživanja od kupaca (po partneru)",\r
"Potraživanja od zaposlenih",\r
"Potraživanja po izdatim fakturama — ko duguje, koliko i koliko dugo",\r
"Potraživanja po osnovu pretplaćenih ostalih poreza i doprinosa",\r
"POTRAŽIVANJA PO OSNOVU PRODAJE",\r
"Potraživanja po osnovu uvoza za tuđ račun",\r
"Potraživanja za kamatu i dividende",\r
"Potraživanja za nefakturisani prihod",\r
"Potraživanja za više plaćen porez na dobitak",\r
"Potraživanja za više plaćeni PDV",\r
"Potraživanja za više plaćeni porez na dodatu vrijednost",\r
"Potrazuje",\r
"potražuje",\r
"Potražuje",\r
"Potreban je bar jedan objekat. Kalkulacije, pazari i knjige se vode po objektu.",\r
"potrebna je potvrda.",\r
"potrebna provjera prema slici",\r
"Potrebno je izabrati dva različita termina.",\r
"Potrebno je izabrati objekat i skenirati QR kod fiskalnog računa.",\r
"Potrebno je otključati obračun i pokrenuti",\r
"Potrebno je pokrenuti",\r
"Potrebno je prethodno upisati uručenje odluke (3a).",\r
"Potrebno je prethodno zaključiti mjesece {0}.: {1}",\r
"Potrebno je upisati i snimiti „Na određeno do\\".",\r
"Potrošnja na sobu",\r
"Potvrda",\r
"Potvrda o zaposlenju",\r
"Potvrda PIN-om",\r
"Potvrda po sedmicama:",\r
"potvrda prijema {0}",\r
"Potvrda prijema {0}: {1}",\r
"Potvrda prijema iz Menadžera ({0}): kalkulacija nije pronađena. Potvrda je snimljena i čeka.",\r
"Potvrda prijema robe (Menadžer)",\r
"Potvrda se izdaje na lični zahtjev zaposlenog{0} i u druge svrhe se ne može koristiti.",\r
"Potvrda sedmice",\r
"Potvrda sedmice {0} je poništena.",\r
"Potvrda sedmice je poništena.",\r
"Potvrda usaglašenosti",\r
"Potvrda usaglašenosti stanja (kad se slaže) ili osporavanje sa spiskom spornih stavki, za potpis, pečat i odgovor dobavljaču",\r
"Potvrda za {0} je poništena.",\r
"Potvrde prijema",\r
"Potvrde prijema iz Menadžera",\r
"potvrđena",\r
"Potvrđena",\r
"Potvrđena (zauzima sobu)",\r
"Potvrđena {0} — klik poništava potvrdu",\r
"Potvrđene veze (",\r
"potvrđeno",\r
"Potvrđeno",\r
"Potvrdi",\r
"Potvrdio",\r
"Potvrditi sedmicu {0} – {1} za sve objekte?\\n\\nPotvrđena sedmica je zaključana i njeni sati ulaze u obračun plata po smjenama.",\r
"Potvrditi sedmicu {0}?\\n\\nRaspored te sedmice (cijela sedmica pon–ned) se zaključava kao odrađen i ulazi u obračun plata po smjenama. Zamjene i stvarni sati se ispravljaju prije potvrde (klik na dan).",\r
"Potvrditi sedmicu za {0}?",\r
"potvrdjen",\r
"Potvrđuje se da je {0}, JMB {1}, sa prebivalištem {2}{3}, zaposlen/a kod {4}, {5}, PIB {6}, od {7} godine, na {8}, na radnom mjestu {9}, sa {10}.",\r
"Potvrđujemo da se stanje obaveza {0} prema {1} na dan {2} u iznosu od {3} EUR SLAŽE sa Vašom evidencijom (saldo po Vašoj kartici {4} EUR).",\r
"Pouzdanost",\r
"povećanje",\r
"Povećanje (EUR)",\r
"Povećanje prodajne vrijednosti:",\r
"Povećanje vrijednosti zaliha nedovršenih i gotovih proizvoda i nedovršenih usluga",\r
"povezan",\r
"povezan sa objektom registra {0}",\r
"Povezani barkodovi",\r
"Povezani dokumenti (",\r
"Povezani ljekovi pronađeni i u novom izvještaju: {0}, od toga promijenjena cijena: {1}.",\r
"Povezano",\r
"Povezano sa „{0}\\": {1} redova. Veza se pamti za sljedeći uvoz.",\r
"Povezano sa šifarnikom (po barkodu): {0} artikala. PDV stopa ispravljena prema fakturama: {1}{2}.{3}",\r
"Poveži",\r
"Poveži preko ove veze",\r
"Poveži prodajna mjesta sa objektima",\r
"Poveži sa artiklom",\r
"poveži sa artiklom…",\r
"Poveži sa postojećim",\r
"Poveži sa postojećim artiklom",\r
"Poveži sa šifarnikom i uskladi PDV",\r
"Povezivanje",\r
"Povezivanje → Objavi bazu za telefone",\r
"Povezivanje artikala kase sa šifarnikom po barkodu i usklađivanje stopa PDV-a sa fakturama dobavljača.",\r
"Povezivanje lijeka sa izvještajem",\r
"povezivanje Menadžera (kod za uparivanje, fajl baze firme)",\r
"Povezivanje prodajnog mjesta „{0}\\" sa objektom „{1}\\"",\r
"Povezivanje programa IRIS Menadžer",\r
"Povezivanje se sa ovog računara šalje glavnom računaru firme, koji ga izvršava pri sljedećoj razmjeni; rezultat stiže ovdje sa njegovim snimkom.",\r
"Povezuje se…",\r
"Povlači robu kojoj je istekao rok ili je oštećena i evidentira je za rashod.",\r
"povraćaj",\r
"Povraćaj",\r
"povraćaj (negativna količina)",\r
"Povraćaj PDV-a",\r
"Povraćaj robe (pazar {0}{1})",\r
"Povraćaj robe ili usluge",\r
"povrat",\r
"Povrat",\r
"Povrat / knjižno — {0}",\r
"Povrat / knjižno od dobavljača",\r
"Povrat avansa",\r
"Povrat cijele robe",\r
"povrat dobavljaču",\r
"Povrat je obrisan.",\r
"Povrat je upisan.",\r
"Povrat od",\r
"povrat robe",\r
"Povrat robe",\r
"Povrat robe po reversu br. {0} od {1}",\r
"Povrat veći od robe kod primaoca: {0} ({1} {2}).",\r
"povrata dobavljačima · {0}",\r
"Povratak je dostupan samo na Windows verziji.",\r
"Povratak na „{0}\\" mijenja zaključane mjesece: {1}. Promjena nije moguća; osnova ostaje „{2}\\". Za promjenu je potrebno prethodno otključati te mjesece.",\r
"Povratak na ugrađenu adresu",\r
"Povratak na verziju {0}",\r
"Povratak nije uspio: {0}",\r
"Povrati",\r
"Povrće",\r
"Povreda",\r
"Povreda „{0}\\"",\r
"Povreda * (iz kataloga ili slobodan unos)",\r
"Povreda je upisana. Sljedeći korak: uručenje pisanog upozorenja radniku u roku od {0} dana od saznanja (postupak se otvara klikom na red).",\r
"Povreda radne obaveze (katalog)",\r
"povreda)",\r
"povrh",\r
"Povučena serija je primljena u objekat. Robu je potrebno izdvojiti i postupiti po rješenju o povlačenju.",\r
"Povučene serije",\r
"Povučeno iz popisa: {0} EUR (nabavna).",\r
"Povučeno iz popisa: {0} EUR (nabavna). Zadnji popis nije od 31.12. za {1}. Krajnje stanje je potrebno provjeriti.",\r
"PowerShell se ne može pokrenuti: {0}",\r
"Pozajmica / zajam (vlasnik, povezano lice)",\r
"Pozicija",\r
"POZICIJA",\r
"Pozicije po Pravilniku o sadržaju statističkog aneksa („Sl. list CG\\" 6/11, 9/12); zaposleni = prosjek po mjesecima iz obračuna plata.",\r
"Pozitivne kursne razlike",\r
"POZIV",\r
"poziv {0}",\r
"poziv na broj odobrenja = PIB-šifra opštine sjedišta (grad sjedišta nije upisan: Podešavanja → Firma)",\r
"poziv na broj odobrenja = PIB-šifra opštine sjedišta (PIB firme nije upisan: Podešavanja → Firma)",\r
"Poziv ne dolazi sa stranice programa — odbijeno.",\r
"PPZPDV čl. 121 st. 4 i čl. 122 st. 3",\r
"PPZPDV čl. 121 st. 4 i čl. 122 st. 3: avansni račun po datumu uplate, storno po datumu konačnog računa",\r
"PPZPDV čl. 76 st. 3: račun za avans se stornira računom za isporuku",\r
"PR",\r
"PR-{0}-{1}",\r
"PR-PDV",\r
"PR-PDV {0}/{1}: nepotpuno — {2}.",\r
"PR-PDV polje 20: obaveza za PDV pri uvozu (carina), dok uvoz nema svoj dokument",\r
"PR-PDV polje 20: PDV plaćen pri uvozu (prethodni porez)",\r
"PR-PDV polje 21: PDV na usluge inostranih lica — obaveza (obrnuto obračunavanje)",\r
"PR-PDV polje 21: PDV na usluge inostranih lica — prethodni porez",\r
"PR-PDV polje 22 (paušalna naknada {0}) nije proknjiženo. Konta određuje knjigovođa (Šema knjiženja: pdv.pausal i pdv.pausal.obaveza).",\r
"PR-PDV polje 26 ({0}) je veće od ulaznog PDV-a u knjigama ({1}). Na trošak je preneseno {2}.",\r
"PR-PDV polje 26: ulazni PDV bez prava na odbitak → trošak",\r
"Prag više stope poreza (EUR)",\r
"Prati rokove trajanja i ispravnost robe na kasi i u blizini kase.",\r
"Pravi dnevnu kopiju u folder za rezervnu kopiju",\r
"Pravi raspored rada (smjene), prati prisustvo, odobrava zamjene i ispomoć između objekata.",\r
"Pravi se minus kalkulacija koja u knjigama skida robu (134000/134001/134002; protivstav 5771).",\r
"Pravila godišnjeg odmora (Pravilnik firme)",\r
"Pravila i takse",\r
"Pravila objekta su sačuvana.",\r
"Pravila PDV-a za ugostiteljski objekat su isključena.",\r
"Pravila PDV-a za ugostiteljski objekat su uključena.",\r
"Pravila razvrstavanja",\r
"Pravilnik 34/12 čl. 11: promjena cijene robe na zalihi upisuje se na osnovu izvještaja o izvršenom popisu (nivelacija).",\r
"Pravilnik 34/12 čl. 11: promjena cijene robe upisuje se u evidenciju trgovine na osnovu izvještaja o izvršenom popisu. Povećanje se upisuje kao zaduženje, smanjenje crvenim stornom (kol. 4). Nova cijena važi od dana nivelacije u lageru i cjenovniku kase; istorija cijena ostaje (Zakon o zaštiti potrošača čl. 15).",\r
"Pravilnik 34/12 čl. 3 st. 1: evidencija se vodi posebno za svako veleprodajno mjesto i prodavnicu. Veleprodaja: evidencija EV, konta 1320/1329, 5012, 6020. Maloprodaja: evidencija EM, konta 134000/134001/134002, 5013, 6021. Vrsta se mijenja samo dok objekat nema dokumenata.",\r
"Pravilnik 34/12 čl. 3: evidencija trgovine vodi se posebno za svako prodajno mjesto. Pošiljalac: kol. 4 crveni storno po svojoj prodajnoj vrijednosti; primalac: kol. 4 zaduženje po internoj kalkulaciji. PPZPDV čl. 80: interni računi ne utiču na poresku obavezu.",\r
"Pravilnik 34/12 čl. 7 kol. 4: zaduženje „za trgovinu na veliko po veleprodajnim cijenama\\". Propis izričito ne određuje da li je veleprodajna cijena sa ili bez PDV-a; primijenjena je cijena bez PDV-a (isti iznos kao konto 1320). Potvrđuje knjigovođa.",\r
"Pravilnik dozvoljava najviše {0} nagradnih dana za godinu (promjena: ⚙ Pravila).",\r
"Pravilnik o disciplini",\r
"Pravilnik o godišnjim odmorima",\r
"Pravilnik o godišnjim odmorima dozvoljava stimulaciju za doprinos u radu do {0} radnih dana za godinu (promjena: Godišnji odmori → Pravila).",\r
"Pravilnik o godišnjim odmorima i odsustvima",\r
"Pravilnik o IOPPD — do 15. u mjesecu za prethodni mjesec",\r
"Pravilnik o količini rashoda na koje se ne plaća PDV — „Sl. list RCG\\" br. 74/06",\r
"Pravilnik o kontnom okviru CG („Sl. list CG\\" 11/20) i analitička konta",\r
"Pravilnik o odmorima",\r
"Pravilnik o organizaciji i sistematizaciji radnih mjesta",\r
"Pravilnik o popisu (2009) čl. 2: imovina koja se ne nalazi u pravnom licu popisuje se na posebnim popisnim listama.",\r
"Pravilnik o radnoj disciplini i odgovornosti zaposlenih",\r
"Pravilnik o sadržini i formi obrazaca FI (11/20), čl. 4: kolona 7 se popunjava samo kod retrospektivne primjene računovodstvene politike, retrospektivnog preračunavanja ili reklasifikacije stavki — tada cijela kolona, aktiva i pasiva.",\r
"Pravilnik o sistematizaciji",\r
"Pravilnik: osnovnih",\r
"Pravilo",\r
"Pravilo „{0}\\"",\r
"Pravilo „{0}\\" je {1}.",\r
"Pravilo „{0}\\" je obrisano.",\r
"Pravilo „{0}\\" je snimljeno.",\r
"pravilo je uključeno",\r
"Pravilo mora imati bar jedan izraz u polju „Riječi\\".",\r
"Pravilo nije nađeno.",\r
"pravilo uklonjeno",\r
"Pravilo važi za artikal čiji naziv sadrži bar jedan izraz iz polja „Riječi\\" (kao početak riječi), a nijedan iz polja „Izuzeci\\"; izrazi se odvajaju tačkom-zarezom. Važi prvo pravilo po redoslijedu; bez pravila stopa je 21 %. Ručno upisana stopa i stopa sa fakture dobavljača imaju prednost nad pravilom. Pravila za ugostiteljski objekat su",\r
"Pravilo: pravno lice je u kategoriji čija najviše",\r
"Pravljenje firme „{0}\\"…",\r
"Pravljenje kopije…",\r
"Pravni oblik",\r
"Pravni oblik: {0}",\r
"Pravni osnov („Na osnovu …\\") — upišite i član Statuta firme; zadnji upisani se pamti",\r
"PRAVNO LICE",\r
"Pravo na odmor po radniku —",\r
"Praznici",\r
"praznik",\r
"Praznik",\r
"Praznik „{0}\\" je upisan za {1}.",\r
"praznik {0}",\r
"Praznik {0} {1}",\r
"Praznik je premješten sa {0} na {1}.{2}",\r
"Praznik je uklonjen.",\r
"Praznik je upisan.",\r
"Praznik je vraćen.",\r
"Praznik na dan {0} ne postoji.",\r
"Praznik noću (+190 %)",\r
"Praznik rada",\r
"Praznika",\r
"prazno",\r
"Prazno = bez vize.",\r
"prazno = ćirilica od crnogorskog",\r
"Prazno = do daljnjeg. Poslije ovog datuma zakupodavac ne ulazi u nove mjesece.",\r
"prazno = opšta",\r
"Prazno = po cjenovniku.",\r
"prazno = sken bez marže čeka ručni unos",\r
"Prazno = standardni troškovi ({0} %). Drugi procenat se upisuje samo kad zakon za tu vrstu zakupa propisuje drugačije.",\r
"Prazno = stopa smještaja.",\r
"Prazno = stopa smještaja. Naknada nikad ne nosi boravišnu taksu.",\r
"Prazno polje = sljedeći broj iz programa; može se upisati i broj iz knjige (npr. 216/2024).",\r
"PRD",\r
"prebivališta",\r
"prebivališta radnika",\r
"prebivalište",\r
"Prebivalište",\r
"Prebrojano",\r
"Predati oblik iskaza je snimljen.",\r
"predlog",\r
"Predlog — klik potvrđuje sedmicu (zaključava raspored i pušta sate u obračun plata)",\r
"Predlog (najbliži iznos)",\r
"Predlog iz lagera na dan prijema fakture (prodaja po artiklu sa kase)",\r
"Predlog rasporeda",\r
"Predlog za {0} {1}: {2} termina u {3} objekata.{4}{5}",\r
"Predložena mjera: {0}.",\r
"Predloženo redova iz podataka programa: {0}. Potrebno je dopuniti iz bruto bilansa knjigovođe.",\r
"Predloži stope po pravilima",\r
"Predloži tekst",\r
"Predmet",\r
"Predmet avansa",\r
"Predmet avansa: {0}",\r
"Predmet ugovora",\r
"Predmet ugovora (djelo)",\r
"Predmet zakupa",\r
"Predračun od računa na ekranu (nije fiskalni račun); spisak predračuna",\r
"Preduzetnik",\r
"Predviđena mjera",\r
"Pregled",\r
"Pregled (dan · mjesec · godina)",\r
"Pregled (dan/mjesec/godina) prikazuje cio novčani tok; „Transakcije → čeka\\" sadrži stavke za pregled; „Izvodi i pokrivenost\\" prikazuje izvode koji nedostaju.",\r
"Pregled + po list za svaki objekat sa svim kalkulacijama u zvaničnom obrascu",\r
"Pregled cijena po mjestima. Izmjena: klik na polje (ili Enter) otvara prozor za to mjesto. Polje bez svoje cijene prati opštu cijenu.",\r
"Pregled dana, rokovi i brzi pristup",\r
"PREGLED FAKTURA",\r
"Pregled foldera radi samo na Android telefonu.",\r
"Pregled i sati",\r
"Pregled i upis",\r
"Pregled je urađen nad podacima ovog računara; upis izvršava glavni računar, uz rezervnu kopiju baze. Na ovom računaru se ništa ne upisuje.",\r
"PREGLED KALKULACIJA",\r
"PREGLED KALKULACIJA — {0}",\r
"PREGLED KALKULACIJA PO STAVKAMA",\r
"Pregled kasa je dostupan na računaru knjigovodstva (režim obrade).",\r
"Pregled ne sadrži naziv primaoca (samo svrhu upisanu pri plaćanju, npr. „placanje robe\\"), pa se dobavljač prepoznaje jedino po upamćenoj svrhi ili po iznosu otvorene fakture. Za pouzdano prepoznavanje potrebni su dnevni izvodi iz NLB e-bankinga (fajlovi „[…@ibank][račun][broj].pdf\\"), koji sadrže naziv i račun primaoca.",\r
"pregled nije objavljivan u ovoj sesiji",\r
"PREGLED PAZARA",\r
"Pregled poslovanja ·",\r
"PREGLED PRIHODA I RASHODA (procjena)",\r
"Pregled prije unosa",\r
"pregled rada menadžera (narudžbe, prijemi, popisi)",\r
"Pregled se upisuje u dnevnik pristupa (korisnik, vrijeme, razlog).",\r
"pregled, marže, PDF",\r
"Pregled. Izmjene radi korisnik sa ovlašćenjem za podešavanja.",\r
"pregledan, bez plaćanja za unos",\r
"pregledano",\r
"Pregledano poruka: {0}. Novih priloga u Pošti: {1}.",\r
"Pregledano poruka: {0}. Novih priloga: {1}.",\r
"Pregledano poruka: {0}. Novih priloga: {1}{2}.",\r
"Pregovara sa dobavljačima o uslovima, rabatima i reklamacijama.",\r
"Preimenovanje odmah mijenja naziv i kod svih radnika sa tim radnim mjestom.",\r
"Prekinuto.",\r
"Preklapa se sa već upisanim odsustvom ({0}).",\r
"Preko godina staža",\r
"preko servera",\r
"preko servera i Drive foldera (prelazni režim)",\r
"preko servera IRIS CORVINA",\r
"Prekoračenje: {uredjaja, dana} cijeli brojevi ≥ 0.",\r
"Prekoračenje: pravo za {0}. je {1} radnih dana, već iskorišćeno {2}, a ovaj dio je {3}.",\r
"Prekovr. noćni (+80 %)",\r
"Prekovremeni (+40 %)",\r
"Prekovremeni noćni rad",\r
"Prekovremeni rad",\r
"Prekovremeni rad {0} h prelazi zakonsku granicu od 10 h sedmično (≈ {1} h za ovaj mjesec; Zakon o radu, čl. 60).",\r
"Prelaz na nove šifre nije moguć: šifra iz fajla već postoji u tabeli {0} ({1}).",\r
"Prelaz na novu verziju",\r
"Prelazak na datum",\r
"prelazni (za razmjenu se koristi i Google Drive folder)",\r
"Prelazni račun — kartice u naplati (POS)",\r
"Prelazni režim",\r
"Prelazni režim je uključen: program i dalje piše i čita Google Drive folder za razmjenu. Režim je potrebno isključiti kad svi uređaji firme budu upareni sa serverom.",\r
"PREMA",\r
"Prema našoj evidenciji, na dan {0} Vi nemate dugovanje: Vaše potraživanje prema nama (odobreno ili uplaćeno više nego što je fakturisano) iznosi {1} EUR i sastoji se od sljedećih otvorenih stavki:",\r
"Prema našoj evidenciji, naša obaveza prema Vama na dan {0} iznosi {1} EUR i sastoji se od sljedećih otvorenih stavki:",\r
"Prema našoj evidenciji, Vaše dugovanje na dan {0} iznosi {1} EUR i sastoji se od sljedećih otvorenih stavki:",\r
"Prema Podešavanjima firma nije u sistemu PDV-a, a na računu je iskazan PDV. Uprava prihoda takav račun odbija. Potrebno je ispraviti stope na stavkama ili PDV status u Podešavanjima.",\r
"prema prethodnih 7",\r
"Prema radnom vremenu kiosk nedjeljom ne radi.",\r
"premješta se sa:",\r
"Premještanje u drugu sobu",\r
"premješten",\r
"Premještenih barkodova",\r
"Premjesti",\r
"Premjesti obračun ({0} {1})",\r
"Prenijeti iz {0}. u {1}. (radnih dana):",\r
"Prenijeti kapitalni gubici iz ranijih godina do visine iznosa pod 44 (PG 2)",\r
"prenos",\r
"PRENOS",\r
"Prenos — izdato",\r
"Prenos — primljeno",\r
"Prenos (±)",\r
"Prenos {0}",\r
"Prenos {0} je već poslat drugim računarima, pa datum mora ostati u {1}. godini. Za drugu godinu potreban je nov prenos.",\r
"Prenos ±",\r
"Prenos dobitka ili gubitka",\r
"Prenos i stimulacija godišnjeg odmora",\r
"Prenos iz {0} (privremeno — knjiga {1} nije zaključena)",\r
"Prenos iz {0}: roba po prodajnoj primaoca sa PDV",\r
"Prenos između računa firme",\r
"Prenos je otključan.",\r
"Prenos je prazan.",\r
"Prenos je već poslat na glavni računar. {0}",\r
"Prenos je zaključan.",\r
"Prenos je zaključan. Izmjena je moguća nakon otključavanja.",\r
"Prenos na račun dobitka i gubitka",\r
"Prenos neiskorišćenih dana iz {0}. (koriste se do {1}{2}.)",\r
"Prenos obračuna urađenog pod pogrešnim mjesecom (npr. avgustovske plate pod septembrom) na pravi period. Stavke i rezultati se prenose zajedno sa obračunom.",\r
"Prenos poreskog rashoda",\r
"Prenos prihoda",\r
"Prenos prihoda na račun uspjeha",\r
"Prenos rashoda",\r
"Prenos rashoda na račun uspjeha",\r
"Prenos rezultata",\r
"Prenos rezultata na 724",\r
"Prenos robe",\r
"Prenos robe između objekta · interna otpremnica i interna kalkulacija · trgovačke knjige oba objekta",\r
"Prenos robe između objekata",\r
"Prenos u {0}: roba po prodajnoj pošiljaoca (storno)",\r
"Prenos ukupnog rezultata",\r
"Prenos: ukalkulisana RUC pošiljaoca (storno)",\r
"Prenos: ukalkulisana RUC primaoca (interna kalkulacija)",\r
"Prenos: ukalkulisani PDV pošiljaoca (storno)",\r
"Prenos: ukalkulisani PDV primaoca",\r
"Prenos/stimulacija odmora — {0} {1}",\r
"prenosa među objektima u toku",\r
"Prenosi (trebovanja)",\r
"Prenosnica",\r
"Preostali dio od {0} radnih dana koristiće se najkasnije do {1}{2}. godine ({3}).",\r
"Preostalo",\r
"Prepis u aplikaciju organa",\r
"Prepis: prijava se priprema ovdje i unosi u aplikaciju organa.",\r
"Prepisati sedmicu {0} – {1} {2}?\\n\\nIsti ljudi, iste smjene i isti slobodni dani po danu u sedmici ({3}). Potvrđene sedmice i ručno upisani termini se ne diraju; prethodni automatski predlog u tom periodu se briše. Radnik na odsustvu se preskače (upražnjeno mjesto popunjava „Automatski rasporedi\\" ili ručni unos).",\r
"Prepiska",\r
"Preplata PDV / za povraćaj (PR-PDV polje 29)",\r
"Preporuka",\r
"prepoznat po PIB-u",\r
"prepoznat po riječima naziva (potrebna provjera)",\r
"prepoznat po žiro računu / nazivu koji je ranije potvrđen",\r
"Prepoznate kolone:",\r
"prepoznatih artikala",\r
"Prepoznato",\r
"Preračunato {0} isplata po važećim stopama.",\r
"PRESJEK STANJA\\nObjekat 9 - Jadranski put bb\\n…",\r
"Presjek stanja do",\r
"Presjek stanja tog dana je uklonjen.",\r
"preskočena",\r
"Preskočeni (ne pripadaju mjesecu obračuna): {0}.",\r
"Preskočeni: {0}",\r
"Preskočeno {0}: {1}{2}",\r
"Preskočeno paketa drugih firmi: {0} (primjenjuju se pri otvaranju tih firmi).",\r
"Preskočeno paketa drugih firmi: {0}.",\r
"Preskočeno probnih smjena (nisu pazari): {0}",\r
"Preskočeno redova bez naziva ili cijene: {0}.",\r
"Preskoči",\r
"Preskoka sada:",\r
"prestanak",\r
"Prestanak",\r
"Prestanak {0} je poništen. {1} je ponovo aktivan radnik.",\r
"prestanak {0}.{1}.",\r
"Prestanak je poništen. {0} je ponovo aktivan radnik.",\r
"Prestanak je poništen. Radnik je ponovo aktivan.",\r
"prestanak poništen — upisan greškom",\r
"prestanak radnog odnosa",\r
"Prestanak upisan greškom: briše datum prestanka, radnik se vraća u plate i smjene; dokument ostaje u evidenciji kao PONIŠTEN",\r
"Prethodna cijena (najniža u 30 dana)",\r
"Prethodna cijena = najniža u 30 dana prije sniženja (Zakon o zaštiti potrošača, čl. 15)",\r
"Prethodna godina",\r
"Prethodna godina — krajnje stanje",\r
"Prethodna godina — krajnje stanje 31.12.{0}",\r
"Prethodna godina — početno stanje",\r
"Prethodna godina — početno stanje 01.01.{0}",\r
"Prethodna godina {0}",\r
"prethodna nabavka {0}",\r
"Prethodna sedmica",\r
"Prethodna verzija ne postoji na ovom računaru.",\r
"prethodne",\r
"Prethodni i novi popis moraju biti različiti.",\r
"Prethodni period",\r
"Prethodni popis",\r
"Prethodni popis mora biti prije novog popisa.",\r
"prethodni upisani: Z {0} od {1}",\r
"prethodno pisano upozorenje",\r
"prethodnu verziju",\r
"Pretporez",\r
"Pretporez ukupno",\r
"Pretraga",\r
"Pretraga (broj, kupac ili napomena)",\r
"Pretraga (broj, opis)",\r
"Pretraga (konto ili naziv)",\r
"Pretraga (naziv ili PIB)",\r
"Pretraga (naziv ili šifra)",\r
"Pretraga (naziv, šifra, barkod, INN, ATC)",\r
"Pretraga (naziv, šifra, barkod)",\r
"Pretraga (naziv, šifra)",\r
"Pretraga (naziv, telefon, PIB)",\r
"Pretraga {0} firmi po nazivu ili PIB-u",\r
"Pretraga artikla",\r
"Pretraga dokumenta",\r
"Pretraga dokumenta po broju (Ctrl+K)",\r
"Pretraga dokumenta po broju: kalkulacija, faktura dobavljača, izlazna faktura, ponuda, otpremnica, odobrenje, IKOF/JIKR, prenosnica, otpis, nivelacija",\r
"Pretraga firmi",\r
"Pretraga po dobavljaču, broju i izvoru",\r
"Pretraga po nazivu",\r
"Pretraga QR koda fiskalnog računa u prilogu i izrada kalkulacije",\r
"Pretraga QR koda u „{0}\\"…",\r
"Pretraga šifarnika kase",\r
"Pretraga u grupi",\r
"pretraga: „{0}\\"",\r
"Pretraga: ime, soba",\r
"Pretraga: ime, telefon, soba",\r
"pretraga…",\r
"Preuzet je i snimak glavnog računara (objavljen {0}, {1} MB). Ekran se osvježava…",\r
"Preuzeta je i provjerena verzija",\r
"Preuzeta je i provjerena verzija {0}. Instalira se preko postojeće verzije; podaci ostaju sačuvani.",\r
"Preuzeta je i provjerena verzija {0}. Nova verzija se primjenjuje pri sljedećem pokretanju programa.",\r
"Preuzeti kompletnu bazu glavnog računara{0}?\\n\\nOva baza se zamjenjuje bazom glavnog računara. Zadržavaju se: podešavanja ovog uređaja, neobrađeni skenovi i dokumenti uneseni ovdje u zadnjih 7 dana.",\r
"Preuzeti su najnoviji podaci sa glavnog računara (",\r
"Preuzeto {0} MB (kalkulacija: {1}). Novi podaci su vidljivi nakon osvježavanja ekrana (F5).",\r
"Preuzima robu iz magacina i od dobavljača i dostavlja je u objekte po rasporedu.",\r
"Preuzimanje baze glavnog računara…",\r
"Preuzimanje nove verzije ne odgovara i prekinuto je.",\r
"Preuzimanje paketa ne odgovara i prekinuto je. Preuzimanje je potrebno ponoviti.",\r
"Preuzimanje podataka firme sa servera…",\r
"Preuzimanje računa sa servisa Poreske uprave (MAPR)…",\r
"Preuzimanje sati ovog radnika iz rasporeda smjena",\r
"Preuzimanje: Povezivanje. Popunjavaju se samo prazna polja i dodaju objekti i kase koji nedostaju.",\r
"Preuzmi firmu „{0}\\"",\r
"Preuzmi novu verziju",\r
"Preuzmi šablon (CSV)",\r
"Previše preusmjeravanja adrese ažuriranja.",\r
"Prezime",\r
"Prezime i ime",\r
"Prezime i ime izvršioca *",\r
"Prezime i ime izvršioca su obavezni.",\r
"Prezime i ime zakupodavca su obavezni.",\r
"Pri izricanju mjere cijenjeni su težina i posljedice povrede, stepen odgovornosti zaposlenog, njegov raniji rad i ponašanje, ranije izrečene mjere{0} i druge olakšavajuće i otežavajuće okolnosti ({1}), pa je odlučeno kao u dispozitivu. Postupak je pokrenut u roku od {2} mjeseca od saznanja za povredu i okončan u roku od {3} mjeseca od pokretanja ({4}).",\r
"Pri sljedećem pokretanju",\r
"pri upisu (upis se ponavlja automatski; uzrok je naveden u tabeli). Zapisi ostaju sačuvani.",\r
"Prihod maloprodaje 6021 — nalozi PAZ vs pazari (sa PDV − PDV)",\r
"Prihod maloprodaje 6021 vs pazari „ukupno bez PDV\\" (informativno)",\r
"Prihod od prodaje robe",\r
"Prihod od prodaje robe na veliko",\r
"Prihod od prodaje robe u MP",\r
"Prihod od usluga",\r
"Prihod po izvoru rezervacije",\r
"Prihod po raspoloživoj sobi",\r
"Prihod smještaja",\r
"prihodi",\r
"Prihodi",\r
"PRIHODI",\r
"Prihodi — izdate fakture (bez PDV)",\r
"Prihodi — pazari (ukupno − PDV po stopama)",\r
"Prihodi (efekti) po osnovu promjene računovodstvenih politika i ispravke grešaka iz prethodnih izvještajnih perioda",\r
"prihodi i rashodi nijesu preneseni u rezultat, pa zaključak",\r
"Prihodi iz prethodnih izvještajnih perioda",\r
"Prihodi iz prethodnih perioda",\r
"Prihodi od aktiviranja ili potrošnje proizvoda i usluga za sopstvene potrebe",\r
"Prihodi od aktiviranja ili potrošnje robe za sopstvene potrebe",\r
"Prihodi od aktiviranja učinaka i robe",\r
"PRIHODI OD AKTIVIRANJA UČINAKA I ROBE",\r
"Prihodi od članarina",\r
"Prihodi od izdatih faktura (usluge i veleprodaja)",\r
"Prihodi od kamata",\r
"PRIHODI OD PREMIJA, SUBVENCIJA, DOTACIJA, DONACIJA I SL.",\r
"Prihodi od premija, subvencija, dotacija, regresa, kompenzacija i povraćaja poreskih dažbina",\r
"Prihodi od prodaje proizvoda i usluga",\r
"PRIHODI OD PRODAJE PROIZVODA I USLUGA",\r
"Prihodi od prodaje proizvoda i usluga matičnim i zavisnim pravnim licima",\r
"Prihodi od prodaje proizvoda i usluga na domaćem tržištu",\r
"Prihodi od prodaje proizvoda i usluga na inostranom tržištu",\r
"Prihodi od prodaje proizvoda i usluga ostalim povezanim pravnim licima",\r
"Prihodi od prodaje robe",\r
"PRIHODI OD PRODAJE ROBE",\r
"Prihodi od prodaje robe matičnim i zavisnim pravnim licima",\r
"Prihodi od prodaje robe na domaćem tržištu",\r
"Prihodi od prodaje robe na inostranom tržištu",\r
"Prihodi od prodaje robe ostalim povezanim pravnim licima",\r
"Prihodi od prodaje robe po fakturama",\r
"Prihodi od prodaje robe u maloprodaji",\r
"Prihodi od prodaje usluga na domaćem tržištu",\r
"Prihodi od smanjenja obaveza",\r
"Prihodi od subvencija, dotacija i donacija",\r
"Prihodi od tantijema i licencnih naknada",\r
"Prihodi od ukidanja rezervisanja",\r
"PRIHODI OD USKLAĐIVANJA VRIJEDNOSTI IMOVINE",\r
"Prihodi od zakupnina",\r
"Prihodi po osnovu efekata promjene računovodstvene politike (prva primjena MRS/MSFI)",\r
"Prihodi po osnovu efekata ugovorene zaštite od rizika",\r
"Prihodi po osnovu efekata valutne klauzule",\r
"Prihodi po osnovu proizvoda i usluga",\r
"Prihodi po osnovu robe (uključuju se prihodi sa grupa računa 60, 61, 62, 64)",\r
"Prihodi po osnovu usklađivanja vrijednosti bioloških sredstava",\r
"Prihodi po osnovu usklađivanja vrijednosti nekretnina, postrojenja i opreme",\r
"Prihodi po osnovu usklađivanja vrijednosti nematerijalnih ulaganja",\r
"Prihodi po osnovu usklađivanja vrijednosti ostale imovine",\r
"Prihodi po osnovu usklađivanja vrijednosti potraživanja i kratkoročnih finansijskih plasmana",\r
"Prihodi po osnovu usklađivanja vrijednosti zaliha materijala i robe",\r
"Prihodi po osnovu uslovljenih donacija",\r
"PRIHODI UKUPNO",\r
"Prihodi usklađivanja vrijednosti dugoročnih finansijskih plasmana i dugoročnih hartija od vrijednosti",\r
"Prihvati",\r
"Prihvati njihovu",\r
"Prihvati stopu sa fakture",\r
"Prijava",\r
"prijava {0}",\r
"Prijava dolaska",\r
"Prijava gosta — {0} {1}",\r
"Prijava gostiju",\r
"prijava greške: {0}",\r
"Prijava je kopirana.",\r
"Prijava je snimljena: porez {0} EUR. Bilans uspjeha i zaključak godine koriste ovaj iznos.",\r
"Prijava je zapamćena i šalje se kad server bude dostupan (ili kad se uređaj upari).",\r
"Prijava nije snimljena",\r
"Prijava nije za predaju (kontrole nisu prošle). Ipak napraviti XML?",\r
"Prijava organima",\r
"Prijava policiji",\r
"Prijava problema i zahtjevi",\r
"Prijava turističkoj organizaciji",\r
"Prijava za {0}/{1} nije za predaju: {2}. Polja 10–12 i 16–18 su zato premala. Podjela po stopama se upisuje sa Z-izvještaja na ekranu „Unos pazara\\" (ne procjenjuje se). Izvoz prijave nosi oznaku NEPOTPUNO, a zaključavanje mjeseca nije moguće dok se nedostatak ne otkloni.",\r
"Prijava za prepis",\r
"PRIJAVA ZA UTVRĐIVANJE POREZA NA DOBIT PRAVNIH LICA — OBRAZAC PD",\r
"prijava.cuvanjeGodina",\r
"prijava.rokPolicijaSati",\r
"prijava.rokToSati",\r
"prijava.turistickaOrganizacija",\r
"Prijave gostiju",\r
"Prijavi",\r
"Prijavi dolazak",\r
"Prijavi grešku",\r
"Prijavio",\r
"Prijavljeno policiji",\r
"Prijavljeno turističkoj organizaciji",\r
"Prijavljuje manjkove, oštećenja i neusaglašenosti menadžeru.",\r
"Prijavljuje menadžeru svaku nepravilnost, manjak ili kvar opreme.",\r
"Prije",\r
"prije {0} d",\r
"prije {0} h",\r
"prije {0} h {1} min",\r
"prije {0} min",\r
"prije {0} s",\r
"prije + ostalo iz datuma zaposlenja) · prirez",\r
"Prije dana početnog stanja ({0}) postoje dokumenti objekta: {1}. Početno stanje zamjenjuje stanje robe iz tih dokumenata.",\r
"Prije generisanja",\r
"Prije pravilnika: {0}. „Popuni polaznu sistematizaciju\\" otklanja sve nalaze osim radnika sa pogrešnim mjestom.",\r
"prije prometa",\r
"Prije upisa se pravi rezervna kopija baze.",\r
"prije zaposlenja",\r
"Prijedlog",\r
"Prijedlog (INN, jačina, naziv)",\r
"Prijedlog naziva: {naziv}",\r
"Prijem",\r
"Prijem iz Menadžera: {0}",\r
"Prijem robe je potvrđen",\r
"Prijem u objektu {0}",\r
"prijem u redu",\r
"prijema robe u periodu",\r
"Prijemi i povrati",\r
"Prijemi, povrati, otpisi i prenosi iz Menadžera ovdje se samo prikazuju; u knjige ulaze kao i do sada (kalkulacija po fakturi, nalog otpisa, prenosnica).",\r
"Prikaz",\r
"Prikaz duga",\r
"Prikaz samo sati iz potvrđenih sedmica, odnosno sati koji ulaze u obračun plata po smjenama",\r
"Prikaz: {0} · ukupno {1} EUR",\r
"prikazano",\r
"Prikazano 500 od {0} — suzite pretragu.",\r
"Prikazano je prvih",\r
"Prikazano je prvih 300 redova. Za ostale je potrebno suziti pretragu.",\r
"Prikazano je prvih 400 redova. Za ostale je potrebno suziti pretragu.",\r
"Prikazano je prvih 500 redova. Za ostale je potrebno suziti pretragu.",\r
"Prikazano prvih",\r
"prikaži",\r
"Prikaži",\r
"Prikaži dan",\r
"prikaži i neaktivne",\r
"prikaži i otvorene obračune (informativno)",\r
"Prikaži podatke",\r
"Prikaži razliku",\r
"Prikaži samo ono što se ne poklapa",\r
"Prikaži samo redove sa greškom (",\r
"Prikaži spisak",\r
"prikaži sve ({0})",\r
"priliv",\r
"Priliv",\r
"PRILIV",\r
"Priliv i odliv po",\r
"Priliv POS / kartice",\r
"PRILIVI",\r
"Prilivi od drugih firmi (zakup prostora, kupci, POS, povrati) i odlivi po primaocu. Vrsta se mijenja u „Transakcije\\" i program je pamti po računu uplatioca.",\r
"PRILIVI PO UPLATIOCU",\r
"Prilog „{0}\\" nije dozvoljen (dozvoljeni: dnevnik, slika, kontekst).",\r
"Prilog 1",\r
"Prilog 2",\r
"Prilog mora biti objekat.",\r
"Prilog nije moguće otvoriti: {0}",\r
"Prilog označen kao pregledan (bez unosa).",\r
"prilog:",\r
"Prilog:",\r
"Priloženi sertifikat nije X.509.",\r
"Prilozi političkim organizacijama + pokloni i drugi prenosi bez naknade (a+b)",\r
"priloži posljednjih 200 redova dnevnika programa",\r
"priloži snimak ekrana",\r
"Prilozi su veći od 20 MB.",\r
"Prima i razvrstava poštu, izvode banaka, račune dobavljača i ulazne fakture.",\r
"Prima novac, vraća kusur, vodi računa o ispravnosti novčanica i stanju u kasi.",\r
"Prima robu od dobavljača, kontroliše količinu, kvalitet, rokove i prateću dokumentaciju.",\r
"Prima robu u objekat, provjerava količine i rokove prema otpremnici i fakturi.",\r
"primalac",\r
"Primalac",\r
"PRIMALAC",\r
"Primalac (kupac iz šifarnika)",\r
"Primalac nije upisan.",\r
"Primanja zaposlenih ili drugih lica po osnovu raspodjele dobiti",\r
"Primanje preko foldera ne radi:",\r
"Primijeni",\r
"Primijeni i na…",\r
"Primijeni maržu na sve stavke",\r
"Primijeni na sve redove",\r
"Primijeni notu",\r
"Primijenjene knjižne note",\r
"Primijenjeno {0}, novih artikala {1}, već primljeno {2}, bez poznate kase {3}.",\r
"Primijenjeno izmjena cijena koje su čekale objekat: {0}.",\r
"Primijenjeno na {0} faktura.",\r
"Primijenjeno na fakture",\r
"Primijenjeno: {0}.",\r
"Primio",\r
"Primjena marži i upis cijena sa kalkulacije koje se razlikuju od kase u cjenovnik objekta (šalje se kasama).",\r
"Primjenjuje se na fakturu na koju glasi, pa na otvorene fakture istog objekta, pa iste strane (naši / partnerski objekti), automatski pri raspoređivanju plaćanja ili odmah:",\r
"Primjer iz izvoda",\r
"Primljen (zaveden)",\r
"Primljena pozajmica",\r
"primljena roba danas (EUR sa PDV)",\r
"PRIMLJENI AVANS",\r
"Primljeni avans bez PDV",\r
"primljeni avansi (iskorišćeno {0}, vraćeno {1})",\r
"Primljeni avansi od kupaca",\r
"Primljeni avansi, depoziti i kaucije",\r
"Primljeni iznos sa PDV",\r
"Primljenih paketa",\r
"Primljeno",\r
"Primljeno (kol.)",\r
"Primljeno {0} paketa: novih zapisa {1}, već postojećih {2}.{3}{4}",\r
"Primljeno / poslato",\r
"primljeno je tek poslije tog mjeseca (pretporez",\r
"primljeno u objekte:",\r
"Prioritet",\r
"Pripada",\r
"Pripada {0}",\r
"Pripada mjesecu",\r
"Pripravnik",\r
"Priprema {0} kalkulacija…",\r
"Priprema i izdaje robu za objekte po prenosnicama; organizuje dostavu.",\r
"Priprema obračun zarada, poreske prijave (IOPPD) i naloge za isplatu.",\r
"priprema PDF-a…",\r
"Priprema početnih cijena iz kalkulacija… 50 %",\r
"Priprema poreske knjige (KPR, KIF, PR-PDV) i podatke za eksternog knjigovođu.",\r
"Priprema slike za čitanje nije uspjela.",\r
"priprema strane {0}",\r
"Priprema…",\r
"Pripremljeno {0} promjena ({1}). Fajl je potrebno snimiti u Google Drive folder koji prati i računar u kancelariji.",\r
"Pripremljeno {0} promjena. U dijalogu je potrebno izabrati Google Drive.",\r
"Pripremljeno za slanje na druge uređaje: {0} dokumenata od {1}.",\r
"Prirez",\r
"PRIREZ",\r
"Prirez — {0} (%)",\r
"Prirez (isplatilac)",\r
"Prirez (po opštini prebivališta):",\r
"Prirez (poslodavac)",\r
"Prirez plaća poslodavac opštini prebivališta radnika: zbir po opštini sa računom za uplatu",\r
"Prirez po opštinama",\r
"Prirez porezu",\r
"Prirez porezu na dohodak pripada opštini",\r
"Prirez: 1 = 10 % (stopa opštine) na ukupan porez obračuna, raspoređen radnicima; 0 = po radniku",\r
"Prirez: 1 = odsijecanje na cent, 0 = zaokruživanje",\r
"PRIREZI",\r
"pristup ekranu po nalogu #{0}: {1}",\r
"Pristup kameri nije dozvoljen. Na iPhoneu: Podešavanja → Safari → Kamera → „Pitaj\\" ili „Dozvoli\\", zatim ponovo pokrenuti aplikaciju. Za aplikaciju dodatu na početni ekran dozvola se traži pri prvom skeniranju.",\r
"Pristup podacima gostiju",\r
"Privremeni i povremeni poslovi",\r
"PRN",\r
"probna poruka",\r
"Probna poruka",\r
"Probna poruka je poslata: {0}.",\r
"Probna poruka na adresu",\r
"Probna poruka. Slanje e-pošte iz programa je ispravno podešeno.",\r
"Probna smjena #{0} kase {1} ({2}) je upisana u pazare jer je uključeno „uvozi i probne smjene\\"; računi nisu fiskalni.",\r
"PROBNA STRANA",\r
"Probna strana je poslata na štampač.",\r
"Probne smjene kase nisu upisane u pazare:",\r
"probni",\r
"Probni",\r
"Probni rad (mj., 0 = nema)",\r
"Probni rad kod ugovora na određeno može trajati najviše 1/4 ugovorenog trajanja ({0}), ovdje najviše {1} mj.",\r
"Probnih smjena koje čekaju čitanje: {0}",\r
"probnog režima",\r
"Procijenjen zavisni trošak (faktura nije stigla)",\r
"Procijenjen zavisni trošak u nabavnu (faktura nije stigla)",\r
"Pročitaj nalijepljeno",\r
"Pročitaj otisak",\r
"pročitani tekst",\r
"Pročitano {0} EUR odliva, a na izvodu {1} EUR. Spisak je potrebno provjeriti prema PDF-u.",\r
"pročitano {0} EUR odobrenja, a na izvodu {1} EUR; iznose je potrebno provjeriti prema PDF-u",\r
"pročitano {0} EUR zaduženja, a na izvodu {1} EUR; iznose je potrebno provjeriti prema PDF-u",\r
"Pročitano {0} fajlova zaključaka, smjena {1}: novih pazara {2}, izmijenjenih {3}, istih {4}{5}{6}; promet redova {7}, otpisa novih {8}{9}, obrisanih računa/stavki novih {10}{11}.{12}",\r
"Pročitano {0} poruka, {1} novih priloga. Uvezeno {2} izvoda: {3} novih transakcija, {4} plaćanja proknjiženo ({5} EUR), {6} čeka pregled u Banka → Transakcije, {7} duplikata preskočeno{8}.{9}",\r
"Pročitano {0} strana; {1} potpuno potvrđenih aritmetikom. Redove sa oznakom ⚠ potrebno je prije snimanja provjeriti prema slici (klik na red).",\r
"Pročitano {0} zapisa sa {1} uređaja Menadžera.{2}",\r
"pročitano {0}/{1} naloga zaduženja/odobrenja, a na izvodu {2}/{3}",\r
"pročitano do",\r
"pročitano OCR-om (font banke je nečitljiv, {0} prolaz{1}); potrebna provjera iznosa",\r
"procjena",\r
"Procjena",\r
"procjena (bez fakture)",\r
"Procjena bez fakture",\r
"Procjena je zatvorena fakturom. Brisanje je moguće poslije poništenja zatvaranja.",\r
"Procjena je zatvorena fakturom. Izmjena nije moguća.",\r
"procjena po stopama 9/12/15 % (godina nema naloga)",\r
"procjena poreza",\r
"Procjena poreza na dobit",\r
"PROCJENA POREZA NA DOBIT (bez glavne knjige) — nije prijava",\r
"Procjena poreza na dobit za firmu bez glavne knjige. Ovo nije prijava; prijava se pravi iz glavne knjige (Finansijski iskazi → PD).",\r
"Procjena prodaje iz razlike dva popisa (inventurna metoda)",\r
"Procjena prodaje iz razlike popisa (inventurna metoda): prethodni popis + ulazi i ostala kretanja − novi popis, po MPC na dan novog popisa. Nije evidencija kase; ništa se ne upisuje u knjige.",\r
"procjena prodaje po MPC (EUR)",\r
"procjena rezultata",\r
"Procjena rezultata",\r
"Procjena zavisnog troška uz kalkulaciju {0} — {1}",\r
"procjena, faktura nije primljena",\r
"Prod.",\r
"Prod. bez PDV",\r
"Prod. cijena",\r
"Prod. cijena bez PDV",\r
"Prod. cijena sa PDV",\r
"Prod. sa PDV",\r
"Prod. vr. sa PDV nova",\r
"Prod. vr. sa PDV sada",\r
"Prod. vrijednost",\r
"prod. vrijednost sa PDV",\r
"Prodaja",\r
"Prodaja (kasa / uvoz)",\r
"Prodaja (nacrt fakture)",\r
"Prodaja (uvoz) — dan",\r
"Prodaja (uvoz) — period {0}–{1}",\r
"prodaja {0}",\r
"prodaja bez nabavne cijene",\r
"Prodaja bez nabavne cijene (artikal kase bez veze sa šifarnikom, prodaja prije prvog ulaza, stavka bez artikla) je na posebnom spisku i ne ulazi u RUC.",\r
"Prodaja bez nabavne cijene (bez PDV, nije u RUC)",\r
"prodaja iznad salda grupe → oporezivi prihod {0} (čl. 7)",\r
"Prodaja na kasi (dan)",\r
"Prodaja na kasi bez veze sa artiklom (",\r
"Prodaja OS (bez PDV-a) — {0}",\r
"Prodaja po artiklu (uvoz)",\r
"Prodaja po artiklu iz fajla kase drugog proizvođača",\r
"Prodaja po popisu",\r
"Prodaja po popisu — procjena (inventurna metoda)",\r
"PRODAJA PO POPISU — PROCJENA (INVENTURNA METODA)",\r
"Prodaja robe kojoj je istekao rok ili svjesno nepovlačenje neispravne robe",\r
"prodaja u gubitku",\r
"Prodaja: kasa (iznos naplaćen sa PDV), prodaja uvezena iz fajla, izdate fakture i otpremnice na dan isporuke; faktura iz otpremnice se ne broji drugi put. Prodajna vrijednost je bez PDV.",\r
"Prodaje se na kasama",\r
"Prodajna",\r
"prodajna (sa maržom, bez PDV)",\r
"Prodajna bez PDV",\r
"Prodajna cijena BEZ PDV — treba za knjiženje (134000/134001)",\r
"prodajna cijena je negativna",\r
"Prodajna cijena ne može biti negativna.",\r
"prodajna cijena nije poznata",\r
"Prodajna cijena nije upisana: {0}{1}.",\r
"Prodajna cijena sa PDV na dan izdavanja",\r
"Prodajna cijena sa PDV pošiljaoca (crveni storno u njegovoj knjizi)",\r
"Prodajna cijena sa PDV primaoca (interna kalkulacija, zaduženje u njegovoj knjizi)",\r
"Prodajna mjesta",\r
"Prodajna mjesta koja nisu povezana sa objektom",\r
"Prodajna pošiljaoca",\r
"Prodajna primaoca",\r
"prodajna sa PDV",\r
"Prodajna sa PDV",\r
"prodajna SA PDV (cijene sa police)",\r
"prodajna sa PDV (EUR)",\r
"Prodajna sa PDV (zaduženje)",\r
"Prodajna vr. bez PDV",\r
"Prodajna vr. sa PDV",\r
"Prodajna vrijednost",\r
"Prodajna vrijednost bez PDV",\r
"Prodajna vrijednost bez PDV (0 ako je rashodovano):",\r
"Prodajna vrijednost bez PDV, nabavna vrijednost prodatog i razlika u cijeni za period — po artiklu, grupi i objektu.",\r
"Prodajna vrijednost sa PDV",\r
"prodajnih mjesta. Za svako mjesto potrebno je izabrati objekat:",\r
"Prodajno mjesto",\r
"Prodajno mjesto firme",\r
"Prodajno mjesto iz fajla",\r
"Prodajno mjesto je navedeno dva puta.",\r
"Prodajno mjesto nije izabrano.",\r
"Prodajno mjesto u paketu",\r
"Prodato",\r
"Prodato (procjena)",\r
"prodato {0}",\r
"produkcija",\r
"PRODUKCIJA",\r
"Produženje demo perioda",\r
"produženje demo perioda, dodatni modul (Kasa, Knjigovodstvo, Menadžer) ili drugo. Izdavač zahtjev odobrava ili odbija uz odgovor.",\r
"Produži za noć",\r
"Program automatski čuva kopije baze na ovom računaru (pri otvaranju, u toku rada i pri zatvaranju; 14 dana). Za kopiju van računara potreban je folder koji se prenosi na internet (npr. Google Drive).",\r
"Program čita poruke u",\r
"Program ga je rasporedio (predlog)",\r
"Program iz kalkulacija, pazara, izvoda, nabavki, rashoda i izlaznih faktura pravi naloge za knjiženje po šemama (Kontni plan → Šeme) i na kraju mjeseca obračunava realizovanu razliku u cijeni. Ponovno knjiženje istog mjeseca ne pravi duplikate: nalozi se ponovo prave iz dokumenata, a nalozi bez dokumenta se uklanjaju. Zaključan mjesec se ne mijenja.",\r
"Program je automatski vraćen sa verzije {0}: {1}.",\r
"Program je ažuriran na verziju",\r
"Program je potrebno zatvoriti i ponovo otvoriti.",\r
"Program je već otvoren u drugom prozoru ili radi u pozadini (traka na dnu ekrana). Dva otvorena prozora međusobno brišu upise. Ovaj prozor je potrebno zatvoriti i nastaviti rad u već otvorenom.",\r
"Program je vraćen na: {0}. Podaci nisu dirani.",\r
"Program koristi biblioteke otvorenog koda pod njihovim licencama. Isti spisak je i u fajlu LICENCE-TRECIH-LICA.txt uz program.",\r
"Program ne pokreće izvršne fajlove.",\r
"Program nema dnevnik za slanje.",\r
"Program nije povezan sa serverom (Podešavanja → Server).",\r
"Program nije povezan sa serverom.",\r
"Program nije povezan sa serverom. Opcija nije uključena.",\r
"Program nije povezan sa serverom. Uređivanje menija radi uz vezu sa serverom (Podešavanja → Server).",\r
"Program prikazuje dijelove izabranih djelatnosti. Bez izbora prikazuje se sve. Knjige, plate i podešavanja su uvijek dostupni.",\r
"Program prvo prikazuje pregled razlika; upis slijedi tek poslije potvrde. Prije upisa se pravi rezervna kopija baze, a posljednji uvoz se može poništiti.",\r
"Program već ima noviju verziju licence {0} (izdata {1}). Ovaj fajl je stariji.",\r
"Program vjernosti: kupac označen „šalje se kasama\\" ide kasama u cjenovniku, kasa ga prepoznaje",\r
"Program za kase",\r
"Program za kase ne odgovara (isteklo vrijeme).",\r
"program za udaljeni pristup",\r
"progresivno 9 / 12 / 15%",\r
"Proizvođač",\r
"Proizvodi i roba u prodavnicama proizvođača",\r
"Proizvodi od brašna (dvopek, mrvice, keks)",\r
"Proizvodjac",\r
"Proizvoljan (Od – Do)",\r
"Proknjižen (kalk.)",\r
"Proknjižen {0}.{1}: {2}{3}{4}{5} ({6} s){7}",\r
"proknjižen u glavnoj knjizi (zaključak godine)",\r
"Proknjižen: minus kalkulacija je napravljena i smanjuje robu (konta 134000/134001/134002, protivstav 5771). Izmjena stavki je moguća nakon „Poništi knjiženje\\".",\r
"proknjižena",\r
"proknjiženih transakcija: primalac na izvodu nije dobavljač plaćanja (ranije pogrešno spojeno čitanje izvoda) —",\r
"proknjiženo",\r
"Proknjiženo na kraj mjeseca {0} {1}.: {2} računa.",\r
"Proknjiženo.",\r
"Proknjiženo. Minus kalkulacija {0} je napravljena (Kalkulacije i fakture).",\r
"Proknjiži",\r
"Proknjiži mjesec",\r
"Proknjiži mjesec — nalozi iz dokumenata",\r
"Proknjižiti otpis {0}?\\n\\nNapraviće se minus kalkulacija (sa svojim brojem) koja smanjuje robu u trgovačkoj knjizi i kontima 134. Otpis se pri tome zaključava.",\r
"Proknjižiti u knjigu {0} {1}. sve račune tog i ranijih mjeseci koji još nisu u zaključanoj knjizi (datum knjiženja = {2}.{3}.{4})?",\r
"Promet",\r
"Promet — pazari sa PDV (EUR)",\r
"Promet (pazari)",\r
"Promet 0 % bez osnova:",\r
"Promet 0 % bez osnova: {0} € — polje {1}.",\r
"Promet 0 % sa pazara:",\r
"Promet danas",\r
"promet danas · računa",\r
"Promet duguje",\r
"Promet gasa, el. energije i grijanja/hlađenja sa prenosom poreske obaveze",\r
"Promet gasa, el. energije i grijanja/hlađenja sa prenosom poreske obaveze (ručno)",\r
"Promet izabranih",\r
"promet objekta (pazar bez PDV)",\r
"Promet po artiklu",\r
"Promet potražuje",\r
"Promet proizvoda je prenos prava raspolaganja (ZPDV čl. 4 st. 1) i nastaje isporukom: otpremnica razdužuje lager i trgovačku knjigu na dan isporuke (Pravilnik 34/12 čl. 7 kol. 5). Otpremnica nije fiskalni račun i ne ulazi u KIF ni PR-PDV. Ako račun nije izdat, PDV se obračunava osam dana od dana isporuke (ZPDV čl. 18 st. 3); faktura izdata kasnije dobija taj datum nastanka obaveze.",\r
"promet robe",\r
"Promet sa PDV",\r
"Promet, kupci i dobavljači",\r
"prometa objekta u mjesecu (pazar bez PDV {0} EUR)",\r
"Promijeni grupu",\r
"Promijeni market",\r
"Promijeni opštu cijenu",\r
"Promijeni PDV",\r
"Promijeni…",\r
"Promijeniti maržu na {0} % za {1} kalkulacija ({2} stavki)?\\n\\n{3}\\nProdajna vrijednost sa PDV: {4} → {5} EUR\\n\\n{6}Prije promjene se pravi rezervna kopija baze, a promjena se može poništiti.",\r
"Promijenjeno",\r
"Promjena datuma ili naziva",\r
"Promjena grupe",\r
"Promjena marže mijenja kalkulacije otvorenog perioda i njihovo zaduženje u trgovačkoj knjizi. Promjena prodajne cijene robe na zalihi bez izmjene kalkulacije unosi se nivelacijom (Zalihe i popis → Nivelacija).",\r
"Promjena marže ne postoji.",\r
"Promjena nije poništena: {0}",\r
"Promjena prodajne cijene robe na zalihi — izvještaj o izvršenom popisu (Pravilnik 34/12 čl. 11)",\r
"Promjena stope je upisana za {0} artikala: {1} → {2} od {3}.",\r
"Promjena stope od datuma",\r
"Promjena uloge „{0}\\" nije podržana u ovoj verziji programa — program zna samo ulogu računara (glavni, sporedni, admin).",\r
"Promjena važi za naloge napravljene poslije nje (ponovno „Proknjiži mjesec\\"). Konto vrste troška se podešava uz samu vrstu (Nabavka · OA · PD → vrste troškova).",\r
"promjena veća od tri puta",\r
"PROMJENA VRIJEDNOSTI ZALIHA UČINAKA",\r
"Promjenama putuje sve: dokumenti (kalkulacije, pazari, skenovi, fakture, plaćanja, otpisi, prenosi), šifarnici (objekti, artikli, dobavljači sa rabatima, kupci, vrste troškova, osnovna sredstva), podaci firme, radnici i obračuni plata sa stopama, smjene, zakup i zaključani periodi. Kad dokument ili šifarnik promijene dva uređaja, važi novija izmjena; plate, smjene i radnici se tada ne upisuju automatski, već čekaju odluku („Izmjene koje čekaju\\").",\r
"promjene",\r
"Promjene za knjigovodstvo",\r
"promjenu firme",\r
"Pronađen je Google Drive. Predlog foldera: {0}. Folder se potvrđuje dugmetom „Izaberi folder…\\".",\r
"Pronađena baza kase: {0}",\r
"Pronađeno {0} grupa duplih artikala ({1} viškova).",\r
"Pronađeno štampača: {0}.",\r
"Pronađeno u",\r
"Propis traži datum prijema (ZPDV čl. 37 st. 7: ulazni PDV se odbija „u poreskom periodu u kojem je primio račun\\").\\n\\n{0}Ipak voditi knjige po datumu računa?",\r
"propisana MPC cigareta je {0}",\r
"Propisano",\r
"Prosj. zaposlenih",\r
"Prosječan broj zaposlenih",\r
"Prosječan broj zaposlenih (ukupan broj zaposlenih krajem svakog mjeseca / broj mjeseci)",\r
"Prosječna cijena",\r
"prosječna ponderisana nabavna cijena",\r
"Prošla godina ({0}.)",\r
"Prošli kvartal ({0}. {1}.)",\r
"Prošli mjesec",\r
"Prošli mjesec ({0})",\r
"Proteklo:",\r
"Protiv ovog rješenja zaposleni može, u roku od {0} dana od dana dostavljanja, podnijeti predlog za mirno rješavanje radnog spora Agenciji za mirno rješavanje radnih sporova ili pokrenuti postupak pred nadležnim sudom ({1}). Pokretanje postupka ne odlaže izvršenje rješenja.",\r
"Protiv zaposlenog je pokrenut postupak za utvrđivanje odgovornosti zbog teže povrede radne obaveze: {0}, učinjene {1} godine. {2} Pisano upozorenje sa opisom povrede dostavljeno mu je {3} godine uz rok od {4} dana za pisano izjašnjenje i pravo na usmeno izjašnjenje{5}. Odlukom od {6} izrečena je mjera prestanka radnog odnosa ({7} st. 2 tač. 3), jer su, cijeneći težinu i posljedice povrede, stepen odgovornosti i ranije ponašanje zaposlenog ({8}), isključeni uslovi za nastavak rada. Postupak je pokrenut i vođen u rokovima iz {9}.",\r
"Protivračun",\r
"Protukonto",\r
"Protukonto {0} ne postoji.",\r
"Provizija banke na kartice {0}",\r
"provizije banke izostavljene: {0}",\r
"provizije banke izostavljene: {0}{1}",\r
"Provjera",\r
"Provjera ažuriranja ne odgovara (moguć prekid mreže). Provjeru je potrebno ponoviti.",\r
"Provjera ažuriranja nije uspjela: {0}",\r
"Provjera foldera radi samo na Android telefonu.",\r
"Provjera IKOF-a (za poresku kontrolu)",\r
"Provjera je završena. Nova verzija, ako postoji, preuzima se u pozadini i prikazuje se dugme „Osvježi\\".",\r
"PROVJERA KARTICE DOBAVLJAČA",\r
"Provjera licence…",\r
"Provjera nije dostupna (aplikacija nije otvorena preko HTTPS adrese).",\r
"Provjera nije uspjela (moguć prekid mreže): {0}",\r
"Provjera numeracije",\r
"Provjera podataka",\r
"Provjera poslije uvoza",\r
"Provjera prije snimanja",\r
"Provjera računa kod Poreske uprave…",\r
"provjera svakog minuta",\r
"Provjera veze sa serverom…",\r
"Provjera Z brojeva",\r
"Provjeren",\r
"provjeri",\r
"Provjeri licencu",\r
"Provjeri ponovo",\r
"Provjeri poštu",\r
"Provjeri sada",\r
"Provjeri vezu",\r
"Provjerite količinu, cijenu i stopu.",\r
"Provjeriti da li je riječ o istom artiklu upisanom dva puta ili o različitim artiklima sa istim barkodom.",\r
"prozor je pao: {0}",\r
"PRPDV",\r
"Prva",\r
"Prva banka",\r
"Prva banka Crne Gore",\r
"Prva banka: {0}. Izvod nije pouzdano pročitan. Potreban je ručni unos.",\r
"Prva banka: nije prepoznat nijedan nalog u PDF-u.",\r
"Prva razmjena još traje i nastavlja se u pozadini.",\r
"Prva razmjena sa serverom…",\r
"Prva razmjena: sa servera je stiglo {0}{1}.",\r
"prva smjena",\r
"Prva smjena",\r
"Prvi broj računa sa Z-izvještaja (KIF)",\r
"prvi broj u redu",\r
"Prvi dio godišnjeg odmora mora trajati najmanje {0} radnih dana neprekidno ({1}).",\r
"Prvi dio najmanje",\r
"Prvi koraci",\r
"Prvi koraci — nova firma",\r
"Prvi koraci nisu završeni",\r
"Prvi račun",\r
"Prvi upareni uređaj postaje uređaj administratora Menadžera",\r
"Prvo „Provjeri ažuriranje\\", pa primijeni ponuđenu verziju.",\r
"prvo pokretanje → Učitaj bazu iz Knjigovodstva",\r
"Prvo unesite vrste soba.",\r
"PS",\r
"PS - popis cijelog objekta od 31.12.{0}.",\r
"PS - popis za 31.12.{0}.",\r
"PS - saldo zaključene knjige za {0}.",\r
"Pšenica, ječam, zob, kukuruz i druge žitarice",\r
"pulsira",\r
"Puni iznos",\r
"Puno pravo",\r
"Puno radno vrijeme iznosi {0} časova sedmično ({1}). U maloprodajnim objektima rad je organizovan u smjenama, uključujući subotu, nedjelju i praznike, u skladu sa radnim vremenom objekta; raspored smjena utvrđuje se pisanom odlukom i objavljuje zaposlenima najmanje {2} dana unaprijed ({3}). Radna mjesta na kojima se radi u smjenama označena su u posebnim uslovima. Radna mjesta sa nepunim radnim vremenom posebno se označavaju ({4}).",\r
"PUT",\r
"Putanja baze izlazi iz foldera Podaci.",\r
"Putanja do baze kase (kasa.db)",\r
"Putanja nije u folderu pošte.",\r
"Putanja verzije izlazi iz foldera Verzije — ažuriranje je odbijeno.",\r
"Putnički automobil — djelovi i servis",\r
"PZ",\r
"QR adresa (https://mapr.tax.gov.me/…)",\r
"QR kod je pročitan iz računa „{0}\\". Nakon provjere objekta i marže obrada se pokreće tasterom Enter u polju QR koda ili dugmetom „Obradi\\".",\r
"QR kod u „{0}\\" nije QR fiskalnog računa (nema IIC): {1}",\r
"QR kod u okviru se čita automatski.",\r
"QR kodovi i domen",\r
"QR meni — sadržaj menija",\r
"QR meni za goste",\r
"QR nije validan. Nedostaju iic/tin/crtd parametri.",\r
"QRUrl",\r
"R. br.",\r
"R.br.",\r
"R.br. 16: na 31.12. stoje neisplaćene zarade/naknade {0} EUR (saldo 4500 + 4650 + 4651). Za iznose isplaćene do predaje prijave o priznavanju odlučuje knjigovođa.",\r
"r.Broj",\r
"r.BrojRacuna",\r
"r.MarketID",\r
"Rab.",\r
"Rabat %",\r
"rabat izveden iz iznosa računa, potrebna provjera računa",\r
"Rabat je obrisan.",\r
"Rabat manji od ugovorenog na {0} {1} (−{2} EUR)",\r
"Rabat mora biti od 0 do 99,99 %.",\r
"Rabat na fakturi",\r
"Rabat nije ispravan.",\r
"Rabat po artiklu",\r
"Rabat po artiklu je upisan.",\r
"rabat sa QR koda nije provjeren iznosom, potrebna provjera računa",\r
"Rabat se predlaže na stavci fakture, ponude i otpremnice za artikal, od navedenog datuma; za ostale artikle važi podrazumijevani rabat kupca. Rabat na stavci se može ručno izmijeniti.",\r
"Racun",\r
"RACUN",\r
"račun",\r
"Račun",\r
"račun {0}",\r
"Račun {0} {1}",\r
"Račun {0} je uklonjen iz računa firme.",\r
"Račun {0} tog dobavljača od {1} je već unesen.",\r
"Račun {0} ukloniti iz računa firme „{1}\\"? Plaćanja sa izvoda ovog računa se poslije toga ne knjiže automatski. Već uvezeni izvodi i plaćanja ostaju.",\r
"račun bez broja",\r
"Racun br.",\r
"Račun br.",\r
"Račun dobavljača (fiskalni QR)",\r
"RAČUN DOBITKA I GUBITKA",\r
"Račun dobitka i gubitka poslovanja koje se obustavlja",\r
"Račun druge firme",\r
"Račun druge firme; njegovi izvodi se ne uvoze u ovu firmu",\r
"Račun firme",\r
"Račun glasi na drugog kupca",\r
"Račun gosta nije naplaćen ({0} EUR). Naplatite ga prije odjave.",\r
"Račun ima IKOF i čeka slanje Poreskoj upravi. Izmjena i brisanje nijesu mogući. Ponovno slanje: Podešavanja → Fiskalizacija → „Pošalji zaostale\\"; nakon dobijanja JIKR ispravka ide korektivnim računom.",\r
"Račun ima IKOF, ali ga Poreska uprava nije potvrdila (nema JIKR). Izmjena nije moguća; ponovno slanje: Podešavanja → Fiskalizacija → „Pošalji zaostale\\".",\r
"Račun ima knjižno odobrenje — storno nije moguć.",\r
"Račun ima odbitak avansa — storno nije moguć.",\r
"račun izvoda nije prepoznat; potreban ručni uvoz (Obaveze → Uvoz izvoda)",\r
"Račun je izdat poslije {0} i proknjižen je na datum računa, ne u prethodni mjesec.",\r
"Račun je već proknjižen u zaključanom mjesecu. Pomjeranje nije moguće.",\r
"Račun je već storniran.",\r
"Račun još nije potvrđen kod Uprave prihoda (nema JIKR).",\r
"Račun koji je dobio IKOF, a nije dobio JIKR, izdat je kupcu, ali ga Uprava prihoda nije potvrdila (najčešće zbog prekida interneta). Ovaj spisak mora biti prazan.",\r
"Račun koji je stigao mailom: program pronalazi QR kod u PDF-u ili na slici i pravi kalkulaciju.",\r
"Račun koji ovaj korektivni račun ispravlja",\r
"Račun na kome je avans odbijen",\r
"Račun ne sadrži podatke o kupcu (PIB). Ulazni PDV po ovom računu nije odbitan.",\r
"Račun nema stavki.",\r
"Račun nije fiskalizovan. Briše se ili stornira na uobičajen način.",\r
"račun nije među računima firme (Podešavanja → Firma); plaćanja nisu knjižena automatski i čekaju pregled",\r
"Račun nije potvrđen kod Uprave prihoda (nema JIKR).",\r
"Račun nije pripremljen za slanje.",\r
"Račun nije snimljen: isti dobavljač, datum i iznos već postoje.",\r
"račun opštine",\r
"Račun ovog dobavljača od {0} na iznos {1} EUR je već unesen (kalkulacija {2}).\\n\\nUnijeti još jedan račun sa istim dobavljačem, datumom i iznosom?",\r
"Račun ovog izvoda ({0}) nije prepoznat. Automatska provjera pripadnosti nije moguća.\\n\\nUvesti kao izvod firme {1}?",\r
"račun primaoca {0} nije poznat račun javnih prihoda",\r
"račun primaoca {0}, a plaćanje je nastalo za {1}",\r
"račun primaoca je upamćen za drugog dobavljača",\r
"Račun pripada ovoj firmi; njegovi izvodi se uvoze u Banku",\r
"Račun prireza",\r
"Račun sa ovim QR kodom je već uvezen (kalkulacija #",\r
"Račun sobe",\r
"Račun sobe {0}",\r
"račun u KPR-u bez kalkulacije (npr. zavisni trošak); nije roba na kontu 134",\r
"Račun u kucanju",\r
"Račun ulazi u mjesec u kom je izdat (bez obzira kad je primljen). Propis traži datum prijema (ZPDV čl. 37 st. 7).",\r
"Račun ulazi u mjesec u kom su primljeni i roba i račun; tada se odbija i ulazni PDV (ZPDV čl. 37 st. 7). Preporučeno.",\r
"Račun za preuzimanje nabavke materijala i robe",\r
"Račun za preuzimanje prihoda",\r
"Račun za preuzimanje troškova",\r
"Račun za preuzimanje zaliha",\r
"Račun za smještaj i sumarni račun za potrošnju na sobu",\r
"Račun za usluge",\r
"Račun-faktura",\r
"Račun: {0}\\n\\nOznačiti kao račun druge firme (ne pripada firmi {1})? Izvodi ovog računa se neće uvoziti u ovu firmu.{2}",\r
"Račun: {0}\\nFirma: {1}\\n\\nUpisati račun među račune ove firme? Izvodi ovog računa se uvoze u Banku ove firme, a prepoznata plaćanja se knjiže automatski.",\r
"Račun: {0}\\nIzvod glasi na: {1}PIB {2}\\nOtvorena firma: {3}\\n\\nPIB na izvodu nije PIB ove firme. Uvesti izvode ovog računa u ovu firmu?",\r
"Račun: {0}.",\r
"Račun: {0}{1}\\n\\nOznačiti kao račun druge firme (ne pripada firmi {2})?{3}",\r
"račun(a) sa datumom u",\r
"RACUNA",\r
"računa",\r
"Računa",\r
"Računa · promet",\r
"računa čeka fiskalizaciju",\r
"Računa koji čekaju slanje duže od 48 sati: {0}. Propisani rok je prekoračen. Račune je potrebno odmah poslati ili prijaviti problem Upravi prihoda.",\r
"Računa koji nisu uneseni: {0}. Posljednja greška: {1}",\r
"Računa koji nisu uneseni: {0}. Posljednja greška: {1}\\n\\nRačuni su sačuvani na ekranu „Nova kalkulacija\\": dugme „Pokušaj ponovo\\" ponavlja unos.",\r
"Računa se od časa dolaska gosta.",\r
"računar je na staroj verziji programa; izmjena se ne upisuje automatski",\r
"računar ove firme",\r
"Računar u kancelariji",\r
"računari",\r
"računi",\r
"računi „na sobu\\" (naplaćeno sumarnim računima {0})",\r
"RAČUNI DOBITKA, GUBITKA I ZAKLJUČKA",\r
"Računi firme",\r
"Računi firme (izvodi banaka)",\r
"RAČUNI GLAVNIH PROIZVODNIH MJESTA TROŠKOVA",\r
"Računi izdati firmama sa kase (zadnjih 60 dana)",\r
"Računi izdati prije",\r
"Računi koji čekaju slanje (",\r
"RAČUNI MJESTA TROŠKOVA NABAVKE, TEHNIČKE UPRAVE I POMOĆNIH DJELATNOSTI",\r
"RAČUNI MJESTA TROŠKOVA UPRAVE, PRODAJE I SLIČNIH AKTIVNOSTI",\r
"Računi na čekanju",\r
"računi obrisani i stavke uklonjene prije naplate, posljednjih 48 h; starije vidi šef",\r
"RAČUNI ODNOSA S FINANSIJSKIM KNJIGOVODSTVOM",\r
"Računi sa izvoda",\r
"Računi sa kojih je plaćanje ovog partnera prepoznato pri knjiženju izvoda.",\r
"računu banke",\r
"Rad",\r
"RAD",\r
"Rad i rezervna kopija",\r
"Rad na dan praznika",\r
"Rad na dan praznika (dodatak +150 % povrh osnove)",\r
"Rad na računaru (knjigovodstveni program, e-banking, e-prijave); samostalnost i tačnost.",\r
"Rad nedjeljom",\r
"Rad nedjeljom (dodatak +80 % povrh osnove)",\r
"Rad nedjeljom i praznikom je dozvoljen samo za vrijeme manifestacije (čl. 35b st. 3 t. 7). Radno vrijeme uskladiti sa trajanjem manifestacije.",\r
"Rad preko lokalnog IRIS servera traži instalaciju Knjigovodstva 1.0.117 ili noviju (nov Setup). Na Androidu i u web verziji lokalni server još nije podržan; telefon radi preko servera IRIS CORVINA.",\r
"Rad u knjigovodstvenom programu; poznavanje PDV-a i fiskalizacije; tačnost i povjerljivost.",\r
"Rad u smjenama, vikendom i praznicima; sanitarna knjižica; materijalna odgovornost za novac u kasi.",\r
"Rad u smjenama; fizička spremnost za rukovanje teretom; sanitarna knjižica.",\r
"Radanovići bb, Kotor",\r
"radi",\r
"radi (promjene stižu odmah, i kad je prozor umanjen)",\r
"Radi danima",\r
"radi dok je program otvoren na ekranu",\r
"Radi ovim danima",\r
"Radi u drugom objektu",\r
"radi u objektu {0}",\r
"Radna disciplina",\r
"Radna mjesta (šifarnik)",\r
"Radna sedmica",\r
"Radni dani i redovan rad se vode u obračunu plate, ne u posebnom obračunu.",\r
"radni dani za sve",\r
"Radni market",\r
"Radni odnos na određeno prestaje istekom roka iz ugovora (",\r
"Radni odnos prestaje u slučajevima iz {0}: {1}po sili zakona, sporazumom strana zaključenim u pisanoj formi i ovjerenim kod notara, suda ili organa lokalne uprave ({2}), otkazom Zaposlenog ovjerenim na isti način i dostavljenim najmanje {3} dana prije dana prestanka ({4}) i otkazom Poslodavca iz opravdanih razloga ({5}) po postupku iz {6} i {7}.",\r
"radni odnos prestao {0}.{1}.{2}.",\r
"Radni odnos zaposlenom prestaje otkazom ugovora o radu, o čemu se donosi rješenje u skladu sa {0}; za težu povredu radni odnos prestaje bez otkaznog roka ({1} st. 2).",\r
"Radni odnos zasniva se ugovorom o radu na neodređeno ili određeno vrijeme, na radno mjesto iz ovog pravilnika, sa licem koje ispunjava uslove radnog mjesta. Ugovorom se može ugovoriti probni rad do {0} mjeseci (kod ugovora na određeno — najviše četvrtina trajanja), sa otkaznim rokom od {1} radnih dana ({2}). Pripravnik se prima radi osposobljavanja za samostalan rad na radnom mjestu za koje ima traženu kvalifikaciju, pod uslovima iz zakona.",\r
"radni staž {0} god.",\r
"Radnici",\r
"radnici objekta",\r
"Radnici mijenjaju smjene između sebe: izbor smjene prvog, pa smjene drugog radnika (može i drugi dan)",\r
"radnih dana",\r
"Radnih dana",\r
"radnih dana · pravo za",\r
"Radnih dana (pon–sub)",\r
"radnih dana za 5-dnevnu sedmicu (",\r
"radnih dana, odlukom izvršnog direktora. Na rješenju o odmoru piše kao stimulacija (nagrada) za doprinos u radu. 0 = bez stimulacije.",\r
"radnih nedjelja. Jedan klik upisuje radnika u njegovu uobičajenu smjenu i objekat (ili ga skida). Sati nedjeljom se u platama vide kao „Rad nedjeljom\\".",\r
"Radnik",\r
"Radnik {0} {1}",\r
"Radnik dodat u smjenu.",\r
"Radnik je na odsustvu ({0}) {1} – {2}.",\r
"Radnik je na odsustvu ({0}) od {1} do {2}.",\r
"Radnik je radio i u drugom radnom vremenu (drugi objekat ili druga smjena)",\r
"Radnik je snimljen.",\r
"Radnik je tog dana već raspoređen ({0}, {1}). Potrebno ga je prethodno ukloniti iz te smjene.",\r
"Radnik je tog dana već u drugom objektu ({0}, {1}). Potrebno ga je prethodno ukloniti iz te smjene.",\r
"Radnik još nije obračunat.",\r
"radnik još nije stigao ({0})",\r
"Radnik nema matični objekat i raspoređuje se kao zamjena.",\r
"Radnik nema matični objekat sa smjenama. Potrebno ga je prethodno označiti u „Brzom unosu\\" po objektu.",\r
"radnik nije aktivan",\r
"Radnik nije izabran.",\r
"Radnik nije pronađen.",\r
"Radnik sa datumom prestanka od narednog mjeseca ne ulazi u plate i smjene. Prestanak upisan greškom poništava se dugmetom „Poništi\\": radnik se vraća, a dokument ostaje u evidenciji sa oznakom PONIŠTEN.",\r
"Radnik se ne raspoređuje u smjene ({0}). Za rad u smjenama potrebno je ukloniti oznaku „ne raspoređuje se u smjene\\" na kartici radnika (Plate → Radnici).",\r
"Radnik sklonjen iz smjene.",\r
"Radnik uvijek radi ovu smjenu (redni broj smjene u objektu); program ga ne stavlja u drugu. Bez izbora — rotira po pravilima raspoređivanja.",\r
"Radnik već ima {0} lakše povrede u zadnjih 12 mjeseci — po pravilniku je to otežavajuća okolnost pri odmjeravanju mjere ({1}).",\r
"Radnik, datum i povreda su obavezni.",\r
"Radnika",\r
"radnika · bruto",\r
"radnika (zakupodavca, izvršioca po ugovoru o djelu) i plaća se na njen račun. Zakon o finansiranju lokalne samouprave dozvoljava do 13 %, Glavnom gradu i Prijestonici do 15 %; stvarnu stopu svaka opština utvrđuje svojom odlukom. Polazne stope su provjerene u odlukama opština i izvještajima Državne revizorske institucije (kolona „Izvor\\"; za",\r
"radnika na tom mjestu. Dugme „Pravilnik (PDF)\\" pravi cio akt za potpis i oglasnu tablu.",\r
"radnika u ovom obračunu prirez je odbijen od zarade radnika, pa je bruto veći nego što treba. Prirez plaća poslodavac povrh bruta.",\r
"Radnika u smjeni",\r
"radnika)",\r
"RadnikID IS NULL",\r
"radniku",\r
"Radniku isplaćujem (neto, EUR)",\r
"Radnja",\r
"Radnja je moguća samo na glavnom računaru firme (koji objavljuje bazu). Ispravka napravljena ovdje ne stiže do glavnog računara, a njegov snimak bi je ovdje poništio.",\r
"Radnja je moguća samo na glavnom računaru firme.",\r
"Radno iskustvo",\r
"Radno mjesto",\r
"Radno mjesto — {0}",\r
"Radno mjesto „{0}\\"",\r
"Radno mjesto je skup istih ili srodnih poslova i zadataka koje obavlja jedan ili više izvršilaca pod uslovima utvrđenim ovim pravilnikom; svako radno mjesto ima šifru, naziv, opis poslova, uslove i broj izvršilaca.",\r
"Radno mjesto je snimljeno.",\r
"Radno mjesto na kome nema izvršilaca ostaje u pravilniku dok se ne ukine izmjenom pravilnika. Ako se izmjenom pravilnika radno mjesto ukine ili se smanji broj izvršilaca, zaposlenom se nudi drugo odgovarajuće radno mjesto; ako ga nema, radni odnos prestaje po postupku i uz prava propisana za prestanak potrebe za radom zaposlenog (otpremnina — {0}).",\r
"Radno mjesto nije pronađeno.",\r
"Radno vrijeme",\r
"Radno vrijeme i smjene ovog objekta",\r
"Radno vrijeme objekta",\r
"Radno vrijeme po objektu",\r
"Radno vrijeme se upisuje u obliku SS:MM (npr. 07:00 i 23:00).",\r
"Radno vrijeme u dane praznika",\r
"Rakovi",\r
"Ranije je u {0}. iskorišćeno {1} radnih dana.",\r
"Ranije nepriznato obezvređenje imovine otuđene u periodu (čl. 18a)",\r
"Ranije promjene marže",\r
"Ranije slanje ovog dokumenta",\r
"Ranije snimljena odluka ({0}) biće zamijenjena.",\r
"ranijem",\r
"raniji broj dokumenta",\r
"Raniji odlazak",\r
"Ranijih neuplaćenih dana istog objekta nema.",\r
"Rashod robe",\r
"Rashod robe — zapisnik {0} ({1}); minus kalkulacija: −134000/−134001/−134002, protivstav 5771",\r
"Rashod robe {0} — {1} ({2})",\r
"Rashod robe {0} od {1} (minus kalk. {2})",\r
"Rashod robe u okviru normativa",\r
"rashodi",\r
"RASHODI",\r
"Rashodi (COGS+troškovi+amort.+zarade)",\r
"Rashodi (efekti) promjene računovodstvenih politika i ispravke grešaka iz prethodnih izvještajnih perioda",\r
"Rashodi i prihodi",\r
"RASHODI I PRIHODI",\r
"Rashodi iz prethodnih izvještajnih perioda",\r
"Rashodi iz prethodnih perioda",\r
"Rashodi kamata",\r
"Rashodi po osnovu direktnih otpisa potraživanja",\r
"Rashodi po osnovu efekata promjene računovodstvene politike (prva primjena MRS/MSFI)",\r
"Rashodi po osnovu efekata ugovorene zaštite od rizika, koji ne ispunjavaju uslove da se iskažu u okviru revalorizacionih rezervi",\r
"Rashodi po osnovu efekata valutne klauzule",\r
"Rashodi po osnovu obezvređivanja imovine koji se ne priznaju (čl. 18a)",\r
"Rashodi po osnovu rashodovanja robe",\r
"Rashodi po osnovu rashodovanja robe (kalo, rastur, kvar, lom)",\r
"Rashodi po osnovu rashodovanja zaliha materijala i robe",\r
"Rashodi po osnovu usklađivanja vrijednosti bioloških sredstava",\r
"Rashodi po osnovu usklađivanja vrijednosti dugoročnih finansijskih plasmana i dugoročnih hartija od vrijednosti",\r
"RASHODI PO OSNOVU USKLAĐIVANJA VRIJEDNOSTI IMOVINE",\r
"Rashodi po osnovu usklađivanja vrijednosti nekretnina, postrojenja i opreme",\r
"Rashodi po osnovu usklađivanja vrijednosti nematerijalnih ulaganja",\r
"Rashodi po osnovu usklađivanja vrijednosti ostale imovine",\r
"Rashodi po osnovu usklađivanja vrijednosti potraživanja i kratkoročnih finansijskih plasmana",\r
"Rashodi po osnovu usklađivanja vrijednosti zaliha materijala i robe",\r
"rashodovanje",\r
"Rashodovanje OS — sadašnja vrijednost",\r
"Rashodovanje robe",\r
"Rashodovanje robe (otpis)",\r
"Rashodovano",\r
"Raspoloživo (sobe-noći)",\r
"Raspon",\r
"Raspon ili spisak, odvojeno zarezom.",\r
"Raspored",\r
"Raspored — {0}, sedmica od {1}.{2}.",\r
"Raspored {0}: {1}",\r
"Raspored dobitka",\r
"Raspored iz Menadžera ({0}, sedmica od {1}.{2}.): sedmica je ovdje već potvrđena. Raspored nije primijenjen.",\r
"Raspored iz Menadžera ({0}, sedmica od {1}.{2}.): upisano {3}, preskočeno {4}: {5}{6}",\r
"Raspored iz Menadžera ({0}): {1}",\r
"Raspored iz Menadžera ({0}): objekat „{1}\\" ne postoji u Knjigovodstvu.",\r
"Raspored iz Menadžera {0}: sedmica nije ponedjeljak.",\r
"Raspored nije promijenjen. {0}",\r
"Raspored smjena",\r
"RASPORED SMJENA",\r
"Raspored smjena po objektima",\r
"raspored smjena po objektima, ugovori, godišnji odmori, disciplina, rješenja (plate ostaju u knjigama)",\r
"Raspored troškova „u nabavnu\\" (",\r
"Raspored za {0} {1}. nije napravljen. Raspored se pravi dugmetom „Automatski rasporedi\\" ili unosom smjena klikom na dan.",\r
"Raspored zavisnih troškova",\r
"rasporeda smjena {0}",\r
"Raspoređeno",\r
"Raspoređeno {0} smjena za {1} {2}.{3}",\r
"Raspoređeno od nule: {0} veza plaćanja i {1} primjena knjižnih nota.",\r
"Raspoređeno po objektima: {0}.",\r
"Rasporediti sva plaćanja i knjižne note ponovo, od početka?\\n\\nAutomatske veze se brišu i prave ponovo: početno stanje dobavljača je najstarija stavka, knjižna nota ide na fakturu na koju glasi, pa u isti objekat, pa na istu stranu (naši / partnerski objekti). Ručne veze ostaju.\\n\\nIznosi faktura, plaćanja i saldo dobavljača se ne mijenjaju. Mijenja se raspored plaćenih faktura (i podjela duga naš / partnerski).",\r
"Rasporediti sve objekte za {0} {1}?\\n\\nObjekti se rade redom, pa zamjene (radnici bez matičnog objekta) pokrivaju slobodne dane tamo gdje zatrebaju. Ručno uneseni termini i potvrđene sedmice se ne diraju.",\r
"Raspoređivanje svih objekata odjednom (po istim pravilima); radnici bez matičnog objekta služe kao zamjene za slobodne dane u svim objektima",\r
"Raspoređuje se u smjene",\r
"ravno",\r
"Ravno — isti procenat za svaku godinu staža",\r
"Ravnomjerno: svaki radnik dobije jedan planiran slobodan dan u sedmici, raspoređeni tako da svakog dana bude slobodan približno isti broj ljudi, pa ih zamjene (radnici bez matičnog objekta) stižu pokriti. Stalni slobodan dan sa kartice radnika uvijek ima prednost.",\r
"RAZ",\r
"razduženje",\r
"Razduženje",\r
"Razduženje (EUR)",\r
"Razduženje (procj.)",\r
"Razduženje = pazar bez PDV ÷ (1 + prosječna marža objekta). Razlika = popis − teoretsko stanje na dan popisa (− manjak / + višak); uzima se zadnji popis do kraja izabranog perioda.",\r
"Razduženje bez PDV (NV + RUC, RUC se obračunava mjesečno)",\r
"Razduženje bez PDV (RUC mjesečno)",\r
"Razduženje manjka (popis {0} vs knjige {1})",\r
"Razduženje robe 134000 — nalozi PAZ+IZF vs pazari sa PDV (fakture robe dodaju svoj iznos)",\r
"Razduženje robe 134000 — nalozi PAZ+IZF vs pazari sa PDV{0} (fakture robe dodaju svoj iznos)",\r
"Razduženje robe po cijeni bez PDV",\r
"Razduženje robe po fakturi (bez PDV)",\r
"Razduženje robe po fakturi (sa PDV)",\r
"Razduženje robe po prodajnoj sa PDV",\r
"Razgraničene obaveze za porez na dodatu vrijednost",\r
"Razgraničeni PDV iz knjižnih odobrenja (čeka obavještenje kupca)",\r
"Razgraničeni porez na dodatu vrijednost",\r
"Razgraničeni prihodi po osnovu potraživanja",\r
"Razgraničeni troškovi po osnovu obaveza",\r
"Razgraničeni zavisni troškovi nabavke",\r
"Razgraničeni zavisni troškovi nabavke robe",\r
"Razgraničenje do prijema fakture — {0}",\r
"razlika",\r
"Razlika",\r
"Razlika (artikala)",\r
"Razlika (nabavna, EUR)",\r
"Razlika (nabavna)",\r
"razlika (pozitivna: manjak, negativna: višak)",\r
"Razlika (uvezeno − pazar)",\r
"razlika {0}",\r
"Razlika {0} je stavljena na konto {1}. Potrebna je provjera sa knjigovođom.",\r
"Razlika / j.m.",\r
"razlika = izlazne fakture robe u mjesecu",\r
"Razlika faktura − procjena: dio robe na zalihi ide u nabavnu vrijednost, dio prodate robe u trošak perioda (5310). Konto 494 se zatvara u iznosu procjene.",\r
"Razlika faktura − procjena: prodata roba (trošak perioda)",\r
"Razlika faktura − procjena: roba na zalihi (nabavna)",\r
"Razlika iznad osnovnih stavki obračunava se kao „Stimulacija (uklapanje isplate)\\" i redovno se oporezuje. Obračun je u skladu sa zakonom; traženi iznos se određuje unaprijed.",\r
"Razlika kalkulacija/račun (zaokruživanje; nabavna {0} vs račun {1})",\r
"razlika kalkulacija/račun u mjesecu {0} EUR knjiži se na RUC{1}",\r
"razlika minulog {0}",\r
"Razlika minulog rada",\r
"Razlika minulog rada (raniji mjeseci)",\r
"Razlika minulog rada je dodata u {0} {1}: {2} radnika, {3} EUR bruto (vrsta {4}).{5}",\r
"Razlika minulog rada se dodaje u obračun plate.",\r
"Razlika minulog rada\\" (IOPPD kao zarada). Već dodata razlika se ne dodaje ponovo.",\r
"Razlika obračunatih prihoda (33 − 32) > 0",\r
"Razlika obračunatih troškova (26 − 27) > 0",\r
"razlika pazara",\r
"Razlika po j.m.",\r
"Razlika u cijeni (RUC)",\r
"Razlika u cijeni robe u maloprodaji (RUC)",\r
"Razlika u cijeni robe u veleprodaji",\r
"razlika u iznosu",\r
"Razlika u iznosu",\r
"razlika u prijemu",\r
"Razlika u prijemu robe",\r
"Razlike",\r
"Razlike KPR ↔ konta 134 (",\r
"Razlike prema pregledu (",\r
"Razlike prema pregledu: {0}.",\r
"Razlog",\r
"Razlog (rješenje, obavještenje)",\r
"Razlog obustave postupka:",\r
"Razlog otkaza (obrazloženje) *",\r
"Razlog otkaza je obavezan.",\r
"Razlog otkaza: ________________________________________________.",\r
"Razlog poništavanja dokumenta:",\r
"Razlog pregleda",\r
"Razlog storniranja:",\r
"Razlog: {0}.",\r
"razlogu",\r
"Razmijeni sada",\r
"Razmijenjeno: {0} ({1} ⇄ {2}).",\r
"Razmjena",\r
"razmjena (drugi uređaj)",\r
"Razmjena (server) i rezervna kopija",\r
"Razmjena i Excel",\r
"Razmjena na ovom računaru nije uključena; nalog odlazi kad se razmjena uključi (Povezivanje).",\r
"Razmjena ne radi kad dva računara imaju isti ID (najčešće zbog kopirane baze). Jednom od njih je potrebno dodijeliti nov ID.",\r
"Razmjena podataka (klik za detalje)",\r
"Razmjena podataka između uređaja",\r
"Razmjena preko Drive-a",\r
"Razmjena preko foldera (stari put, bez servera)",\r
"Razmjena preko Google Drive-a",\r
"Razmjena prenosi pakete svih firmi iste grupe. Provjera pokazuje da li su u ovu firmu upisani dokumenti druge firme; takvi dokumenti se mogu obrisati jednim klikom.",\r
"Razmjena sa serverom je u toku (najviše 2 minuta; veliki fajlovi se prenose u pozadini)…",\r
"Razmjena sa serverom se nastavlja u pozadini.",\r
"Razmjena smjena",\r
"razmjena, kase, ažuriranje",\r
"razmjena, rezervna kopija, ažuriranje",\r
"Razmjena: izbor dvije smjene (ili ✕)",\r
"Razmjena: ovaj radnik ide u smjenu izabranog, a izabrani ovdje",\r
"Razmjena: pročitano {0} fajlova izmjena, primijenjeno {1}{2}, već primljeno {3}{4}; {5}{6}",\r
"Razmjenjuj preko foldera automatski (na svaka 2 minuta)",\r
"razredi OKU, jedna stopa",\r
"Razredi OKU, jedna stopa — sve godine po stopi razreda u kom je ukupan staž (15 god. = 15 × 0,75 = 11,25 %)",\r
"razredi OKU, kumulativno",\r
"Razredi OKU, kumulativno — svaka godina po stopi svog razreda (15 god. = 10 × 0,5 + 5 × 0,75 = 8,75 %)",\r
"Razveži",\r
"Razvrstavanje",\r
"Rb.",\r
"REAL",\r
"Realizovana RUC {0}: {1} × {2} %{3}",\r
"Realizovani ukalkulisani PDV",\r
"Recepata FZO",\r
"Recepata: {0}. Dio FZO {1} + naknada po receptu {2} = {3} €{4} Dio FZO je umanjen za naplaćenu participaciju i doplatu. Faktura se dostavlja elektronski i u papirnom obliku do 10. u mjesecu za prethodni mjesec.",\r
"Recepcija",\r
"Recepcija — mjesec",\r
"Recepcija (hotel) u ovom mjesecu",\r
"Recepcija (hotel): smještaj, avansi i boravišna taksa",\r
"Red",\r
"red „Ukupno EURA\\" pogrešno pročitan (OCR: {0}); kontrola po tabeli STANJE se slaže",\r
"red {0}: iznosi nisu jasno pročitani",\r
"Red br.",\r
"Red izvještaja CInMED nije pronađen. Izvještaj je potrebno uvesti ponovo.",\r
"red je već uvezen iz istog fajla",\r
"Red koji u fajlu nije mijenjan se ne upoređuje sa programom. Podatak koji je u programu mijenjan poslije izvoza upisuje se samo ako se u pregledu izričito uključi.",\r
"red nema naziv, šifru ni barkod",\r
"Red nije izabran.",\r
"red stanja (prethodno / duguje / potražuje / novo) nije pronađen",\r
"red uvoza nije povezan sa artiklom",\r
"Red. Broj",\r
"Redni broj",\r
"Redni broj računa",\r
"Redoslijed",\r
"Redoslijed na meniju",\r
"Redoslijed pravila je broj veći od nule.",\r
"Redoslijed u grupi",\r
"Redoslijed: marža sa prethodne kalkulacije istog dobavljača, pa marža upisana u Menadžeru, pa ova. Bez ijedne se kalkulacija ne pravi sama.",\r
"redova",\r
"Redova",\r
"redova (za pregled ostalih potrebno je suziti period ili pretragu). Zbir, izvoz i štampa obuhvataju sve redove.",\r
"Redova sa greškom (nisu uvezeni)",\r
"redova. Za ostale je potrebno suziti pretragu.",\r
"Redovan rad",\r
"Redovi bez ručno zadatog iznosa se prepišu iz ugovora po važećim stopama; ručno zadati iznosi ostaju",\r
"Redovi bez veze sa artiklom (",\r
"Redovi kartice kopirani iz PDF-a ili maila; zatim „Pročitaj nalijepljeno\\".",\r
"Redovna cijena sada",\r
"ref.ključ",\r
"Refundacija CSR, porodiljsko — % naknade",\r
"Refundacija CSR, porodiljsko — limit (broj prosječnih zarada; SPORNO 1 ili 2 — potvrđuje knjigovođa)",\r
"Refundacija FZO — % naknade (bolovanje od 61. dana, trudničko od 1. dana)",\r
"Refundacija FZO, bolovanje preko 60 dana — limit (broj prosječnih zarada)",\r
"Refundacija FZO, održavanje trudnoće — limit (broj prosječnih zarada)",\r
"Refundacija naknada — {0}",\r
"Refundacija naknada (Fond zdravstva / Centar za socijalni rad)",\r
"Refundacija naknade zarade (Fond zdravstva / Centar za socijalni rad)",\r
"Refundacije naknada",\r
"Refundira",\r
"Refundirani dio nije trošak firme: u nalogu plata ide na potraživanje 2220, a priliv sa izvoda (vrsta „Refundacija naknada\\") ga zatvara. Procenti i limiti su na kartici „Stope\\" (REF_…); limit CSR je sporan (1 ili 2 prosječne zarade) — potvrđuje knjigovođa. Klik na red mijenja status zahtjeva (čeka → podnijet → naplaćeno).",\r
"Registar",\r
"Registar carinskih deklaracija je isključen: firma nema sopstveni uvoz (nabavka od domaćih dobavljača, PDV sa njihovih računa ide u polje 19). Za firmu koja sama uvozi robu uključuje se „Firma ima sopstveni uvoz (carinske deklaracije)\\" u Podešavanja → Firma.",\r
"Registar carinskih deklaracija je isključen.",\r
"Registar carinskih deklaracija je uključen (Obrasci → Uvoz i ino usluge).",\r
"Registar firme na serveru je izmijenjen ({0}).",\r
"Registar firme na serveru je izmijenjen.",\r
"Registar firme na serveru je usklađen.",\r
"Registar firme nije izmijenjen: {0}",\r
"Registracija ENU za fakture",\r
"Registrovati nov ENU kod Uprave prihoda? Registracija se radi jednom i ne može se jednostavno poništiti.",\r
"Registruj ENU",\r
"Regres (EUR/god.)",\r
"Regres za godišnji odmor — 1/12 (posebni dio zarade)",\r
"Reklama i marketing",\r
"RELEASE stari_zapis",\r
"Renumeracija",\r
"RENUMERACIJA — stari i novi brojevi",\r
"Renumeracija nije uspjela: {0}",\r
"renumeraciju godine",\r
"Renumerisano {0} od {1} kalkulacija. Preskoka poslije: {2} (firma), {3} (objekti). Duplikata: {4}.",\r
"Renumerisati {0} kalkulacija za {1}. godinu?\\n\\nMijenja se {2} brojeva dokumenta i {3} brojeva kalkulacije.\\nPrije renumeracije je obavezna rezervna kopija (Podešavanja → Backup).",\r
"repeat(auto-fit, minmax(135px, 1fr))",\r
"repeat(auto-fit, minmax(240px, 1fr))",\r
"repeat(auto-fit, minmax(min(320px, 100%), 1fr))",\r
"repeat(auto-fit, minmax(min(380px, 100%), 1fr))",\r
"Reprezentacija",\r
"reset PIN-a po nalogu #{0} (PIN {1})",\r
"REV",\r
"Revalorizacione rezerve",\r
"REVALORIZACIONE REZERVE I NEREALIZOVANI DOBICI I GUBICI",\r
"Revers",\r
"Revers — izdato",\r
"Revers — vraćeno",\r
"Revers (PDF)",\r
"Revers {0}",\r
"Revers {0} je numerisan u {1}. godini. Datum mora ostati u toj godini.",\r
"Revers {0} je u zaključanom periodu {1}. Promjena postavke bi izmijenila predatu trgovačku knjigu.",\r
"Revers br. {0} od {1}{2} (roba izdata na revers)",\r
"Revers ima fakturu (prodaja). Otključavanje nije moguće.",\r
"Revers ima povrat. Otključavanje nije moguće.",\r
"Revers iz koga je roba prodata",\r
"Revers je izdat (",\r
"Revers je izdat.",\r
"Revers je izdat. Izmjena je moguća nakon otključavanja.",\r
"Revers je obrisan.",\r
"Revers je otključan.",\r
"Revers je već izdat.",\r
"Revers ne postoji.",\r
"Revers ne razdužuje trgovačku knjigu; razduženje ide računom.",\r
"Revers nema stavki.",\r
"Revers nije izdat.",\r
"Revers nije račun. Roba izdata na revers ostaje imovina firme do povrata; prodaja se dokumentuje računom. Primalac potpisom potvrđuje prijem robe i obavezu vraćanja u roku.",\r
"Revers nijedan propis ne pominje. Tumačenje bliže tekstu ZPDV čl. 4 st. 1 (promet je prenos prava raspolaganja): roba na reversu nije prodata i ostaje imovina firme; razdužuje se tek računom (Pravilnik 34/12 čl. 7 kol. 5), a povrat nema upisa u trgovačkoj knjizi. Lager: izlaz na dan izdavanja, ulaz na dan povrata. Drugo tumačenje: ako primalac robom raspolaže, isporuka je izvršena (PDV najkasnije 8 dana od predaje, ZPDV čl. 18 st. 3). Roba na reversu se popisuje na posebnoj popisnoj listi (Pravilnik o popisu, čl. 2).",\r
"Revers razdužuje trgovačku knjigu pri izdavanju",\r
"Revers se izdaje na dan izdavanja ({0}) ili kasnije.",\r
"Revers: roba kod primaoca ostaje imovina firme do povrata ili prodaje",\r
"Reversi",\r
"REVERSI",\r
"Reversi sa isteklim rokom vraćanja: {0}",\r
"Rezervacija",\r
"Rezervacija je otkazana.",\r
"Rezervacija je ponovo potvrđena. Prijavite dolazak gosta.",\r
"Rezervacija je sačuvana.",\r
"Rezervacija je upisana.",\r
"Rezervacija je zatvorena: gost nije došao.",\r
"Rezervacija nije pronađena.",\r
"Rezervacije",\r
"Rezervaciju je u međuvremenu izmijenio drugi korisnik. Prikaz je osvježen.",\r
"REZERVE",\r
"Rezervisana vrsta",\r
"REZERVISANJA",\r
"REZERVISANJA I OBAVEZE",\r
"Rezervisanja koja se ne priznaju u poreske svrhe",\r
"Rezervisanja za naknade i druge beneficije zaposlenih",\r
"Rezervisanja za troškove obnavljanja prirodnih bogatstava",\r
"Rezervisanja za troškove restrukturiranja",\r
"Rezervisanja za troškove u garantnom roku",\r
"Rezervisanja za zadržane kaucije i depozite",\r
"Rezervisano",\r
"Rezervna kopija",\r
"rezervna kopija baze",\r
"Rezervna kopija baze",\r
"Rezervna kopija baze nije napravljena. Poništavanje nije izvršeno.",\r
"Rezervna kopija baze nije napravljena. Uvoz nije izvršen.",\r
"Rezervna kopija prije poništavanja: {0}",\r
"Rezervna kopija prije uvoza:",\r
"Rezervna kopija prije uvoza: {0}",\r
"rezervna kopija trenutne baze nije napravljena",\r
"Rezervna kopija: {0}.",\r
"Rezervni djelovi",\r
"rezervnu kopiju",\r
"Režije (bez računa u programu; račun se unosi kroz Nabavku)",\r
"Režije (struja, voda, telefon, gorivo)",\r
"Rezim",\r
"Režim",\r
"Režim FZO",\r
"Režim FZO se upisuje samo za lijek sa Liste FZO.",\r
"Režim izdavanja",\r
"Režim izdavanja (otc ili rx) je obavezan za nov zapis lijeka.",\r
"Režim izdavanja je otc ili rx.",\r
"Režim izdavanja nije ispravan (Rx ili OTC).",\r
"Režimi RK, RK* i K se u privatnoj apoteci ne izdaju na teret FZO-a. Za doplatnu listu: dio FZO i dio pacijenta po pakovanju.",\r
"rezultat",\r
"rezultat prije oporezivanja",\r
"Rezultati",\r
"Riba",\r
"Riba smrznuta",\r
"Riba svježa",\r
"RIFF",\r
"Riječi",\r
"Riječi (izrazi odvojeni tačkom-zarezom; početak riječi u nazivu)",\r
"rijeka crnojevica",\r
"riješeno",\r
"Riješeno",\r
"Rječnik jezika nije ispravan.",\r
"Rjesava",\r
"Rješava",\r
"Rješenje",\r
"Rješenje dana prije",\r
"Rješenje o disciplinskoj mjeri",\r
"Rješenje o korišćenju godišnjeg odmora",\r
"Rješenje o mjeri",\r
"Rješenje o odmoru",\r
"Rješenje o odmoru dostavlja se najkasnije {0} dana prije početka ({1}); za početak {2} rok je bio {3}. Kraći rok je moguć samo uz saglasnost zaposlenog.",\r
"Rješenje o otkazu",\r
"Rješenje o otkazu ugovora o radu",\r
"Rješenje o prestanku — istek ugovora na određeno",\r
"Rješenje o prestanku istekom ugovora na određeno — bez notara",\r
"Rješenje o prestanku radnog odnosa (istek roka)",\r
"Rješenje o prestanku radnog odnosa istekom ugovora — potpisuje direktor, ne ovjerava se kod notara",\r
"RK",\r
"RN",\r
"Roba",\r
"ROBA",\r
"Roba {0} — početni popis (prodajna sa PDV)",\r
"Roba {0} — početni popis (veleprodajna bez PDV)",\r
"Roba {0} — početno stanje po artiklima {1} (prodajna sa PDV)",\r
"Roba {0} — početno stanje po artiklima {1} (veleprodajna bez PDV)",\r
"Roba dozvoljena nedjeljom i praznikom",\r
"Roba izdata na probu, korišćenje ili servis · povrat i prodaja · roba na reversu na dan",\r
"Roba izdata na probu, korišćenje ili servis · povrat i prodaja (faktura) · roba na reversu na dan (posebna popisna lista)",\r
"Roba izdata na revers nalazi se kod primaoca i ostaje imovina firme (posebna popisna lista, Pravilnik o popisu čl. 2).",\r
"Roba koja je stigla na fakturama (kalkulacije izabranog objekta), a barkod još nije poznat.",\r
"Roba na putu",\r
"Roba na reversu na dan",\r
"Roba na zalihi (%)",\r
"ROBA PO FAKTURI (zbirno)",\r
"Roba po prodajnoj sa PDV",\r
"Roba po veleprodajnoj cijeni bez PDV",\r
"Roba pred istekom roka",\r
"ROBA PRED ISTEKOM ROKA",\r
"Roba u magacinu",\r
"Roba u maloprodaji (prodajna vrijednost sa PDV)",\r
"Roba u obradi, doradi i manipulaciji",\r
"Roba u prometu na malo",\r
"Roba u prometu na malo — prodajna vrijednost sa PDV",\r
"Roba u prometu na veliko",\r
"Roba u prometu na veliko — veleprodajna vrijednost bez PDV",\r
"Roba u skladištu, stovarištu i prodavnicama kod drugih pravnih lica",\r
"Roba u tranzitu",\r
"Roba u veleprodaji (bez PDV)",\r
"robe",\r
"ROBE",\r
"robna marka",\r
"Robu izdao",\r
"Robu primio",\r
"Roditelj djeteta sa smetnjama",\r
"roditelj djeteta sa smetnjama u razvoju",\r
"Roditelj djeteta sa smetnjama u razvoju: +{0} dana (pravilnik)",\r
"rok",\r
"Rok",\r
"Rok izjašnjenja",\r
"Rok izvještaja",\r
"rok je prošao prije {0}",\r
"Rok koda (sati)",\r
"Rok koda je od 1 do 48 sati.",\r
"rok placanja",\r
"rok plaćanja",\r
"Rok plaćanja",\r
"Rok plaćanja (dana)",\r
"Rok plaćanja je {0} dana. Između privrednih subjekata rok je 30 dana, a ugovorom najviše 60 (Zakon o rokovima izmirenja novčanih obaveza, čl. 4).",\r
"Rok plaćanja je {0} dana. Rok duži od 30 dana mora biti ugovoren (Zakon o rokovima izmirenja novčanih obaveza, čl. 4).",\r
"Rok plaćanja predloži datum valute; rabat se primjenjuje na nove stavke.",\r
"Rok policiji: {0}",\r
"Rok prijave policiji",\r
"Rok prijave policiji (sati)",\r
"Rok prijave turističkoj organizaciji",\r
"Rok prijave turističkoj organizaciji (sati)",\r
"Rok trajanja",\r
"Rok uplate",\r
"Rok uplate (dana)",\r
"Rok uplate 16–kraj",\r
"rok važenja isprave",\r
"Rok vraćanja",\r
"Rok vraćanja je istekao:",\r
"Rok vraćanja je istekao.",\r
"Rok vraćanja je prije datuma izdavanja.",\r
"Rok vraćanja nije ispravan.",\r
"rok za izjašnjenje istekao {0}",\r
"Rok za izjašnjenje zaposlenog ističe {0}. Odluka se donosi poslije roka ili primljenog izjašnjenja (čl. 148).",\r
"Rok zahtjeva",\r
"Rokovi čuvanja:",\r
"Rokovi uplate: {0} (1–15.) i {1} (16–kraj mjeseca). Izvještaj se predaje do {2}.",\r
"ROL",\r
"RONHILL",\r
"Rotacija smjena",\r
"ROTHMANS",\r
"Rožaje",\r
"RS",\r
"RUC",\r
"RUC (razlika u cijeni)",\r
"RUC {0} (početno stanje po artiklima)",\r
"RUC {0} (prosječna marža {1} %)",\r
"RUC / marža",\r
"RUC / marža (EUR)",\r
"RUC / marža EUR",\r
"RUC % od prodajne",\r
"RUC na manjak",\r
"RUC na višak",\r
"RUC nova",\r
"RUC ograničena — {0}",\r
"RUC ograničena na raspoloživu: {0}",\r
"RUC poslije",\r
"RUC sada",\r
"Ručna polja PR-PDV u nalogu PDV",\r
"Ručna pretraga izvještaja (najmanje 3 znaka)",\r
"Ručna stopa",\r
"ručne ispravke po poziciji (unos iznosa i broja napomene)",\r
"ručni",\r
"Ručni izbor artikla (kad barkod nije čitljiv)",\r
"ručni nalog",\r
"Ručni nalog",\r
"Ručni nalog je snimljen: {0}.",\r
"Ručni nalog je za ono za šta nema dokumenta u programu (početno stanje, kapital, kredit, ispravka). Duguje mora biti jednako potražuje.",\r
"Ručni nalog za knjiženje",\r
"Ručni obračun",\r
"Ručni obračun (paušal, objekat bez kase)",\r
"Ručni podaci su obrisani.",\r
"ručni unos",\r
"Ručni unos",\r
"Ručni unos transakcije banke",\r
"Ručni unos ulazne fakture (bez QR koda)",\r
"ručni upis u dokumentu otpisa (jedinica mjere)",\r
"Ručni uvoz PDF izvoda (ili teksta izvoda) koji nije stigao poštom",\r
"rucno",\r
"Rucno",\r
"RUCNO",\r
"ručno",\r
"Ručno dodavanje artikla u grupu",\r
"Ručno izabran dobavljač se pamti",\r
"Ručno obračunato (paušal, bez kase)",\r
"ručno umjesto programa",\r
"Ručno uneseni i zamijenjeni termini se ne mijenjaju; samo se dopunjavaju do potrebnog broja radnika. Radnik bez matičnog objekta je zamjena: raspoređuje se tamo gdje matični radnik ima slobodan dan, prije nego što se pozajmi radnik iz drugog objekta. Stalna smjena i stalni slobodan dan radnika se zadaju na kartici radnika (Plate → Radnici). Zakon o radu: puno radno vrijeme 40 h sedmično, sa prekovremenim najviše 48 h; odmor u sedmici najmanje 24 h neprekidno.",\r
"Ručno uneseno",\r
"ručno upisana stopa",\r
"ručno upisano",\r
"ručno upisano (predati iskaz)",\r
"Ručno upisano početno stanje (",\r
"RUCNO:{0}:{1}:{2}",\r
"Rukovodi radom svih maloprodajnih objekata (marketa i kioska) i odgovara za njihove rezultate.",\r
"Rupe u numeraciji znače da neki izvod nije stigao ili nije uvezen. Hipotekarna šalje izvod samo za dane sa prometom (bez brojeva), pa se tu gleda samo period.",\r
"Ruski",\r
"RV-{0}-{1}",\r
"Rx",\r
"Rx — na recept",\r
"RZ",\r
"s",\r
"s. Dok posao traje, unos podataka nije moguć. Program ne treba zatvarati.",\r
"s. Program ne treba zatvarati dok posao traje.",\r
"s.Duguje",\r
"s.Duguje-s.Potrazuje",\r
"s.Konto",\r
"s.Konto LIKE ?",\r
"s.MarketID IS NULL",\r
"s.Potrazuje",\r
"s.Potrazuje-s.Duguje",\r
"SA",\r
"Sa cijenom ili prometom na ovom mjestu",\r
"sa drugim uređajima. Razmjena se uključuje povezivanjem sa serverom IRIS CORVINA (iznad).",\r
"sa greškom",\r
"sa izvoda",\r
"sa kalkulacije",\r
"sa opštom cijenom,",\r
"sa osnovom (",\r
"Sa ovog izvoda je proknjiženo {0}.",\r
"Sa ovog računara uvoz baze artikala, poništavanje uvoza i povezivanje prodajnih mjesta šalju se glavnom računaru firme, koji ih izvršava pri sljedećoj razmjeni; rezultat stiže ovdje sa njegovim snimkom. Uvoz šifarnika iz Excela radi se na glavnom računaru.",\r
"sa PDV",\r
"Sa PDV",\r
"Sa PDV {0} %",\r
"sa podacima firme do ovog trenutka. Prenosi se na uređaj menadžera (USB, Google Drive, mail) i u Menadžeru se učitava:",\r
"Sa posljednjih faktura",\r
"Sa računara",\r
"Sa računara „{0}\\"",\r
"sa računara „{0}\\"{1}",\r
"Sa razlikom",\r
"sa razlozima i dokazima i rok za odgovor zaposlenog od najmanje",\r
"Sa servera je stiglo: {0}, poslato: {1}.",\r
"sa skena: „",\r
"Sa stavkama:",\r
"Sa uređaja",\r
"sablon",\r
"Šablon je snimljen: {0}",\r
"Šablon nije snimljen: {0}",\r
"Sačekaj",\r
"Sačuvaj",\r
"Sačuvaj artikle",\r
"Sačuvaj domen",\r
"Sačuvaj fajl baze za Menadžer",\r
"Sačuvaj gosta",\r
"Sačuvaj i provjeri",\r
"Sačuvaj izmjene",\r
"Sačuvaj pravila",\r
"Sačuvana grupa {0}.",\r
"Sačuvano: {0}.",\r
"Sačuvano.",\r
"Sada",\r
"sadašnja",\r
"Sadašnja",\r
"Sadašnja cijena",\r
"Sadašnja opšta cijena:",\r
"Sadašnja stopa",\r
"Sadašnja vr.",\r
"Sadašnji kod",\r
"sadržaj",\r
"Sadržaj je isti. Odluka samo izjednačava oznaku stanja.",\r
"sadržaj je oštećen u prenosu",\r
"Sadržaj je u međuvremenu izmijenjen u drugom programu. Učitano je novo stanje; izmjena nije sačuvana.",\r
"sadržaj nije promijenjen",\r
"Saglasan sa obavještenjima i ponudama",\r
"Saglasnost data {0}{1}.",\r
"Saglasnost od",\r
"Saglasnost povučena {0}.",\r
"Sajt",\r
"Sakrij",\r
"Sakrij cijelu grupu sa menija",\r
"Sakrij efektivnu maržu",\r
"Sakrij ostala obavještenja ▴",\r
"Sakrij razliku",\r
"Sakrij ručni unos",\r
"Sakrij spisak",\r
"sakriven",\r
"sakrivena",\r
"sakriveno",\r
"saldo",\r
"Saldo",\r
"SALDO (dug)",\r
"Saldo (njihov / naš)",\r
"Saldo (stanje robe)",\r
"Saldo {0} EUR",\r
"saldo {0} EUR{1}",\r
"SALDO = nabavna vrijednost",\r
"Saldo = početno stanje + fakture − plaćanja · klik na red za karticu dobavljača",\r
"SALDO DOBAVLJAČA",\r
"Saldo duguje",\r
"saldo grupe ispod 1.000 EUR → cio saldo na rashod (čl. 9)",\r
"Saldo knjige je u minusu od",\r
"Saldo kupca ({0}) i stavke IOS-a ({1}) se razlikuju. Prije slanja IOS-a potrebna je provjera uplata i faktura (avans, ručna stavka).",\r
"Saldo po kartici",\r
"Saldo potražuje",\r
"Saldo računa sobe je {0} EUR. Odjaviti gosta uz neizmiren saldo?",\r
"Saldo računa sobe nije izmiren: {0} EUR.",\r
"Saldo se poklapa: {0} EUR.",\r
"Saldo svakog objekta je početno stanje za {0}. godinu kad popis od 31.12.{1}. ne postoji.",\r
"saldo, kartica, plaćanja",\r
"Šalje {0}…",\r
"šalje samo zaključke",\r
"šalje se kasama",\r
"Šalje se kasama",\r
"Šalji tehničke greške izdavaču",\r
"šalterski ispis izvoda br. {0}{1}",\r
"šalterski ispis: {0} izvoda ({1} – {2}){3}",\r
"sam",\r
"samo {0} radn{1} (polazna lista ima {2})",\r
"samo analitika",\r
"Samo artikal (šifra)",\r
"samo artikli bez cijene",\r
"samo artikli upisani kao lijek",\r
"samo bez engleskog",\r
"samo bez pravila",\r
"samo cigare",\r
"Samo cigare (nepromijenjene): {0}.",\r
"samo cijena iznad najviše MP",\r
"Samo jedan računar može biti glavni",\r
"samo jedan uređaj",\r
"Samo kad je ugovorom o radu radniku ugovoreno više dana odmora (npr. posebni uslovi rada). Nagrada za jednu godinu ide gore, kao stimulacija.",\r
"Samo korektivni:",\r
"Samo na Windowsu.",\r
"samo neobrađeno",\r
"Samo nosioci koji su dali saglasnost i nisu je povukli. Svaki izvoz se upisuje u dnevnik pristupa.",\r
"samo ona koja čekaju obavještenje kupca",\r
"samo označeni za kase",\r
"samo partnerski objekti",\r
"Samo podaci za druge programe: UTF-8, separator „;“, decimalni zarez, datum dd.mm.gggg, bez zbirnog reda.",\r
"samo potvrđene sedmice",\r
"Samo povećanja stope",\r
"samo promijenjene (",\r
"Samo računar u režimu obrade.",\r
"Samo sa faktura",\r
"samo sa ostatkom",\r
"samo sa razlikom",\r
"Samo sobe za čišćenje",\r
"samo upiši da je uručeno danas",\r
"Samo za radna mjesta koja dolaze do važnih poslovnih informacija ili širokog kruga partnera (čl. 161 st. 2) — npr. menadžer, nabavka",\r
"samohrani",\r
"Samohrani roditelj (dijete do 15)",\r
"samohrani roditelj djeteta do 15 god.",\r
"Samohrani roditelj djeteta do 15 godina: +{0} dana (pravilnik)",\r
"Samouslužni portal nema unos za ENU; uređaj se registruje porukom prema fiskalnom servisu iz ovog programa. Registracija se radi",\r
"Sanduče",\r
"Sanitarna knjižica.",\r
"Sat",\r
"SAT",\r
"Sat „do\\" nije ispravan (oblik HH:MM).",\r
"Sat „od\\" i sat „do\\" ne mogu biti isti (period preko ponoći se upisuje npr. 22:00–02:00).",\r
"Sat „od\\" nije ispravan (oblik HH:MM).",\r
"Sati",\r
"sati × satnica",\r
"Sati daju više od dogovorenog neta kod: {0}{1}.",\r
"sati ispod su izvedeni iz ovih dana",\r
"Sati sedmično",\r
"Sati upisani.",\r
"Sati za plate —",\r
"SAVEPOINT stari_zapis",\r
"Šavnik",\r
"Savo Radonjić",\r
"Sažetak (digest) se ne slaže sa sadržajem poruke.",\r
"Sažetak izjašnjenja (ako ga je dao)",\r
"se čita OCR-om jer mu je font nečitljiv, a NLB „pregled transakcija\\" nema primaoca, pa se dobavljač određuje samo po iznosu fakture), ili se lijepi tekst izvoda. Program iz opisa prepoznaje dobavljača: po PIB-u, po žiro računu i nazivu koji su ranije potvrđeni, pa po riječima naziva.",\r
"se razlikuje od stanja na 31.12.",\r
"Šećer",\r
"Šećer (kristal, u prahu, u kocki)",\r
"Sedmica",\r
"Sedmica {0} – {1} je potvrđena za {2} objekata.",\r
"Sedmica {0} – {1} je potvrđena: {2} termina, {3} h. Raspored je zaključan i ulazi u obračun plata po smjenama.",\r
"Sedmica {0} – {1}{2}{3}",\r
"Sedmica {0} potvrđena: {1} termina, {2} h.",\r
"Sedmica {0}.{1}. – {2}.{3}. je potvrđena. Izmjena rasporeda je moguća poslije poništavanja potvrde.",\r
"Sedmica je",\r
"sedmica je ovdje potvrđena",\r
"Sedmica je potvrđena",\r
"Sedmica je potvrđena i zaključana. Izmjena je moguća poslije poništavanja potvrde na kartici „Mjesec po objektu\\".",\r
"Sedmica kao na papiru: klik na smjenu → klik na ime · brzi unos radnik × dan · nedjelje · radno vrijeme svakog objekta · sati idu u plate",\r
"Sedmica ovog objekta je potvrđena. Izmjena je moguća poslije poništavanja potvrde.",\r
"Sedmica potvrđena — klik za poništavanje",\r
"Sedmica za {0} je potvrđena.",\r
"Sedmična (mijenja smjenu svake sedmice)",\r
"sekundarno",\r
"select",\r
"Šema",\r
"Šema „{0}\\" → {1}",\r
"Šema „{0}\\" → {1}.",\r
"Šema knjiženja",\r
"Šema knjiženja nema konto za „{0}\\" (Finansije → Kontni plan → Šeme).",\r
"Šema minulog rada je upisana od {0}. Otvoreni obračuni se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Šema minulog rada nije izabrana.",\r
"ŠEME KNJIŽENJA",\r
"Šeme knjiženja — koje konto program koristi za koju ulogu",\r
"Senf",\r
"sep.tax.gov.me/self-care",\r
"septembar",\r
"Septembar",\r
"septembra",\r
"Serija",\r
"Serija {0} artikla {1} je upisana kao povučena. Zabrana stiže na kase sa sljedećim cjenovnikom.",\r
"Serija je uklonjena sa spiska.",\r
"Serija nije upisana.",\r
"Sertifikat",\r
"Sertifikat je ispravan. Potpisnik: {0} (važi do {1}).",\r
"Sertifikat je istekao. Potreban je novi sertifikat.",\r
"Sertifikat je izabran: {0}",\r
"Sertifikat je opozvan.",\r
"Sertifikat lokalnog servera je istekao (provjeriti datum na računaru).",\r
"Sertifikat lokalnog servera još ne važi (provjeriti datum na računaru).",\r
"Sertifikat na ovom računaru pripada drugoj firmi (PIB {0}) — izaberi sertifikat ove firme (Podešavanja → Fiskalizacija).",\r
"Sertifikat na ovom računaru pripada drugoj firmi (PIB {0}). Potrebno je izabrati sertifikat ove firme.",\r
"Sertifikat na ovom računaru pripada drugoj firmi (PIB {0}). Za više firmi sa sopstvenim sertifikatima na istom računaru potrebna je nova instalacija programa (Setup 1.0.90 ili noviji); do tada se fiskalizuje sa računara na kom je sertifikat ove firme.",\r
"Sertifikat ne potpisuje ispravno (samoprovjera nije prošla).",\r
"Sertifikat nije izabran.",\r
"Sertifikat nije izdao registrovani izdavalac (CA). Potreban je sertifikat za fiskalizaciju (CoreIT ili Pošta CG).",\r
"Sertifikat nije nađen: {0}",\r
"Sertifikat nije važeći.",\r
"Sertifikat se ne može pročitati: {0}",\r
"Sertifikat servera ne odgovara otisku CA lokalnog servera — veza je prekinuta i ništa nije poslato. Otisak treba uporediti sa ekranom Pregled programa IRIS Server (ili sa listom kodova iz IRIS Admina).",\r
"Sertifikat servera ne potpisuje zapamćeni CA lokalnog servera.",\r
"Sertifikat servera nije čitljiv.",\r
"Sertifikat servera nije potpisan zapamćenim CA lokalnog servera.",\r
"Sertifikat za fiskalizaciju nije izabran (Podešavanja → Fiskalizacija).",\r
"Sertifikat za fiskalizaciju nije izabran.",\r
"Sertifikat za potpisivanje računa",\r
"server",\r
"Server",\r
"server IRIS CORVINA",\r
"Server IRIS CORVINA se ne poziva preko lokalne veze.",\r
"Server je odbio opoziv: {0}",\r
"Server je odbio ovaj uređaj (isključen ili nevažeći token). Sljedeći pokušaj je za 15 minuta. Uređaj je potrebno ponovo upariti: „Isključi vezu\\", zatim nov kod od administratora.",\r
"Server je odbio pošiljaoca ili primaoca.",\r
"Server je odbio prijavu (korisničko ime ili lozinka).",\r
"Server je odgovorio greškom {0}.",\r
"Server je vratio neočekivan odgovor.",\r
"Server ne daje podatke firme (starija verzija servera). Podaci firme se upisuju ručno (Podešavanja → Firma).",\r
"Server ne odgovara (isteklo vrijeme).",\r
"Server ne podržava poništavanje koda za uparivanje (potrebna je novija verzija servera 0.5.2). Neiskorišćen kod važi do isteka roka.",\r
"Server ne podržava povezivanje Menadžera iz Knjigovodstva (potreban je server 0.5.3). Menadžer se povezuje fajlom baze.",\r
"Server ne podržava upravljanje kasama iz Knjigovodstva (potreban server 0.5.2). Kase se vode lokalno.",\r
"Server nije dao naziv firme.",\r
"Server nije dostupan za kase: kasa se upisuje lokalno, bez koda za uparivanje.",\r
"Server nije dostupan: {0} Promjene čekaju i šalju se kad se veza uspostavi.",\r
"Server nije dostupan. Ishodi naloga čekaju slanje.",\r
"Server nije dostupan. Kase se vode lokalno.",\r
"Server nije dostupan. Menadžer se povezuje fajlom baze ili kasnije, kodom.",\r
"Server nije dostupan. Opcija nije uključena.",\r
"Server nije poslao CA sertifikat — to nije lokalni IRIS server.",\r
"Server nije poslao sertifikat.",\r
"Server nije potvrdio saglasnost. Opcija nije uključena.",\r
"Server nije primio (vidi grešku)",\r
"Server nije vratio kod za uparivanje.",\r
"Server nije vratio podatke firme.",\r
"Server odbio",\r
"Server odbio izmjenu: {0}",\r
"Server preko koga se fakture, ponude, otpremnice i odgovori na IOS šalju iz programa. Podaci servera važe za firmu (prenose se na druge računare); lozinka naloga se upisuje na svakom računaru posebno i čuva šifrovana, van baze.",\r
"Server sporo odgovara. Razmjena sa serverom se nastavlja u pozadini.",\r
"Server traži prijavu, a korisničko ime ili lozinka nijesu upisani.",\r
"Server, uređaji i razmjena podataka",\r
"Server: razmjena još traje i nastavlja se u pozadini.",\r
"Server: stiglo {0}{1}.",\r
"ServerVeza:{0}",\r
"SERVICE",\r
"Servis je odgovorio HTTP {0}, bez objašnjenja.",\r
"SET",\r
"Sezonska pauza od {0} do {1} Program radi samo za čitanje i izvoz podataka.",\r
"Sezonski radnik sa prijavljenim boravkom",\r
"SHA-256",\r
"SHA-256 otisci fajlova:",\r
"šifarnik artikala",\r
"Šifarnik artikala u Excelu i baza artikala",\r
"Šifarnik artikala, barkodovi i marže",\r
"Šifarnik grupa: grupa i njena nadgrupa (prazno = grupa bez nadgrupe).",\r
"Šifarnik je izvezen: {0}",\r
"Šifarnik je prazan.",\r
"Šifarnik ljekova",\r
"Šifarnik ljekova je prazan. Artikal kase se pronalazi pretragom i upisuje kao lijek.",\r
"Šifarnik ljekova za kase (Rx/OTC, INN, ATC, Lista FZO) · maksimalne cijene CInMED · povučene serije · faktura FZO iz recepata sa kasa",\r
"Šifarnik se puni sam pri uvozu faktura · prikaz do 800 rezultata",\r
"Sifarnik210",\r
"Sifra",\r
"SIFRA",\r
"šifra",\r
"Šifra",\r
"Šifra „{0}\\" nije ispravna (cijeli broj od 100001 naviše).",\r
"šifra {0}",\r
"Šifra {0} se ponavlja u fajlu.",\r
"Šifra {0} već postoji u šifarniku.",\r
"Šifra {0}: kasa ({1}) je dodala „{2}\\" ({3} %, {4}), a u cjenovniku je to „{5}\\" ({6} %). Artikli nisu spojeni; artiklu kase potrebno je dati drugu šifru.",\r
"Šifra {0}: kasa ({1}) je dodala nov artikal „{2}\\", a u cjenovniku je pod tom šifrom drugi artikal. Artikli nisu spojeni; artiklu kase potrebno je dati drugu šifru.",\r
"Šifra {0}{1}{2}",\r
"Šifra / barkod",\r
"Šifra / barkod (npr. 3*7613…)",\r
"Šifra artikla kase nije upisana.",\r
"Šifra artikla nije upisana.",\r
"Šifra djelatnosti",\r
"Šifra djelatnosti: {0}",\r
"Šifra je bez razmaka.",\r
"Šifra kase",\r
"Šifra kase {0} je već povezana sa artiklom šifarnika (ID {1}).",\r
"Šifra ne postoji. Farmaceutski podaci se upisuju postojećem artiklu.",\r
"Šifra ne postoji. Za nov artikal polje Šifra ostaje prazno.",\r
"Šifra osnova",\r
"Šifra osnova nije izabrana.",\r
"Šifra osnova pod kojom se ova vrsta primanja prijavljuje u IOPPD (1 = zarada; 7 = bolovanje preko 60 dana / trudničko)",\r
"Sifra;Barkod;Naziv;JM;Kolicina;Nabavna;MPC;PDV",\r
"Šifrovanje lozinke nije dostupno na ovom računaru. Lozinka nije snimljena.",\r
"Sinhronizacija:",\r
"Sintetički račun {0} ne postoji u kontnom okviru.",\r
"Sintetički račun iz okvira se ne može ugasiti.",\r
"sintetika",\r
"Sintetika",\r
"Sirće alkoholno, vinsko i voćno",\r
"Široka slika: zaglavlje faktura, ponuda, kalkulacija i izvještaja. Najbolje izgleda slika šira nego viša (npr. 600 × 300).",\r
"siroko",\r
"SIS",\r
"Sistem",\r
"Sistematizacija",\r
"Sistematizacija · ugovori i rješenja · godišnji odmori · radna disciplina — po",\r
"Sistematizacija je potpuna: {0} radnih mjesta sa opisom i uslovima, {1} radnika raspoređeno.",\r
"Sistematizacija je prazna. Pravilnik se pravi poslije „Popuni polaznu sistematizaciju\\" ili ručnog dodavanja radnih mjesta.",\r
"Sistematizacija nije potpuna:\\n• {0}\\n\\nPopuniti polaznu sistematizaciju (dodavanje radnih mjesta koja nedostaju, dopuna opisa, spajanje duplikata, usklađivanje broja izvršilaca) i zatim napraviti pravilnik?",\r
"SISTEMATIZACIJA RADNIH MJESTA",\r
"Sken {0}",\r
"Sken {0}: {1}",\r
"Sken dnevnih izvještaja",\r
"sken ili pretraga",\r
"sken ili ručni unos",\r
"Sken iz Menadžera",\r
"Sken iz Menadžera ({0}): QR kod nije ispravan (nedostaju parametri iic/tin/crtd).",\r
"Sken nije spremljen: {0}",\r
"sken pazara",\r
"Sken računa {0}{1} — {2}{3}",\r
"Sken sa terena",\r
"sken se provjeri kod Poreske uprave i pošalje; broj se ne dodjeljuje ovdje",\r
"skena pazara",\r
"Skenirani računi",\r
"Skenirani računi koji još nisu uneseni ({0}).\\n\\nAko se program zatvori, ti računi neće biti uneseni i moraju se skenirati ponovo. Zatvoriti program?",\r
"Skenirani računi nisu uneseni",\r
"Skeniranje faktura",\r
"skeniranje odmah pravi kalkulaciju; obrađuje i skenove sa telefona",\r
"Skeniranje QR koda fiskalnog računa. Kalkulacija se pravi automatski preko servisa Poreske uprave (MAPR).",\r
"Skeniranje QR koda fiskalnog računa. Račun se provjerava kod Poreske uprave i sprema; kalkulaciju i broj dokumenta pravi računar u kancelariji.",\r
"Skeniranje QR koda sa fiskalnog računa",\r
"skeniranje QR koda sa računa",\r
"Skenirano",\r
"Skenirao",\r
"skenirati ili upisati",\r
"skenirati ili upisati, pa Enter",\r
"skenova {0}",\r
"skenova pazara",\r
"Skenovi iz Menadžera bez marže (i bez istorije dobavljača) dobijaju maržu {0} %.",\r
"Skenovi sa terena",\r
"Skladišti robu po vrsti i roku, vodi magacinsku evidenciju i kartice artikala.",\r
"skloni",\r
"Skrati boravak",\r
"Skrati za noć",\r
"SL",\r
"Sladoled, krem",\r
"Slanina svježa, loj, svinjsko salo, mast (topljena)",\r
"Slanje {0} kalkulacija na štampač{1}…",\r
"Slanje direktno na štampač, bez dijaloga za svaku kalkulaciju.",\r
"Slanje dnevnika nije podržano u ovoj verziji programa.",\r
"Slanje e-poštom — {0}",\r
"slanje grešaka isključeno",\r
"slanje grešaka uključeno",\r
"Slanje mailom nije podržano na ovoj platformi.",\r
"Slanje na server čeka vezu.",\r
"Slanje na server se nastavlja u pozadini.",\r
"Slanje naloga glavnom računaru",\r
"Slanje preko SMTP servera nije dostupno na ovom uređaju.",\r
"Slanje preko SMTP servera traži novu instalaciju programa. Do tada se dokument šalje kao nacrt poruke u programu za poštu.",\r
"Slanje preko SMTP servera traži novu instalaciju programa. Do tada se otvara nacrt poruke sa prilogom u programu za poštu.",\r
"Slanje probne strane…",\r
"Slanje slike nije podržano u ovom programu.",\r
"Slanje slike…",\r
"Slanje tehničkih grešaka izdavaču je uključeno.",\r
"Slanje tehničkih grešaka je isključeno. Greške koje su čekale slanje su obrisane.",\r
"Slanje u zajednički katalog barkodova je isključeno.",\r
"Slanje u zajednički katalog barkodova je uključeno.",\r
"Slanje…",\r
"Slati barkodove i nazive u zajednički katalog",\r
"Slaže i dopunjava robu na policama i u rashladnim uređajima po pravilu „prvi rok — prvi na polici\\".",\r
"Slaže se",\r
"slika",\r
"Slika je manja od {0} × {1} piksela.",\r
"Slika je oštećena u prenosu.",\r
"Slika je poslata. Izmjena još nije sačuvana.",\r
"Slika je prazna.",\r
"Slika je prevelika i ne može se dovoljno smanjiti.",\r
"Slika je veća od {0} KB.",\r
"Slika mora biti u formatu PNG, JPEG ili WebP.",\r
"Slika nije dostupna",\r
"Slika nije pronađena.",\r
"Slika sa servera nije PNG, JPEG ni WebP.",\r
"Slika se ne može obraditi na ovom uređaju.",\r
"Slika se ne može pročitati.",\r
"Slika se uklanja i sa servera (Kasa, Menadžer i ostali računari firme).",\r
"Slika u prilogu mora biti data-URL PNG ili JPEG (base64).",\r
"Slikaj presjek stanja",\r
"Slikan presjek stanja",\r
"Sliku nije moguće pročitati.",\r
"Sljedeća sedmica",\r
"Sljedeći period",\r
"sljedeći: Z {0} od {1}",\r
"Slobod.",\r
"slobodan",\r
"Slobodan avans",\r
"Slobodan avans {0} EUR je uračunat u uplate.",\r
"Slobodan dan",\r
"Slobodan iznos uplate je {0} EUR.",\r
"Slobodan račun",\r
"Slobodna",\r
"SLOBODNA GRUPA",\r
"Slobodna, čista",\r
"Slobodni dani",\r
"slobodnih soba",\r
"Slobodnih soba ove vrste u periodu: {0}.",\r
"Slobodno",\r
"slučajno izvršenje",\r
"small",\r
"smanjenje",\r
"Smanjenje (EUR)",\r
"Smanjenje obaveze (plaćanje, odobrenje)",\r
"Smanjenje vrijednosti zaliha nedovršenih i gotovih proizvoda i nedovršenih usluga",\r
"Smanjivanje baze…",\r
"smj",\r
"smjena",\r
"Smjena",\r
"Smjena {0}",\r
"Smjena {0}: radno vrijeme {1}–{2} nema trajanje.",\r
"Smjena {0}{1}",\r
"Smjena #{0} kase {1} je otvorena {2}, a zatvorena {3}. Cio promet je u mjesecu zatvaranja (PDV prijava); potrebna je provjera sa knjigovođom.",\r
"Smjena #{0} kase {1} je radila preko ponoći ({2} → {3}). Promet je na dan zatvaranja.",\r
"Smjena #{0} kase {1} je radila preko ponoći. Pazar je podijeljen po danima računa ({2}).",\r
"Smjena #{0} kase {1} od {2} je u zaključanom mjesecu. Pazar nije upisan.",\r
"Smjena bez izabranog objekta važi za sve objekte koji nemaju svoje radno vrijeme. „Treba radnika\\" je broj radnika potreban u toj smjeni; po njemu se utvrđuje nedostatak radnika.",\r
"Smjena duža od 12 h nije dozvoljena Zakonom o radu.",\r
"Smjena iz nove kase (pazari)",\r
"Smjena je obrisana.",\r
"Smjena je snimljena.",\r
"Smjena je već korišćena u rasporedu ({0} zapisa). Brisanje nije moguće; smjena se može isključiti (Aktivna = ne).",\r
"Smjena kase",\r
"Smjena mora imati naziv.",\r
"Smjena od",\r
"smjena recepcije. Smještaj i avansni računi su u pazarima smjena",\r
"Smjene",\r
"Smjene (od juče)",\r
"Smjene i kadrovi",\r
"Smjene radnika",\r
"Smjene razmijenjene.",\r
"Smjene recepcije",\r
"Smjene recepcije — {0}",\r
"Smjene su radno vrijeme matičnog objekta radnika (može se prepraviti). Noćni sati = dio smjene između 22:00 i 06:00. Rad u dva radna vremena: „još jedna smjena\\" i podjela dana. Upis zamjenjuje stavke rada ispod; plaćena odsustva ostaju. Kad se smjene vode u programu, umjesto ovoga se koristi „🕘 Sati iz smjena\\".",\r
"Smjene svakog objekta se upisuju prema stvarnom radnom vremenu (npr. I 08:00–16:30, II 16:30–01:00). Kraj jedne smjene je početak sljedeće. Objekat koji sezonski ne radi isključuje se poljem „radi\\" i ne prikazuje se u tabeli sedmice. Noćni sati (22–06) se u platama automatski plaćaju +40 %.",\r
"Smjer",\r
"Smještaj",\r
"Smještaj i avansni računi su u pazarima smjena (Unos pazara, PR-PDV). Boravišna taksa je odvojena iz prometa.",\r
"Smještaj plaća",\r
"Smještaj sa PDV-om",\r
"smještaj sa PDV-om (osnovica {0}, PDV {1})",\r
"smrznuto",\r
"SMTP",\r
"SMTP server",\r
"SMTP server firme",\r
"SMTP server ne odgovara (isteklo vrijeme).",\r
"SMTP server nije podešen (Podešavanja → E-pošta): otvara se nacrt poruke sa prilogom u programu za poštu.",\r
"SMTP server nije podešen (Podešavanja → E-pošta).",\r
"SMTP server odbija vezu (adresa ili port).",\r
"Snimak baze je objavljen ({0} MB).",\r
"Snimak baze je oštećen ili nepotpun ({0}). Baza nije zamijenjena. Ponovni pokušaj je moguć kad se fajl preuzme do kraja.",\r
"Snimak baze nije objavljen: {0}",\r
"Snimak baze nije pronađen u folderu. Potrebno je na računaru pokrenuti „Objavi bazu za telefone\\".",\r
"snimak ekrana",\r
"Snimak glavnog („{0}\\", {1}) je stariji od već preuzetog: objava br. {2}, a ovdje je preuzeta br. {3}. Glavni računar je vjerovatno vraćen iz starije kopije. Snimak se ne preuzima automatski; potrebno je provjeriti glavni računar (ručno preuzimanje pravi kopiju ove baze prije zamjene).",\r
"Snimak glavnog (objavljen {0}) je već preuzet.",\r
"Snimak glavnog preuzet",\r
"Snimak glavnog računara nije objavljen.",\r
"Snimak glavnog računara se još preuzima sa Google Drive-a (fajl od oko 20 MB nije u kešu). Preuzimanje se ponavlja u sljedećem krugu. Brže preuzimanje: u Google Drive-u za folder uključiti „Dostupno van mreže\\".",\r
"Snimak glavnog se još prenosi (baza {0}, opis {1}). Preuzimanje se ponavlja u sljedećem krugu.",\r
"Snimak je objavila starija verzija programa (prije 1.0.71). Snimak ne sadrži plaćanja i izvode banke unesene na ovom računaru, pa bi ih preuzimanje obrisalo. Potrebno je ažurirati glavni računar (Povezivanje → Ažuriranje) i objaviti nov snimak.",\r
"Snimak ove firme u folderu je objavljen {0} verzijom {1}, starijom od {2} (ili glavni računar dugo nije objavio snimak). Snimak se ne preuzima dok glavni ne objavi nov snimak, jer bi se izgubile izmjene plata, smjena i radnika napravljene ovdje. Dokumenti i dalje stižu normalno.",\r
"snimak za razmjenu, ne firma (klik briše stavku)",\r
"snimanje baze",\r
"Snimanje baze",\r
"Snimi",\r
"Snimi avansni račun",\r
"Snimi internu napomenu",\r
"Snimi kodove",\r
"Snimi kontakt",\r
"Snimi lozinku i provjeri",\r
"SNIMI napomenu",\r
"Snimi odobrenje",\r
"Snimi početno stanje",\r
"Snimiti odluku o razvrstavanju za {0}. godinu ({1} pravno lice, podaci na 31.12.{2}.)?{3}",\r
"snimljeno",\r
"Snimljeno {0} kalkulacija: {1}",\r
"Snimljeno {0} pazara.{1}{2}",\r
"Snimljeno {0}, porez {1} EUR",\r
"Snimljeno bez provjere (nema mreže). Provjera se radi na računaru.",\r
"Snimljeno: {0} — {1} EUR. Čeka obradu na računaru.{2}",\r
"Snimljeno: {0}.",\r
"Snimljeno. Ulazni PDV {0} EUR ulazi u PR-PDV polje 19{1}.",\r
"snižava stopu",\r
"snižena 15 %",\r
"snižena 7 %",\r
"Sniženja",\r
"Sniženje {0} ({1}): {2} → {3} do {4}",\r
"Snizeno",\r
"Sniženo",\r
"So za jelo (morska, kamena i vakumirana)",\r
"Soba",\r
"soba {0}",\r
"Soba {0}",\r
"Soba {0} — {1}",\r
"Soba {0} — {1}{2}",\r
"Soba {0} — zauzeta u tom periodu",\r
"Soba {0}: {1}.",\r
"Soba {0}{1}",\r
"Soba je zauzeta u tom periodu: {0}",\r
"Soba je zauzeta: {0}",\r
"Soba nije označena kao čista.",\r
"Soba sa oznakom {0} već postoji.",\r
"soba za čišćenje",\r
"Sobe",\r
"Sobe za čišćenje",\r
"Sobe: {0} ukupno, {1} zauzeto, {2} slobodno, {3} za čišćenje, {4} van upotrebe.",\r
"SOBRANIE",\r
"Soft sertifikat za",\r
"Softver i licence",\r
"Soja",\r
"Solidarna pomoć — smrt zaposlenog ili člana porodice (do 2.000 EUR)",\r
"Solidarna pomoć — teška bolest / invalidnost (do 1.000 EUR)",\r
"Sopstveni domen firme: {0}",\r
"Sopstveni domen: nije upisan.",\r
"spajanje duplih artikala",\r
"span",\r
"SPECIFIKACIJA DOBAVLJAČA",\r
"Specifikacija dobavljača (iz knjige ulaznih računa)",\r
"Specifikacija dobavljača (iz ulaznih računa)",\r
"Specifikacija recepata uz fakturu FZO",\r
"špediter",\r
"Špediter / prevoznik",\r
"Spisak",\r
"Spisak licenci nije moguće učitati: {0}",\r
"Spisak licenci nije uključen u ovu gradnju programa.",\r
"Spisak mjesta. Naziv u prvoj koloni je isti kao zaglavlje kolone cijena na listu „Artikli\\". Kolona „Objekat u programu\\" određuje kom objektu mjesto pripada.",\r
"Spisak staro → novo je snimljen: {0}",\r
"Spojeno {0} grupa: obrisano {1} duplih artikala, prebačeno {2} stavki.",\r
"Spojiti {0} grupa duplih artikala?\\n\\nPreporučuje se prethodna rezervna kopija (Podešavanja → Backup).",\r
"Sporazum o prestanku radnog odnosa",\r
"Sporazum potpisuju obje strane. Dokument sadrži zakonsko obavještenje o posljedicama za prava za slučaj nezaposlenosti (",\r
"Sporazum proizvodi pravno dejstvo od dana ovjere kod notara, suda ili organa lokalne uprave (čl. 165 st. 5 Zakona o radu).",\r
"Sporazumni prestanak…",\r
"sporedni",\r
"Sporedni — unos i pregled, prati glavni računar",\r
"SPOREDNI računar (unos — prati bazu glavnog)",\r
"Sporne stavke dobavljača:",\r
"spornih stavki (",\r
"Spornih stavki:",\r
"Sporno",\r
"Sprat",\r
"Sprat {0}",\r
"Sprema",\r
"spremno",\r
"SQLite format 3",\r
"SQLite format 3\\u0000",\r
"sr-Latn",\r
"srazmjerno 1/12 za {0} započet{1} rada u {2}. ({3})",\r
"srednje",\r
"Sredstva poslovanja koje je obustavljeno",\r
"Sredstva za čišćenje",\r
"Sredstva za zaštitu bilja",\r
"SREDSTVO",\r
"sri",\r
"Sri",\r
"srijeda",\r
"Srijeda",\r
"Srpski (ćirilica)",\r
"SS:MM",\r
"SSL/TLS (465)",\r
"SSS — ekonomski smjer (IV) ili VŠS (VI)",\r
"SSS — srednja stručna sprema (IV)",\r
"SSS — srednja stručna sprema (IV) ili KV (III)",\r
"SSS ili KV (III)",\r
"St.",\r
"st. 2)",\r
"Šta",\r
"Šta biva sa uplaćenim avansom kad gost otkaže.",\r
"Šta će se promijeniti —",\r
"Šta dospijeva",\r
"šta dospijeva, pošta",\r
"Šta i kad treba platiti · otvorene stavke · unos plaćanja iz bankovnog izvoda",\r
"Šta je upisano kao PIB: crnogorski PIB (TIN), strani PDV broj (VAT), lična karta (ID) ili pasoš (PASS)",\r
"Šta ne valja",\r
"Šta radi IRIS Menadžer: narudžbe, prijem robe, otpisi, popisi, prenosi, sniženja, zadaci i obilasci objekata. Podaci stižu razmjenom preko servera IRIS CORVINA (samo pregled).",\r
"Šta se izrađuje",\r
"Šta se knjiži",\r
"Šta se naplaćuje",\r
"Šta treba provjeriti",\r
"Stalna smjena",\r
"STALNA SREDSTVA NAMIJENJENA PRODAJI",\r
"Stalni slobodan dan u sedmici. Bez izbora program sam bira (ravnomjerno kroz sedmicu ili kad se nakupi najviše uzastopnih dana).",\r
"stalno",\r
"Stalno uvećanje po ugovoru o radu — svake godine",\r
"Štampa",\r
"Štampa posljednjeg računa",\r
"Stampac",\r
"Štampač",\r
"štampač nije odgovorio u 90 sekundi (možda čeka odgovor u dijalogu)",\r
"Štampač za kalkulacije",\r
"štampač: {0}",\r
"Štampaj",\r
"Štampanje je dostupno samo u Windows verziji.",\r
"štampanje je odbijeno",\r
"Štampanje nije uspjelo: {0}",\r
"Štampanje radi samo u Windows verziji.",\r
"Standardni troškovi",\r
"Standardni troškovi su {0} %, a upisano je {1} %, pa se porez računa na veću osnovicu. Drugi procenat se upisuje samo kad ga zakon propisuje za ovu vrstu zakupa; u suprotnom polje ostaje prazno.",\r
"Stanje",\r
"Stanje avansa po kupcu",\r
"stanje izvoda se ne slaže (prethodno − duguje + potražuje ≠ novo)",\r
"Stanje kasa nije pročitano: {0}",\r
"stanje na {0}. godinu",\r
"Stanje od {0}",\r
"Stanje od {0} · promet za dan {1}",\r
"Stanje polazi od početnog stanja robe",\r
"Stanje polazi od zaključenog popisa cijelog objekta",\r
"Stanje razmjene",\r
"Stanje rezervacije",\r
"Stanje svake kase iz podataka koje kasa šalje (Kasa",\r
"Stanje svake kase sada: smjena, promet robe i novca, gotovina u fioci, posljednji računi · samo pregled",\r
"Stanje u knjigama na dan popisa (lager)",\r
"Stanje uživo",\r
"Stara",\r
"Stara cijena ne može biti negativna.",\r
"Stara i nova stopa moraju biti izabrane i različite.",\r
"Stara MPC",\r
"Stara stopa",\r
"Stara verzija",\r
"Stara verzija programa:",\r
"stari bar",\r
"Stari dan ostaje u spisku kao radni dan.",\r
"Stari QR kodovi sa adresom IRIS-a i dalje rade.",\r
"Stari zapis se ne može primijeniti.",\r
"Starija izmjena",\r
"Starost potraživanja",\r
"STAROST POTRAŽIVANJA I ZATEZNA KAMATA",\r
"STARTTLS (587)",\r
"Startup",\r
"stat",\r
"Statisticki aneks",\r
"Statistički aneks",\r
"STATISTIČKI ANEKS",\r
"status",\r
"Status",\r
"Status osiguranja izvršioca (047 / 048 / 079) nije izabran.",\r
"Status osiguranja izvršioca (IOPPD šifra) *",\r
"Status računa",\r
"Status sertifikata je nepoznat.",\r
"Statutarne i druge rezerve",\r
"stavci",\r
"Stavka",\r
"stavka {0}",\r
"stavka fakture bez artikla iz šifarnika",\r
"Stavka je otpisana.",\r
"Stavka je stornirana.",\r
"Stavka ne pripada reversu.",\r
"Stavka nema šifru artikla kase.",\r
"stavka otpremnice bez artikla iz šifarnika",\r
"Stavka više ne postoji.",\r
"stavke",\r
"Stavke",\r
"Stavke bez artikla u šifarniku (nisu u dokumentu): {0}",\r
"stavke cigara ({0})",\r
"Stavke gdje je dobavljač dao manji rabat od ugovorenog. „Više plaćeno\\" = koliko je faktura veća nego da je rabat ispoštovan.",\r
"stavke koje dobavljač traži, a nema ih u evidenciji. Prije plaćanja potrebna je fizička provjera faktura i kalkulacija (greška dobavljača ili pokušaj prevare).",\r
"Stavke koje nisu vraćene (mijenjane su poslije uvoza):\\n\\n{0}{1}",\r
"Stavke kojih nema u evidenciji su plaćanja/odobrenja (smanjuju dug). Potrebno je provjeriti da li su plaćanja upisana.",\r
"Stavke naknade se ne slažu sa evidencijom odsustava.",\r
"Stavke nisu prepoznate. Pronađen je samo ukupan iznos {0} (IOS bez stavki); poredi se samo saldo.",\r
"Stavke otpisa bez artikla u šifarniku (",\r
"stavke povrata robe ({0})",\r
"Stavke primanja",\r
"Stavke sa",\r
"Stavke sa otpisne liste u minus + knjiženje po kontima 134000/134001/134002 i 5771",\r
"Stavke su već naplaćene drugim računom. Ovaj račun treba stornirati.",\r
"Stavke tabele nisu prepoznate. Tabela se unosi kopiranjem iz PDF-a.",\r
"Stavke za provjeru (isti barkod na više artikala, pogrešan kontrolni broj, barkod u nedozvoljenom obliku, artikal bez cijene ili barkoda). List se ne uvozi.",\r
"stavki",\r
"Stavki",\r
"stavki {0} · {1}",\r
"stavki koje nisu upisane",\r
"Stavki koje nisu upisane",\r
"Stavki mijenja",\r
"Stavki mijenjanih u međuvremenu: {0} (bez promjene).",\r
"Stavki na kartici",\r
"stavki po artiklu (cigare i sl.). Sve se može promijeniti u „Kalkulacije i fakture → ⚖ Marže po stavci\\".",\r
"Stavki u zaključanom periodu: {0} (bez promjene).",\r
"Stavki za prebacivanje",\r
"Staž",\r
"Staž (god.)",\r
"Staž (prije zap.)",\r
"Staž PRIJE dolaska kod nas; godine kod nas se same dodaju iz datuma zaposlenja",\r
"Staž prije zaposlenja",\r
"Staž uk.",\r
"stigle",\r
"stigli su fajlovi kase",\r
"stigli su fajlovi Menadžera",\r
"Stiglo",\r
"stiglo novo:",\r
"stimulacija (nagrada) za doprinos u radu",\r
"STIMULACIJA (NAGRADA) ZA DOPRINOS U RADU",\r
"Stimulacija (nagradni dani) za doprinos u radu",\r
"Stimulacija (nagradni dani) za doprinos u radu — samo",\r
"Stimulacija (nagradni dani) za doprinos u radu za {0}. i stalno uvećanje po ugovoru o radu",\r
"Stimulacija (uklapanje isplate)",\r
"stimulacija {0} dana umanjena na {1}; ukupno najviše {2} radnih dana (pravilnik)",\r
"Stimulacija je odobrena za doprinos u radu{0}{1}.",\r
"Stimulacija za doprinos u radu (do dana)",\r
"Stočna hrana",\r
"Stopa",\r
"Stopa {0}",\r
"Stopa {0} → {1} od {2}\\nArtikala sa stopom {3}: {4}\\n\\n{5} Izdati računi zadržavaju stopu sa računa. Upisati promjenu?",\r
"Stopa {0} je {1}.",\r
"Stopa {0} je dodata u šifarnik stopa.",\r
"Stopa {0} promijenjena na {1}.",\r
"Stopa {0}%",\r
"Stopa {0}%: {1}.",\r
"Stopa {0}%: iznos ispravljen prema UKUPAN POREZ (OCR je pročitao drugačiju cifru).",\r
"Stopa {0}%: osnovica {1} + porez {2} = {3}, a pročitan promet je {4}. Potrebna je provjera iznosa.",\r
"Stopa {0}%: osnovica i porez izračunati iz prometa (OCR nije pročitao sve brojeve bloka).",\r
"Stopa {0}%: porez i promet izračunati iz osnovice (OCR nije pročitao sve brojeve bloka).",\r
"Stopa % (odluka opštine)",\r
"Stopa 0 % bez osnova (",\r
"Stopa artikla je upisana ručno, a faktura dobavljača novija od tog upisa nosi drugu stopu. Ručna stopa se ne mijenja bez potvrde.",\r
"Stopa avansa: 21, 15 ili 7 %.",\r
"Stopa iz šifarnika kase; osnovica i PDV preračunati iz iznosa sa PDV po artiklu.",\r
"Stopa na avansnom računu",\r
"Stopa na hranu",\r
"Stopa na hranu uz smještaj (%)",\r
"Stopa na naknadu za otkaz",\r
"Stopa na smještaj",\r
"stopa nepoznata",\r
"Stopa PDV nije ispravna.",\r
"Stopa PDV-a (%)",\r
"Stopa PDV-a {0} %",\r
"Stopa PDV-a {0} % nije u šifarniku stopa.",\r
"Stopa PDV-a je obavezna za nov artikal.",\r
"Stopa PDV-a mora biti broj od 0 do 100.",\r
"Stopa PDV-a na avansnom računu (%)",\r
"Stopa PDV-a na naknadu za otkaz (%)",\r
"Stopa PDV-a nije broj.",\r
"stopa PDV-a nije ispravna",\r
"Stopa PDV-a nije ispravna.",\r
"Stopa PDV-a se bira sa spiska (list „Šifarnici\\").",\r
"Stopa PDV-a za označene",\r
"Stopa PDV-a za redove bez razdvojenog PDV-a",\r
"Stopa po pravilu „{0}\\".",\r
"Stopa po pravilu je upisana za {0} artikala.",\r
"Stopa pravila nije u šifarniku stopa.",\r
"Stopa sa fakture",\r
"stopa smještaja",\r
"Stopa za plate",\r
"Stopa za provjeru (",\r
"Stopa za provjeru: {0} (jezičak PDV).",\r
"Stope",\r
"Stope i pragovi",\r
"Stope i vrste primanja",\r
"Stope po pravilima — pregled",\r
"Stope su podešene po propisima na snazi 2026. („Evropa sad\\" 1 i 2): doprinosi zaposleni PIO 10 % + nezaposlenost 0,5 %; poslodavac 0,5 % + Fond rada 0,2 %; porez 0/9/15 % (pragovi 700 i 1.000 EUR, marginalno); prirez na porez — na teret poslodavca (ne ulazi u bruto ni u IOPPD). Kad se propis promijeni, mijenja se broj ovdje: već obračunati radnici zadržavaju snimljene iznose, a novi obračun (i „Obračunaj sve\\" na otvorenom mjesecu) računa po novoj stopi. Prosječna zarada za doprinos za lica sa invaliditetom upisuje se za svaku godinu obračuna posebno (prosjek prethodne godine). Red nove godine se otvara automatski sa prošlogodišnjim iznosom, koji se ispravlja kad se objavi novi prosjek.",\r
"Storna",\r
"Storna i izuzeci",\r
"Storniraj",\r
"storniran",\r
"Storniran",\r
"Storniran dokument se ne izdaje.",\r
"Storniran dokument se ne mijenja.",\r
"Storniran račun se ne fiskalizuje.",\r
"storno",\r
"Storno",\r
"Storno (korektivni račun)",\r
"Storno avansa {0}",\r
"Storno avansa {0} — račun {1}",\r
"Storno avansa {0} po računu {1}",\r
"Storno avansnog računa {0}{1}",\r
"Storno fiskalizovanog računa izdaje korektivni račun (negativni iznosi) i šalje ga Poreskoj upravi.\\nRazlog:",\r
"Storno iznos",\r
"Storno korektivnim računom postoji samo za fakture.",\r
"Storno PDV na avans {0} %",\r
"STORNO računa {0}{1}",\r
"Storno stavke",\r
"Str.",\r
"strana · ukupno",\r
"strana {0}",\r
"strana {0}, čitanje 1/3",\r
"strana {0}, čitanje 2/3",\r
"strana {0}, čitanje 3/3",\r
"strana {0}, red {1}/{2}",\r
"strana {0}: isti izvještaj za taj objekat i datum već postoji — preskočeno",\r
"strana {0}: objekat nije izabran",\r
"strana {0}: nema datuma",\r
"strana {0}: Z broj nije upisan (u KIF-u: „Z-0000\\")",\r
"Strana {0}/{1} — {2}…",\r
"Strani",\r
"Strani dobavljač",\r
"Strani dobavljač (uvoz)",\r
"Strani dobavljači sa saldom na kontu {0} (dobavljači u zemlji)",\r
"Strani gost",\r
"Strano lice",\r
"strftime('%Y-%m-%d %H:%M:%S','now','localtime')",\r
"strong",\r
"Stručna sprema — po sistematizaciji",\r
"Stručna sprema — stvarna",\r
"struja",\r
"struja, komunalije, gorivo, telefon…",\r
"Stvarno odrađeni sati (prazno = cijela smjena)",\r
"su neradni za sve: rad tog dana se plaća +150 %, a ko ne radi dobija naknadu. Upisuju se automatski, po dva dana, a kad praznik padne u nedjelju, neradan je i naredni dan (Zakon o državnim i drugim praznicima, čl. 3).",\r
"su obavezna (JMBG za poreske prijave, plata za obračun). Dovoljno je unijeti jedno od dva polja plate; drugo se preračunava automatski. Žiro račun se može unijeti i skraćeno (npr. 540-32116541-40); nule se dopisuju automatski. Prirez po opštini",\r
"su zaštićeni: kad su dva računara mijenjala isti podatak, nijedna izmjena se ne prepisuje automatski, već čeka odluku („Izmjene koje čekaju\\").",\r
"sub",\r
"Sub",\r
"Subject: =?UTF-8?B?{0}?=",\r
"subota",\r
"Subota",\r
"substr({0},1,10)",\r
"substr({0},1,7)",\r
"substr({0}.DatumDokumenta,1,10)",\r
"substr({0}.DatumUnosa,1,10)",\r
"substr(COALESCE({0}, ''),1,10)",\r
"substr(COALESCE(d.DatumIzdavanja,''),1,10)",\r
"substr(COALESCE(k.DatumDokumenta, k.DatumFakture, ''), 1, 10) >= ?",\r
"substr(COALESCE(k.DatumDokumenta, k.DatumFakture, ''),1,10)",\r
"substr(COALESCE(k.DatumUnosa, k.DatumDokumenta, k.DatumFakture),1,10)",\r
"substr(COALESCE(kp.Datum,''),1,10)",\r
"substr(COALESCE(o.Datum,''),1,10)",\r
"substr(COALESCE(p.Datum,''),1,10)",\r
"substr(COALESCE(r.Datum,''),1,10)",\r
"substr(k.DatumFakture,1,10)",\r
"substr(s.Konto,1,{0})",\r
"Suhomesnati proizvodi i vakumirano meso",\r
"Sukob",\r
"sukob šifre",\r
"Sumarni računi",\r
"Šume i višegodišnji zasadi",\r
"Šume i višegodišnji zasadi namijenjeni prodaji",\r
"Sumnjiv rad — obrisani računi i stavke po kasiru",\r
"Sumpor-dioksid i sulfiti",\r
"suncokretovo ulje; ulje suncokret; maslinovo ulje; jestivo ulje; kukuruzno ulje; sojino ulje; susamovo ulje; laneno ulje",\r
"Susam",\r
"Sušeno voće — šljive",\r
"Sušeno voće — smokve i ostalo",\r
"Suveniri",\r
"sv-SE",\r
"sva",\r
"Sva prodaja u periodu ima nabavnu cijenu.",\r
"sva sredstva grupe otuđena → ostatak salda na rashod (čl. 8)",\r
"Svaka kalkulacija",\r
"svaka zatvorena smjena postaje pazar",\r
"Svaki izvod u registar banke, svaka transakcija jednom; plaćanja prepoznata po PIB-u ili upamćenom računu se odmah knjiže, ostalo čeka pregled u Banka → Transakcije",\r
"svaki objekat",\r
"Svaki odrađeni sat se plaća",\r
"Svaki radnik ima",\r
"Svaki sat je razvrstan tačno jednom (praznik → noćni → redovni), pa nema duplog plaćanja. Prekovremeni su preko fonda radnika u svim objektima (po objektu se vidi njegov dio); „Naknada za praznik\\" = neradni praznik koji radnik nije radio. Kolone „Nedjelja\\" su pregled koliko je nedjelja (dana) radnik radio — za ručni unos „Rad nedjeljom\\" u platama; ti sati su već sadržani u ostalim kolonama. Ove sate ekran „Plate radnika\\" preuzima dugmetom „Obračunaj po smjenama\\" — kad su sedmice potvrđene, samo iz potvrđenih.",\r
"sve",\r
"Sve",\r
"Sve ({0} EUR)",\r
"sve (bez duplikata)",\r
"sve (i obrađeno)",\r
"Sve automatske veze plaćanja i knjižnih nota iznova, po današnjim pravilima (samo glavni računar)",\r
"Sve fakture unesene danas, bez obzira na datum fakture (za „Štampaj sve\\").",\r
"Sve grupe",\r
"Sve isplate fizičkim licima u mjesecu obračuna: zarade, IQOS, ugovor o djelu, zakup — i isplate zakupa sa izvoda bez obračuna poreza (za knjigovođu, prije IOPPD-a i prijave prireza)",\r
"Sve jednim sumarnim računom",\r
"Sve kalkulacije iz izabranog perioda u jednom PDF-u, svaka na svojoj strani",\r
"sve kalkulacije izbora (",\r
"Sve kalkulacije odjednom na štampač, bez dijaloga za svaku",\r
"Sve kalkulacije u jednom PDF-u, svaka na svojoj strani",\r
"Sve redom",\r
"Sve se poklapa.",\r
"Sve sedmice mjeseca su potvrđene.",\r
"Sve sobe su čiste.",\r
"Sve što prođe kroz račune: prilivi, odlivi, po vrsti, po danu i mjesecu · svaka transakcija se evidentira JEDNOM, ma koliko puta izvod stigao",\r
"Sve stope odgovaraju pravilima.",\r
"sve vrste",\r
"Sve vrste soba",\r
"sveti stefan",\r
"svetkuje vjerski praznik (tražio slobodan dan) — rad se plaća kao rad na praznik",\r
"svi",\r
"Svi",\r
"Svi aktivni",\r
"svi aktivni objekti (",\r
"Svi artikli",\r
"Svi artikli sa faktura u periodu imaju barkod.",\r
"Svi artikli sa fakture imaju barkod.",\r
"Svi artikli sa starom stopom dobijaju novu stopu od zadatog datuma. Stopa stupa na snagu sama na taj dan u programu i na kasama; izdati računi i izvještaji zadržavaju stopu sa računa.",\r
"Svi artikli šifarnika imaju barkod.",\r
"svi dani",\r
"Svi dobavljači",\r
"Svi dokumenti",\r
"Svi kupci",\r
"svi objekti",\r
"svi objekti (opšta cijena)",\r
"Svi objekti (pregled)",\r
"svi objekti (sve kase)",\r
"svi objekti (ukupno)",\r
"Svi nabavljeni artikli su prebrojani.",\r
"Svi neiskorišćeni kodovi za Menadžer ove firme prestaju da važe. Nastaviti?",\r
"Svi neiskorišćeni kodovi za ovu kasu prestaju da važe. Uparena kasa se ne isključuje.",\r
"Svi objekti",\r
"svi računi",\r
"Svi računi:",\r
"Svim pazarima sa prošlim rokom je uplata evidentirana.",\r
"svinjska mast; biljna mast; loj",\r
"svjeze meso; mljeveno meso; pilet; pilec; junet; junec; svinjet; svinjsk; telet; telec; jagnjet; svjeza riba",\r
"svoje izmjene",\r
"Svojih cijena",\r
"svoju boju",\r
"Svrha",\r
"Svrha potvrde (npr. kredit, viza, banka, vrtić):",\r
"Svrha reversa nije ispravna.",\r
"Sync folder nije podešen.",\r
"Sync sada",\r
"t.Datum DESC, t.TransID DESC",\r
"t.Datum, t.TransID",\r
"t.Status NOT IN ('duplikat')",\r
"t.TransID IN ({0})",\r
"Ta šifra je već vezana za drugi artikal.",\r
"Ta uplata je već vezana za pazar.",\r
"Ta veza više nije uparena.",\r
"Tab",\r
"Tabela nije prepoznata. Pronađen je samo ukupan iznos {0} (IOS bez stavki); poredi se samo saldo.",\r
"Tabela u XML obliku za mašinsku obradu. Nije format za poresku e-prijavu (IOPPD i portal koriste sopstveni XML).",\r
"Tabla soba",\r
"table",\r
"tačno",\r
"tag",\r
"Taj mjesec je zaključan. Knjiženje u njega nije moguće.",\r
"Taksa na fiskalnom računu",\r
"Taksa nije prihod objekta; uplaćuje se opštini.",\r
"Taksa ulazi u osnovicu PDV-a",\r
"taksa.bezTaksePoslijeNoci",\r
"taksa.danIzvjestaja",\r
"taksa.djecaDo",\r
"taksa.exOznaka",\r
"taksa.rokUplateDana",\r
"taksa.umanjenjeProc",\r
"taksa.umanjenoDo",\r
"taksa.uOsnoviciPdv",\r
"takse i naknade",\r
"TB",\r
"tbody",\r
"td",\r
"te godine (redom)",\r
"TECHNICALERROR",\r
"Tehničke greške (izdavač IRIS CORVINA)",\r
"Tehničke greške (pad prikaza, greška u krugu razmjene) program prijavljuje automatski, bez ličnih podataka. Ovdje se prijavljuje ono što program nije zabilježio: pogrešan iznos, dugme bez dejstva, spor ekran. Uz opis idu naziv ekrana, posljednje radnje (nazivi dugmadi) i verzija programa, bez sadržaja dokumenata.",\r
"Tekst",\r
"Tekst (ugovor i obračun)",\r
"Tekst izvoda, npr.:\\n05.08.2026 BAR-KOD DOO PODGORICA 02345678 -12.450,00 ...",\r
"Tekst napomene…",\r
"Tekst poruke je obavezan.",\r
"Tekst sa presjeka (ručno lijepljenje, ako dugme ne radi)",\r
"Tekst sa presjeka nije unesen.",\r
"Tekst upozorenja (razlog, dokazi, rok za odgovor):",\r
"Tekst za kopiranje (Ctrl+A, Ctrl+C):",\r
"Tekst zahtjeva dobavljaču",\r
"Tekst zahtjeva dobavljaču je kopiran u međuspremnik.",\r
"Tekuća godina",\r
"Tekuća godina {0}",\r
"tekućem",\r
"Tekući (poslovni) računi",\r
"Tekući (poslovni) računi u bankama",\r
"Tekući račun (analitika po računu banke)",\r
"Telefon",\r
"Telefon čuva svoje fajlove razmjene u folderu u Dokumentima. Rezervne kopije baze pravi računar u kancelariji.",\r
"Telefon i internet",\r
"Telefon je obavezan. Kasa kupca prepoznaje po broju telefona.",\r
"Telefon kontakta",\r
"Telefon samo skenira i šalje. Kalkulacije i brojeve dokumenata pravi računar u kancelariji.",\r
"Telefon u radnji",\r
"Tema",\r
"Tema poruke nije upisana.",\r
"teoretski, nema popisa",\r
"TEORETSKO stanje",\r
"Teoretsko stanje = početno + nabavka + prenos − otpis − razduženje · fizički popisi po objektu",\r
"TEREA",\r
"Terenski dodatak (do 100 EUR mjesečno)",\r
"TERET",\r
"Teritorija zabrane",\r
"Termin nije pronađen.",\r
"Termini",\r
"test",\r
"TEST",\r
"Test okruženje (efitest.tax.gov.me) —",\r
"TEXT",\r
"text/xml; charset=utf-8",\r
"textarea",\r
"teža",\r
"TEŽA",\r
"Teže povrede",\r
"Tezina",\r
"Težina",\r
"Težina (kg) je obavezna za najmanje jednu stavku.",\r
"Težina stavke (kg)",\r
"Težom povredom smatraju se i ponašanja koja su po {0} st. 1 tač. 2 opravdan razlog za otkaz (povreda propisa zaštite na radu kojom se izaziva opasnost, dolazak pod dejstvom alkohola ili psihoaktivnih supstanci, neopravdano izostajanje 3 radna dana uzastopno odnosno 5 radnih dana sa prekidima u 12 mjeseci, odavanje poslovne tajne, nasilničko ili uvredljivo ponašanje, krivično djelo na radu, zloupotreba sredstava rada), kao i zlostavljanje na radu ({1}).",\r
"th",\r
"thead",\r
"Tijelo zahtjeva nije ispravno.",\r
"TIN",\r
"Tip",\r
"tip dokumenta",\r
"Tip mora biti: {0}.",\r
"Tivat",\r
"TIVAT",\r
"TLSv1.2",\r
"To",\r
"To je već cijena ovog artikla.",\r
"To nije ovaj računar: dva računara imaju ulogu glavnog. Jednom od njih je potrebno dodijeliti ulogu sporednog.",\r
"To: {0}",\r
"Tog dana nijedan objekat nema smjenu („Radno vrijeme objekta\\").",\r
"Tog dana niko nije raspoređen.",\r
"tog mjeseca kao red sa šifrom osnova",\r
"toga (ispod, „Dodaj stavku\\") i radne dane ne smanjuju.",\r
"Topli obrok (EUR/mj.)",\r
"Topli obrok (posebni dio zarade)",\r
"TOSCANELLO",\r
"tr",\r
"Trajanje smjene:",\r
"Traje h",\r
"trajna licenca",\r
"Trajna licenca ({0}): program radi bez ograničenja, svi moduli{1}",\r
"Trajni backup je snimljen u Arhivu: {0}",\r
"Trans",\r
"transakcija",\r
"Transakcija",\r
"TRANSAKCIJA",\r
"Transakcija izvoda",\r
"Transakcija je naplata od kupca. Poništava se u Naplati, brisanjem uplate.",\r
"Transakcija je upisana u registar banke.",\r
"Transakcija je već proknjižena. Ponovni upis nije izvršen.",\r
"Transakcija je vraćena na „čeka\\" (plaćanje nije postojalo).",\r
"Transakcija nema otisak.",\r
"Transakcija nije proknjižena.",\r
"Transakcija nije upisana.",\r
"Transakcije",\r
"TRANSAKCIJE BANKE",\r
"Transakcije izvoda",\r
"transakcije na računima drugih firmi se ne knjiže",\r
"Transakcije vrste „pazar\\" sa izvoda vežu se za pazare po iznosu gotovine (jedan dan ili uzastopni dani jednog objekta)",\r
"translate(-50%,-50%)",\r
"Tražena kvalifikacija (nivo obrazovanja)",\r
"Tražena kvalifikacija izražava se nivoom prema {0}: {1}. Za svako radno mjesto utvrđuje se jedan nivo ili raspon od najviše dva nivoa. Minimalna zarada zaposlenog određuje se prema nivou kvalifikacije koji radno mjesto traži ({2}: do V nivoa {3} EUR, VI nivo i više {4} EUR neto), a ne prema kvalifikaciji koju zaposleni posjeduje. Radno iskustvo računa se na istim ili sličnim poslovima.",\r
"Tražena smjena nije izabrana.",\r
"Traženje…",\r
"Traži (broj fakture, objekat…)",\r
"Traži artikal",\r
"Traži artikal kase (naziv, šifra, barkod)",\r
"traži izbor (bez PDV-a po stopama ili dan već ima pazar)",\r
"Traži plaćanje stavki kojih nema u evidenciji (greška dobavljača, neunesena faktura ili pokušaj prevare). Te stavke se ne plaćaju prije fizičke provjere faktura i kalkulacija. Detalji: Dobavljači → Sporne stavke.",\r
"Traži u mreži",\r
"Trazio",\r
"Tražio",\r
"Treba radnika",\r
"Trebovanje {0}: {1} → {2} ({3})",\r
"Treća",\r
"Treća smjena",\r
"Trenutna verzija",\r
"Trenutni izvor podataka za",\r
"Trenutni PIN",\r
"Trenutno:",\r
"trgovačka knjiga",\r
"Trgovačka knjiga",\r
"Trgovačka knjiga — 5 godina (Pravilnik o evidenciji nabavke i prodaje robe 34/12, čl. 16)",\r
"Trgovačka knjiga {0} {1}: početno stanje je privremeno ({2}. godina nije zaključena).",\r
"Trgovačka knjiga po Pravilniku: zaduženje, razduženje, popis, zaključenje godine",\r
"Trgovačka knjiga za {0}. je već zaključena.",\r
"Trgovačka knjiga za {0}. je zaključena i pripremljena za ovjeru. Otvaranje mjeseca nije moguće bez poništavanja zaključenja knjige (Trgovačka knjiga → „Poništi zaključenje {1}.\\").",\r
"Trgovačka knjiga za {0}. je zaključena. Izmjena uplate nije moguća.",\r
"Trgovačke knjige (Excel i PDF)",\r
"Trgovina (marketi, kiosci, prodavnice)",\r
"Trgovina na veliko = 50%",\r
"Trosak",\r
"TROSAK",\r
"Trošak",\r
"Trošak (pun rashod odmah)",\r
"Trošak amortizacije {0} (obrazac OA)",\r
"Trošak bez vrste (ili vrsta bez konta)",\r
"Trošak firme",\r
"Trošak je datiran u zaključanom mjesecu. Brisanje nije moguće.",\r
"Trošak koji se može direktno pripisati pribavljanju robe (prevoz, špedicija, carina, osiguranje u transportu) ulazi u nabavnu vrijednost robe",\r
"Trošak na stavku",\r
"Trošak ne postoji.",\r
"Trošak nije otvorena procjena.",\r
"Trošak nije zatvorena procjena.",\r
"Trošak poslodavca",\r
"trošak rada u periodu",\r
"TROSKOVA",\r
"Troskovi",\r
"TROSKOVI",\r
"Troškovi „u nabavnu\\" iznose",\r
"Troškovi (Tip = TROSAK) grupisani po vrsti i objektu. Vrsta se bira pri unosu na kartici „Nabavka i troškovi\\".",\r
"Troškovi % (prazno = standardni)",\r
"Troškovi amortizacije",\r
"TROŠKOVI AMORTIZACIJE I REZERVISANJA",\r
"Troškovi amortizacije iskazani u bilansu uspjeha",\r
"Troškovi amortizacije koji se priznaju u poreske svrhe (obrazac OA)",\r
"Troškovi članarina",\r
"Troškovi članarina (PKCG)",\r
"Troškovi doprinosa",\r
"Troškovi goriva i energije",\r
"Troškovi istraživanja",\r
"Troškovi koji nijesu nastali u svrhu obavljanja poslovnih aktivnosti",\r
"Troškovi koji se ne mogu dokumentovati",\r
"TROŠKOVI MATERIJALA",\r
"Troškovi materijala i NV prodate robe iznad iznosa po prosječnoj ponderisanoj / FIFO metodi",\r
"Troškovi materijala i usluga",\r
"Troškovi materijala za izradu",\r
"Troškovi naknada članovima upravnog i nadzornog odbora",\r
"Troškovi naknada fizičkim licima po osnovu ostalih ugovora",\r
"Troškovi naknada po autorskim ugovorima",\r
"Troškovi naknada po ugovoru o djelu",\r
"Troškovi naknada po ugovoru o privremenim i povremenim poslovima",\r
"Troškovi neproizvodnih usluga",\r
"Troškovi neproizvodnih usluga (knjigovodstvo, advokat, IT)",\r
"Troškovi neproizvodnih usluga i troškovi reprezentacije",\r
"Troškovi ostalih dugoročnih rezervisanja",\r
"Troškovi ostalih usluga",\r
"Troškovi ostalih usluga (komunalne, obezbjeđenje, telefon…)",\r
"Troškovi ostalog materijala (režijskog)",\r
"Troškovi perioda",\r
"Troškovi platnog prometa",\r
"Troškovi platnog prometa (naknade banke, POS provizija)",\r
"Troškovi poreza",\r
"Troškovi poreza i doprinosa na teret poslodavca",\r
"Troškovi poreza i doprinosa na zarade i naknade zarada na teret poslodavca",\r
"Troškovi poreza na teret troškova",\r
"Troškovi premija osiguranja",\r
"Troškovi premija osiguranja i troškovi platnog prometa",\r
"Troškovi prodatih proizvoda i usluga",\r
"Troškovi proizvodnih usluga",\r
"TROŠKOVI PROIZVODNIH USLUGA",\r
"Troškovi razvoja koji se ne kapitalizuju",\r
"Troškovi reklame i propagande",\r
"Troškovi reprezentacije",\r
"Troškovi reprezentacije iznad 1 % ukupnog prihoda",\r
"Troškovi rezervisanja za garantni rok",\r
"Troškovi rezervisanja za naknade i druge beneficije zaposlenih",\r
"Troškovi rezervisanja za troškove obnavljanja prirodnih bogatstava",\r
"Troškovi rezervisanja za troškove restrukturiranja",\r
"Troškovi rezervisanja za zadržane kaucije i depozite",\r
"Troškovi režijskog materijala",\r
"Troškovi sajmova",\r
"Troškovi sajmova i troškovi reklame i propagande",\r
"Troškovi su raspoređeni na stavke",\r
"Troškovi transportnih usluga",\r
"Troškovi transportnih usluga i usluga održavanja",\r
"Troškovi usluga na izradi učinaka",\r
"Troškovi usluga održavanja",\r
"Troškovi zakupnina",\r
"Troškovi zarada (modul Plate)",\r
"Troškovi zarada i naknada",\r
"Troškovi zarada i naknada zarada (bruto)",\r
"TROŠKOVI ZARADA, NAKNADA ZARADA I OSTALI LIČNI RASHODI",\r
"Troslovna oznaka, npr. DEU.",\r
"Troslovna oznaka, npr. MNE.",\r
"Troslovna oznaka.",\r
"Trudničko bolovanje",\r
"Trudničko bolovanje (održavanje trudnoće) (70%)",\r
"tu godinu",\r
"Turistička org.",\r
"Turistička vila",\r
"Turistički apartmani",\r
"Turski",\r
"Tuzi",\r
"u",\r
"U „{0}\\" nije pronađen QR kod fiskalnog računa. Račun se unosi ručno (Nova kalkulacija → Ručni unos).",\r
"U „{0}\\" nije pronađen QR kod. Račun bez QR koda unosi se preko „Ručni unos fakture (bez QR)\\".",\r
"u 7 dana",\r
"U akciji (",\r
"U Banci ove firme već postoji {0} izvoda tog računa{1}. Biće uklonjeni iz ove firme.",\r
"u bazi ima kadrovskih dokumenata",\r
"u bazi ima podataka kase",\r
"u bazi ima prenosa robe",\r
"u bazi ima rasporeda smjena",\r
"U bazi postoje upisane carinske deklaracije — registar ostaje uključen dok ih ima.",\r
"U bazi postoje upisane deklaracije, pa registar ostaje uključen.",\r
"U Excelu nije nađen red zaglavlja sa kolonom „Konto\\".",\r
"U fajlu nije pronađena kolona „Utvrđena maksimalna cijena\\".",\r
"U fajlu nije pronađeno zaglavlje sa kolonama Datum, Objekat i UkupnoSaPDV (prvi red tabele). Nazivi kolona moraju odgovarati šablonu.",\r
"U fajlu nije pronađeno zaglavlje sa kolonama Naziv (ili Šifra / Barkod) i Količina.",\r
"U fioci",\r
"u fiokama · otvorenih smjena",\r
"U folderu je snimak firme „{0}\\", a otvorena je „{1}\\". Potrebno je na računaru otvoriti firmu „{2}\\" i pokrenuti „Objavi bazu za telefone\\".",\r
"U glavnoj knjizi nema knjiženja za ovog kupca (fakture se knjiže sa „Proknjiži mjesec\\").",\r
"U godini nema prihoda ni rashoda. Zaključak nije moguć.",\r
"U grupi:",\r
"U IOPPD za",\r
"U izabranom periodu nema kalkulacija za izabrane objekte.",\r
"U izabranom periodu nema radnih dana.",\r
"U izboru nema kalkulacija kojima se marža može promijeniti.",\r
"U izvještaju nije pronađen nijedan red sa utvrđenom cijenom.",\r
"U knjigama su i dalje dio pazara (KIF kao maloprodaja). Račun na",\r
"U Knjigovodstvu",\r
"U kolonu „Aktivan\\" upisuje se NE. Uvoz ne briše artikle, barkodove ni cijene kojih u fajlu nema.",\r
"U kucanju",\r
"U magacin",\r
"U memoriji nema teksta. Tekst sa slike presjeka se prethodno kopira u Fotografijama.",\r
"U mjesecu je zadat samo osnov bez naknade (070 — neplaćeno odsustvo), a obračunat je bruto {0} EUR. Potrebna je provjera perioda osnova kod radnika ili stavki obračuna.",\r
"u nabavnu cijenu",\r
"U nabavnu?",\r
"u naplati",\r
"U nizu nedostaje {0} brojeva: {1}{2}. Rupa nastaje kad se numerisana kalkulacija obriše.",\r
"U objektu",\r
"U obračun ulaze samo sati iz potvrđenih sedmica.\\n\\nNepotvrđene sedmice ({0}):\\n{1}{2}\\n\\nSati iz tih sedmica ne ulaze u obračun. Nastaviti?",\r
"u obradi",\r
"u okviru normativa, PDV se ne plaća.",\r
"u opisu nema primaoca; tačno jedna otvorena faktura ima ovaj iznos (potrebna provjera)",\r
"U ovaj folder (preporuka: folder u Google Drive-u) glavni računar svakog dana automatski snima kopiju baze; ovdje se pravi i ručna kopija. Kopije se čuvaju van računara, pa je baza sačuvana i u slučaju kvara diska.",\r
"U ovoj godini nema dokumenata.",\r
"U ovoj mreži nije nađen lokalni server. Server u drugoj podmreži se povezuje linkom ili adresom.",\r
"U ovoj sedmici nema rasporeda",\r
"U ovom mjesecu nema isplata po ugovoru o djelu.",\r
"U ovom mjesecu nema obračunate takse.",\r
"U ovom mjesecu nema zaključaka smjena recepcije.",\r
"U ovom mjesecu nema zakupa. Zakupodavac (ugovor) se dodaje dugmetom „Novi zakupodavac\\".",\r
"U ovom mjesecu zakupnina nije isplaćena — zakupodavac se ne prikazuje u IOPPD",\r
"U ovom obračunu je kazna već odbijena.",\r
"U ovom periodu cjenovnik traži najmanje {0} noći.",\r
"U periodu nema pazara objekta.",\r
"U periodu nema uvezene prodaje ni pazara.",\r
"U periodu postoji prodaja po artiklu (kasa ili uvoz iz fajla). Obračun po popisu je tada kontrola: kolona „Prodato\\" obuhvata i evidentiranu prodaju.",\r
"U planu nema odmora za ovu godinu.",\r
"U poruci nedostaje potpis.",\r
"U poruci nedostaje sam zahtjev.",\r
"U Pošti nema neobrađenih izvoda od tog datuma. Potrebno je prethodno pokrenuti „Provjeri poštu\\".",\r
"U prilogu se nalazi faktura {0}.",\r
"U prilogu se nalazi odgovor na izvod otvorenih stavki.",\r
"U prilogu se nalazi otpremnica {0}.",\r
"U prilogu se nalazi ponuda {0}.",\r
"u pripremi",\r
"U pripremi",\r
"U probi je dozvoljen samo lokalni SMTP server.",\r
"u razmjeni nema fajlova Menadžera",\r
"U razmjeni nema fajlova Menadžera (menadzer_",\r
"U razmjeni nema fajlova Menadžera.",\r
"U razmjeni nema paketa drugih firmi.",\r
"U razmjeni postoje paketi drugih firmi, ali nijedan njihov zapis nije u ovoj bazi.",\r
"u razmjeni već postoje cijene ove firme ({0}); početni cjenovnik se ne pravi",\r
"u redu",\r
"U redu",\r
"u redu: {0}",\r
"U sedmici od {0} nema rasporeda koji bi se ponovio.",\r
"U sertifikatu nema javnog dijela (X.509).",\r
"U sertifikatu nema privatnog ključa — treba .pfx/.p12 sa ključem, ne .cer.",\r
"U sertifikatu nije pronađen PIB firme (",\r
"U šifarniku su ostale privremene oznake šifara. Prelaz na nove šifre nije moguć.",\r
"U smjeni: {0}",\r
"U toj ćeliji nema smjene. Potrebno je izabrati ćeliju sa smjenom.",\r
"U toj sedmici nema rasporeda za ovaj objekat. Potvrda nije moguća.",\r
"u toku",\r
"u toku (Menadžer)",\r
"u toku na glavnom računaru",\r
"U unesenu platu je uračunat minuli rad",\r
"u upotrebi",\r
"U upotrebi",\r
"u zaključenim obračunima",\r
"u.MarketID",\r
"Učešća u kapitalu ostalih pravnih lica i druge hartije od vrijednosti koje se vrednuju po fer vrijednosti kroz bilans stanja",\r
"Učešća u kapitalu pridruženih pravnih lica",\r
"Učešća u kapitalu zavisnih pravnih lica",\r
"Učesnik školske ekskurzije",\r
"Učestvuje u popisu i odgovara za usaglašenost stanja magacina sa evidencijom.",\r
"Učestvuje u popisu robe i u pripremi narudžbi.",\r
"Učitaj fajl…",\r
"Učitaj iz Drive-a…",\r
"Učitaj licencu iz fajla…",\r
"Učitano {0} MB (kalkulacija: {1}). Izvještaji se prave iz podataka sa računara.",\r
"Učitano redova iz {0}: {1}.",\r
"Učitava se",\r
"Učitava se kartica koju je poslao dobavljač (Excel ili CSV) ili tabela kopirana iz PDF-a/maila. Program automatski prepoznaje zaglavlje i kolone (formati se razlikuju od dobavljača do dobavljača), zatim upoređuje stavke sa fakturama i plaćanjima u evidenciji i prikazuje",\r
"Učitavanje gostiju…",\r
"Učitavanje kasa sa servera",\r
"učitavanje nije uspjelo: {0}",\r
"Učitavanje računa…",\r
"Učitavanje sa servera…",\r
"Učitavanje…",\r
"Učtivo uslužuje kupce, daje obavještenja o robi i cijenama i rješava manje reklamacije.",\r
"Udio u RUC %",\r
"Udio u ukupnom PDV-u firme",\r
"Udjeli društava sa ograničenom odgovornošću",\r
"Udjeli društva sa ograničenom odgovornošću",\r
"Udžbenici i školski pribor",\r
"udzbenik; sveska; plastelin; kreda; bojice; vodene boje; tempere; sestar; lenjir; trougao; uglomjer; grafitna olovka",\r
"UG",\r
"ugasi",\r
"ugostiteljstvo",\r
"Ugostiteljstvo — alkohol",\r
"Ugostiteljstvo — kafa",\r
"Ugostiteljstvo — ostala hrana i piće",\r
"Ugostiteljstvo — pića sa šećerom",\r
"Ugostiteljstvo (kafići, restorani)",\r
"Ugovara se probni rad u trajanju od {0} mjesec{1} od dana stupanja na rad ({2}). Za vrijeme probnog rada Zaposleni ima sva prava i obaveze iz radnog odnosa, a Poslodavac ocjenjuje njegove radne i stručne sposobnosti prema opisu poslova radnog mjesta (tačnost i urednost rada, odnos prema kupcima i kolegama, poštovanje rasporeda i blagajničkog poslovanja). Ako Poslodavac do isteka probnog rada ne donese pojedinačni akt kojim utvrđuje da Zaposleni nije zadovoljio, smatra se da je zadovoljio; Zaposlenom koji nije zadovoljio radni odnos prestaje danom isteka probnog rada. Za vrijeme probnog rada svaka strana može otkazati ugovor uz otkazni rok od {3} dana. Probni rad se ne može ponovo ugovoriti za isto radno mjesto.",\r
"Ugovor br.",\r
"Ugovor je na određeno do {0}. Istekom prestaje upravo tog dana: prestanak prije toga je otkaz ili sporazum, a ako je radnik radio i poslije isteka, smatra se da je u radnom odnosu na neodređeno ({1}).",\r
"Ugovor je sačinjen u {0} istovjetna primjerka: jedan za Zaposlenog (uručen na dan stupanja na rad{1}, {2}), jedan za kadrovsku evidenciju i jedan koji se čuva u objektu u kome Zaposleni radi, zajedno sa prijavom na osiguranje ({3}). Zaposleni potvrđuje da je prije potpisivanja upoznat sa aktom o sistematizaciji, Pravilnikom o godišnjim odmorima, Pravilnikom o radnoj disciplini, aktom o poslovnoj tajni, obavještenjem o zabrani zlostavljanja na radu i mjerama zaštite na radu.",\r
"Ugovor o djelu",\r
"Ugovor o djelu — {0}{1}",\r
"Ugovor o djelu — normirani troškovi koji umanjuju osnovicu (%)",\r
"Ugovor o djelu — PIO na teret izvršioca na osnovicu (%)",\r
"Ugovor o djelu — porez na dohodak na osnovicu (%)",\r
"Ugovor o djelu (IOPPD 047/048/079)",\r
"Ugovor o djelu (IOPPD 047/048/079):",\r
"Ugovor o djelu {0}{1}",\r
"Ugovor o djelu: doprinos za PIO izvršioca",\r
"Ugovor o djelu: obaveza prema izvršiocu (neto)",\r
"Ugovor o djelu: porez po odbitku i prirez",\r
"Ugovor o djelu: trošak (bruto)",\r
"ugovor o radu",\r
"Ugovor o radu",\r
"Ugovor važi do",\r
"Ugovor važi od",\r
"Ugovorena mjesečna zarada iznosi {0} bruto{1}. Zarada se isplaćuje redovno i zaposleni nema obustava po osnovu kredita kod Poslodavca, osim zakonskih.",\r
"Ugovoreni",\r
"Ugovoreni iznos je",\r
"Ugovoreno",\r
"Ugovori",\r
"Ugovori i prestanak",\r
"Ugovori na određeno koji ističu u narednih 45 dana ili su istekli: {0}. Potrebna je odluka: novi ugovor, aneks ili raskid po isteku.",\r
"Ugovori na određeno sa istim zaposlenim mogu ukupno trajati najviše {0} mjeseca ({1}; prekid kraći od {2} dana se ne računa), a od {3} do {4} je {5} mjeseci. Zaposleni koji nastavi da radi poslije isteka u radnom odnosu je na neodređeno ({6}). Izuzeci: zamjena odsutnog zaposlenog, sezonski poslovi (do {7} mj. godišnje), projekat.",\r
"Ugovori, godišnji odmori, disciplina, rješenja",\r
"Ugrađena pravila se vraćaju na sadržaj koji program nosi. Pravila koja je dodao korisnik ostaju. Vratiti ugrađena pravila?",\r
"Ugrađena pravila su vraćena: {0}.",\r
"ugrađena verzija",\r
"Ugrađeno pravilo se ne briše. Pravilo se može isključiti.",\r
"UID, Vrsta, Vrijeme, Uredjaj, UredjajID, Ko, Parametri, Stanje, Ishod, VrijemeIshoda, Pokusaj, (COALESCE(Sadrzaj,'')<>'') AS ImaSadrzaj",\r
"Ukalk. PDV {0} (početno stanje po artiklima)",\r
"Ukalk. PDV {0} (prosječna stopa {1} %)",\r
"Ukalkulisana razlika u cijeni (RUC) u prometu na malo",\r
"Ukalkulisana razlika u cijeni u prometu na veliko",\r
"Ukalkulisana RUC",\r
"Ukalkulisana RUC 134001 — nalozi KALK+OTP vs Konta 134 (± razlika kalkulacija/račun)",\r
"Ukalkulisani PDV",\r
"Ukalkulisani PDV 134002 — nalozi KALK+OTP vs Konta 134",\r
"Ukalkulisani PDV na manjak",\r
"Ukalkulisani PDV na višak",\r
"Ukalkulisani PDV sadržan u popustu",\r
"Ukalkulisani PDV u maloprodaji",\r
"Ukalkulisani PDV u prometu na malo",\r
"ukida se",\r
"Ukinutih cijena mjesta",\r
"Uklanjanje barkoda sa ovog artikla",\r
"Uklanjanje iz smjene",\r
"Uklanjanje iz spiska (prilog nije potreban)",\r
"Uklanjanje perioda (važi prethodna šema)",\r
"Uklanjanje praznika",\r
"Uklanjanje smjene iz unosa",\r
"Uklanjanje veze prodajnog mjesta „{0}\\" sa objektom",\r
"uključen je Menadžer (čita raspored smjena)",\r
"uključena",\r
"Uključena pravila predlažu 15 % za hranu i piće koji se služe u objektu, osim alkohola, pića sa dodatkom šećera i kafe (21 %). Pravila se pregledaju i mijenjaju u Cjenovnik kasa → PDV; postojeće stope se ne mijenjaju bez pregleda.",\r
"uključeno",\r
"Uključeno",\r
"Uključeno: kasa štampa isječak koji gost potpisuje.",\r
"Uključeno: kase u restoranu i baru upisuju potrošnju na račun sobe.",\r
"Uključeno: prati se i prijava lokalnoj turističkoj organizaciji.",\r
"Uključeno: rezervacija bez prijave dan poslije dolaska prelazi u „Gost nije došao\\".",\r
"Uključeno: taksa se ne obračunava po gostu.",\r
"Uključeno: taksa se oporezuje stopom smještaja.",\r
"uključi",\r
"Uključi",\r
"Uključi sve",\r
"Uključiti fiskalizaciju u produkciji? Svaki izdati račun ide Upravi prihoda i ne može se obrisati.",\r
"Uključivanje",\r
"Uključivanjem ove opcije program šalje u zajednički katalog barkodova: barkod, naziv artikla, jedinicu mjere i stopu PDV-a. Ne šalju se cijene, količine, dobavljači ni podaci o firmi. Poslati podaci služe svim korisnicima programa za prijedlog naziva pri unosu nepoznatog barkoda. Opcija se može isključiti u svakom trenutku; ranije poslati podaci ostaju u katalogu.",\r
"Uključuje se kad firma sama uvozi robu i dobija carinske deklaracije; PDV sa deklaracije ide u PR-PDV polje 20. Firmi koja kupuje od domaćih dobavljača ovo nije potrebno.",\r
"Ukloni",\r
"Ukloni artikal iz početnog stanja",\r
"Ukloni barkod {0}",\r
"Ukloni iz šifarnika ljekova",\r
"Ukloni kasu",\r
"Ukloni PIN",\r
"Ukloni red",\r
"Ukloni sliku",\r
"Ukloni vezu",\r
"Ukloniti {0} firme?{1}",\r
"Ukloniti izvod iz registra?{0}",\r
"Ukloniti praznik „{0}\\" ({1})?{2}",\r
"Ukloniti šemu minulog rada od {0}?",\r
"Ukloniti vezu mjesta „{0}\\" sa objektom „{1}\\"?\\n\\nCijene koje su već upisane objektu ostaju. Sljedeći uvoz će mjesto ponovo tražiti po nazivu.",\r
"Ukloniti vlastito radno vrijeme za {0}?",\r
"uklonjen",\r
"uklonjena",\r
"Uklonjena",\r
"uklonjene stavke",\r
"Uklonjene stavke",\r
"Uklonjenih stavki",\r
"Uklonjeno iz obračuna (prestanak radnog odnosa / neaktivni): {0}.",\r
"Uklopljeno: stimulacija {0} EUR bruto → ukupna isplata tačno {1} EUR{2}.",\r
"Ukrajinski",\r
"UKUPAN IZLAZNI PDV (16+17+18+21)",\r
"Ukupan izlazni PDV (24)",\r
"Ukupan iznos",\r
"Ukupan iznos poreza (51a + 51b + 51c)",\r
"UKUPAN POREZ",\r
"UKUPAN POREZ nije pročitan; izveden je iz zbira stopa (moguće odstupanje zaokruživanja kase ±0,01).",\r
"UKUPAN POREZ: pročitan porez je veći od 21 % osnovice (moguća zamjena osnovice i poreza). Potrebna je provjera prema slici.",\r
"Ukupan prihod",\r
"Ukupan prihod {0}",\r
"Ukupan trošak",\r
"UKUPAN ULAZNI PDV — pretporez (19+20+21+22)",\r
"Ukupna aktiva",\r
"Ukupna aktiva 31.12.{0}",\r
"ukupna amortizacija",\r
"UKUPNA PORESKA OBAVEZA (57 − 58) > 0",\r
"Ukupne obustave ({0} EUR) prelaze {1} % zarade ({2} EUR, {3}). Potrebno je rasporediti kaznu na više mjeseci ili pribaviti pisanu saglasnost zaposlenog.",\r
"Ukupni iznosi po dobavljaču za period",\r
"Ukupni iznosi po dobavljaču za period (osnova kao KPR — po datumu prijema). Zbir „Sa PDV\\" = kontrola knjige ulaznih računa.",\r
"Ukupni kapitalni dobici tekuće godine",\r
"Ukupni kapitalni gubici tekuće godine",\r
"UKUPNI RASHODI",\r
"ukupno",\r
"Ukupno",\r
"UKUPNO",\r
"UKUPNO · razlika",\r
"UKUPNO · saldo",\r
"Ukupno (EUR)",\r
"ukupno (IOS bez stavki)",\r
"ukupno ≠ stope ({0})",\r
"Ukupno bez PDV",\r
"Ukupno BEZ PDV",\r
"UKUPNO bez PDV",\r
"Ukupno duguje",\r
"Ukupno izmjena",\r
"Ukupno kalkulacija:",\r
"UKUPNO NAŠA OBAVEZA",\r
"Ukupno neplaćeno",\r
"Ukupno obustave:",\r
"Ukupno otvoreno",\r
"UKUPNO OTVORENO",\r
"Ukupno PDV",\r
"Ukupno potražuje",\r
"Ukupno prebrojano:",\r
"Ukupno razduženje",\r
"Ukupno sa PDV",\r
"Ukupno SA PDV",\r
"Ukupno sati",\r
"Ukupno sporno: {0} EUR. Do usaglašavanja navedene stavke ne smatramo dospjelim za plaćanje.",\r
"Ukupno trajanje godišnjeg odmora po svim osnovama iznosi najviše {0} radnih dana, a nikad manje od zakonskog minimuma za kategoriju zaposlenog.",\r
"Ukupno trošak:",\r
"Ukupno uneseno:",\r
"Ukupno zaduženje",\r
"Ukupno: nabavna",\r
"UkupnoSaPDV",\r
"ul",\r
"Ul. Filipa Kovačevića bb, Zgrada Katarina 17, Budva",\r
"Ulaganja na tuđim nekretninama, postrojenjima i opremi",\r
"Ulaganja na tuđim objektima (zakupljeni lokali)",\r
"Ulaganja u razvoj",\r
"Ulaz",\r
"Ulaz — kalkulacija",\r
"Ulaz (fakture sa PDV)",\r
"Ulaz (kol.)",\r
"Ulaz / rashod",\r
"Ulaz bez PDV",\r
"ulaz na kontu 134 (nabavna vrijednost)",\r
"Ulaz robe (kalkulacija)",\r
"Ulaz robe 134000 (prodajna sa PDV) — nalozi KALK+OTP vs Konta 134",\r
"Ulaz robe veleprodaje {0} (veleprodajna bez PDV) — nalozi KALK+OTP vs kalkulacije objekata veleprodaje",\r
"Ulaz robe: kalkulacija iz QR koda fiskalnog računa dobavljača",\r
"Ulaz sa PDV",\r
"Ulaz sa PDV (EUR)",\r
"Ulaza",\r
"Ulazak u Crnu Goru",\r
"ulazi",\r
"ulazi {0}",\r
"Ulazi i ostala kretanja (±)",\r
"ulazi i otpisi",\r
"Ulazi po artiklu",\r
"ULAZI PO ARTIKLU (nabavka — bez prodaje i stanja)",\r
"ulazi zajedno sa platom — jedna prijava za mjesec.",\r
"Ulazni",\r
"Ulazni dokumenti sa stopom van 21 / 15 / 7 / 0 % (",\r
"Ulazni niz:",\r
"Ulazni PDV",\r
"Ulazni PDV (odbitni)",\r
"ULAZNI PDV (odbitni)",\r
"Ulazni PDV (sa faktura)",\r
"Ulazni PDV {0} %",\r
"Ulazni PDV 27xx — nalozi KALK+OS+ZAV vs PR-PDV polje 19",\r
"Ulazni PDV bez prava na odbitak",\r
"Ulazni PDV bez prava na odbitak (nabavke označene „bez prava na odbitak\\" + ručni dodatak)",\r
"Ulazni PDV bez prava na odbitak (PR-PDV polje 26)",\r
"Ulazni PDV bez prava na odbitak (PR-PDV polje 26) — na trošak",\r
"Ulazni PDV na domaći promet proizvoda i usluga",\r
"Ulazni PDV na domaći promet proizvoda i usluga (fakture dobavljača + oprema/troškovi + zavisni)",\r
"Ulazni PDV sa pravom na odbitak (25−26)",\r
"Ulazni PDV sa pravom na odbitak (27)",\r
"Ulcinj",\r
"ULCINJ",\r
"ulica i broj, mjesto",\r
"Ulje",\r
"Ulje jestivo flaširano",\r
"Uloga",\r
"Uloga (ključ)",\r
"Uloga ovog računara",\r
"Uloga ovog računara nije izabrana (Povezivanje → „Uloga ovog računara\\"). Do izbora uloge ovaj računar ne objavljuje bazu{0}.",\r
"Uloga ovog računara nije izabrana.",\r
"Uloga ovog uređaja",\r
"uloga računara po nalogu #{0}: {1} → {2}",\r
"Uloga računara se mijenja samo na računaru (Windows). Telefon je uvijek sporedni.",\r
"ulosci; ulozak; tamponi; tampon",\r
"Ulozi",\r
"Umanjen iznos do",\r
"Umanjen iznos do (godina)",\r
"Umanjenje (%)",\r
"Umanjenje izlaznog PDV {0} %",\r
"Umanjenje izlaznog PDV {0} % (obavještenje {1})",\r
"Umanjenje NV prodate robe za realizovanu RUC — {0}",\r
"Umanjenje za goste do granice iznad.",\r
"Umanjenje: dividende i udjeli u dobiti rezidentnih pravnih lica + likvidacioni ostatak (a+b)",\r
"Umanjenje: između 0 i 100 %",\r
"Umanjenje: porez na dobit ostvarenu u nedovoljno razvijenim opštinama",\r
"Umanjenje: reinvestiranje u naučnoistraživačke / inovativne projekte",\r
"Umanjenje: reinvestiranje u poljoprivredne projekte / subjekte (a+b)",\r
"Umanjenje: ulaganja u startapove, naučnoistraživačke ustanove, Fond za inovacije (a+b+c)",\r
"Umanjeno",\r
"UNA",\r
"Unaprijed obračunati troškovi",\r
"Unaprijed plaćeni troškovi",\r
"unesene plate, pa je isplata malo veća od unesene.",\r
"Uneseni iznos je",\r
"uneseni iznosi su neto (na ruke)",\r
"Uneseno",\r
"uneseno {0} plaćanja · {1} EUR",\r
"Uneseno {0} plaćanja u iznosu {1} EUR. {2}{3}Pregled: „Otvorene stavke\\".",\r
"Uneseno danas",\r
"Uneseno je {0} dana praznika, a u godini je {1} praznika.",\r
"Uneseno je {0} dana, a mjesec ima {1}.",\r
"Uneseno je {0} nedjelja, a mjesec ima {1}.",\r
"Uneseno je {0} radnih dana, pa radnik nema sedmični odmor od 24 h (najviše {1} dana u ovom mjesecu; Zakon o radu, čl. 66).",\r
"uneseno kao bruto",\r
"uneseno kao neto",\r
"Unesi barkodove",\r
"Unesi još jedan",\r
"Unesi presjek iz kase",\r
"Unijeti {0} plaćanja u ukupnom iznosu {1} EUR?",\r
"Unio: {0}, {1}",\r
"Universal Capital Bank",\r
"unos",\r
"Unos",\r
"unos dana; sati (redovni, prekovremeni, noćni, nedjelja, praznik) se izvode iz dana",\r
"Unos IQOS iznosa po radniku (bruto ili neto): doprinosi, porez na zbir sa platom i prirez na teret poslodavca",\r
"Unos je moguć i bez kamere: nakon zatvaranja ovog ekrana tekst QR koda se lijepi u polje.",\r
"Unos objekta",\r
"Unos pazara",\r
"Unos pazara (Z-izvještaj)",\r
"Unos plaćanja",\r
"Unos: ručno sa Z izvještaja, uvozom tabele iz kase (CSV/Excel) ili iz skeniranih izvještaja.",\r
"Unosi se jednom, iz bruto bilansa knjigovođe na 31.12. prethodne godine (uvoz iz Excela: kolone Konto, Naziv, Duguje, Potražuje ili Saldo, PIB, Objekat), ručno, ili se predloži iz podataka programa (roba po objektima, dug dobavljačima). Duguje mora biti jednako potražuje; razlika je kapital/rezultat ranijih godina.",\r
"Unosi ulazne fakture i pravi kalkulacije maloprodajnih cijena.",\r
"UP",\r
"Upamćeno {0} novih veza primalac→dobavljač za sljedeće izvode.",\r
"uparen",\r
"Uparen",\r
"Uparen kao",\r
"Uparena {0}{1}",\r
"Upareni uređaji se ne isključuju.",\r
"Upari",\r
"Upari novim kodom…",\r
"Uparivanje sa serverom",\r
"Uparivanje…",\r
"UPC-A",\r
"upis je u toku",\r
"Upis nije izvršen. Ista uplata već postoji u registru banke.",\r
"Upis obavještenja je poništen.",\r
"Upis objekta…",\r
"upis povrede (postupak se pokreće u roku od",\r
"Upis se vrši tek nakon potvrde.",\r
"Upis soba…",\r
"Upis u prijemni folder je prekinut.",\r
"upis u šifarnik",\r
"Upis u šifarnik",\r
"Upis u trgovačke knjige:",\r
"Upis uplate ili ručnog obračuna",\r
"upisan",\r
"Upisana",\r
"upisana — nova zamjenjuje staru",\r
"Upisana početna stanja",\r
"Upisani prestanci radnog odnosa",\r
"upisanih cijena",\r
"Upisanih cijena",\r
"upisano „Ukupno PDV\\" {0} nije zbir PDV-a po stopama {1}",\r
"Upisano {0} dana poslije računa ({1}). Rok: {2} (Pravilnik 34/12 čl. {3}).",\r
"Upisano {0} h: redovni {1}, prekovremeni {2}; dodaci: noćni {3} h, nedjelja {4} h, praznik {5} h.{6}",\r
"Upisano {0} zapisa.",\r
"Upisano cijena: {0}{1}{2}{3}.",\r
"Upisano gostiju: {0} od {1}.{2}",\r
"upisano greškom",\r
"Upisano je stanje drugog računara.",\r
"upisano polja: {0}",\r
"Upisano za ovaj mjesec",\r
"Upisano.",\r
"Upisao: {0} · {1}{2}{3}",\r
"Upisati odgovorno lice.",\r
"Upisati opštu cijenu ili cijenu mjesta, ili artikal označiti kao neaktivan.",\r
"Upisati ovu izmjenu sa računara na staroj verziji?\\n\\nIzmjena se šalje i ostalim računarima.",\r
"Upisati ovu promjenu u plate za: {0}?\\n\\nNaknada se obračunava umjesto redovnog rada za te dane, a stimulacija se za te dane ne obračunava. Mjesec koji je već isplaćen potrebno je prethodno zaključiti.\\n\\nOdustani: plate se ne mijenjaju (upis za pojedinačan mjesec je moguć u obračunu radnika).",\r
"Upisati povrat cijele robe kod primaoca?",\r
"Upiši",\r
"Upiši artikal",\r
"upiši datum prestanka na radnika (od narednog mjeseca ne ulazi u plate)",\r
"Upiši izjašnjenje (danas)",\r
"Upiši kao novu robu",\r
"Upiši kao žiro račun",\r
"Upiši obavještenje",\r
"Upiši podatke firme",\r
"Upiši povrat (kolona Povrat)",\r
"Upiši račun firme",\r
"Upiši rezervaciju",\r
"Upiši u objekat",\r
"Upiši u plan i napravi rješenje",\r
"Upiši u registar",\r
"Upišite cijenu noći.",\r
"Upišite datum praznika.",\r
"Upišite ime i prezime gosta.",\r
"Upišite ime nosioca rezervacije.",\r
"Upišite isti domen ovdje i sačuvajte. Sertifikat (https) server pravi sam pri prvom otvaranju — do 1 minut.",\r
"Upišite iznos avansa.",\r
"Upišite naziv objekta.",\r
"Upišite naziv praznika.",\r
"Upišite naziv svake vrste sobe.",\r
"Upišite opis usluge.",\r
"Upišite oznake soba.",\r
"Upišite razlog.",\r
"Upišite: {0}.",\r
"Upisivanje primljenih podataka…",\r
"Upisivanje…",\r
"Upisuje se broj veći ili jednak nuli.",\r
"Upisuje se DA ili NE.",\r
"Upisuje se na stavku takse bez PDV-a.",\r
"Upisuje se osnovna ili doplatna (prazno = lijek nije na listi).",\r
"Upisuje se otc ili rx.",\r
"Upit",\r
"Upit (ne zauzima sobu)",\r
"Upiti",\r
"Upiti, potvrđene, u objektu",\r
"UPL",\r
"Uplaćeni avans se vraća iz računa sobe (Vrati avans).",\r
"Uplaćeno",\r
"uplaćeno dobavljačima ovaj mjesec ({0} uplata)",\r
"uplaćeno dobavljačima ove sedmice ({0} uplata od {1})",\r
"uplaćeno opštini",\r
"Uplaćuje se na jedinstveni račun poreza i doprinosa {0}.",\r
"uplata",\r
"Uplata",\r
"UPLATA",\r
"Uplata {0} EUR je veća od gotovine pazara {1} EUR ({2}).{3} Da li uplata pokriva i ranije dane?",\r
"Uplata {0} EUR pokriva manje dana od izabranih (gotovina bez posljednjeg dana je već {1} EUR). Potrebno je izabrati manje pazara.",\r
"Uplata = gotovina ulazi u blagajnu (duguje 2430); isplata = gotovina izlazi (potražuje 2430). Protukonto: dobavljač 4330, trošak 5xxx, radnik 2210, žiro-račun 2410 (polog pazara se knjiži automatski sa izvoda).",\r
"Uplata avansa",\r
"Uplata avansa (izvod banke)",\r
"Uplata avansa i avansni račun",\r
"Uplata avansa i avansni račun u jednom koraku",\r
"Uplata je obrisana.",\r
"Uplata je upisana: {0} EUR, {1}",\r
"Uplata je upisana.",\r
"Uplata kupca",\r
"Uplata kupca (slobodan iznos)",\r
"Uplata ne može biti prije dana pazara.",\r
"Uplata ne postoji.",\r
"Uplata nije upisana (gotovina ≥ 10.000 €).",\r
"Uplata nije upisana. Iznos je potrebno ispraviti ili uplatu upisati posebno za svaki dan.",\r
"uplata nije vezana za fakturu",\r
"Uplata od {0} ({1} EUR) je vezana za {2}.",\r
"Uplata od {0} ne može biti za pazar od {1} (poslije uplate).",\r
"Uplata opštini",\r
"Uplata pazara",\r
"Uplata pazara (gotovina)",\r
"Uplata pazara {0}{1}",\r
"Uplata pazara sa izvoda ne postoji (ili nije vrste „pazar\\").",\r
"Uplata PDV-a",\r
"Uplata PDV-a {0}/{1} (iznos = PR-PDV polje 28)",\r
"Uplata poreza (konto potvrđen)",\r
"Uplata poreza i doprinosa {0}/{1} (u odnosu obaveza perioda)",\r
"Uplata poreza i doprinosa:",\r
"Uplata poreza i PIO:",\r
"Uplata poreza na dobit za {0} (iznos = PD prijava)",\r
"Uplata poreza:",\r
"Uplata pripada drugom kupcu.",\r
"Uplata prireza — {0}",\r
"Uplata prireza (",\r
"Uplata sa istim podacima već postoji{0} ({1}): {2}, {3}, {4} EUR, „{5}\\". Upisati kao novu uplatu?",\r
"Uplate",\r
"Uplate ovog kupca",\r
"Uplate pazara sa izvoda: {0} transakcija vrste „pazar\\", povezano {1} ({2} pazara).{3}{4}",\r
"Uplate poreza koje čekaju potvrdu konta (",\r
"Uplate poreza koje čekaju potvrdu konta: {0} ({1}), nijesu proknjižene",\r
"Uplate sa izvoda bez para (",\r
"Upotrijebljen",\r
"upozorenja ·",\r
"Upozorenja:\\n{0}{1}\\n\\nZaključiti knjigu uprkos upozorenjima?",\r
"Upozorenja: {0}",\r
"Upozorenja: {0} (spisak ispod).",\r
"upozorenje",\r
"Upozorenje",\r
"Upozorenje uručeno",\r
"Upozorenje: {0}",\r
"Upozorenje: {0} Kalkulacija je napravljena u tekućem mjesecu.",\r
"UPOZORENJE: gotovina ≥ 10.000 € (povezana plaćanja)",\r
"UPOZORENJE: gotovina ≥ 10.000 € (povezane uplate)",\r
"Upozorenje: kalkulacija je napravljena. {0}",\r
"Uprava",\r
"Uprava prihoda nije prihvatila račun: {0}",\r
"Upućen na banjsko ili klimatsko liječenje",\r
"Uputstvo:",\r
"urađen",\r
"Uradio",\r
"Uređaj",\r
"Uređaj „{0}\\" je isključen na serveru.",\r
"Uređaj „{0}\\" je već bio isključen.",\r
"Uređaj (međuzbir)",\r
"Uređaj je uparen kao „{0}\\" ({1}, PIB {2}). {3}{4}",\r
"Uređaj je uparen kao „{0}\\" ({1}, PIB {2}). Prva razmjena je u toku…",\r
"Uređaj je uparen za firmu",\r
"Uređaj je uparen za firmu „{0}\\" (PIB {1}), a otvorena je firma sa PIB-om {2}. Podaci nisu preuzeti.",\r
"Uređaj koji dugo nije slao pakete je ugašen, bez interneta ili nije povezan sa serverom. Isti računar se može pojaviti pod više oznaka; važi red sa najnovijim vremenom.",\r
"Uređaj nije uparen sa serverom (Povezivanje → Server).",\r
"Uređaj nije uparen sa serverom. Potrebno je upariti ga kodom (Povezivanje → Server).",\r
"Uređaj odmah gubi vezu sa serverom (izgubljen ili ukraden telefon, uređaj koji se više ne koristi).",\r
"uređaja",\r
"Uređaji firme",\r
"Uređaji koji razmjenjuju podatke ove firme",\r
"Uređaji Menadžera",\r
"Uređaji razmjenjuju",\r
"uredi",\r
"Uredi",\r
"Uređivanje liste radnih mjesta (dodavanje, preimenovanje, isključivanje)",\r
"Uredjaj",\r
"Uručenje je upisano.",\r
"uručenje pisanog upozorenja u roku od",\r
"Uručeno",\r
"usklađen sa UKUPNO",\r
"Uskladi registar",\r
"uslovi rada (smjene, nedjelje)",\r
"Uslovi rada (smjene)",\r
"uslovni prestanak radnog odnosa",\r
"Uslovni prestanak: nova teža povreda u",\r
"Usluga",\r
"USLUGA",\r
"Usluga je dodata na račun sobe.",\r
"Usluga stranog lica",\r
"Usluga stranog lica je upisana. PDV ide u PR-PDV polje 21.",\r
"Usluge",\r
"USLUGE",\r
"Usluge ({0}) ne mogu biti veće od ukupnog pazara ({1}). Usluge su dio dnevnog prometa.",\r
"Usluge sa kase IRIS CORVINA stižu automatski (artikli grupe „Usluge\\")",\r
"Usluge stranih lica",\r
"Usluge stranih lica — PDV obračunava primalac, PR-PDV polje 21",\r
"usluge stranih lica (Uvoz i ino usluge) + ručno",\r
"uto",\r
"Uto",\r
"utorak",\r
"Utorak",\r
"Utvrđena poreska obaveza (52 − 53 − 54 − 55 − 56)",\r
"Uvećanja",\r
"Uvećanja (radnih dana)",\r
"Uvećanja po Zakonu o radu / kolektivnom ugovoru: prekovremeni i noćni rad najmanje +40 %, rad na dan praznika +150 %, bolovanje 70 % (−30 %) od prosjeka osnovne zarade 12 mjeseci prije početka bolovanja. Minuli rad (šema gore) i stimulaciju za uklapanje program vodi sam.",\r
"Uvećanje",\r
"Uvećanje godišnjeg odmora — {0}",\r
"Uvećanje odmora za {0} je snimljeno.",\r
"Uvećanje za „{0}\\" je sada {1} %.",\r
"Uvesti {0} izvoda iz pošte?\\n\\nSvaka transakcija se evidentira jednom (duplikati se preskaču).{1}",\r
"Uvezen",\r
"Uvezen cjenovnik od {0}: {1} artikala ({2} novih), {3} opštih i {4} cijena objekta, {5} objekata ({6} novih), {7} kasa{8}. Povezano sa šifarnikom {9}; PDV stopa ispravljena prema fakturama za {10} artikala{11}. Artikle koji nisu povezani potrebno je provjeriti ručno (dugme ✎).",\r
"Uvezena baza",\r
"uvezena prodaja",\r
"Uvezena prodaja bez veze sa artiklom (",\r
"Uvezena prodaja iz „{0}\\": {1} redova po danu i artiklu{2}{3}{4}.",\r
"Uvezena prodaja je obrisana.",\r
"UVEZENA PRODAJA PO ARTIKLU PREMA PAZARU",\r
"Uvezena prodaja sa PDV",\r
"Uvezena prodaja za period {0}–{1} ({2}) se samo djelimično preklapa sa periodom fajla. Zamjena nije moguća; potrebno je obrisati taj uvoz ili uvesti fajl za isti period.",\r
"Uvezeni izvodi",\r
"Uvezeni izvodi iz pošte:",\r
"uvezeno",\r
"Uvezeno {0} EUR, pazar {1} EUR, razlika {2} EUR. Prodaja po artiklu iz fajla kase drugog proizvođača; trgovačka knjiga se razdužuje po pazaru.",\r
"Uvezeno {0} izvoda, {1} plaćanja proknjiženo ({2} EUR), {3} čeka pregled.",\r
"Uvezeno {0} pazara iz „{1}\\"{2}{3}.",\r
"Uvezeno {0} redova iz „{1}\\"{2}{3}.",\r
"Uvezeno redova:",\r
"Uvezeno redova: {0}{1}.",\r
"Uvezeno: {0}, {1} stavki, {2} EUR{3}{4}. Obrada se nastavlja, u redu: {5}.{6}",\r
"Uvezeno: {0}, {1} stavki, {2} EUR{3}{4}. Spremno za sljedeći QR kod.{5}",\r
"Uvezi",\r
"Uvezi {0} {1}",\r
"Uvezi {0} redova",\r
"Uvezi bazu (.knj.db)",\r
"Uvezi bazu artikala…",\r
"Uvezi cjenovnik",\r
"Uvezi iz Excela (bruto bilans)",\r
"Uvezi kao novu firmu",\r
"Uvezi red {0}",\r
"Uvezi šifarnik iz Excela…",\r
"Uvezi sve izvode",\r
"Uvezi uz potvrdu",\r
"Uvid u kasu",\r
"Uvid u kasu: {0} · {1}",\r
"Uvodi nove radnike u posao i prati njihov rad; predlaže nagrade i disciplinske mjere.",\r
"UVOZ",\r
"uvoz — PDV po carinskoj deklaraciji (polje 20)",\r
"Uvoz baze",\r
"Uvoz baze artikala — pregled",\r
"Uvoz baze artikala{0}",\r
"Uvoz i ino usluge",\r
"uvoz iz fajla",\r
"Uvoz iz fajla {0}{1}",\r
"Uvoz izvoda",\r
"Uvoz izvoda iz banke",\r
"Uvoz izvoda iz pošte u Banku…",\r
"Uvoz izvoda u Banku…",\r
"Uvoz je poništen. Vraćeno stavki: {0}{1}.",\r
"Uvoz je upisan",\r
"Uvoz je upisan ({0}). Rezervna kopija prije uvoza: {1}",\r
"Uvoz je završen: {0} izvoda ({1} već ranije uvezenih), {2} novih transakcija, {3} duplikata preskočeno, {4} plaćanja proknjiženo ({5} EUR), {6} čeka pregled, {7} preskočeno, {8} grešaka.{9}",\r
"Uvoz lager liste (Excel/CSV)",\r
"Uvoz lager liste u početno stanje (CSV / Excel)",\r
"Uvoz ne postoji.",\r
"Uvoz nije uspio: {0}",\r
"Uvoz pazara",\r
"Uvoz pazara iz fajla (CSV / Excel)",\r
"Uvoz probnih smjena je uključen. Probne smjene kase koje još nisu pazari (",\r
"Uvoz prodaje iz fajla (Excel/CSV)",\r
"Uvoz prodaje po artiklu (CSV / Excel)",\r
"Uvoz robe",\r
"Uvoz sadrži prodaju zaključanog mjeseca {0}/{1}. Brisanje nije moguće.",\r
"Uvoz šifarnika",\r
"Uvoz šifarnika iz Excela — pregled",\r
"Uvoz šifarnika, poništavanje uvoza i povezivanje prodajnih mjesta rade se na glavnom računaru firme.",\r
"Uvoz svih izvoda iz pošte",\r
"Uvoz svih izvoda iz pošte za cijelu godinu",\r
"Uvoz…",\r
"uvozi i probne smjene (za probu — računi iz probnog režima nisu fiskalni)",\r
"uvozi se",\r
"uvozu (period fajla)",\r
"Uz cijenu je obavezno prodajno mjesto.",\r
"Uz neto količinu je obavezna jedinica mjere neto količine.",\r
"uz smjenu = pomoćni radnik.",\r
"Uzet je cio raspored (nijedna sedmica nije potvrđena).",\r
"Uzete su samo potvrđene sedmice; nepotvrđenih {0} nije ušlo.",\r
"V — majstorski ispit / viša kvalifikacija (VKV)",\r
"V. REZULTAT PRIJE OPOREZIVANJA (242+243)",\r
"V. STALNA SREDSTVA NAMIJENJENA PRODAJI I SREDSTVA POSLOVANJA KOJE JE OBUSTAVLJENO",\r
"V. Usklađivanje prihoda",\r
"v.Iznos AS Vezano,",\r
"vaga / interni",\r
"Valuta",\r
"Valuta (rok)",\r
"Van fajla (nije dirano): artikala",\r
"Van fiskalnog računa (poseban red na štampi)",\r
"Van upotrebe",\r
"van veze",\r
"VANBILANSNA AKTIVA",\r
"VANBILANSNA EVIDENCIJA",\r
"VANBILANSNA PASIVA",\r
"VAT",\r
"Važi do",\r
"važi do {0}",\r
"Važi kada cjenovnik nema period za taj dan.",\r
"Važi od",\r
"Važi od (prazno = odmah)",\r
"Važi stanje glavnog računara.",\r
"Važi stanje ovog računara. Šalje se ostalim računarima.",\r
"Važi za označene redove u kojima je dato samo ukupno sa PDV; osnovica i PDV se izračunavaju po izabranoj stopi. Bez izbora takvi redovi ostaju neoznačeni.",\r
"važno",\r
"Veb",\r
"Već dodato",\r
"Već evidentirano iz ranijeg izvoda: {0} (preskaču se).",\r
"Već je evidentirano iz drugog izvoda",\r
"već postojalo {0}",\r
"već postoji",\r
"već prebrojano:",\r
"već proknjiženo iz ranijeg izvoda",\r
"već u smjeni „{0}\\" ({1})",\r
"već uneseno",\r
"već uvezen",\r
"već uvezen (isti objekat, datum, Z broj i kasa)",\r
"već uvezen ranije",\r
"već uvezeno",\r
"Vegan",\r
"Vegetarijansko",\r
"veleprodaja",\r
"Veleprodaja",\r
"Veleprodaja: nabavna vrijednost prodate robe (razduženje)",\r
"Veleprodaja: prihod od prodaje robe na veliko (fakture i pazar objekta)",\r
"Veleprodaja: razlika u centima između kalkulacije i fakture",\r
"Veleprodaja: roba po veleprodajnoj cijeni bez PDV (kalkulacija duguje, prodaja potražuje)",\r
"Veleprodaja: ukalkulisana razlika u cijeni",\r
"veleprodajna bez PDV",\r
"Veličina baze",\r
"Veličina: {0}",\r
"veliki popust",\r
"veliko",\r
"VEO",\r
"Verzija",\r
"Verzija {0} je već primijenjena ili je starija od instalirane.",\r
"Verzija {0} nije radila ({1}), pa je program vraćen na prethodnu verziju. Podaci nisu dirani.",\r
"verzija {0} se {1} puta zaredom nije pokrenula",\r
"Verzija {0} se ne pokreće ({1}).",\r
"Verzija {0} se ne preuzima automatski jer je vraćena prethodna verzija. Preuzimanje je moguće ručno („Provjeri sada\\").",\r
"Verzija {0} se nije pokrenula ({1}).",\r
"Verzija {0} se primjenjuje pri sljedećem pokretanju programa.{1}",\r
"verzija {0}: {1}",\r
"Verzija fajla baze artikala ({0}) nije podržana.",\r
"Verzija i ažuriranje",\r
"verzija kase",\r
"Verzija koja radi",\r
"Verzija programa",\r
"Verzija, licenca i dijelovi programa za otvorenu firmu.",\r
"veza",\r
"Veza",\r
"Veza artikla {0} sa izvještajem CInMED je uklonjena. Upisane cijene ostaju.",\r
"Veza firme",\r
"Veza je prekinuta usred odgovora (stiglo {0} od {1} bajtova).",\r
"Veza je prekinuta usred odgovora.",\r
"Veza je prekinuta:",\r
"veza je uklonjena poslije izvoza",\r
"Veza je uklonjena.",\r
"Veza je zajednička i za: {0}. Isključuje se i za te firme.",\r
"veza kase sa serverom",\r
"Veza prodajnog mjesta „{0}\\" sa objektom ne postoji na glavnom računaru.",\r
"Veza sa aplikacijom Menadžer",\r
"Veza sa fiskalnim servisom: {0}",\r
"Veza sa serverom IRIS CORVINA (klik za detalje)",\r
"Veza sa serverom je dostupna u instaliranom programu (Windows ili Android), a ne u web verziji.",\r
"Veza sa serverom je isključena.",\r
"Veza sa serverom je ponovo uspostavljena.",\r
"Veza sa serverom nije dostupna. Pokušava se ponovo.",\r
"Veza sa serverom nije podešena.",\r
"Veza sa serverom postoji samo u instaliranom programu. Kase se vode lokalno.",\r
"Veza sa serverom postoji samo u instaliranom programu. Menadžer se povezuje fajlom baze.",\r
"Veza sa SMTP serverom nije uspostavljena.",\r
"Vezana plaćanja",\r
"Vezane uplate",\r
"Vezano nazad {0} obrisanih artikala (novih {1}), obrisano mrtvih veza šifre {2}",\r
"Vezano za {0} stavki ({1} EUR), zatvoreno faktura: {2}.",\r
"Veže šifru koju dobavljač koristi za ovaj artikal. Pri uvozu fakture sistem po njoj sigurno prepozna artikal (umjesto po nazivu). Puni se automatski pri uvozu.",\r
"Veži",\r
"Veži plaćanje ručno",\r
"Vezni dok.",\r
"VI — osnovne studije 180 ECTS (VŠS)",\r
"VI. BRUTO REZULTAT DRUGIH STAVKI REZULTATA (250 do 257)",\r
"VI. Korekcija prihoda po osnovu transfernih cijena",\r
"VI. NERASPOREĐENI DOBITAK ILI GUBITAK (112+113-114-115)",\r
"vidjeti račune grupe 41 (dugoročne obaveze).",\r
"VII-1 — osnovne/specijalističke studije 240 ECTS (VSS)",\r
"VII-2 — master",\r
"VII. ODLOŽENI PORESKI RASHODI ILI PRIHODI PERIODA U VEZI SA DRUGIM STAVKAMA REZULTATA",\r
"VII. Ostale korekcije",\r
"VIII — doktorat",\r
"VIII. NETO REZULTAT DRUGIH STAVKI REZULTATA (249+258)",\r
"VIII. Oporeziva dobit",\r
"VIII. UČEŠĆE KOJE NE OBEZBJEĐUJE KONTROLU",\r
"vikend",\r
"virman",\r
"Virman",\r
"VIRMAN",\r
"virman {0}",\r
"Virman sa kase — {0}",\r
"Visak",\r
"višak",\r
"Višak iznad neoporezivog je „drugo primanje\\": porez 15 %, doprinosi po vrsti, poseban red u IOPPD prijavi",\r
"Višak iznad neoporezivog: šifra osnova u IOPPD (013 dnevnice, 015 terenski, 017 pomoći, 018–020 otpremnine, 024 jubilarna…) i doprinosi (ne plaćaju se na otpremnine, pomoći, jubilarne, odvojeni život, novorođeno dijete — ZDOSO čl. 18a)",\r
"Višak po popisu (popis {0} vs knjige {1})",\r
"Višak robe po popisu (nabavna)",\r
"višak: IOPPD",\r
"Više",\r
"Više artikala ima ovaj barkod. Artikal se bira u spisku.",\r
"Više kasa",\r
"Više načina plaćanja · virman · napomena…",\r
"Više nego što je orijentaciono na zalihi izvora",\r
"Više plaćeno",\r
"Više plaćeno (EUR)",\r
"više radnika nego izvršilaca: {0}",\r
"više radnika nosi ovo mjesto nego što je izvršilaca — popuna će uskladiti",\r
"Više radnji",\r
"Viškovi",\r
"Viškovi materijala",\r
"Viškovi materijala i robe",\r
"Viškovi robe",\r
"Viškovi zaliha učinaka",\r
"Viza",\r
"Viza važi do",\r
"vjerovatni duplikat",\r
"vjerski — firma ne radi (neradni za sve)",\r
"vjerski — neradni za sve",\r
"vjerski — odsustvo po zahtjevu",\r
"vjerski — radni dan; plaćeno odsustvo po zahtjevu",\r
"vjerski (odsustvo po zahtjevu)",\r
"Vjerski praznici",\r
"vjerski praznik",\r
"Vjerski praznik — plaćeno odsustvo (po zahtjevu)",\r
"Vjerski praznik je radni dan za sve.",\r
"VKV — visokokvalifikovan (V)",\r
"Voće",\r
"Voda",\r
"Vodi disciplinske postupke i izriče mjere u skladu sa zakonom.",\r
"Vodi evidenciju otpisa, prenosa robe između objekata i popisa.",\r
"Vodi evidenciju povratne ambalaže i reklamacija prema dobavljačima.",\r
"Vodi kadrovsku evidenciju: ugovori o radu, prijave i odjave osiguranja, rješenja o odmorima i odsustvima.",\r
"Vodi prepisku sa bankama, Poreskom upravom, Fondom PIO i Zavodom za zapošljavanje.",\r
"Vodi računa o zalihama sredstava za čišćenje i prijavljuje potrebe.",\r
"VOGUE",\r
"Vozač — dostavljač",\r
"Vozačka dozvola B kategorije; ljekarsko uvjerenje.",\r
"Vozačka dozvola B kategorije; rad na računaru; komunikativnost.",\r
"VP",\r
"Vraća se gostu",\r
"Vraćanje dokumenta u važenje (samo oznaka; prestanak radnika se ne upisuje ponovo)",\r
"Vraćanje kopije nije uspjelo: {0}",\r
"Vraćanje objekta na zajedničke smjene iz šifarnika",\r
"Vraćanje na današnji datum",\r
"Vraćanje na verziju {0} nije moguće. Baza podataka je već prilagođena verziji {1}, a starije verzije je ne mogu bezbjedno koristiti.",\r
"Vraćanje prethodne verzije",\r
"Vraćanje u neobrađeno",\r
"Vraćanje u neradni praznik",\r
"Vraćanje u radni dan za sve (odsustvo samo po zahtjevu)",\r
"Vraćen je šablon iz podataka (nije snimljen).",\r
"Vraćen obrisan račun naplaćen uz popust: dio iznosa koji nije naplaćen (Kasa 1.3.1+)",\r
"vraćen obrisani",\r
"Vraćena je verzija {0}. Primjenjuje se pri sljedećem pokretanju programa.",\r
"Vraćena pozajmica",\r
"Vraćenih",\r
"Vraceno",\r
"vraćeno",\r
"Vraćeno",\r
"Vraćeno na: {0}. Važi od ponovnog pokretanja programa.",\r
"Vraćeno stavki: {0}{1}.{2}",\r
"vrati",\r
"Vrati",\r
"Vrati avans",\r
"vrati na automatski",\r
"Vrati prethodnu verziju",\r
"Vrati sačuvano",\r
"Vrati u upotrebu",\r
"Vrati ugrađena pravila",\r
"Vratiti verziju {0}? Podaci ostaju sačuvani. Promjena važi od ponovnog pokretanja programa.",\r
"Vrijednost",\r
"Vrijednost (EUR)",\r
"Vrijednost (MPC)",\r
"Vrijednost (nab.)",\r
"Vrijednost (nabavna)",\r
"Vrijednost {0} € bez PDV-a nije veća od {1} €, pa nije osnovno sredstvo (Pravilnik o amortizaciji, čl. 2). Upis je moguć kao trošak.",\r
"Vrijednost bez PDV",\r
"Vrijednost isporuke: bez PDV",\r
"Vrijednost je veća od {0} €. Oprema sa vijekom trajanja dužim od godine je osnovno sredstvo, ne trošak (Pravilnik o amortizaciji, čl. 2).\\n\\nIpak upisati kao trošak?",\r
"Vrijednost po MPC",\r
"Vrijednost razlike",\r
"Vrijednost robe (EUR)",\r
"Vrijednost sa PDV",\r
"Vrijeme",\r
"Vrijeme „važi od\\" nije ispravno (oblik GGGG-MM-DD HH:MM).",\r
"Vrijeme dolaska se upisuje sada; od njega teče rok za prijavu gostiju.",\r
"Vrijeme na računaru se razlikuje od vremena Poreske više od dozvoljenog (6 sati) ili je u budućnosti. Potrebno je podesiti tačan datum i vrijeme u Windowsu.",\r
"Vrsta",\r
"Vrsta (dobavljač, kupac, pazar, POS, plate, porez, naknada banke, režije, zakup) se određuje na ekranu „Banka\\", nakon čega je potrebno ponovo proknjižiti mjesec.",\r
"Vrsta broja",\r
"Vrsta broja kupca: TIN, VAT, ID ili PASS.",\r
"Vrsta cijene",\r
"vrsta dokumenta",\r
"Vrsta identifikacije mora biti TIN (PIB/JMB).",\r
"Vrsta isprave",\r
"Vrsta kioska",\r
"Vrsta kioska nije izabrana (čl. 35b st. 3).",\r
"Vrsta mjesta se bira sa spiska (list „Šifarnici\\").",\r
"Vrsta naloga",\r
"Vrsta objekta",\r
"Vrsta objekta: maloprodaja ili veleprodaja.",\r
"Vrsta obračuna",\r
"Vrsta posla",\r
"Vrsta primanja 901 (razlika minulog rada) ne postoji.",\r
"Vrsta primanja IQOS (913) ne postoji.",\r
"vrsta se bira",\r
"Vrsta slike nije ispravna.",\r
"Vrsta sobe",\r
"Vrsta tijela zahtjeva nije podržana.",\r
"Vrsta trgovine",\r
"Vrsta troška",\r
"Vrsta ugovora",\r
"Vrsta vize",\r
"Vrsta zahtjeva",\r
"vrsta zapisa koju ova verzija ne poznaje — primijeniće se poslije ažuriranja",\r
"vrsta zarade",\r
"Vrsta zarade",\r
"Vrsta zarade {0} {1}",\r
"Vrste primanja",\r
"Vrste soba",\r
"vrsti robe",\r
"VŠS — viša stručna sprema (VI)",\r
"VSS — visoka stručna sprema (VII)",\r
"WALTER WOLF",\r
"warn",\r
"web",\r
"Web verzija (iPhone) nema vezu sa serverom. Veza je dostupna u instaliranom programu (Windows i Android).",\r
"Web verzija nema folder za razmjenu. Snimak se učitava iz fajla.",\r
"WEBP",\r
"WEST",\r
"WHERE -x.K=?",\r
"WHERE {0}",\r
"WHERE a.Aktivna=1",\r
"WHERE Aktivan=1",\r
"WHERE Aktivna=1",\r
"WHERE Aktivno=1",\r
"WHERE d.KasaSifra=?",\r
"WHERE DobavljacID=?",\r
"WHERE i.KasaSifra=?",\r
"WHERE m.Aktivan=1",\r
"WHERE o.Tip='OS'",\r
"WHERE p.DatumPazara=?",\r
"WHERE p.DobavljacID=?",\r
"WHERE p.KupacID=?",\r
"WHERE p.MarketID=?",\r
"WHERE pa.MarketID=?",\r
"WHERE ps.DobavljacID=?",\r
"WHERE r.Aktivan=1",\r
"WHERE r.Godina=?",\r
"WHERE s.Status='otvoren'",\r
"WHERE u.MarketID=?",\r
"WHERE z.Stanje='ceka'",\r
"Windows",\r
"WINSTON",\r
"X-Unsent: 1",\r
"X. ZARADA PO AKCIJI",\r
"XI. NETO REZULTAT KOJI PRIPADA VLASNICIMA MATIČNOG PRAVNOG LICA",\r
"XII. NETO REZULTAT KOJI PRIPADA UČEŠĆIMA KOJI NE OBEZBJEĐUJU KONTROLU",\r
"XML fajl za uvoz na portal Poreske uprave (e-prijava → IOPPD → uvoz XML datoteke)",\r
"XML za portal (PortalVatReturn2025). Šema nije objavljena: prvo učitavanje na IRMS je potrebno izvršiti kao nacrt i provjeriti.",\r
"XXXX-XXXX-XXXX",\r
"YORK",\r
"Z",\r
"Z {0} ne nastavlja Z brojeve ovog objekta ({1}). Potrebna je provjera prema izvještaju; za drugu kasu sa posebnim brojačem broj je ispravan.",\r
"Z br.",\r
"Z broj",\r
"Z broj (redni broj fiskalnog dana) ide u KIF kao broj računa maloprodaje i raste za 1 po danu rada kase. Ovdje su pazari bez Z broja, pazari čiji Z ne nastavlja Z brojeve objekta (najčešće pogrešno pročitan sa skena) i mjesta gdje između dva izvještaja nedostaje dnevni izvještaj. Red se ispravlja ručno prema papirnom izvještaju; program brojeve ne mijenja automatski.",\r
"Z broj nije upisan (u KIF-u: „Z-0000\\"). Potrebno je upisati Z broj sa izvještaja{0}.",\r
"Z brojevi su u redu.",\r
"Z izvještaj, uvoz iz fajla",\r
"Z-broj (redni broj fiskalnog dana) nije pročitan. Potreban je ručni upis.",\r
"Z-broj: OCR prolazi se ne slažu ({0}). Potrebna je provjera.",\r
"Z-izvještaj zatvorene smjene",\r
"Z-izvještaji iz objekta — unos pazara",\r
"za",\r
"Za",\r
"Za {0}\\n\\n__________________________",\r
"za {0} {1} već postoji {2}; red se označava samo za drugu kasu",\r
"Za {0} {1} već postoji obračun sa podacima. Premještanje je moguće tek kad se taj obračun premjesti ili isprazni.",\r
"Za {0} je upisan presjek stanja (dio dnevnog prometa):\\n\\n{1}\\n\\nZ izvještaj zamjenjuje presjek. Snimiti Z izvještaj i ukloniti presjek tog dana?",\r
"za {0}.",\r
"za {0}. godinu",\r
"Za {0}. godinu nema kalkulacija.",\r
"Za {0}. nema razlike minulog rada{1}.",\r
"za {0}.{1}.",\r
"za cipele; za grudi",\r
"Za čišćenje",\r
"Za firme čija kasa nije IRIS CORVINA: tabela Z izvještaja,",\r
"Za firmu koja je i ranije poslovala: salda konta na dan početka rada (bruto bilans iz Excela) unose se u Finansije → Početno stanje; početno stanje robe po objektu u Trgovačka knjiga.",\r
"Za godišnji popis osnovnih sredstava — inventurni broj, lokacija, barkod, nabavna i sadašnja vrijednost. Ova polja se unose na kartici „Nabavka i troškovi\\" (kad je Tip = Osnovno sredstvo).",\r
"Za happy hour su obavezni i sat „od\\" i sat „do\\".",\r
"Za instalaciju je potrebno odobriti instaliranje iz ovog programa (podešavanja telefona → Instaliranje nepoznatih aplikacija), zatim ponovo izabrati „Instaliraj sada\\".",\r
"Za isplatu",\r
"ZA ISPLATU",\r
"Za isplatu — {0}",\r
"Za isplatu radnicima",\r
"Za izabrane objekte i period nova marža se upisuje dugmetom „Promijeni maržu\\"; prodajne cijene svih kalkulacija izbora se preračunavaju (prodajna = neto nabavna × (1 + marža)).",\r
"Za izabrane redove bez razdvojenog PDV-a stopa PDV-a (21, 15, 7 ili 0 %) je obavezna. Bez stope ti redovi se isključuju iz uvoza.",\r
"Za izabrani mjesec nema FZO recepata sa kasa.",\r
"Za izabranog radnika nema obračuna u ovom mjesecu. Potrebno je prethodno obračunati radnika.",\r
"Za kasu {0} ({1}) postoji neiskorišćen kod za uparivanje. Novi kod ga poništava. Nastaviti?",\r
"Za kasu {0} nema važećeg neiskorišćenog koda.",\r
"Za kiosk „{0}\\" nije izabran matični objekat.",\r
"Za knjiženje je obavezna prodajna cijena (bez PDV) na svakoj stavci. Nedostaje kod: {0}{1} (kolona „Prod. cijena\\").",\r
"Za lakšu povredu izriče se opomena ili novčana kazna do {0} % mjesečne zarade ostvarene u mjesecu izricanja, u trajanju od {1} do {2} mjeseca. Za težu povredu izriče se novčana kazna od {3} do {4} % mjesečne zarade u trajanju od {5} do {6} mjeseca, uslovni prestanak radnog odnosa (radni odnos prestaje ako zaposleni u roku od {7} mjeseci učini novu težu povredu) ili prestanak radnog odnosa ({8}). Pri izricanju mjere cijene se težina i posljedice povrede, stepen odgovornosti, raniji rad i ponašanje, ranije izrečene mjere i druge okolnosti ({9}). Treća lakša povreda u 12 mjeseci cijeni se kao otežavajuća okolnost.",\r
"Za lakšu povredu izriče se opomena ili novčana kazna do {0} % mjesečne zarade u trajanju od {1} do {2} mjeseca; za težu povredu novčana kazna od {3} do {4} % mjesečne zarade u trajanju od {5} do {6} mjeseca, uslovni prestanak radnog odnosa ili prestanak radnog odnosa ({7}). Mjera se izriče po postupku iz {8} u kome Zaposleni ima pravo da se pisano i usmeno izjasni. Zaposleni odgovara za štetu koju na radu ili u vezi sa radom prouzrokuje Poslodavcu namjerno ili krajnjom nepažnjom; postojanje i visinu štete utvrđuje komisija Poslodavca ({9}). Zarada se može uskratiti samo po sprovedenom postupku, na osnovu sudske odluke ili uz pristanak Zaposlenog ({10}).",\r
"Za lakšu povredu kazna traje {0}–{1} mjeseca ({2}).",\r
"Za lakšu povredu novčana kazna je do {0} % mjesečne zarade ({1}).",\r
"Za lakšu povredu zakon dozvoljava samo opomenu ili novčanu kaznu do {0} % zarade ({1}).",\r
"Za lijek sa doplatne liste potrebno je upisati dio koji plaća pacijent.",\r
"Za mjesec",\r
"Za mjesto „{0}\\" nije izabran objekat.",\r
"Za naplatu: {0} EUR",\r
"za novi artikal naziv je obavezan",\r
"Za objekat {0} u periodu {1}–{2} već postoji uvezena prodaja ({3}). Uvoz zamjenjuje dane tog perioda; potrebna je potvrda zamjene.",\r
"Za objekat {0} već postoji početno stanje od {1}. Objekat ima jedno početno stanje.",\r
"Za objekat bez kase IRIS: izvještaj prodaje po artiklu (Excel/CSV) ulazi u lager i karticu artikla. Trgovačka knjiga se ne mijenja — razduženje ostaje po pazaru. Redovi bez veze sa artiklom ostaju vidljivi dok se ne povežu; kontrola ispod poredi uvezenu prodaju sa PDV sa pazarom objekta.",\r
"za objekat i dan postoji prodaja po artiklu sa kase IRIS; red se ne uvozi",\r
"Za obračun su potrebna dva zaključena popisa cijelog objekta (ili početno stanje i popis).",\r
"Za obračun su potrebna dva zaključena popisa cijelog objekta.",\r
"Za opštinu {0} iznos takse je {1} EUR.",\r
"Za osnovu „Datum prijema\\": datum knjiženja se postavlja na posljednji dan mjeseca svim računima tog i ranijih mjeseci koji nijesu proknjiženi u zaključanoj knjizi. Namijenjeno računima koji su primljeni u tom mjesecu, a zavedeni kasnije.",\r
"Za ovaj dan u sedmici nije definisana nijedna smjena („Radno vrijeme objekta\\" → dani).",\r
"Za ovaj objekat i datum je upisan presjek stanja (dio dnevnog prometa):\\n\\n{0}\\n\\nDnevni (Z) izvještaj zamjenjuje presjek. Snimiti pazar i ukloniti presjek?",\r
"Za ovaj objekat i datum već postoji pazar:\\n\\n{0}\\n\\nSnimiti kao drugi pazar istog dana (druga kasa)?\\n\\nU redu: snima se drugi pazar.\\nOdustani: bez snimanja (isti dnevni izvještaj se ne unosi ponovo).",\r
"Za ovaj objekat nema prodaje po artiklu (nema zaključaka IRIS kase ni uvezene prodaje), pa je „stanje\\" samo ulazi ± prenosi − otpis − fakture. To nije stvarno stanje robe. Prodaja po artiklu iz fajla kase drugog proizvođača: kartica „Prodaja po artiklu (uvoz)\\"; procjena iz dva popisa: „Prodaja po popisu\\".",\r
"Za ovaj mjesec nema IQOS obračuna. Unos: „Unesi IQOS iznose\\".",\r
"Za ovaj mjesec nema obračuna. Obračun se pokreće dugmetom „Obračunaj sve\\".",\r
"Za ovaj mjesec nema rasporeda smjena. Raspored se pravi na ekranu „Smjene radnika\\".",\r
"Za ovaj račun je već izdat korektivni račun {0}.",\r
"Za ovaj račun kalkulacija već postoji.",\r
"Za ovu promjenu stare vrijednosti više nisu sačuvane (čuva se samo posljednjih {0} promjena).",\r
"za period 01.01.–31.12.{0}.",\r
"za period od 01.01.{0}. do 31.12.{1}. · u EUR",\r
"Za plaćanje",\r
"Za pokriće (r.br. 40)",\r
"za pregled:",\r
"Za prenos su potrebna najmanje dva objekta (Podešavanja → Objekti).",\r
"Za preskočene brojeve nije obavezna (dovoljna je napomena iznad); potrebna je za iste brojeve na više kalkulacija i brojeve sa „~\\". Postavlja niz na 1, 2, 3… bez preskoka — i za firmu i za svaki objekat. Datum u broju dokumenta ostaje isti.",\r
"Za prijavu nedostaje: {0}.",\r
"Za prijedlog je potrebno uvesti izvještaj CInMED.",\r
"za primljene proizvode i usluge · {0}",\r
"za probu prije produkcije",\r
"Za promet koji nije stigao kroz izvod (šalterska uplata, izvod koji nije čitljiv). Transakcija ide u registar banke sa svojim otiskom: kad kasnije stigne pravi izvod, ista se prepozna kao duplikat. Plaćanje dobavljaču/naplata od kupca se knjiže kao i sa izvoda (dugme „Proknjiži\\" u Transakcijama), a glavna knjiga je uzima po vrsti.",\r
"Za račun fiskalizovan drugim programom ovdje se upisuju podaci koje je vratila Poreska uprava. Knjiga izlaznih računa tako ostaje potpuna, a na PDF-u se štampaju IIC i FIK.",\r
"Za račune bez fiskalnog QR koda (inostrani dobavljač, papirni račun, račun koji Poreska više ne vraća). Kalkulacija dobija redovan broj i ulazi u sve knjige kao i skenirana. Dobavljač se bira iz šifarnika ili upisuje (PIB pravi novog).",\r
"Za radnika je u tom periodu već upisano odsustvo „{0}\\" {1} – {2}. Potrebno je izmijeniti postojeće odsustvo (produžiti ili skratiti) ili upisati novo od dana poslije njega.",\r
"Za refundaciju",\r
"za slanje obrazaca",\r
"Za sniženje (akcijska cijena ili popust u %) obavezan je period akcije: datum „od\\" i datum „do\\".",\r
"Za šta (ulazi u obrazloženje rješenja)",\r
"Za stranog kupca: troslovna oznaka države (SRB, DEU…) — ide u fiskalni račun",\r
"Za svaki objekat iz fajla potrebno je izabrati objekat firme; izbor se pamti za sljedeći uvoz.",\r
"Za svaki objekat se bira objekat ove firme (prepoznati su već izabrani), „nov objekat\\" ili „preskoči\\". Kase objekta idu uz izabrani objekat; postojeće kase se ne pomjeraju.",\r
"Za svaki zaključen obračun: minuli rad koji je isplaćen i koliko pripada po šemi koja sada važi za taj mjesec (na istu osnovicu). Zaključeni obračuni se ne mijenjaju — razlika se isplaćuje kroz otvoren obračun kao posebna oporeziva vrsta „",\r
"Za svaki: novi artikal (naziv, JM, barkod i stopa iz fajla) ili veza sa postojećim artiklom. Veza se pamti za sljedeći uvoz.",\r
"za svaku navršenu godinu ukupnog radnog staža, po stopi razreda u kom je ukupan staž: do {0} godina {1} %, od {2} do {3} godina {4} %, preko {5} godina {6} % ({7})",\r
"za svaku navršenu godinu ukupnog radnog staža: {0} % za godine do {1}., {2} % za godine od {3}. do {4}. i {5} % za svaku godinu preko {6}. — procenti se sabiraju ({7})",\r
"Za sve bez pojedinačne odluke:",\r
"za taj dan je upisan presjek stanja ({0}); ovaj Z izvještaj ga zamjenjuje nakon snimanja",\r
"Za taj dan je već upisan presjek stanja ({0}).\\n\\nZamijeniti ga ovim presjekom?",\r
"Za taj dan nema pazara.",\r
"za taj dan već postoji drugi pazar ({0}); potrebna je provjera datuma ili druge kase",\r
"Za taj objekat i datum već postoji pazar ({0}).\\n\\nPresjek je dio dnevnog prometa i ne snima se ako je dnevni izvještaj već upisan.\\n\\nU redu: presjek se snima.\\nOdustani: bez snimanja.",\r
"Za taj objekat nema aktivnih smjena. Smjene se unose na kartici „Šifarnik smjena\\".",\r
"Za taj period nema otvorenog obračuna. Upis se nudi kad se obračun otvori (traka u obračunu radnika).",\r
"Za težu povredu kazna traje {0}–{1} mjeseca ({2}).",\r
"Za težu povredu novčana kazna je {0}–{1} % mjesečne zarade ({2}).",\r
"Za težu povredu zakon predviđa novčanu kaznu {0}–{1} %, uslovni prestanak ili prestanak radnog odnosa, a ne opomenu ({2}).",\r
"Za tog radnika u ovom obračunu nema naknade koja se refundira.",\r
"Za upis:",\r
"ZA UPLATU",\r
"Za uplatu je izdat avansni račun. Uplata se ne briše dok avansni račun postoji.",\r
"Za vrijeme godišnjeg odmora zaposlenom pripada naknada zarade u visini zarade koju bi ostvario da radi ({0}). Zaposleni kome radni odnos prestaje, a nije iskoristio godišnji odmor, ima pravo na naknadu štete prema prosječnoj zaradi ostvarenoj kod Poslodavca u godini u kojoj je pravo stečeno, srazmjerno neiskorišćenim danima ({1}); Poslodavac je dužan da mu omogući korišćenje odmora prije prestanka kad god je to moguće.",\r
"Za vrijeme manifestacije",\r
"Za zasnivanje radnog odnosa na svakom radnom mjestu zaposleni mora ispunjavati opšte uslove propisane zakonom (navršenih 15 godina života i opšta zdravstvena sposobnost), a za radna mjesta na kojima se rukuje namirnicama i sanitarno-zdravstvene uslove propisane za lica koja rade u prometu hrane (sanitarni pregled). Zaposleni se prije stupanja na rad osposobljava za bezbjedan rad u skladu sa propisima o zaštiti i zdravlju na radu. Za radna mjesta sa materijalnom odgovornošću (novac, roba) ugovorom o radu utvrđuje se obaveza čuvanja povjerenih sredstava i naknade štete.",\r
"za znanje",\r
"za znanje — rokovi po",\r
"Žabljak",\r
"Zabrana konkurencije: s obzirom na to da Zaposleni na radnom mjestu dolazi do važnih poslovnih informacija i širokog kruga poslovnih partnera, obavezuje se da za vrijeme trajanja radnog odnosa, na teritoriji {0}, neće u svoje ili tuđe ime obavljati poslove iz djelatnosti Poslodavca niti raditi za konkurentskog poslodavca bez pisane saglasnosti Poslodavca; kršenje je razlog za otkaz i naknadu štete ({1}). Zabrana poslije prestanka radnog odnosa može se ugovoriti samo posebnim sporazumom uz novčanu naknadu, najduže dvije godine.",\r
"Začini u originalu i čajevi",\r
"Zadaci",\r
"Zadao",\r
"Zadatak",\r
"Zadatak „{0}\\" ({1})",\r
"Zadnja greška: {0}",\r
"zadnja kalkulacija",\r
"Zadnja kopija:",\r
"Zadnja marža %",\r
"Zadnja nabavka",\r
"Zadnja nabavna (neto)",\r
"Zadnja prodajna sa PDV",\r
"zadnja provjera pošte:",\r
"Zadnja razmjena",\r
"Zadnje ažuriranje",\r
"Zadnje slanje",\r
"Zadnje uneseno",\r
"Zadnji",\r
"zadnji broj u redu",\r
"Zadnji dobavljač",\r
"zadnji izvod u registru",\r
"Zadnji kontakt",\r
"Zadnji račun",\r
"Zadnji računi",\r
"Zadnji zaključak",\r
"Zadnji zaključak smjene",\r
"zadnjih {0} dana",\r
"Zadnjih dana",\r
"Zadržani avans se obračunava kao naknada za otkaz.",\r
"Zadržani dio je naknada za otkaz",\r
"Zadrži",\r
"Zadrži moju",\r
"Zadrži postojeći",\r
"zaduženje",\r
"Zaduženje",\r
"Zaduženje (EUR)",\r
"zaduženje i razduženje",\r
"Zaduženje obaveze (faktura)",\r
"Zaduženje robe u maloprodaji iz ulaza (kalkulacija).",\r
"Zaduženje: PS + kalkulacije (prodajna sa PDV) − popusti ± nivelacije ± interni prenosi (crveni storno) · Razduženje: pazari (bez usluga), povraćaj, popisni manjak · Uplata: samo stvarna (izvod ili ručni upis); pazari bez uplate su u spisku ispod knjige",\r
"Zaduženje: PS + kalkulacije po veleprodajnim cijenama bez PDV · Razduženje: fakture i pazari bez PDV, povraćaj, popisni manjak · Uplata: samo stvarna (izvod ili ručni upis)",\r
"Zaduženo",\r
"Zaduženo {0} EUR · uplaćeno {1} EUR · saldo {2} EUR",\r
"Zaglavlje (status, fond sati, datumi)",\r
"Zaglavlje tabele nije prepoznato. Tabela se unosi kopiranjem iz PDF-a.",\r
"Zaglavlje tabele nije pronađeno. Fajl možda nije kartica dobavljača ili tekst kartice nije kopiran u cjelini.",\r
"Zahtijeva novu instalaciju programa (Setup) na računaru sa Outlookom",\r
"Zahtjev",\r
"Zahtjev — {0} {1}–{2}",\r
"zahtjev #{0} ({1})",\r
"Zahtjev #{0} je poslat izdavaču. Odluka i odgovor se prikazuju u spisku ispod.",\r
"Zahtjev izdavaču koji mijenja licencu ili uslove:",\r
"Zahtjev je prekinut.",\r
"Zahtjev je upisan. Uvažava se pri sljedećem automatskom raspoređivanju.",\r
"Zahtjev lokalnom serveru traži zapamćen otisak CA.",\r
"zahtjev nije podnijet",\r
"zahtjev podnijet",\r
"Zahtjev za pristup ekranu",\r
"zahtjev za pristup ekranu po nalogu #{0}{1}",\r
"ZAHTJEV ZA REFUNDACIJU NAKNADA ZARADE{0}",\r
"Zahtjev za refundaciju porodiljskog — {0}",\r
"Zahtjev za smjenu",\r
"zahtjeva:",\r
"Zahtjevi",\r
"Zahtjevi — {0} · {1} {2}",\r
"Zahtjevi radnika za ovaj mjesec uvažavaju se pri „Automatski rasporedi\\": radnik se tih dana ne raspoređuje (slobodan dan, odmor, bolovanje), raspoređuje se samo u traženu smjenu ili se vodi u drugom objektu. Već potvrđene sedmice se ne mijenjaju.",\r
"Zahtjevi se trenutno ne mogu pročitati: {0}",\r
"zajedničke smjene",\r
"Zajednički katalog barkodova",\r
"zajedno sa cjenovnikom",\r
"ZAK",\r
"Zakazana cijena je otkazana.",\r
"Zakazana cijena je već primijenjena ili otkazana.",\r
"Zakazana cijena nije nađena.",\r
"Zakazana cijena se upisuje sama u zadato vrijeme, u programu i na kasama. Nova se zakazuje u jezičku Cijene → Svi objekti (pregled), poljem „Važi od\\".",\r
"Zakazane cijene",\r
"Zakazanu cijenu otkazuje uređaj na kom je upisana.",\r
"Zaključaj",\r
"zaključak {0}",\r
"Zaključak {0}: prihodi {1} − rashodi {2} = {3}; porez {4}; neto {5}",\r
"Zaključak godine",\r
"Zaključak je poništen.",\r
"Zaključak obračuna troškova i učinaka",\r
"ZAKLJUČAK RAČUNA STANJA",\r
"ZAKLJUČAK RAČUNA USPJEHA",\r
"Zakljucan",\r
"zaključan",\r
"zaključan mjesec",\r
"Zaključan mjesec",\r
"Zaključan mjesec {0}",\r
"zaključan period",\r
"Zakljucana",\r
"Zaključane (nepromijenjene): {0}.",\r
"Zaključani mjeseci:",\r
"Zaključanih kalkulacija:",\r
"Zaključano",\r
"zaključanom",\r
"zaključanom periodu",\r
"Zaključati {0}?\\n\\nPoslije zaključavanja se kalkulacije i fakture tog mjeseca ne mogu mijenjati ni brisati.",\r
"Zaključavanje mjeseca (štiti od izmjena i brisanja)",\r
"Zaključavanje perioda",\r
"zaključavanje/otključavanje perioda",\r
"zaključen",\r
"Zaključena",\r
"Zaključena {0}",\r
"Zaključena trgovačka knjiga",\r
"Zaključena trgovačka knjiga {0} (saldo {1})",\r
"Zaključeni obračuni: koliko je minulog rada isplaćeno, a koliko pripada po šemi koja sada važi — i dodavanje razlike u otvoren obračun",\r
"Zaključenje knjige",\r
"Zaključenje knjige {0}. je poništeno.",\r
"zaključeno",\r
"Zaključi",\r
"zakljuci_<PIB>_kasa-<ENU>.json",\r
"Zaključio: {0}.",\r
"Zaključiti {0}. godinu sa porezom {1} ({2})?",\r
"Zaključiti početno stanje {0} na dan {1}? Nabavna vrijednost {2} EUR, prodajna sa PDV {3} EUR.",\r
"Zaključiti popis ({0}) i upisati vrijednost po nabavnoj cijeni ({1} EUR) u Popis robe?",\r
"Zaključiti popis ({0}) i upisati vrijednost po prodajnoj cijeni ({1} EUR) u Popis robe?",\r
"Zaključiti trgovačku knjigu za {0}. (svi objekti)?\\n\\nKnjiga se snima u PDF sa otiskom, pravi se „prva i posljednja strana za ovjeru\\", a izmjena te godine traži poništavanje zaključenja.{1}",\r
"Zaključivanje knjige i izrada PDF-a…",\r
"Zaključke kasa preuzima glavni računar firme automatski, u svakom krugu sinhronizacije.",\r
"Zaključni nalog na 31.12.: prihodi (klasa 6) i rashodi (klasa 5) prenose se preko 699/599 na 710, rezultat na 720, porez na dobit 721/4810, a neto dobitak na 3410 (gubitak na 3510). Otvaranje naredne godine prenosi salda klasa 0–4 u početno stanje 01.01. Prije zaključka: svi mjeseci proknjiženi, popis i amortizacija knjiženi, PD prijava snimljena (daje tačan porez).",\r
"Zaključno sa",\r
"zaključno sa {0} {1}.",\r
"Zaključuje ugovore sa dobavljačima, kupcima, bankama i zakupodavcima.",\r
"Zakon o mirnom rješavanju radnih sporova",\r
"Zakon o nacionalnom okviru kvalifikacija (čl. 10)",\r
"Zakon o PDV — do 15. u mjesecu za prethodni mjesec",\r
"Zakon o PDV čl. 18 st. 3 — kad račun nije izdat, PDV se obračunava osam dana od dana isporuke",\r
"Zakon o posredovanju pri zapošljavanju i pravima za vrijeme nezaposlenosti",\r
"Zakon o računovodstvu — popis na kraju poslovne godine",\r
"Zakon o računovodstvu i Zakon o porezu na dobit — do 31.03.",\r
"Zakon o računovodstvu ne traži niz brojeva bez preskoka, nego istinite isprave i vremenski slijed unosa (čl. 10 i 13). Za preskočene brojeve dovoljna je napomena — štampa se ispod knjige primljenih računa (Excel i PDF) za ovu godinu.",\r
"Zakon o radu („Sl. list CG\\", br. 74/19, 8/21, 59/21, 68/21, 145/21, 77/24, 84/24, 86/24, 122/25, 165/25, 51/26 i 103/26)",\r
"Zakon o radu ne propisuje procenat minulog rada (čl. 98 — „u skladu sa kolektivnim ugovorom i ugovorom o radu\\"). Opšti kolektivni ugovor (čl. 14) je bar do 30.04.2026. obavezivao razrede: 0,5 % do 10 godina, 0,75 % od 10 do 20, 1 % preko 20 godina staža (uobičajeno tumačenje — kumulativno: 15 god. = 10 × 0,5 + 5 × 0,75 = 8,75 %). Staž = navršene godine ukupnog radnog staža na prvi dan mjeseca obračuna. Šema važi od upisanog datuma do sljedećeg; prije prvog važi „ravno\\". Ista šema (istim riječima) ide u ugovor o radu. Zaključeni obračuni se ne mijenjaju — razliku za njih daje izvještaj „Razlika minulog rada\\".",\r
"Zakon o socijalnoj i dječjoj zaštiti — zahtjev u roku od 30 dana od početka odsustva",\r
"Zakon o unutrašnjoj trgovini, čl. 35b: trgovina na malo se ne obavlja nedjeljom i u dane državnih i drugih praznika. Izuzetak su, između ostalih, specijalizovane prodavnice ili kiosci za prodaju hljeba, pekarskih proizvoda i kolača, cvijeća, suvenira, štampe, sredstava za zaštitu bilja ili pogrebne opreme (st. 3 t. 2), kiosci unutar zatvorenih područja stanica, aerodroma i luka (t. 6) i kiosci za vrijeme priredbi, festivala i manifestacija (t. 7). Specijalizovana prodaja je „prodaja pretežno jedne vrste robe\\" (st. 4). Kazna za pravno lice 1.000–10.000 € (čl. 43) i zatvaranje objekta (čl. 42 st. 3). Kiosk je posebno prodajno mjesto (čl. 15 st. 2): poseban poslovni prostor prijavljen Poreskoj upravi, svoja evidencija trgovine.",\r
"Zakon o zabrani zlostavljanja na radu („Sl. list CG\\", br. 30/12 i 54/16)",\r
"Zakon o zaštiti poslovne tajne („Sl. list CG\\", br. 145/21)",\r
"Zakon o zaštiti potrošača čl. 15 st. 2: najniža cijena primijenjena u 30 dana prije umanjenja",\r
"Zakona o PDV —",\r
"Zakona o radu",\r
"Zakonska revizija",\r
"Zakonska revizija nije obavezna.",\r
"Zakonske rezerve",\r
"zakonski minimum ({0})",\r
"Zakonski minimum je",\r
"Zakonski praznik ostaje u spisku kao radni dan i može se vratiti.",\r
"ZAKUP",\r
"Zakup — obračun",\r
"Zakup (IOPPD 065)",\r
"Zakup (prostor — plaćen ili naplaćen)",\r
"Zakup {0}.{1}. — {2}",\r
"Zakup {0}/{1}",\r
"Zakup od",\r
"Zakup od fizičkih lica",\r
"Zakup od fizičkih lica (IOPPD osnov 065):",\r
"Zakup od fizičkih lica: trošak zakupnine (bruto)",\r
"Zakup od fizičkog lica — porez na prihod od imovine (%)",\r
"Zakup od fizičkog lica — standardni troškovi koji umanjuju osnovicu (%)",\r
"Zakup plaćen",\r
"Zakup prostora",\r
"Zakup za {0} {1}: obračunato {2} zakupodavaca.",\r
"Zakup: obaveza prema zakupodavcu (neto)",\r
"Zakup: porez po odbitku + prirez",\r
"ZAKUPA",\r
"Zakupljeni objekti i oprema (vanbilansno)",\r
"Zakupnina — {0}{1}",\r
"Zakupnina (bruto)",\r
"Zakupnina za ovaj mjesec (EUR)",\r
"zakupodavac",\r
"Zakupodavac",\r
"Zakupodavac {0}",\r
"Zakupodavac ima obračunate mjesece. Brisanje nije moguće; moguće je isključiti „Aktivan\\" ili upisati datum do kojeg ugovor važi.",\r
"Zakupodavac je obrisan.",\r
"zakupodavac još nije stigao",\r
"Zakupodavac nije pronađen.",\r
"zakupodavaca",\r
"Zakupodavci (ugovori)",\r
"zaliha",\r
"Zaliha",\r
"Zaliha izvora",\r
"ZALIHE",\r
"Zalihe gotovih proizvoda",\r
"Zalihe i popis",\r
"Zalihe i popis robe",\r
"Zalihe materijala",\r
"ZALIHE MATERIJALA",\r
"Zalihe na kraju su teoretske (nema popisa u {0}.); tačnu zaradu daje popis.",\r
"Zalihe nedovršene proizvodnje",\r
"Zalihe po objektu",\r
"ZALIHE PO OBJEKTU",\r
"Zalihe roba",\r
"Zalihe robe 31.12.{0}.",\r
"Zalihe robe na 31.12.",\r
"Zamijeni početno stanje",\r
"Zamijeni postojeću",\r
"Zamijeni: trenutna baza „{0}\\" se prvo sačuva u Knjig_backup\\\\Arhiva, pa se zamijeni izabranim fajlom (sve uneseno poslije te kopije u bazi se gubi).\\n\\nKao novu firmu: uvozi se pod imenom „{1}\\" — postojeća firma ostaje netaknuta (razmjena sa drugim računarima radi samo pod pravim imenom firme).",\r
"Zamijeniti podatke na ovom telefonu obrađenom bazom sa računara?\\n\\nNeobrađeni skenovi sa ovog telefona ostaju sačuvani.",\r
"Zamijeniti ranije uvezene dane perioda ovim fajlom (dani zaključanog mjeseca ostaju)",\r
"zamijenjeno",\r
"zamjena",\r
"Zamjena",\r
"zamjena (radnik drugog objekta ili bez stalnog objekta)",\r
"Zamjena (slobodna)",\r
"Zamjena je na odsustvu ({0} – {1}).",\r
"Zamjena je tog dana već raspoređena u neku smjenu.",\r
"zamjena šifara",\r
"Zamjena šifara",\r
"Zamjena šifara (artikal prelazi na novu šifru; veze sa kalkulacijama ostaju)",\r
"zamjene",\r
"Zamjene i stvarni sati se ispravljaju klikom na dan, a zatim se sedmica potvrđuje.",\r
"Zamjene šifara",\r
"Zamrznuto voće i povrće — pakovano",\r
"zaokruživanje cijena po stavkama",\r
"Zapad banka",\r
"Zapamćeni otisak nije otisak CA sertifikata.",\r
"Zapis bez posebnog ekrana",\r
"Zapis nije čitljiv.",\r
"Zapisa",\r
"Zapisa koji nisu upisani: {0}. Sačuvani su i upis se ponavlja automatski.",\r
"Zapisa na čekanju: {0} („Zapisi iz razmjene koji čekaju\\").",\r
"Zapisi iz razmjene koji čekaju",\r
"Zapisi primljeni sa drugih računara koji nisu upisani:",\r
"Zapisnik o rashodovanju · razdužuje zalihu · rashod u okviru normativa (KRKL) ne podliježe PDV-u",\r
"zaposlen {0}.{1}.",\r
"zaposlen tek {0}.{1}.{2}.",\r
"zaposleni",\r
"Zaposleni ima pravo na neplaćeno odsustvo do {0} radnih dana u kalendarskoj godini radi njege ili podrške članu uže porodice ili domaćinstva zbog teže bolesti, uz dokaze ({1}); za to vrijeme Poslodavac ga ne odjavljuje sa osiguranja. Poslodavac može zaposlenom na njegov zahtjev odobriti neplaćeno odsustvo do 30 dana u godini i u drugim opravdanim slučajevima (liječenje o sopstvenom trošku, važni lični razlozi), a uz saglasnost i duže, ako to ne remeti proces rada; za to vrijeme prava i obaveze iz radnog odnosa miruju. Zaposleni koji se ne vrati na rad u roku od 2 radna dana po isteku neplaćenog odsustva čini razlog za otkaz ({2}).",\r
"Zaposleni ima pravo na odmor u toku rada od {0} minuta koji se računa u radno vrijeme i organizuje tako da se rad sa kupcima ne prekida ({1}), na dnevni odmor od najmanje {2} časova neprekidno ({3}) i na sedmični odmor od najmanje {4} časova neprekidno, po pravilu nedjeljom, a kad priroda posla to zahtijeva — drugog dana po rasporedu ({5}). Prekovremeni rad može se uvesti samo pisanom odlukom Poslodavca u slučajevima iz {6}, tako da radno vrijeme u prosjeku ne pređe {7} časova sedmično u periodu od četiri mjeseca, odnosno {8} časova u sedmici. Rad na dan praznika uvodi se pisanom odlukom uz obavještenje zaposlenih tri dana ranije ({9}).",\r
"Zaposleni ima pravo na plaćeni godišnji odmor srazmjerno vremenu provedenom u radnom odnosu ({0}). U godini zasnivanja ili prestanka radnog odnosa pripada mu 1/12 godišnjeg odmora za svaki započeti mjesec rada, pri čemu se najmanje polovina dana zaokružuje na cio dan ({1}). U vrijeme rada za sticanje odmora računaju se i bolovanje, plaćeno odsustvo, porodiljsko, očinsko i roditeljsko odsustvo i praznici. Zaposleni se ne može odreći prava na odmor niti mu se ono može uskratiti ili zamijeniti novcem, osim pri prestanku radnog odnosa.",\r
"Zaposleni ima pravo na plaćeno odsustvo: {0} radnih dana zbog smrti člana uže porodice (supružnik, djeca, braća, sestre, roditelji, usvojioci) i {1} radni dan zbog posebno važnog i hitnog porodičnog razloga izazvanog bolešću ili nesrećnim slučajem ({2}), a po ovom pravilniku i: zaključenje braka — 5 dana; teža bolest člana uže porodice — 7 dana; njega djeteta sa smetnjama u razvoju — 3 dana; smrt srodnika izvan uže porodice — 1 dan; otklanjanje posljedica elementarne nepogode — 3 dana; selidba — 1 dan (u drugo mjesto 3); dobrovoljno davanje krvi — 1 dan; polaganje stručnog ispita u vezi sa poslom — 5 dana (koji nije u vezi sa poslom — 2). Ukupno plaćeno odsustvo iznosi do {3} radnih dana godišnje, s tim što se odsustvo zbog teže bolesti, njege djeteta sa smetnjama, elementarne nepogode i davanja krvi ostvaruje nezavisno od tog ograničenja. Odsustvo se koristi u vrijeme nastanka događaja, na osnovu zahtjeva i dokaza. Otac djeteta ima pravo na očinsko odsustvo od {4} radnih dana od rođenja djeteta ({5}), uz najavu mjesec dana ranije.",\r
"Zaposleni ima pravo na plaćeno odsustvo: {0} radnih dana zbog smrti člana uže porodice i {1} radni dan zbog posebno važnog i hitnog porodičnog razloga ({2}), a po ovom ugovoru i: zaključenje braka 5 dana, teža bolest člana uže porodice 7 dana, selidba 1 dan (u drugo mjesto 3), dobrovoljno davanje krvi 1 dan, polaganje stručnog ispita u vezi sa poslom 5 dana, otklanjanje posljedica elementarne nepogode 3 dana — ukupno do {3} radnih dana godišnje, osim slučajeva teže bolesti, elementarne nepogode i davanja krvi koji se ostvaruju nezavisno od tog ograničenja. Zaposleni koji svetkuje vjerski praznik ima pravo na plaćeno odsustvo tog dana, na svoj zahtjev najavljen najkasnije 3 dana ranije (Zakon o svetkovanju vjerskih praznika, čl. 2). Otac ima pravo na očinsko odsustvo od {4} radnih dana od rođenja djeteta ({5}). Zaposleni ima pravo na neplaćeno odsustvo od {6} radnih dana godišnje radi njege člana uže porodice zbog teže bolesti ({7}), a u drugim slučajevima uz saglasnost Poslodavca. Privremenu spriječenost za rad Zaposleni dokazuje potvrdom doktora u roku od 3 dana ({8}).",\r
"Zaposleni je dužan da poslove obavlja savjesno, stručno i u skladu sa zakonom, opštim aktima Poslodavca i nalozima {0}, kao i druge poslove koji odgovaraju njegovoj kvalifikaciji po nalogu Poslodavca. Poslodavac Zaposlenom obezbjeđuje stručno osposobljavanje i usavršavanje potrebno za rad (rad na fiskalnoj kasi i u programu, higijenski i sanitarni propisi, zaštita na radu) o svom trošku, po pravilu u toku radnog vremena ({1}).",\r
"Zaposleni je dužan da: savjesno i blagovremeno obavlja poslove radnog mjesta; poštuje radno vrijeme i raspored smjena; izvršava naloge pretpostavljenih koji su u skladu sa zakonom; čuva imovinu, robu i novac Poslodavca; izdaje fiskalne račune i tačno vodi kasu i evidencije; pristojno se ophodi prema kupcima i kolegama; poštuje propise o zaštiti na radu, higijeni i prometu namirnica; čuva poslovnu tajnu; prijavi promjenu adrese u roku od 3 dana.",\r
"Zaposleni je upoznat da po Zakonu o posredovanju pri zapošljavanju i pravima za vrijeme nezaposlenosti (čl. 50) lice kome je radni odnos prestao sporazumom ne može ostvariti novčanu naknadu za vrijeme nezaposlenosti.",\r
"Zaposleni koji na radu ili u vezi sa radom namjerno ili krajnjom nepažnjom prouzrokuje štetu Poslodavcu dužan je da je nadoknadi; za običnu nepažnju ne odgovara. Postojanje i visinu štete, okolnosti, učinioca i način naknade utvrđuje komisija koju obrazuje Poslodavac, a čiji je jedan član predstavnik zaposlenih ({0}); visina se utvrđuje na osnovu knjigovodstvenih podataka (nabavna vrijednost robe, zapisnik o manjku u kasi) ili vještačenjem. Naknada štete može se obustaviti od zarade samo uz pisanu saglasnost zaposlenog ili na osnovu pravosnažne sudske odluke ({1}). Manjak u kasi ili robi ne stavlja se zaposlenom na teret automatski, već po sprovedenom postupku.",\r
"Zaposleni koji radi najmanje 6 mjeseci može Poslodavcu ponuditi zaključenje ugovora na neodređeno vrijeme, a Poslodavac je dužan da odgovori pisano u roku od 30 dana ({0}).",\r
"Zaposleni koji smatra da mu je ovim rješenjem povrijeđeno pravo može podnijeti zahtjev za zaštitu prava Poslodavcu, koji je dužan da odluči u roku od 15 dana, a potom predlog za mirno rješavanje radnog spora Agenciji za mirno rješavanje radnih sporova ({0}); nezavisno od toga može se obratiti inspekciji rada.",\r
"Zaposleni koji smatra da mu je povrijeđeno pravo iz radnog odnosa može podnijeti zahtjev za zaštitu prava Poslodavcu, koji je dužan da odluči u roku od 15 dana, i nezavisno od toga obratiti se inspekciji rada. Prije pokretanja postupka pred nadležnim sudom Zaposleni podnosi predlog za mirno rješavanje radnog spora Agenciji za mirno rješavanje radnih sporova, osim u slučajevima u kojima zakon dozvoljava neposredno obraćanje sudu — spor o prestanku radnog odnosa i izmjeni ugovora (rok 15 dana od dostavljanja odluke) i zaštita od diskriminacije i zlostavljanja ({0}, čl. 16 i 180a {1}). Zaposleni zbog toga ne smije trpjeti štetne posljedice.",\r
"Zaposleni koji su na dan stupanja na snagu pravilnika u radnom odnosu raspoređuju se na radna mjesta iz ovog pravilnika koja odgovaraju poslovima koje obavljaju. Zaposleni koji ne ispunjava uslov kvalifikacije radnog mjesta na kome je zatečen zadržava to radno mjesto, a uslovi se primjenjuju pri svakom narednom zasnivanju radnog odnosa i raspoređivanju. Ugovori o radu usklađuju se aneksima u roku od 60 dana od stupanja na snagu pravilnika, gdje je to potrebno.",\r
"Zaposleni može biti privremeno udaljen sa rada kad okolnosti ukazuju na težu povredu radne obaveze ili je protiv njega pokrenut krivični postupak za djelo učinjeno na radu, najduže do okončanja postupka; udaljenje je obavezno za vrijeme pritvora. O udaljenju se donosi obrazloženo rješenje (po usmenom nalogu u roku od {0} dana); za vrijeme udaljenja zaposlenom pripada naknada {1} mjesečne zarade, a razlika do pune zarade isplaćuje se ako postupak bude obustavljen ili zaposleni oslobođen ({2}).",\r
"Zaposleni može dostaviti pisani odgovor na ovo upozorenje u roku od {0} radnih dana od dana dostavljanja ({1} st. 3). Ako razlozi ne budu otklonjeni odnosno odgovor ne opravda ponašanje, Poslodavac može donijeti rješenje o otkazu ugovora o radu ({2}). Zaposleni se poziva da u daljem radu poštuje radne obaveze, radnu disciplinu i naloge pretpostavljenih.",\r
"Zaposleni obavlja poslove radnog mjesta utvrđene aktom o sistematizaciji Poslodavca, sa kojim je upoznat prije potpisivanja ovog ugovora.",\r
"Zaposleni se izjasnio dana {0}{1}.",\r
"Zaposleni se o radu na dan praznika obavještavaju najkasnije 3 dana ranije (čl. 89 Zakona o radu) — odluka sa datumom {0} je {1}.",\r
"Zaposleni se raspoređuje na radno mjesto {0}{1}, za koje se aktom o sistematizaciji traži {2}{3}{4}.",\r
"Zaposleni se raspoređuje na radno mjesto ugovorom o radu. Promjena radnog mjesta, mjesta rada ili drugih bitnih elemenata ugovora vrši se aneksom uz pisanu ponudu sa razlozima ({0}). Zaposleni u Maloprodaji može zbog potreba procesa rada (bolovanje, odmor, sezona, popis) privremeno obavljati poslove u drugom objektu Poslodavca na području iste opštine, o čemu se obavještava najkasnije uz raspored smjena. Privremeno obavljanje poslova drugog radnog mjesta istog ili nižeg nivoa kvalifikacije traje dok traje razlog, uz zadržavanje zarade svog radnog mjesta.",\r
"Zaposleni se sa ovim pravilnikom upoznaju prije zaključenja ugovora o radu, a pravilnik je stalno dostupan na oglasnoj tabli svakog objekta. Na pitanja koja nijesu uređena pravilnikom primjenjuje se {0}; odredbe kolektivnih ugovora o postupku se ne primjenjuju (čl. 217 st. 2 ZOR). Pravilnik stupa na snagu osmog dana od objavljivanja.",\r
"Zaposleni se u ostavljenom roku nije izjasnio niti je zahtijevao usmeno izjašnjenje, pa se smatra da je saglasan sa navodima upozorenja (čl. 147 st. 6 ZOR).",\r
"zaposlenih",\r
"zaposleno {0}{1}",\r
"Zaposleno lice sa utvrđenim statusom lica sa invaliditetom: zarada se u IOPPD prijavljuje pod osnovom 003 i lice se broji u obavezu zapošljavanja lica sa invaliditetom (poseban doprinos se za njega ne plaća).",\r
"Zaposlenom pripada osnovna zarada za {0} radno vrijeme i standardni učinak u iznosu od {1} bruto mjesečno{2}, koja ne može biti niža od minimalne zarade za nivo kvalifikacije radnog mjesta ({3}: {4} EUR neto za radna mjesta do V nivoa, {5} EUR neto za VI i viši nivo){6}. Zaposleni ima pravo i na poseban dio zarade (naknada za topli obrok i 1/12 regresa za godišnji odmor) u skladu sa zakonom i opštim aktom Poslodavca.",\r
"zarada",\r
"ZARADA",\r
"Zarada {0}. (bez PDV, kao u PD obrascu):",\r
"Zarada je obračunata u skladu sa Zakonom o radu i Zakonom o porezu na dohodak fizičkih lica.",\r
"Zarada se isplaćuje u novcu, na tekući račun Zaposlenog {0}{1}, jednom mjesečno, najkasnije do {2}. u mjesecu za prethodni mjesec, uz pisani obračun zarade ({3}). Zaposleni ima pravo na naknadu troškova službenog putovanja i druga primanja u skladu sa zakonom i opštim aktom Poslodavca. Zaposleni ima pravo da iznosi podatke o sopstvenoj zaradi radi ostvarivanja prava na jednaku zaradu ({4}).",\r
"ZARADE",\r
"Zarade i kadrovi",\r
"Zarade i naknade isplaćene u periodu, a nepriznate u ranijim periodima",\r
"zarade iz {0} obračuna plata za {1}. nijesu proknjižene (Finansije → Proknjiži mjesec)",\r
"Zarade radnika",\r
"Zarade, naknade po ugovorima, otpremnine… obračunate a NEISPLAĆENE u poreskom periodu (čl. 11a)",\r
"Zastarjelost pokretanja",\r
"Zastarjelost vođenja: odluka se mora donijeti u roku od {0} mjeseca od pokretanja ({1}). Rok je istekao {2}.",\r
"Zastarjelost: postupak se pokreće u roku od {0} mjeseca od saznanja za povredu ({1}). Rok je istekao {2}.",\r
"Zaštićena veza (TLS) nije uspostavljena.",\r
"Zaštićeni naziv",\r
"Zaštita",\r
"Zaštita veze",\r
"Zašto čeka",\r
"Zastupa i predstavlja društvo i odgovara za zakonitost rada.",\r
"Zatečena roba objekta kad firma počinje rad u programu (ili godina nema istoriju): količina, nabavna cijena bez PDV, MPC sa PDV i stopa PDV po artiklu, na dan (najčešće 01.01. ili dan početka rada). Unos ručno, skenerom ili uvozom lager liste iz drugog programa (Excel/CSV). Zaključeno početno stanje je popis cijelog objekta: red „Početno stanje\\" u trgovačkoj knjizi, stanje i cijene u lageru, zalihe i PD. Objekat ima jedno početno stanje.",\r
"Zatečena roba objekta po artiklima kad firma počinje rad u programu",\r
"zatečeno",\r
"Zatezna kamata",\r
"Zatvaranje izlaznog PDV za mjesec",\r
"Zatvaranje obaveze za PDV na usluge inostranih lica",\r
"Zatvaranje paušalne naknade za mjesec",\r
"Zatvaranje PDV pri uvozu za mjesec",\r
"Zatvaranje prethodnog poreza na usluge inostranih lica",\r
"Zatvaranje prihoda",\r
"Zatvaranje procjene od {0}",\r
"Zatvaranje rashoda",\r
"Zatvaranje razgraničenog PDV {0} %",\r
"Zatvaranje ulaznog PDV za mjesec",\r
"zatvoren bez odobrenja",\r
"Zatvorena",\r
"Zatvoreni objekti",\r
"Zatvori",\r
"Zatvori bez odobrenja",\r
"Zatvori ovaj prozor",\r
"Zatvori procjenu",\r
"Zatvori program",\r
"Zatvori raspored",\r
"Zatvoriti aplikaciju?",\r
"Zatvoriti fakturu {0} ovom uplatom? Razlika {1} EUR se knjiži kao kursna razlika.",\r
"Zauzeti barkodovi",\r
"Zauzeti barkodovi (barkod već ima drugi artikal)",\r
"Zauzeti barkodovi koje pregled na računaru „{0}\\" nije prikazao: {1} — preskočeni (barkod ostaje artiklu koji ga već ima).",\r
"Zauzeto (ostvareno)",\r
"ZAV",\r
"Zav. trošak/jed",\r
"Zavisni trošak nabavke",\r
"Zavisni trošak nabavke{0}",\r
"Zavisni trošak u nabavnu (umanjuje RUC){0}",\r
"Zavisni trošak uz kalkulaciju {0} — {1}{2}",\r
"Zavisni troškovi (bez PDV)",\r
"Zavisni troškovi koji ne ulaze u nabavnu",\r
"Zavisni troškovi nabavke",\r
"Zavisni troškovi nabavke (špedicija, prevoz, carina)",\r
"Zavisni troškovi nabavke (u nabavnu)",\r
"Zavisni troškovi nabavke raspoređeni na {0}",\r
"Zavisni troškovi nabavke raspoređeni po vrijednosti: {0} EUR.",\r
"Zavisni troškovi ne mogu biti negativni.",\r
"Zavisni troškovi ove kalkulacije su raspoređeni na stavke. Prvo se poništava raspored, pa se primjenjuju devizne cijene i raspored ponavlja.",\r
"Zavisni troškovi ove kalkulacije su već raspoređeni na stavke. Izmjena troška je moguća nakon poništavanja rasporeda; raspored se zatim ponavlja.",\r
"Zavisni troškovi: procjena troška čija faktura nije stigla (razgraničenje do prijema fakture)",\r
"Završava se nalog u radu (sada: {0}).",\r
"završen",\r
"Završen",\r
"Završeni uređaji koje klijent nije preuzeo ({0} i više dana): {1}",\r
"završeno",\r
"Završeno",\r
"Završetak",\r
"Završetak (neobavezno)",\r
"završetka",\r
"Završi",\r
"Završi i otvori Finansije",\r
"Zavrsna",\r
"završna (zatvara nalog)",\r
"zbijeno",\r
"Zbir isplata koje podliježu porezu, po primaocu, vrsti prihoda i stopi. Izvještaj se predaje elektronski, uz digitalni sertifikat.",\r
"Zbir iznosa po stopama ({0}) nije jednak iznosu avansa ({1}).",\r
"Zbir je veći od iznosa pristanka za više od",\r
"Zbir obrisanih",\r
"zbir odobrenja {0} ≠ {1} iz izvoda",\r
"Zbir plaćanja ({0}) nije jednak iznosu za naplatu ({1}).",\r
"Zbir po stopama",\r
"zbir po stopama ({0}) nije jednak „Ukupno sa PDV\\" ({1})",\r
"zbir po stopama {0} nije jednak „Ukupno sa PDV\\" {1}",\r
"zbir pročitanog {0} / {1}, a na izvodu {2} / {3}",\r
"Zbir prometa po stopama je {0}, a „UKUPAN POREZ → Promet\\" iznosi {1}.",\r
"Zbir se poredi sa pazarom iz trgovačke knjige u istom periodu.",\r
"Zbir stavki",\r
"Zbir stavki ({0} €) je veći od izdate ponude ({1} €) za više od {2} %: izdati novu ponudu.",\r
"Zbir stavki ({0} EUR) nije jednak iznosu sa računa ({1} EUR). Razlika: {2} EUR.",\r
"Zbir stavki je jednak iznosu sa računa.",\r
"Zbir stopa ({0} / {1} / {2}) se ne slaže sa UKUPAN POREZ. Potrebna je provjera prema slici.",\r
"Zbir svih objekata jednak je PR-PDV-u za isti period: izlazni PDV iz pazara, ulazni sa faktura. Pazari bez razdvojenog PDV-a ovdje ulaze samo u promet, ne u PDV.",\r
"Zbir udjela ({0} %) je veći od neraspoređenog dijela deklaracije ({1} %).",\r
"Zbir udjela stvarnih vlasnika je {0} %.",\r
"zbir zaduženja {0} ≠ {1} iz izvoda",\r
"Zbirni nalog rashoda: {0}",\r
"ZBIRNI NALOG ZA KNJIŽENJE — RASHOD ROBE",\r
"zbirni red (prethodno / duguje / potražuje / novo) nije pronađen",\r
"Zbirno po danu",\r
"Zbirno po dobavljaču",\r
"Zbirno po mjesecu",\r
"Zbirno po objektu",\r
"Zbirno po vrsti dokumenta",\r
"zbirovi iz izvoda nisu pročitani, kontrola nije moguća",\r
"ZBroj",\r
"zelena",\r
"zeleno",\r
"želi {0}",\r
"Želi određenu smjenu",\r
"Zemljišta",\r
"Zemljišta namijenjena prodaji",\r
"ženski",\r
"Zeta",\r
"Ziraat Bank",\r
"Ziro",\r
"ziro racun",\r
"Žiro račun",\r
"Žiro račun (18 cifara)",\r
"Žiro račun (za virman na fakturi)",\r
"Žiro račun {0} je upisan.",\r
"Žiro račun {0} je već upisan.",\r
"Žiro račun ima {0} cifara, a mora imati tačno 18 (banka 3 + partija 13 + kontrola 2). Dozvoljen je i skraćeni oblik sa crticama (npr. 540-32116541-40); nule se dopisuju automatski.",\r
"Žiro račun izvršioca",\r
"Žiro račun je obrisan.",\r
"Žiro račun je upisan.",\r
"Žiro račun mora imati 18 cifara ili ostati prazan.",\r
"Žiro račun ne postoji.",\r
"Žiro račun nije unijet (Podešavanja → Firma).",\r
"Žiro račun nije upisan ({0}).",\r
"Žiro račun nije upisan.",\r
"Žiro račun zakupodavca",\r
"Žiro računi",\r
"Žitarice",\r
"Žitarice sa glutenom",\r
"ZK",\r
"Značajni prenosi novčanih sredstava na račune na kojima nije bilo transakcija (neaktivni računi) koji su odmah praćeni povlačenjem sredstava, tj. podizanjem gotovog novca.",\r
"znak",\r
"Znak",\r
"Znak (amblem)",\r
"Znak mora biti kvadratnog oblika (razlika stranica do 10 %).",\r
"Znak nije postavljen.",\r
"Zona još nije prepoznata.",\r
"ZPDPL čl. 29 st. 1",\r
"ZPDPL čl. 29 st. 1 t. 2",\r
"ZPDPL čl. 29 st. 1 t. 2, čl. 29b t. 1",\r
"ZPDPL čl. 29 st. 1 t. 2, čl. 29b t. 2",\r
"ZPDPL čl. 29 st. 1 t. 2, čl. 29b t. 4",\r
"ZPDPL čl. 29 st. 1 t. 2, čl. 29b t. 5",\r
"ZPDPL čl. 29 st. 1 t. 2, čl. 29b t. 6",\r
"ZPDPL čl. 29 st. 3",\r
"ZPDPL čl. 29 st. 4 ({0} %)",\r
"ZPDPL čl. 29 st. 4 i 11",\r
"ZPDPL čl. 29 st. 4: porez se obračunava i plaća u trenutku isplate prihoda, na bruto iznos.",\r
"ZPDPL čl. 29 st. 5",\r
"ZPDPL čl. 29 st. 5 — teritorija sa poreskim suverenitetom ({0} %)",\r
"ZPDPL čl. 29a st. 1–3",\r
"ZPDPL čl. 29b — nije izričito uređeno",\r
"ZPDPL čl. 29b t. 4",\r
"ZPDV čl. 18 st. 2–3: isporuka se smatra izvršenom u trenutku izdavanja računa; ako račun nije izdat, PDV se obračunava osam dana od dana isporuke.",\r
"ZPDV čl. 18 st. 3: ako račun nije izdat, PDV se obračunava osam dana od dana isporuke.",\r
"ZPDV čl. 18 st. 4 (avans), čl. 20 st. 9 (odobrenje kupcu obvezniku); PPZPDV čl. 121 st. 4",\r
"ZPDV čl. 18 st. 4 i čl. 31 st. 2: PDV na avans se obračunava na dan prijema naknade",\r
"ZPDV čl. 18 st. 4, čl. 20 st. 9, čl. 31 st. 2; PPZPDV čl. 76, čl. 121 st. 4",\r
"ZPDV čl. 20 st. 9",\r
"ZPDV čl. 20 st. 9: kupac pismeno obavještava da je umanjio odbitak ulaznog PDV",\r
"ZPDV čl. 23 st. 2: srednji kurs CBCG na dan nastanka poreske obaveze. CBCG objavljuje listu „na dan D\\" koja važi od sljedećeg dana.",\r
"ZPDV čl. 24a st. 1 t. 1; Pravilnik 117/24 čl. 2",\r
"ZPDV čl. 24a st. 1 t. 10; Pravilnik čl. 13",\r
"ZPDV čl. 24a st. 1 t. 11; Pravilnik čl. 14",\r
"ZPDV čl. 24a st. 1 t. 12; Pravilnik čl. 15 i čl. 3",\r
"ZPDV čl. 24a st. 1 t. 2",\r
"ZPDV čl. 24a st. 1 t. 4; Pravilnik čl. 6–7",\r
"ZPDV čl. 24a st. 1 t. 6; Pravilnik čl. 9 (28/25)",\r
"ZPDV čl. 24a st. 2 t. 1; Pravilnik čl. 16",\r
"ZPDV čl. 24a st. 2 t. 3; Pravilnik 117/24 čl. 18",\r
"ZPDV čl. 25 — PR PDV-2 polje 13.",\r
"ZPDV čl. 26–27 — PR PDV-2 polje 14.",\r
"ZPDV čl. 32 st. 7; ide i u polje Note fiskalne poruke (najviše 200 znakova)",\r
"ZPDV čl. 37 st. 5: ulazni PDV se ne odbija za putničke automobile i motocikle, gorivo, maziva, djelove i usluge za njih, novoizgrađen stambeni objekat i reprezentaciju. Takav PDV ide u PR-PDV polje 26 i u trošak (nabavnu vrijednost).",\r
"ZPDV čl. 37 st. 6–7: PDV iz carinske deklaracije se odbija u periodu kada je deklaracija primljena. Carina i akciza nijesu PDV. Osnovica i PDV se upisuju kako piše na deklaraciji (predlog: carinska vrijednost + carina + akciza).",\r
"ZPDV čl. 71e: „Odredbe člana 24a stav 1 tačka 1) i člana 25 stav 1 tačka 12d) ovog zakona prestaju da važe 31. decembra 2022. godine.\\" Hljeb, brašno i ulje se od 01.01.2023 ne prodaju po 0 %. Artikal po 0 % bez osnova treba provjeriti (stopa ili osnov na ekranu Artikli).",\r
"ZR:{0}",\r
"ZSPNFT čl. 116 st. 1 t. 1",\r
"ZSPNFT čl. 116 st. 1 t. 2, čl. 117 st. 7",\r
"ZSPNFT čl. 116 st. 1 t. 3, čl. 117 st. 8",\r
"ZSPNFT čl. 116 st. 1 t. 4, čl. 117 st. 9",\r
"ZSPNFT čl. 116 st. 1 t. 5, čl. 117 st. 10",\r
"ZSPNFT čl. 116 st. 1 t. 6, čl. 117 st. 11; čl. 66 st. 12",\r
"ZSPNFT čl. 116 st. 1 t. 7, čl. 117 st. 12",\r
"ZSPNFT čl. 116 st. 1 t. 7, čl. 117 st. 12; čuvanje četiri godine (čl. 127 st. 4)",\r
"ZSPNFT čl. 117 st. 1 t. 1–3",\r
"ZSPNFT čl. 117 st. 1 t. 1, 3, 4–6",\r
"ZSPNFT čl. 117 st. 1 t. 3 — datum prestanka važenja lične isprave",\r
"ZSPNFT čl. 117 st. 1 t. 6 — skenirana dokumentacija; fajl se čuva u folderu firme i ne putuje razmjenom",\r
"ZSPNFT čl. 117 st. 11; čl. 66 st. 12",\r
"ZSPNFT čl. 12",\r
"ZSPNFT čl. 12 — najmanje jednom godišnje",\r
"ZSPNFT čl. 12 — u roku od 60 dana od osnivanja, odnosno početka djelatnosti; ažurira se najmanje jednom godišnje",\r
"ZSPNFT čl. 127 — paket Usklađenost (ZSPNFT)",\r
"ZSPNFT čl. 127 st. 1–2",\r
"ZSPNFT čl. 127 st. 3",\r
"ZSPNFT čl. 127 st. 4",\r
"ZSPNFT čl. 127 st. 5",\r
"ZSPNFT čl. 127 st. 5 — po isteku roka lični podaci se brišu",\r
"ZSPNFT čl. 14 — ovlašćeno lice na rukovodećoj poziciji",\r
"ZSPNFT čl. 14 — ovlašćeno lice na rukovodećoj poziciji i zamjenik",\r
"ZSPNFT čl. 4 st. 2 t. 13; čl. 66 st. 1–3",\r
"ZSPNFT čl. 66 — dostava elektronski, uz kvalifikovani elektronski potpis",\r
"ZSPNFT čl. 66 st. 1 al. 1",\r
"ZSPNFT čl. 66 st. 1 al. 2",\r
"ZSPNFT čl. 66 st. 1–3",\r
"ZSPNFT čl. 66 st. 11 — obavještenje FOJ-u bez odlaganja",\r
"ZSPNFT čl. 66 st. 12 — obavještenje FOJ-u u roku od tri radna dana",\r
"ZSPNFT čl. 66 st. 2",\r
"ZSPNFT čl. 66 st. 3",\r
"ZSPNFT čl. 66 st. 6–10",\r
"ZSPNFT čl. 66 st. 6–10 — prije izvršenja, uz rok izvršenja",\r
"ZSPNFT čl. 81 — pri utvrđivanju razloga za sumnju koriste se liste indikatora",\r
"ZSPNFT čl. 81–83",\r
"ZSPNFT čl. 83 — sopstvena lista indikatora mora biti u dokumentaciji obveznika",\r
"ŽURNAL KOREKTIVNIH RAČUNA",\r
"Zvanični obrazac I-RAČ (15 kolona, Pravilnik o primjeni ZPDV čl. 122):",\r
"Zvanični obrazac U-RAČ (17 kolona, Pravilnik o primjeni ZPDV čl. 123; datum prijema = datum zavođenja; fakture stranih dobavljača za robu nijesu u njemu — PDV pri uvozu ide po carinskoj deklaraciji u polje 20):",\r
"„Euro model\\" (predlozi Vlade od 17.09.2026)",\r
"(povezano lice)",\r
"(uz {0} ranije upisanih u {1}. godini)",\r
"). Program porez ne obračunava; obračun potvrđuje knjigovođa. Isplata i povraćaj se knjiže sa izvoda (vrsta „Pozajmica / zajam\\") ili kroz blagajnu.",\r
"{0}\\n\\nIpak snimiti nalog?",\r
"{0}\\n\\nUpisati odsustvo?",\r
"{0}\\n\\nUpisati pozajmicu?",\r
"{0}\\nIzvor: {1}.\\n\\nOd {2} (po mjesecu obračuna) važiće:\\n{3}\\n\\n{4}\\n\\nParametri se uključuju tek kad je zakon objavljen u „Službenom listu CG\\". Da li je zakon objavljen i da li se parametri uključuju?",\r
"{0} — važi od {1}.",\r
"{0} · prilog {1}",\r
"{0} (stranac): dozvola je izdata {1}, a ugovor o radu nosi datum {2} — poslije roka od {3} časa ({4}). Potrebna je provjera datuma.",\r
"{0} (stranac): dozvola je izdata {1}. Ugovor o radu se zaključuje i radnik prijavljuje na osiguranje u roku od {2} časa od izdavanja dozvole — do {3} ({4}).",\r
"{0} (stranac): dozvola za privremeni boravak i rad ističe {1} (za {2} dana). Nova dozvola treba da bude izdata prije isteka.",\r
"{0} (stranac): dozvola za privremeni boravak i rad je istekla {1} (prije {2} dana). Potrebna je provjera statusa radnika; zapošljavanje stranca koji nezakonito boravi je prekršaj ({3}).",\r
"{0} (stranac): nije potvrđeno da je kopija dozvole na mjestu rada ({1}).",\r
"{0} (stranac): nije upisan {1} dozvole za privremeni boravak i rad.",\r
"{0} (stranac): početak rada {1}. Ako radnik nije stupio na rad, ministarstvo se obavještava u roku od {2} dana — do {3} ({4}).",\r
"{0} (stranac): rad je prestao {1}, prije isteka dozvole{2}. Ministarstvo se obavještava u roku od {3} dana — do {4} ({5}). Datum obavještenja se upisuje u podatke radnika.",\r
"{0} je povezano lice: pozajmica podliježe porezu po odbitku od prvog eura ({1}). Obračun poreza potvrđuje knjigovođa.",\r
"{0}; obračun potvrđuje knjigovođa",\r
"{0}: {1}, a zakon daje {2} ({3}). Više dana može odobriti poslodavac (ugovor o radu, akt poslodavca).",\r
"{0}: {1}{2}, a zakon daje najviše {3} radnih dana u kalendarskoj godini ({4}). Dane preko toga treba upisati kao „Neplaćeno odsustvo\\".",\r
"{0}: pozajmice u {1}. godini iznose {2} EUR — iznad {3} EUR godišnje. Na pozajmice fizičkim licima iznad tog iznosa plaća se porez po odbitku ({4}). Obračun poreza potvrđuje knjigovođa.",\r
"• {0}: {1} (sada {2})",\r
"• vrijednosti sa kartice Stope (redovi upisani za ovaj datum se uklanjaju)",\r
"✉ E-poštom",\r
"➕ Upiši parametar",\r
"🤝 Pozajmice fizičkim licima",\r
"akt poslodavca",\r
"Akt poslodavca",\r
"Ažuriranje programa: paket se primjenjuje samo uz provjeren otisak (SHA-256), neuspjela verzija se sama vraća na prethodnu. Prozor programa: zabrana navigacije i novih prozora, provjera pošiljaoca svakog unutrašnjeg poziva, otvaranje fajla ne pokreće izvršne fajlove. Lozinka fiskalnog sertifikata se čuva šifrovana zaštitom Windows naloga.",\r
"Bez promjene (važe vrijednosti sa kartice Stope)",\r
"Bezbjednosne ispravke",\r
"Bezbjednosne ispravke izlaze u najnovijoj verziji programa i stižu ažuriranjem. Starija verzija dobija ispravke prelaskom na najnoviju.",\r
"broj {0}",\r
"Broj dozvole",\r
"čl. 210a Zakona o strancima",\r
"čl. 28a Zakona o porezu na dobit pravnih lica („Sl. list CG\\", br. 104/26)",\r
"čl. 87 st. 4 Zakona o radu",\r
"čl. 87 st. 6 Zakona o radu",\r
"čl. 88 st. 1 Zakona o radu",\r
"data",\r
"Data",\r
"Dato u {0}.",\r
"Datum od kada parametar važi je obavezan.",\r
"Datum od kada parametri važe je obavezan.",\r
"Datum pozajmice je obavezan.",\r
"Dnevnik bezbjednosnih ažuriranja",\r
"Dokument je napravljen ranije: otvara se nacrt poruke sa fajlom iz foldera izvoza. Slanje preko SMTP servera je moguće za dokument napravljen u ovom radu programa.",\r
"Doprinosi i porez ostaju kao na kartici Stope.",\r
"Dostavljanje akta zaposlenom e-poštom; zapis o slanju ostaje u dnevniku e-pošte kao dokaz (čl. 176a Zakona o radu)",\r
"Dostavljeno e-poštom",\r
"Dozvola izdata",\r
"Dozvola važi do",\r
"EUR godišnje plaća se porez po odbitku, a za povezana lica od prvog eura (",\r
"Evidencija pozajmica fizičkim licima po licu i godini (porez po odbitku od 01.01.2027)",\r
"Evidencija pozajmica koje firma daje fizičkim licima, po licu i godini. Od",\r
"Gotovina {0} EUR: plaćanje i primanje gotovine od {1} EUR i više nije dozvoljeno ({2} st. 1). Plaćanje se obavlja preko transakcionog računa (st. 3).",\r
"Gotovina {0}: {1} EUR (zajedno sa ovim plaćanjem). Zabrana gotovine od {2} EUR i više važi i za više povezanih transakcija, uključujući zajmove ({3} st. 2).",\r
"Ime i prezime lica je obavezno.",\r
"Ispravljeno",\r
"iznad {0} EUR godišnje — porez po odbitku",\r
"Iznos na koji se odnosi porez po odbitku",\r
"JMBG ima 13 cifara.",\r
"kazna za poslodavca {0}–{1} EUR, {2}",\r
"Kompromis (minimalna zarada +200 EUR, ostalo bez promjene)",\r
"kopija dozvole je na mjestu rada",\r
"kroz blagajnu sa ovim licem u ±30 dana",\r
"Lice",\r
"lice sa invaliditetom ({0}; primjena od {1}.)",\r
"Licenca: provjera potpisa i PIB-a i za zapamćenu licencu; odgovor servera za drugu firmu se ne prihvata.",\r
"Minimalna neto zarada po predlogu ima tri nivoa (1.000 / 1.250 / 1.400 EUR); program vodi dva — vrijednosti po nivou kvalifikacije treba upisati prema objavljenom tekstu.",\r
"Ministarstvo obaviješteno (nije stupio / prestanak)",\r
"Na kartici Stope",\r
"na pozajmice fizičkim licima iznad",\r
"Nacrt poruke sa postojećim fajlom je dostupan u Windows programu. Na ovom uređaju dokument treba napraviti ponovo, pa poslati.",\r
"navodi iz pregovora — nije predlog zakona",\r
"Nema parametara sa datumom važenja — za sve mjesece važe vrijednosti iz tabele „Stope i pragovi\\".",\r
"Nema pozajmica za izabranu godinu.",\r
"Nepoznata varijanta parametara.",\r
"Obrisati ovaj upis iz evidencije pozajmica?",\r
"OC",\r
"Očinsko odsustvo (čl. 126a ZOR, 10 radnih dana od rođenja djeteta)",\r
"od 01.12.2026.; primjenjuju se automatski). Uvećanja po stažu i drugim osnovama firma uređuje pravilnikom (",\r
"Odnosi se porez po odbitku",\r
"Parametar",\r
"Parametar je upisan od {0}.",\r
"Parametar upisan ovdje važi od svog datuma, po mjesecu obračuna: plata za mjesec prije tog datuma obračunava se po starim, a od tog mjeseca po novim vrijednostima, bez obzira na to kada se obračun radi. Zaključeni obračuni se ne mijenjaju. Dok je tabela prazna, važe vrijednosti iz tabele „Stope i pragovi\\". Pripremljene varijante za 01.01.2027. su predlošci: zakoni „Euro modela\\" do 10.11.2026. nisu objavljeni, pa se varijanta uključuje tek po objavi u „Službenom listu CG\\", uz provjeru svake vrijednosti prema objavljenom tekstu.",\r
"Parametri sa datumom važenja (izmjene zakona)",\r
"PH",\r
"Plaćeno — hitan porodični razlog (čl. 87 ZOR, 1 radni dan)",\r
"Plaćeno — smrt člana uže porodice (čl. 87 ZOR, 7 radnih dana)",\r
"Porez po odbitku na pozajmice fizičkim licima iznad {0} EUR godišnje; povezana lica od prvog eura ({1}). Porez nije obračunat.",\r
"Porez po odbitku na pozajmice fizičkim licima važi od {0}. ({1}).",\r
"porez po odbitku na pozajmice važi od {0}.",\r
"Posljednje bezbjednosno ažuriranje: verzija {0} ({1})",\r
"povezano lice",\r
"Povezano lice",\r
"povezano lice — porez po odbitku od prvog eura",\r
"Povraćaj pozajmice je upisan.",\r
"Pozajmica je upisana.",\r
"Pozajmice fizičkim licima",\r
"Pozajmice fizičkim licima — {0}. godina",\r
"predlozi zakona — nisu usvojeni",\r
"Pregled po licu —",\r
"radna dana",\r
"radni dan",\r
"rok važenja",\r
"Rok važenja dozvole ne može biti prije datuma izdavanja.",\r
"sa ovim licem (pozajmice) u ±30 dana",\r
"sa ovim partnerom u ±30 dana",\r
"Šta je ispravljeno, u kojoj verziji i kada.",\r
"Stanje 31.12.{0}.",\r
"Stranac",\r
"stranac (dozvola za boravak i rad)",\r
"Stranac sa dozvolom za privremeni boravak i rad — rokovi poslodavca: ugovor i prijava {0} časa od izdavanja dozvole, obavještenja {1} i {2} dana, kopija dozvole na mjestu rada ({3})",\r
"U prilogu se dostavlja {0}{1}. Dostavljanje se vrši na e-adresu zaposlenog iz evidencije poslodavca ({2}).",\r
"Ugovor",\r
"Uklanja redove upisane za izabrani datum.",\r
"Uklanjanje reda (važi vrijednost sa kartice Stope ili raniji red)",\r
"Uključeno {0} parametara od {1}. Vrijednosti se mogu ispraviti u tabeli ispod; otvoreni obračuni se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Ukloniti „{0}\\" od {1}?",\r
"Uplata = gotovina ulazi u blagajnu (duguje 2430); isplata = gotovina izlazi (potražuje 2430). Protukonto: dobavljač 4330, trošak 5xxx, radnik 2210, žiro-račun 2410 (polog pazara se knjiži automatski sa izvoda). Gotovina od 10.000 EUR i više prema drugom licu se ne upisuje (plaćanje ide preko računa).",\r
"Varijanta se uključuje tek po objavi zakona u „Službenom listu CG\\" — potrebna je potvrda.",\r
"važeći propisi",\r
"Verzija {0} dobija bezbjednosne ispravke do {1}",\r
"Verzija {0} je dobijala bezbjednosne ispravke do {1} Potrebno je ažuriranje na najnoviju verziju.",\r
"Veza sa lokalnim IRIS serverom: šifrovana veza se prihvata samo uz sertifikat zapamćen pri povezivanju; zahtjevi idu kroz glavni proces programa.",\r
"Vlasnik, direktor, član njihove porodice i drugo povezano lice — bez neoporezivog iznosa",\r
"vraćena",\r
"Vraćena",\r
"Vraćeno u {0}.",\r
"Vrijednost je izmijenjena.",\r
"Vrijednost od",\r
"Vrijednost parametra mora biti broj koji nije negativan.",\r
"WHERE substr(Datum,1,4)=?",\r
"Za {0} nema parametara sa datumom važenja — važe vrijednosti sa kartice Stope.",\r
"Za ovaj parametar se ne upisuje datum važenja.",\r
"Zakon o sprječavanju pranja novca i finansiranja terorizma, čl. 65",\r
"Zakon o strancima („Sl. list CG\\", br. 154/26)",\r
"Zaposleni nema upisanu e-adresu (Kadrovi → Ugovori).",\r
"· jedna kartica lica (kupac i dobavljač istog PIB-a)",\r
"· konta {0}–{1}",\r
"· konto {0}",\r
"· saldo na dan",\r
"(bez veznog dokumenta)",\r
"(dug partnera)",\r
"(naša obaveza)",\r
"(PDV obaveza nastala)",\r
"(Vaš dug)",\r
"{0} – {1} · početno stanje {2} · saldo {3}",\r
"{0} — početno stanje",\r
"{0} {1} % — isporuka bez računa (ZPDV čl. 18 st. 3)",\r
"{0} {1} od {2}",\r
"{0}.Konto IN ({1})",\r
"{0}.Konto LIKE ?",\r
"📄 IOS (PDF)",\r
"📄 Masovni IOS (PDF,",\r
"Analitički bilans partnera iz glavne knjige (od posljednjeg početnog stanja do izabranog dana). Klik na red otvara karticu partnera.",\r
"AND ({0})",\r
"AND {0}=?",\r
"Blagajnički nalog bez plaćanja u evidenciji",\r
"COALESCE({0}.KupacID, {1}.DobavljacID, {2}.RadnikID)",\r
"COALESCE(o.DatumNabavke, o.DatumUnosa)",\r
"COALESCE(r.DatumRacuna, k.DatumFakture)",\r
"d.DatumIzdavanja",\r
"d.PIB",\r
"Današnje stanje: saldo kupaca (2020/2030) i dobavljača (4330/4340) u glavnoj knjizi prema dugu iz dokumenata (Naplata, Dobavljači i dugovi). Uzroci: ručni i blagajnički nalozi, plaćanja bez naloga (virman bez izvoda, „Ostalo\\", neproknjižen mjesec), kompenzacija bez dokumenta, dokument bez naloga, trošak koji nije dug, avans na 4300.",\r
"djelimično (uplata bez veznog dokumenta, po redoslijedu)",\r
"Dokumenti prije početnog stanja {0} su sadržani u njemu.",\r
"Evidencija (dokumenti)",\r
"Faktura {0} od {1} bez naloga (mjesec nije proknjižen)",\r
"Glavna knjiga i evidencija partnera se slažu.",\r
"i dobavljač: {0}",\r
"i kupac: {0}",\r
"i povezano lice (isti PIB)",\r
"i prihodi i rashodi",\r
"IOS",\r
"IOS za {0} partnera sačuvan: {1}",\r
"Izabrati partnera. Kartica sadrži sva konta stanja partnera (kupci, dobavljači, avansi, razgraničenja, ručni nalozi i početno stanje), bez izbora konta.",\r
"k.PIB",\r
"Kartica partnera",\r
"Kartica partnera i salda iz glavne knjige · otvorene stavke po veznom dokumentu · IOS (pojedinačni i masovni) · usklađivanje sa evidencijom · kupac i dobavljač istog PIB-a · glavna knjiga · nefakturisane isporuke",\r
"Kartica partnera: {0}",\r
"Kartice, salda, otvorene stavke i IOS iz glavne knjige (sa ručnim nalozima i početnim stanjem) · usklađivanje sa evidencijom dokumenata · lice koje je i kupac i dobavljač",\r
"Kompenzacija {0} bez naloga (mjesec nije proknjižen): {1}",\r
"Kompenzacija upisana kao plaćanje, bez dokumenta kompenzacije: {0}",\r
"Konta (prefiksi)",\r
"Konto (prefiks; prazno = sva)",\r
"Konto (prefiks)",\r
"Konto do",\r
"Konto od",\r
"kupac i dobavljač",\r
"Kupac i dobavljač (isti PIB)",\r
"kupci",\r
"kupci i dobavljači",\r
"LICA",\r
"Lica koja su i kupci i dobavljači (isti PIB). Šifarnici ostaju odvojeni; kartica, IOS i kompenzacija rade sa licem. Klik na red otvara jednu karticu lica.",\r
"Masovni IOS na dan",\r
"Molimo da potvrdite saglasnost sa iskazanim stanjem ili dostavite primjedbe (Vašu karticu) u roku od 8 dana od prijema.",\r
"n.Status<>'storniran' AND {0}{1}{2}",\r
"na dan {0} · iz glavne knjige",\r
"na dan {0} · konta {1}",\r
"Na dan {0} nema partnera sa saldom na izabranim kontima.",\r
"na dan {0}{1}",\r
"naziv ili PIB",\r
"Nefakturisane isporuke",\r
"Nefakturisane isporuke (razgraničenje i storno)",\r
"Nefakturisane isporuke {0}/{1} (otpremnice bez računa: {2})",\r
"Nefakturisane isporuke: potraživanje za nefakturisani prihod (po kupcu); zatvara se stornom kad se izda račun",\r
"Nefakturisani prihod od prodaje robe",\r
"Nefakturisani prihod od usluga",\r
"Nefakturisano bez PDV",\r
"Neiskorišćen avans {0} (u glavnoj knjizi na kontu primljenih avansa)",\r
"Nema knjiženja u periodu.",\r
"Nema lica koje je i kupac i dobavljač.",\r
"Nema nefakturisanih isporuka na izabrani dan.",\r
"Nema otvorenih stavki na izabrani dan.",\r
"Nema otvorenih stavki.",\r
"Nema partnera sa saldom na izabranim kontima.",\r
"Nema razlika.",\r
"Nema stavki u periodu.",\r
"Neobjašnjeno",\r
"neobjašnjeno {0} — provjeriti početno stanje i ručna knjiženja",\r
"Neto (+ dug lica)",\r
"NFP",\r
"Obaveza (dobavljač)",\r
"Otpremnica {0} od {1} — {2}: isporučeno, nije fakturisano{3}",\r
"Otpremnice sa količinom bez računa. „Proknjiži mjesec\\" pravi nalog NFP na posljednji dan mjeseca isporuke (D 2810 kupac / P 6020 ili 6120, uz PDV kad je osmi dan od isporuke prošao — ZPDV čl. 18 st. 3); kad se izda račun, nalog NFP-storno zatvara 2810. Nalozi se prave od mjeseca",\r
"OTVORENE",\r
"Otvorene stavke iz glavne knjige",\r
"Otvoreno duguje",\r
"Otvoreno potražuje",\r
"Partner ne postoji.",\r
"Partner nema knjiženja do izabranog dana.",\r
"Partner nije izabran.",\r
"partnera)",\r
"Partneri u glavnoj knjizi",\r
"PDV nastao",\r
"PDV obaveza (8. dan)",\r
"Plaćanje gotovinom bez naloga (mjesec nije proknjižen): {0}",\r
"Plaćanje načina „Ostalo\\" (ne knjiži se automatski): {0}",\r
"Plaćanje sa izvoda bez naloga (mjesec nije proknjižen): {0}",\r
"po kontu",\r
"Početno",\r
"Pojedinačni IOS",\r
"Potraživanja za nefakturisani prihod (isporuke bez računa)",\r
"Potraživanje (kupac)",\r
"Potvrđujemo saglasnost [ ] Osporavamo iznos od ______________ EUR, iz razloga: ______________________________",\r
"Prema stanju u našoj glavnoj knjizi, na dan {0} nema otvorenih stavki (saldo 0,00 EUR).",\r
"Prema stanju u našoj glavnoj knjizi, naša obaveza prema Vama na dan {0} iznosi {1} EUR i sastoji se od sljedećih otvorenih stavki:",\r
"Prema stanju u našoj glavnoj knjizi, Vaše dugovanje prema nama na dan {0} iznosi {1} EUR i sastoji se od sljedećih otvorenih stavki:",\r
"Pretraga (naziv, PIB)",\r
"Račun {0} od {1} bez naloga (mjesec nije proknjižen)",\r
"radnici",\r
"Razlike kod {0} partnera (ukupno {1} EUR).",\r
"Ručni nalozi na kontima kupaca i dobavljača ({0}): {1} stavki (duguje {2}, potražuje {3}). Evidencija partnera (otvorene stavke i IOS iz dokumenata) ih ne sadrži; razlike: Partneri u glavnoj knjizi → Usklađivanje.",\r
"Sačuvano: {0}",\r
"SALDA",\r
"Salda partnera",\r
"Salda partnera iz glavne knjige",\r
"SALDO: {0} EUR {1}",\r
"samo dobavljači",\r
"samo kupci",\r
"samo sa ručnim nalogom",\r
"stanje {0}",\r
"Stavke istog veznog dokumenta se zatvaraju međusobno (faktura, odobrenje, ručni nalog sa istim brojem); uplate bez veznog dokumenta zatvaraju najstarije otvorene stavke partnera. Zbir otvorenog jednak je saldu partnera na kontu.",\r
"Stavke na kontima kupaca i dobavljača bez partnera: {0} (saldo {1}). Kartica partnera, salda i IOS iz glavne knjige ih ne vide.",\r
"Storno nefakturisane isporuke — faktura {0} (otpremnice {1})",\r
"Storno nefakturisanog prihoda od prodaje robe",\r
"Storno nefakturisanog prihoda od usluga",\r
"Storno PDV",\r
"Storno razgraničenja otpremnice {0} — faktura {1}",\r
"substr({0}.Konto,1,1) IN ('0','1','2','3','4')",\r
"Sva konta sa početnim stanjem ili prometom u periodu. Izvoz sadrži stavke svakog konta (knjiga za štampu); klik na konto prikazuje njegovu karticu.",\r
"svi (lice: kupac i dobavljač zajedno)",\r
"Trošak {0} od {1} bez naloga (mjesec nije proknjižen)",\r
"Trošak {0} od {1} u glavnoj knjizi na dobavljaču, a evidencija ga ne vodi kao dug (način plaćanja nije „virman\\")",\r
"Ukupno {0} (promet {1} / {2})",\r
"Uporedi glavnu knjigu i evidenciju",\r
"UPPER(REPLACE(REPLACE(COALESCE({0},''),' ',''),'-',''))",\r
"Usaglašavanje potraživanja i obaveza prethodi popisu (Pravilnik o popisu, čl. 2 st. 2) — najmanje jednom godišnje, uz vjerodostojnu ispravu.",\r
"USKL",\r
"Usklađivanje glavne knjige i evidencije partnera",\r
"Usklađivanje sa evidencijom",\r
"Uzrok",\r
"Vezni dokument",\r
"Virmansko plaćanje upisano ručno, bez izvoda banke: {0}",\r
"— proknjižiti mjesec (Finansije → Proknjiži mjesec)",\r
"— sva knjiženja —",\r
", KO {0}",\r
", parcela {0}",\r
", PD {0}",\r
", ugovor {0}",\r
", ulazni PDV se odbija (ZPDV čl. 37 st. 1). Trošak unesen u Nabavci sa mjestom troška ovog objekta i ručni nalog na kontu objekta ulaze isto.",\r
"· {0} raspodjela nije u ravnoteži",\r
"· duguje",\r
"· konto",\r
"· konto u izgradnji",\r
"· NV",\r
"· objekat robnog knjigovodstva:",\r
"· račun {0} ({1})",\r
"· varijanta",\r
"· zalihe",\r
"· završen {0}",\r
"(bez mjesta troška)",\r
"(na završetku)",\r
"(objekat gradnje)",\r
"(od toga direktno na rashod {0})",\r
"(PD {0})",\r
"(prodat — rashod)",\r
"(situacija {0})",\r
"(ugašeno)",\r
"{0} PD sa više aktivnih ugovora",\r
"{0} raspodjela {1} · metoda: {2} · iznos {3}",\r
"{0} troškova kamata od 2027 — prenijeti na 562.",\r
"{0} troškova objekta još nije proknjiženo (Finansije → Proknjiži mjesec).",\r
"← Lista objekata",\r
"+ Novo mjesto troška",\r
"+ Posebni dio",\r
"+ Ugovor o kupoprodaji",\r
"A — investicije u toku (027 po objektu)",\r
"AND {0}.MjestoTroskaID=?",\r
"AND s.MarketID=?",\r
"Avans — {0}, {1}{2}",\r
"Avans nije odbijen: {0}",\r
"Avans za posebni dio objekta",\r
"Avansi i računi su poslije 01.04.2026 — zemljište je u osnovici.",\r
"Avansi prije 01.04.2026 (oporezovani po starom zakonu, bez korekcije do visine avansa): {0}",\r
"B — nedovršena izgradnja (110)",\r
"bez broja ugovora: {0}",\r
"BILANS USPJEHA PO MJESTU TROŠKA",\r
"Broj rata",\r
"Broj zgrade",\r
"BRUTO BILANS PO MJESTU TROŠKA",\r
"Cijena po m² {0} daje {1} umjesto ugovorenih {2} (zaokruženje).",\r
"da (prodat)",\r
"Datum dospijeća rate nije ispravan.",\r
"Datum primopredaje",\r
"Datum primopredaje nije ispravan.",\r
"Datum raspodjele",\r
"Datum raspodjele nije ispravan.",\r
"Datum situacije",\r
"Datum situacije nije ispravan.",\r
"Datum ugovora nije ispravan.",\r
"Datum završetka",\r
"Datum završetka nije ispravan.",\r
"Dimenzija knjiženja: objekat gradnje, projekat, organizaciona jedinica. Mjesto troška se upisuje na stavci naloga, trošku i osnovnom sredstvu; izvještaji pokazuju rezultat po mjestu troška.",\r
"dodijeljeno",\r
"Dopunska",\r
"Dopunska raspodjela",\r
"Dopunska raspodjela (trošak poslije završetka)",\r
"Dopunska raspodjela {0} na dan {1}?",\r
"Dopunska raspodjela je upisana.",\r
"Dopunska raspodjela ne može biti prije dana završetka objekta.",\r
"Dopunska raspodjela troškova",\r
"Dospijeće",\r
"Formiraj robno (objekat veleprodaje, PD kao artikli, početno stanje po m²)",\r
"Garaža",\r
"Garažno mjesto",\r
"Geodezija i elaborat",\r
"GK {0} · evidencija {1}{2}",\r
"GK {0} · PD {1}",\r
"Glavna knjiga: konto {0} = troškovi − raspoređeno",\r
"Glavna knjiga: zalihe {0} objekta = NV neprodatih PD",\r
"Građevinska dozvola broj",\r
"Građevinska dozvola datum",\r
"i formiranje robnog knjigovodstva",\r
"Investicije u toku",\r
"Investicije u toku — objekti za prodaju",\r
"Investitor: objekti gradnje · troškovi i situacije izvođača · posebni djelovi (PD) · raspodjela troškova · zalihe po PD · prodaja, avansi i plan rata · kontrole",\r
"Investitor: troškovi objekta na kontu u izgradnji (027 ili 110 po objektu) do završetka, zatim raspodjela na posebne djelove (PD) i zalihe po PD u robnom knjigovodstvu (objekat veleprodaje po zgradi), prodaja sa avansima i konačnim računom.",\r
"IZG",\r
"Izgradnja objekata za prodaju",\r
"Izgradnja objekata za prodaju (raspodjela, prodaja PD)",\r
"Izgradnja, varijanta A: troškovi objekta do završetka (analitika po objektu: osnova + redni broj, npr. 027001)",\r
"Izgradnja, varijanta B: troškovi objekta do završetka kao nedovršena proizvodnja (MSFI za MSP 13.1)",\r
"Izgradnja: nabavna vrijednost prodatog posebnog dijela (Pravilnik 11/20 čl. 37, račun 502)",\r
"Izgradnja: prihod od prodaje posebnog dijela (602; po izboru knjigovođe 612)",\r
"Izgradnja: prodaja {0} {1}",\r
"Izgradnja: zalihe posebnih djelova po nabavnoj vrijednosti (analitika po objektu robnog knjigovodstva)",\r
"Izmjena ugovora",\r
"Iznos (NV)",\r
"Iznos rate mora biti veći od nule.",\r
"Izvođač radova (situacija)",\r
"K1–K8 po istraživanju propisa (Pravilnik 11/20, ZPDV, Zakon o izgradnji objekata, MSFI za MSP); G1–G2 = usklađenost sa glavnom knjigom (poslije „Proknjiži mjesec\\").",\r
"K1: zbir po posebnim djelovima {0} nije jednak trošku {1}.",\r
"K3: datum prometa {0} je prije upotrebne dozvole {1} (Zakon o izgradnji objekata čl. 60).",\r
"K3: upotrebna dozvola nije upisana — promet prije upotrebne dozvole nije dozvoljen (Zakon o izgradnji objekata čl. 60).",\r
"K8: kupac je obveznik PDV-a — na računu je napomena o pravu na odbitak (čl. 37 st. 5 t. 1a).",\r
"Kamate na kredit",\r
"Kamate od 01.01.2027 nisu u vrijednosti objekta (MSFI za MSP 25.2)",\r
"KARTICA KONTA {0} PO MJESTU TROŠKA",\r
"KO",\r
"Koef.",\r
"Koeficijent mora biti veći od nule.",\r
"Konačni račun (nacrt)",\r
"konačni račun bez avansa: {0}",\r
"Konačni račun je izdat; uplata se vodi kao naplata računa (Naplata od kupaca).",\r
"Konačni račun je napravljen kao nacrt (izdaje se u Fiskalizacija računa → Izdaj fakturu).{0}",\r
"Konačni račun prije upotrebne dozvole: {0}",\r
"Konačni račun za ugovor već postoji.",\r
"Konto (ili početak)",\r
"Konto {0} · ukupno {1}",\r
"Kontrole",\r
"KONTROLE",\r
"Kupac nema pravo na odbitak ulaznog PDV-a za kupovinu novoizgrađenog stambenog objekta (Zakon o PDV čl. 37 st. 5 t. 1a).",\r
"Kupac obveznik PDV-a — bez prava na odbitak (ZPDV čl. 37 st. 5 t. 1a)",\r
"LN",\r
"Lokacija / adresa",\r
"m² · NV",\r
"m² · prihod",\r
"m² bruto",\r
"m² neto",\r
"Materijal za gradilište",\r
"Metoda „relativna prodajna vrijednost\\" traži planiranu cijenu za svaki posebni dio (nema: {0}).",\r
"Metoda raspodjele",\r
"Metoda raspodjele se ne mijenja poslije završetka objekta.",\r
"Mjesta troška",\r
"Mjesto troška",\r
"Mjesto troška {0}",\r
"Mjesto troška je obrisano.",\r
"Mjesto troška je snimljeno.",\r
"Mjesto troška je u upotrebi (knjiženja: {0}, dokumenti: {1}, objekti gradnje: {2}). Brisanje nije moguće; mjesto troška se može ugasiti.",\r
"Mjesto troška ne postoji.",\r
"Mjesto troška:",\r
"n.Status<>'storniran' AND s.Konto LIKE ?{0}",\r
"Na kontu objekta postoje knjiženja. Brisanje nije moguće.",\r
"Na rashod",\r
"Nabavna vrijednost prodatih nekretnina",\r
"Nabavna vrijednost prodatog {0}",\r
"Naknada za komunalno opremanje",\r
"Nalaz",\r
"Napomena na računu: {0}",\r
"Napraviti konačni račun za {0} sa datumom primopredaje {1}?",\r
"Naziv mjesta troška je obavezan.",\r
"Nedovršena izgradnja",\r
"Nedovršena izgradnja objekata za prodaju",\r
"Nekretnine za prodaju — posebni djelovi objekata",\r
"Nema knjiženja za izabrano mjesto troška.",\r
"Nema knjiženja.",\r
"Nema kupaca obveznika.",\r
"Nema neraspoređenog troška.",\r
"Nema objekata gradnje.",\r
"Nema plana rata ni uplata.",\r
"Nema posebnih djelova.",\r
"Nema prihoda ni rashoda u periodu.",\r
"Nema slobodnog analitičkog konta za objekat. Potrebno je promijeniti osnovni konto uloge u šemama knjiženja.",\r
"Nema ugovora o kupoprodaji.",\r
"Nema.",\r
"Neraspoređeno {0} — dopunska raspodjela (neprodati PD → zalihe, prodati → 502).",\r
"Neto površina mora biti veća od nule.",\r
"Nije nastupilo.",\r
"Notar",\r
"Notar (ovjera)",\r
"Nov objekat gradnje",\r
"Nov posebni dio",\r
"Nov trošak objekta",\r
"Novo mjesto troška",\r
"NV",\r
"NV / m²",\r
"NV PD = NV objekta × (m² × koeficijent) / Σ(m² × koeficijent); koeficijent po vrsti (npr. lokal 1,2, garaža 0,5, ostava 0,3).",\r
"NV PD = NV objekta × m² PD / Σ m² (neto površina iz katastra, ZDPKN čl. 49 t. 3).",\r
"NV PD = NV objekta × planirana cijena PD / Σ planiranih cijena (MSFI za MSP 13.10).",\r
"NVObjekta",\r
"OBJ{0}",\r
"Objekat gradnje",\r
"Objekat gradnje (Izgradnja objekata za prodaju)",\r
"Objekat ima troškove. Brisanje nije moguće.",\r
"Objekat ima ugovore o prodaji. Brisanje nije moguće.",\r
"Objekat je obrisan.",\r
"Objekat je snimljen.",\r
"Objekat je u izgradnji; raspodjela se radi na završetku.",\r
"Objekat je već završen.",\r
"Objekat je završen; novi posebni dio se dodaje tek poslije poništenja završetka.",\r
"Objekat je završen. Raspoređeno {0}.{1}{2}",\r
"Objekat nema posebnih djelova.",\r
"Objekat nema troškova do dana završetka.",\r
"Objekat nema troškova.",\r
"Objekat nije završen; trošak ulazi u raspodjelu na završetku.",\r
"Objekat nije završen: konačni račun se izdaje poslije završetka i raspodjele troškova (posebni dio nema nabavnu vrijednost).",\r
"Obračun raspodjele",\r
"OBRAČUN RASPODJELE TROŠKOVA — {0}",\r
"Obrisati mjesto troška {0}?",\r
"Obrisati objekat {0}?",\r
"Obrisati posebni dio {0}?",\r
"Od 01.01.2027. kamata na kredit za izgradnju je rashod perioda (MSFI za MSP 25.2), ne trošak objekta. Upisuje se kao trošak bez mjesta troška objekta (konto 562).",\r
"okončana",\r
"Organizaciona jedinica",\r
"Osnovica (bez PDV)",\r
"Osnovna",\r
"Ostava",\r
"Oznaka (projekat)",\r
"Oznaka {0} već postoji u objektu.",\r
"Oznaka posebnog dijela je obavezna (projektna oznaka ili PD broj).",\r
"parcela {0}",\r
"PD (katastar)",\r
"PD {0} — {1} {2} m²{3}",\r
"PD {0} · raspoređeno {1}{2}{3}",\r
"PD {0} {1}",\r
"PD broj (katastar)",\r
"PD neprodat duže od 12 mjeseci poslije upotrebne dozvole",\r
"PDBroj",\r
"PDID",\r
"PDV osnovica sa zemljištem od 01.04.2026 (ZPDV čl. 4 st. 5, čl. 72b)",\r
"Plan rata (jednake rate)",\r
"Plan rata je upisan.",\r
"Planirana cijena",\r
"Planirana cijena (bez PDV)",\r
"Planirana cijena ne može biti negativna.",\r
"Po vrsti:",\r
"PODACI",\r
"Podrum",\r
"ponderisani m² (koeficijenti)",\r
"Ponderisani m² (koeficijenti)",\r
"Poništi završetak",\r
"Poništiti završetak objekta (raspodjele, nalozi IZG i početno stanje robe objekta se brišu)?",\r
"Posebni dio",\r
"Posebni dio {0}",\r
"Posebni dio {0} već ima ugovor o kupoprodaji (K2).",\r
"Posebni dio ima ugovor o prodaji. Brisanje nije moguće.",\r
"Posebni dio je obrisan.",\r
"Posebni dio je snimljen.",\r
"Posebni dio ne postoji.",\r
"Posebni dio nije izabran.",\r
"Posebni dio završenog objekta se ne briše.",\r
"Posebni djelovi",\r
"Poslovni prostor",\r
"Potvrđene raspodjele",\r
"Potvrdi dopunsku raspodjelu",\r
"Potvrdi završetak",\r
"Površina, koeficijent i vrsta se ne mijenjaju poslije završetka objekta (raspodjela je urađena po njima).",\r
"predat (račun izdat)",\r
"Prenos prihoda ({0}) {1} na prihod od prodaje nekretnina",\r
"Prihod od prodaje {0} — {1}",\r
"Prihodi (klasa 6) i rashodi (klasa 5) iz naloga perioda, bez zaključka godine. Red „bez mjesta troška\\" nosi ostatak — zbir je rezultat firme. Klik na red: prihodi i rashodi po računima.",\r
"Prihodi od prodaje nekretnina (posebni djelovi objekata)",\r
"Prijava građenja",\r
"Priključci (struja, voda)",\r
"privremena",\r
"PRODAJA",\r
"Prodaja {0} — račun {1}",\r
"Prodaja PD ima ugovor; PD nije prodat dva puta",\r
"Prodat",\r
"Prodat (predat)",\r
"Prodat posebni dio mijenja status samo raskidom ugovora.",\r
"Prodato (predato):",\r
"Projekat i revizija",\r
"Promet PD poslije upotrebne dozvole (Zakon o izgradnji objekata čl. 60)",\r
"Prva rata",\r
"Prvi prenos novoizgrađenog objekta: PDV 21 % (ZPDV čl. 4 st. 2 t. 4, čl. 24); od 01.04.2026 zemljište je u osnovici (čl. 4 st. 5). Gotovina se ne prima (≥ 10.000 € samo preko računa — ZSPNFT).",\r
"Prvi prenos prava svojine na novoizgrađenom objektu — promet sa PDV-om (Zakon o PDV čl. 4 st. 2 t. 4).",\r
"račun u nacrtu",\r
"Rashod",\r
"Rashodi",\r
"Raskid",\r
"Raskid: {0}",\r
"Raskinut.",\r
"Raskinuti ugovor za {0}? Posebni dio postaje slobodan.",\r
"Raspodjela",\r
"RASPODJELA",\r
"Raspodjela i završetak",\r
"Raspodjela još nije urađena.",\r
"Rasprodat",\r
"Rata",\r
"Razduženje {0} po nabavnoj vrijednosti",\r
"Razlika zaokruženja ide na zadnji posebni dio; zbir je jednak trošku (K1).",\r
"Razmak (mjeseci)",\r
"REGISTAR POSEBNIH DJELOVA — {0}",\r
"relativna prodajna vrijednost",\r
"Relativna prodajna vrijednost",\r
"Rezervisan",\r
"Rješenje katastra broj",\r
"Rješenje katastra datum",\r
"Robno knjigovodstvo nije formirano: {0}",\r
"Robno knjigovodstvo objekta nije formirano (objekat veleprodaje i artikal posebnog dijela).",\r
"Robno: {0} PD kao artikli, početno stanje zaključeno.",\r
"Rok {0} — zahtjev još nije upisan.",\r
"Rok {0} je prošao, zahtjev nije upisan.",\r
"SIF",\r
"Šifarnik",\r
"Šifarnik je prazan. Objekat gradnje dobija mjesto troška sam (Izgradnja objekata za prodaju).",\r
"Šifarnik mjesta troška (objekat gradnje, projekat, organizaciona jedinica) · kartica konta, bruto bilans i bilans uspjeha po mjestu troška",\r
"Šifra {0} je već dodijeljena drugom mjestu troška.",\r
"Šifra {0} je već dodijeljena drugom objektu.",\r
"Situacija",\r
"Situacija broj",\r
"Slobodan",\r
"Slobodni: {0} — dat u zakup duži od 60 dana: ispravka odbitka PDV (čl. 39, 10 godina) i prenos na investicione nekretnine (024).",\r
"Snimi trošak",\r
"Snimi ugovor",\r
"Sobnost",\r
"stan",\r
"Stan",\r
"Status „prodat\\" postavlja ugovor o kupoprodaji.",\r
"Stavki naloga",\r
"Storno razduženja {0} po prodajnoj vrijednosti",\r
"Storno razduženja {0} po prodajnoj vrijednosti (PD se razdužuje po nabavnoj)",\r
"Stručni nadzor",\r
"Takse i tehnički pregled",\r
"Trošak objekta je snimljen (Nabavka i troškovi, mjesto troška objekta). Nalog nastaje u Proknjiži mjesec.",\r
"Trošak poslije završetka je raspoređen",\r
"Trošak poslije završetka objekta",\r
"Trošak se upisuje u Nabavku i troškove (KPR, PR-PDV) sa mjestom troška objekta; u glavnoj knjizi ide na konto",\r
"Troškovi",\r
"Troškovi do dana",\r
"Troškovi na 027 sa analitikom po objektu do završetka i upisa u katastar; zatim zalihe po PD (praksa knjigovođa).",\r
"TROŠKOVI OBJEKTA {0}",\r
"U izgradnji",\r
"Ugovor je raskinut.",\r
"Ugovor o kupoprodaji br. {0}{1}{2}.",\r
"Ugovor o kupoprodaji je snimljen.",\r
"Ugovor o kupoprodaji posebnog dijela",\r
"Ugovorena cijena",\r
"Upiši uplatu (avansni račun)",\r
"Uplaceno",\r
"Uplaćeno (avansi)",\r
"Uplaćeno (sa PDV)",\r
"Uplata je upisana kao avansni račun (PDV na dan prijema). Fiskalizacija avansa: Avansi i knjižna odobrenja.",\r
"Uplata van plana",\r
"upotrebna dozvola {0}",\r
"Upotrebna dozvola broj",\r
"Upotrebna dozvola datum",\r
"Upotrebna dozvola nije upisana (Zakon o izgradnji objekata čl. 59–60: upotreba i promet tek po upotrebnoj dozvoli).",\r
"Upotrebna dozvola nije upisana.",\r
"Urbanistička parcela",\r
"Varijanta",\r
"Varijanta knjiženja",\r
"Varijanta knjiženja se ne mijenja: na kontu objekta postoje knjiženja.",\r
"Vrsta mjesta troška nije sa spiska.",\r
"Vrsta posebnog dijela nije sa spiska.",\r
"Vrsta situacije",\r
"Vrsta troška nije sa spiska.",\r
"WHERE d.ObjekatID=?",\r
"Za posebni dio objekta postoji konačni račun. Završetak se ne poništava.",\r
"Za ugovor je izdat konačni račun. Izmjena nije moguća.",\r
"Za ugovor je izdat konačni račun. Raskid ide stornom računa.",\r
"Zahtjev {0}, rok {1}.",\r
"Zahtjev za upis u katastar",\r
"Zahtjev za upis u katastar u roku od 7 dana od upotrebne dozvole (čl. 59 st. 4)",\r
"Zarade na gradilištu",\r
"Završen objekat se ne briše. Prvo se poništava završetak.",\r
"Završetak objekta",\r
"Završetak objekta — {0} troškova",\r
"Završetak objekta {0} na dan {1}: raspodjela {2} na {3} PD ({4}){5}. Potvrditi?",\r
"Završetak objekta {0}: posebni djelovi po m² i nabavnoj vrijednosti",\r
"Završetak objekta i prenos u zalihe po PD",\r
"Završetak objekta i raspodjela troškova",\r
"Završetak objekta je poništen.",\r
"Zbir nabavne vrijednosti PD = raspoređeni trošak objekta",\r
"Zbir osnovice raspodjele je nula.",\r
"Zbir rata {0} nije jednak cijeni sa PDV {1}.",\r
"Zemljište",\r
"Zgrada u izgradnji radi prodaje je zaliha od početka (MSFI za MSP 13.1): 110 po objektu, zatim zalihe po PD.",\r
", odbitak (softver FZO) {0} €",\r
"{0} {1} ({2} €). Izdaje se na ekranu Izlazne fakture; izdata faktura ulazi u KIF i glavnu knjigu.",\r
"Boravišna taksa — obaveza prema opštini",\r
"Dopuni nacrt izlazne fakture",\r
"Faktura FZO-u za {0} je već izdata (broj {1}). Izmjena ide knjižnim odobrenjem ili stornom.",\r
"Fond za zdravstveno osiguranje Crne Gore",\r
"Hotel: avans gosta (avansni račun na recepciji, bez PDV); iskorišćen/vraćen se zatvara",\r
"Hotel: račun „na sobu\\" (odloženo plaćanje) do naplate sumarnim računom",\r
"Iskorišćeni / vraćeni avansi gostiju (bez PDV)",\r
"izdata",\r
"Kupac FZO nije upisan.",\r
"Kupac za fakture FZO-u (recepti apoteke). Upisati PIB.",\r
"Kupci u zemlji — gosti hotela, račun „na sobu\\" (do sumarnog računa)",\r
"Ljekovi izdati na recept na teret FZO — {0} ({1} rec., PDV {2} %)",\r
"Ljekovi izdati na recept na teret FZO za {0}: {1} recepata, dio FZO {2} €, naknada {3} €{4}. Specifikacija recepata u prilogu.",\r
"nacrt",\r
"Nacrt izlazne fakture je dopunjen",\r
"Naknada apoteci po FZO receptu — {0} ({1} rec.)",\r
"Naplaćeno sumarnim računima",\r
"Napravi izlaznu fakturu",\r
"Napravljen je nacrt izlazne fakture",\r
"Napravljeno iz recepata kasa (Apoteka → Faktura FZO), {0}. Rok dostave {1}.",\r
"Obaveze za boravišnu taksu (prema opštini)",\r
"od toga usluge",\r
"Pazar: boravišna taksa naplaćena sa računima — obaveza prema opštini",\r
"Pazar: prihod od usluga sa kase (bez razduženja robe)",\r
"Prihod od usluga sa kase ({0})",\r
"Prihodi od usluga sa kase (dnevni pazar)",\r
"Primljeni avansi gostiju (bez PDV)",\r
"Primljeni avansi od gostiju (recepcija)",\r
"Računi „na sobu\\" (odloženo plaćanje)",\r
"recepti FZO",\r
"Recepti na teret FZO — razduženje robe (bez PDV)",\r
"Recepti na teret FZO — razduženje robe po prodajnoj (faktura FZO-u)",\r
"samo usluge",\r
"Ukalkulisani PDV u dijelu recepata na teret FZO",\r
"Umanjenje: naknada za softver FZO — {0}",\r
"usluge sa kase",\r
"Za {0} nema FZO recepata sa kasa.",\r
"). Iznos za FZO = dio FZO (već umanjen za naplaćenu participaciju i doplatu) + naknada po FZO receptu; odbitak za softver FZO se upisuje ručno. Recepti stižu sa kasa uz razmjenu cijena (kasa šalje posljednja 62 dana); stornirani i privatni recepti nisu u fakturi. Dugme „Napravi izlaznu fakturu\\" pravi nacrt izlazne fakture za FZO (kupac FZO, period prometa = mjesec); izdata faktura ulazi u KIF i glavnu knjigu (potraživanje od FZO-a), a roba za dio FZO-a je razdužena u nalogu dnevnog pazara.",\r
"— bez —",\r
"— po računu —",\r
"— sa računa —",\r
"— upisuje se u nalogu —",\r
"; ima i {0} kalkulacija",\r
"; preskočeno (nesiguran prijedlog ili zaključan mjesec): {0}",\r
"; zadržano za provjeru računa primaoca: {0}",\r
"… ukupno {0}",\r
"(sopstveni)",\r
") — stanje pri posljednjem otvaranju",\r
"{0} automatskih naloga",\r
"{0} br. {1} ({2}×)",\r
"{0} do sada nije knjižen na kontu {1} ({2} ranijih knjiženja, najčešće {3}).",\r
"{0} EUR — nezavršen nalog se pravi na dan roka",\r
"{0} faktura kupcu bez PIB-a (nije označen kao fizičko lice): {1}{2}",\r
"{0} od {1} {2}",\r
"{0} od {1} knjiženja partnera",\r
"{0} od {1} naloga sa ovim partnerom",\r
"{0} od {1} stavki sa sličnim opisom",\r
"{0} od {1} troškova: {2}{3}",\r
"{0} pazar(a) bez ispravne podjele po stopama — polja 10–12 prijave su premala",\r
"{0} trošak(a) sa PDV-om bez dobavljača iz šifarnika — knjiga primljenih računa nema PIB izdavaoca",\r
"{0} trošak(a) vrste bez prava na odbitak ima PDV {1} EUR u polju 19 — provjeriti oznaku „PDV bez prava na odbitak\\"",\r
"{0} ulazni dokument(a) sa stopom van 21 / 15 / 7 / 0 %",\r
"{0}: {1} naloga",\r
"{0}.{1}.{2} — {3} (Zakon o PDV: do 15. u mjesecu za prethodni mjesec)",\r
"{0}.{1}.{2} — izvodi novijeg datuma nijesu uvezeni",\r
"{0}.Konto NOT LIKE '27%' AND {1}.Konto NOT LIKE '47%'",\r
"↻ Ponovo",\r
"💾 Sačuvaj pravilo",\r
"Alt+P",\r
"Bez odluke",\r
"Čeka: {0}",\r
"Dan knjiženja je od 1 do 28.",\r
"Do (mjesec, prazno = bez kraja)",\r
"Dobavljač je obavezan (iz šifarnika).",\r
"Dobavljači bez pravila čiji su troškovi bar 3 puta (i bar 80 %) iste vrste.",\r
"Dokumenti koji čekaju knjigovođu na jednom mjestu · pravila dobavljača · ponavljajući nalozi. Prijedlozi se prave iz podataka firme na ovom računaru.",\r
"dospio — nalog nije napravljen",\r
"Dospjeli ponavljajući nalozi",\r
"glavna knjiga {0} · knjige {1} · razlika {2}{3}",\r
"Glavna knjiga i PR-PDV, stope, ponovljeni ulazni računi, PDV bez prava na odbitak, PIB kupca na fakturama, rok prijave. Izvještaj samo čita podatke — obračun PR-PDV se ne mijenja.",\r
"Godišnje",\r
"Isti dobavljač ima račun na isti iznos ({0} EUR) u razmaku do 3 dana ({1}). Moguć je dvostruki unos.",\r
"Izdate fakture pravnom licu sa PIB-om kupca",\r
"Izmijeni pravilo prema formi",\r
"Iznos {0} EUR je daleko od uobičajenog za ovog dobavljača (medijana {1} EUR iz {2} ranijih računa).",\r
"Iznos je obavezan (stavke šablona nose udio iznosa).",\r
"još {0} dana",\r
"Kalkulacije dobavljača sa pravilom „trošak\\"",\r
"Knjige i PDV prijava se više ne mijenjaju.",\r
"Kontrole nisu moguće",\r
"Kontrole u toku…",\r
"Kvartalno",\r
"Mjesec nije zaključan — poslije predaje prijave zaključati (Poreske knjige).",\r
"Mjesec proknjižen u glavnoj knjizi",\r
"Mjesec zaključan",\r
"Mjeseci sa dokumentima bez naloga u glavnoj knjizi (Finansije → Proknjiži mjesec)",\r
"Nalozi sačuvani prije završetka i nalozi napravljeni iz ponavljajućih naloga — nijesu u glavnoj knjizi",\r
"Napravi dospjele nezavršene naloge",\r
"Napravi nezavršene naloge (",\r
"Napravi pravilo",\r
"Napravljeno nezavršenih naloga iz ponavljajućih naloga: {0}.",\r
"Napravljeno nezavršenih naloga: {0}.",\r
"Napravljeno nezavršenih naloga: {0}. Nalozi su u „Nezavršeni nalozi\\" i ulaze u glavnu knjigu tek kad se proknjiže.",\r
"Neispravno: {0} · za provjeru: {1}",\r
"Nema naloga — poređenje glavne knjige sa PDV prijavom nije moguće (Finansije → Proknjiži mjesec).",\r
"Nema ponavljajućih naloga.",\r
"Nema ponovljenih brojeva računa.",\r
"Nema pravila. Pravilo se pravi ovdje ili dugmetom „Zapamti kao pravilo\\" pri unosu troška.",\r
"Nema rokova.",\r
"Nema sigurnih transakcija.",\r
"Neobičan par partner–konto",\r
"Neproknjiženi mjeseci",\r
"Nezavršeni nalozi",\r
"Nije moguće: {0}",\r
"ništa ne čeka",\r
"Ništa ne čeka pregled.",\r
"Novi",\r
"objekat {0} ({1})",\r
"Obrisati ponavljajući nalog? Već napravljeni nezavršeni nalozi ostaju.",\r
"Obrisati pravilo dobavljača?",\r
"Od (mjesec)",\r
"Odustalo se.",\r
"Osnovni iznos",\r
"Ostale firme na ovom računaru (",\r
"Otvori Banka",\r
"Otvori Kalkulacije i fakture",\r
"Otvori Nabavka i troškovi",\r
"Otvori nezavršene naloge",\r
"Otvori Skenovi",\r
"Pazari razvrstani po stopama PDV-a",\r
"PDV {0} % ({1})",\r
"PDV bez prava na odbitak (po pravilu)",\r
"PDV kontrole prije prijave —",\r
"Periodi za koje nezavršen nalog još nije napravljen",\r
"Plaćanja i naplate sa izvoda koje nijesu proknjižene; sigurne = partner po PIB-u, upamćenom računu ili pravilu banke",\r
"plaćanje {0} ({1})",\r
"po pravilu",\r
"Po pravilu dobavljača račun je upisan kao trošak{0}, ne kao kalkulacija.",\r
"Početni period (GGGG-MM) je obavezan.",\r
"Pokreni kontrole",\r
"PON",\r
"Ponavljajući nalog",\r
"Ponavljajući nalog je sačuvan. Na dan roka program pravi nezavršen nalog (Finansije → Nezavršeni nalozi).",\r
"Ponavljajući nalog za {0}.",\r
"Ponavljajući nalog: {0} za {1}",\r
"Ponavljajući nalozi",\r
"Ponavljajući nalozi (",\r
"Ponavljajući nalozi (dospjeli i u narednih 10 dana)",\r
"Ponavljajući nalozi (Finansije)",\r
"Ponavljajući nalozi (Finansije) — nezavršen nalog se pravi na dan roka",\r
"Ponavljajući nalozi za knjiženje: {0}",\r
"Poređenje glavne knjige i PR-PDV",\r
"Posljednji napravljen",\r
"Posljednji uvezen izvod",\r
"Potrebne su bar dvije stavke sa kontom (šablon).",\r
"Potvrdi sigurne (",\r
"PRAVILA",\r
"Pravila (",\r
"Pravila dobavljača",\r
"pravilo dobavljača",\r
"Pravilo dobavljača",\r
"Pravilo dobavljača je sačuvano. Primjenjuje se pri sljedećem unosu (QR računa, sken, Nabavka i troškovi).",\r
"Pravilo je sačuvano.",\r
"Pravilo važi za sljedeće račune dobavljača: QR računa i sken iz Menadžera (pravilo „trošak\\" upisuje račun u Nabavka i troškovi umjesto kalkulacije), ručni unos troška (polja se popunjavaju sama). Bez pravila program predlaže iz ranijih unosa istog dobavljača.",\r
"Pravilo za {0} je sačuvano.",\r
"predložio program",\r
"Prepoznat po",\r
"Program je predložio",\r
"Program je predložio:",\r
"Program je predložio: {0}.",\r
"Program predlaže pravila (",\r
"Proknjiženo — {0}.",\r
"Proknjiženo transakcija: {0} ({1} EUR){2}.",\r
"Proknjiži sigurne (",\r
"Proknjiži sve (",\r
"Proknjižiti {0} transakcija sa partnerom prepoznatim po PIB-u, upamćenom računu ili pravilu banke?",\r
"prošao",\r
"Provjera ulaznog računa",\r
"Račun broj {0} ovog dobavljača je već unesen kao kalkulacija {1}.",\r
"Račun broj {0} ovog dobavljača je već upisan u troškove (unos {1}, {2}).",\r
"Račun je unesen kao roba, a pravilo dobavljača kaže da je trošak — ispravka „Prebaci u troškove\\" (Kalkulacije i fakture)",\r
"Računi skenirani telefonom ili Menadžerom koji čekaju obradu ili su u greškama",\r
"ranijih računa",\r
"ranijih troškova",\r
"Raspored (dospjeli i narednih 40 dana)",\r
"roba (kalkulacija)",\r
"Rok (dana)",\r
"rok {0}.{1}. ({2}) — {3}",\r
"rok je prošao prije {0} dana",\r
"Rok PDV prijave i plaćanja za {0}/{1}",\r
"rok plaćanja {0} dana ({1})",\r
"Rok plaćanja je broj dana od 0 do 365.",\r
"Šablon",\r
"sigurnih prijedloga: {0}",\r
"sigurnih za knjiženje: {0}",\r
"Skenovi računa",\r
"Skenovi računa koji čekaju",\r
"Stavke šablona nijesu u ravnoteži za iznos {0} (duguje {1}, potražuje {2}).",\r
"Stopa PDV-a je 21, 15, 7 ili 0 %.",\r
"Sve fakture pravnim licima imaju PIB kupca.",\r
"Sve kontrole su u redu.",\r
"Sve stope ulaza su važeće.",\r
"Svi pazari imaju podjelu po stopama.",\r
"Svi troškovi sa PDV-om imaju dobavljača iz šifarnika.",\r
"Transakcije izvoda koje čekaju",\r
"Trošak (Nabavka i troškovi)",\r
"Trošak bez vrste se knjiži na podrazumijevani konto troška; sigurne = vrsta po pravilu dobavljača ili bar 3 ista ranija unosa (80 %)",\r
"Troškovi bez vrste troška",\r
"Troškovi bez vrste troška (konta)",\r
"Troškovi vrste bez prava na odbitak su označeni.",\r
"u greškama: {0}",\r
"Učestalost nije sa spiska.",\r
"Ulazne stope PDV-a (21 / 15 / 7 / 0 %)",\r
"Ulazni PDV bez prava na odbitak (ZPDV čl. 37 st. 5)",\r
"Ulazni PDV sa računa dobavljača iz šifarnika (PIB)",\r
"Ulazni računi uneseni dvaput (isti dobavljač i broj)",\r
"Upisati predloženu vrstu troška svim troškovima sa prijedlogom „po pravilu\\" ili „sigurno\\" (samo otvoreni mjeseci)?",\r
"Virman (dug)",\r
"Vrsta troška (konto)",\r
"vrsta troška {0} ({1}, {2})",\r
"Vrsta troška je upisana za {0} troškova{1}. Konto troška se mijenja pri sljedećem knjiženju mjeseca.",\r
"Vrsta troška po pravilu",\r
"Vrsta troška se upisuje samo uz pravilo „trošak\\".",\r
"Vrsta troška, objekat, rok, stopa i način plaćanja iz forme postaju pravilo dobavljača",\r
"Vrsta ulaza nije sa spiska (roba ili trošak).",\r
"ZA",\r
"za {0} dana",\r
"Za ovog dobavljača još nema pravila ni ranijih troškova.",\r
"Za pregled",\r
"Za pregled i knjiženje",\r
"Za uraditi",\r
"Zakup, rata kredita, lizing, paušal, mjesečno ukidanje razgraničenja… Stavke dolaze iz šablona naloga (Nalog za knjiženje → Sačuvaj kao šablon). Na dan roka program pravi nezavršen nalog za period; u glavnu knjigu ulazi tek kad ga knjigovođa proknjiži.",\r
"Zapamti kao pravilo",\r
"Završni period je prije početnog.",\r
"Završni period nije u obliku GGGG-MM.",\r
"Roba ili trošak, vrsta troška (konto), objekat, rok plaćanja, PDV — primjena pri sljedećem unosu računa",\r
"Skenovi, transakcije izvoda, troškovi bez konta, neproknjiženi mjeseci, nezavršeni i ponavljajući nalozi — masovna potvrda sigurnih",\r
"Zakup, kredit, lizing, paušal: šablon, iznos i učestalost — nezavršen nalog na dan roka",\r
"{0}{1} – {2} · početno stanje {3} · saldo {4}",\r
"Automatski nalog iz dokumenta ({0} #{1}).",\r
"Član komisije",\r
"GLAVNA KNJIGA",\r
"IOS — {0} — na dan {1}",\r
"IOS na dan {0}",\r
"Izrađeno: {0}",\r
"KARTICA PARTNERA — {0}",\r
"Kontrola: razlika salda duguje i potražuje {0} EUR — glavna knjiga NIJE u ravnoteži.",\r
"Kontrola: zbir salda duguje jednak je zbiru salda potražuje — glavna knjiga je u ravnoteži.",\r
"Mjesto i datum: ________________________",\r
"Mjesto i datum: ______________, {0}",\r
"Nalog NIJE u ravnoteži: razlika {0} EUR.",\r
"Nema podataka za izabrani period i uslove.",\r
"OBAVJEŠTENJE",\r
"objekat: {0}",\r
"OTVORENE STAVKE IZ GLAVNE KNJIGE",\r
"Ovlašćeno lice partnera (M.P.)",\r
"PIB {0} ·",\r
"Početno stanje {0} · promet duguje {1} · promet potražuje {2} · saldo na dan {3}: {4} EUR (pozitivan = dugovni).",\r
"Predsjednik popisne komisije",\r
"SALDA PARTNERA IZ GLAVNE KNJIGE",\r
"Saldo na dan {0}: {1} EUR (pozitivan = dug partnera, negativan = naša obaveza).",\r
"Sastavio / odgovorno lice (M.P.)",\r
"USKLAĐIVANJE GLAVNE KNJIGE I EVIDENCIJE PARTNERA",\r
"uz ugovor broj {0}",\r
"vrsta naloga {0}",\r
"Za {0}",\r
"______________________________\\n(potpis i pečat)",\r
"— bez šablona —",\r
"— izaberi dokument —",\r
"— nalog nije u ravnoteži",\r
"· otvoreno {0}",\r
"· valuta {0}",\r
"{0}\\n\\nIpak proknjižiti nalog?",\r
"{0}\\n\\nIpak snimiti?",\r
"{0} {1}, {2} EUR.",\r
"{0} Trošak {1} EUR (Nabavka i troškovi, unos {2}).",\r
"↗ Otvori nalog",\r
"↻ Proknjiži ponovo",\r
"+ Nov dokument",\r
"★ — stavka ide u grupu „Omiljeno\\" na vrhu menija. Prikaz — stavka se vidi u meniju (važi za ovaj računar i ovu firmu).",\r
"⚙ Prilagodi meni",\r
"💾 Proknjiži nalog",\r
"📄 Štampa (PDF)",\r
"Analitička kartica konta, kartica partnera po kontu, promet za period",\r
"Asignacija",\r
"Asignacija (upućivanje)",\r
"Automatski nalog se ispravlja kroz dokument iz koga je nastao.",\r
"Bez izbora se prikazuje sve, kao do sada.",\r
"Brisanje nacrta",\r
"Briše se samo nacrt. Potvrđen dokument se stornira.",\r
"Broj {0} · {1}",\r
"Bruto bilans po klasi, grupi, sintetici i analitici",\r
"Cesija",\r
"Cesija (ustupanje potraživanja)",\r
"Datum dokumenta je obavezan.",\r
"Datum storna",\r
"Direktan otpis na rashod",\r
"Dnevni pazari po objektu · pregled pazara sa kontrolom zbira (izvoz) · knjiženje pazara",\r
"Dnevnik knjiženja",\r
"dobavljačima",\r
"Dodatne djelatnosti (Knjigovodstvo)",\r
"dok. {0}",\r
"Dokument {0} ({1}): otvoreno je {2} EUR, a u stavci {3} EUR.",\r
"Dokument je potvrđen. {0}",\r
"Dokument je potvrđen. Nalog {0} je proknjižen.",\r
"Dokument je storniran. Fakture su ponovo otvorene.",\r
"Dokument je već potvrđen ili storniran.",\r
"Dokument mora imati bar jednu stavku potraživanja (P) i bar jednu stavku obaveze (O).",\r
"Dokument nema stavki za knjiženje.",\r
"Dokument nije potvrđen.",\r
"Dokument se ne knjiži (nacrt, ponuda ili storniran račun bez fiskalizacije).",\r
"Drugo lice",\r
"Dužnik (cesus)",\r
"Dužnik (kupac)",\r
"Dužnik prema nama",\r
"Evidencija trgovine i cijene",\r
"Finansijsko knjigovodstvo",\r
"Finansijsko knjigovodstvo, pomoćne knjige, porezi, finansijski iskazi, zarade",\r
"Firma, objekti, korisnici, backup i arhiva godine",\r
"Fiskalizacija računa",\r
"Gase se naša potraživanja",\r
"Gase se naše obaveze",\r
"Gašenje potraživanja i obaveza bez novca: prebijanje, ustupanje potraživanja, upućivanje i preuzimanje duga. Potvrđen dokument zatvara fakture na obje strane i knjiži se u glavnu knjigu (nalog KMP).",\r
"Gašenje potraživanja i obaveza u lancu tri ili više lica — svaki učesnik potpisuje.",\r
"Glavna knjiga i izvještaji",\r
"Glavnica i kamata se upisuju ručno",\r
"Hronološki spisak naloga i stavki za period",\r
"ISP",\r
"Ispravka i preknjižavanje",\r
"Ispravka pogrešnog konta",\r
"Ispravno konto",\r
"iz mape",\r
"Izdavanje računa kupcima i gotovinski promet sa kasa — svaki račun se knjiži u Računovodstvo",\r
"Izgradnja objekata za prodaju (investitor)",\r
"IZJAVA O PREBIJANJU (KOMPENZACIJI)",\r
"Izlazna faktura u stavci traži kupca.",\r
"Izlazne fakture i ponude kupcima · knjiženje fakture u glavnu knjigu",\r
"Izmjena naloga za knjiženje",\r
"Iznos duguje ili potražuje je obavezan.",\r
"Iznos stavke mora biti veći od nule.",\r
"IZR",\r
"Izvod banke — ručni unos",\r
"Kartice konta i partnera",\r
"Kase i gotovinski promet",\r
"KMP",\r
"KMP-{0}-{1}",\r
"Knjigovodstvena agencija",\r
"Kompenzacija (dvostrana)",\r
"Kompenzacija, cesija, asignacija, preuzimanje duga",\r
"Kompenzacije {0} upisane kao plaćanje, bez dokumenta kompenzacije: {1} ({2}) — nisu u glavnoj knjizi; knjiže se dokumentom Računovodstvo → Kompenzacije.",\r
"Kompenzacije, cesije i asignacije",\r
"Kontni plan (Pravilnik 11/20), šeme automatskog knjiženja (konta po ulozi), podešavanja knjiženja",\r
"Kontni plan i podešavanja knjiženja",\r
"Konto {0} traži partnera ({1}).",\r
"Konto je obavezan.",\r
"konto je ugašen",\r
"konto ne postoji u kontnom planu",\r
"konto nije upisan",\r
"kupac, dobavljač, radnik",\r
"Kupci",\r
"Kupci i dobavljači",\r
"Lice koje je i kupac i dobavljač",\r
"Lice nije evidentirano i kao kupac i kao dobavljač (isti PIB). Stavke se dodaju ručno.",\r
"Market",\r
"Marketi",\r
"Materijalno knjigovodstvo, normativi, radni nalozi, gotovi proizvodi",\r
"Meni prikazuje ono što firma radi (način poslovanja) i kako ga korisnik želi (omiljene stavke, stavke koje ne koristi). Nijedna funkcija se ne gubi: sve je dostupno i kroz pretragu (Ctrl+K).",\r
"Mjesec {0}/{1} je zaključan. Knjiženje nije moguće.",\r
"Mjesec je zaključan. Nalog nije napravljen.",\r
"Mjesečni dio unaprijed plaćenog troška",\r
"Moj meni",\r
"na klasu ili grupu se ne knjiži",\r
"Način poslovanja, omiljene stavke, prikaz stavki",\r
"Nacrt",\r
"Nacrt je snimljen.",\r
"Nalog {0} je proknjižen.",\r
"Nalog je proknjižen: {0}.",\r
"Nalog je sačuvan kao nezavršen.",\r
"Nalog je storniran nalogom",\r
"Nalog je već storniran.",\r
"Nalog nije napravljen: {0}",\r
"Nalog nije upisan.",\r
"Nalog se čuva među nezavršenim nalozima i ne ulazi u glavnu knjigu",\r
"Nalog za knjiženje ovog dokumenta (isti nalog kao „Proknjiži mjesec\\")",\r
"Nalozi sačuvani prije završetka — nijesu u glavnoj knjizi dok se ne proknjiže",\r
"Nalozi sačuvani prije završetka (nijesu u glavnoj knjizi). Klik otvara nalog za nastavak unosa.",\r
"Naplata gotovinom — {0}{1}",\r
"Napomena (ide na štampu)",\r
"Naš dužnik (upućenik) po našem nalogu plaća našem povjeriocu (primaocu upućivanja); obaveza se gasi kad upućenik plati (ZOO čl. 1123–1137, čl. 1129).",\r
"naziv lica",\r
"Naziv šablona je obavezan.",\r
"Nema dokumenata za izabranu godinu.",\r
"Nema nezavršenih naloga.",\r
"nema otvorenih",\r
"Nema otvorenih stavki na obje strane.",\r
"Nepoznata vrsta dokumenta.",\r
"nije proknjiženo u glavnu knjigu",\r
"Nov dokument",\r
"Nov nalog sa istim stavkama",\r
"Nov ručni nalog: unos tastaturom, partner, vezni dokument i valuta, veza sa otvorenom stavkom, šabloni",\r
"Novčani ulog osnivača",\r
"Obaveza po kreditu",\r
"Obaveza za pozajmicu",\r
"Obaveze {0} koje se gase",\r
"Obavještavamo Vas da je {0} ugovorom o ustupanju potraživanja broj {1} od {2} ustupio svoje potraživanje prema Vama po dokumentu {3}{4} u iznosu od {5} EUR prijemniku {6}. Od prijema ovog obavještenja obavezu u navedenom iznosu izmirujete prijemniku.",\r
"OBAVJEŠTENJE O USTUPANJU POTRAŽIVANJA",\r
"Objekti gradnje, posebni djelovi po PD oznaci, raspodjela troškova, prodaja stanova",\r
"Obrisati nacrt?",\r
"Obrisati nezavršen nalog?",\r
"Obriši nacrt",\r
"od kupaca",\r
"Omiljeno",\r
"Opis: {0}",\r
"Osnov: Zakon o obligacionim odnosima („Sl. list CG\\" br. 47/08, 4/11 i 22/17).",\r
"Osnovica = iznos bez PDV",\r
"Otpis nenaplativog potraživanja",\r
"Otpis potraživanja",\r
"Plaćanja {0} načina „Ostalo\\": {1} ({2}) — nisu u glavnoj knjizi; knjiže se ručnim nalogom.",\r
"Plaćanje gotovinom — {0}{1}",\r
"Plaćanje i naplata gotovinom (ručni upis)",\r
"Plaćeno sa računa",\r
"PLR",\r
"Početno stanje i zaključak godine",\r
"Početno stanje iz prethodne godine ili iz Excela, zaključak godine",\r
"Podmeni: {0}",\r
"Pogrešno konto",\r
"Pomoćne knjige",\r
"Porezi i finansijski iskazi",\r
"Potraživanja {0} koja se gase",\r
"Potraživanja i naplata od kupaca · otvorene stavke · IOS kupcu · opomene i zatezna kamata",\r
"Potraživanja i obaveze su jednaki — dokument je uravnotežen.",\r
"Potraživanje od dužnika ustupa se povjeriocu (prijemniku) u ime izmirenja našeg duga — dužnik se obavještava (ZOO čl. 445–454; obavještenje dužniku čl. 447).",\r
"Potvrda dokumenta",\r
"Potvrda zatvara fakture na obje strane (plaćanje načina „Kompenzacija\\") i knjiži nalog u glavnu knjigu. Dokument se poslije ne mijenja, samo stornira.\\n\\nPravno lice čiji je račun u blokadi duže od 30 dana ne može izmirivati obaveze kompenzacijom, cesijom, asignacijom ni preuzimanjem duga (Zakon o sprječavanju nelegalnog poslovanja, čl. 11).",\r
"Potvrđen",\r
"Potvrđen ili storniran dokument se ne mijenja. Izmjena: storno, pa nov dokument.",\r
"Potvrdi i proknjiži",\r
"Poveži sa otvorenom stavkom:",\r
"Povezivanje, Menadžer, podrška, podešavanja",\r
"Povjerilac",\r
"Povjerilac (dobavljač)",\r
"Povjerilac prema kome dugujemo",\r
"Pozajmica od osnivača",\r
"Pravi se protivnalog (iste stavke, duguje i potražuje zamijenjeni). Izvorni nalog ostaje.",\r
"Prebijanje (dvostrano i višestrano), ustupanje potraživanja, upućivanje, preuzimanje duga · zatvaranje faktura na obje strane · nalog KMP · štampa izjave",\r
"Prebijanje uzajamnih dospjelih novčanih potraživanja sa istim licem (prebijanje — ZOO čl. 344–352; dejstvo od izjave drugoj strani, čl. 345).",\r
"Predloži iz otvorenih stavki",\r
"Preknjižavanje sa konta na konto",\r
"Prenos robe između objekata · interna otpremnica i interna kalkulacija · trgovačke knjige oba objekta",\r
"Pretraga (broj, učesnik, dokument)",\r
"Preuzimalac duga",\r
"Preuzimalac preuzima obavezu navedenu u specifikaciji u iznosu od {0} EUR, uz pristanak povjerioca. Danom potpisivanja dužnik se oslobađa obaveze prema povjeriocu u preuzetom iznosu.",\r
"Preuzimanje duga",\r
"Prijemnik (cesionar)",\r
"Prikaz u meniju",\r
"Prilagodi meni",\r
"Priliv kredita",\r
"Priliv kredita na žiro-račun",\r
"Priliv pozajmice",\r
"Primalac upućivanja (asignatar)",\r
"Primijeni šablon",\r
"Primljen kratkoročni kredit",\r
"Primljena pozajmica (obaveza prema osnivaču)",\r
"Proizvodnja i dorada",\r
"proknjiženo — nalog",\r
"Proknjiži mjesec (automatski nalozi po vrsti dokumenta) · kontrole mjeseca · nalozi · kartice · bruto bilans · dnevnik · kontni plan · početno stanje",\r
"Računi kupcima",\r
"Računovodstvo",\r
"Rad za više firmi, rokovi i pregled za uraditi po klijentu",\r
"radnika",\r
"Rata kredita (glavnica i kamata)",\r
"Razlika duguje–potražuje ide na posljednju stavku",\r
"Razlika na posljednju stavku",\r
"Razlika potraživanja i obaveza: {0} EUR. Potvrda traži jednake zbirove.",\r
"razlog storna",\r
"Razlog: {0}",\r
"repeat(auto-fit, minmax(260px, 1fr))",\r
"Robno knjigovodstvo",\r
"Robno knjigovodstvo: ulaz robe, zalihe, trgovačka knjiga, cijene; ugostiteljstvo, hotel, apoteka",\r
"Ručno upisana virmanska plaćanja {0} bez izvoda banke: {1} ({2}) — u glavnu knjigu ulaze uvozom izvoda.",\r
"Šablon „{0}\\" je sačuvan.",\r
"Šablon nema stavki sa kontom.",\r
"Sačuvaj kao nezavršen",\r
"Sačuvaj kao šablon",\r
"sklopljena",\r
"Snimi nacrt",\r
"Stavka {0}: konto {1} traži dobavljača.",\r
"Stavka {0}: konto {1} traži kupca.",\r
"Stavka {0}: konto {1} traži radnika.",\r
"Stavka bez kupca i dobavljača traži konto.",\r
"Stavka mora biti na strani potraživanja (P) ili obaveza (O).",\r
"Stavka obaveze prema kupcu traži konto (npr. primljeni avans).",\r
"Stavka potraživanja sa dobavljačem traži konto (npr. potraživanje od dobavljača za avans ili preuzeti dug).",\r
"STO",\r
"Stornira se samo potvrđen dokument.",\r
"STORNIRANO {0}: {1}",\r
"Storno (protivnalog)",\r
"Storno briše plaćanja ovog dokumenta (fakture se ponovo otvaraju) i uklanja nalog iz glavne knjige.",\r
"Storno dokumenta",\r
"Storno nalog {0} je proknjižen.",\r
"Storno nalog se ne stornira. Potreban je nov nalog.",\r
"Storno naloga (protivnalog)",\r
"Storno naloga {0} od {1}.",\r
"Storno naloga {0}{1}",\r
"Strana",\r
"Treće lice preuzima naš dug prema povjeriocu uz pristanak povjerioca (ZOO čl. 455–459; pristupanje dugu čl. 460–461); nama ostaje obaveza prema preuzimaocu ili se gasi naše potraživanje od njega.",\r
"Trgovina",\r
"Trgovina na veliko",\r
"Trošak (osnovica)",\r
"Trošak budućeg perioda na AVR",\r
"Trošak perioda",\r
"Trošak sa PDV 21 % (bez dokumenta u programu)",\r
"u nalogu: duguje (dobavljač ili drugi konto obaveze)",\r
"u nalogu: potražuje (kupac ili drugi konto potraživanja)",\r
"Učesnici",\r
"Učesnici saglasno utvrđuju lanac dospjelih novčanih potraživanja i obaveza naveden u specifikaciji i gase ga do iznosa od {0} EUR na dan {1}. Svaki učesnik u svojim poslovnim knjigama zatvara potraživanja i obaveze u navedenim iznosima.",\r
"Udjeli (osnovni kapital)",\r
"Ugostiteljstvo, hotel, apoteka",\r
"UGOVOR O PREUZIMANJU DUGA",\r
"UGOVOR O USTUPANJU POTRAŽIVANJA (CESIJA)",\r
"UGOVOR O VIŠESTRANOJ KOMPENZACIJI",\r
"Ugovorne strane saglasno utvrđuju da imaju uzajamna dospjela novčana potraživanja navedena u specifikaciji i da se ona prebijanjem gase do iznosa od {0} EUR na dan {1}. Ostatak potraživanja koji nije obuhvaćen ovom izjavom ostaje nepromijenjen.",\r
"Ukidanje AVR",\r
"Ukidanje razgraničenja u trošak perioda",\r
"Ulaz robe",\r
"Ulazna faktura u stavci traži dobavljača.",\r
"Unaprijed plaćen trošak (razgraničenje)",\r
"Unaprijed plaćeni trošak",\r
"Uplata i isplata gotovine (blagajnički nalog)",\r
"Uplata osnivačkog kapitala",\r
"Uplata uloga",\r
"Upućenik (asignat)",\r
"UPUĆIVANJE (ASIGNACIJA)",\r
"Uputilac upućuje upućenika (svog dužnika) da za njegov račun isplati primaocu upućivanja (povjeriocu uputioca) iznos od {0} EUR. Izvršenjem upućivanja gase se obaveza upućenika prema uputiocu i obaveza uputioca prema primaocu u istom iznosu.",\r
"Ustupilac ustupa prijemniku svoje potraživanje prema dužniku navedeno u specifikaciji, u iznosu od {0} EUR, u ime izmirenja svoje obaveze prema prijemniku u istom iznosu. Ustupilac je dužan da dužnika obavijesti o ustupanju; od prijema obavještenja dužnik ispunjava obavezu prijemniku.",\r
"Veleprodajni objekti, otpremnice, rezervacije, revers",\r
"Višestrana kompenzacija",\r
"Vrati podrazumijevani meni",\r
"Vremensko razgraničenje",\r
"Vrsta naloga nije za ručni unos.",\r
"Za šablon je potreban opis naloga (postaje naziv šablona).",\r
"Za: {0}{1}",\r
"Zbir potraživanja ({0}) nije jednak zbiru obaveza ({1}). Razlika: {2} EUR.",\r
"Bez kraja",\r
"Postavi krajnji mjesec",\r
"Ukloni krajnji mjesec",\r
"Banka i blagajna",\r
"Detalji: Osnovna sredstva i nabavka (OA, PD).",\r
"Finansijsko",\r
"Finansijsko knjigovodstvo, glavna knjiga, banka i blagajna, pomoćna knjigovodstva, porezi i finansijski iskazi, obračun zarada",\r
"Kase i gotovina",\r
"Materijalno i proizvodnja",\r
"Obračun zarada i kadrovi",\r
"Osnovna sredstva i nabavka (OA, PD)",\r
"Pomoćna",\r
"Pomoćna knjigovodstva",\r
"Porezi i iskazi",\r
"Promjena važi za naloge napravljene poslije nje (ponovno „Proknjiži mjesec\\"). Konto vrste troška se podešava uz samu vrstu (Osnovna sredstva i nabavka (OA, PD) → vrste troškova).",\r
"Robno",\r
"Trgovačka knjiga i cijene",\r
"Elektronski žurnal",\r
"Kodovi i ENU",\r
"Kodovi, ENU i sertifikat",\r
"Kodovi, ENU i žurnal",\r
"Spremnost za fiskalizaciju · kodovi PJ, ENU i operatera · sertifikat · provjera IKOF-a · računi koji čekaju slanje",\r
"Žurnal izdatih i korektivnih računa sa IKOF-om i JIKR-om za poresku kontrolu (Excel, PDF)",\r
"· aktivnih objekata:",\r
"aktivnih objekata",\r
"Apoteka",\r
"bez ograničenja",\r
"Fakture kupcima",\r
"Kompenzacije",\r
"korisničkih naloga",\r
"Korisničkih naloga:",\r
"Licenca firme dozvoljava najviše {0} {1}. Za veći broj potrebna je izmjena licence.",\r
"Licenca firme ne uključuje modul „{0}\\". Postojeći podaci su dostupni za pregled i izvoz; nov unos nije moguć.",\r
"licenca: modul {0}",\r
"Moduli licence",\r
"Oblasti programa koje licenca firme uključuje. Podaci se ne brišu kad modul nije u licenci.",\r
"Proizvodnja",\r
"Ugostiteljstvo",\r
"Više objekata",\r
", nalog {0}",\r
"; nalozi {0}",\r
"; nema kursa za {0}",\r
". Upisuje se stvarno plaćen iznos u EUR (sa izvoda) ili kurs na dan plaćanja; razlika prema kursu dokumenta je kursna razlika.",\r
"· pozitivne kursne razlike",\r
"· STORNIRANO",\r
"{0} naloga, ukupno {1} EUR",\r
"{0} od {1} naloga nije proknjiženo ili ima drugi iznos, ukupno {2} EUR ({3})",\r
"{0}: konto {1} ne postoji u kontnom planu.",\r
"{0}: na {1} {2} se ne knjiži.",\r
"+ Nova devizna stavka",\r
"+ Novo razgraničenje",\r
"Datum naloga",\r
"Datum plaćanja",\r
"Datum plaćanja nije ispravan.",\r
"Datum prekida nije ispravan.",\r
"Datum revalorizacije nije ispravan.",\r
"DEV",\r
"Devizna stavka",\r
"Devizna stavka je obrisana.",\r
"Devizna stavka je snimljena.",\r
"Devizna stavka ne postoji.",\r
"Devizne obaveze i potraživanja · kursna razlika pri plaćanju · revalorizacija po kursu na dan bilansa sa stornom",\r
"Devizne stavke",\r
"DEVIZNE STAVKE",\r
"EUR · negativne",\r
"EUR na dan",\r
"EUR u knjigama",\r
"EUR u knjigama prazno = iznos u valuti ÷ kurs. Konto prazno = dobavljači (kupci) u inostranstvu iz šema knjiženja; za kredit ili devizni račun upisuje se konto.",\r
"Izmjena razgraničenja",\r
"Iznos {0}",\r
"Iznos {0} {1} je veći od otvorenog ({2}).",\r
"Iznos bez PDV-a",\r
"Iznos u valuti mora biti veći od nule.",\r
"jednako po mjesecima",\r
"kao prihod (program prenosi na razgraničenje)",\r
"kao trošak (program prenosi na razgraničenje)",\r
"Klik na red stornira revalorizaciju (dok su mjeseci njenih naloga otvoreni).",\r
"Konto prihoda",\r
"Konto prihoda je obavezan.",\r
"Konto razgraničenja",\r
"Konto troška",\r
"Konto troška je obavezan.",\r
"KRR",\r
"Kurs (valuta za 1 EUR)",\r
"Kurs dokumenta",\r
"Kurs dokumenta mora biti veći od nule.",\r
"Kurs na dan",\r
"Kurs na dan mora biti veći od nule.",\r
"Kurs nije preuzet: {0}. Kurs se upisuje u kursnoj listi.",\r
"Kursevi su preuzeti: {0}.",\r
"Kursevi za taj dan su već u kursnoj listi.",\r
"Kursna razlika {0} {1}{2}{3}",\r
"Kursne razlike",\r
"Kursne razlike i revalorizacija",\r
"Kursne razlike na dan bilansa (revalorizacija i storno)",\r
"Metod",\r
"Mjesec {0}/{1} je zaključan. Prekid se upisuje u otvorenom mjesecu.",\r
"Mjesec storna revalorizacije je zaključan.",\r
"Mjesečni prenos",\r
"Na dan {0} · srednji kurs Centralne banke Crne Gore",\r
"Na dan {0} nema otvorenih deviznih stavki.",\r
"Na izabrani dan nema otvorenih deviznih stavki.",\r
"naplate",\r
"Negativna kursna razlika — {0}",\r
"Negativne",\r
"Negativne kursne razlike na dan {0}",\r
"Nema deviznih stavki.",\r
"Nema kursa {0} za {1}. Kurs se preuzima ili upisuje u kursnoj listi, ili se upisuje plaćeni iznos u EUR.",\r
"Nema kursa za",\r
"Nema kursa za {0}: {1}. Kurs se preuzima ili upisuje u kursnoj listi.",\r
"nema otvorenih deviznih stavki na kraju mjeseca",\r
"nema razgraničenja sa prenosom u mjesecu",\r
"Nema razgraničenja. Unosi se trošak plaćen unaprijed (premija osiguranja, zakup), prihod naplaćen unaprijed ili trošak za koji račun nije stigao.",\r
"Nema snimljenih revalorizacija.",\r
"Nova devizna stavka",\r
"Novo razgraničenje",\r
"npr. Premija osiguranja objekta 2027",\r
"obaveza (dobavljač, kredit)",\r
"Obaveza bez dobavljača traži konto.",\r
"Obračunat trošak bez računa",\r
"Obračunat trošak bez računa (pasivno razgraničenje)",\r
"Obračunati prihodi budućeg perioda (unaprijed naplaćeni prihodi)",\r
"Obrisati deviznu stavku {0} {1}?",\r
"Obrisati plaćanje i nalog kursne razlike?",\r
"Opis je obavezan.",\r
"Otvorena devizna potraživanja i obaveze preračunavaju se po kursu koji važi na izabrani dan (kraj mjeseca ili godine). Nalog revalorizacije knjiži se na taj dan, a storno prvog dana sljedećeg perioda; pri plaćanju se obračunava razlika prema kursu dokumenta.",\r
"otvorene devizne stavke ({0}) nijesu revalorizovane na dan {1}{2}",\r
"otvorene devizne stavke ({0}): revalorizacija se radi na dan bilansa (31.12.)",\r
"Otvoreno EUR",\r
"Otvoreno u valuti",\r
"Period do",\r
"Period razgraničenja je duži od 120 mjeseci.",\r
"Period razgraničenja nije ispravan.",\r
"plaćanja",\r
"Plaćanje — {0}",\r
"Plaćanje devizne stavke",\r
"Plaćanje je obrisano.",\r
"Plaćanje je upisano. Kursna razlika {0} EUR{1}.",\r
"Plaćanje ne može biti prije datuma dokumenta.",\r
"Plaćeno EUR",\r
"početni prenos",\r
"Početni prenos",\r
"Pocetno",\r
"Poništi prekid",\r
"Poništiti prekid?",\r
"Poslije dana prekida postoji nalog u zaključanom mjesecu.",\r
"potraživanje",\r
"Potraživanje bez kupca traži konto.",\r
"Pozitivna kursna razlika — {0}",\r
"Pozitivne",\r
"pozitivne {0} EUR, negativne {1} EUR",\r
"Pozitivne kursne razlike na dan {0}",\r
"pravo na konto razgraničenja",\r
"prekid {0}",\r
"Prekid je poništen.",\r
"Prekid na dan",\r
"Prekini",\r
"Prekinuti razgraničenje {0}? Ostatak se prenosi u rezultat tog mjeseca.",\r
"Preneseno do danas",\r
"prenos za {0}",\r
"Preskočeno: {0}",\r
"Preuzmi kurseve",\r
"Prijem računa je upisan.",\r
"Prikaži stornirana",\r
"Proknjiženo",\r
"Proknjiži razgraničenja",\r
"Proknjiži revalorizaciju",\r
"Proknjižiti revalorizaciju na dan {0}? Storno se knjiži {1}.",\r
"Račun je proknjižen",\r
"Račun primljen",\r
"Račun stranog dobavljača, kredit ili drugo potraživanje i obaveza u stranoj valuti. Izlazne fakture u valuti nose valutu na samom dokumentu i u revalorizaciju ulaze same.",\r
"Raspored se prikazuje kad su upisani iznos i period.",\r
"Raspored: {0} mjeseci, {1} EUR mjesečno. Konto razgraničenja prazan = konto iz šema knjiženja.",\r
"Razgranicenja",\r
"Razgraničenja i kursne razlike",\r
"Razgraničenja su proknjižena do kraja tekućeg mjeseca. Naloga upisano: {0}, obrisano: {1}.{2}",\r
"Razgraničenja: unaprijed naplaćeni prihodi — obračunati prihodi budućeg perioda (račun 491)",\r
"Razgraničenja: unaprijed obračunati troškovi za koje račun nije stigao (račun 490)",\r
"Razgraničenja: unaprijed plaćeni troškovi (aktivno vremensko razgraničenje, račun 280)",\r
"Razgraničenje ima nalog u zaključanom mjesecu. Izmjena nije moguća; preostali iznos se zatvara prekidom.",\r
"Razgraničenje ima nalog u zaključanom mjesecu. Storno nije moguć; preostali iznos se zatvara prekidom.",\r
"Razgraničenje je prekinuto.",\r
"Razgraničenje je snimljeno. Naloga upisano: {0}.{1}",\r
"Razgraničenje je stornirano.",\r
"Razgraničenje ne postoji.",\r
"Razgraničenje nema knjiženja.",\r
"Revalorizacija",\r
"Revalorizacija {0} {1} — {2}{3} (kurs {4} → {5})",\r
"REVALORIZACIJA DEVIZNIH STAVKI",\r
"Revalorizacija deviznih stavki na dan {0}",\r
"Revalorizacija deviznih stavki na dan bilansa: negativne kursne razlike (račun 563)",\r
"Revalorizacija deviznih stavki na dan bilansa: pozitivne kursne razlike (račun 663)",\r
"Revalorizacija deviznih stavki urađena",\r
"Revalorizacija je proknjižena: pozitivne {0} EUR, negativne {1} EUR{2}.",\r
"revalorizacija je snimljena, a podaci su se promijenili za {0} EUR; revalorizaciju treba ponoviti",\r
"Revalorizacija je stornirana.",\r
"Revalorizacija na dan",\r
"Revalorizacija ne postoji.",\r
"RZG-{0}-{1}",\r
"Samo otvorene",\r
"Snimi i proknjiži",\r
"Snimljene revalorizacije",\r
"srazmjerno danima",\r
"Stanje na dan {0}",\r
"Stavka ima plaćanja. Iznos, valuta i kurs se ne mijenjaju.",\r
"Stavka ima plaćanja. Prvo se brišu plaćanja.",\r
"Stavka je već plaćena.",\r
"Stornirati razgraničenje {0}? Svi njegovi nalozi se brišu.",\r
"Stornirati revalorizaciju na dan {0}? Nalozi se brišu.",\r
"Storno — {0}",\r
"Storno na dan",\r
"Storno revalorizacije",\r
"Storno revalorizacije deviznih stavki na dan {0}",\r
"Trošak plaćen unaprijed, prihod naplaćen unaprijed, trošak bez računa · raspored po mjesecima · automatski nalog prenosa · prekid i storno",\r
"Unaprijed naplaćen prihod",\r
"Unaprijed naplaćen prihod (pasivno razgraničenje)",\r
"Unaprijed plaćen trošak",\r
"Unaprijed plaćen trošak (aktivno razgraničenje)",\r
"Upisati prijem računa {0}? Obračunati iznos se stornira.",\r
"Upiši plaćanje",\r
"Upisuje naloge razgraničenja do kraja tekućeg mjeseca u otvorenim mjesecima",\r
"Valuta mora biti strana valuta (ne EUR).",\r
"Vremenska razgraničenja",\r
"VREMENSKA RAZGRANIČENJA",\r
"Vremenska razgraničenja (prenos i mjesečni obračun)",\r
"Vremenska razgraničenja proknjižena",\r
"Vremenska razgraničenja sa rasporedom po mjesecima i automatskim nalogom prenosa; devizne obaveze i potraživanja, kursna razlika pri plaćanju i revalorizacija na dan bilansa.",\r
"Vrsta razgraničenja nije ispravna.",\r
"VRZ",\r
"Zatvaranje (račun primljen)",\r
"zatvaranje po primljenom računu",\r
"— bez veze sa računom —",\r
"Račun iz programa",\r
"— „Osvježi sve\\" ih čita.",\r
"— glavna knjiga se još ne vodi u programu",\r
"— svaki prijedlog se potvrđuje u tabeli ispod.",\r
", u greškama: {0}",\r
"; najstariji {0}",\r
"· sivo: ne odnosi se na firmu. Klik na polje otvara firmu na ekranu na kome se stavka rješava. PDV prijava, zarade, IOPPD i zatvaranje se odnose na prethodni mjesec.",\r
"(prije {0} dana)",\r
"(razmjena je isključena)",\r
"{0} — {1} {2}. za {3} firmi?\\n\\n{4}\\n\\n{5}",\r
"{0} · firme: {1}",\r
"{0} (saldo)",\r
"{0} {1}: urađeno {2}, preskočeno {3}, grešaka {4}. Izvještaj po firmi je ispod tabele.",\r
"{0} nesravnj.",\r
"{0}. nijesu snimljeni",\r
"{0}. snimljeni",\r
"Aktiva i pasiva se razlikuju — provjeriti bilans stanja pojedinačnih firmi.",\r
"Aktiva i pasiva su jednake.",\r
"Baza firme „{0}\\" nije nađena na ovom računaru.",\r
"Bilans stanja firme nije u ravnoteži (aktiva ≠ pasiva).",\r
"Bilans stanja: {0}",\r
"Bilans uspjeha: {0}",\r
"Boje:",\r
"Bruto bilans: {0}",\r
"Čeka knjiženje ili razvrstavanje: {0}; najstarija {1}.",\r
"Čeka obradu: {0}{1}{2}.",\r
"Čita firme redom, jednu po jednu, bez izmjene njihovih podataka",\r
"Duguje / ima rashod",\r
"Elim. duguje",\r
"Elim. potražuje",\r
"Eliminacija {0} ↔ {1}: iznos {2} je veći od iznosa u knjigama jedne strane — primijenjeno {3}.",\r
"Eliminacija {0}: konto {1} nema poziciju u iskazu — iskaz nije umanjen (bruto bilans jeste).",\r
"Eliminacije",\r
"Eliminacije duguje",\r
"Eliminacije potražuje",\r
"ELIMINACIJE U KONSOLIDACIJI",\r
"Eliminisano",\r
"Fajlovi",\r
"Finansijski iskazi i prijava poreza na dobit za prethodnu godinu — rok 31.03.",\r
"Finansijski iskazi za {0}. su snimljeni.",\r
"Firma je otvorena. Baza druge firme se otvara za čitanje tek kad se otvorena firma zatvori.",\r
"Firma koja duguje / ima rashod",\r
"Firma koja potražuje / prihoduje",\r
"Firme i masovne radnje",\r
"Firme van kvote licence (nijesu u pregledu):",\r
"Firmi bez pregleda:",\r
"Glavna knjiga nema knjiženja u periodu.",\r
"Glavna knjiga za {0}. postoji, a finansijski iskazi nijesu snimljeni (rok je bio 31.03.{1}).",\r
"godišnji",\r
"hitno ili rok prošao",\r
"IOPPD za prethodni mjesec — rok 15. u mjesecu; spreman kad je obračun zarada zaključen",\r
"Isti PIB ima više izabranih firmi — eliminacije među njima se ne predlažu pouzdano.",\r
"Izaberi sve firme",\r
"Iznos eliminacije",\r
"Izvezeno fajlova: {0}.",\r
"Izvještaj: {0} — {1}/{2}",\r
"Izvoda sa stavkama koje nijesu sravnjene: {0}. Posljednji uvezen izvod: {1}{2}.",\r
"Izvodi",\r
"Izvodi sa stavkama koje nijesu sravnjene i datum posljednjeg uvezenog izvoda",\r
"Izvoz poreskih knjiga (PR-PDV, KIF, KPR)",\r
"Izvoz PR-PDV, KIF, KPR",\r
"još nije bilo",\r
"Knjiženja sa partnerima iz grupe: {0}",\r
"KONS",\r
"Konsolidacija",\r
"Konsolidacija {0}. — čitanje firmi",\r
"KONSOLIDOVANI BILANS STANJA",\r
"KONSOLIDOVANI BILANS USPJEHA",\r
"KONSOLIDOVANI BRUTO BILANS",\r
"Konsolidovani bruto bilans je u ravnoteži.",\r
"Konsolidovani bruto bilans nije u ravnoteži (duguje ≠ potražuje).",\r
"Konsolidovano",\r
"Konsolidovano duguje",\r
"Konsolidovano potražuje",\r
"Konta",\r
"Kontrolna lista zatvaranja prethodnog mjeseca: stavke koje prolaze / ukupno",\r
"Licenca {0} ne obuhvata rad agencije za više firmi (paket „agencija\\"). Pregled prikazuje samo otvorenu firmu.",\r
"Licenca {0} obuhvata {1} firmi agencije.",\r
"Među izabranim firmama nema knjiženja sa partnerom čiji je PIB druga izabrana firma.",\r
"Mjesec {0}/{1} je proknjižen — {2}.",\r
"Mjesec {0}/{1} je već zaključan.",\r
"Mjesec {0}/{1} je zaključan ({2} dokumenata).",\r
"Mjesec {0}/{1} nije zaključan — kontrole ne prolaze: {2}",\r
"Mjesec se zaključava samo u firmama u kojima prolaze kontrolna lista zatvaranja i PDV kontrole; ostale se preskaču. Poslije zaključavanja se dokumenti tog mjeseca ne mogu mijenjati ni brisati. Izmjene se upisuju u baze tih firmi.",\r
"Mjesec za masovne radnje",\r
"Mjeseci sa dokumentima bez naloga u glavnoj knjizi",\r
"Na ovom računaru nema firmi.",\r
"na redu",\r
"Nabavka od ove firme knjižena na zalihe: {0} — nije rashod, ne eliminiše se ovdje (dobit sadržana u zalihama određuje se ručno).",\r
"Naloga sa više partnera iz grupe: {0} — prihodi i rashodi tih naloga nijesu u prijedlogu eliminacije.",\r
"naloga: {0}",\r
"Nema fajlova za izvoz.",\r
"nema izvoda",\r
"nema obračuna",\r
"Nema otvorenih popisa.",\r
"Nema skenova koji čekaju.",\r
"Nema zaključanih mjeseci.",\r
"nerazvrstanih transakcija: {0}",\r
"NFKD",\r
"nije na redu",\r
"Nijedan izvod nije uvezen.",\r
"Nijedna firma nije izabrana.",\r
"Nijesu zaključani: {0}{1}",\r
"Obračun zarada {0}/{1} je zaključen.",\r
"Obračun zarada {0}/{1} nije napravljen (aktivnih radnika: {2}).",\r
"Obračun zarada {0}/{1} nije zaključen.",\r
"Obračun zarada za prethodni mjesec",\r
"obrisano: {0}",\r
"Osvježavanje pregleda firmi",\r
"Osvježeno firmi: {0}. Nije pročitano: {1}",\r
"Osvježeno firmi: {0}. U firme nije ništa upisano.",\r
"Osvježi sve",\r
"Otvoreni popisi robe (nijesu zaključeni)",\r
"Otvorenih popisa: {0}; najstariji od {1}.",\r
"Otvori firmu",\r
"Otvoriti firmu „{0}\\"?\\n\\nOtvorena firma se zatvara (podaci se snimaju), a „{1}\\" se otvara na izabranom ekranu.",\r
"PDV prijava",\r
"PDV prijava za prethodni mjesec — rok 15. u mjesecu; spremna kad je mjesec zaključan",\r
"period {0}.{1}.{2} – {3}.{4}.{5} · firme: {6}",\r
"PIB firme nije upisan (Podešavanja → Firma) — eliminacije sa ovom firmom se ne mogu predložiti.",\r
"Po knjigama druge",\r
"Po knjigama prve",\r
"Posljednja razmjena podataka sa drugim uređajima firme",\r
"Posljednja razmjena: {0} {1}{2}.",\r
"Posljednji zaključan mjesec i raniji mjeseci sa dokumentima koji nijesu zaključani",\r
"Potraživanja i obaveze",\r
"Potražuje / prihoduje",\r
"PREGLED",\r
"Pregled agencije",\r
"Pregled agencije — masovno zaključavanje",\r
"Pregled druge firme je u toku. Firma se otvara kad se pregled završi.",\r
"Pregled druge firme je već u toku.",\r
"Pregled druge firme nije moguć dok traje upis u otvorenu firmu.",\r
"Pregled od",\r
"Pregled ove firme još nije napravljen na ovom računaru.",\r
"preskočeno",\r
"preskočeno: {0} ({1}{2})",\r
"Prihod i rashod se razlikuju.",\r
"Prihodi i rashodi",\r
"Prijedlog eliminacija",\r
"Pripremi konsolidaciju",\r
"Pročitano firmi: {0}. Prijedloga eliminacije: {1}{2} U firme nije ništa upisano.",\r
"Promjena firme je već u toku.",\r
"Raniji mjeseci sa dokumentima su zaključani.",\r
"Razmjena je uključena, a nijedna još nije obavljena na ovom računaru.",\r
"Razmjena podataka nije uključena za ovu firmu na ovom računaru.",\r
"rok {0} ({1} d.)",\r
"rok danas",\r
"rok prošao {0}",\r
"Salda nijesu usaglašena — prije eliminacije usaglasiti (IOS).",\r
"Saldo po firmi: duguje − potražuje. Eliminacije su međusobna potraživanja i obaveze, prihodi i rashodi firmi iz grupe, potvrđeni na ekranu Pregled agencije → Konsolidacija.",\r
"saTudjomBazom: funkcija mora biti sinhrona.",\r
"saTudjomBazom: transakcija nije završena.",\r
"Skenirani računi koji čekaju obradu ili su u greškama",\r
"Skenovi",\r
"Sve firme na ovom računaru u jednoj tabeli: šta je na redu po firmi, masovne radnje nad izabranim firmama i konsolidacija. Podaci drugih firmi se čitaju bez izmjene; upis u drugu firmu ide samo kroz masovnu radnju poslije potvrde.",\r
"Sve firme u jednoj tabeli: PDV prijava, IOPPD, zarade, završni račun, neproknjiženi i zaključani mjeseci, skenovi, izvodi, popisi · masovne radnje · konsolidacija",\r
"Sve transakcije su proknjižene ili razvrstane.",\r
"Svi mjeseci sa dokumentima imaju naloge.",\r
"Transakcije izvoda koje čekaju knjiženje ili razvrstavanje",\r
"U svakoj izabranoj firmi prave se (ili obnavljaju) automatski nalozi glavne knjige za taj mjesec, kao dugmetom „Proknjiži mjesec\\" na ekranu Finansije. Izmjene se upisuju u baze tih firmi.",\r
"upozorenja: {0}{1}",\r
"urađeno",\r
"Za konsolidaciju su potrebne najmanje dvije firme.",\r
"za period 01.01. – 31.12.{0}.",\r
"Za svaku izabranu firmu prave se PR-PDV (Excel i PDF), knjiga izdatih računa i knjiga primljenih računa (Excel). Za vrijeme izvoza otvorena firma se zatvara (podaci se snimaju) i na kraju ponovo otvara; u firme se ništa ne upisuje.",\r
"Zaključaj mjesec",\r
"Zaključano do",\r
"Zarade",\r
"Završni račun",\r
"Zbir",\r
"Zbir duguje",\r
"Zbir potražuje",\r
"Zbir pozicija bilansa uspjeha firmi umanjen za potvrđene eliminacije.",\r
"Zbir pozicija pojedinačnih iskaza firmi umanjen za potvrđene eliminacije. Radni izvještaj za potrebe grupe — nije zvanični obrazac za predaju.",\r
"Zbirni bruto bilans, bilans uspjeha i bilans stanja izabranih firmi (npr. firme istog vlasnika). Međusobna potraživanja i obaveze, prihodi i rashodi se predlažu za eliminaciju po PIB-u partnera; eliminacija važi tek kad se potvrdi. Ništa se ne knjiži ni u jednu firmu.",\r
", neraspoređeno {0}",\r
", razlika {0}",\r
"; jedan od {0} takvih računa",\r
"; ostatak {0} ostaje neraspoređen",\r
"; račun {0} djelimično",\r
": uplata po računu je veća od otvorenog iznosa.",\r
"· vjerovatnih",\r
"· za provjeru",\r
"(jedna od {0}{1} mogućih kombinacija)",\r
"(postoje i drugi računi istog iznosa)",\r
"). Smanjiti uplatu po računu — ostatak računa ostaje otvoren.",\r
"). Za novo uparivanje prvo razvezati.",\r
"{0} — neraspoređeno",\r
"{0} i još {1}",\r
"{0} najstarija otvorena računa",\r
"{0} uz {1} {2} od {3}{4}",\r
"{0} WHERE t.TransID=?",\r
"Banka → Pravila banke",\r
"Bankarska provizija",\r
"broj računa {0}",\r
"brojevi računa {0}",\r
"BU-{0}-{1}",\r
"BUTTON",\r
"Dobavljač nije izabran.",\r
"ide na",\r
"ili više",\r
"Ista uplata je već proknjižena sa drugog izvoda ({0}).",\r
"Izabrati partnera.",\r
"Iznos transakcije",\r
"Iznos uplate je jednak otvorenom iznosu {0} računa; ponuđen je {1} {2}.",\r
"Iznos uplate je jednak otvorenom iznosu računa {0}.",\r
"izvod {0}",\r
"još prijedloga:",\r
"najstariji",\r
"Najveća razlika između uplate i zbira računa koja se zatvara kao bankarska provizija, zaokruženje ili kursna razlika.",\r
"Nije potvrđeno: {0}",\r
"Nijedan račun nije izabran.",\r
"ostaje neraspoređeno (avans)",\r
"Ostaje otvoreno",\r
"Ostatak uplate",\r
"Partner je prepoznat po nazivu — provjeriti.",\r
"Partner nema otvorenih računa. Transakcija se knjiži dugmetom „Proknjiži\\" (uplata ostaje neraspoređena).",\r
"Potvrda sigurnih uparivanja",\r
"Potvrđeno uparivanja: {0} ({1} EUR), zatvoreno računa: {2}.{3}",\r
"Potvrditi {0} sigurnih uparivanja ({1} EUR)?\\n\\nTransakcije se knjiže i vežu za račune iz prijedloga. Prijedlozi „vjerovatno\\" i „provjeriti\\" ostaju za pojedinačnu potvrdu (dugme „Upari\\").",\r
"Prag razlike (EUR)",\r
"Prag razlike je najviše 50,00 EUR. Veća razlika nije provizija ni zaokruženje i knjiži se ručno.",\r
"Prag razlike je snimljen.",\r
"Prag razlike ne može biti negativan.",\r
"Prag zaokruženja (EUR)",\r
"Prijedlog se za ovu transakciju više ne nudi",\r
"Prijedlozi uparivanja",\r
"Prijedlozi uparivanja za transakcije koje čekaju knjiženje i imaju prepoznatog partnera",\r
"Primijeni prijedlog",\r
"Račun {0}: moguće je vezati {1}, a raspoređeno je {2}.",\r
"Račun {0}: otvoreno je {1}, a raspoređeno {2}.",\r
"Račun primaoca nije među poznatim računima dobavljača — provjeriti.",\r
"računa {0}",\r
"Raspored redom dospijeća, najstariji račun prvo{0}{1}.",\r
"Raspoređeno je",\r
"Raspoređeno je {0}, a iznos transakcije je {1}.",\r
"Razlika {0} je veća od praga {1} (Banka → Pravila → Uparivanje sa razlikom).",\r
"Ručno uparivanje.",\r
"sigurnih",\r
"svih otvorenih računa",\r
"tag err",\r
"tag ok",\r
"tag warn",\r
"Tastatura: ↑ ↓ red · Razmak označi · F2 iznos po računu · Enter upari · Esc zatvori",\r
"transakcija {0}",\r
"Transakcija je proknjižena drugom partneru ili njeno plaćanje više ne postoji. Prvo poništiti knjiženje.",\r
"Transakcija je proknjižena i vezana za",\r
"Transakcija ne postoji.",\r
"U opisu uplate: {0}; otvoreni iznos je jednak uplati.",\r
"U opisu uplate: {0}; razlika {1} je u okviru praga.",\r
"U opisu uplate: {0}; uplata je manja od otvorenog iznosa — djelimično plaćanje, ostatak računa ostaje otvoren.",\r
"U opisu uplate: {0}; uplata je veća od otvorenog iznosa — ostatak {1} ostaje neraspoređen.",\r
"Upareno: računa {0}, zatvoreno {1}{2}{3}.",\r
"Upari plaćanje sa računima dobavljača",\r
"Upari uplatu sa računima kupca",\r
"Uparivanje izvoda",\r
"Uparivanje izvoda: bankarska provizija (uplata manja od računa)",\r
"Uparivanje izvoda: prag razlike",\r
"Uparivanje izvoda: razlika zaokruženja na teret firme",\r
"Uparivanje izvoda: razlika zaokruženja u korist firme",\r
"Uparivanje sa otvorenim računima partnera: više računa, djelimično, sa razlikom",\r
"Uparivanje sa razlikom",\r
"Uparuje se transakcija koja čeka knjiženje ili je proknjižena.",\r
"Uplata je u valuti, ima avansni račun ili je vezana za obračun kamate. Veze te uplate se mijenjaju u Naplati.",\r
"Uplata koja se od zbira računa razlikuje najviše za prag može se upariti: razlika do praga zaokruženja knjiži se kao zaokruženje, veći manjak kao bankarska provizija, a razlika na računu u stranoj valuti kao kursna razlika. Konta su u šemama knjiženja (uloge „banka.razlika.…\\" i „kursne.…\\"). Prag 0 isključuje uparivanje sa razlikom.",\r
"Uplata po računu",\r
"Uplata se od otvorenog iznosa računa {0} razlikuje za {1} (prag {2}){3}.",\r
"Uplata se od zbira svih otvorenih računa razlikuje za {0} (prag {1}).",\r
"uplatu",\r
"Veze su uklonjene. Računi su ponovo otvoreni.",\r
"Višak uplate nije bankarska provizija. Izabrati zaokruženje ili kursnu razliku, ili ostaviti višak neraspoređen.",\r
"više od iznosa transakcije (prag razlike",\r
"Vrsta razlike nije poznata.",\r
"Zaokruženje",\r
"Zbir {0} jednak je uplati{1}.",\r
": lozinku je postavio administrator. Prije rada je potrebna nova lozinka.",\r
"· prijava zapamćena na uređaju",\r
"'brisanje'",\r
"'izmjena'",\r
"'otkljucavanje'",\r
"'zakljucavanje'",\r
"(po ulozi)",\r
"(Podešavanja, Povezivanje, Menadžer)",\r
"(prilagođena)",\r
"{0} · IRIS CORVINA Knjigovodstvo · {1}",\r
"{0} AND ({1})",\r
"+ Novi korisnik",\r
"Administrator „{0}\\" ne postoji među korisnicima firme.",\r
"Administrator ima sva prava i uređuje korisnike.",\r
"Brisanje i storno",\r
"broj dokumenta, opis, uređaj",\r
"Broj korisnika nije ograničen licencom.",\r
"COALESCE({0}, '')",\r
"Dodat korisnik {0} ({1})",\r
"Ekran je otvoren samo za pregled: korisnik",\r
"Firma nema administratora među korisnicima.",\r
"Firma nema korisnike: program se otvara bez prijave i svako ko otvori firmu ima sva prava. Upisom prvog korisnika (administratora) uključuje se prijava; ostali korisnici dobijaju ulogu i prava.",\r
"IRIS CORVINA · Knjigovodstvo",\r
"Izdat nov kod za oporavak administratora",\r
"Izdati nov kod za oporavak administratora?\\n\\nPrethodni kod prestaje da važi.",\r
"Izlazni račun / ponuda",\r
"Izmijenjen korisnik {0}{1}",\r
"Izvoz i štampa",\r
"Kalkulacije, fakture, pazari, skenovi i robni dokumenti. Bez glavne knjige, zarada, zaključavanja i podešavanja.",\r
"Knjigovođa",\r
"Ko je dokument ili nalog unio, izmijenio, proknjižio, stornirao ili obrisao, kada i sa kog uređaja · prijave korisnika · izvoz",\r
"Ko je dokument ili nalog unio, izmijenio, proknjižio, stornirao ili obrisao, kada i sa kog uređaja.",\r
"Kod je odštampan ili prepisan",\r
"Kod je potreban kada administrator zaboravi lozinku. Prikazuje se samo sada — u programu se ne čuva. Odštampajte ga ili prepišite i čuvajte odvojeno od računara.",\r
"Kod služi za postavljanje nove lozinke administratora kada je lozinka zaboravljena (ekran prijave → „Zaboravljena lozinka administratora\\"). Kod se čuva na sigurnom mjestu, odvojeno od računara. Poslije upotrebe prestaje da važi i izdaje se nov.",\r
"Kod za oporavak",\r
"Kod za oporavak administratora",\r
"Kod za oporavak administratora je izdat.",\r
"Kod za oporavak administratora nije izdat.",\r
"Kod za oporavak ili korisničko ime administratora nije tačno.",\r
"Kod za oporavak se izdaje kad je prijava korisnika uključena.",\r
"Korisnici i prava",\r
"Korisnici i prava (prijava korisnika)",\r
"Korisničko ime „{0}\\" već postoji.",\r
"Korisničko ime administratora",\r
"Korisničko ime ima 3 do 40 znakova, bez razmaka.",\r
"Korisničko ime: {0}",\r
"Korisnik „{0}\\" nema pravo za radnju: {1}{2}. Prava dodjeljuje administrator (Sistem → Korisnici i prava).",\r
"Korisnik {0}",\r
"Korisnik {0} je dodat. Lozinku mijenja pri prvoj prijavi.",\r
"Korisnik {0} je obrisan.",\r
"Korisnik {0} je snimljen.",\r
"Korisnik ne postoji.",\r
"korisnik: {0}",\r
"Korisnike i prava uređuje administrator.",\r
"Licenca firme dozvoljava najviše {0} aktivnih korisnika (aktivno: {1}).",\r
"Licenca firme dozvoljava najviše {0} aktivnih korisnika. Za više korisnika potrebna je dopuna licence.",\r
"Lozinka (najmanje",\r
"Lozinka (najmanje {0} znakova)",\r
"Lozinka i ponovljena lozinka se razlikuju.",\r
"Lozinka mora imati najmanje {0} znakova.",\r
"Lozinka, ponovo",\r
"Materijalni dokument",\r
"Minut",\r
"Na računaru koji prima podatke razmjenom vide se i zapisi sa ostalih uređaja firme kada firma ima korisnike. Prava i trag su organizaciona zaštita: baza firme je fajl na uređaju, pa pristup samom uređaju štite nalog operativnog sistema i rezervne kopije.",\r
"Nabavka / osnovno sredstvo",\r
"Nalog glavne knjige",\r
"Naplata od kupca",\r
"Nema korisnika.",\r
"nema pravo unosa na ovom ekranu.",\r
"Nema zapisa za izabrani period i uslove.",\r
"Neuspjela prijava",\r
"NEW.{0}",\r
"NEW.{0} IS NOT OLD.{1}",\r
"NEW.Godina*100+NEW.Mjesec",\r
"Niko nije prijavljen.",\r
"Nov kod za oporavak",\r
"Nov kod za oporavak je izdat.",\r
"Nova lozinka (najmanje",\r
"Nova lozinka (prazno = bez promjene)",\r
"nova lozinka administratora dozvoljena 24 h po nalogu #{0}: {1}",\r
"Nova lozinka i ponovljena lozinka se razlikuju.",\r
"Nova lozinka mora biti različita od trenutne.",\r
"Nova lozinka, ponovo",\r
"Novi korisnik",\r
"npr. administrator",\r
"NULLIF(CAST({0}.{1} AS TEXT),'')",\r
"Obračun zarada",\r
"Obrisan korisnik {0}",\r
"Obrisan korisnik {0}; prijava korisnika isključena",\r
"Obrisati korisnika „{0}\\"?\\n\\nZapisi u tragu izmjena ostaju.",\r
"Obriši (svoj nalog)",\r
"Odbijena radnja",\r
"OLD.{0}",\r
"OLD.Godina*100+OLD.Mjesec",\r
"Oporavak administratora {0} kodom za oporavak; izdat nov kod",\r
"Oporavak administratora {0} po servisnom nalogu izdavača; izdat nov kod",\r
"Oporavak administratora: kod za oporavak (odštampan kada je prijava uključena) i nova lozinka. Bez koda pristup vraća podrška proizvođača.",\r
"Oporavak administratora: pogrešan kod ili korisničko ime",\r
"Otključavanje perioda",\r
"period {0} – {1}",\r
"Plaćanje dobavljaču",\r
"po ulozi",\r
"podrška proizvođača",\r
"Podrška proizvođača je odobrila postavljanje nove lozinke administratora. Kod za oporavak nije potreban; odobrenje važi 24 sata.",\r
"Pogrešno korisničko ime ili lozinka.",\r
"Posljednja prijava na ovom uređaju",\r
"Posljednji administrator se briše tek kad su obrisani ostali korisnici (time se prijava korisnika isključuje).",\r
"Postavi novu lozinku",\r
"Postavljena nova lozinka korisniku {0}",\r
"Prava",\r
"prava izmijenjena",\r
"Prava korisnika su organizaciona zaštita: uređuju ko šta radi u programu i ostavljaju trag. Baza firme je fajl na uređaju, pa pristup samom uređaju štite nalog operativnog sistema, zaključan ekran i rezervne kopije.",\r
"Pregled i izvoz svih evidencija, bez unosa i izmjena (vlasnik, klijent, revizor).",\r
"Previše pogrešnih pokušaja. Nov pokušaj je moguć za {0} s.",\r
"Previše pogrešnih pokušaja. Nova prijava je moguća za {0} s.",\r
"Prijava korisnika",\r
"Prijava korisnika je uključena: pri otvaranju firme traže se korisničko ime i lozinka. Uloga je gotov profil prava; prava se mogu prilagoditi korisniku po stavci menija i radnji.",\r
"Prijava korisnika pri otvaranju firme · uloge (administrator, knjigovođa, unos dokumenata, samo pregled) · prava po stavci menija i radnji · kod za oporavak",\r
"Prijava korisnika uključena; administrator {0}",\r
"Prijava pri otvaranju firme, uloge, prava po stavci menija i radnji, kod za oporavak.",\r
"Prijava se traži i na uređajima za skeniranje (telefon u objektu)",\r
"Prijavi se",\r
"prilagođena",\r
"printf('%02d/%d', {0}.Mjesec, {1}.Godina)",\r
"Pristup",\r
"Promijenjena sopstvena lozinka",\r
"Promjena lozinke",\r
"Radni nalog proizvodnje",\r
"radnja: {0}",\r
"redova. Izvoz sadrži sve redove za izabrane uslove.",\r
"reset lozinke administratora po nalogu #{0} nije primijenjen: {1}",\r
"Sačuvaj lozinku",\r
"Samo pregled",\r
"Servisni nalog izdavača: nova lozinka administratora bez koda za oporavak (24 h): {0}",\r
"Sistem → Korisnici i prava",\r
"Sistem → Trag izmjena",\r
"Štampaj kod",\r
"Stavka bez prava pregleda se ne prikazuje u meniju. Bez prava unosa ekran je otvoren samo za pregled. * vidi se samo uz pravo „Podešavanja\\".",\r
"Stavka menija",\r
"sva prava",\r
"Sva prava, korisnici i njihova prava.",\r
"Svaki unos, izmjena, knjiženje, storno i brisanje dokumenta i naloga: ko, kada i sa kog uređaja. Prijave korisnika i izmjene prava. Redovi traga se ne mijenjaju i ne brišu.",\r
"Sve knjiženje i izvještaji, zaključavanje perioda i podešavanja. Bez upravljanja korisnicima.",\r
"Sve stavke grupe",\r
"Tabela",\r
"tekst: {0}",\r
"Trag izmjena",\r
"Trenutna lozinka",\r
"Trenutna lozinka nije tačna.",\r
"U firmi mora ostati bar jedan aktivan administrator.",\r
"uključen",\r
"Uključi prijavu korisnika",\r
"Uključiti prijavu korisnika?\\n\\nOd sada se pri otvaranju firme traže korisničko ime i lozinka. Korisnik „{0}\\" postaje administrator. Poslije potvrde se prikazuje kod za oporavak, koji treba odštampati.",\r
"Uključivanje prijave korisnika",\r
"uloga {0} → {1}",\r
"Unesite korisničko ime i lozinku.",\r
"Unos dokumenata",\r
"Unos i izmjena",\r
"Uređaj ne podržava zaštitu lozinke (WebCrypto). Prijava korisnika nije moguća na ovom uređaju.",\r
"Vrati prava uloge",\r
"Vrsta dokumenta",\r
"vrsta: {0}",\r
"XXXX-XXXX-XXXX-XXXX-XXXX",\r
"Zaboravljena lozinka administratora",\r
"Zaboravljenu lozinku korisnika postavlja administrator (korisnik je mijenja pri prvoj prijavi). Zaboravljena lozinka administratora vraća se kodom za oporavak na ekranu prijave; bez koda i bez drugog administratora pristup vraća podrška proizvođača.",\r
"Zaboravljenu lozinku korisnika postavlja administrator firme.",\r
"Zapamti prijavu na ovom uređaju",\r
"znakova)",\r
"· planiran, nije došao",\r
"· rad van rasporeda",\r
"(ispravka)",\r
"{0} · vrati",\r
"{0}: nema stvarnih sati",\r
"{0}: nema termina u rasporedu (rad van rasporeda)",\r
"{0}: sedmica je potvrđena",\r
"h · kašnjenja",\r
"h · prekovremeno",\r
"h · stvarno",\r
"izmijenjeno poslije primjene",\r
"Kašnjenje min",\r
"Ljudi iz Menadžera: {0}",\r
"ne podržava ({0})",\r
"nema podatka iz Menadžera",\r
"Nema stvarnih sati za primjenu (sve je već primijenjeno ili nije primljeno).",\r
"Nema zahtjeva za odsustvo iz Menadžera.",\r
"Nije izabrano šta se primjenjuje.",\r
"objekat „{0}\\" ne postoji u Knjigovodstvu",\r
"Odbiti zahtjev uz razlog „{0}\\"?",\r
"Odobriti odsustvo: {0}, {1}, {2} – {3}?",\r
"Odsustvo je upisano.",\r
"Plan h",\r
"Plan i stvarno",\r
"Plan smjena prema stvarnom dolasku i odlasku · stvarni sati u rasporedu · zahtjevi radnika za odsustvo",\r
"Plan smjena prema stvarnom dolasku i odlasku, stvarni sati u rasporedu i zahtjevi radnika za odsustvo.",\r
"planiran, na odsustvu",\r
"planiran, nije došao",\r
"Podatke iz Menadžera obrađuje glavni računar. {0}",\r
"Podnio",\r
"podnio {0}",\r
"podržava ({0})",\r
"Poslovođa",\r
"potvrđena sedmica",\r
"povučen u Menadžeru",\r
"Prekovremeno",\r
"Prekovremeno h",\r
"Preskočeno: {0}{1}",\r
"Primijeni stvarne sate (",\r
"Primijenjeno termina: {0}.{1}",\r
"Prisutnost i zahtjevi iz Menadžera",\r
"Prisutnost iz Menadžera ({0}, sedmica od {1}): radnik nije nađen u Knjigovodstvu: {2}{3}",\r
"Prisutnost iz Menadžera ({0}): {1}.",\r
"Prisutnost iz Menadžera {0}: {1}",\r
"Prisutnost iz Menadžera {0}: sedmica nije ponedjeljak.",\r
"rad van rasporeda",\r
"Radnik iz zahtjeva nije povezan sa radnikom u Knjigovodstvu. Potrebno je izabrati radnika.",\r
"Razlika h",\r
"razlika u satima",\r
"Sati ovog reda nisu primijenjeni.",\r
"sati primijenjeni",\r
"Sati termina su vraćeni.",\r
"Sedmica je potvrđena u Knjigovodstvu (zaključana). Izmjena je moguća tek kad se potvrda poništi.",\r
"Sedmica je potvrđena u Knjigovodstvu (zaključana). Stvarni sati se primjenjuju tek kad se potvrda poništi (Smjene → Sedmica → ✓).",\r
"Stvarni dolazak i odlazak stižu iz Menadžera (prijava na kasi, telefon radnika, ručna ispravka poslovođe sa razlogom). Raspored se ne mijenja sam: stvarni sati ulaze u termin tek radnjom „Primijeni stvarne sate\\"; sedmica potvrđena u Smjenama se ne mijenja.",\r
"Stvarno",\r
"Stvarno h",\r
"u skladu sa planom",\r
"Upisati stvarne sate iz Menadžera u {0} termina rasporeda? Prethodni sati se pamte i mogu se vratiti.",\r
"Vratiti sate termina kakvi su bili prije primjene?",\r
"Vrsta odsustva „{0}\\" nije poznata. Potrebno je izabrati vrstu.",\r
"Za ovu sedmicu nema rasporeda ni podataka o prisutnosti iz Menadžera.",\r
"Zahtjev iz Menadžera",\r
"Zahtjev je odbijen.",\r
"Zahtjev ne postoji.",\r
"Zahtjev nije u stanju „čeka odluku\\" ({0}).",\r
"Zahtjev za odsustvo iz Menadžera ({0}): radnik nije nađen u Knjigovodstvu.",\r
"Zahtjev za odsustvo iz Menadžera {0}: {1}",\r
"Zahtjev za odsustvo iz Menadžera {0}: period nije ispravan.",\r
"Zahtjevi radnika iz Menadžera. Potvrda upisuje odsustvo (iste provjere kao ručni upis; termini rasporeda u tom periodu se otkazuju); odbijanje traži razlog i vidi se u Menadžeru.",\r
"Zahtjevi za odsustvo",\r
"{0} artikla {1} ({2}): {3}",\r
"Asortiman {0}: {1} — {2}",\r
"drži se",\r
"Izbacivanje",\r
"ne drži se",\r
"obavezan",\r
"Pokretna prosječna ponderisana nabavna cijena artikla u objektu (MRS 2), sa rabatom i zavisnim troškovima — isti obračun kao izvještaj RUC u Knjigovodstvu.",\r
"Uvođenje",\r
", primio {0}",\r
", vozač {0}",\r
"· dan isporuke {0}",\r
"· isporučeno",\r
"· isporuka:",\r
"· izvor:",\r
"· kasni",\r
"· kupac: {0}",\r
"· naručeno",\r
"· objekat: {0} · isporuka: {1}{2}",\r
"· otkazano {0}",\r
"· otpremnica",\r
"· otpremnice: {0}",\r
"· otvorenih",\r
"· potvrdio {0} {1}",\r
"· raspoloživo",\r
"· rezervacija istekla",\r
"· spremljeno {0}",\r
"· vozač",\r
"· vozilo",\r
"· zaostatak",\r
"· zaostatak sa PDV {0}",\r
"(bez komercijaliste)",\r
"(bez težine: {0} stavki — kg po JM u „Uvoz, akcize i bonusi\\")",\r
"(u pripremi — Otpremnice bez računa)",\r
"{0}\\n\\nPotvrda traži odobrenje. Razlog odobrenja:",\r
"{0}\\n\\nPotvrditi narudžbu?",\r
"{0} · {1} stavki · {2}",\r
"{0} · izdato {1} stavki · {2}",\r
"{0} (potvrđeno {1})",\r
"{0} (samopotvrda)",\r
"{0} (traženo {1}, raspoloživo {2})",\r
"{0} je evidentiran i na drugom računaru; ovdašnji zapis dobija broj {1}.",\r
"{0} Potvrda nije dozvoljena bez odobrenja (Kupci-firme / Narudžbe kupaca → podešavanje kontrole).",\r
"{0} sa drugog računara dobija broj {1} (broj je ovdje već zauzet ranijim zapisom).",\r
"{0}: {1} od {2}{3}",\r
"{0}: naručeno {1}, izdato {2}{3}",\r
"{0}. {1}: {2} {3} × {4} EUR bez PDV-a",\r
"+ dodaj izdatu otpremnicu…",\r
"Adresa e-pošte kupca:",\r
"AND 0",\r
"AND o.Datum>=?",\r
"Artikli bez veze sa šifarnikom: {0}.",\r
"Broj dana rezervacije mora biti od 0 do 365.",\r
"broj, kupac, PIB",\r
"Čeka potvrdu: {0}",\r
"Cijena i rabat potvrđene narudžbe se ne mijenjaju. Narudžbu vratiti u nacrt.",\r
"cijena sa terena",\r
"Cijena stavke narudžbe sa terena",\r
"Cijene stavki su po pravilu kupca.",\r
"Dan {0} · vozač {1} · vozilo {2} · otpremnica {3}",\r
"Dan ture nije ispravan.",\r
"Datum narudžbe nije ispravan.",\r
"djelimično isporučena",\r
"Dodaj artikal",\r
"e-pošta kupca",\r
"firma nema narudžbi kupaca",\r
"Fotografija",\r
"i artikli bez rezervacije",\r
"i izdata",\r
"isporučena",\r
"isporučeno",\r
"Isporučeno",\r
"isporučeno sa odstupanjem",\r
"Isporuka do",\r
"Isporuka je potvrđena. Otpremnica ostaje u turi.",\r
"Isporuka kupcu „{0}\\" je blokirana{1}.",\r
"Iz Menadžera{0}",\r
"Izabrati kupca.",\r
"Izabrati objekat iz kog se isporučuje.",\r
"Izmjene kupca primijenjene na {0} stavki.",\r
"izmjene kupca su primijenjene",\r
"kako je komercijalista upisao",\r
"kg",\r
"Količina ne može biti manja od isporučene i spremljene ({0}).",\r
"komercijalista (Menadžer)",\r
"Komercijalista je izmijenio narudžbu na terenu {0} — narudžba u Knjigovodstvu se ne mijenja; potrebna je provjera.",\r
"Komercijalista je otkazao narudžbu na terenu {0} — narudžba u Knjigovodstvu ostaje; potrebna je provjera.",\r
"Komisioniranje → otpremnica",\r
"Komisioniranje nema izdatih količina.",\r
"komisioniranje u toku",\r
"Komisionirao {0}{1}",\r
"Komisionirao: ____________________ Kontrolisao: ____________________",\r
"Kontrola kreditnog limita i blokade kupca je u Kupci-firme (ista za narudžbu, otpremnicu i fakturu).",\r
"Kontrola raspoloživog nije ispravna.",\r
"Korisnik „{0}\\" (uloga {1}) nema pravo za ovu radnju u Menadžeru.",\r
"Korisnik „{0}\\" je isključen u Menadžeru.",\r
"Kreditni limit kupca „{0}\\" je {1} EUR. Sa ovom narudžbom izloženost je {2} EUR (dug {3}, otpremnice bez računa {4}, druge otvorene narudžbe {5}, narudžba {6}).",\r
"Kupac „{0}\\" kasni sa plaćanjem {1} dana (granica {2} dana), dospjelo {3} EUR.",\r
"Kupac „{0}\\"{1} nije nađen u Knjigovodstvu.",\r
"Kupac / komercijalista",\r
"Kupac i objekat se ne mijenjaju kad narudžba ima stavke ili je potvrđena.",\r
"kupac je ODUSTAO od narudžbe",\r
"kupac je potvrdio narudžbu",\r
"kupac je potvrdio SA IZMJENAMA",\r
"Kupac nema ispravnu adresu e-pošte (Kupci → e-pošta).",\r
"Kupac nije mijenjao narudžbu.",\r
"kupac odbio prijem",\r
"Kupac odgovara linkom (količine i dan isporuke).",\r
"Lista za komisioniranje",\r
"Lista za komisioniranje — narudžba",\r
"Lista za komisioniranje — narudžba {0}",\r
"Lista za komisioniranje {0}",\r
"Magacioner je izmijenio komisioniranje {0} — dokument se ne mijenja; potrebna je provjera.",\r
"Mjesto isporuke: {0}.",\r
"n.Komercijalista=? COLLATE NOCASE",\r
"n.Status IN (?,?)",\r
"Na vrijeme",\r
"Nacrt je ponovo obrađen.",\r
"Nacrt nije spreman za potvrdu ({0}).",\r
"nacrt otpremnice — čeka potvrdu",\r
"Nacrt otpremnice iz Menadžera",\r
"Nacrte iz Menadžera potvrđuje glavni računar. {0}",\r
"Naručeno",\r
"Narudžba",\r
"Narudžba {0} je numerisana u {1}. godini. Datum mora ostati u toj godini.",\r
"Narudžba {0} je otkazana.",\r
"Narudžba {0} je potvrđena. Izmjena je moguća poslije vraćanja u nacrt.",\r
"Narudžba {0} je potvrđena. Roba je rezervisana u objektu {1}.",\r
"Narudžba {0} nije nađena u Knjigovodstvu.",\r
"Narudžba {0} nije potvrđena ({1}).",\r
"Narudžba {0} nije u nacrtu ({1}).",\r
"Narudžba je vraćena u nacrt (rezervacija je oslobođena).",\r
"Narudžba kupca {0}",\r
"Narudžba kupca nije fiskalni račun i ne mijenja knjige: roba se razdužuje otpremnicom iz narudžbe. Potvrđena narudžba rezerviše robu u objektu.",\r
"Narudžba ne postoji.",\r
"Narudžba ne traži odobrenje.",\r
"Narudžba nema stavki.",\r
"Narudžba nije nađena.",\r
"Narudžba nije potvrđena.",\r
"Narudžba sa terena",\r
"Narudžba sa terena {0}: {1}",\r
"Narudžba sa terena se potvrđuje sama kad su limit, blokada i raspoloživo u redu",\r
"Narudžbe i isporuke iz Menadžera: {0}",\r
"Narudžbe koje komercijalista uzme na terenu stižu kao narudžbe u nacrtu (izvor „teren\\"). Komisioniranje magacionera stiže kao nacrt otpremnice: otpremnica nastaje tek potvrdom (izdate količine, dogovorene cijene narudžbe).",\r
"Narudžbe kupaca",\r
"NARUDŽBE KUPACA",\r
"Narudžbi",\r
"Nema količine za otpremu (zaostatak je otpremljen ili spremljen).",\r
"Nema nacrta iz Menadžera.",\r
"Nema narudžbi u periodu.",\r
"Nema narudžbi za izabrani filter.",\r
"Nema potvrda isporuke u periodu.",\r
"nema potvrda na čekanju",\r
"Nema rezervacija u objektu.",\r
"Nema tura u periodu.",\r
"NK-{0}-{1}",\r
"Nova narudžba",\r
"Nova tura",\r
"Numeracija narudžbi: slobodan broj nije nađen.",\r
"Numeracija tura: slobodan broj nije nađen.",\r
"Objekat (magacin)",\r
"Objekat isporuke „{0}\\" nije povezan sa Knjigovodstvom.",\r
"Objekat isporuke ne pripada kupcu.",\r
"Od dana",\r
"Odbijanje nacrta",\r
"Odgovor kupca nije čitljiv.",\r
"odgovora kupaca {0}",\r
"Odobrenje potvrde narudžbe",\r
"Odstupanja",\r
"Odstupanja: {0}",\r
"Odstupanja: {0}.",\r
"OTIF",\r
"OTIF (na vrijeme i u potpunosti): završena narudžba je „u potpunosti\\" kad je svaka stavka isporučena u naručenoj količini, a „na vrijeme\\" kad je posljednja izdata otpremnica najkasnije na željeni dan isporuke (bez željenog dana broji se samo „u potpunosti\\").",\r
"OTIF %",\r
"OTIF prema kupcu",\r
"Otkaz narudžbe",\r
"otkazana na terenu",\r
"otkazana na terenu (Menadžer)",\r
"otkazano",\r
"Otkazano",\r
"Otkazao",\r
"Otkaži narudžbu",\r
"Otpremnica {0} je napravljena{1}.",\r
"Otpremnica {0} je već u turi {1}.",\r
"Otpremnica {0} nije izdata. U turu ide izdata otpremnica.",\r
"Otpremnica {0} nije nađena.",\r
"Otpremnica će biti izdata danas: roba se razdužuje u lageru i trgovačkoj knjizi. Nastaviti?",\r
"Otpremnica će biti izdata: roba se razdužuje u lageru i trgovačkoj knjizi. Nastaviti?",\r
"Otpremnica i izdavanje",\r
"Otpremnica iz narudžbe",\r
"Otpremnica se pravi za potvrđenu narudžbu ({0} je {1}).",\r
"Otpremnica u pripremi za cio zaostatak (dogovorene cijene); izdaje se u Otpremnicama",\r
"otvorene (potvrđene, u komisioniranju, djelimično)",\r
"Otvorenih",\r
"Otvori narudžbu",\r
"p.Pregledano IS NULL",\r
"Pakovanja",\r
"Planirani dan isporuke: {0}.",\r
"Po komercijalisti",\r
"Po narudžbi {0} od {1}{2}.",\r
"Po narudžbi kupca",\r
"po pravilu „cijena za kupca na dan\\" (cijena sa terena se vidi uz stavku)",\r
"poslata",\r
"poslata, čeka odgovor",\r
"Postoji otpremnica u pripremi za ovu narudžbu. Prvo je izdati ili obrisati.",\r
"Poštovani, potvrđujemo prijem narudžbe {0} od {1}.",\r
"Potpis / foto",\r
"Potpis primaoca",\r
"Potvrda isporuke",\r
"potvrda isporuke primljena",\r
"Potvrda je označena kao pregledana.",\r
"Potvrda kupcu e-poštom",\r
"Potvrda kupcu e-poštom traži odgovor linkom (količine i dan isporuke)",\r
"Potvrda kupcu se šalje preko servera (pošta firme, podešava se u Menadžeru → E-pošta). {0}",\r
"Potvrda kupcu:",\r
"Potvrda nacrta otpremnice iz Menadžera odmah izdaje otpremnicu",\r
"Potvrda narudžbe",\r
"Potvrda narudžbe {0} je predata za slanje na {1}.",\r
"Potvrda narudžbe {0}{1}",\r
"Potvrda narudžbe kad raspoloživo nije dovoljno",\r
"Potvrda narudžbe kupcu",\r
"Potvrda se šalje za potvrđenu narudžbu.",\r
"Potvrde isporuke sa telefona vozača",\r
"potvrđen (otpremnica)",\r
"Potvrđena sama (limit, blokada i raspoloživo u redu).",\r
"Potvrdi (otpremnica)",\r
"Potvrdi i izdaj",\r
"Potvrdi narudžbu (rezerviši robu)",\r
"Potvrdu je odobrio {0} {1} — {2}.",\r
"Pregledano",\r
"pregledao",\r
"Pregledao",\r
"Primijeni izmjene kupca",\r
"primljena (narudžba u Knjigovodstvu)",\r
"Raspoloživo = knjigovodstveno stanje u objektu danas − zaostatak potvrđenih narudžbi. Negativno raspoloživo: obećano je više nego što ima — potrebna je nabavka (prijedlog narudžbe u Menadžeru uzima i otvorene narudžbe kupaca).",\r
"Raspoloživo u objektu nije dovoljno: {0}{1}. Razlika ostaje zaostatak.",\r
"Razlog otkaza narudžbe:",\r
"Razlog zatvaranja zaostatka (roba se neće isporučiti):",\r
"Redoslijed isporuke",\r
"Rezervacija važi dana poslije željenog dana isporuke (0 = do isporuke ili otkaza)",\r
"Rezervacije i raspoloživo",\r
"s.ArtikalID IS NOT NULL",\r
"spremljeno",\r
"Stanje u objektu",\r
"Stanje u objektu − rezervisano drugim narudžbama",\r
"Status ture nije ispravan.",\r
"Stavka bez artikla iz šifarnika: {0}.",\r
"TU-{0}-{1}",\r
"TU-{0}-%",\r
"Tura",\r
"Tura {0} je {1}.",\r
"Tura je napravljena.",\r
"Tura ne postoji.",\r
"Ture i isporuke",\r
"u komisioniranju",\r
"U potpunosti",\r
"Ukupna težina:",\r
"Ukupna težina: {0} kg",\r
"Ukupno sa PDV-om: {0} EUR.",\r
"Uloga korisnika nije poznata Knjigovodstvu (stariji Menadžer ili korisnik bez zapisa uređaja administratora).",\r
"Uloga korisnika nije poznata Knjigovodstvu.",\r
"Uloga vozača nije poznata Knjigovodstvu.",\r
"unos u Knjigovodstvu",\r
"Upisati kupca (Kupci-firme ili Izdaj fakturu → kupci).",\r
"Upisati vozača ili vozilo.",\r
"upozori (razlika ostaje zaostatak)",\r
"Utovario: ____________________ Vozač: ____________________",\r
"Utovarna lista",\r
"Utovarna lista — tura",\r
"Utovarna lista — tura {0}",\r
"Utovarna lista {0}",\r
"Veleprodaja: narudžba kupca, rezervacija i raspoloživo, komisioniranje iz Menadžera, otpremnica iz narudžbe, zaostatak, ture i potvrde isporuke, OTIF",\r
"više od naručenog",\r
"Vozac",\r
"Vozač",\r
"Vozač (ime korisnika u Menadžeru) i vozilo, odvojeno zarezom:",\r
"Vozac=? COLLATE NOCASE",\r
"Vozilo",\r
"Vrati u nacrt",\r
"x.Status IN ('nacrt','greska','u-radu')",\r
"Za izdati",\r
"Za narudžbu postoji otpremnica. Otkazati zaostatak („Zatvori zaostatak\\") ili obrisati otpremnicu u pripremi.",\r
"Za narudžbu postoji otpremnica. Vraćanje u nacrt nije moguće.",\r
"Za otkaz je potreban razlog.",\r
"Za zatvaranje zaostatka je potreban razlog.",\r
"zabrani bez odobrenja",\r
"Zaostatak",\r
"Zaostatak je zatvoren ({0} stavki). Rezervacija je oslobođena.",\r
"Zaostatak sa PDV",\r
"Zaostatak zatvoren: {0}",\r
"Zapis Menadžera {0} {1}: {2}",\r
"Zatvori zaostatak",\r
"završena",\r
"Završenih narudžbi",\r
"završenih narudžbi · OTIF",\r
"Željeni dan isporuke",\r
"Željeni dan isporuke je prije datuma narudžbe.",\r
"Željeni dan isporuke nije ispravan.",\r
". Prijava na kasi: ime i PIN. Izmjene idu kasama i Menadžeru sa sljedećom razmjenom; važi posljednja izmjena (Menadžer ili Knjigovodstvo).",\r
"„{0}\\": fiskalna i bezbjednosna podešavanja kase se ne mijenjaju daljinski.",\r
"(da / ne)",\r
"(prazno = bez izmjene)",\r
"{0}: očekuje se objekat.",\r
"{0}: potreban je broj.",\r
"{0}: vrijednost nije ispravan JSON.",\r
"AB12-CD34-EF56",\r
"AES-GCM",\r
"Brze tipke (šifre, zarezom)",\r
"Daljinska podešavanja kasa",\r
"Fiskalna i bezbjednosna podešavanja (fiskalizacija, kodovi, PIB, oznaka kase, sertifikat) se ne mijenjaju daljinski.",\r
"Granica gotovine u kasi (€)",\r
"Granica popusta je procenat od 0 do 100.",\r
"granica uloge",\r
"HKDF",\r
"HMAC",\r
"Ime kasira je obavezno.",\r
"Izmijenio",\r
"Izmjena: {0}",\r
"Kasir „{0}\\" je snimljen.",\r
"Kasir „{0}\\" već postoji.",\r
"Kasiri (",\r
"Kasiri (ime i PIN) i daljinska podešavanja kasa za sve objekte · isti nalog kao iz Menadžera, važi posljednja izmjena",\r
"Kasiri (ime i PIN) i podešavanja kasa upisuju se ovdje ili u Menadžeru — isti potpisani nalog ide na sve kase firme, a važi posljednja izmjena. Za potpis je potreban ključ firme: u Menadžeru (uređaj administratora) → Korisnici → „Kod za uređaj administratora\\", pa kod ovdje.",\r
"Kasiri i podešavanja kasa",\r
"Knjigovodstvo je povezano sa ključem firme {0}.",\r
"Knjigovodstvo nije povezano sa ključem firme (Kase → Kasiri i podešavanja → Poveži).",\r
"Knjigovodstvo: {0}",\r
"Kod ima 12 znakova (npr. AB12-CD34-EF56): Menadžer → Korisnici → „Kod za uređaj administratora\\".",\r
"Kod nije ispravan ili je istekao. Potreban je nov kod za uređaj administratora iz Menadžera.",\r
"Kod operatera nije u obliku koji dodjeljuje Poreska uprava (ab123cd456).",\r
"Kod za uređaj administratora",\r
"Konobar",\r
"Nema naloga za slanje.",\r
"Nema tog kasira.",\r
"Nepoznata uloga kasira.",\r
"Nije izabrano nijedno podešavanje.",\r
"Nov kasir",\r
"Objekti (bez izbora — sve kase)",\r
"Objekti (bez izbora — svi)",\r
"Odobrenje sa telefona (Menadžer)",\r
"PIB firme nije upisan (Podešavanja → Firma).",\r
"PIN ima 4 do 8 cifara.",\r
"PIN šefa i poslovođe ima 6 do 8 cifara.",\r
"Početak radnog dana (HH:MM)",\r
"Podešavanje „{0}\\" je snimljeno.",\r
"Poništavanje posljednjeg računa traži šefa",\r
"Popust bez odobrenja (%)",\r
"Pošalji kasama",\r
"Poslato kasama i Menadžeru: {0}.",\r
"Prava po ulozi (JSON)",\r
"Prijava kasira karticom",\r
"Provjera godina (alkohol, duvan)",\r
"Ručni popust bez šefa (%)",\r
"Ručni popust traži razlog",\r
"Šef",\r
"Šef i poslovođa moraju imati PIN (odobravaju radnje na kasi).",\r
"Slijepo brojanje pazara",\r
"Snimi kasira",\r
"Snimi podešavanje",\r
"Štampa poslije naplate",\r
"U razmjeni nema fajla uređaja administratora Menadžera sa kodom za uređaj administratora. Kod se pravi u Menadžeru (Korisnici), pa se sačeka razmjena.",\r
"ukinut",\r
"Ukloni vezu sa ključem",\r
"Upozorenje vlasniku: popust (%)",\r
"Upozorenje vlasniku: razlika pazara (€)",\r
"Veza sa ključem firme je uklonjena sa ovog računara.",\r
"WHERE Vrsta=?",\r
"— bez fakture —",\r
", kupac {0}",\r
", priznanica {0}",\r
", škart otpisan",\r
"; knjižno odobrenje je izdato",\r
"; nacrt korektivnog računa je na ekranu Izlazni računi (izdavanje i fiskalizacija)",\r
"; škart je otpisan",\r
"; škart je prenesen",\r
". Bez artikla u šifarniku: {0}",\r
"· gotovina za predaju",\r
"· neposlatih računa {0}",\r
"· povrat u magacin",\r
"· poziv na broj",\r
"· škart",\r
"· vozač {0}",\r
"(IKOF {0}…)",\r
"(povratni prenos napravljen)",\r
"{0} {1} kom{2}",\r
"{0}: na fakturi {1} nema dovoljno količine za povrat ({2}).",\r
"{0}: najviše {1} (fakturisano {2}, već ispravljeno {3}).",\r
"{0}: najviše {1}.",\r
"€ · predato",\r
"Ambalaza",\r
"Ambalaža",\r
"AND p.ArtikalAmbalaze=?",\r
"AND p.KupacID=?",\r
"art",\r
"Artikal je označen kao povratna ambalaža.",\r
"Artikal ne može biti ambalaža samom sebi.",\r
"Barkod pakovanja",\r
"Bez artikla u šifarniku: {0}",\r
"Bez dokumenta (povrat sa kase, otpremnica)",\r
"Bez obračuna PDV-a",\r
"Bezgotovinski računi kase kupcima-firmama (virman, odloženo plaćanje, ostalo bezgotovinsko) sa rokom plaćanja. Svaki račun je otvorena stavka kupca u Naplati: uparuje se sa izvodom po pozivu na broj, ulazi u opomene, IOS, starost potraživanja i stanje kupca. Promet je u pazaru i KIF-u kao i do sada.",\r
"Boca",\r
"Boca uz flašu 1; gajba uz 24 boce = 0,041667 (1/24)",\r
"Broj komada ambalaže po jedinici robe mora biti veći od nule.",\r
"Broj računa, promet i predat novac po konobaru (zaključci smjena kase).",\r
"čl. 14",\r
"čl. 15",\r
"čl. 20",\r
"čl. 28",\r
"čl. 28 st. 1 t. 2",\r
"čl. 29",\r
"čl. 3",\r
"čl. 30",\r
"čl. 4",\r
"čl. 44",\r
"Clan",\r
"Član",\r
"Član i tačka",\r
"Datum {0} · iz objekta {1} · u vozilo {2}{3}",\r
"Djelimični korektivni račun (roba u lager)",\r
"Dodati artikle za utovar.",\r
"Dokumenata",\r
"Dokument nema kupca.",\r
"Dokument nema robe vezane za ambalažu.",\r
"Dokument nije pronađen.",\r
"Faktura je drugog kupca.",\r
"Faktura je nacrt — ispravlja se izmjenom stavki.",\r
"Finansijski dokument",\r
"Gajba",\r
"Ishod je obavezan.",\r
"Ispravno",\r
"Ispravno (u lager)",\r
"Iz predračuna je već napravljena faktura {0}.",\r
"Izabrani artikal nije označen kao povratna ambalaža.",\r
"Izabrani artikal nije povratna ambalaža.",\r
"Izabrati bar jednu stavku sa količinom.",\r
"Izabrati objekat za škart robu.",\r
"Izdao (magacin)",\r
"Izmjena vozila",\r
"Kartica ambalaže kupca",\r
"Kartica firme, kartica prodavca, ostalo bezgotovinsko, avans i odloženo plaćanje po objektu (iz zaključaka smjena). Pazar, KIF i PDV ostaju kao do sada; odloženo i ostalo bezgotovinsko sa računom sa rokom knjiže se na kupca.",\r
"Kasa (ENU, PJ)",\r
"Kasa (VP4): {0}",\r
"Kasa nije poslala stavke računa.",\r
"Keg (bure)",\r
"Knjižno odobrenje sa stavkama",\r
"Kod kupaca",\r
"Kod kupca",\r
"Kod poslovnog prostora vozila i kasa vozača (ENU telefona) upisuju se u Cjenovnik kasa → Kase i objekti, uz ovaj objekat. U paketu kase vozilo nosi vrstu objekta, registraciju, vozača, matični magacin i zalihu.",\r
"Komada po JM robe",\r
"Korektivni račun (djelimični) za račun {0}{1}",\r
"Korektivni račun postoji samo za fakture.",\r
"Korektivni račun se ne ispravlja korektivnim računom.",\r
"Kupac je obavezan.",\r
"Kupac nije prepoznat (PIB).",\r
"kupac nije u evidenciji",\r
"Kupac PIB {0}",\r
"Matica",\r
"Matični magacin",\r
"Matični magacin vozila je obavezan.",\r
"Mjesečni izvještaj o plastičnim kesama (naknada) po objektu, iz zaključaka smjena kase.",\r
"Moguće vratiti",\r
"Na kuću",\r
"Nacrt fakture je napravljen (Izlazni računi).",\r
"naplaćen",\r
"Naplata duga {0}: {1}",\r
"Naplata duga na terenu",\r
"Naplata duga na terenu{0}{1} (kasa {2})",\r
"Naplata starog duga na terenu ili na kasi (priznanica, nije fiskalni račun). Svaka naplata je uplata kupca u Naplati vezana za fakturu ili račun sa kase; gotovina ulazi u zbir gotovine kupca po PIB-u (ZSPNFT čl. 65).",\r
"Naplatio",\r
"Napravi",\r
"Napravi fakturu",\r
"Nema ambalaže kod kupaca.",\r
"Nema artikala označenih kao povratna ambalaža.",\r
"Nema kretanja ambalaže.",\r
"Nema naplata duga sa kase.",\r
"Nema pakovanja.",\r
"Nema podataka o kesama za izabrani mjesec.",\r
"Nema povratnica.",\r
"Nema predračuna sa kase.",\r
"Nema računa sa rokom sa kase za izabrani period.",\r
"Nema razduženja vozača.",\r
"Nema reklamacija.",\r
"Nema slobodnog iznosa (uplata ili račun su već zatvoreni).",\r
"Nema upisanih osnova.",\r
"Nema upisanih vozila (kartica Vozila).",\r
"Nema upisanih vozila.",\r
"Nema utovara.",\r
"Nema veza.",\r
"Nema zahtjeva kupaca vjernosti.",\r
"Nepoznat osnov oslobođenja.",\r
"Nepoznat status reklamacije.",\r
"Nova povratnica",\r
"Nova reklamacija",\r
"Novo vozilo",\r
"Numeracija povratnica: slobodan broj nije pronađen.",\r
"Objekat „vozilo\\" (pokretni poslovni prostor) · utovar i utovarna lista · zaliha vozila · razduženje vozača",\r
"Objekat {0} više neće biti vozilo (objekat i dokumenti ostaju).",\r
"Objekat nije vozilo.",\r
"Objekat prijema",\r
"Objekat prijema robe je obavezan.",\r
"Objekat za škart",\r
"Obrađeno",\r
"Obradjeno",\r
"Obrok osoblja",\r
"Odbijena",\r
"Odloženo",\r
"Odobrenje",\r
"Opis reklamacije je obavezan.",\r
"Osnov je snimljen.",\r
"Osnov oslobođenja na fiskalnom računu kase (artikal po stopi 0 %)",\r
"Ostala plaćanja",\r
"Ostala plaćanja na kasi",\r
"Ostalo bezgotovinsko",\r
"Otpis u objektu",\r
"Označi kao ambalažu",\r
"Oznaka ide kasi u paketu (sedmi član reda artikla) i postaje osnov oslobođenja na fiskalnom računu. Polje PR-PDV prijave artikla (nulta stopa / oslobođeno / van sistema) se bira na ekranu Artikli i ne mijenja se ovdje.",\r
"Oznaka pakovanja je obavezna (gajba, karton, paleta…).",\r
"Oznaka vozila je uklonjena.",\r
"Pakovanja artikla (unos u pakovanjima na kasi)",\r
"Pakovanja i osnovi oslobođenja",\r
"Pakovanje je snimljeno.",\r
"Pakovanje mora imati više od jednog komada.",\r
"Paleta",\r
"plaćen",\r
"Plastične kese",\r
"Plastične kese po objektu",\r
"Po konobaru",\r
"Po predračunu kase {0}",\r
"Pokretni",\r
"Popis ambalaže kod kupaca",\r
"Popravka",\r
"Posljednji utovari",\r
"potvrđen zaključkom smjene",\r
"Potvrdi razduženje",\r
"Povraćaj robe po stavkama",\r
"Povrat na kasi{0}",\r
"Povrat neprodate robe, razduženje vozača {0} ({1})",\r
"Povrat novca (knjižno odobrenje)",\r
"Povrat u magacin",\r
"Povrati kupaca i ambalaža",\r
"Povratna ambalaža",\r
"Povratna ambalaža (evidencijski, ne ulazi u osnovicu PDV-a — ZPDV čl. 20 st. 13): {0}",\r
"Povratni prenos",\r
"Povratnica",\r
"povratnica {0}",\r
"Povratnica {0}",\r
"Povratnica je napravljena.",\r
"Povratnica je obrisana.",\r
"Povratnica je zaključena.",\r
"Povratnica je zaključena{0}{1}{2}{3}.",\r
"Povratnica kupca po artiklima (ispravna roba u lager, škart u otpis ili poseban objekat), djelimični korektivni račun ili knjižno odobrenje sa stavkama, reklamacije kupaca i povratna ambalaža (evidencijski — ne ulazi u osnovicu PDV-a, ZPDV čl. 20 st. 13).",\r
"Povratnica kupca po stavkama · djelimični korektivni račun i knjižno odobrenje sa stavkama · reklamacije · povratna ambalaža po kupcu · pakovanja i osnovi oslobođenja za kasu",\r
"Povratnica ne postoji.",\r
"Povratnica nema stavki.",\r
"Povratnice",\r
"Poziv na broj",\r
"Predračun je poništen na kasi.",\r
"Predračun ne postoji.",\r
"Predračun nema stavki.",\r
"Predračuni",\r
"Predračuni izdati na kasi (izvor: kasa). Iz otvorenog predračuna se pravi nacrt fakture sa istim stavkama, cijenama i rabatom; izdavanje i fiskalizacija idu na ekranu Izlazni računi.",\r
"Prenos",\r
"Prenos ne postoji.",\r
"Prenos u objekat",\r
"Prihvaćena",\r
"Primio (vozač)",\r
"Priznanica",\r
"Promet po konobaru",\r
"PV-{0}-{1}",\r
"Račun kase {0} je storniran; veze uplata sa njim su uklonjene (uplata je slobodna za drugu stavku).",\r
"Račun kase ne postoji.",\r
"Računi i predračuni sa kase",\r
"Računi kupcima-firmama sa rokom (otvorene stavke u Naplati) · predračuni kase i faktura iz predračuna · naplata duga na terenu · plastične kese · ostala plaćanja · promet po konobaru · reprezentacija · zahtjevi kupaca vjernosti",\r
"Računi kupcima-firmama sa rokom plaćanja, predračuni, naplata duga na terenu i izvještaji iz zaključaka kase.",\r
"Računi sa rokom",\r
"Računi sa rokom sa kase",\r
"Razduženja na čekanju",\r
"Razduženja vozača",\r
"Razduženje je odbijeno.",\r
"Razduženje je potvrđeno{0}{1}{2}.",\r
"Razduženje je već obrađeno.",\r
"Razduženje ne postoji.",\r
"Razduženje vozača {0} ({1}) čeka potvrdu (Vozila i teren → Razduženja).",\r
"Razduženje vozača stiže sa kase vozila na kraju dana. Potvrda pravi prenos vozilo → matični magacin za vraćenu robu i otpis u vozilu za škart; gotovina i ambalaža se prikazuju (knjiže se iz zaključka smjene).",\r
"Razlog je obavezan.",\r
"Registarska oznaka vozila je obavezna.",\r
"Registracija",\r
"Reklamacija je ažurirana.",\r
"Reklamacija je upisana.",\r
"Reklamacija odbijena",\r
"Reklamacije",\r
"Reprezentacija i interna potrošnja",\r
"Reprezentacija i interno",\r
"Reprezentacija, „na kuću\\", obrok osoblja i uzorci sa kase — odvojeno od otpisa, sa osnovicom i PDV-om po stopama.",\r
"Riješena",\r
"RK-{0}-{1}",\r
"Rok je prije datuma reklamacije.",\r
"Rok odgovora",\r
"Ručni unos (vraćeno bez dokumenta, početno stanje)",\r
"Saldo ambalaže po kupcu",\r
"Saldo povratne ambalaže po kupcu",\r
"Samo otvoreni",\r
"Šifarnik povratne ambalaže",\r
"Škart",\r
"Škart pri razduženju vozača {0} ({1})",\r
"Škart sa povratnice {0}",\r
"Škart sa povratnice {0}{1}",\r
"smjena još nije zaključena",\r
"Snimi ishod",\r
"Snimi utovar i štampaj utovarnu listu",\r
"Snimi vezu",\r
"Snimljeno.",\r
"Stanje lagera vozila u Knjigovodstvu (utovar − prodaja na kasi vozila − povrat). Kasa vozila dobija ovo stanje u paketu i ne prodaje više od raspoloživog.",\r
"Stavka nije na fakturi povratnice.",\r
"Stavka nije na fakturi.",\r
"Stavke fakture (klik dodaje upisanu količinu):",\r
"telefon obrisan",\r
"Upis ambalaže iz dokumenta",\r
"Upisan sa računa kase",\r
"Upisano {0} vrsta ambalaže.",\r
"Upisati izdatu ili vraćenu količinu (veću od nule).",\r
"Upiši ambalažu dokumenta",\r
"Utovar",\r
"Utovar {0}{1}{2}",\r
"Utovar je snimljen (prenos magacin → vozilo).",\r
"Utovar nema stavki.",\r
"Utovareno",\r
"UTOVARNA LISTA {0}",\r
"Utovarna lista: {0}",\r
"UZakljucku",\r
"Uzorci",\r
"Već ispravljeno",\r
"Veza je snimljena.",\r
"Veza robe sa ambalažom",\r
"Veza sa robom",\r
"Vozila",\r
"Vozila i prodaja na terenu",\r
"Vozilo {0}",\r
"Vozilo {0} je već upisano.",\r
"Vozilo i matični magacin ne mogu biti isti objekat.",\r
"Vozilo je pokretni poslovni prostor (Zakon o fiskalizaciji čl. 3 t. 3) — poseban objekat veleprodaje sa svojim kodom poslovnog prostora i kasom vozača. Utovar je prenos iz matičnog magacina u vozilo; razduženje vozača vraća neprodatu robu u magacin.",\r
"Vozilo je snimljeno.",\r
"Vozilo nema matični magacin (Vozila i teren → Vozila).",\r
"Vozilo nema robe.",\r
"Vozilo PG 123 AB",\r
"Vratili kupci",\r
"Vrijednost (EUR/kom)",\r
"Vrijednost ambalaže ne može biti negativna.",\r
"Vrijednost po kom.",\r
"WHERE p.Godina=?",\r
"WHERE z.Status=?",\r
"Za korektivni račun ili knjižno odobrenje povratnica mora biti vezana za fakturu.",\r
"Zahtjevi kupaca vjernosti",\r
"Zahtjevi kupaca vjernosti (brisanje, povlačenje saglasnosti): obrađeno {0}.",\r
"Zahtjevi kupaca vjernosti sa kase (brisanje, povlačenje saglasnosti, istek roka čuvanja — Zakon o zaštiti podataka o ličnosti). Kupac čiji telefon odgovara zahtjevu izlazi iz programa vjernosti (bez dokumenata se briše), pa ga sljedeći cjenovnik ne šalje kasi. Broj telefona se ne prenosi — samo otisak.",\r
"Zaključi povratnicu",\r
"Zakona o PDV",\r
"Zaliha vozila",\r
"Zamjena robe",\r
"— prijedlog",\r
"; obračun potvrđuje knjigovođa",\r
"· IOPPD rok {0}",\r
"· stanje od {0}",\r
"\\" · prijedlog:",\r
"{0} · kod prijavljenog korisnika",\r
"{0} · rok {1} · {2}",\r
"{0} (bez PDV)",\r
"{0} (pregled agencije)",\r
"{0} troškova kamata od 2027 u vrijednosti objekta — firma primjenjuje pune MSFI (podešavanje firme).",\r
"0 % — oslobođeno, čl. 26 (kao do sada)",\r
"0 % za ljekove sa Liste",\r
"1 za sve vrste (kao do sada)",\r
"A — investicije u toku 027 (kao do sada)",\r
"aktivnih normativa · razduženo po prodaji do {0}",\r
"aktivnih normativa · razduženje po prodaji još nije rađeno",\r
"Apoteka (ljekovi sa Liste Fonda, naknada po receptu), PDV na otpis iznad normativa",\r
"Apoteka i otpis robe — pravila koja potvrđuje knjigovođa.",\r
"Apoteka: ljekovi sa Liste Fonda na fakturi Fondu",\r
"Apoteka: PDV na naknadu po receptu",\r
"artikala ispod minimalne zalihe · minimalna zaliha nije upisana ni na jednom artiklu",\r
"artikala ispod minimalne zalihe · minimum upisan na {0} artikala",\r
"artikala ispod minimalne zalihe · nema dokumenata materijalnog",\r
"Avans gosta je primljeni avans kao i svaki drugi; PDV u njemu vodi se na 472/473 dok se usluga ne izvrši.",\r
"Avansi gostiju",\r
"B — nedovršena izgradnja 110",\r
"Bez izmjene u programu do odgovora knjigovođe.",\r
"bez naloga u glavnoj knjizi · {0}",\r
"Bilans stanja: dobavljači u dugovnom saldu",\r
"CASE {0}ELSE '' END",\r
"CASE {0}ELSE 'izmjena' END",\r
"Cijena koštanja",\r
"čeka odgovor",\r
"Članski doprinos komori ({0} % bruto zarada)",\r
"Članski doprinos komori (% bruto zarada)",\r
"D 574 / P 474 na iznos iznad normativa",\r
"Današnje pravilo je i naš prijedlog. Druga vrijednost je za knjigovođu koji prirez odbija primaocu.",\r
"Dobavljači — nefakturisane obaveze (roba primljena bez računa)",\r
"Dobavljači prikazuju par ručnih plaćanja istog iznosa u razmaku do tri dana. Ništa se ne briše samo; korisnik potvrđuje „dva plaćanja\\" ili briše duplo.",\r
"Dobavljači u dugovnom saldu ({0}): {1} EUR je prikazano među datim avansima (pozicija 030), a obaveze prema dobavljačima (133) su uvećane za isti iznos.",\r
"Dobavljači u dugovnom saldu ({0}): {1} EUR umanjuje obaveze prema dobavljačima (pozicija 133). Prikaz među datim avansima uključuje se u Podešavanjima (Za potvrdu knjigovođe).",\r
"Dodatak pripada svima osim u turnusu, hotelijerstvu i javnom prevozu. Isključuje se samo za firmu na koju se izuzetak odnosi.",\r
"Dodatak za rad nedjeljom (smjene u obračunu)",\r
"dospjelo · {0} računa · u narednih 7 dana {1}",\r
"dospjelo {0} · otvorenih faktura {1}",\r
"dozvoljena — firma primjenjuje pune MSFI",\r
"Drugo plaćanje",\r
"Dva plaćanja",\r
"EUR sa PDV · {0} pazara · posljednji {1}",\r
"Finansijski iskazi u cijelim eurima",\r
"Firma ima svoje korisnike. Radnja „{0}\\" iz pregleda agencije izvršava se u ime korisnika te firme čija je prijava zapamćena na ovom uređaju. Otvoriti firmu i prijaviti se sa opcijom „Zapamti prijavu na ovom uređaju\\".",\r
"firma nema aktivnih radnika",\r
"firmi · hitno {0} · za pažnju {1}",\r
"g.Vrsta IN ('sank','kuhinja')",\r
"gubitak",\r
"Iskaz je u cijelim eurima (podešavanje firme).",\r
"Iskaz je u cijelim eurima. Razlika od zaokruženja ({0} EUR) uključena je u poziciju {1} ({2} tekuće godine).",\r
"Iskazi se predaju u cijelim eurima. Razlika aktive i pasive od zaokruženja (1–2 €) ide na rezultat tekuće godine, uz napomenu.",\r
"Isporuka bez računa, račun unaprijed, konta zarada i pozajmica, iskazi u eurima, preplate, izgradnja",\r
"isti dobavljač, isti iznos, razmak do tri dana — jedno plaćanje je možda upisano dva puta",\r
"Isto pravilo kao kod zarada: prirez plaća isplatilac i ne umanjuje iznos koji prima izvršilac.",\r
"Izdate fakture",\r
"Izgradnja za prodaju: kamata na kredit od 2027. u vrijednosti objekta",\r
"Izgradnja za prodaju: koeficijent novog posebnog dijela",\r
"Izgradnja za prodaju: varijanta knjiženja novog objekta",\r
"izmijenjeno",\r
"još nema pazara",\r
"još nema završenog radnog naloga",\r
"Kalkulacija bez računa ide na posebnu analitiku 433 dok račun ne stigne; kad se račun veže, nalog kalkulacije prelazi na redovan konto dobavljača. Bez upisanog konta: redovan konto, kao do sada.",\r
"kao do sada",\r
"Kartice Početne",\r
"knjige",\r
"Kod operatera (SEP)",\r
"kod operatera {0} → {1}",\r
"Kod operatera nije u obliku ab123ab123 (unijeto: {0}).",\r
"Kod operatera sa portala Poreske uprave (Moji podaci → Operateri). Kad ovaj korisnik izdaje fakturu, šalje se njegov kod; prazno = kod operatera firme.",\r
"Kontni okvir 11/20 (odredbe o dugovnom saldu 433 nema)",\r
"Kontni okvir 11/20 čl. 20",\r
"Kontni okvir 11/20 čl. 29",\r
"Kontni okvir 11/20 čl. 30 i 36",\r
"Kontni okvir 11/20 čl. 30, 44 i 54",\r
"Kontni okvir 11/20 čl. 32",\r
"Kontni okvir 11/20, opisi računa 472 i 476",\r
"konto {0}",\r
"Konto ima 4 do 8 cifara.",\r
"Konto je upisan u šemu knjiženja.",\r
"Konto kratkoročne pozajmice osnivača (izvod)",\r
"Konto obaveze za prirez na teret poslodavca",\r
"Konto obaveze za robu primljenu bez računa",\r
"Konto potraživanja za naknade koje se refundiraju",\r
"kontrola programa",\r
"Korisnik „{0}\\" u ovoj firmi nema pravo za radnju: {1}.",\r
"Kratkoročni zajmovi od osnivača i fizičkih lica",\r
"Ljekovi sa Liste koji se propisuju i izdaju na teret Fonda oporezuju se po stopi 0 %; ostali ljekovi 7 %.",\r
"materijal {0} · gotovi proizvodi {1}",\r
"Materijal ispod minimuma",\r
"među datim avansima (pozicija 030)",\r
"Menstrualno odsustvo u obračunu zarade",\r
"Minimalna zarada bez uvećanja, lista radnog vremena, prevoz na posao",\r
"Minimalna zarada se poredi sa ukupnim neto; lista radnog vremena po danu sa potpisom i prevoz na posao ne postoje. Uvode se po odgovoru.",\r
"Mjesečni računi ostaju po čl. 18 st. 5. Kod računa za cijelu godinu unaprijed obaveza se veže za izdavanje računa, odnosno naplatu. Prihod se razgraničava preko 491 (Vremenska razgraničenja).",\r
"MSFI za MSP 13.1; Kontni okvir 11/20",\r
"Na kalo, rastur, kvar i lom iznad uobičajenog obima obračunava se PDV. Normativ je interni akt firme; provjera po vrstama robe nije urađena — važi jedan procenat (Otpis).",\r
"na teret isplatioca, povrh naknade",\r
"na teret isplatioca, povrh zakupnine (kao do sada)",\r
"nabavna vrijednost · magacina {0}",\r
"Naknada ostaje posebna stavka fakture Fondu. Stopa se uzima iz ugovora sa Fondom; iznos naknade je sa PDV-om.",\r
"ne knjiži se (kao do sada)",\r
"ne obračunava se",\r
"ne obračunava se — izuzetak",\r
"nedovršena proizvodnja {0}",\r
"nema otvorenih faktura",\r
"neraspoređeni dobitak",\r
"nije dozvoljena — rashod perioda 562 (kao do sada)",\r
"nijedan izvod nije uvezen",\r
"nijedan mjesec nije zaključan",\r
"nijesu fakturisani · vrijednost {0}",\r
"nijesu iskorišćeni · primljeno {0} · iskorišćeno {1}",\r
"Normativi i razduženje",\r
"NULLIF(CAST({0} AS TEXT),'')",\r
"Obaveza prema dobavljaču iz iznosa računa",\r
"Obaveza se vodi po zbiru stavki računa. Prijedlog: iznos za plaćanje sa računa; razlika do 0,50 € u nabavnu vrijednost, sitni ostaci na 579/679.",\r
"Obaveza za članski doprinos komori",\r
"Obaveze za prirez na teret poslodavca",\r
"Objekat u izgradnji",\r
"Objekti gradnje",\r
"obračun poreza u pregledu i izvozu",\r
"obračun zarada {0}/{1} · aktivnih radnika {2}{3}",\r
"obračunava se +80 % (kao do sada)",\r
"Obrazloženje i izvor",\r
"Obrisati plaćanje koje je upisano dva puta?",\r
"Obriši drugo",\r
"Od 01.01.2027: 15 % iznad 5.000 € godišnje, povezana lica od prvog eura. Osnovica je isplaćeni iznos; vraćanje u istoj godini je ne umanjuje. Obaveza se ne knjiži sama.",\r
"odbija se izvršiocu (kao do sada)",\r
"odbija se zakupodavcu",\r
"odluka Privredne komore (stopu potvrđuje knjigovođa)",\r
"Odsustvo do dva dana mjesečno vodi se kao privremena spriječenost sa naknadom 100 %. Osnov u mjesečnom izvještaju potvrđuje knjigovođa.",\r
"Opis računa 422 izričito obuhvata kratkoročne zajmove od fizičkih lica u zemlji; 429 su ostale kratkoročne finansijske obaveze.",\r
"Opis računa 454–456 kaže „zaduženjem računa 228\\". Podjela obaveze na 454, 455 i 456 (neto, porez, doprinosi) nije urađena — čeka odgovor.",\r
"Opšti kolektivni ugovor",\r
"opštini prebivališta radnika (kao do sada)",\r
"opštini sjedišta firme",\r
"Otpis robe iznad normativa: PDV u nalogu otpisa",\r
"Otvara analitički konto ako ne postoji i upisuje ga u šemu knjiženja.",\r
"Otvoreni radni nalozi",\r
"otvorenih naloga · čeka pristanak {0} · završeno, nije preuzeto {1}",\r
"otvorenih popisa · najstariji od {0}",\r
"Ova stavka nema prijedlog koji se primjenjuje.",\r
"Ovo podešavanje se ne mijenja ovdje.",\r
"ovog mjeseca · danas {0} · kasa {1}",\r
"ovog mjeseca (EUR sa PDV) · {0} faktura · nacrta {1}",\r
"ovog mjeseca (EUR sa PDV) · noćenja {0}",\r
"ovog mjeseca po pazarima · {0} pazara",\r
"Pazari ovog mjeseca",\r
"PDV {0} % u avansima gostiju",\r
"PDV na otpis iznad normativa (iznad normativa {0})",\r
"PDV pazara 476 (kao do sada)",\r
"PDV u avansu gosta naplaćenom preko kase",\r
"PDV u primljenim avansima 472/473",\r
"perioda čeka fakturisanje · aktivnih ugovora {0}",\r
"pitanje",\r
"Pitanje",\r
"plaćeno odsustvo sa naknadom 100 % (šifra 006)",\r
"Plate: obaveza za članski doprinos komori (samo uz upisan procenat u Podešavanjima)",\r
"Plate: trošak članskog doprinosa komori",\r
"po jedinici · nalog {0} · {1}",\r
"Po MSFI za MSP kamata je rashod perioda. Firma koja primjenjuje pune MSFI smije je uključiti u vrijednost objekta; uključuje se samo za takvu firmu.",\r
"po odgovoru knjigovođe",\r
"po prijedlogu",\r
"po računima i situacijama (bez PDV) · ovog mjeseca {0} · dokumenata {1}",\r
"po stopi artikla — 7 % (kao do sada)",\r
"po vrsti: stan i lokal 1,00; garaža 0,75; garažno mjesto 0,60; ostava 0,50",\r
"Početna prikazuje kartice prema načinu poslovanja firme i podacima koji postoje. Kartica koja nije označena se ne prikazuje (važi za ovaj računar i ovu firmu). Način poslovanja se bira u prozoru „Prilagodi meni\\".",\r
"podaci se čitaju sa servera kad je firma povezana",\r
"Podešavanje ne postoji.",\r
"popis još nije unesen",\r
"Popunjenost i dolasci",\r
"Porez je obračunat po stopi {0} % na isplaćeni iznos; vraćanje u istoj godini ne umanjuje osnovicu.",\r
"Porez nije obračunat.",\r
"Porez po odbitku {0} %",\r
"Porez po odbitku na pozajmice fizičkim licima iznad {0} EUR godišnje; povezana lica od prvog eura ({1}). {2}",\r
"Posebni dio objekta",\r
"posljednjeg dana perioda (kao do sada)",\r
"posljednji popis · nema otvorenih popisa",\r
"posljednji zaključan mjesec · {0}/{1} još nije zaključan",\r
"posljednji zaključan mjesec · prethodni mjesec je zaključan",\r
"Potraživanja od kupaca",\r
"Potraživanja za naknade zarada koje se refundiraju",\r
"Pozajmice fizičkim licima: obračun poreza po odbitku 15 %",\r
"praksa (propis ne uređuje)",\r
"Pravila glavne knjige, PDV-a i finansijskih iskaza koja potvrđuje knjigovođa.",\r
"Pravila knjiženja",\r
"Pravila na koja propis ne daje jednoznačan odgovor ili zavise od prakse knjigovođe. Svako ima podešavanje čija je podrazumijevana vrijednost dosadašnji rad programa — postojeći podaci ne mijenjaju iznose dok se podešavanje ne promijeni. Broj pitanja se odnosi na pismo knjigovođi. Usklađeno sa prijedlogom:",\r
"Pravila robe",\r
"Pravila zarada",\r
"Pravilnik o primjeni ZPDV čl. 19; opis računa 474",\r
"pravilo knjigovođe za zarade; propis ne uređuje",\r
"predati iskazi (tekst pravilnika o obrascima nije viđen)",\r
"Predlažemo raspodjelu po neto površini. Koeficijenti po vrsti su praksa, nijesu propis; uključuju se samo ako ih knjigovođa traži.",\r
"pregled još nije osvježen",\r
"Preplata dobavljaču je potraživanje, ne umanjenje obaveza. Bilans stanja upozorava na iznos i bez ovog podešavanja; nalog u glavnoj knjizi se ne pravi.",\r
"Prihod od smještaja",\r
"Prihod za isporuku bez računa knjiži se u mjesecu isporuke (račun 281); nabavna vrijednost te robe treba da bude rashod istog mjeseca.",\r
"prijedlog:",\r
"Prikaži sve kartice",\r
"Prirez na zarade: kojoj opštini",\r
"Prirez plaća poslodavac povrh bruta (trošak 521), pa obaveza pripada računu 453 — porezi i doprinosi na teret poslodavca.",\r
"Prirez po opštini, prirez kod djela i zakupa, komora, rad nedjeljom, menstrualno odsustvo",\r
"Prirez, dodaci i odsustva u obračunu — pravila koja potvrđuje knjigovođa.",\r
"Procenat: broj veći od 0, najviše 5.",\r
"Prodaja posebnog dijela",\r
"prodato · slobodno {0} · rezervisano {1} · planirana vrijednost slobodnih {2}",\r
"Promet po kasama",\r
"Provjeriti: dva ručna plaćanja istog iznosa (",\r
"Prva vrijednost u svakom izboru je dosadašnji rad programa. Izmjena važi za dokumente i naloge koji se prave poslije nje; zaključani mjeseci se ne mijenjaju.",\r
"Prvo plaćanje",\r
"Račun po ugovoru izdat unaprijed za period duži od mjesec dana: PDV",\r
"Raspodjela troškova objekta",\r
"Rata kupca posebnog dijela",\r
"Razduženje robe isporučene bez računa",\r
"redovan konto dobavljača",\r
"repeat(auto-fit, minmax(220px, 1fr))",\r
"Roba isporučena bez računa: razduženje robe",\r
"Roba primljena bez računa {0}",\r
"Sati projekata",\r
"stavki čeka pregled · skenovi {0} · troškovi bez vrste {1} · nezavršeni nalozi {2}",\r
"svi mjeseci sa dokumentima imaju naloge",\r
"samo evidencija (kao do sada)",\r
"samo upozorenje, dan se ne obračunava posebno (kao do sada)",\r
"Spisak pravila koja potvrđuje knjigovođa: trenutna vrijednost, prijedlog, izvor i broj pitanja",\r
"Storno razduženja robe isporučene bez računa",\r
"Storno realizovanog ukalkulisanog PDV-a",\r
"Sva pravila koja potvrđuje knjigovođa na jednom mjestu: trenutna vrijednost, prijedlog, obrazloženje sa izvorom i broj pitanja.",\r
"transakcija izvoda čeka knjiženje · izvoda {0} · posljednji izvod {1}",\r
"Trenutno",\r
"Troškovi i situacije",\r
"u centima (kao do sada)",\r
"u cijelim eurima, razlika na rezultat tekuće godine",\r
"u izgradnji · završenih {0}",\r
"u mjesecu isporuke",\r
"u mjesecu izdavanja računa",\r
"Ugovor o djelu: prirez",\r
"ugovor sa Fondom (propis ne uređuje)",\r
"Ugovori za fakturisanje",\r
"uloga šeme knjiženja „",\r
"umanjuju obaveze prema dobavljačima (kao do sada)",\r
"uplaćeno po ugovorima o kupoprodaji · dospjele neuplaćene rate {0} ({1})",\r
"Uplate kupaca stanova",\r
"Upozorenje je uključeno; ne mijenja iznose.",\r
"Upozorenje: dva ručna plaćanja istom dobavljaču istog iznosa",\r
"uz račun (kao do sada)",\r
"Uz upisan procenat nalog obračuna zarada knjiži trošak i obavezu (uloge „plate.komora.trosak\\" i „plate.komora\\"). Prazno: ne obračunava se, kao do sada.",\r
"Vraćen je podrazumijevani konto.",\r
"Vrati na",\r
"Vrijednost nije sa spiska.",\r
"za {0}/{1}",\r
"za {0}/{1} · firma nije u sistemu PDV-a ili rok nije na redu",\r
"za {0}/{1} · mjesec je zaključan",\r
"Za potvrdu knjigovođe",\r
"Za potvrdu knjigovođe (spisak)",\r
"za uplatu · obračunato {0} · uplaćeno {1}",\r
"Zabilježeno je da su to dva plaćanja.",\r
"Zaključani mjeseci",\r
"Zakon o finansiranju lokalne samouprave čl. 8 st. 1",\r
"Zakon o računovodstvu 84/25 čl. 26 st. 3; MSFI za MSP 25.2",\r
"Zakon o radu čl. 101; Opšti kolektivni ugovor",\r
"Zakon vezuje prirez za opštinu u kojoj isplatilac obavlja djelatnost. Uz izmjenu svi radnici dobijaju stopu i račun opštine firme; važi od narednog obračuna.",\r
"Zakup od fizičkog lica: prirez",\r
"Zalihe materijala i proizvoda",\r
"Zalihe šanka i kuhinje",\r
"Zarade i IOPPD",\r
"zauzetih soba ({0} %) · dolasci danas {1} · odlasci danas {2}{3}",\r
"Zgrada koja se gradi radi prodaje je zaliha od početka: 110, po završetku 132 po posebnom dijelu. Objekti koji se već vode na 027 ostaju na 027.",\r
"ZOZO čl. 36a",\r
"ZPDPL čl. 28a („Sl. list CG\\" 104/26)",\r
"ZPDV čl. 18 st. 2, 4 i 5",\r
"ZPDV čl. 25 st. 1 t. 9 i čl. 24a",\r
"; bez ručnog izbora bilo bi {0}",\r
"Dijelovi programa",\r
"Nisu dio knjigovodstva u užem smislu. Smjene radnika i Kadrovi su uključeni u svakoj firmi i mogu se isključiti (i u Podešavanjima → Podaci firme → Dijelovi programa); prenos robe se uključuje sam kad firma ima više objekata ili paket Lanac. Podaci se ne brišu kad se dio isključi.",\r
"podrazumijevano (isključuje se u Podešavanjima)",\r
"Smjene radnika i Kadrovi su uključeni u svakoj firmi; firma koja ih ne koristi može ih isključiti. Prenos robe između objekata uključuje se sam kad firma ima više objekata. Isključen dio se ne prikazuje u meniju; podaci se ne brišu.",\r
"uključeno: {0}",\r
"Vrati na automatski",\r
"; broj računa je u opisu uplate",\r
"; raniji mjeseci ostaju po zbiru PDV-a stavki, kako su vođeni i predati. Razlika nastaje zaokruženjem po stavci. Zbir stavki ostaje kontrola — računi sa razlikom su u pregledu ispod.",\r
"· nije dospjelo",\r
"{0} · ulazni PDV iskazan u računu (ZPDV čl. 37 st. 6 t. 1)",\r
"{0} (rok {1})",\r
"30 % — ostala autorska i srodna prava, prava interpretatora, patent i žig, stručnjak u kulturi",\r
"50 % — autorsko djelo arhitekture, urbanističkog planiranja i pejzažne arhitekture",\r
"60 % — autorsko djelo likovne djelatnosti",\r
"Autorski ugovor ima izbor standardnih rashoda (ZPDFL čl. 37lj st. 2); IOPPD šifra je ista.",\r
"Čeka naplatu",\r
"Cesija radi naplate: fakture ostaju otvorene, a nalog se knjiži unosom datuma naplate.",\r
"Datum isplate mijenja parametre poreza. Plate se preračunavaju dugmetom „Obračunaj sve\\".",\r
"Datum isplate nije upisan, a parametri poreza na zarade se mijenjaju od {0}. Porez se obračunava po propisima koji važe na dan isplate (ZPDFL čl. 46 st. 2) — potrebno je upisati datum isplate prije zaključenja obračuna.",\r
"Datum kada je prijemnik naplatio ustupljeno potraživanje",\r
"Datum naplate je obavezan.",\r
"Datum naplate ne može biti prije datuma ugovora o cesiji.",\r
"Datum naplate se unosi samo za cesiju radi naplate koja čeka naplatu.",\r
"Dokument {0} ({1}): otvoreno je {2} EUR, a u stavci {3} EUR. Faktura je u međuvremenu zatvorena drugim plaćanjem.",\r
"dospjela",\r
"Godina pregleda",\r
"Izabrani mjesec je zaključan.",\r
"iznos sa računa",\r
"Izvršilac je osiguran po drugom osnovu (047): doprinos za PIO se ne obračunava (Zakon o doprinosima, čl. 5 st. 1 t. 13).",\r
"Kupac „{0}\\" nema upisan PIB. Bezgotovinski račun pravnom licu ili preduzetniku mora sadržati PIB kupca (Zakon o fiskalizaciji, čl. 7). Potrebno je upisati PIB kupca (Kupci); kupac koji je fizičko lice označava se kao „fizičko lice\\", a kupcu iz inostranstva se upisuje država.",\r
"Kursna razlika {0} uz plaćanje od {1}{2}",\r
"Kursna razlika: izabrani račun nema otvorenu deviznu stavku. Razlika se bira kao zaokruženje ili provizija, ili se devizna stavka unosi u „Kursne razlike i revalorizacija\\".",\r
"Mjesec {0}/{1} je zaključan. Pretporez iz zbira računa može da važi tek od narednog mjeseca; zaključani i predati periodi se ne mijenjaju.",\r
"Mjesec od kog knjiga primljenih računa, PR-PDV i nalog kalkulacije uzimaju PDV iz zbira računa; pregled računa sa razlikom.",\r
"Mjesec primjene se upisuje kao GGGG-MM.",\r
"Nalog prebijanja računa 630 i 631 briše se poništavanjem zaključka godine.",\r
"Nalog prebijanja računa 630 i 631 nastaje zaključkom godine i ne mijenja se ručno.",\r
"Nalog prenosa rezultata prethodne godine briše se zajedno sa početnim stanjem te godine.",\r
"Nalog prenosa rezultata prethodne godine nastaje otvaranjem godine i ne mijenja se ručno.",\r
"Naplata cesije",\r
"Naplata je upisana. {0}",\r
"Naplata je upisana. Nalog {0} je proknjižen.",\r
"Naša obaveza prema prijemniku gasi se zaključenjem ugovora, do iznosa ustupljenog potraživanja (ZOO čl. 453 st. 1).",\r
"Naša obaveza se gasi, odnosno smanjuje, tek kad prijemnik naplati ustupljeno potraživanje (ZOO čl. 453 st. 2). Do tada fakture ostaju otvorene, a nalog se knjiži sa datumom naplate.",\r
"Nema dospjelih otvorenih stavki na obje strane. Nedospjela stavka se dodaje ručno; tada se štampa ugovor o kompenzaciji.",\r
"Nema računa sa razlikom.",\r
"Normativ je interni akt firme; polazne stope su orijentacione",\r
"Normirani troškovi autorskog honorara",\r
"od {0}/{1}",\r
"od prvog računa",\r
"Odbija se ulazni PDV koji je iskazan u računu (ZPDV čl. 37 st. 6 t. 1). Knjiga primljenih računa, PR-PDV polje 19 i nalog kalkulacije uzimaju PDV po stopama iz zbira računa",\r
"ovim ugovorom",\r
"ovom izjavom",\r
"PDV — zbir računa",\r
"PDV — zbir stavki",\r
"Poreske knjige → Pretporez sa računa",\r
"Porez na zarade se obračunava po propisima koji važe na dan isplate (ZPDFL čl. 46 st. 2); doprinosi i minimalna zarada po mjesecu obračuna.",\r
"Potraživanja po dokumentima {0} na dan ovog ugovora nijesu dospjela. Ugovorne strane su saglasne da se i ona prebiju na dan {1}; ugovor proizvodi dejstvo potpisom svih ugovornih strana.",\r
"Potraživanje je naplaćeno {0}.",\r
"Potraživanje po dokumentu {0} u iznosu od {1} EUR ustupljeno je radi naplate ugovorom o cesiji {2} od {3}; do naplate ostaje u otvorenim stavkama.",\r
"Potraživanje se ustupa radi naplate: obaveza ustupioca prema prijemniku gasi se, odnosno smanjuje, tek kad prijemnik naplati ustupljeno potraživanje (ZOO čl. 453 st. 2).{0}",\r
"Potvrdi naplatu",\r
"PRB",\r
"Prebijanje računa 630 i 631",\r
"Prebijanje računa 630 i 631 na 31.12.{0}.",\r
"Prenos gubitka {0}. na gubitak ranijih godina",\r
"Prenos neraspoređenog dobitka {0}. na dobitak ranijih godina",\r
"Prenos rezultata prethodne godine",\r
"Prenos rezultata prethodne godine ({0}) — otvaranje {1}",\r
"Pretporez iz PDV-a iskazanog na računu",\r
"Pretporez iz zbira računa važi od {0}/{1}.",\r
"Pretporez sa računa: razlike po mjesecu",\r
"prihod",\r
"Prijemnik je naplatio ustupljeno potraživanje: fakture na obje strane se zatvaraju sa datumom naplate i knjiži se nalog u glavnu knjigu.",\r
"Prvi mjesec čije knjige uzimaju PDV iz zbira računa. Zaključani mjeseci se ne mijenjaju.",\r
"PRZ",\r
"Račun {0} je u valuti{1}: plaćeno {2} EUR za iznos knjižen {3} EUR — kursna razlika {4} EUR ({5}){6}.",\r
"Račun {0}: devizna stavka ima otvoreno {1} EUR po kursu dokumenta, a raspoređeno je {2}. Plaćanje se upisuje na deviznoj stavci (Kursne razlike i revalorizacija).",\r
"Račun {0}: plaćeni iznos u EUR mora biti veći od nule.",\r
"račun iskazuje PDV, a stavke su bez PDV-a — provjeriti",\r
"RAČUNI SA RAZLIKOM PDV-a (zbir stavki / zbir računa)",\r
"Računi sa razlikom po mjesecu",\r
"Radi izmirenja obaveze po dokumentu {0} u iznosu od {1} EUR ustupljeno Vam je potraživanje radi naplate (ugovor o cesiji {2} od {3}); obaveza se gasi kad potraživanje naplatite.",\r
"Radi naplate",\r
"radi naplate, za izmirenje svoje obaveze prema prijemniku do naplaćenog iznosa",\r
"rashod",\r
"razlika je veća od zaokruženja — provjeriti račun i stavke",\r
"Razlika uz plaćanje {0} ({1})",\r
"Standardni rashodi koji se priznaju kad se stvarni troškovi ne dokumentuju (ZPDFL čl. 37lj st. 2)",\r
"Stavke koje na dan dokumenta nijesu dospjele: {0}. Prebijanje jednostranom izjavom traži da su oba potraživanja dospjela (ZOO čl. 344); za nedospjele stavke štampa se ugovor o kompenzaciji koji potpisuju obje strane.",\r
"u ime izmirenja svoje obaveze prema prijemniku u istom iznosu",\r
"U izabranoj godini nema računa dobavljača.",\r
"U knjigama",\r
"UGOVOR O KOMPENZACIJI (PREBIJANJU)",\r
"Ugovorne strane saglasno utvrđuju da imaju uzajamna {0}novčana potraživanja navedena u specifikaciji i da se ona prebijanjem gase do iznosa od {1} EUR na dan {2}. Ostatak potraživanja koji nije obuhvaćen {3} ostaje nepromijenjen.",\r
"ukupan PDV računa",\r
"ukupna razlika",\r
"Ulazni PDV iz zbira računa (ZPDV čl. 37 st. 6): mjesec primjene i računi kod kojih se zbir stavki razlikuje od zbira računa",\r
"Umjesto ispunjenja",\r
"Ustupilac ustupa prijemniku svoje potraživanje prema dužniku navedeno u specifikaciji, u iznosu od {0} EUR, {1}. Ustupilac je dužan da dužnika obavijesti o ustupanju; od prijema obavještenja dužnik ispunjava obavezu prijemniku.",\r
"Važi od mjeseca",\r
"Vraćen je podrazumijevani mjesec primjene.",\r
"Vrsta cesije",\r
"Za provjeru",\r
"Zarada za {0}/{1} se isplaćuje {2}: porez je obračunat po parametrima koji važe na dan isplate (ZPDFL čl. 46 st. 2), a doprinosi i minimalna zarada po mjesecu obračuna.",\r
"zbir po stopama",\r
"zbir stavki",\r
"zbir stavki{0}",\r
"Fakture kupcima, usluge, kase",\r
"Nalozi, glavna knjiga, banka, porezi, plate",\r
"Podešavanja, korisnici, veze",\r
"Roba, kalkulacije, zalihe, cijene",\r
"Narudžba kupca",\r
"Povratnica kupca",\r
"Reklamacija kupca",\r
"Tura isporuke",\r
"Veleprodajni cjenovnik",\r
"dokumenata čeka potvrdu · najstariji od {0}",\r
"dokumenata čeka potvrdu",\r
"otvorenih narudžbi · nacrta {0} · potvrđenih {1}",\r
"[potvrđeno uprkos upozorenju]",\r
"{0} ({1} stavki, preostalo {2})",\r
"⚠ Početna stanja za provjeru (",\r
"Automatski: {0} stavki pokriveno unesenim fakturama ({1}.); preostalo {2}.",\r
"Automatski: sve sporne stavke ({0}) su sada u evidenciji (faktura unesena).",\r
"Datum početnog stanja {0} ({1} EUR) postaviti na 01.01.{2}.? Iznos se ne mijenja.",\r
"Datum početnog stanja {0} je 01.01.{1}.",\r
"Datum stanja je {0}. umjesto 01.01.{1}. (stanje na 31.12.{2}).",\r
"Djelimično pokriveno: {0}.",\r
"dobavljač duguje NAMA {0} EUR (preplata / odobrenje — na njegovoj kartici saldo u koloni „Potražuje\\")",\r
"Iznos {0} je jednak zbiru faktura ovog dobavljača koje su već u evidenciji za {1}. godinu ({2} dok.). To je PROMET godine (zbir kolone „Duguje\\"/„Zaduženje\\" na kartici), a ne početno stanje — fakture bi bile uračunate dvaput.",\r
"Iznos je provjeren — snimi",\r
"Izvor iznosa (obavezno)",\r
"Jedno početno stanje po dobavljaču, na 01.01.{0}. = saldo sa kartice dobavljača na 31.12.{1}. Pozitivno = mi dugujemo; negativno = preplata. Novi unos zamjenjuje ranije upisano.",\r
"MI DUGUJEMO dobavljaču {0} EUR",\r
"nema početnog stanja (0,00)",\r
"Nije upisan izvor iznosa (koja kartica dobavljača / IOS i od kog datuma).",\r
"npr. kartica dobavljača 2025, saldo 31.12.",\r
"PAŽNJA — ovaj iznos najvjerovatnije NIJE početno stanje:\\n\\n{0}\\n\\nSnimiti ipak? (snima se samo ako ste iznos lično provjerili na kartici dobavljača)",\r
"Početno stanje ({0}) je veće od cijelog prometa sa dobavljačem u {1}. ({2}). Provjerite iznos na kartici.",\r
"Početno stanje {0} na 01.01.{1}. (= saldo na 31.12.{2}.):\\n{3}.\\nIzvor: {4}\\n\\nPravilo: upisuje se SALDO sa kartice dobavljača na 31.12.{5}. ili red „Početno stanje / P.S.\\" sa kartice za {6}. NIKAD zbir kolone (Duguje/Potražuje) ni zadnji saldo kartice {7}.{8}",\r
"Početno stanje = saldo sa kartice dobavljača na 31.12.{0}. (ili red „Početno stanje\\" sa kartice za {1}.), na dan 01.01.{2}. Ispravka iznosa: kartica dobavljača → „Zamijeni početno stanje\\" ili 🗑.",\r
"Početno stanje dobavljača",\r
"Početno stanje na 31.12.{0}.",\r
"Početno stanje na 31.12.{0}. — upisano {1}",\r
"POČETNO STANJE SE NE SLAŽE: kod nas {0} EUR, na kartici dobavljača {1}. Početno stanje = saldo na 31.12.{2}. Ispraviti u kartici dobavljača („Zamijeni početno stanje\\" / 🗑) poslije provjere originala.",\r
"PROVJERA:\\n{0}",\r
"Prvi dokument ovog dobavljača u {0}. je tek {1}. Provjerite da njegova kartica zaista ima red „Početno stanje\\" sa ovim iznosom (a ne samo zbir prometa).",\r
"Snimi ipak",\r
"Sporne stavke riješene automatski (fakture su unesene): {0}.",\r
"Šta provjeriti",\r
"Sumnjivo početno stanje",\r
"U evidenciji već postoje dokumenti ovog dobavljača iz {0}. godine ili ranije: {1} dok., ukupno {2} EUR (od {3}.). Početno stanje na 31.12.{4}. ih već sadrži — oni moraju biti isključeni (premješteni u {5}. ako su primljeni u {6}.) ili umanjeni iz početnog stanja.",\r
"Upišite izvor iznosa: koja kartica dobavljača (ili IOS) i od kog datuma. Bez izvora se početno stanje ne snima.",\r
"Zamjenjuje upisano stanje {0} EUR.",\r
"· razlika {0} — „Uskladi robno\\" na kartici Raspodjela",\r
"Brisanje šablona",\r
"Briše izabrani sopstveni šablon. Ugrađeni šabloni se ne brišu.",\r
"Dopunska raspodjela je upisana. Robno početno stanje je usklađeno.",\r
"Dopunska raspodjela je upisana. Robno početno stanje nije usklađeno: razlika {0} EUR.",\r
"EUR (razlika",\r
"EUR ne odgovara nabavnoj vrijednosti u zalihama",\r
"Fiskalizacija izlaznih računa nije uključena, pa izdavanje fakture nije moguće (Zakon o fiskalizaciji, čl. 10). Do uključenja kupcu se šalje ponuda (predračun), a račun se izdaje kroz registrovanu kasu ili fiskalni softver. {0}",\r
"Fiskalizacija nije spremna. Nedostaje: {0}.",\r
"Obrisati šablon „{0}\\"? Proknjiženi nalozi i ponavljajući nalozi ostaju.",\r
"Obriši šablon",\r
"Odjava korisnika",\r
"Odjavi se",\r
"Prihod od proizvoda i usluga sa kase",\r
"Prihod od usluga sa kase",\r
"proizvodi sa kase",\r
"robno {0} · raspodjele (zalihe) {1}{2}",\r
"Robno početno stanje je usklađeno. Ispravljeno posebnih djelova: {0}.",\r
"Robno početno stanje PD = nabavna vrijednost PD u zalihama",\r
"Robno početno stanje posebnih djelova",\r
"Šablon „{0}\\" je obrisan.",\r
"Šablon ne postoji.",\r
"UKUPNO je zbir mjesečnih prenosa; početni prenos i zatvaranje nisu u zbiru.",\r
"Uskladi robno",\r
"Uslovi su ispunjeni. Uključuje se u Podešavanja → Fiskalizacija.",\r
"· bez žiro računa:",\r
"· radnicima",\r
"(prirez)",\r
"🧾 Instrukcije za plaćanje (Excel)",\r
"🧾 Instrukcije za plaćanje (PDF)",\r
"Bez upisanog žiro računa: {0} (Plate, kartica „Radnici\\").",\r
"Instrukcije za plaćanje kao od knjigovođe: jedinstveni račun poreza i doprinosa (jedan iznos), prirez opštini, pa neto zarade na žiro račune radnika",\r
"jedinstveni račun",\r
"Jedinstveni račun {0} = {1}.",\r
"nema dodatka KnjBaza",\r
"Nema sigurnih uplata za knjiženje — ostale se potvrđuju pojedinačno (Računovodstvo → Za pregled i knjiženje).",\r
"nit nije dala kontrolni zbir",\r
"Ostale (dobavljač prepoznat samo po nazivu, a iznos ne odgovara tačno jednom računu): Računovodstvo → Za pregled i knjiženje → Otvori Banka.",\r
"Plaćanja i naplate sa izvoda koje nijesu proknjižene; sigurne = partner po PIB-u, upamćenom računu ili pravilu banke, ili po nazivu kad iznos tačno zatvara jedan njegov račun",\r
"Plaćene su (vide se na izvodu), ali dok se ne proknjiže nisu u koloni „Plaćeno\\", pa dobavljač izgleda neplaćen. Kolona „Uplate sa izvoda koje čekaju\\" pokazuje iznos po dobavljaču.",\r
"Prirez: {0}.",\r
"Proknjiženo uplata: {0} ({1} EUR){2}.",\r
"Proknjiži sigurne ({0})",\r
"Proknjižiti {0} transakcija sa partnerom prepoznatim po PIB-u, upamćenom računu, pravilu banke ili po nazivu uz tačan iznos jednog njegovog računa?",\r
"Proknjižiti {0} uplata dobavljačima sa izvoda (partner po PIB-u, upamćenom računu, pravilu banke ili po nazivu uz tačan iznos jednog njegovog računa)?",\r
"Saldo poslije knjiženja",\r
"Uplate dobavljačima sa izvoda koje čekaju potvrdu: {0}, ukupno {1} EUR.",\r
"Uplate sa izvoda koje čekaju",\r
"velika razlika — cijeli upis",\r
"Za uplatu:"\r
]\r
`;export{a as default};
