function Val_fun()
    {

        
        const username = document.getElementById('username').value;
        console.log("name",username)
        const email = document.getElementById('email').value;
        console.log("email",email);
        const password = document.getElementById('password').value;
        console.log("passsword",password);
        const confirmPassword = document.getElementById('confirmPassword').value;
        console.log("confirmpassword",confirmPassword);
        const button=document.getElementById('btn');



 

       if (!username || !email || !password  || !confirmPassword )
      {
         alert('All fields are required.');
              return false;
      }
      

  if (password !== confirmPassword)
       {
        document.getElementById('confirmPassword').focus();
         alert('Passwords do not match.');
    
         return false;
     }
     


      else if (!validateEmail(email))
       {
        document.getElementById('email').focus();
         alert('Please enter a valid email address.');
         return false;
       }


   }
      function validateEmail(email) 
      {
      const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]     {1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(String(email).toLowerCase());
     }
    
