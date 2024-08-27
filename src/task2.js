"use strict";
class Pizza {
    constructor(hasPepperoni, hasSauce, hasCheese) {
        this.bakeTime = 30;
        this.hasPepperoni = hasPepperoni;
        this.hasSauce = hasSauce;
        this.hasCheese = hasCheese;
    }
    bake() {
        setTimeout(() => console.log('Enjoy your pizza!'), this.bakeTime);
    }
}
class Pasta {
    constructor(pastaType, hasSauce, hasCheese) {
        this.cookTime = 30;
        this.pastaType = pastaType;
        this.hasCheese = hasCheese;
        this.hasSauce = hasSauce;
    }
    cook() {
        setTimeout(() => console.log('Enjoy your pasta!'), this.cookTime);
    }
}
class Kitchen {
    static makeDish(dish) {
        if (dish.bake) {
            dish.bake();
            return dish;
        }
        if (dish.cook) {
            dish.cook();
            return dish;
        }
        throw new Error('Unknown dish');
    }
}
const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spagetti', true, true);
Kitchen.makeDish(pizza);
Kitchen.makeDish(pasta);
