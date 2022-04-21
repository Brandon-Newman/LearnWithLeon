//Create a mouse object that has four properties and three methods
let mouse = {
    color : 'gray',
    weight : '2.5 oz',
}
mouse.tail = 'long'
mouse.speed = 'fast'

mouse.run = function() {
    console.log('run sucka')
}
mouse.hide = function() {
    console.log('betta hide')
}
mouse.squeek = function() {
    console.log('squeek squeek')
}


function MakeCar (carBrand, carModel, carColor, carDoors){
    this.brand = carBrand
    this.model = carModel
    this.color = carColor
    this.doors = carDoors
    this.honk = function(){
        console.log('Beep Beep')
    }
    this.lock = function() {
        alert(`Locked ${this.doors} doors!`)
    }
}


let teslaRoadster = new MakeCar ('Tesla', 'Roadster', 'Red', 2)

MakeCar.prototype.bluetooth = true