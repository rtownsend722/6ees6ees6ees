class ForagerBee extends Bee {
  constructor(color, food) {
    super(color, food);
    // an age property that is set to 10
    this.age = 10;
    // a job property that is set to find pollen
    this.job = 'find pollen';
    // a canFly property that is set true
    this.canFly = true;
    // a treasureChest property that is set to an empty array []
    this.treasureChest = [];
  }
  forage(treasure) {
    this.treasureChest.push(treasure);
  };  
};
