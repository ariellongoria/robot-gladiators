var playerName = window.prompt("What is your robot's name?");
var playerHealth = 100;
var playerAttack = 10;

console.log(playerName, playerHealth, playerAttack);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack = 12;

var fight = function() {
    window.alert("Welcome to Robot Gladiators!");
    enemyHealth -= playerAttack;
    console.log(playerName + " has attacked " + enemyName + ". " + enemyName + " now has " + enemyHealth + ".");
    
    if (playerHealth <= 0) {
        window.alert(playerName + " has died!");
    }
    else {
        window.alert(playerName + " still has " + playerHealth + " health left.")
    }

    playerHealth -= enemyAttack;
    console.log(enemyName +" has attacked " + playerName + ". " + playerName + " now has " + playerHealth+ ".")

    if (enemyHealth <= 0) {
        window.alert(enemyName + " has died!");
    }
    else {
        window.alert(enemyName + " still has " + enemyHealth + " health left.");
    }
};

fight()