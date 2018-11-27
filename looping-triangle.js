/* Outputs:
    #
    ##
    ###
    ####
    #####
    ######
    #######
*/

// My implementation
let numberOfFloors = 7;
let floor = "";

for (let counter = 1; counter <= numberOfFloors; counter++) {
    floor += "#";
    console.log(floor);
}


console.log("");


// Solution
for (let floor = "#"; floor.length < 8; floor += "#") {
    console.log(floor);
}