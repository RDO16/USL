class Burger {
    constructor () {
        this.isMayo = false
        this.isKetchup = false
        this.isCheese = false
        this.isMeat = false
        this.isCucumber = false
    }
}

class BurgerBuilder {
    constructor () {
        this.burger = new Burger()
        return this
    }

    addMayo () {
        this.burger.isMayo = true
        return this
    }

    addKetchup () {
        this.burger.isKetchup = true
        return this
    }

    addCheese () {
        this.burger.isCheese = true
        return this
    }

    addMeat () {
        this.burger.isMeat = true
        return this
    }

    addCucumber () {
        this.burger.isCucumber = true
        return this
    }

    build () {
        return this.burger
    }
}

class CheeseBurgerFacade {
    constructor (burgerBuilder) {
        this.burgerBuilder = burgerBuilder
    }

    makeCheeseBurger () {
        return this.burgerBuilder.addCheese().addMeat().addKetchup().build()
    }
}

class HamBurgerFacade {
    constructor (burgerBuilder) {
        this.burgerBuilder = burgerBuilder
    }

    makeHamBurger () {
        return this.burgerBuilder.addMayo().addCucumber().addMeat().addKetchup().build()
    }
}

const firstBurgerBuilder = new BurgerBuilder()
const cheeseBurgerFacade = new CheeseBurgerFacade(firstBurgerBuilder)
const cheeseBurger = cheeseBurgerFacade.makeCheeseBurger()

console.log('Cheeseburger')
console.log(cheeseBurger)

const secondBurgerBuilder = new BurgerBuilder()
const hamBurgerFacade = new HamBurgerFacade(secondBurgerBuilder)
const hamBurger = hamBurgerFacade.makeHamBurger()

console.log('Hamburger')
console.log(hamBurger)