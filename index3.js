//zadatak 1
function Macka(name, mother = "nepoznata", father = "nepoznat") {
  this.name = name;
  this.mother = mother;
  this.father = father;
}

Macka.prototype.mjau = function () {
  console.log(this.name + " kaze mjau");
};

let macka = new Macka("Cvrle");
console.log(macka);
macka.mjau();

//zadatak 2
class Racun {
  constructor(brojRacuna, banka, vlasnik, stanje) {
    this.brojRacuna = brojRacuna;
    this.banka = banka;
    this.vlasnik = vlasnik;
    this.stanje = stanje;
  }
}

class Banka {
  racuni = [];
  constructor(ime) {
    this.ime = ime;
  }

  dodajRacun = function (imeVlasnika, pocetnoStanje, brojRacuna) {
    let racun = new Racun(brojRacuna, this.ime, imeVlasnika, pocetnoStanje);
    this.racuni.push(racun);
    return racun;
  };
}

let banka = new Banka("Aik banka");
console.log(banka.dodajRacun("Nemanja", 300000, 5435435));

//zadatak 3
const myImage = new Image(100, 100);
myImage.src =
  "http://amolife.com/image/images/stories/Animals/cute_kitten_12.jpg";
document.body.appendChild(myImage);

//zadatak 4
class Vozilo {
  tip;
  vozi = function () {
    console.log("vozim");
  };
}

class Automobil extends Vozilo {
  tip = "Automobil";
}

let automobil = new Automobil();
automobil.vozi();

//zadatak 5
class Objekat {
  constructor(a, b, c, d) {
    this.a = a;
    this.b = b;
    this.c = c;
    this.d = d;
  }
}

class Cetvorougao extends Objekat {
  izracunajObim() {
    return this.a + this.b + this.c + this.d;
  }
}

let cetvorougao = new Cetvorougao(1, 2, 3, 4);
console.log(cetvorougao.izracunajObim());

//zadatak 6
class Pravougaonik extends Cetvorougao {
  constructor(a, b) {
    super();
    this.a = a;
    this.b = b;
    this.c = a;
    this.d = b;
  }

  izracunajPovrsinu() {
    return this.a * this.b;
  }
}

let pravougaonik = new Pravougaonik(5, 5);
console.log(pravougaonik.izracunajPovrsinu());
