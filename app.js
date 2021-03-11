'use strict'

const jokeMessage=document.querySelector('#display-joke');
const button=document.querySelector('#get-joke');

button.addEventListener('click',function(){
    const promise=fetch('https://api.chucknorris.io/jokes/random');
    console.log(promise);
   promise.then((response)=>{
       return response.json();
   })
   .then((response1)=>{
       console.log(response1);
       console.log(response1.value);
       jokeMessage.textContent=response1.value;
   })
   .catch((error)=>{new Error('cant fetch joke')})
})