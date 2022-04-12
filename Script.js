const message = document.querySelector('.message');
const input = document.querySelector('#inp');
const btn = document.querySelector('.btn');
const emoji = document.querySelector('.emoji');
var play = false;
var jumbleword = "";
var realword = "";

const randomarray = () => {
    let newword = Math.floor(Math.random() * arr.length);
    jumbleword = randomstring(arr[newword]);
    realword = arr[newword];
}

const randomstring = (jumblestr) => {
    jumblestr = jumblestr.split('');
    for(let i = jumblestr.length - 1; i > 0; i--){
        let j = Math.floor(Math.random() * (i + 1));
        let temp = jumblestr[i];
        jumblestr[i] = jumblestr[j];
        jumblestr[j] = temp;
    }
    jumblestr = jumblestr.join("");
    message.innerText = `Guess The Word - ${jumblestr}`;
    return jumblestr;
}

btn.addEventListener('click', () => {
    emoji.innerText = '🤪';
    if(!play){
        btn.innerText = "GUESS";
        randomarray();
        play = true;
    }
    else{
        if(input.value.toLowerCase() == realword){
            message.innerText = `Great...You Guessed it correct :) It's - ${realword}`;
            btn.innerText = "TRY NEXT";
            emoji.innerText = '🥳';
            play = false;
            input.value = "";
        }
        else{
            message.innerText = `You Guessed Wrong :( ...Try again  - ${jumbleword}`;
            emoji.innerText = '☹️';
        }
    }
});