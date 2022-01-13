const data = [

    {
    
    title: "Tomato",
    price: 20,
    pic: require("./images/tomato.png").default,
    
    },
    
    {
    
        title: "Peas",
        price: 30,
        pic: require("./images/peas.png").default,
        quantityInCart: 0,
        inCart: false
        
        },
    
        {
    
            title: "Cabbage",
            price: 40,
            pic: require("./images/cabbage.png").default,
            quantityInCart: 0,
        inCart: false
            
            }
    
    ]
    
    export function getVegetablesData(){
    
    return data;
    };