import {
  Tama
} from "./../src/tamagotchi.js";

describe("Tama", function() {
  let tammy;
  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it("should test if the timer is decrementing hunger points", function() {
    tammy = new Tama();
    jasmine.clock().tick(30001)
    expect(tammy.hunger).toBe(95)
  });
});
