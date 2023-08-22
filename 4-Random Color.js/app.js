const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn');
const color = document.querySelector(".color");

btn.addEventListener('click', function(){
    
    //Get random number between 0 and 3 form 'colors' array variable
    const randomNumber = getRandomNumber();

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
})

//Function to generate random number between 0 and 3
function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}