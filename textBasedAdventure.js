const rls = require('readline-sync');

let player1 = "";
let player2 = "";



function playGame(){
    askNames();

    box = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
    let player = 1;
    let i = -1;
    let choice;
    let mark;

    do{
        board();
        
        player = (player % 2 ) ? 1 : 2;
        if(player == 1){
            choice = rls.question(`Player ${player}: ${player1} \nEnter a Number: `);
        }else{
            choice = rls.question(`Player ${player}: ${player2} \nEnter a Number: `);
        }
        
        mark = (player == 1) ? 'X' : 'O';

        if(choice == 1 && box[0] == '1'){
            box[0] = mark;
        }else if(choice == 2 && box[1] == '2'){
            box[1] = mark;
        }else if(choice == 3 && box[2] == '3'){
            box[2] = mark;
        }else if(choice == 4 && box[3] == '4'){
            box[3] = mark;
        }else if(choice == 5 && box[4] == '5'){
            box[4] = mark;
        }else if(choice == 6 && box[5] == '6'){
            box[5] = mark;
        }else if(choice == 7 && box[6] == '7'){
            box[6] = mark;
        }else if(choice == 8 && box[7] == '8'){
            box[7] = mark;
        }else if(choice == 9 && box[8] == '9'){
            box[8] = mark;
        }else{
            console.clear()
            console.log(`Invalid Move! Choose a Valid Move!\nTry Again:\n`);
            player -= 1;
        }

        i = checkWin();

        if( i === -1){
            player += 1;
        }

    }while(i == -1)

    board();

    if(i == 1){

        if(player == 1){
            console.log(`==> Player ${player}: ${player1} Wins`);

            rls.keyInYN(`Do you want to play again?`) ? playGame() : quitGame();
        }else{
            console.log(`==> Player ${player}: ${player2} Wins`);

            rls.keyInYN(`Do you want to play again?`) ? playGame() : quitGame();
        }
    
    }else{
        console.log(`==> Draw Game`);

        rls.keyInYN(`Do you want to play again?`) ? playGame() : quitGame();
    }

}

function quitGame(){
    console.log(`!!!Good Bye!!!`);

    process.exit();
}

function checkWin(){
    if(box[0] === box[1] && box[1] === box[2]){
        return 1;
    }else if(box[3] === box[4] && box[4] === box[5]){
        return 1;
    }else if(box[6] === box[7] && box[7] === box[8]){
        return 1;
    }else if(box[0] === box[3] && box[3] === box[6]){
        return 1;
    }else if(box[1] === box[4] && box[4] === box[7]){
        return 1;
    }else if(box[2] === box[5] && box[5] === box[8]){
        return 1;
    }else if(box[0] === box[4] && box[4] === box[8]){
        return 1;
    }else if(box[2] === box[4] && box[4] === box[6]){
        return 1;
    }else if(box[0] != '1' && box[1] != '2' && box[2] != '3' 
            && box[3] != '4' && box[4] != '5' && box[5] != '6' 
            && box[6] != '7' && box[7] != '8' && box[8] != '9'){
        return 0;
    }else{
        return -1;
    }
}


function askNames(){
    console.clear();
    console.log(`\t!!!!!!!!WELCOME TO TIC TAC TOE!!!!!!!!\n`);
    console.log("\t!!!!!!This Game Will be Played by Two Players!!!!!!\n");
    player1 = rls.question(`Enter Player 1 Name: `);
    player1 = player1.toUpperCase();
    player2 = rls.question(`\nEnter Player 2 Name: `);
    player2 = player2.toUpperCase();
}


function board(){

    if(player1 !== "" & player2 !== ""){
        console.log(`\n\tTic Tac Toe\n`);
        console.log(`\t${player1}  (X)  -  ${player2}  (O)\n`);
    }else{
        console.log(`\n\tTic Tac Toe\n`);
        console.log(`\tPlayer 1  (X)  -  Player 2  (O)\n`)
    }
    
    console.log(`\t\t_____ _____ _____ \n`);
    console.log(`\t\t|  ${box[0]} |   ${box[1]} |  ${box[2]}  |`);

    console.log(`\t\t_____ _____ _____ \n`);
    console.log(`\t\t|  ${box[3]} |   ${box[4]} |  ${box[5]}  |`);

    console.log(`\t\t_____ _____ _____ \n`);
    console.log(`\t\t|  ${box[6]} |   ${box[7]} |  ${box[8]}  |`);

    console.log(`\t\t_____ _____ _____ \n\n`);

}

playGame();

