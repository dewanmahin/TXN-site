document.getElementById('login-submit').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    // redirect to another html file
    if(userEmail == 'bank@email.com' && userPass == 'secret'){
        window.location.href = 'bank.html'
    }else{
        alert('Enter valid Email & Password (Email: bank@email.com, Pass: secret)');
    }
})