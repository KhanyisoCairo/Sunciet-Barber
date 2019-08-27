function FactorySuncietBarber() {
    var register =  [];
console.log(register)

    function addUserInfo(userInfo) {
       
     register.push(userInfo);
//        var setUpperCase = userInfo.toUpperCase().trim();
  //      for(var i = 0;i<register.length;i++){
    //  if (register.includes(setUpperCase) !== " ") {
      //      register.push(setUpperCase);
       // }
   // }
    }


    function getPrice(style) {
        var prices = {
            "Shaving" : 10.00,
            "Hair Cut": 25.00, 
            "Triming" : 5.00,
            "Styling" : 35.00,
        }
        
        return prices[style];
    }
        // var prices = [{

        //     styleCutting: "shaving",
        //     prices: 10.00
        // },
        // {
        //     styleCutting: "Hair Cutting",
        //     prices: 25.00
        // },
        // {

        //     styleCutting: "triming",
        //     price: 5.00
        // },
        // {
        //     styleCutting: "styling",
        //     price: 35.00

        // }];

        // for (let value of Object.values(user)) {
        //     alert(value); 
        //   }

       
        // return prices;


    function getRegister() {
        return register;
    }

    return {
        addUserInfo,
        getRegister,
        getPrice
    }
}