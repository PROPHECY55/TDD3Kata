describe("Gilded Rose", function() {
  it("should decrease sell_in and quality by 1 for normal items", function() {
    items = [ new Item("normal item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should not decrease quality below 0", function() {
    items = [ new Item("normal item", 10, 0) ];
    update_quality();
    expect(items[0].quality).toEqual(0);
  });

  it("should increase the quality of Aged Brie as it gets older", function() {
    items = [ new Item("Aged Brie", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(21);
  });

  it("should not increase the quality of any item above 50", function() {
    items = [ new Item("Aged Brie", 10, 50) ];
    update_quality();
    expect(items[0].quality).toEqual(50);
  });

  it("should never alter the quality or sell_in of Sulfuras", function() {
    items = [ new Item("Sulfuras, Hand of Ragnaros", 10, 80) ];
    update_quality();
    expect(items[0].sell_in).toEqual(10);
    expect(items[0].quality).toEqual(80);
  });

  it("should increase quality of Backstage passes by 2 when there are 10 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 10, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(22);
  });

  it("should increase quality of Backstage passes by 3 when there are 5 days or less", function() {
    items = [ new Item("Backstage passes to a TAFKAL80ETC concert", 5, 20) ];
    update_quality();
    expect(items[0].quality).toEqual(23);
  });

  it("should drop quality of Backstage passes to 0 after the concert", function() {

    expect(items[0].quality).toEqual(0);
  });
});
