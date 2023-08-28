class Card {
    constructor(name,cost) {
        this.name = name;
        this.cost = cost;
    }
}

class Unit extends Card {
    constructor(name,cost, power, res) {
        super(name,cost);
        this.power = power;
        this.res = res;
    }
    attack( target ) {
        if (target instanceof Unit) {
        //reduce target rest by power
        target.res -= this.power;
        console.log(this.name + " has attacked " + target.name + " and dealt " + this.power + " damage to it's resilience.")

        }
    }
    showstats(){
        console.log("Ninja Stats:")
        console.log("name: " + this.name )
        console.log("cost: " + this.cost)
        console.log("power: " + this.power)
        console.log("resilience: " + this.res)
    }
}

class Effect extends Card{
    constructor(name, cost, text){
        super(name, cost);
        this.text = text;
    }

    play(target){
        if (target instanceof Unit){

            
            let resilienceEffect = this.text.toLowerCase().includes("resilience") ? true : false;
            let powerEffect = this.text.toLowerCase().includes("power") ? true : false;
            let raiseEffect = this.text.toLowerCase().includes("raise") ? true : false;
            let lowerEffect = this.text.toLowerCase().includes("lower") ? true : false;
            let amount = parseInt(this.text.match(/\d+/g)); // ref:https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions

            if (raiseEffect){
                if (resilienceEffect){
                    target.res += amount;
                }
                else if (powerEffect){
                    target.power += amount;
                }
            }

            else if (lowerEffect){
                if (resilienceEffect){
                    target.res -= amount;
                }
                else if (powerEffect){
                    target.power -= amount;
                }
            }
        }
        else{
            throw new Error( "Target must be a unit!" );
        }

    }
}

// Turn 1 - Player 1
console.log("-".repeat(80));
console.log("Turn 1");
console.log("-".repeat(80));

// 1.1 Player 1 summons "Red Belt Ninja"
console.log("Player 1 summons 'Red Belt Ninja'");
redBeltNinja = new Unit("Red Belt Ninja",3,3,4);
redBeltNinja.showstats();
console.log("\n");


console.log("Player 1 plays 'Hard Algorithm' on 'Red Belt Ninja'");
hardalgorithm = new Effect("Hard Algorithm",2,"Raise target's resilience by 3");
hardalgorithm.play(redBeltNinja);
redBeltNinja.showstats();
console.log("\n");

// Turn 2 - Player 2
console.log("-".repeat(80));
console.log("Turn 2");
console.log("-".repeat(80));

console.log("Player 2 summons 'Black Belt Ninja'")
blackBeltNinja = new Unit("Black Belt Ninja", 4,5,4);
blackBeltNinja.showstats();
console.log("\n")

console.log("Player 2 plays 'Unhandled Promise Rejection on Player 1 'Red Belt Ninja");
unhandledPromiseRejection = new Effect("Unhandled Promise Rejection",2,"Lower target's resilience by 2");
unhandledPromiseRejection.play(redBeltNinja);
redBeltNinja.showstats();

// Turn 3 - Player 1
console.log("-".repeat(80));
console.log("Turn 3");
console.log("-".repeat(80));

console.log("Player 1 plays 'Pair Programming' on Player 1 'Red Belt Ninja");
pairProgramming = new Effect("Pair Programming",2,"Raise target's power by 2");
pairProgramming.play(redBeltNinja);
redBeltNinja.showstats
console.log("\n")

console.log("Player 1 'Red Belt Ninja' attacks Player 2 'Black Belt Ninja")
redBeltNinja.attack(blackBeltNinja);
blackBeltNinja.showstats();
console.log("\n")

// No more moves
console.log("-".repeat(80));
console.log("Final Score");
console.log("-".repeat(80));

redBeltNinja.showstats();
console.log("vs")
blackBeltNinja.showstats();
