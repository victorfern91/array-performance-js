const Benchmark = require("benchmark");
const data = require("./data.json");

const suite = new Benchmark.Suite;

suite
    .add("Using ES6 chaining", function () {
        data
            .filter((item) => item.date.includes("2019"))
            .map((item) => ({ ...item, amount: Number(item.amount) }));
    })
    .add("Using ES6 chaining 2", function () {
        data
            .filter((item) => item.date.includes("2018"))
            .map((item) => ({ ...item, amount: Number(item.amount) }));
    })
    .on('cycle', function(event) {
        console.log(String(event.target));
    })
    .on("complete", function () {
        console.log("Fastest is " + this.filter("fastest").map("name"));
    })
    .run({ 'async': true });

