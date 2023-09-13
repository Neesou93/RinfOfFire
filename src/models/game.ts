export class Game {
    public players: string[] = [];
    public stack: string[] = [];
    public playedCards: string[] = [];
    public currentPlayer: number = 0;

    constructor(){
        let card_names = ['ace_','clubs_','diamonds_','hearts_']
        for(let i=0; i < card_names.length; i++){
            let card_name = card_names[i];
            for (let j = 1; j < 14; j++) {
                this.stack.push(card_name+j);
            }
            
        }
        shuffle(this.stack)
        
    }
}

function shuffle(array:string[]) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex > 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }