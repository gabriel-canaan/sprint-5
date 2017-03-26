// No1
for (var line = "#"; line.length < 8; line += "#")
    console.log(line);

//No2
//1-100
for (var n = 1; n < 101; n += 1) {
    // 3 & 5 buzzfiz
    if (n % 3 === 0) {
        if (n % 5 === 0) {
            console.log("BuzzFizz");
            //just 3 buzz
        } else {
            console.log("Buzz")//just 5 fizz;
        }
    } else if (n % 5 === 0) {
        console.log("Fizz");
        //the rest
    } else {
        console.log(n);
    }
}

// No3
// I didn't get this one. I'll keep on at it but I'm not just going to paste  the answer
