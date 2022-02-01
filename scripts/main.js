const moneySpan = document.querySelector('.container header .right span.money');
const walletWheatSpan = document.querySelector('span.showWheatAmount');
const walletGoldSpan = document.querySelector('span.showGoldAmount');
const walletLumberSpan = document.querySelector('span.showLumberAmount');
const walletPalmOilSpan = document.querySelector('span.showPalmOilAmount');
const walletCottonSpan = document.querySelector('span.showCottonAmount');
const walletCoffeeSpan = document.querySelector('span.showCoffeeAmount');
const walletSugarSpan = document.querySelector('span.showSugarAmount');

let money = 3000;
const dayDuration = 3500;

let day = 1;
let days = [];

const log = (msg) => (console.log(msg));

let wheatPrice = Math.floor(Math.random() * 200); let wheatArray = []; let smallestWheatPrice;
let goldPrice = Math.floor(Math.random() * 1250); let goldArray = []; let smallestGoldPrice;
let lumberPrice = Math.floor(Math.random() * 700); let lumberArray = []; let smallestLumberPrice;
let palmOilPrice = Math.floor(Math.random() * 3000); let palmOilArray = []; let smallestPalmOilPrice;
let cottonPrice = Math.floor(Math.random() * 100); let cottonArray = []; let smallestCottonPrice;
let coffeePrice = Math.floor(Math.random() * 150); let coffeeArray = []; let smallestCoffeePrice;
let sugarPrice = Math.floor(Math.random() * 10); let sugarArray = []; let smallestSugarPrice;

const changeValue = (productPrice, arrayName, positiveValue, negativeValue) => {
 productPrice += (Math.floor(Math.random() * positiveValue) + Math.floor(Math.random() * -negativeValue));
 arrayName.push(productPrice);
};

const showWallet = (span, productAmount, unit) => {
 span.innerHtml = productAmount + ' ' + unit;
 span.textContent = productAmount + ' ' + unit;
};

let wallet = {
 wheatAmount: 0,
 goldAmount: 0,
 lumberAmount: 0,
 palmOilAmount: 0,
 cottonAmount: 0,
 coffeeAmount: 0,
 sugarAmount: 0
}


setInterval(() => {
 // showWallets();
 days.push(day)
 day++;
 // log(days)
 changeValue(wheatPrice, wheatArray, 20, -20);
}, dayDuration);

const showWallets = () => {
 showWallet(document.querySelector('span.showWheatAmount'), wallet.wheatAmount, 'kilograms');
 showWallet(document.querySelector('span.showGoldAmount'), wallet.goldAmount, 'kilograms');
 showWallet(document.querySelector('span.showLumberAmount'), wallet.lumberAmount, 'kilograms');
 showWallet(document.querySelector('span.showPalmOilAmount'), wallet.palmOilAmount, 'liters');
 showWallet(document.querySelector('span.showCottonAmount'), wallet.cottonAmount, 'kilograms');
 showWallet(document.querySelector('span.showCoffeeAmount'), wallet.coffeeAmount, 'kilograms');
 showWallet(document.querySelector('span.showSugarAmount'), wallet.sugarAmount, 'kilograms');
}

// window.onload = function() {showWallets();};