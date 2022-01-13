const data = [

    {
    
        title: "Strawberry",
        price: 40,
        pic: require("./images/strawberries.png").default,
        quantityInCart: 0,
        inCart: false
        
        },

    {

        title: "Grapes",
        price: 70,
        pic: require("./images/grapes.png").default,
        quantityInCart: 0,
        inCart: false
        
        },
     {

        title: "Raspberry",
        price: 20,
        pic: require("./images/raspberry.png").default,
        quantityInCart: 0,
        inCart: false
        
        }

]


export function getBerriesData(){
    
    return data;
    };