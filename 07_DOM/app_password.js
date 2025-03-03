document.getElementById("generate-btn").addEventListener("click", function () {
    const length = parseInt(document.getElementById("length").value);
    const includeUppercase = document.getElementById("uppercase").checked;
    const includeLowercase = document.getElementById("lowercase").checked;
    const includeNumbers = document.getElementById("numbers").checked;
    const includeSymbols = document.getElementById("symbols").checked;
  
    const password = generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols);
    document.getElementById("password").value = password;
    updateStrengthIndicator(password);
  });
  
  document.getElementById("copy-btn").addEventListener("click", function () {
    const passwordField = document.getElementById("password");
    passwordField.select();
    document.execCommand("copy");
    alert("Contraseña copiada al portapapeles");
  });
  
  document.getElementById("length").addEventListener("input", function () {
    document.getElementById("length-value").textContent = this.value;
  });
  
  function generatePassword(length, includeUppercase, includeLowercase, includeNumbers, includeSymbols) {
    const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    const numberChars = "0123456789";
    const symbolChars = "!@#$%^&*()_+[]{}|;:,.<>?";
  
    let allowedChars = "";
    if (includeUppercase) allowedChars += uppercaseChars;
    if (includeLowercase) allowedChars += lowercaseChars;
    if (includeNumbers) allowedChars += numberChars;
    if (includeSymbols) allowedChars += symbolChars;
  
    let password = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * allowedChars.length);
      password += allowedChars[randomIndex];
    }
  
    return password;
  }
  
  function updateStrengthIndicator(password) {
    const strengthLevel = calculatePasswordStrength(password);
    const strengthText = document.querySelector(".strength-level span");
    const bars = document.querySelectorAll(".bar");
  
    // Actualizar el texto de fortaleza
    const strengthLabels = ["TOO WEAK", "WEAK", "MEDIUM", "STRONG"];
    strengthText.textContent = strengthLabels[strengthLevel - 1] || "TOO WEAK";
  
    // Actualizar las barras de fortaleza
    bars.forEach((bar, index) => {
      bar.style.backgroundColor = index < strengthLevel ? "#007bff" : "#444";
    });
  }
  
  function calculatePasswordStrength(password) {
    let strength = 0;
    if (password.length >= 8) strength++;
    if (/[A-Z]/.test(password)) strength++;
    if (/[0-9]/.test(password)) strength++;
    if (/[^A-Za-z0-9]/.test(password)) strength++;
  
    return strength;
  }