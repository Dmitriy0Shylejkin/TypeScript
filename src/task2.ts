interface Dish {
    bake?: () => void;
    cook?: () => void;
}

class Pizza implements Dish {
    hasPepperoni: boolean;
    hasSauce: boolean;
    hasCheese: boolean;
    bakeTime = 30;

    constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
        this.hasPepperoni = hasPepperoni;
        this.hasSauce = hasSauce;
        this.hasCheese = hasCheese;
    }

    bake() {
        setTimeout(() => console.log('Enjoy your pizza!'), this.bakeTime);
    }
}

class Pasta implements Dish {
    pastaType: string;
    hasSauce: boolean;
    hasCheese: boolean;
    cookTime = 30;

    constructor(pastaType: string, hasSauce: boolean, hasCheese: boolean) {
        this.pastaType = pastaType;
        this.hasCheese = hasCheese;
        this.hasSauce = hasSauce;
    }

    cook() {
        setTimeout(() => console.log('Enjoy your pasta!'), this.cookTime);
    }
}

class Kitchen {
    makeDish(dish: Dish): Dish {
        if ('bake' in dish) {
            dish.bake!();
            return dish;
        } else if ('cook' in dish) {
            dish.cook!();
            return dish;
        }
        throw new Error('Unknown dish');
    }
}

const kitchen = new Kitchen();
const pizza = new Pizza(true, true, false);
const pasta = new Pasta('spagetti', true, true);

kitchen.makeDish(pasta);
kitchen.makeDish(pasta);
