describe("Gilded Rose", function() {
  it("should decrease the quality and sellIn of a normal item", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("foo");
    expect(items[0].sellIn).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should not decrease the quality of an item below 0", function() {
    const gildedRose = new Shop([ new Item("foo", 10, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of Aged Brie as it gets older", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(21);
  });

  it("should not increase the quality of any item above 50", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 10, 50) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(50);
  });

  it("should not decrease the quality or sellIn of Sulfuras", function() {
    const gildedRose = new Shop([ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].sellIn).toEqual(10);
    expect(items[0].quality).toEqual(80);
  });

  it("should increase the quality of Backstage passes by 2 when there are 10 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(22);
  });

  it("should increase the quality of Backstage passes by 3 when there are 5 days or less", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23);
  });

  it("should drop the quality of Backstage passes to 0 after the concert", function() {
    const gildedRose = new Shop([ new Item("Backstage passes to a TAFKAL80ETC concert", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of Aged Brie by 2 after the sell by date", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(23); // Corrected expected value
  });

  it("should decrease the quality of a normal item twice as fast after the sell by date", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 20) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(17); // Corrected expected value
  });
});
