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




























// let obj = {};
// if(localStorage.length >0){
//     let localStorageData = JSON.parse(localStorage.getItem('data'))
//   obj = {...localStorageData}

//     for(let n in obj){
//      history.innerHTML += ` <p style=color:#ac9477;text-align:center>${n} =${obj[n]} <br></p>`
//     }

// }
// calculate.addEventListener('click',()=> {
//     if(input.value !=="" && userNumber.value !==""){ //make sure the input and the select box is not empty
//        let r =+ input.value *+ userNumber.value ;
//        result.innerHTML = r ;
//        obj[`${input.value}*${userNumber.value}`]=r

//        localStorage.setItem('data' , JSON.stringify(obj))//stringifying 
//        history.innerHTML += ` <p style=color:#ac9477;text-align:center> ${input.value}*${userNumber.value} = ${r} </p> <br>`;   
//     } else{
//     alert('please select a number') // if they're empty the alert will pop up
//     }
// })







// let obj = {};

// if(localStorage.length > 0){
// let localData = JSON.parse(localStorage.getItem('data'));
// obj = {...localData};
// }

// for(let i in obj){
//     history.innerHTML += `${i} = ${obj[i]}`
// }


// calculate.addEventListener('click', ()=> {
//  if(input.value !== '' && userNumber !== ''){
//     let re =+ input.value *+userNumber.value ;
//     result.innerHTML = re; 
//     obj[`${input.value} x ${userNumber.value} = ${re}`];

//    localStorage.setItem('data' ,JSON.stringify(obj))
//    history.innerHTML += `${input.value} x ${userNumber.value} = ${re} <br>`;
//  } else{
//     alert('please select a number')}
// })



// let input = document.querySelector('.firstNumber');
// let options = document.querySelector('.SecondNumber');
// let calculate = document.querySelector('.calculateButton');
// let result = document.querySelector('.result');
// let history = document.querySelector('.history');


// calculate.addEventListener('click' ,()=> {
//     if(input.value !== "" && options.value !== ""){
//         let r =+ input.value *+ options.value ;
//         result.innerHTML = r ;
//         console.log(r)
//     } else {
//     alert('please select a number')
//     }
// })













