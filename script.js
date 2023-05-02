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

document.getElementById('Comparison-operator').onclick = function name(params) {
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

















document.getElementById('Clear').onclick = function () {
    document.getElementById('orignalstatements').innerHTML = ''
}

document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = ''
}