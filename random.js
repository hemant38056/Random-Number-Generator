function generateNumber(){
    const randomNumber = Math.floor(Math.random() * 100) + 1;
    document.getElementById('number').textContent = randomNumber;
}

function reset(){
    document.getElementById('number').textContent = 0;
}