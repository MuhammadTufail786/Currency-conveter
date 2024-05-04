
import inquirer from "inquirer";

let currencyconversion = {

    "PKR": {
       
        "PKR" : 1,
        "USD" : 0.00036,
        "GBP" : 0.0028,
        "RIYAL" : 0.014,
        "AED" : 0.013,
        "EURO": 0.0033,
        

    },
    "GBP" : {

        "GBP" : 1,
        "USD" : 1.25,
        "RIYAL" : 4.17,
        "AED" : 4.61,
        "EURO" : 1.16,
        "PKR" : 348.10,

    },

    "USD" : {

        "USD" : 1,
        "RIYAL" : 3.75,
        "EURO" : 0.93,
         "AED" : 3.67,
        "GBP" :  0.80,
        "PKR" : 277.42,
        
    },

    "RIYAL" : {
          
       "RIYAL" : 1,
        "AED" : 0.98,
        "EURO" : 0.25,
        "USD" : 0.27,
        "GBP" :  0.21,
        "PKR" : 73.97,
    },

    "AED" : {
      
        "AED" : 1,
       "RIYAL" : 1.02,
        "EURO" : 0.25,
        "USD" : 0.27,
        "GBP" :  0.22,
        "PKR" : 75.53,
    },

    "EURO" : {

           
        "EURO" : 1 ,
        "RIYAL" : 4.04,
         "AED" : 3.96,
         "USD" : 1.08,
         "GBP" :  0.86,
         "PKR" : 298.85,
    },
};

const answer:{

    from: "PKR" | "EURO" | "AED" | "USD" | "GBP" | "RIYAL",
    to: "PKR" | "EURO" | "AED" | "USD" | "GBP" | "RIYAL",
    amount: number,

} = await inquirer.prompt([{
        type: "list",
        name: "from",
        message: "please select your currency?",
        choices: [ "PKR",  "EURO",  "AED",  "USD",  "GBP" ,"RIYAL" ],
},

{
    type: "list",
        name: "to",
        message: "please select your conversion rate?",
        choices: [ "PKR",  "EURO",  "AED",  "USD",  "GBP" ,"RIYAL" ],
},
{

    type: "number",
        name: "amount",
        message: "please enter the amount you wish to convert?",
},
]);

const {from, to, amount} = answer;

if (from && to && amount ){

    let result = currencyconversion [from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
    
} else {
    console.log("invalid conversion");
    
}
    
































