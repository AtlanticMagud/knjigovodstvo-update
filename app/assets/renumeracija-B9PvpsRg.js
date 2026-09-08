import{b as u,s as E,a as c,u as s,i as D}from"./index-DJiWC0kp.js";function m(r){const k=E(`SELECT k.KalkID, COALESCE(k.DatumDokumenta, k.DatumFakture) AS Datum, k.MarketID,
            COALESCE(k.BrojDokumenta,'') AS StariDok, COALESCE(k.BrojKalkulacije,'') AS StariKalk,
            COALESCE(k.Zakljucana,0) AS Zakljucana, COALESCE(m.Naziv,'Market') AS Market
     FROM tblKalkulacija k LEFT JOIN tblMarket m ON m.MarketID=k.MarketID
     WHERE k.Godina=?
     ORDER BY COALESCE(k.DatumDokumenta, k.DatumFakture), k.KalkID`,[r]);let l=0;const e=new Map,n=[];for(const o of k){l++;const i=Number(o.MarketID||0),a=(e.get(i)||0)+1;e.set(i,a);const t=String(o.Datum||""),j=t.replace(/-/g,"").slice(0,8);n.push({KalkID:Number(o.KalkID),datum:t,stariDok:String(o.StariDok),noviDok:j+String(l).padStart(5,"0"),stariKalk:String(o.StariKalk),noviKalk:`${String(o.Market)}_${String(a).padStart(5,"0")}`,redni:l,mktRedni:a,zakljucana:Number(o.Zakljucana)})}return n}function S(r){const k=m(r),l=k.filter(a=>a.stariDok!==a.noviDok).length,e=k.filter(a=>a.stariKalk!==a.noviKalk).length,n=u("SELECT COALESCE(MAX(RedniBroj),0) FROM tblKalkulacija WHERE Godina=?",[r]),o=Math.max(0,n-k.length);let i=0;for(const a of E(`SELECT COUNT(*) c, COALESCE(MAX(BrojKalkRedni),0) mx FROM tblKalkulacija
     WHERE Godina=? GROUP BY MarketID`,[r]))i+=Math.max(0,Number(a.mx)-Number(a.c));return{godina:r,ukupno:k.length,mijenjaSeDok:l,mijenjaSeKalk:e,zakljucanih:k.filter(a=>a.zakljucana===1).length,rupeFirmaPrije:o,rupePoMarketuPrije:i,primjeri:k.filter(a=>a.stariDok!==a.noviDok||a.stariKalk!==a.noviKalk).slice(0,10).map(a=>({stariDok:a.stariDok,noviDok:a.noviDok,stariKalk:a.stariKalk,noviKalk:a.noviKalk,datum:a.datum}))}}function O(r){const k=m(r);if(!k.length)throw new Error(`Za ${r}. godinu nema kalkulacija.`);const l=c();let e=0;s(()=>{for(const t of k)D("UPDATE tblKalkulacija SET BrojDokumenta=?, BrojKalkulacije=? WHERE KalkID=?",[`~T${t.KalkID}`,`~K${t.KalkID}`,t.KalkID]);for(const t of k)D(`UPDATE tblKalkulacija SET BrojDokumenta=?, BrojKalkulacije=?, RedniBroj=?, BrojKalkRedni=?
         WHERE KalkID=?`,[t.noviDok,t.noviKalk,t.redni,t.mktRedni,t.KalkID]),(t.stariDok!==t.noviDok||t.stariKalk!==t.noviKalk)&&(e++,D(`INSERT INTO tblRenumeracija (Datum, Godina, KalkID, StariBrojDok, NoviBrojDok, StariBrojKalk, NoviBrojKalk)
           VALUES (?,?,?,?,?,?,?)`,[l,r,t.KalkID,t.stariDok,t.noviDok,t.stariKalk,t.noviKalk]))});const n=u("SELECT COUNT(*) FROM tblKalkulacija WHERE Godina=?",[r]),o=u("SELECT COALESCE(MAX(RedniBroj),0) FROM tblKalkulacija WHERE Godina=?",[r]);let i=0;for(const t of E(`SELECT COUNT(*) c, COALESCE(MAX(BrojKalkRedni),0) mx FROM tblKalkulacija
     WHERE Godina=? GROUP BY MarketID`,[r]))i+=Math.max(0,Number(t.mx)-Number(t.c));const a=u(`SELECT COUNT(*) FROM (SELECT BrojDokumenta FROM tblKalkulacija WHERE Godina=?
          GROUP BY BrojDokumenta HAVING COUNT(*)>1)`,[r])+u(`SELECT COUNT(*) FROM (SELECT BrojKalkulacije FROM tblKalkulacija WHERE Godina=?
          GROUP BY BrojKalkulacije HAVING COUNT(*)>1)`,[r]);return{godina:r,ukupno:n,promijenjeno:e,rupeFirmaPoslije:Math.max(0,o-n),rupePoMarketuPoslije:i,duplikata:a}}function C(r){const k=r?"WHERE r.Godina=?":"",l=r?[r]:[];return E(`SELECT r.Datum, r.Godina, r.StariBrojDok, r.NoviBrojDok, r.StariBrojKalk, r.NoviBrojKalk,
            COALESCE(m.Naziv,'') AS Market, COALESCE(d.Naziv,'') AS Dobavljac,
            COALESCE(k.DatumFakture, k.DatumDokumenta) AS DatumFakture
     FROM tblRenumeracija r
       LEFT JOIN tblKalkulacija k ON k.KalkID=r.KalkID
       LEFT JOIN tblMarket m ON m.MarketID=k.MarketID
       LEFT JOIN tblDobavljaci d ON d.DobavljacID=k.DobavljacID
     ${k} ORDER BY r.RenumID`,l)}export{S as pregledRenumeracije,O as renumerisiGodinu,C as zapisRenumeracije};
