'use strict';
let user_mail = document.getElementById('sI-ml');
let user_pass = document.getElementById('sI-pW');
let signInBtnElement = document.getElementById('sIn-btn');
var currentName = '';
let users = [];
if (JSON.parse(localStorage.getItem('allUsers')) != null) {
    users = JSON.parse(localStorage.getItem('allUsers'));
}

signInBtnElement.addEventListener("click", function () {
    if (users.length != 0) {
        var not_found = true;
        for (let i = 0; i < allUsers.length; i++) {
            if (user_mail.value.toLowerCase() == allUsers[i].email && user_pass.value == allUsers[i].password) {
                signInBtnElement.setAttribute('href', './homePage.html');
                currentName = allUsers[i].fullName;
                localStorage.setItem('curName', currentName);
                not_found = false;
            }
        }
        if (not_found) {
            document.querySelector('.sI-msg').classList.remove('d-none');
        }
    }
    else {
        document.querySelector('.empty-msg').classList.remove('d-none');
    }
});













// 'use strict';
// let fN_sU_Element = document.getElementById('sU-fN');
// const fN_RegExp = /[a-z]{3,}/;
// let emailAddressElement = document.getElementById('sU-ml');
// const ml_RegExp = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// let passWordElement = document.getElementById('sU-pW');
// const pW_RegExp = /^(?=.*[0-9])(?=.*[A-Z])(?=.*[!@#$%_^&*])[a-zA-Z0-9!_@#$%^&*]{6,16}$/;
// let confirmPassWordElement = document.getElementById('sU-pWc');
// let signUpBtnElement = document.getElementById('sUP-btn');
// let user_mail = document.getElementById('sI-ml');
// let user_pass = document.getElementById('sI-pW');
// let signInBtnElement = document.getElementById('sIn-btn');
// let allUsers = [];
// var currentName = '';
// if (JSON.stringify(localStorage.getItem('allUsers')) != null) {
//     allUsers = JSON.parse(localStorage.getItem('allUsers'));
// }

// function addNewUser() {
//     let newUser = {
//         fullName: fN_sU_Element.value,
//         email: emailAddressElement.value,
//         password: passWordElement.value,
//     }
//     allUsers.push(newUser);
//     localStorage.setItem('allUsers', JSON.stringify(allUsers));
// }


// signInBtnElement.addEventListener("click", function () {
//     for (let i = 0; i < allUsers.length; i++) {
//         if (user_mail.value == allUsers[i].email && user_pass.value == allUsers[i].password) {
//             signInBtnElement.setAttribute('href', './homePage.html');
//             currentName = allUsers[i].fullName;
//             document.querySelector('.msg-Home').innerHTML = `Welcome ${currentName}`;
//         }
//         else {
//             document.querySelector('.sI-msg').classList.remove('d-none');
//         }
//     }
// });

// signUpBtnElement.addEventListener('click', function () {
//     if (fN_RegExp.test(fN_sU_Element.value.toLowerCase()) &&
//         ml_RegExp.test(emailAddressElement.value) &&
//         pW_RegExp.test(passWordElement.value) &&
//         confirmPassWordElement.value == passWordElement.value) {
//         signUpBtnElement.setAttribute('href', './index.html');
//         addNewUser();
//     }
//     else {
//         if (!fN_RegExp.test(fN_sU_Element.value.toLowerCase())) {
//             document.querySelector('.fN-re-msg').classList.remove('d-none');
//         }
//         else {
//             document.querySelector('.fN-re-msg').classList.add('d-none');
//         }

//         if (!ml_RegExp.test(emailAddressElement.value)) {
//             document.querySelector('.ml-re-msg').classList.remove('d-none');
//         }
//         else {
//             document.querySelector('.ml-re-msg').classList.add('d-none');
//         }

//         if (!pW_RegExp.test(passWordElement.value)) {
//             document.querySelector('.pW-re-msg').classList.remove('d-none');
//         }
//         else {
//             document.querySelector('.pW-re-msg').classList.add('d-none');
//             console.log(confirmPassWordElement.value, passWordElement.value);
//         }
//         if (confirmPassWordElement.value != passWordElement.value) {
//             document.querySelector('.pWc-re-msg').classList.remove('d-none');
//         }
//         else {
//             document.querySelector('.pWc-re-msg').classList.add('d-none');
//         }
//     }
// })
