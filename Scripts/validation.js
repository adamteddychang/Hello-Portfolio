const form = document.querySelector('#contact-form');
const warningtxt = document.querySelector('#warningtxt');

form.addEventListener('submit', (event) => {
  const emailstring = document.getElementById('email').value;

  if (emailstring !== emailstring.toLowerCase()) {
    warningtxt.innerHTML = 'Please fill out the email with lower case only, thank you.';
    event.preventDefault();
  }
});
