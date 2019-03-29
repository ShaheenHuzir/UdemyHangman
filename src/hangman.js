class Hangman{ 
    constructor(word,guesses){
        this.word=word.toLowerCase().split("");
         this.guesses= guesses;
         this.guessedL=[];
         this.status="playing";
        }
    get guessWord(){
               let puzzle=" ";
               this.word.forEach(element => {
               if(this.guessedL.includes(element)||this.guessedL.includes(" ")){
                        puzzle+=element;
                }
               else{
                        puzzle+="*";
                   }
                });
                return puzzle;
        }

    takeGuess(guess){
            guess=guess.toLowerCase();
              let badGuess= !this.word.includes(guess);
             let dupGuess= !this.guessedL.includes(guess);
             if(this.status==="playing")
               { if(dupGuess)
                    { this.guessedL.push(guess); }      
         if(badGuess&&dupGuess)
                    { this.guesses--;}
     
               } 
    
            this.keepStatus();
        }
    
    keepStatus(){ 
                  let finished= this.word.every((item)=>{return this.guessedL.includes(item)});
                if(this.guesses===0)
                  {this.status="failed";}
                else if(finished){
                           this.status="finished";
                        }
                else
                    {
                        this.status="playing";
                        }
                 return this.status;
                }
    get Status(){
                if(this.status==="playing"){
                return `No of guesses left is ${this.guesses}`;
                }
                else if(this.status==="failed"){
                  return `You have failed. The word is ${this.word.join("")}`}
    else if(this.status=="finished"){ 
        return `you have guessed the correct word`; }
        }
    }

    export {Hangman as default}