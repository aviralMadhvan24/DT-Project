document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("form1");
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMessage = document.getElementById("error-message");

  
    const validEmail = "aviralmadhvan@gmail.com";
    const validPassword = "2";

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 

        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        if (email === validEmail && password === validPassword) {
           
            window.location.href = "HOME.html"; 
        } else {
          
            errorMessage.style.display = "block";
            errorMessage.textContent = "Invalid username or password.";
        }
    });
});
