interface IProduct {
  name: string;
  price: number;
  discount: number;
}

interface IBanan extends IProduct {
  size: string;
}

interface IIceCream extends IProduct {
  withGlace: boolean;
}

class Shop<T extends IProduct> {
  private items: T[] = [];

  public set addGood(item: T) {
    this.items.push(item);
  }

  public get goods(): T[] {
    return this.items;
  }
}

class BaseProduct implements IProduct {
  public name: string;

  public price: number;

  public discount: number;

  constructor(name: string, price: number, discount: number) {
    this.name = name;
    this.price = price;
    this.discount = discount;
  }
}

class BananProduct extends BaseProduct implements IBanan {
  public size: string;

  constructor(price: number, discount: number, size: string) {
    super('banan', price, discount);
    this.size = size;
  }
}

class IceCreamProduct extends BaseProduct implements IIceCream {
  public withGlace: boolean;

  constructor(price: number, discount: number, withGlace: boolean) {
    super('ice cream', price, discount);
    this.withGlace = withGlace;
  }
}

const shop = new Shop<IProduct>();

const iceCream = new IceCreamProduct(10, 0, true);
const banan = new BananProduct(5, 0.1, 'small');

shop.addGood = iceCream;
shop.addGood = banan;

// eslint-disable-next-line no-console
console.log(shop.goods);
