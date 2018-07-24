//install faker package
//use Faker and print 10 random product names and prices
//run file with node

var faker = require('faker');

// var products = [];
// var product;
// var price;

// for (var i=0; i<10; i++) {
//     product = faker.commerce.productName();
//     price = faker.random.number();
//     products.push([product,price])
// }

// var final = "";

// for (var i=0; i<products.length; i++) {
//     final += products[i][0] + ", priced at: $" + products[i][1] + "\n";
// }

//

for (var i=0; i<10; i++) {
    console.log(faker.commerce.productName() + " - $" + faker.commerce.price());
}
