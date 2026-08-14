import{s as n}from"./index-DYaLbzgg.js";const l="ks.NabavnaCijenaBezPDV*(1-COALESCE(ks.RabatProcenat,0)/100)";function S(t,D=5){const i=n(`SELECT ks.StavkaID, ks.ArtikalID, COALESCE(a.Naziv,'(bez naziva)') AS Naziv, ks.Kolicina,
            ${l} AS Sada, ks.ProdajnaCijenaBezPdv AS Prodajna, ks.MarzaProcenat,
            (SELECT ks2.NabavnaCijenaBezPDV*(1-COALESCE(ks2.RabatProcenat,0)/100)
             FROM tblKalkStavke ks2 JOIN tblKalkulacija k2 ON k2.KalkID=ks2.KalkID
             WHERE ks2.ArtikalID=ks.ArtikalID AND ks2.KalkID<>ks.KalkID
               AND COALESCE(k2.DatumFakture,k2.DatumDokumenta) <=
                   (SELECT COALESCE(k3.DatumFakture,k3.DatumDokumenta) FROM tblKalkulacija k3 WHERE k3.KalkID=ks.KalkID)
             ORDER BY COALESCE(k2.DatumFakture,k2.DatumDokumenta) DESC, ks2.StavkaID DESC LIMIT 1) AS Prije,
            (SELECT COALESCE(k2.DatumFakture,k2.DatumDokumenta)
             FROM tblKalkStavke ks2 JOIN tblKalkulacija k2 ON k2.KalkID=ks2.KalkID
             WHERE ks2.ArtikalID=ks.ArtikalID AND ks2.KalkID<>ks.KalkID
               AND COALESCE(k2.DatumFakture,k2.DatumDokumenta) <=
                   (SELECT COALESCE(k3.DatumFakture,k3.DatumDokumenta) FROM tblKalkulacija k3 WHERE k3.KalkID=ks.KalkID)
             ORDER BY COALESCE(k2.DatumFakture,k2.DatumDokumenta) DESC, ks2.StavkaID DESC LIMIT 1) AS DatumPrije
     FROM tblKalkStavke ks LEFT JOIN tblArtikli a ON a.ArtikalID=ks.ArtikalID
     WHERE ks.KalkID=? ORDER BY ks.Rbr`,[t]),e=[];for(const k of i){const a=Number(k.Sada||0),r=Number(k.Prije||0),u=Number(k.Prodajna||0),E=u>0&&u<a-1e-4,o=r>0?(a-r)/r*100:0;!E&&(r<=0||Math.abs(o)<D)||e.push({StavkaID:Number(k.StavkaID),ArtikalID:Number(k.ArtikalID),Naziv:String(k.Naziv),Kolicina:Number(k.Kolicina||0),Sada:a,Prije:r,RazlikaProc:o,DatumPrije:String(k.DatumPrije||""),Prodajna:u,MarzaSada:a>0?(u-a)/a*100:0,MarzaPrije:r>0?(u-r)/r*100:0,IspodNabavne:E})}return e}function A(t){if(!t.length)return"";const D=t.filter(a=>a.IspodNabavne).length,i=t.filter(a=>a.RazlikaProc>0&&!a.IspodNabavne).length,e=t.filter(a=>a.RazlikaProc<0&&!a.IspodNabavne).length,k=[];return D&&k.push(`${D} ${D===1?"artikal je":"artikala su"} ISPOD nabavne cijene`),i&&k.push(`${i} poskupjelo`),e&&k.push(`${e} pojeftinilo`),k.join(" · ")}function I(t,D){const i=[];let e=`${l} > ks.ProdajnaCijenaBezPdv + 0.0001`;return t&&(e+=" AND COALESCE(k.DatumFakture,k.DatumDokumenta)>=?",i.push(t)),D&&(e+=" AND COALESCE(k.DatumFakture,k.DatumDokumenta)<=?",i.push(D)),n(`SELECT COALESCE(k.DatumFakture,k.DatumDokumenta) AS Datum, k.BrojKalkulacije,
            COALESCE(m.Naziv,'') AS Market, COALESCE(d.Naziv,'') AS Dobavljac,
            COALESCE(a.Naziv,'') AS Artikal, ks.Kolicina,
            ${l} AS Nabavna, ks.ProdajnaCijenaBezPdv AS Prodajna,
            (ks.ProdajnaCijenaBezPdv - ${l}) AS RazlikaPoJed,
            (ks.ProdajnaCijenaBezPdv - ${l})*ks.Kolicina AS Gubitak
     FROM tblKalkStavke ks
       JOIN tblKalkulacija k ON k.KalkID=ks.KalkID
       LEFT JOIN tblArtikli a ON a.ArtikalID=ks.ArtikalID
       LEFT JOIN tblMarket m ON m.MarketID=k.MarketID
       LEFT JOIN tblDobavljaci d ON d.DobavljacID=k.DobavljacID
     WHERE ${e}
     ORDER BY Gubitak ASC`,i)}function j(t=10,D,i){const e=[t];let k="";return D&&(k+=" AND Datum>=?",e.push(D)),i&&(k+=" AND Datum<=?",e.push(i)),n(`SELECT * FROM (
       SELECT COALESCE(k.DatumFakture,k.DatumDokumenta) AS Datum,
              COALESCE(a.Naziv,'') AS Artikal, COALESCE(d.Naziv,'') AS Dobavljac,
              ${l} AS Sada,
              LAG(${l}) OVER (PARTITION BY ks.ArtikalID
                ORDER BY COALESCE(k.DatumFakture,k.DatumDokumenta), ks.StavkaID) AS Prije,
              LAG(COALESCE(k.DatumFakture,k.DatumDokumenta)) OVER (PARTITION BY ks.ArtikalID
                ORDER BY COALESCE(k.DatumFakture,k.DatumDokumenta), ks.StavkaID) AS DatumPrije,
              ks.Kolicina, ks.ProdajnaCijenaBezPdv AS Prodajna
       FROM tblKalkStavke ks
         JOIN tblKalkulacija k ON k.KalkID=ks.KalkID
         LEFT JOIN tblArtikli a ON a.ArtikalID=ks.ArtikalID
         LEFT JOIN tblDobavljaci d ON d.DobavljacID=k.DobavljacID
     )
     WHERE Prije IS NOT NULL AND Prije > 0
       AND (Sada - Prije) / Prije * 100 >= ?${k}
     ORDER BY (Sada - Prije) / Prije DESC`,e).map(a=>({...a,RastProc:(Number(a.Sada)-Number(a.Prije))/Number(a.Prije)*100,MarzaSada:Number(a.Sada)>0?(Number(a.Prodajna)-Number(a.Sada))/Number(a.Sada)*100:0}))}function C(t,D=12){return n(`SELECT COALESCE(k.DatumFakture,k.DatumDokumenta) AS Datum, COALESCE(d.Naziv,'') AS Dobavljac,
            ks.Kolicina, ks.NabavnaCijenaBezPDV AS Bruto, ks.RabatProcenat,
            ${l} AS Neto, ks.MarzaProcenat, ks.ProdajnaCijenaBezPdv AS Prodajna
     FROM tblKalkStavke ks
       JOIN tblKalkulacija k ON k.KalkID=ks.KalkID
       LEFT JOIN tblDobavljaci d ON d.DobavljacID=k.DobavljacID
     WHERE ks.ArtikalID=?
     ORDER BY Datum DESC, ks.StavkaID DESC LIMIT ?`,[t,D])}export{I as artikliIspodNabavne,C as istorijaCijene,j as poskupljenja,S as promjeneNaKalkulaciji,A as sazetakUpozorenja};
