// localStorage.clear();


const addItemBtn = document.querySelector(".addItemBtn");
const rollBtn = document.querySelector(".rollBtn");
const showResultPara = document.querySelector(".showResultPara");
const listDiv = document.querySelector(".listDiv");
const itemDiv = document.querySelector(".itemDiv");



window.onload = function(){
    getLocalStorage();
}

//add item to list
const itemClone = itemDiv.cloneNode(true);
itemDiv.remove();
addItemBtn.addEventListener("click", ()=>{
    const newItem = itemClone.cloneNode(true);
    const name = newItem.querySelector(".itemNameInput");
    const rate = newItem.querySelector(".itemRateInput");
    name.addEventListener("change", setLocalStorage)
    rate.addEventListener("change", setLocalStorage)
    newItem.querySelector(".removeItemBtn").addEventListener("click", ()=>{
        //removeItemBtn's action here
        newItem.remove();
        setLocalStorage();
    })
    listDiv.appendChild(newItem);
    setLocalStorage();
});


//draw the item from list
rollBtn.addEventListener("click", ()=>{
    const itemListArr = [];
    const items = document.querySelectorAll(".listDiv .itemDiv");
    for(const item of items){
        const name = item.querySelector(".itemNameInput");
        const rate = item.querySelector(".itemRateInput");

        for(let i=0; i<rate.value; i++){
            itemListArr.push(name.value)
        }
    }
    showResultPara.innerText = itemListArr[Math.floor(Math.random() * itemListArr.length)];
});

//save itemList to localStorage as string
const setLocalStorage = function(){
    const itemListObj = {};
    const items = document.querySelectorAll(".listDiv .itemDiv");
    for(const item of items){
        const name = `item${item.querySelector(".itemNameInput").value}`;
        const rate = item.querySelector(".itemRateInput").value;
        itemListObj[String(name)] = rate;
    }
    localStorage.setItem("itemList", JSON.stringify(itemListObj));
}

//get itemList from localStorage, and make list
const getLocalStorage = function(){
    const obj = JSON.parse(localStorage.getItem("itemList"));
    for(const key in obj){
        const newItem = itemClone.cloneNode(true);
        const name = newItem.querySelector(".itemNameInput");
        const rate = newItem.querySelector(".itemRateInput");
        name.addEventListener("change", setLocalStorage)
        rate.addEventListener("change", setLocalStorage)
        name.value = key.slice(4);
        rate.value = obj[key];
        newItem.querySelector(".removeItemBtn").addEventListener("click", ()=>{
            //removeItemBtn's action here
            newItem.remove();
            setLocalStorage();
        })
        listDiv.appendChild(newItem);
    }
}


//debug button's action here
document.querySelector(".save").addEventListener("click", ()=>{
    const abs = new Map();
    abs.set("aaa", "333");
    abs.set("bbb", "444");
    abs.set("aaa", "333");
    console.log(abs);
    console.log(JSON.stringify(abs));
});
