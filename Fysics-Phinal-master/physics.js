const motion = require('./motion');
const energy = require('./energy');
const readline = require('readline');
const terminal = readline.createInterface({
    input:process.stdin,
    output:process.stdout
});
function printOptions(){
    console.log("\nEnter the variables you know in a comma list.");
    console.log("If you do not know a variable, then type n");
    console.log("distance,velocity,acceleration,time,mass,energy");
}

function convertToArray(strcma){
    strcma = strcma.split(',');
    for(let i=0;i<strcma.length;i++){
        strcma[i] = Number(strcma[i]);
    }
    return strcma;
}

terminal.question("What type of equation are you looking for?(motion or energy)",function(str){
     str.toLowerCase(str);
    if(str == "motion"){
        terminal.question("What are you looking for?(d,v,a,t)",function(str)){
            str.toLowerCase(str);
            if(str == 'd'){
                printOptions();
                terminal.question("...",function(c)){
                    convertToArray(c);
                    if(Number.isNan(c[2])=true){
                      console.log(motion.distance(c[1],c[3]));
                    }
                    else{
                      console.log(motion.distance2(c[2],c[3],c[1]));
                    }
                }
            }
            else if(str =='v'){
                printOptions();
                terminal.question("...",function(c)){
                    convertToArray(c);
                    if(Number.isNan(c[2])=true){
                      console.log(motion.velocity(c[0],c[3]));
                    }
                    else{
                      console.log(motion.velocity2(c[0],c[2],c[3]));
                    }
                }
            }
            else if(str == 'a'){
                printOptions();
                terminal.question("...",function(c)){
                    convertToArray(c);
                      console.log(motion.acceleration(c[0],c[1],c[3]));
                }
            }
            else if(str == 't'){
                printOptions();
                terminal.question("...",function())c{
                    convertToArray(c);
                    if(Number.isNan())
                    console.log(motion.);
                }
            }
        }
    }
    else{
      console.log('sorry your imput wasnt recognized');
    }
    if(str =='energy'){
        str.toLowerCase(str);
        terminal.question("What are you looking for?(ke,v,m)",function(str)){
            if(str == 'ke'){

            }
            else if(str == 'v'){

            }
            else if(str == 'm'){

            }
        }
    }
});
