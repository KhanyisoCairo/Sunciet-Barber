var getFirstNameElem = document.querySelector(".firstname");
var getLastNameElem = document.querySelector(".Lastname");
var regBtnElem = document.querySelector(".registerBtn");
var addBtnElem = document.querySelector(".AddBtn");
var showBtnElem = document.querySelector(".showBtn");
var displayElem = document.querySelector(".Barber");



var FactoryInstance = FactorySuncietBarber();

function createUserInfo(user) {
    var div = document.createElement('div');
    div.innerHTML = user;
    var getUser = document.querySelector(".Barber");
    getUser.appendChild(div)
}
function createUser(foundUserInfo) {
    // displayElem.innerHTML = "";
    //foundUserInfo.forEach(currentUser => {
    //    createUserInfo(currentUser);
    //    });
}
function priceList() {
    var prices = document.querySelector("input[name ='hairCut']:checked");


    console.log(FactoryInstance.getPrice(prices.value));

}

function showBtn() {
    var showPrice = document.querySelector("input[name ='hairCut']:checked");
    displayElem.innerHTML = FactoryInstance.getRegister();
    
    // if (showPrice= "") {
    //     var priceStyle = showPrice.value;
    //     createUser(factoryInstance.getPrice(priceStyle))
    // }
}
function addBtnClicked() {
    // var result = FactoryInstance.registration(getFirstNameElem.value || getLastNameElem.value)

    //if (getFirstNameElem.value || getLastNameElem.value ) {
    var name = getFirstNameElem.value + getLastNameElem.value;
    createUser(FactoryInstance.addUserInfo(name));
    // localStorage.setItem('barber', JSON.stringify(FactoryInstance.addUserInfo()))  
    //  }
}


addBtnElem.addEventListener("click", addBtnClicked);
showBtnElem.addEventListener("click", showBtn);

regBtnElem.addEventListener("click", function () {
    getFirstNameElem.classList.toggle("hidden");
    getLastNameElem.classList.toggle("hidden");


});