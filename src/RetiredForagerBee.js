class RetiredForagerBee extends ForagerBee {
  constructor(food, treasureChest) {
    super(food, treasureChest);
    // an age property that is set to 40
    this.age = 40;
    // a job property that is set to gamble
    this.job = 'gamble';
    // a canFly property that is set to false
    this.canFly = false;
    // a color property that is set to grey
    this.color = 'grey';
  }
  forage() {
    return 'I am too old, let me play cards instead';
  };
  gamble(treasure) {
    this.treasureChest.push(treasure);
  };
};
