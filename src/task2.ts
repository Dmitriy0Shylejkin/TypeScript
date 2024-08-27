interface IDish {
  bake?: () => void;
  cook?: () => void;
}

class Pizza implements IDish {
  public hasPepperoni: boolean;

  public hasSauce: boolean;

  public hasCheese: boolean;

  public bakeTime = 30;

  constructor(hasPepperoni: boolean, hasSauce: boolean, hasCheese: boolean) {
    this.hasPepperoni = hasPepperoni;
    this.hasSauce = hasSauce;
    this.hasCheese = hasCheese;
  }

  public bake(): void {
    setTimeout(() => console.log('Enjoy your pizza!'), this.bakeTime);
  }
}

class Pasta implements IDish {
  public pastaType: string;

  public hasSauce: boolean;

  public hasCheese: boolean;

  public cookTime = 30;

  constructor(pastaType: string, hasSauce: boolean, hasCheese: boolean) {
    this.pastaType = pastaType;
    this.hasCheese = hasCheese;
    this.hasSauce = hasSauce;
  }

  public cook(): void {
    setTimeout(() => console.log('Enjoy your pasta!'), this.cookTime);
  }
}

class Kitchen {
  public static makeDish(dish: IDish): IDish {
    if (dish.bake) {
      dish.bake();
      return dish;
    } if (dish.cook) {
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
