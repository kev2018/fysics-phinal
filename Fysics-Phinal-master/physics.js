const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');


const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});

terminal.question("What type of equation are you looking for?(motion or energy)",function(str){
    if(str == "motion"){
        terminal.question("What are you looking for?(d,v,a,t)",function(str)){
            if(str == 'd'){
                terminal.question("What do you have?",function(str)){}
            }
            else if(str =='v'){
                terminal.question("What do you have?",function(str)){}
            }
            else if(str == 'a'){
                terminal.question("What do you have?",function(str)){}
            }
            else if(str == 't'){
                terminal.question("What do you have?",function(str)){}
            }
        }
    }
});
