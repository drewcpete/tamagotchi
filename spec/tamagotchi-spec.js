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

describe("Tama", function(){
  let tammy;
  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should test to see if the timer is decrementing the happiness points", function(){
    tammy = new Tama();
    jasmine.clock().tick(30001)
    expect(tammy.happiness).toBe(95)
  });
});

describe("Tama", function(){
  let tammy;
  beforeEach(function() {
    jasmine.clock().install();
  });
  afterEach(function(){
    jasmine.clock().uninstall();
  });

  it("should test to see if the timer is decrementing the exhaustion points", function(){
    tammy = new Tama();
    jasmine.clock().tick(30001)
    expect(tammy.exhaustion).toBe(95)
  });
});
