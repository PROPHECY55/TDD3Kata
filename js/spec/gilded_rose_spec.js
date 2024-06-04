describe("Gilded Rose", function() {
  it("should decrease sell_in and quality by 1 for normal items", function() {
    items = [ new Item("normal item", 10, 20) ];
    update_quality();
    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });

  it("should not decrease quality below 0", function() {

    expect(items[0].quality).toEqual(0);
  });
});
