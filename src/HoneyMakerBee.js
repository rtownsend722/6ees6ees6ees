class HoneyMakerBee extends Bee {
  constructor(color, food) {
    super(color, food);
    this.age = 10
    this.job = 'make honey';
    this.honeyPot = 0;
  }
  makeHoney() {
    this.honeyPot += 1;
  };
  giveHoney() {
    this.honeyPot -= 1;
  };
};



// an eat method that is inherited from grub
// a honeyPot property that is set to 0
// a makeHoney method that adds 1 to that honeyBee's honeyPot
// a giveHoney method that subtracts 1 from that honeyBee's honeyPot