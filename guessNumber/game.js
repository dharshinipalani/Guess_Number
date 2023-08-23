let number = document.querySelector("#number")
const sumbit = document.querySelector('#guess')

let randomNumber = Math.floor(Math.random() * 100) + 1;
let guessChance = 10;
sumbit.onclick = () =>{
    checkGuess(number.value);
}
const fireEmoji = '\uD83D\uDD25';
const sadEmoji = '\uD83D\uDE22';
const verySadEmoji = '\uD83D\uDE41';
const happyEmoji = '\uD83D\uDE00';


const Message = document.querySelector('.message');
const container = document.querySelector('.container');
const turn = document.querySelector('.turn');
const play_again = document.querySelector('#play-again');
play_again.style.display = 'none';
function checkGuess(n){
    
    if(guessChance >= 0){
        guessChance--;
        console.log(randomNumber);
        console.log(guessChance);
        if(n == randomNumber) {
            Message.textContent = `Hurray!! You won ${fireEmoji}`;
            container.style.display = 'none';
            turn.style.display = 'none';
            play_again.style.display = 'flex';
        }
        else{
        if( n < randomNumber) {
            Message.textContent = `Number you Guessed is lesser than the Random Number ${sadEmoji} try some greater number`;
            container.style.display = 'none';
            turn.style.display = 'none';
        }
        else {
            Message.textContent = `Number you Guessed is greater than the Random Number ${sadEmoji} try some lesser number`;
            container.style.display = 'none';
            turn.style.display = 'none';
        }
        setTimeout( () => {
            container.style.display = 'flex';
            turn.style.display = 'flex';
            Message.textContent = ``;
        },3000);
    }
    turn.textContent =`HEY YOU STILL LEFT WITH ${guessChance} CHANCES ${happyEmoji}`;
    }
    else{
        turn.style.display = 'none';
        container.style.display = 'none';
        Message.textContent = `Hey You Tried Your Best!! ${happyEmoji}!! Definetely you will guess next Game!!`;
        play_again.style.display = 'flex';
    }
    
}

play_again.onclick = () =>{
    randomNumber = Math.floor(Math.random() * 100) + 1;
    guessChance = 10;
    container.style.display = 'flex';
    Message.textContent = ``;
    play_again.style.display = 'none';    
}