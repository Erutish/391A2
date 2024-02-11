function getNewQuote(){
    var quotes=["The greatest glory in living lies not in never falling, but in rising every time we fall." ,
        "The way to get started is to quit talking and begin doing. ",
       " Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma  which is living with the results of other people's thinking." ,
        "The future belongs to those who believe in the beauty of their dreams.",
        "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
        "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
        "You may say I'm a dreamer, but I'm not the only one. I hope someday you'll join us. And the world will live as one.",
        "You must be the change you wish to see in the world." ,
        "Spread love everywhere you go. Let no one ever come to you without leaving happier." ,
        "The only thing we have to fear is fear itself." ]

    var author=["Nelson Mandela","Walt Disney","Steve Jobs","Eleanor Roosevelt","Oprah Winfrey","James Cameron","John Lennon","Mahatma Gandhi","Mother Teresa","Franklin D. Roosevelt",]

    var random_quote = Math.floor(Math.random() * quotes.length);
    document.getElementById("quote_text").innerText = '"' +quotes[random_quote] + '"';
    document.getElementById("quote_author").innerText = author[random_quote];

    document.getElementById("quote").style.backgroundColor = "#DED0B6";
    document.getElementById("quote").style.borderColor = "#DED0B6";
    document.getElementById("quote_text").style.color = "#fff";
    document.getElementById("quote_author").style.color = "#fff";
    document.getElementById("quote_icon").style.color = "#fff";
    document.getElementById("quote_text").style.fontFamily = "Poor Story";
    document.getElementById("quote_text").style.fontWeight = "serif";        
}
getNewQuote();
// Creating buttons to change color

function red() {
    console.log("Clicked Red")
    document.getElementById("quote").style.backgroundColor =  "#6D2932";
    document.getElementById("quote").style.borderColor = "#561C24";
    document.getElementById("quote_text").style.color = "#E8D8C4";
    document.getElementById("quote_author").style.color = "#C7B7A3";
    document.getElementById("quote_icon").style.color = "#C7B7A3";
    document.getElementById("quote_text").style.fontFamily = "Poor Story";
    document.getElementById("quote_text").style.fontWeight = "cursive";
}
function Green() {
    console.log("Clicked Blue")
    document.getElementById("quote").style.backgroundColor = "#4F6F52";
    document.getElementById("quote").style.borderColor = "#113946";
    document.getElementById("quote_text").style.color = "#E1F0DA";
    document.getElementById("quote_author").style.color = "#D4E7C5";
    document.getElementById("quote_icon").style.color = "#D4E7C5";
    document.getElementById("quote_text").style.fontFamily = "Poor Story";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}
function violate() {
    console.log("Clicked Yellow")
    document.getElementById("quote").style.backgroundColor = "#393053";
    document.getElementById("quote").style.borderColor = "#18122B";
    document.getElementById("quote_text").style.color = "#BFACE2";
    document.getElementById("quote_author").style.color = "#654E92";
    document.getElementById("quote_icon").style.color = "#654E92";
    document.getElementById("quote_text").style.fontFamily = "Poor Story";
    document.getElementById("quote_text").style.fontWeight = "serif";
}
function pink() {
    console.log("Clicked Pink")
    document.getElementById("quote").style.backgroundColor = "#944E63";
    document.getElementById("quote").style.borderColor = "#910A67";
    document.getElementById("quote_text").style.color = "#FFE7E7";
    document.getElementById("quote_author").style.color = "#CAA6A6";
    document.getElementById("quote_icon").style.color = "#CAA6A6";
    document.getElementById("quote_text").style.fontFamily = "Poor Story";
    document.getElementById("quote_text").style.fontWeight = "sans-serif";
}

// convvertor

const converterinput = document.getElementById("converter_input");
converterinput.addEventListener("keyup", function(event) {
    if (event.key === 'Enter') {
        convert();
    }
});
function convert(){
    var input = document.getElementById("converter_input").value;
  
    var unit = document.getElementById("converter_unit").value;

    if (unit == "lbtokg"){
        var output = input * 0.45359;
        document.getElementById("converter_result").innerText = output + " KG";
    }
    else{
        var output = input * 2.20462;
        document.getElementById("converter_result").innerText = output + " LB";
    }
}


// Calculator

const calculatorinput = document.getElementById("calc-value");
function calc() {
    var calcvalue = document.getElementById("calc-value").value;
    calcvalue = calcvalue.replace(/\s+/g, '')
    calculateArray = calcvalue.split(',');
    calculateArray = calculateArray.filter(n => n);
    Max();
    Min();
    Sum();
    Reverse();
    setTimeout(calc, 100);
}
function Max() {
    var maxvalue = Math.max.apply(null, calculateArray);
    if (maxvalue == "-Infinity"){
        maxvalue = 0;
    }
    document.getElementById("max").innerHTML = maxvalue;
}
function Min() {
    var minvalue = Math.min.apply(null, calculateArray);
    if (minvalue == "Infinity"){
        minvalue = 0;
    }
    document.getElementById("min").innerHTML = minvalue;
}
function Sum() {
    var sum = 0;
    for (var i = 0; i < calculateArray.length; i++) {
        sum += parseFloat(calculateArray[i]);
    }
    document.getElementById("sum").innerHTML = sum;
    var average = sum / calculateArray.length;
    if (isNaN(average) === true){
        average = 0;
    }
    document.getElementById("average").innerHTML = average;
}
function Reverse() {
    calculateArray.reverse();
    for (var i = 0; i < calculateArray.length; i++) {
        calculateArray[i] = ` ${calculateArray[i]}`;
    }
    document.getElementById("reverse").innerHTML = calculateArray;
}

// magic

function cleartext() {
    document.getElementById("magic-input").value = "";
    console.log("Cleared Magic TextArea")
}
function capitalizetext() {
    var magicinput = document.getElementById("magic-input").value;
    if (document.getElementById("capitalize-button").value == "NO"){
        document.getElementById("magic-input").value = magicinput.toUpperCase();
        document.getElementById("capitalize-button").value = "YES";
        console.log("Converted to Uppercase characters!")
    }
    else{
        document.getElementById("magic-input").value = magicinput.toLowerCase();
        document.getElementById("capitalize-button").value = "NO";
        console.log("Converted to Lowercase characters!")
    }
}

function sortLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.sort();
    for (var i = 0; i < magicArray.length; i++) {
        if(i == magicArray.length-1){
            newmagicinput += magicArray[i];
        }
        else{
            newmagicinput += magicArray[i]+"\n";
        }
        // debugger
    }
    document.getElementById("magic-input").value = newmagicinput;
    console.log("Sorted Lines!")
}
function reverseLines() {
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.reverse();
    for (var i = 0; i < magicArray.length; i++) {
        if(i == magicArray.length-1){
            newmagicinput += magicArray[i];
        }
        else{
            newmagicinput += magicArray[i]+"\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
    console.log("Reversed Lines!")
}
function stripBlank(){
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    var newmagicarray = []
    // Remove the front spaces of any lines
    magicArray.forEach((magicline) => {
        if (magicline === ""){ 
            return
        }
        newmagicinput += magicline.trim() + "\n";
    })


    document.getElementById("magic-input").value = newmagicinput;
    console.log("Stripped Blank Lines!")
}
function addLineNo(){
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    for (var i = 0; i < magicArray.length; i++) {
        if(i == magicArray.length-1){
            newmagicinput += (i+1) + ") " + magicArray[i];
        }
        else{
            newmagicinput += (i+1) + ") " + magicArray[i] + "\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
    console.log("Added Line Numbers!")
}
function shuffleLines(){
    var magicinput = document.getElementById("magic-input").value;
    var magicArray = magicinput.split("\n");
    var newmagicinput = "";
    magicArray.sort(function(a, b){return 0.5 - Math.random()});
    for (var i = 0; i < magicArray.length; i++) {
        if(i == magicArray.length-1){
            newmagicinput += magicArray[i];
        }
        else{
            newmagicinput += magicArray[i]+"\n";
        }
    }
    document.getElementById("magic-input").value = newmagicinput;
    console.log("Shuffled Lines!")
}