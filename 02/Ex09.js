// 옛날 방식
var skier = {
  name: name,
  sound: sound,
  powderYell: function () {
    var yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}!!`);
  },
  speed: function (mph) {
    this.speed = mph;
    console.log('속력(mph):', mph);
  },
};

// 새로운 방식
const skier = {
  name,
  sound,
  powderYell() {
    let yell = this.sound.toUpperCase();
    console.log(`${yell} ${yell} ${yell}`);
  },
  speed(mph) {
    this.speed = mph;
    console.log('속력(mph):', mph);
  },
};
