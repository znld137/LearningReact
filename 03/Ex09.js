let color_lawn = {
  title: '잔디',
  color: '#00FF00',
  rating: 0,
};

var rateColor = function (color, rating) {
  return Object.assign({}, color, { rating: rating });
};

console.log(rateColor(color_lawn, 5).rating);
console.log(color_lawn.rating);
