const katzDeli = []

function takeANumber(line, name){
var position = line.length + 1;
const deliLine = `Welcome, ${name}. You are number ${position} in line.`;
line.push(name);
return deliLine;
}
    
 function nowServing(line){
     var deliLine;
    if (line.length === 0){
    deliLine = "There is nobody waiting to be served!"
    }
    else{
    deliLine = `Currently serving  ${line[0]} .`;
    line.shift();
    }
    return deliLine;
    }
    
function line(position){
    var deliLine;
    if (position.length === 0){
    deliLine = "The line is currently empty."
    }
    else{
    deliLine = "The line is currently: "
    for(var i = 0; i < position.length ; i++){
    if (i === 0){
    
    deliLine = deliLine+ (i+1) + ". " + position[i];
    }
    else{
    deliLine = deliLine + ", " + (i+1) + ". " + position[i];
    }
    }
    }
    return deliLine;
    }

takeANumber(katzDeli, "Ada") //=> Welcome, Ada. You are number 1 in line.
takeANumber(katzDeli, "Grace") //=> Welcome, Grace. You are number 2 in line.
takeANumber(katzDeli, "Kent") //=> Welcome, Kent. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Ada 2. Grace 3. Kent"

nowServing(katzDeli) //=> "Currently serving Ada."

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent"

takeANumber(katzDeli, "Matz") //=> Welcome, Matz. You are number 3 in line.

line(katzDeli) //=> "The line is currently: 1. Grace 2. Kent 3. Matz"

nowServing(katzDeli) //=> "Currently serving Grace."

line(katzDeli) //=> "The line is currently: 1. Kent 2. Matz"