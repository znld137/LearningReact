class Expedition extends Vacation {
  constructor(destination, length, gear) {
    super(destination, length);
    this.gear = gear;
  }

  print() {
    super.print();
    console.log(
      `당신의 ${this.gear.join('와(과) 당신의 ')}를(을) 가져오십시오.`,
    );
  }
}
