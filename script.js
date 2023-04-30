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
















document.getElementById('Clear').onclick = function () {
    document.getElementById('orignalstatements').innerHTML = ''
}

document.getElementById('Clean').onclick = function () {
    document.getElementById('output').innerHTML = ''
}