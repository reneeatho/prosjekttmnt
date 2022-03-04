function attack(i){
    var playerHealth = Math.floor(Math.random() * 10);
    var bossHealth = Math.floor(Math.random() * 10);

    if (model.gameOver == true) {
        return;
    }
    if(model.boss[i].health == 0){
        return;
    }
    if(model.player[i].health == 0){
        return;
    }
    
    if (playerHealth <= 5) {
        model.boss[i].health -= model.player[i].damage
    } else if (playerHealth >= 7) {
        model.boss[i].health -= model.player[i].damage * 7
    }

    if (bossHealth <= 7) {
        model.player[i].health -= model.boss[i].damage
    } else if (bossHealth >= 9) {
        model.player[i].health -= model.boss[i].damage * 5
    }

    if (model.player[i].health <= 5 || model.boss[i].health <= 5 ) {
        model.gameOver = true;
    }
     if (model.player[i].health <= 1) {
        alert ('Du tapte!');
    }
    if (model.boss[i].health <= 1) {
        alert ('Du vant!');
    }
    if (model.boss[i].health <=5 && model.player[i].health <= 5){
        alert ('Det ble uavgjort, prøv igjen!');
    }
    show();
}
function reset(i) {
    model.gameOver = false;
    model.boss[i].health = 100;
    model.player[i].health = 100;
    show();
}