var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

var enemyNames = ["Roborto", "Amy Android", "Robo Trumble"];
var enemyHealth = 50;
var enemyAttack = 12;

for(var i = 0; i < enemyNames.length; i++) {
    console.log(enemyNames[i]);
    console.log(i);
    console.log(enemyNames[i] + " is at " + i + " index.");
};

var fight = function(enemyName) {
    while(enemyHealth > 0 && playerHealth > 0){

        var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")
        
        if(promptFight === "SKIP"|| promptFight === "skip"){
            var confirmSkip = window.confirm("Are you sure you'd like to quit?");
            
            if (confirmSkip){
                window.alert(playerName + " has chosen to skip the fight!");
                playerMoney -= 10;
                console.log("playerMoney", playerMoney);
                break;
            };
        };
        enemyHealth -= playerAttack;
        console.log(playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + ".");
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
            playerMoney += 20;
            break;
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        };
        playerHealth -= enemyAttack;
        console.log(enemyName +" has attacked " + playerName + ". " + playerName + " now has " + playerHealth+ ".")
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
            break;
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        };
    }
};

for(var i = 0; i < enemyNames.length; i++) {
    if (playerHealth > 0){
        window.alert("Welcome to Robot Gladiators! Round " + (i+1));
        var pickedEnemyName = enemyNames[i];
        enemyHealth = 50;
        fight(pickedEnemyName);
    }
    else{
        window.alert("You have lost your robot in battle! Game Over!");
        break;
    }
};

//Game States
// "WIN" - Player robot has defeated all enemy-robots
//      * Fight all enemy-robots
//      * Defeat each enemy-robot
// "LOSE" - Player robot's health is zero or less