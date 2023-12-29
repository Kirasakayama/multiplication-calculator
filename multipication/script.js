let input = document.querySelector('.SecondNumber'); //the input number
let userNumber = document.querySelector('.firstNumber'); // the dropdown number
let result = document.querySelector('.result');
let calculate = document.querySelector('.calculateButton');
let history = document.querySelector('.history');
let obj ={}

if(localStorage.length > 0){
    let localData = JSON.parse(localStorage.getItem('data'))
    obj = {...localData}
}

for(n in obj){
    history.innerHTML += `<p style=color:#ac9477;text-align:center;> ${n} = ${obj[n]} </p> <br>`;
}


calculate.addEventListener('click' , ()=>{
    if(input.value !== '' && userNumber.value !== ''){
        let r = input.value * userNumber.value 
        result.innerHTML = r
  
        obj[`${input.value} x ${userNumber.value}`] = r
        localStorage.setItem('data' , JSON.stringify(obj))
        history.innerHTML += ` ${input.value} x ${userNumber.value} = ${r} </p><br>`;

    } else{
        alert('please select a number')
    }
})

