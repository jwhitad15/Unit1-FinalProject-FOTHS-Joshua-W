// const readline = require('readline-sync');


// function validator() {
//     let password;
//     const minLength = 8;
//     let hasUpperCase = false
//     let hasNumber = false;
//     do {
//         password = readline.question("Please enter your password:");


//         if (password === "" || password === null) {
//             alert("Password input cancelled.:");
//         }

//         if (password.length < minLength) {
//             alert("Invalid. Please check password requirements!");
//         }

//         hasNumber = /\d/.test(password);
//         hasUpperCase = /[A-Z]/.test(password);
//     } while (password.length < minLength || !hasNumber || !hasUpperCase);

//     if (password && password.length >= minLength && hasNumber){
//         return (isValid = true);
//     }
// }

// export default validator;