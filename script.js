document.getElementById('registrationForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;

    const registrationData = {
        name,
        email,
        phone
    };  

    // Store data in local storage
    localStorage.setItem('registrationData', JSON.stringify(registrationData));

    alert('Registration successful!');
    document.getElementById('registrationForm').reset();

});
