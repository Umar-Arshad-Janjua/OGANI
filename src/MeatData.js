const data = [

    {
    
        title: "Beef",
        price: 30,
        pic: require("./images/beef.png").default,
        quantityInCart: 0,
        inCart: false
        
        },


        {
    
            title: "Chiken",
            price: 40,
            pic: require("./images/chicken.png").default,
            quantityInCart: 0,
            inCart: false
            
            },

        {
    
            title: "Lamb",
            price: 80,
            pic: require("./images/lamb.png").default,
            quantityInCart: 0,
            inCart: false
            
            }

]

export function getMeatData(){
    
    return data;
    };