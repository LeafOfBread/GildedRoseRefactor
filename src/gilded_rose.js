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
    this.items.forEach(item => {
      if (this.isLegendaryItem(item)) return;

      item.sellIn -= 1;

      switch (item.name) {
        case 'Aged Brie':
          this.updateAgedBrieQuality(item);
          break;
        case 'Backstage passes to a TAFKAL80ETC concert':
          this.updateBackstagePassQuality(item);
          break;
        default:
          this.updateNormalItemQuality(item);
          break;
      }

      if (item.sellIn < 0) {
        if (item.name === 'Aged Brie') {
          this.increaseQuality(item);
        } else if (item.name === 'Backstage passes to a TAFKAL80ETC concert') {
          item.quality = 0;
        } else {
          this.decreaseQuality(item);
        }
      }
    });

    return this.items;
  }

  isLegendaryItem(item) {
    return item.name === 'Sulfuras, Hand of Ragnaros';
  }

  updateAgedBrieQuality(item) {
    this.increaseQuality(item);
    if (item.sellIn < 0) {
      this.increaseQuality(item);
    }
  }

  updateBackstagePassQuality(item) {
    this.increaseQuality(item);
    if (item.sellIn < 11) {
      this.increaseQuality(item);
    }
    if (item.sellIn < 6) {
      this.increaseQuality(item);
    }
  }

  updateNormalItemQuality(item) {
    this.decreaseQuality(item);
    if (item.sellIn < 0) {
      this.decreaseQuality(item);
    }
  }

  increaseQuality(item) {
    if (item.quality < Shop.MAX_QUALITY) {
      item.quality += 1;
    }
  }

  decreaseQuality(item) {
    if (item.quality > 0) {
      item.quality -= 1;
    }
  }
}

Shop.MAX_QUALITY = 50;

if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    Item,
    Shop
  };
}
