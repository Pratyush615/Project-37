class Quiz {
    constructor(){}
    
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
    async start(){
        if(gameState === 0){
            contestant = new Contestant();
            var contestantCountRef = await database.ref("contestantCount").once("value");
            if(contestantCountRef.exists()){
                contestantCount = contestantCountRef.val();
                contestant.getCount();
            }
            question = new Question();
            question.display();
        }
    }
}
/*
Write a condition to check if gameState is 0.
Inside the if condition, create an object for the Contestant class.
Write code to check if any contestant already exists in the database.
Create an object for Question class and call its display( ).


*/