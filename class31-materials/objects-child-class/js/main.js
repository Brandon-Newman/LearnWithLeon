//Create an a class and extend it - Can be anything you would like it to be! 

class Animal {
    constructor (name){
        this._name = name
    }
    //using underscore and 'get function' means that calling the name from _name and not name. If someone sets Variable.name it won't affect the call function
    get name(){
        return this._name
    }
    speak() {
        console.log(`${this.name} makes a sound`)
    }
}

class Dog extends Animal {
    constructor (name, breed){
        super(name)
        this.breed = breed
    }
}

class Cat extends Animal {
    constructor (name, color){
        super(name)
        this.color = color
    }
    speak(){
        console.log('MEOW')
    }
}

