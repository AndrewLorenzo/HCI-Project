// addEventListener(jenis event, function yang akan dijalankan)
// Arrow Function
document.getElementById("contact").addEventListener("submit", (event) => 
    {
        // mencegah terjadinya refresh di page kita
        event.preventDefault();
    
        let firstNameField = document.getElementById("first-name");
        let lastNameField = document.getElementById("last-name");
        let emailField = document.getElementById("email");
        let genderField = document.getElementById("gender");
        let ageField = document.getElementById("age");
        let agreeBoxField = document.getElementById("terms");
        let phoneInput = document.getElementById("phone").value;
        let message = document.getElementById("messages").value;
        let firstName = firstNameField.value;
        let lastName = lastNameField.value
        let email = emailField.value;
        let gender = genderField.value;
        let Age = ageField.value;
        let agree = agreeBoxField.checked;
    
        if (firstName.length < 3) {
            alert("First name must be consist at least 3 characters");
            return;
        }
    
        if (email.indexOf('@') === -1 || email.indexOf('.') === -1){
            alert("Invalid email");
            return;
        }

        if (!isValidPhoneNumber(phoneInput) || phoneInput === '') {
            alert("Invalid phone number");
            return;
        } 

        if (Age === '') {
            alert("Age must be filled");
            return;
        }
    
        if (gender === '') {
            alert("Gender must be choosen");
            return;
        }

        if (message.length === 0) {
            alert("Critics and suggestions must be filled");
            return;
        }

        if (!agree) {
            alert("Terms and conditions must be agreed");
            return;
        }
    
        // new Date() = mengambil informasi date sekarang
        // new Date(tanggal dalam string) = mengambil informasi date dari string
        // let today = new Date();
        // let dobDate = new Date(dob);
        // let age = today.getFullYear() - dobDate.getFullYear();
        // let monthDiff = today.getMonth() - dobDate.getMonth();
        // if (monthDiff !== 0 || (today.getDate() - dobDate.getDate() !== 0)) age--;
        // if (age < 18) {
        //     alert("Age must be at least 18 years old");
        //     return;
        // }
    
    
        alert("Your critics and suggestions have been delivered");
        console.log("\n",firstName, "\n", lastName, "\n", email, "\n", gender, "\n", Age, "\n", message, "\n", agree);
        
        let form = document.getElementById('contact');
        let inputs = form.getElementsByTagName('input');
        // let area = form.getElementsByTagName('textarea');
        let area = document.getElementById("messages");
        let selects = form.getElementsByTagName('select');
        
        for (let i = 0; i < inputs.length; i++) {
            if (inputs[i]) {
                inputs[i].value = '';  // Clear the input field
                inputs[i].checked = false;
                area.value = '';
            }
        }

        for (let i = 0; i < selects.length; i++) {
            selects[i].selectedIndex = 0;  // Reset select to first option
        }
    });

function isValidPhoneNumber(phone) {
    let inputValue = phone;

    for (let char of inputValue) {
        if (char < '0' || char > '9') {
            return false;
        }
    }
    return true;
}   