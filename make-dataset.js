const faker = require("faker");
const fs = require("fs");

let NUM_OF_ITEMS = 500000;

const fakeData = [];

while (NUM_OF_ITEMS --> 0) {
    fakeData.push({
        name: faker.name.findName(),
        iban: faker.finance.iban(),
        amount: faker.finance.amount(),
        date: faker.date.future()
    });
}

fs.writeFile("./data.json", JSON.stringify(fakeData, null, 2));
