var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;
var playerMoney = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.")

    if (promptFight === "FIGHT"|| promptFight ==='fight'){

        window.alert("Welcome to Robot Gladiators!");
        enemyHealth -= playerAttack;
        console.log(playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + ".");
        
        if (enemyHealth <= 0) {
            window.alert(enemyName + " has died!");
        }
        else {
            window.alert(enemyName + " still has " + enemyHealth + " health left.");
        };
        
        playerHealth -= enemyAttack;

        console.log(enemyName +" has attacked " + playerName + ". " + playerName + " now has " + playerHealth+ ".")
        
        if (playerHealth <= 0) {
            window.alert(playerName + " has died!");
        }
        else {
            window.alert(playerName + " still has " + playerHealth + " health left.")
        };
    }
    else if(promptFight === "SKIP"|| promptFight === "skip"){
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
        
        if (confirmSkip){
            window.alert(playerName + " has chosen to skip the fight!");
            playerMoney -= 2;
        }
        else{
            fight();
        };
    }
    else{
        window.alert("You need to choose a valid option. Try again!");
    }
};

fight()