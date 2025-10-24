// Who is going to buy lunch?
function whosPaying(names) {
        //Write your code here.
    var names = ["Angela", "Ben", "Jenny", "Michael", "Chloe"];    
    var randomIndex = Math.floor(Math.random() * names.length);
    var randomName = names[randomIndex];
    console.log(randomName + " is going to buy lunch today!");
}
whosPaying();