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
function end(){
  terminal.close();
}

terminal.question("What type of equation are you looking for?(motion or energy)",function(str){
  str.toLowerCase(str);
  if(str == "motion"){
    terminal.question("What are you looking for?(d,v,a,t)",function(str){
      str.toLowerCase(str);
      if(str == 'd'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          if(Number.isNaN(c[2])==false){
            console.log('The distance is '+motion.distance2(c[2],c[3],c[1]));
            end();
          }
          else{
            console.log('The distance is '+motion.distance(c[1],c[3]));
            end();
          }
        });
      }
      else if(str =='v'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          if(Number.isNaN(c[2])==false){
            console.log('The velocity is '+motion.velocity2(c[0],c[2],c[3]));
            end();
          }
          else{
            console.log('The velocity is '+motion.velocity(c[0],c[3]));

            end();
          }
        });
      }
      else if(str == 'a'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          console.log('The acceleration is '+motion.acceleration(c[0],c[1],c[3]));
          end();
        });
      }
      else if(str == 't'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          console.log('The time is '+motion.time(c[0],c[1]));
          end();
        });
      }
      else{
        console.log('your imput wasnt recognized.');
        end()
      }
    });
  }
  else if(str =='energy'){
    str.toLowerCase(str);
    terminal.question("What are you looking for?(ke,v,m)",function(str){
      if(str == 'ke'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          console.log('The kineticEnergy is '+energy.kineticEnergy(c[4],c[1]));
          end();
        });
      }
      else if(str == 'v'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          console.log('The velocity is '+energy.velocity3(c[5],c[4]));
          end();
        });
      }
      else if(str == 'm'){
        printOptions();
        terminal.question("...",function(str){
          let c = convertToArray(str);
          console.log('The mass is '+energy.mass(c[5],c[1]));
          end();
        });
      }
      else{
        console.log('your imput wasnt recognized.');
        end()
      }
    });
  }
  else{
    console.log('your imput wasnt recognized.');
    end()
  }
});
