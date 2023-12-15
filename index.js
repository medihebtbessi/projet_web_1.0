document.addEventListener('DOMContentLoaded', function () {
    var form = document.querySelector('form');

    form.addEventListener('submit', function (event) {
        var firstNameInput = document.getElementById('first_name');
        if (!isValidName(firstNameInput.value)) {
            alert('Le prénom ne doit contenir que des lettres.');
            event.preventDefault();
            return;
        }

        var telephoneInput = document.getElementById('telephone');
        if (!isValidPhoneNumber(telephoneInput.value)) {
            alert('Le numéro de téléphone doit contenir exactement 8 chiffres.');
            event.preventDefault();
            return;
        }
    });

    function isValidName(name) {
      
        return /^[A-Za-z]+$/.test(name);
    }

    function isValidPhoneNumber(phoneNumber) {
        
        return /^\d{8}$/.test(phoneNumber);
    }
});
