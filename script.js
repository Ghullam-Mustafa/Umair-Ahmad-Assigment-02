let Names = prompt("Enter Your Name");
document.getElementById('username').innerHTML = Names


// write a program Concatinat Some Strings 


document.getElementById('Concatinat').onclick = function ()  {
    let firstName = prompt("Enter First Name");
    let lastName = prompt("Enter Last Name");
    let fullName = firstName + " " + lastName;
    let name = fullName
    console.log(fullName);
    document.getElementById('orignalstatements').innerHTML = ` First Name => ${firstName} , Last Name => ${lastName}`;
    document.getElementById('output').innerHTML =  name
}

// Writa a program Ask Name From User 

document.getElementById('Ask-Name-From-User').onclick = function () {
    let userfirstName = prompt("Enter First Name");
    let userLastName = prompt("Enter Last Name")
    let userName = userfirstName + " " + userLastName
    document.getElementById('orignalstatements').innerHTML = userName ;
}


// writ a program for comparissin operator
document.getElementById('Comparison-operator').onclick = function () {
    alert("Enter numbers first number is greater is true our falus");
    let number1 = +prompt("Enter First Number");
    let number2 = +prompt("Enter Second Number");
    let Result = number1 >= number2;
    if (number1 >= number2) {
        document.getElementById('orignalstatements').innerHTML = `First number ${number1} and Second number ${number2} , ${number1} >= ${number2}`;
        document.getElementById('output').innerHTML = `Result is ${Result}`
    } else {
        document.getElementById('orignalstatements').innerHTML = `First number ${number1} and Second number ${number2} , ${number1} >= ${number2}`;
        document.getElementById('output').innerHTML = `Result is ${Result}`
    }
}
 



// write a program if else if
document.getElementById('if-else-if').onclick = function name(params) {
    alert("Enter numbers to checks first number greater than equal or not ")
    let firstNumber = +prompt("Enter first number ");
    let secondNumber = +prompt("Enter second number ");
    let result = firstNumber >= secondNumber;
    let result2 = firstNumber >= secondNumber;
    if (firstNumber >= secondNumber) {
        document.getElementById('orignalstatements').innerHTML= `First number is this => ${firstNumber} and Second number is this => ${secondNumber} , ${firstNumber} >= ${secondNumber} `
        document.getElementById('output').innerHTML = `greater number is ${firstNumber}`
    } 
    else if (firstNumber <= secondNumber){
        document.getElementById('orignalstatements').innerHTML= `First number is this => ${firstNumber} and Second number is this =>   ${secondNumber} , ${firstNumber} =< ${secondNumber}` ;
        document.getElementById('output').innerHTML = `Greater number is ${secondNumber}`
    }
    else{
        document.getElementById('orignalstatements').innerHTML = "Enter valit number"
    }
}


//  write a program Testing-set-of-condition

document.getElementById('Testing-set-of-condition').onclick = function () {
    let age = +prompt("Enter your age");
    let weight = +prompt("Enter your weight")
    if (age >= 18 && weight <= 70) {
        document.getElementById('orignalstatements').innerHTML = `Your age is this ${age} and your weight is this ${weight}`
        document.getElementById('output').innerHTML = `You're a smart man`
    }
    else if (age >= 18 && weight >= 70) {
        document.getElementById('orignalstatements').innerHTML = `Your age is this ${age} and your weight is this ${weight}`
        document.getElementById('output').innerHTML = `You're a fat guay` 
    }
    else{
        document.getElementById('orignalstatements').innerHTML = `Your age is this ${age} and your weight is this ${weight}`
        document.getElementById('output').innerHTML = `You're a baby`
    }
}


// write a js programe if-statement-nested

document.getElementById('if-statement-nested').onclick = function () {
    let Age = +prompt("Enter your age");
    
    if (Age >= 18) {
            let Weight = +prompt("Enter your weight");
            if (Weight <= 70) {
                document.getElementById('orignalstatements').innerHTML = `Your age is this ${Age} and your weight is this ${Weight}`
            document.getElementById('output').innerHTML = `You're a smart man`
            }
        else{
            document.getElementById('orignalstatements').innerHTML = `Your age is this ${Age} and your weight is this ${Weight}`
             document.getElementById('output').innerHTML = `You're a fat guay`
        }
    }
    else{ document.getElementById('orignalstatements').innerHTML = `Your age is this ${Age} `
    document.getElementById('output').innerHTML = `You're a baby`}
}
















document.getElementById('Clear').onclick = function () {
    document.getElementById('orignalstatements').innerHTML = ''
}

document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = ''
}