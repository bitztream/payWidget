const faker = require('faker');

let itemNames = function () {
	let arr = [];
	let start = 0;
	while (start < 6) {
		arr.push(faker.commerce.productName());
		start++
	}
	return arr;
};

let imgs = function () {
	let arr = []; 
	let start = 0;
	while (start < 6) {
		arr.push(faker.commerce.productName());
		start++;
	}
	return arr;
};

let prices = function () {
	let arr = []; 
	let start = 0;
	while (start < 6) {
		let num = faker.random.number(200);
		if (num < 20) {
			num += 20;
		}
		arr.push(num);
		start++;
	}
	return arr;
};
// let itemResults = itemNames()
// let priceResult = prices()
// let imgResults = imgs()

const goSeed = function () {
	let seedData = [];
	let dataLength = 100;
	while (dataLength > 0) {
		let streamerName = faker.internet.userName();
		let designerName = faker.name.lastName() + ' Merch store ' + faker.hacker.noun()
		let itemResults = itemNames()
		let priceResults = prices()
		let imgResults = imgs()

		seedData.push({ streamerName }, { designerName }, { itemResults }, { priceResults }, { imgResults });
		dataLength--;
		// seedData.push({ streamerID }, { streamerName }, { designerName }, { itemResults }, { priceResults }, { imgResults })
		// dataLength--;
	}
	return seedData;
};

module.exports.goSeed = goSeed;

