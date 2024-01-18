document.querySelector('.next')
.addEventListener('click' , () =>{
   let button = document.querySelector('.next');
   let tag = document.querySelector('.tag');
   let u =document.querySelector('.u');
   let email = document.querySelector('.email');
   if(email.value !== ''){
       u.innerHTML = 'Send OTP'
       tag.remove();
       button.remove();
   }
   else{
       alert('Enter the Email');
   }
})
document.querySelector('.u')
.addEventListener('click' , () =>{
   let u = document.querySelector('.u');
   let email =document.querySelector('.email');
   let otp =document.querySelector('.otpSec');
   let passwordReset = document.querySelector('.passwordReset');
   u.remove();
   email.remove();
   let otpSec = `<h3 class="tag-1">Enter OTP</h3>
                 <input type="password" class="otp-1" placeholder="OTP">`
    passwordReset.classList.add('reset')
    otp.innerHTML = otpSec;
})
document.querySelector('.passwordReset')
.addEventListener('click' , () =>{
  let container = document.querySelector('.container');
  let container1 = document.querySelector('.container-1');
  let submit = document.querySelector('.submit');
  let otp1 =document.querySelector('.otp-1');
  let passSec = document.querySelector('.passwordSec');
  let passwordSec = `  <input  type="password" class="createdPassword" placeholder="Create password">
                       <input  type="password" class="confirmedPassword" placeholder="Confirm password">`
   if(otp1.value !== ''){
       container.remove();
       container1.classList.add('container-2');
       submit.classList.add('submitted');
       passSec.innerHTML = passwordSec;

   }
   else{
       alert('Enter the OTP sent to your email');
   }
})
document.querySelector('.submit')
.addEventListener('click' ,  () =>{
   let createdPassword = document.querySelector('.createdPassword');
   let confirmedPassword = document.querySelector('.confirmedPassword');

   if(createdPassword.value === confirmedPassword.value ){
       if(confirmedPassword.value !== ''){
           window.location.href = 'login.html';
       }
       else{
           alert('Enter the password');
       }
   }
   else{
       alert('Error');
       createdPassword.value = '';
       confirmedPassword.value = '';
   }
})