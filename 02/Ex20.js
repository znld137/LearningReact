/*
클래스 Class

자바스크립트는 프로토타입을 사용한 상속 Prototypical inheritance라고 불리는 방법을 사용한다.
 */

function Vacation(destination, length) {
  this.destination = destination;
  this.length = length;
}

Vacation.prototype.print = function () {
  console.log(this.destination + '은(는) ' + this.length + ' 일 걸립니다.');
};

const maui = new Vacation('마우이', 7);

maui.print();
