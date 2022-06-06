function gamewin(user, comp){
    if(comp === user){ 
        prompt("This game is a tie");
    }
    else if (comp === 'r'){
        if(user === 'p'){
            return false;
        }
        else if (user === 's'){
            return true;
        }
    }

    else if (comp === 'p'){
        if(user === 's'){
            return false;
        }
        else if (user === 'r'){
            return true;
        }
    }

    else if (comp === 's'){
        if(user === 'r'){
            return false;
        }
        if(user === 'p'){
            return true;
        }
    }
}

var user = prompt("Your Turn: Rock(r) Paper(p) or Scissor(s)?");
var rand= Math.random(1,3)
if(rand === 1){
    comp = 'r'
}
else if (rand === 2){
    comp = 'p'
}
else{
    comp = 's'
}

var final = gamewin(comp, user)

if(final === null){
    prompt("This game is a tie")
}
else if (final === true){
    prompt("you win")
}
else{
    prompt("you lose")
}