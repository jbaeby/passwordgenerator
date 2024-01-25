//Create an array of A-Z
//Create an array of #'s and symbols all in one array?
//on Buttonclick store variable within password function
//Math.random + math.floor to retrieve random variables from # and array until 12
//Display password using textContent
let passwordPass = false
let pLength = 0
let passwordEl = document.getElementById("password-el")
let lengthEl = document.getElementById("length-el")
let passwordArray = ['A','B','C','D','E','F','G','H','I','J','K','L',
'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X','Y', 'Z','a','b','c', 
'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q','r','s','t', 
'u', 'v', 'w', 'x', 'y', 'z','1','2','3','4','5','6','7','9','0','!','@','#','$'
,'%','^','&','(','*',')','_','-','+','=']


function generatePassword(){
    let password = ""
    passwordEl.value = ""
    pLength = lengthEl.value
    for(let i = 0; i < pLength; i++){
        password += passwordArray[Math.floor(Math.random() * passwordArray.length)]
     }
     passwordEl.value = password
}

function passwordTest(){
    pLength = lengthEl.value
    if (pLength < 12){
        passwordPass = false
        alert("This password is less than 12 characters.")
        
    }
    else if(pLength >= 12){
        passwordPass = true
        generatePassword()
        
    }
    

}

function copyPassword(){
    passwordEl.select()
    navigator.clipboard.writeText(passwordEl.value)
    alert("Copied the text " + passwordEl.value)


}