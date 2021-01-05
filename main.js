let btnPlus = document.getElementsByClassName('Plus');
for (let Plus of btnPlus) {
Plus.addEventListener('click', function() {
Plus.nextElementSibling.innerText++
TotalPrice();
})

}


let btnMinus = document.getElementsByClassName('Minus');
for (let Minus of btnMinus) {
Minus.addEventListener('click', function() {
    if (Minus.previousElementSibling.innerText > 0){
Minus.previousElementSibling.innerText--}  
TotalPrice();
})
}

let deleteBtn = document.querySelectorAll('.delete');
    for (let i = 0; i < deleteBtn.length; i++) {
      deleteBtn[i].addEventListener('click', function () {
        deleteBtn[i].parentElement.parentElement.remove();
        totalPrice();
      });
    }

function TotalPrice() {
let Quantity = document.getElementsByClassName('quantity')
let Price = document.getElementsByClassName('Price')
let sum = 0
for (let i=0 ; i < Price.length ; i++) {
sum += Quantity[i].innerText * Price[i].innerText}
document.querySelector('.Total').innerHTML = sum
}


let Like = document.getElementsByClassName('fa fa-heart like')
for (let i = 0 ; i < Like.length ; i++) {
Like[i].addEventListener('click' , function(){
  if (Like[i].style.color === 'black') {
    Like[i].style.color = 'red';
  } else {
    Like[i].style.color = 'black';
  }
 }) 
}






    