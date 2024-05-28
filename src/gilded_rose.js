class Item {
  constructor(name, sellIn, quality) {
    this.name = name;
    this.sellIn = sellIn;
    this.quality = quality;
  }
}

class Shop {
  constructor(items = []) {
    this.items = items;
  }

  updateQuality() {
    for (let item of this.items) {
      this.updateItemQuality(item);
    }
    return this.items;
  }

  updateItemQuality(item) {
    if (item.name === 'Sulfuras, Hand of Ragnaros') return;

    this.updateSellIn(item);
    this.updateItemQualityBasedOnType(item);

    if (item.sellIn < 0) {
      this.updateExpiredItemQuality(item);
    }
  }

  updateSellIn(item) {
    item.sellIn -= 1;
  }

  updateItemQualityBasedOnType(item) {
    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      this.updateBackstagePassQuality(item);
    } else {
      this.decreaseQuality(item);
    }
  }

  updateExpiredItemQuality(item) {
    if (item.name === 'Aged Brie') {
      this.increaseQuality(item);
    } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
      item.quality = 0;
    } else {
      this.decreaseQuality(item);
    }
  }

  updateBackstagePassQuality(item) {
    this.increaseQuality(item);
    if (item.sellIn < 10) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 5) {
      this.increaseQuality(item);
    }
  }

  increaseQuality(item) {
    if (item.quality < 50) {
      item.quality += 1;
    }
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }
}
