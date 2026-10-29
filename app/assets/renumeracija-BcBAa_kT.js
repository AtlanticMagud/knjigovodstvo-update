import{b as u,s as E,p as c,a as s,u as K,i as D}from"./index-WPkuP-o7.js";function m(t){const k=E(`SELECT k.KalkID, COALESCE(k.DatumDokumenta, k.DatumFakture) AS Datum, k.MarketID,
            COALESCE(k.BrojDokumenta,'') AS StariDok, COALESCE(k.BrojKalkulacije,'') AS StariKalk,
            COALESCE(k.Zakljucana,0) AS Zakljucana, COALESCE(m.Naziv,'Market') AS Market
     FROM tblKalkulacija k LEFT JOIN tblMarket m ON m.MarketID=k.MarketID
     WHERE k.Godina=?
     ORDER BY COALESCE(k.DatumDokumenta, k.DatumFakture), k.KalkID`,[t]);let i=0;const e=new Map,n=[];for(const o of k){i++;const l=Number(o.MarketID||0),a=(e.get(l)||0)+1;e.set(l,a);const r=String(o.Datum||""),j=r.replace(/-/g,"").slice(0,8);n.push({KalkID:Number(o.KalkID),datum:r,stariDok:String(o.StariDok),noviDok:j+String(i).padStart(5,"0"),stariKalk:String(o.StariKalk),noviKalk:`${String(o.Market)}_${String(a).padStart(5,"0")}`,redni:i,mktRedni:a,zakljucana:Number(o.Zakljucana)})}return n}function O(t){const k=m(t),i=k.filter(a=>a.stariDok!==a.noviDok).length,e=k.filter(a=>a.stariKalk!==a.noviKalk).length,n=u("SELECT COALESCE(MAX(RedniBroj),0) FROM tblKalkulacija WHERE Godina=?",[t]),o=Math.max(0,n-k.length);let l=0;for(const a of E(`SELECT COUNT(*) c, COALESCE(MAX(BrojKalkRedni),0) mx FROM tblKalkulacija
     WHERE Godina=? GROUP BY MarketID`,[t]))l+=Math.max(0,Number(a.mx)-Number(a.c));return{godina:t,ukupno:k.length,mijenjaSeDok:i,mijenjaSeKalk:e,zakljucanih:k.filter(a=>a.zakljucana===1).length,rupeFirmaPrije:o,rupePoMarketuPrije:l,primjeri:k.filter(a=>a.stariDok!==a.noviDok||a.stariKalk!==a.noviKalk).slice(0,10).map(a=>({stariDok:a.stariDok,noviDok:a.noviDok,stariKalk:a.stariKalk,noviKalk:a.noviKalk,datum:a.datum}))}}function C(t){c();const k=m(t);if(!k.length)throw new Error(`Za ${t}. godinu nema kalkulacija.`);const i=s();let e=0;K(()=>{for(const r of k)D("UPDATE tblKalkulacija SET BrojDokumenta=?, BrojKalkulacije=? WHERE KalkID=?",[`~T${r.KalkID}`,`~K${r.KalkID}`,r.KalkID]);for(const r of k)D(`UPDATE tblKalkulacija SET BrojDokumenta=?, BrojKalkulacije=?, RedniBroj=?, BrojKalkRedni=?
         WHERE KalkID=?`,[r.noviDok,r.noviKalk,r.redni,r.mktRedni,r.KalkID]),(r.stariDok!==r.noviDok||r.stariKalk!==r.noviKalk)&&(e++,D(`INSERT INTO tblRenumeracija (Datum, Godina, KalkID, StariBrojDok, NoviBrojDok, StariBrojKalk, NoviBrojKalk)
           VALUES (?,?,?,?,?,?,?)`,[i,t,r.KalkID,r.stariDok,r.noviDok,r.stariKalk,r.noviKalk]))});const n=u("SELECT COUNT(*) FROM tblKalkulacija WHERE Godina=?",[t]),o=u("SELECT COALESCE(MAX(RedniBroj),0) FROM tblKalkulacija WHERE Godina=?",[t]);let l=0;for(const r of E(`SELECT COUNT(*) c, COALESCE(MAX(BrojKalkRedni),0) mx FROM tblKalkulacija
     WHERE Godina=? GROUP BY MarketID`,[t]))l+=Math.max(0,Number(r.mx)-Number(r.c));const a=u(`SELECT COUNT(*) FROM (SELECT BrojDokumenta FROM tblKalkulacija WHERE Godina=?
          GROUP BY BrojDokumenta HAVING COUNT(*)>1)`,[t])+u(`SELECT COUNT(*) FROM (SELECT BrojKalkulacije FROM tblKalkulacija WHERE Godina=?
          GROUP BY BrojKalkulacije HAVING COUNT(*)>1)`,[t]);return{godina:t,ukupno:n,promijenjeno:e,rupeFirmaPoslije:Math.max(0,o-n),rupePoMarketuPoslije:l,duplikata:a}}function R(t){const k=t?"WHERE r.Godina=?":"",i=t?[t]:[];return E(`SELECT r.Datum, r.Godina, r.StariBrojDok, r.NoviBrojDok, r.StariBrojKalk, r.NoviBrojKalk,
            COALESCE(m.Naziv,'') AS Market, COALESCE(d.Naziv,'') AS Dobavljac,
            COALESCE(k.DatumFakture, k.DatumDokumenta) AS DatumFakture
     FROM tblRenumeracija r
       LEFT JOIN tblKalkulacija k ON k.KalkID=r.KalkID
       LEFT JOIN tblMarket m ON m.MarketID=k.MarketID
       LEFT JOIN tblDobavljaci d ON d.DobavljacID=k.DobavljacID
     ${k} ORDER BY r.RenumID`,i)}export{O as pregledRenumeracije,C as renumerisiGodinu,R as zapisRenumeracije};
