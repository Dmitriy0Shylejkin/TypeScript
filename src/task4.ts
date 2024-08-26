class Shop {
  items: any[] = [];

  set addGood(item: any) {
      this.items.push(item);
  }

  get goods(): any[] {
      return this.items;
  }
}

class BaseProduct {
  name: string;
  price: number;
  discount: number;

  constructor(name: string, price: number, discount: number) {
      this.name = name;
      this.price = price;
      this.discount = discount;
  }
}

class Banan extends BaseProduct {
  size: string;

  constructor(price: number, discount: number, size: string) {
      super('banan', price, discount);
      this.size = size;
  }
}

class IceCream extends BaseProduct {
  withGlace: boolean;

  constructor(price: number, discount: number, withGlace: boolean) {
      super('banan', price, discount);
      this.withGlace = withGlace;
  }
}

const shop = new Shop();

const iceCream = new IceCream(10, 0, true);
const banan = new Banan(5, 0.1, 'small');

shop.addGood = iceCream;
shop.addGood = banan;

console.log(shop.goods);
