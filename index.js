// ?    ---KARABAKH---
// !      ---IS---
// *   ---AZERBAIJAN---
// TODO  -----js ------

const yeniSatir = "\r\n";
let bakiye = 1000;

let isimSatiri =
  "1-Bakiye Goruntuleme: " +
  yeniSatir +
  "2-Para Cekme: " +
  yeniSatir +
  "3-Para Yatirma: " +
  yeniSatir +
  "4-Cikis: " +
  yeniSatir +
  "Hangi islemi yapmak istersiniz.";

let isim = prompt(isimSatiri);
switch (isim) {
  case "1":
    alert("Bakiyeniz: " + bakiye);
    break;

  case "2":
    let paracekme = Number(prompt("Ne kadar para cekmek isterdiniz?"));
    if (paracekme < bakiye) {
      bakiye = bakiye - paracekme;
      alert(
        "Para cekme isleminiz tamamlandi: " +
          yeniSatir +
          "Cektiyiniz para: " +
          paracekme +
          yeniSatir +
          "Geriye kalan para: " +
          bakiye
      );
    } else {
      alert("Yetersiz bakiye" + bakiye);
    }
    break;

  case "3":
    let parayatir = Number(prompt("Ne kadar para yatirmak isterdiniz: "));
    bakiye = bakiye + parayatir;
    alert("Yatirdiginiz para: " + bakiye);
    break;

  case "4":
    alert("Cikis yaptiniz! ");
    break;

  default:
    alert("Boyle bir komut yok");
    break;
}
