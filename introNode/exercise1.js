//Node exercsise

//using the command line, create a file exercise.js
//inside the file write a function nnamed echo that takes 2 arguments: a string annd a number
//It should print out the string, number number of times

//add the 2 examples to the end of the file
//run the contents using node

function echo (text, num) {
    for (var i=0; i<num; i++) {
        console.log(text);
    }
}

echo("Echo!!!", 10);
echo("Tater Tots",3);
