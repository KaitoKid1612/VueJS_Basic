new Vue({
    el: '#app',
    data: {
        playerHealth: 100,
        monsterHealth: 100,
        gameIsRunning: false,
        turns: []
    },
    methods: {
        startNewGame: function() {
            this.gameIsRunning = true;
            this.playerHealth = 100;
            this.monsterHealth = 100;
            this.turns = [];
        },
        attack: function() {
            //Monster
            //CheckOptions
            if(this.checkPlayerOptions()){
                return;
            }
            damage = this.inputDamage(4, 10);
            this.monsterHealth -= damage;
            this.turns.unshift({
                isPlayer: true,
                textLogs: 'Player hit Monster for ' + damage
            })
            //Player
            this.monsterAttacks();
        },
        specialAttack: function() {
            if(this.checkPlayerOptions()){
                return;
            }
            damage = this.inputDamage(10, 20);
            this.turns.unshift({
                isPlayer: true,
                textLogs: 'Player hit Monster for ' + damage
            })
            this.monsterHealth -= damage;
            //Player
            this.monsterAttacks();
        },
        heal: function() {
            if(this.playerHealth <= 90) {
                this.playerHealth += 10;
                this.turns.unshift({
                    isPlayer: true,
                    textLogs: 'Player heals 10'
                })
            } else {
                this.playerHealth = 100;
            }

            
        },
        giveUp: function() {
            confirm('Do you want to give up?');
            this.gameIsRunning = false;
            this.startNewGame();
        },
        monsterAttacks: function() {
            damage =this.inputDamage(5, 12);
            this.playerHealth -= damage;
            this.turns.unshift({
                isPlayer: false,
                textLogs: 'Monster hit Player for ' + damage
            })
            this.checkPlayerOptions();
        },
        inputDamage: function(minDamage, maxDamage) {
            return Math.max(Math.floor(Math.random() * maxDamage) + 1, minDamage);
        },
        checkPlayerOptions: function() {
            if(this.monsterHealth <= 0) {
                if(confirm('You won !!! Do you want new game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            } else if (this.playerHealth <= 0) {
                if(confirm('You lost !!! Do you want new game?')) {
                    this.startNewGame();
                } else {
                    this.gameIsRunning = false;
                }
                return true;
            }
            return;
        }
    }
})