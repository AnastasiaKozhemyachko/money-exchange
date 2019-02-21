// PLEASE DON'T change function name
module.exports = function makeExchange(currency) {
   var h = 0, q = 0, d = 0, n = 0, p = 0;
    var obj = {
      };
      


    // var str='{';
if (currency>=10001) {
        obj["error"] = "You are rich, my friend! We don\'t have so much coins for exchange";
    }
    else{
        while (currency < 10001 && currency >= 50) {
            h++;    
            currency = currency-50;
        }
        if(h!=0){
            obj["H"] = h;
        }
        while (currency < 50 && currency >= 25) {
            q++;   
            currency = currency-25; 
        }
        if(q!=0){
            obj["Q"] = q;
        }

        while (currency < 25 && currency >= 10) {
            d++;    
            currency = currency-10;
        }
        if(d!=0){
            obj["D"] = d;
        }
        
        while (currency < 10 && currency >= 5) {
            n++;    
            currency = currency-5;
        }    
        if(n!=0){
            obj["N"] = n;
        }
        while (currency < 5 && currency >= 1) {
            p++;  
            currency = currency-1;  
        }
        if(p!=0){
            obj["P"] = p;
        }
    }
    
return obj;
}
