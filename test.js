const CC = require('currency-converter-lt');
let currencyConverter = new CC({from: 'USD', to: 'RUB', amount: 1});
currencyConverter;
currencyConverter.convert().then((response) => {
  console.log(response);
});
let a = 5;
let c = a + a;
let d = 235;
