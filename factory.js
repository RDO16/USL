class Mercedes {

	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class BMW {

	constructor(model, price, maxSpeed) {
		this.model = model;
		this.price = price;
		this.maxSpeed = maxSpeed;
	}
}

class MercedesFactory {
	create(type) {
		if (type === 'C')
			return new Mercedes(type, 109000, 400);
		if (type === 'E')
			return new Mercedes(type, 113000, 420);
	}
}


class BMWFactory {
	create(type) {
		if (type === 'M3')
			return new BMW(type, 110000, 400);
		if (type === 'M5')
			return new BMW(type, 114000, 420);
	}
}

const bmwFactory = new BMWFactory();

const M3 = bmwFactory.create('M3');

console.log(M3);

const mercedesFactory = new MercedesFactory();

const E = mercedesFactory.create('E');

console.log(E);
