function GenerateMyPassword(){

    event.preventDefault();
    function passwordGenerator(passwordLength,includelowerCase,includeupperCase,includeNumbers,includeSymbols){
        const lowerCaseChars = "abcdefghijklmnopqrstuvwxyz";
        const upperCaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        const numberChars = "012345678";
        const symbolCHars = "!@#$%^&*()_+-=<>/";

        let allowedChars="";
        let password="";
        if(passwordLength <=0){
            return '(Password length must be greater than 0)';
        }

        
        if(includelowerCase.checked){
            allowedChars += lowerCaseChars;
        }
        if(includeupperCase.checked){
            allowedChars += upperCaseChars;
        }
        if(includeNumbers.checked){
            allowedChars += numberChars;
        }
        if(includeSymbols.checked){
            allowedChars += symbolCHars;
        }
        else{
            allowedChars +='';
        }

        if(allowedChars.length == 0){
            return `(Select atleast one type...)`;
        }

        for(let i=0;i<passwordLength;i++){
            const randomNum = Math.floor(Math.random()*allowedChars.length);
            password+=allowedChars[randomNum];
        }


        return password;
    }

    let passwordLength = document.getElementById("inputNumber").value;
    passwordLength = Number(passwordLength);
    const includelowerCase = document.getElementById("lowerCase");
    const includeupperCase = document.getElementById("upperCase");
    const includeNumbers = document.getElementById("numbers");
    const includeSymbols = document.getElementById("symbols");

    const password = passwordGenerator(passwordLength,includelowerCase,includeupperCase,includeNumbers,includeSymbols);
    

    document.getElementById("myPassword").textContent = `Generated Password: ${password}`;
}