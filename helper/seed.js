const faker = require('faker');

let Items = () => {
	let arr = [];
	let start = 0;
	while (start < 6) {
		arr.push(faker.commerce.productName());
		start++;
	}
	return arr;
};

let Imgs = () => {
	let arr = [];
	let start = 0;
	while (start < 6) {
		arr.push(faker.commerce.productName());
		start++;
	}
	return arr;
};

let Prices = () => {
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

const goSeed = () => {
	let seedData = [];
	let dataLength = 100;
	while (dataLength > 0) {
		let streamerName = faker.internet.userName();
		let designerName = faker.name.lastName() + ' Merch store ' + faker.hacker.noun()
		let items = Items();
		let prices = Prices();
		let imgs = Imgs();

		seedData.push({
			streamerName, designerName, items, prices, imgs,
		});
		dataLength--;
	}
	return seedData.slice();
};

module.exports.goSeed = goSeed;
