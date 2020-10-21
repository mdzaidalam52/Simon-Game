document.addEventListener('click', start);

let level = 1;
let str = '';
let check_var = 0;

function start(){
    document.removeEventListener('click', start);
    play();
}


function play(){
    let num = Math.floor(Math.random() * 4);
    str += num;
    document.getElementById('level').innerHTML = 'Level ' + level;
    level++;
    show();
}

function show(){
    var i = 0;
    var id = setInterval(function(){
        switch(str[i]){
            case '0':
                document.getElementById('red').style.opacity=0.5;
                setTimeout(function(){
                    document.getElementById('red').style.opacity=1;
                    }, 500);
                break;
            
            case '1':
                document.getElementById('green').style.opacity=0.5;
                setTimeout(function(){
                    document.getElementById('green').style.opacity=1;
                    }, 500);
                break;
            
            case '2':
                document.getElementById('blue').style.opacity=0.5;
                setTimeout(function(){
                    document.getElementById('blue').style.opacity=1;
                    }, 500);
                break;
            
            case '3':
                document.getElementById('yellow').style.opacity=0.5;
                setTimeout(function(){
                    document.getElementById('yellow').style.opacity=1;
                    }, 500);
                break;
            
        }
        i++;
        if(i==str.length){
            clearInterval(id);
        }
    }, 600);

    player();
    
}

function player(){
    console.log("inside player");
    document.getElementById('red').addEventListener('click', red_check);
    document.getElementById('green').addEventListener('click', green_check);
    document.getElementById('blue').addEventListener('click', blue_check);
    document.getElementById('yellow').addEventListener('click', yellow_check);
}

function red_check(){
    console.log("inside redcheck");
    document.getElementById('red').style.opacity=0.5;
    setTimeout(function(){
    document.getElementById('red').style.opacity=1;
    }, 500);
    check('0');
    check_var++;
}

function green_check(){
    console.log("inside greencheck");
    document.getElementById('green').style.opacity=0.5;
    setTimeout(function(){
    document.getElementById('green').style.opacity=1;
    }, 500);
    check('1');
    check_var++;
}

function blue_check(){
    console.log("inside bluecheck");
    document.getElementById('blue').style.opacity=0.5;
    setTimeout(function(){
    document.getElementById('blue').style.opacity=1;
    }, 500);
    check('2');
    check_var++;
}

function yellow_check(){
    console.log("inside yellowcheck");
    document.getElementById('yellow').style.opacity=0.5;
    setTimeout(function(){
    document.getElementById('yellow').style.opacity=1;
    }, 500);
    check('3');
    check_var++;
}

function check(col){
    console.log("inside check(col)");
    if(col !== str[check_var]){
        console.log('wrong answer');
        document.getElementById('red').removeEventListener('click', red_check);
        document.getElementById('green').removeEventListener('click', green_check);
        document.getElementById('blue').removeEventListener('click', blue_check);
        document.getElementById('yellow').removeEventListener('click', yellow_check);
        level = 1;
        str = '';
        check_var = -1;
        document.getElementById('level').innerHTML='You Lost!\n Press on the Screen to restart the game';
        document.addEventListener('click', start);
    }else if(check_var === str.length-1){
        console.log("level finished");
        document.getElementById('red').removeEventListener('click', red_check);
        document.getElementById('green').removeEventListener('click', green_check);
        document.getElementById('blue').removeEventListener('click', blue_check);
        document.getElementById('yellow').removeEventListener('click', yellow_check);
        check_var = -1;
        play();
    }   
}