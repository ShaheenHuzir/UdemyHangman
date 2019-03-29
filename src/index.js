import uuidv4 from 'uuid/v4'
import Hangman from './hangman.js'
import getPuzzle from './requests.js'
import validator from 'validator'
let guessDisp= document.querySelector("#puzzle");
let guessCount= document.querySelector("#guesses")
let word1;
console.log(uuidv4());
console.log(validator.isEmail("shaheenhuz10@gmail.com"))
let render=()=>{
guessCount.textContent=word1.Status;
guessDisp.innerHTML=' ';
word1.guessWord.split("").forEach((item)=>{
     let eachLetter= document.createElement("span");
     eachLetter.textContent= item;
     document.querySelector("#puzzle").appendChild(eachLetter);
})
}


 window.addEventListener("keypress",function(e){
    let guess= String.fromCharCode(e.charCode);
     word1.takeGuess(guess);
      render();
})

const mycountryCode = "AU";

const startGame=async()=>{
    let puzle= await getPuzzle();
    word1=new Hangman(puzle,5);
    render();
}

startGame();
document.querySelector("#reset").addEventListener('click',startGame);



giveCountry(mycountryCode).then(
    (myCountry)=>{
        console.log(myCountry.name);
    },
   (err)=> {
    console.log(err); }
);

getLocation().then((data)=>{
    return giveCountry(data.country);
}).catch(err=>{
    throw Error("go to hell!")
}).then((country)=>{
    console.log(country.name);
})

getCountry().then((data)=>{
    console.log(data)
}).catch(err=>{
    throw Error ("not good enough")
});