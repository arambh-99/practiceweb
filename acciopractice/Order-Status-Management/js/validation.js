let invalidFirstName = document.getElementById('invalidFirstName');
let validFirstName = document.getElementById('validFirstName');
let invalidLastName = document.getElementById('invalidLastName');
let validLastName = document.getElementById('validLastName');
let invalidEmail = document.getElementById('invalidEmail');
let validEmail = document.getElementById('validEmail');
let invalidPhone = document.getElementById('invalidPhone');
let validPhone = document.getElementById('validPhone');
let invalidState = document.getElementById("invalidState");
let validState = document.getElementById("validState");
let invalidPassword = document.getElementById('invalidPassword');
let validPassword = document.getElementById('validPassword');
let passwordStrength = document.getElementById("passwordStrength")
let invalidConfirmPassword = document.getElementById('invalidConfirmPassword');
let validConfirmPassword = document.getElementById('validConfirmPassword');
let invalidtnc = document.getElementById('invalidtnc');
var passwordStored = ""
var emailStored = ""

const lookup = {
    'A': 'N', 'B': 'O', 'C': 'P', 'D': 'Q', 'E': 'R', 'F': 'S', 'G': 'T', 'H': 'U',
    'I': 'V', 'J': 'W', 'K': 'X', 'L': 'Y', 'M': 'Z', 'N': 'A', 'O': 'B', 'P': 'C', 'Q': 'D', 'R': 'E', 'S': 'F', 'T': 'G',
    'U': 'H', 'V': 'I', 'W': 'J', 'X': 'K', 'Y': 'L', 'Z': 'M',
    'a': 'n', 'b': 'o', 'c': 'p', 'd': 'q', 'e': 'r', 'f': 's', 'g': 't', 'h': 'u',
    'i': 'v', 'j': 'w', 'k': 'x', 'l': 'y', 'm': 'z', 'n': 'a', 'o': 'b', 'p': 'c',
    'q': 'd', 'r': 'e', 's': 'f', 't': 'g', 'u': 'h', 'v': 'i', 'w': 'j', 'x': 'k',
    'y': 'l', 'z': 'm', 
    '0': '5', '1': '6', '2': '7', '3': '8', '4': '9', '5': '0', '6': '1', '7': '2', '8': '3', '9': '4',
    '!': '#', '$': '%', '&': '+', '-': '@', '_': '~', '#': '!', '%': '$', '+': '&',
    '@': '-', '~': '_' 
}

const encode = (str) => {
    const lookupKeys = Object.keys(lookup)
    const lookupValues = Object.values(lookup)
    const codeArr = str.split("")
    let encodeArr = codeArr.map(codeArrChar => {
        let index = lookupValues.findIndex((element) => element === codeArrChar)
        return lookupKeys[index]
    })
    return encodeArr.join("")
}

const decode = (encodedstr) => {
    const codeArr = encodedstr.split("")
    let decodedArr = codeArr.map(codeArrChar => lookup[codeArrChar])
    return decodedArr.join("")
}

function validate(){
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let passwordValue = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;
    let tncCheckBox = document.getElementById("tncCheckBox").checked;
    let flag1 = false, flag2 = false, flag3 = false, flag4 = false, flag5 = false, flag6 = false, flag7 = false, flag8 = false

    if(firstName === ""){
        invalidFirstName.style.display = 'block'
        validFirstName.style.display = 'none'
        flag1 = false
    }
    else{
        invalidFirstName.style.display = 'none'
        validFirstName.style.display = 'block'
        flag1 = true
    }

    if(lastName === ""){
        invalidLastName.style.display = 'block'
        validLastName.style.display = 'none'
        flag2 = false
    }
    else{
        invalidLastName.style.display = 'none'
        validLastName.style.display = 'block'
        flag2 = true
    }

    if(email === "" || !email.includes("@") || !email.includes(".") || email.slice(email.lastIndexOf('.')).length < 3){
        invalidEmail.style.display = 'block'
        validEmail.style.display = 'none'
        flag3 = false
    }
    else{
        emailStored = email
        localStorage.setItem("emlStored", emailStored);
        invalidEmail.style.display = 'none'
        validEmail.style.display = 'block'
        flag3 = true
    }

    if(phone === "" || phone.length != 10 || Number(phone[0]) < 6){
        invalidPhone.style.display = 'block'
        validPhone.style.display = 'none'
        flag4 = false
    }
    else{
        invalidPhone.style.display = 'none'
        validPhone.style.display = 'block'
        flag4 = true
    }

    if(passwordValue.length < 8){
        passwordStrength.style.display = 'none'
        validPassword.style.display = 'none'
        invalidPassword.style.display = 'block'
        flag6 = false
    }
    else{
        passwordStored = encode(passwordValue)
        localStorage.setItem("pwdStored", passwordStored);
        passwordStrength.style.display = 'none'
        validPassword.style.display = 'block'
        invalidPassword.style.display = 'none'
        flag6 = true        
    }

    if(confirmPassword === decode(passwordStored) && passwordStored != ""){
        validConfirmPassword.style.display = 'block'
        invalidConfirmPassword.style.display = 'none'
        flag7 = true
    }
    else{
        validConfirmPassword.style.display = 'none'
        invalidConfirmPassword.style.display = 'block'
        flag7 = false
    }

    if (tncCheckBox === false) {
        invalidtnc.style.display = 'block'
        flag8 = false
    }
    else {
        invalidtnc.style.display = 'none'
        flag8 = true
    }    

  if(flag1 == true && flag2 == true && flag3 == true && flag4 == true && flag6 == true && flag7 == true && flag8 == true){
      alert("SignUp successful! Login now.")
      window.location.reload()
  }
}

const checkPwdStrength = () => {
  let passwordValue = document.getElementById("password");
    let inputPwd = passwordValue.value
    if(inputPwd.length < 5){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Weak"
        passwordStrength.style.color = 'red'
    }
    else if(inputPwd.length < 8){
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Moderate"
        passwordStrength.style.color = 'orange'
    }
    else{
        passwordStrength.style.display = 'block'
        passwordStrength.innerText = "Strong"
        passwordStrength.style.color = 'green'
    }
}

const loginValidate = () => {
  var passwordStored = localStorage.getItem("pwdStored");
  var emailStored = localStorage.getItem("emlStored");
  let loginEmail = document.getElementById('loginEmail').value;
  let loginPassword = decode(document.getElementById('loginPassword').value);
  let invalidLoginPassword = document.getElementById('invalidLoginPassword')
  let invalidLoginEmail = document.getElementById('invalidLoginEmail')
  console.log(emailStored)
    console.log(loginEmail)
    console.log(passwordStored)
    console.log(loginPassword)
  let flag = true
  if (loginEmail === "" || loginEmail != emailStored) {
       invalidLoginEmail.style.display = 'block'
       flag = false
  } 
  if (loginPassword === "" || loginPassword != passwordStored) {
      invalidLoginPassword.style.display = 'block'
      flag = false
  }
  if(flag === true){
      alert("Login successful!")
      window.location.reload()
  }
}

