//NOW AM ADD FUNCTION TO BUTTON INCREMENT AND DECREMENT
//LET START JS
let valuecount = 1;
let increment = document.querySelector('.btn-incriment');
let decrement = document.querySelector('.btn-decrement');
let count = document.querySelector('#Quantity');
let totalcount = document.querySelector('#Price');
//NOW AM A CREATING ARROW FUNCTION
increment.addEventListener("click", () => {
    let add = valuecount++;
    count.value = add;
    totalcount.innerHTML = add * 11999; //ADDING (INCREMENT) FUNCTION IS COMPLETE


    decrement.addEventListener("click", function () {
        //THIS IS DESCREMENT FUNCTION IN THIS AN GIVING A CONDITION TWO DISABLE THE (-) VALUE
        if (valuecount >= 2) {
            let sub = --valuecount;
            count.value = sub;
            count.value = sub;
            totalcount.innerHTML = sub * 11999;
        }


    })
})