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

let pushNameToArr = (name) => {
    nameArr.push(name)
}

let getName = () => {
    traderName = nameInput.value;
}
let getTime = () => {
    tradersDate = new Date();
    tradersDate.setHours( tradersDate.getHours() +72 );
}
let setLocalSotrage = () => {
    localStorage.setItem(traderName, tradersDate);
}

let renderSegment = () => {
    let tempName = document.createElement('p');
    tempName.innerHTML = `<b>${traderName}</b>  ${tradersDate}`;
    allTraders.prepend(tempName);

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
            let tempName = document.createElement('p');
            tempName.innerHTML = `<b>${renderStorageName(i)}</b> ${renderStorageTime(renderStorageName(i))}`
            allTraders.prepend(tempName);
        }
        for (let i = 0; i < localStorage.length; i++) {
            let testObj = {};
            testObj.name = renderStorageName(i);
            testObj.fuck = renderStorageTime(renderStorageName(i));
            testArr.push(testObj);
        }
 
     }
 }

 let construct = () => {
    getTime();
    getName();
    pushNameToArr(getName);
    setLocalSotrage();
    renderSegment();
}

confirmTrader.onclick = construct;
window.onload = onloadRender;
clearButton.onclick = () => {
    localStorage.clear();
    location.reload();
}