
let svet = prompt("Введите цвет")
class Svetofor {
    constructor(options) {
        this.info = options.info
    }
    select () {
        let lignt = document.querySelectorAll('.light')
        if (this.info === 'red') {
            lignt[0].style.backgroundColor = "red"
        }
        else if (this.info === 'yellow') {
            lignt[1].style.backgroundColor = 'yellow'
        }
        else if (this.info === 'green') {
            lignt[2].style.backgroundColor = 'green'
        }
        else alert("Неправильный цвет")

    }
}

const obj = new Svetofor({
        info:svet
    }
)
obj.select()

class Cars {
    constructor(options) {
        this.model = options.model
        this.color = options.color
        this.wheels = options.wheels
    }
    start () {
        console.log("Машина заведена")
    }
}

let volvo = new Cars({
    model: "volvo",
    color:"grey",
    wheels: "4"
})
volvo.start()

let bmw = new Cars({
    model: "bmw",
    color:"black",
    wheels: "3"
})
bmw.start()

let audi = new Cars({
    model: "audi",
    color:"red",
    wheels: "5"
})
audi.start()

