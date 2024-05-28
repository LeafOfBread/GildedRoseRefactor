var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {

  it("should foo", function() {
    const gildedRose = new Shop([ new Item("foo", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("fixme");
  });
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

});