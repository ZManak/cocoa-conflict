class Warrior{
    constructor(life, power) {
        this.life = life;
        this.power = power;
    }
    attack() {
        console.log(`An attack deals ${this.power}`);
        return this.power;
    }
    defend(dmg) {
        this.life = this.life - dmg;
        console.log(`Remaining life: ${this.life}`);
        return(this.life)
    }
}

class Maya extends Warrior{
    constructor(life, power){
        super(life, power);
    }
    drinkColocao() {
        this.power = this.power + 10;
        console.log(`Mayano drinks. Attack up to ${this.power}!`)
    }
}

class Aztec extends Warrior{
    constructor(life, power){
        super(life, power)
    }
    drinkNesquit() {
        this.life = this.life + 10;
        console.log(`Azteko drinks. Life up to ${this.life}!`);
    }
}

let azteko = new Aztec(15, 10)
let mayano = new Maya(15, 10);

const battle = () => {
    azteko.drinkNesquit();
    mayano.drinkColocao();
    console.log('Mayano attacks!');
    azteko.defend(mayano.attack());
    console.log('Azteko attacks!');
    mayano.defend(azteko.attack());
}

