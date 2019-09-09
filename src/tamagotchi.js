export class Tama {
  constructor() {
    this.hunger = 300;
    this.happiness = 500;
    this.exhaustion = 540;
    this.timer()
  }
  timer() {
    setInterval(() => {
      if (this.hunger < 0 | this.happiness < 0 | this.exhaustion < 0) {
        alert("God damn you're a stupid son of a bitch.  You let your fucking creature die!" + this.hunger + " " + this.happiness + " " + this.exhaustion)
      }
      this.hunger = this.hunger - 5;
      this.happiness = this.happiness - 5;
      this.exhaustion = this.exhaustion - 5
    }, 3000)
    return this;
  }

  feed() {
    if (this.hunger < 300) {
      this.hunger += 10;
    }
    return this;
  }

  love() {
    if (this.happiness < 500) {
      this.happiness += 10;
    }
    return this;
  }

  sleep() {
    setTimeout(() => {
      if (this.exhaustion < 500) {
        this.exhaustion = 540;
      }
    }, 60000);

  }
}
