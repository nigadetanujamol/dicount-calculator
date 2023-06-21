
const billAmount = document.querySelector("#bill");
const dis = document.querySelector("#discount");
const cal = document.querySelector("#calculator");
const tot = document.querySelector("#total");

cal.addEventListener('click', ()=>{
    const billValue =billAmount.value;    //we have to get the values 
    const disValue = dis.value;
    console.log(billValue);
    console.log(disValue);

    //Validations
 const result = isValid(disValue, billValue);                  //here we call the function
                                                   //return value stored in const result

        if(result){                                // if result is true the execute line 18,19,20
            const discountAmount = billValue -(billValue * disValue)/100;
            console.log(discountAmount);
            tot.innerHTML =`Total amount to pay is: ${discountAmount}`;

        } else{
            alert `Enterd value is not correct.`; 

        }            
   
});

function isValid(num , num1){ //we write function for, if discount value is negative or greater that 100 then return false means goto line 22
                        // if result is true  going to line 17
    if(num<0 || num>100 || num1<=0){
        return false;
    }
    return true;
}