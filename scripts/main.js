const moneySpan = document.querySelector('span.money');
const walletWheatSpan = document.querySelector('span.showWheatAmount');
const walletGoldSpan = document.querySelector('span.showGoldAmount');
const walletLumberSpan = document.querySelector('span.showLumberAmount');
const walletPalmOilSpan = document.querySelector('span.showPalmOilAmount');
const walletCottonSpan = document.querySelector('span.showCottonAmount');
const walletCoffeeSpan = document.querySelector('span.showCoffeeAmount');
const walletSugarSpan = document.querySelector('span.showSugarAmount');

let saveWheat = document.cookie;
let saveGold = document.cookie;
let saveLumber = document.cookie;
let savePalmOil = document.cookie;
let saveCotton = document.cookie;
let saveCoffee = document.cookie;
let saveSugar = document.cookie;

let money = 3000;
const dayDuration = 1500;

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
 if (window.location === '127.0.0.1:4625/pages/index.html') {
  span.innerHtml = productAmount + ' ' + unit;
  span.textContent = productAmount + ' ' + unit;
 }
};

function updateCookie(cname, cvalue, exdays) {
 const d = new Date();
 // log(d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000)))
 document.cookie = `${cname}=${cvalue}`;
}

// function getCookie(cname) {
//  var name = cname + "=";
//  var ca = document.cookie.split(';')[];
// }





let wallet = {
 /* TODO: SELECT COOKIE VALUE */
 wheatAmount: 48,
 /* TODO: SELECT COOKIE VALUE */
 goldAmount: 74,
 /* TODO: SELECT COOKIE VALUE */
 lumberAmount: 74,
 /* TODO: SELECT COOKIE VALUE */
 palmOilAmount: 74,
 /* TODO: SELECT COOKIE VALUE */
 cottonAmount: 74,
 /* TODO: SELECT COOKIE VALUE */
 coffeeAmount: 74,
 /* TODO: SELECT COOKIE VALUE */
 sugarAmount: 5
 /* TODO: SELECT COOKIE VALUE */
}

// let days = [];
// let daysCount = 1;

const save = (art) => {
 updateCookie("Wheat", wallet.wheatAmount, 24);
 updateCookie("Gold", wallet.goldAmount, 24);
 updateCookie("Lumber", wallet.lumberAmount, 24);
 updateCookie("PalmOil", wallet.palmOilAmount, 24);
 updateCookie("Cotton", wallet.cottonAmount, 24);
 updateCookie("Coffee", wallet.coffeeAmount, 24);
 updateCookie("Sugar", wallet.sugarAmount, 24);
 updateCookie("Money", money, 24);
 // if (art === true) {
 //  alert(saveCoffee+' '+saveCotton+' '+saveGold+' '+saveLumber+' '+savePalmOil+' '+saveSugar+' '+saveWheat);
 //  console.log(typeof saveWheat);
 // }
};

const reloadMoney = (err) => {if (err) throw err; moneySpan.innerHTML = money + '💰'; moneySpan.textContent = money + '💰'};

setInterval(() => {
 save();
 reloadMoney();
 showWallets();
 changeValue(wheatPrice, wheatArray, 20, -20);
 log(document.cookie)
 // console.log(daysCount);
 // days.push(daysCount)
 // daysCount++;
}, dayDuration);

const showWallets = () => {
 showWallet(walletWheatSpan, wallet.wheatAmount, 'kilograms');
 showWallet(walletGoldSpan, wallet.goldAmount, 'kilograms');
 showWallet(walletLumberSpan, wallet.lumberAmount, 'kilograms');
 showWallet(walletPalmOilSpan, wallet.palmOilAmount, 'liters');
 showWallet(walletCottonSpan, wallet.cottonAmount, 'kilograms');
 showWallet(walletCoffeeSpan, wallet.coffeeAmount, 'kilograms');
 showWallet(walletSugarSpan, wallet.sugarAmount, 'kilograms');
}

window.onload = function() {
 reloadMoney();
 showWallets();
};