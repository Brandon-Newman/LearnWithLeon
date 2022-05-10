//Create an espresso machine constructor that makes machines with 4 properties and 3 methods
class EspressoMachineMaker {
    constructor (brand, color, maxTemp, spouts){
        this.brand = brand,
        this.color = color,
        this.tempMax = maxTemp
        this.numOfSpouts = spouts
    }
    makeEspresso(){
        console.log("psshhhhh...HOT!!!")
    }
    steamMilk(){
        console.log("nice frothy mil")
    }
    grindBeans(){
        console.log('ggrrrrrr...grinding beans')
    }
}

let newEspresso = new EspressoMachineMaker('Nespresso', 'Copper', 208, 2)