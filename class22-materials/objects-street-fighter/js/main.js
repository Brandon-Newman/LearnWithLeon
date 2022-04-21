//Create a street fighter constructor that makes fighting game characters with 4 properties and 3 methods

function MyFighter (theirName, theirGender, theirHair, theirRace){
    this.name = theirName
    this.gender = theirGender
    this.hairColor = theirHair
    this.race = theirRace
    this.punch = function(){
        console.log('Right to the face!')
    }
    this.kick = function() {
        console.log('Sweep the leg')
    }
    this.victoryChant = function () {
        alert(`Don't mess with ${this.name}!`)
    }
}

let ChunLi = new MyFighter ('Chun Li', 'Female', 'Black', 'Asian')