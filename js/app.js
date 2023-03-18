// Initialize a counter to 0
let counter = 0;
// Check to see if the counter is less than or equal to 50
while(counter <= 50) {
    // Log the counter to the console
    console.log(counter);
    // Add 1 to the counter so eventually the loop stops
    counter = counter + 1;
}

// Set the counter back to 0
counter = 0;
// Check to see if the counter is greater than or equal to -50
while(counter >= -50) {
    // Log the counter to the console
    console.log(counter);
    // Subtract 1 from the counter so eventually the loop stops
    counter = counter - 1;
}

// Set the counter back to 0
counter = 0;
// Check to see if the counter is less than or equal to 100
while(counter <= 100) {
    // Log the counter to the console
    console.log(counter);
    // Add 2 to the counter so we only see even numbers and eventually the loop stops
    counter = counter + 2;
}

let users = [`Bob`, `Alice`, `Becky`, `Albert`, `Dave`];
counter = 0;
while(counter < users.length) {
    console.log(users[counter]);
    counter = counter + 1;
}

let players = [`Lebron James`,`Dwayne Wade`,`Steph Curry`];
counter = 0;
while(counter < players.length) {
    console.log(players[counter]);
    counter = counter + 1;
}

let points = [30,23,35];
counter = 0;
while(counter < players.length) {
    console.log(`${players[counter]} has scored ${points[counter]} points`);
    counter = counter + 1;
}

let injured = [true,false,false];
counter = 0;
while(counter < players.length) {
    if(injured[counter] === false) {
        console.log(`${players[counter]} has scored ${points[counter]} points`);
    }
    counter = counter + 1;
}