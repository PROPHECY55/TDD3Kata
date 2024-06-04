describe("Gilded Rose", function() {
  it("should decrease sell_in and quality by 1 for normal items", function() {

    expect(items[0].sell_in).toEqual(9);
    expect(items[0].quality).toEqual(19);
  });
});
