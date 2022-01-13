const data = [

{

title: "Meat",
price: "200$",
pic: require("./images/df.png").default,

},

{

    title: "Fresh Fruits",
    price: "200$",
    pic: require("./images/ff.png").default,
    quantityInCart: 0,
    inCart: false
    
    },

    {

        title: "Vegetables",
        price: "200$",
        pic: require("./images/v.png").default,
        quantityInCart: 0,
    inCart: false
        
        },
        {

        title: "Berries",
        price: "200$",
        pic: require("./images/vt.png").default,
        quantityInCart: 0,
    inCart: false
        
        }
    


]

export function getData(){

return data;
};