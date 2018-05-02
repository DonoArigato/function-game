"use strict"; //START GAME


function startGame(play){
   play = prompt("Would you like to play a game?");
  if(play === "yes") {
    let user = prompt("Enter your name");
    startCombat(user);
  } else {
      console.log("Why not??")
  
    }
    let damage = function(){
      return Math.floor(Math.random() * 5) + 1;
    }; 

      let Combat =function(){
        let userHealth = 40;
        let grantHealth = 10;
        let userWins = 0;
        userHealth -= damage();
        grantHealth -= damage();
      
         while (userHealth > 0 && grantHealth > 0) {
          let option =prompt("Would you like to attack or quit?");
          if( option.toLowerCase() === "attack") {
            grantHealth = grantHealth -getDamage();
            userHealth = userHealth - getDamage();
            console.log(`grant health is ${grantHealth}`);
            console.log(`donovan health is ${userHealth}`);
              if (grantHealth <= 0 && userWins < 3 ) {
                userWins ++;
                grantHealth = 10;
                console.log(`${user} has won: ${userwins};`)
                  if (userHealth <= 0) {
                      grantWins += 1;
                      console.log("Grant wins!");
                      break;
                    }
                
                    if (userWins === 3) {
                      console.log(`${user} wins!`);
                      break;
                    }
                    
                    } else if (option.toLowerCase() === "quit") {
                      console.log("Thanks for playing!");
                      break;
                     }
                      }
                     }
                    
                    startCombat()}
                  
                         startGame()}
