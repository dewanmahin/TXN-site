document.getElementById('submit-btn').addEventListener('click', function(){
    // get user email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // get user password
    const passField = document.getElementById('user-pass');
    const userPass = passField.value;
    // Condition to redirect another html site with button click
    if(userEmail == 'email@gmail.com' && userPass == 'txnpassword'){
        window.location.href = 'bank.html';
    }
})