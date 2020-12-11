let nameInput = document.querySelector('.set-trader');
let confirmTrader = document.querySelector('.confirm-btn');
let refreshTrader = document.querySelector('.refresh-btn');
let viewTraderName = document.querySelector('.trader-name');
let viewTraderTime = document.querySelector('.trader-time');
let clearButton = document.querySelector('.clear');
let allTraders = document.querySelector('.all-traders');


let traderName = '';
let tradersDate = '';
let nameArr = [];

let testArr = [];

let tradersList = '';

let pageReload = () => {
    location.reload();
}

let pushNameToArr = (name) => {
    nameArr.push(name)
}

let getName = () => {
    traderName = nameInput.value;
}
let getTime = () => {
    tradersDate = new Date();
    tradersDate.setHours( tradersDate.getHours() +72 );
    tradersDate.toUTCString();
    return tradersDate;
}
let setLocalSotrage = () => {
    localStorage.setItem(traderName, tradersDate);
}


let renderStorageName = (num) => {
    return localStorage.key(num);
 }
 
 let renderStorageTime = (key) => {
    return localStorage.getItem(key);
 }
 
 let onloadRender = () => {
     if (localStorage.key(0)) {
        for (let i = 0; i < localStorage.length; i++) {
            let tempBlock = document.createElement('div');
            let tempName = document.createElement('span');
            let tempTime = document.createElement('span')
            tempTime.classList.add('traders-time')
            tempName.classList.add('rendered-trader');
            tempName.innerHTML = `${renderStorageName(i)}`
            tempTime.innerHTML = `${renderStorageTime(renderStorageName(i))}`;
            tempBlock.prepend(tempTime);
            tempBlock.prepend(tempName);
            allTraders.prepend(tempBlock);
        }
        tradersList = document.querySelectorAll('.rendered-trader');
        for (let item of tradersList) {
            item.onclick= () => {
                if (confirm('delete trader?')) {
                    localStorage.removeItem(item.innerHTML);
                    pageReload();
                }
            }
        }
     }
 }

 let construct = () => {
    getTime();
    getName();
    pushNameToArr(getName);
    setLocalSotrage();
    pageReload();
}

confirmTrader.onclick = construct;
window.onload = onloadRender;
clearButton.onclick = () => {
    if (confirm('точно не ебнулся?')) {
        localStorage.clear();
        pageReload();   
    }

}