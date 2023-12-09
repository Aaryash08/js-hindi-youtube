//Immediately Invoked Function Expression (IIFE)


(function chai(){//named IIFE
    console.log(`DB CONNECTED`);
})();
// IIFE use to remove pollution of global scope because 
// it arises problem for us
// chai()

((name)=>{ //Simple/unnamed IIFE
    console.log(`DB CONNECTED TWO ${name}`);
}) ('Aaryash');