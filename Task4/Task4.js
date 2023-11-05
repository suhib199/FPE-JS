let x = parseFloat(prompt("Define x value"));
let y = parseFloat(prompt("Define y value"));

if (isNaN(x) || isNaN(y)) {
    alert("Invalid input");
    console.log("Invalid input,Plz try again");
    document.write("Invalid input,Plz try again");
} else {
    if (x > y) {
        alert("Hello World");
        console.log("Hello World");
        document.write(" Hello World");
    } else {
        alert("Goodbye");
        console.log("Goodbye");
        document.write("Goodbye");
    }
}