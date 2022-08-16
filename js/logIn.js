// Step-1: add click event handler with the submit button 
document.getElementById('btn-submit').addEventListener('click', function(){
    // Step-2: get the email address inside the email input field 
    // always remember to use .value to get text from an input field 
    const emailFiled = document.getElementById('user-email');
    const email = emailFiled.value;
    // step-3: get password
    // 3.A: set id on the html element 
    // 3.B: get the Element
    // 3.C: get the value from the element 
    const passwordFiled = document.getElementById('user-password');
    const password = passwordFiled.value;
    
    //Danger: Do not verify email password on the client site
    // Step-4: verify email and password and check whether valid user or not
    if(email === 'daddy@money.com' && password === 'baap'){
        console.log('valid user');
    }
    else{
        console.log('invalid user')
    }
})