export class Tama {
  constructor() {
    this.hunger = 100;
    this.happiness = 100;
    this.exhaustion = 100;
    this.timer();
  }
  timer() {
    setInterval( () => {
      this.hunger = this.hunger - 5;
      this.happiness = this.happiness - 5;
      this.exhaustion = this.exhaustion - 5
    }, 30000)
    if (this.hunger <= 5) {
      alert("God damn you're a fucking idiot.  You let your Tamagotchi die of starvation!")
    }
    if (this.happiness <= 5) {
      alert("You let something get so sad that it died? You're going to hell.")
    }
    if (this.exhaustion <= 5) {
      alert("So tired that it died of exhuastion? I hope it was worth it.")
    }
  }
}
