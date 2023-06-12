const cartBtn = document.querySelector('.card-button');

cartBtn.addEventListener('click', () => {cartBtn.classList.add('clicked');});

function handleClick() {
     console.log(cartBtn.textContent);
   }
   
cartBtn.addEventListener('click', handleClick);