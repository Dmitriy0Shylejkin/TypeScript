"use strict";
class Shop {
    constructor() {
        this.items = [];
    }
    set addGood(item) {
        this.items.push(item);
    }
    get goods() {
        return this.items;
    }
}
class BaseProduct {
    constructor(name, price, discount) {
        this.name = name;
        this.price = price;
        this.discount = discount;
    }
}
class BananProduct extends BaseProduct {
    constructor(price, discount, size) {
        super('banan', price, discount);
        this.size = size;
    }
}
class IceCreamProduct extends BaseProduct {
    constructor(price, discount, withGlace) {
        super('ice cream', price, discount);
        this.withGlace = withGlace;
    }
}
const shop = new Shop();
const iceCream = new IceCreamProduct(10, 0, true);
const banan = new BananProduct(5, 0.1, 'small');
shop.addGood = iceCream;
shop.addGood = banan;
// eslint-disable-next-line no-console
console.log(shop.goods);
