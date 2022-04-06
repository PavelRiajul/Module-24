document.getElementById('login-submit').addEventListener('click', function (){
    const emailField = document.getElementById('user-email')
    const userEmail = emailField.value
    console.log(userEmail)
    //password
    const passwordField = document.getElementById('user-password')
    const userPasswoed =passwordField.value
    console.log(userPasswoed)
})