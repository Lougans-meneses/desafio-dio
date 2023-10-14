class Heroi {
  constructor(nome, idade, tipo) {
    this.nome = nome;
    this.idade = idade;
    this.tipo = tipo;
  }

  atacar() {
    let ataque = "";

    switch (this.tipo) {
      case "mago":
        ataque = "magia";
        break;
      case "guerreiro":
        ataque = "espada";
        break;
      case "monge":
        ataque = "artes marciais";
        break;
      case "ninja":
        ataque = "shuriken";
        break;
      default:
        ataque = "um ataque indefinido";
        break;
    }

    console.log(`${this.nome} aos seus ${this.idade} anos sendo um ${this.tipo} atacou usando ${ataque}`);
  }
}

const heroi1 = new Heroi("Gandalf", 150, "mago");
heroi1.atacar();

const heroi2 = new Heroi("Berserker", 35, "guerreiro");
heroi2.atacar();

const heroi3 = new Heroi("Aang", 165, "monge");
heroi3.atacar();

const heroi4 = new Heroi("Naruto Uzumaki", 27, "ninja");
heroi4.atacar();
